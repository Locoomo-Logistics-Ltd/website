"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Loader2, LocateFixed, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FIND_STATION_CONTENT } from "@/constants/content";
import type { NodePage, PlaceSuggestion, PublicNode } from "@/lib/nodes";
import NodeCard from "./NodeCard";

const C = FIND_STATION_CONTENT;

type Mode =
  | { kind: "browse" }
  | { kind: "near"; place: PlaceSuggestion }
  | { kind: "text"; text: string };

type Status = "loading" | "ready" | "error";

const PAGE_SIZE = 12;

function buildQuery(mode: Mode, radiusKm: number, onlyAccepting: boolean, cursor?: string) {
  const p = new URLSearchParams();
  p.set("limit", String(PAGE_SIZE));
  if (mode.kind === "near") {
    p.set("near", `${mode.place.lat},${mode.place.lng}`);
    p.set("radiusKm", String(radiusKm));
    p.set("sort", "distance");
  } else if (mode.kind === "text") {
    p.set("q", mode.text);
  }
  if (onlyAccepting) p.set("acceptingParcels", "true");
  if (cursor) p.set("cursor", cursor);
  return p.toString();
}

export default function StationFinder() {
  const listId = useId();
  const inputId = useId();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [geocoderDown, setGeocoderDown] = useState(false);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const [mode, setMode] = useState<Mode>({ kind: "browse" });
  const [radiusKm, setRadiusKm] = useState<number>(C.defaultRadiusKm);
  const [onlyAccepting, setOnlyAccepting] = useState(false);

  const [items, setItems] = useState<PublicNode[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [loadingMore, setLoadingMore] = useState(false);

  const requestId = useRef(0);
  const typing = useRef(false);

  // ── Load results whenever the search, radius or filter changes ──────
  const load = useCallback(async () => {
    const id = ++requestId.current;
    setStatus("loading");
    try {
      const res = await fetch(`/api/nodes?${buildQuery(mode, radiusKm, onlyAccepting)}`);
      if (!res.ok) throw new Error(String(res.status));
      const page = (await res.json()) as NodePage;
      if (id !== requestId.current) return; // a newer search superseded this one
      setItems(page.items);
      setNextCursor(page.hasMore ? page.nextCursor : null);
      setStatus("ready");
    } catch {
      if (id !== requestId.current) return;
      setStatus("error");
    }
  }, [mode, radiusKm, onlyAccepting]);

  useEffect(() => {
    load();
  }, [load]);

  async function loadMore() {
    if (!nextCursor || loadingMore) return;
    const id = requestId.current;
    setLoadingMore(true);
    try {
      const res = await fetch(`/api/nodes?${buildQuery(mode, radiusKm, onlyAccepting, nextCursor)}`);
      if (!res.ok) throw new Error(String(res.status));
      const page = (await res.json()) as NodePage;
      if (id !== requestId.current) return;
      setItems((prev) => {
        const seen = new Set(prev.map((n) => n.id));
        return [...prev, ...page.items.filter((n) => !seen.has(n.id))];
      });
      setNextCursor(page.hasMore ? page.nextCursor : null);
    } catch {
      /* keep what we have; the button stays so the user can retry */
    } finally {
      setLoadingMore(false);
    }
  }

  // ── Live filter while typing ────────────────────────────────────────
  // Typing filters the station list by name / address / city (the API's
  // `q` search) after a short pause, before the user presses Search.
  // Picking a place suggestion or pressing Search switches to the
  // nearest-first lookup instead. Clearing the box goes back to browsing.
  useEffect(() => {
    if (!typing.current) return;
    const text = query.trim();
    const t = setTimeout(() => {
      // Search / a picked suggestion already took over: don't override it.
      if (!typing.current) return;
      if (text.length === 0) setMode({ kind: "browse" });
      else if (text.length >= 2) setMode({ kind: "text", text });
    }, 350);
    return () => clearTimeout(t);
  }, [query]);

  // ── Place suggestions (debounced) ───────────────────────────────────
  useEffect(() => {
    if (!typing.current) return;
    const text = query.trim();
    if (text.length < 3) {
      setSuggestions([]);
      return;
    }
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/geocode?text=${encodeURIComponent(text)}`, {
          signal: ctrl.signal,
        });
        if (res.status === 503) {
          setGeocoderDown(true);
          setSuggestions([]);
          return;
        }
        if (!res.ok) throw new Error();
        const data = (await res.json()) as { items: PlaceSuggestion[] };
        setSuggestions(data.items);
        setActiveIdx(-1);
      } catch {
        /* aborted or failed: suggestions just don't show */
      }
    }, 300);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [query]);

  // ── Actions ─────────────────────────────────────────────────────────
  function selectPlace(place: PlaceSuggestion) {
    typing.current = false;
    setQuery(place.label);
    setSuggestions([]);
    setActiveIdx(-1);
    setLocationError(null);
    setMode({ kind: "near", place });
  }

  async function submit() {
    const text = query.trim();
    setLocationError(null);

    if (!text) {
      setSuggestions([]);
      setMode({ kind: "browse" });
      return;
    }

    if (suggestions.length > 0) {
      selectPlace(suggestions[activeIdx >= 0 ? activeIdx : 0]);
      return;
    }

    // Pressed Search before the suggestions arrived: geocode now.
    if (!geocoderDown) {
      try {
        const res = await fetch(`/api/geocode?text=${encodeURIComponent(text)}`);
        if (res.status === 503) {
          setGeocoderDown(true);
        } else if (res.ok) {
          const data = (await res.json()) as { items: PlaceSuggestion[] };
          if (data.items.length > 0) {
            selectPlace(data.items[0]);
            return;
          }
        }
      } catch {
        /* fall through to text search */
      }
    }

    // No geocoder (or no match): search station name / address / city instead.
    typing.current = false;
    setSuggestions([]);
    setMode({ kind: "text", text });
  }

  function useMyLocation() {
    if (!("geolocation" in navigator)) {
      setLocationError("Your browser doesn't support location. Search an area instead.");
      return;
    }
    setLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        selectPlace({
          label: "your location",
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        setLocating(false);
        setLocationError("We couldn't get your location. Search an area instead.");
      },
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 300_000 },
    );
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" && suggestions.length) {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp" && suggestions.length) {
      e.preventDefault();
      setActiveIdx((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Escape") {
      setSuggestions([]);
      setActiveIdx(-1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      submit();
    }
  }

  const widerRadius = C.radiusOptions.find((r) => r > radiusKm);

  const title =
    mode.kind === "near"
      ? `${C.nearTitlePrefix} ${mode.place.label}`
      : mode.kind === "text"
        ? `${C.textTitlePrefix} “${mode.text}”`
        : C.browseTitle;

  return (
    <div>
      {/* ── Search bar ─────────────────────────────────────────────── */}
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="max-w-[760px] mx-auto"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <label htmlFor={inputId} className="sr-only">
              Search an area, street or landmark
            </label>
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
              aria-hidden="true"
            />
            <input
              id={inputId}
              type="text"
              inputMode="search"
              autoComplete="off"
              value={query}
              onChange={(e) => {
                typing.current = true;
                setQuery(e.target.value);
              }}
              onKeyDown={onKeyDown}
              placeholder={C.placeholder}
              role="combobox"
              aria-expanded={suggestions.length > 0}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={activeIdx >= 0 ? `${listId}-${activeIdx}` : undefined}
              className="w-full h-12 pl-11 pr-4 rounded-[12px] bg-[var(--bg-card)] border border-[var(--border-strong)] text-[15px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[rgba(0,108,223,0.25)]"
            />

            {suggestions.length > 0 && (
              <ul
                id={listId}
                role="listbox"
                className="absolute z-20 left-0 right-0 top-[calc(100%+6px)] bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-[12px] shadow-[var(--shadow)] overflow-hidden"
              >
                {suggestions.map((s, i) => (
                  <li
                    key={`${s.lat},${s.lng},${i}`}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={i === activeIdx}
                    onMouseDown={(e) => {
                      e.preventDefault(); // keep input focus until we've handled the pick
                      selectPlace(s);
                    }}
                    className={
                      "flex items-start gap-2.5 px-4 py-3 cursor-pointer text-[14px] text-[var(--text-primary)] " +
                      (i === activeIdx ? "bg-[var(--bg-subtle)]" : "hover:bg-[var(--bg-subtle)]")
                    }
                  >
                    <MapPin size={15} className="mt-[3px] shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button type="submit" size="lg" className="sm:w-auto">
            {C.searchCta}
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-4 text-[13.5px] text-[var(--text-secondary)]">
          <button
            type="button"
            onClick={useMyLocation}
            disabled={locating}
            className="inline-flex items-center gap-1.5 font-semibold text-[var(--brand-blue)] hover:underline underline-offset-4 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-[6px]"
          >
            {locating ? (
              <Loader2 size={15} className="animate-spin" aria-hidden="true" />
            ) : (
              <LocateFixed size={15} aria-hidden="true" />
            )}
            {C.useMyLocation}
          </button>

          <label className="inline-flex items-center gap-2">
            <span>{C.radiusLabel}</span>
            <select
              value={radiusKm}
              onChange={(e) => setRadiusKm(Number(e.target.value))}
              disabled={mode.kind !== "near"}
              className="h-9 rounded-[8px] bg-[var(--bg-card)] border border-[var(--border-strong)] px-2 text-[var(--text-primary)] disabled:opacity-50"
            >
              {C.radiusOptions.map((r) => (
                <option key={r} value={r}>
                  {r} km
                </option>
              ))}
            </select>
          </label>

          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyAccepting}
              onChange={(e) => setOnlyAccepting(e.target.checked)}
              className="w-4 h-4 accent-[var(--brand-blue)]"
            />
            <span>{C.onlyAcceptingLabel}</span>
          </label>
        </div>

        {locationError && (
          <p role="alert" className="mt-3 text-[13px] text-[var(--text-secondary)]">
            {locationError}
          </p>
        )}
      </form>

      {/* ── Results ────────────────────────────────────────────────── */}
      <div className="mt-12">
        <h3 className="font-display text-[18px] font-bold text-[var(--text-primary)] mb-1 break-words">
          {title}
        </h3>
        <p role="status" aria-live="polite" className="text-[13px] text-[var(--text-muted)] mb-6 min-h-[20px]">
          {status === "ready"
            ? `${items.length}${nextCursor ? "+" : ""} ${items.length === 1 ? "station" : "stations"}`
            : status === "loading"
              ? "Loading…"
              : ""}
        </p>

        {status === "loading" && items.length === 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-[190px] rounded-[16px] bg-[var(--bg-subtle)] border border-[var(--border)] animate-pulse"
              />
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="text-center bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] px-6 py-10">
            <p className="font-semibold text-[var(--text-primary)] mb-4">{C.error.title}</p>
            <Button onClick={load} variant="outline">
              {C.error.retry}
            </Button>
          </div>
        )}

        {status === "ready" && items.length === 0 && (
          <div className="text-center bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] px-6 py-12">
            <p className="font-display text-[17px] font-bold text-[var(--text-primary)] mb-2">
              {C.empty.title}
            </p>
            <p className="text-[14px] text-[var(--text-secondary)] max-w-[460px] mx-auto leading-[1.7] mb-6">
              {C.empty.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {mode.kind === "near" && widerRadius && (
                <Button variant="outline" onClick={() => setRadiusKm(widerRadius)}>
                  {C.empty.widen} ({widerRadius} km)
                </Button>
              )}
              <Button asChild>
                <Link href={C.empty.contactHref}>{C.empty.contactCta}</Link>
              </Button>
            </div>
          </div>
        )}

        {items.length > 0 && status !== "error" && (
          <div
            className={
              "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start transition-opacity " +
              (status === "loading" ? "opacity-60" : "opacity-100")
            }
          >
            {items.map((node) => (
              <NodeCard key={node.id} node={node} />
            ))}
          </div>
        )}

        {nextCursor && status === "ready" && (
          <div className="text-center mt-8">
            <Button variant="outline" onClick={loadMore} disabled={loadingMore}>
              {loadingMore && <Loader2 size={15} className="animate-spin" aria-hidden="true" />}
              {C.loadMore}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
