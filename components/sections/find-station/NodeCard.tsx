"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown, Clock, MapPin, Navigation, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { FIND_STATION_CONTENT } from "@/constants/content";
import { directionsUrl, formatDistance, type PublicNode } from "@/lib/nodes";
import {
  DAY_LABEL,
  WEEK,
  formatRanges,
  getLagosToday,
  getOpenStatus,
} from "@/lib/opening-hours";

const { card: C } = FIND_STATION_CONTENT;

/**
 * One Pickup Station. The summary (name, distance, address, open/closed,
 * space) is always visible; "View details" expands the weekly hours and the
 * actions. Colours come from theme variables only, so it works in both themes.
 */
export default function NodeCard({ node }: { node: PublicNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const distance = formatDistance(node.distanceKm);
  const status = getOpenStatus(node.openingHours);
  const today = getLagosToday();

  return (
    <article className="flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-5 transition-colors duration-200 hover:border-[var(--brand-blue-light)]">
      <div className="flex items-start gap-3">
        <span
          className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
          style={{ background: "rgba(0,108,223,0.08)" }}
          aria-hidden="true"
        >
          <Store size={18} className="text-[var(--brand-blue)]" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[16px] font-bold text-[var(--text-primary)] leading-snug break-words">
            {node.name}
          </h3>
          {distance && (
            <p className="text-[13px] font-medium text-[var(--brand-blue)] mt-0.5">{distance}</p>
          )}
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold border",
            node.acceptingParcels
              ? "text-[var(--brand-blue)] border-[var(--border-strong)] bg-[rgba(0,108,223,0.06)]"
              : "text-[var(--text-muted)] border-[var(--border)] bg-[var(--bg-subtle)]",
          )}
        >
          {node.acceptingParcels ? C.accepting : C.full}
        </span>
      </div>

      <p className="flex items-start gap-2 text-[13.5px] text-[var(--text-secondary)] leading-[1.6] mt-4">
        <MapPin size={15} className="mt-[3px] shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
        <span>{node.address}</span>
      </p>

      <p className="flex items-center gap-2 text-[13.5px] mt-2">
        <Clock size={15} className="shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
        <span
          className={cn(
            status.state === "open"
              ? "text-[var(--text-primary)] font-medium"
              : "text-[var(--text-secondary)]",
          )}
        >
          {status.label}
        </span>
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-semibold text-[var(--brand-blue)] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded-[6px]"
      >
        {open ? C.hideDetails : C.details}
        <ChevronDown
          size={15}
          className={cn("transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div id={panelId} className="mt-4 pt-4 border-t border-[var(--border)]">
          <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--text-muted)] mb-3">
            {C.hoursTitle}
          </h4>
          {node.openingHours ? (
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[13px]">
              {WEEK.map((day) => (
                <React.Fragment key={day}>
                  <dt
                    className={cn(
                      "text-[var(--text-secondary)]",
                      day === today && "font-semibold text-[var(--text-primary)]",
                    )}
                  >
                    {DAY_LABEL[day]}
                  </dt>
                  <dd
                    className={cn(
                      "text-right text-[var(--text-secondary)]",
                      day === today && "font-semibold text-[var(--text-primary)]",
                    )}
                  >
                    {formatRanges(node.openingHours?.[day])}
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          ) : (
            <p className="text-[13px] text-[var(--text-secondary)]">Hours not listed.</p>
          )}

          <p className="text-[12px] text-[var(--text-muted)] mt-3">
            {node.city}, {node.state}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button asChild size="sm" className="flex-1">
              <Link href={C.sendHereHref} target="_blank" rel="noopener noreferrer">
                {C.sendHere}
                <ArrowRightIcon size={14} />
              </Link>
            </Button>
            <Button asChild size="sm" variant="ghost" className="flex-1">
              <a href={directionsUrl(node)} target="_blank" rel="noopener noreferrer">
                <Navigation size={14} aria-hidden="true" />
                {C.directions}
              </a>
            </Button>
          </div>
        </div>
      )}
    </article>
  );
}
