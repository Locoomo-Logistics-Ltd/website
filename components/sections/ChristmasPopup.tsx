"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Gift, X } from "lucide-react";
import { ArrowRightIcon } from "@/components/icons";
import { CHRISTMAS_PROMO_CONTENT as C } from "@/constants/content";

const SESSION_KEY = "locoomo-christmas-popup-seen";
const OPEN_DELAY_MS = 1200;

/**
 * Christmas Shopping Fund popup. Opens shortly after the page loads (once per
 * browser session) and the whole card links to the promo site. After it's
 * closed, a small floating "Christmas Fund" pill stays on screen so the offer is
 * always one tap away. Hidden entirely when `CHRISTMAS_PROMO_CONTENT.enabled`
 * is false.
 */
export default function ChristmasPopup() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false); // client-mounted; avoids SSR/hydration flashes
  const dialogRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const markSeen = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* private mode: popup just shows again next visit */
    }
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    markSeen();
    lastFocused.current?.focus?.();
  }, [markSeen]);

  // Mount + decide whether to auto-open.
  useEffect(() => {
    if (!C.enabled) return;
    setReady(true);

    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (seen) return;

    const t = setTimeout(() => {
      lastFocused.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // While open: lock scroll, focus the card, Esc closes, Tab stays inside.
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    linkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!C.enabled || !ready) return null;

  const P = C.popup;

  return (
    <>
      {/* ── Popup ─────────────────────────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: "rgba(0, 14, 46, 0.65)", backdropFilter: "blur(3px)" }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close(); // click on the backdrop
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="christmas-popup-title"
            className="relative w-full max-w-[440px] rounded-[24px] overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, var(--brand-blue-dark) 0%, var(--brand-blue) 55%, var(--brand-blue-light) 100%)",
              boxShadow: "0 24px 90px rgba(0, 14, 46, 0.55)",
              animation: "fade-up 0.45s ease both",
            }}
          >
            <div
              className="absolute -top-[110px] -right-[110px] w-[340px] h-[340px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 60%)" }}
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={close}
              aria-label={P.close}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-white/15 text-white hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {/* The whole card is the link. */}
            <a
              ref={linkRef}
              href={C.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // The promo opens in a new tab; close this one so it's not
                // still sitting open when the visitor comes back.
                setOpen(false);
                markSeen();
              }}
              className="relative z-10 block px-7 py-9 sm:px-9 sm:py-11 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase bg-white/15 border border-white/25 rounded-full px-3 py-1.5 mb-5">
                <Gift size={13} aria-hidden="true" />
                {C.label} · {P.badge}
              </span>

              <h2
                id="christmas-popup-title"
                className="font-display text-[clamp(26px,6vw,32px)] font-extrabold leading-[1.12] tracking-[-0.02em] mb-4"
              >
                {P.title}
              </h2>
              <p className="text-[14.5px] text-white/80 leading-[1.65] mb-6">{P.body}</p>

              <ul className="flex flex-wrap gap-2 list-none mb-7" role="list">
                {C.tiers.map((t) => (
                  <li
                    key={t.who}
                    className="rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-[13px]"
                  >
                    <span className="text-white/75">{t.who}:</span>{" "}
                    <strong className="font-semibold">{t.amount}</strong>
                  </li>
                ))}
              </ul>

              <span className="flex items-center justify-center gap-2 h-12 rounded-[12px] bg-white text-[var(--brand-blue)] text-[15px] font-semibold">
                {P.cta}
                <ArrowRightIcon size={16} />
              </span>
              <span className="block text-center text-[12px] text-white/65 mt-4">{P.fineprint}</span>
            </a>
          </div>
        </div>
      )}

      {/* ── Reminder pill (after the popup is closed) ─────────────── */}
      {!open && (
        <a
          href={C.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={P.pillLabel}
          className="fixed z-40 left-4 bottom-[88px] lg:left-6 lg:bottom-6 inline-flex items-center gap-2 h-11 pl-3.5 pr-4 rounded-full text-white text-[13.5px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
          style={{
            background: "linear-gradient(135deg, var(--brand-blue-dark), var(--brand-blue))",
            boxShadow: "0 8px 28px rgba(0, 108, 223, 0.45)",
          }}
        >
          <span className="relative flex">
            <Gift size={17} aria-hidden="true" />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping"
              aria-hidden="true"
            />
          </span>
          {P.pill}
        </a>
      )}
    </>
  );
}
