"use client";

import React from "react";
import { User, Store, Bike, Home, Package } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const VIEWBOX = 480;

// Sender → Pickup Station → Rider → Pickup Station → Recipient
const NODES = [
  { key: "sender", x: 64, y: 116, r: 26, icon: User, label: "Sender", hub: false },
  { key: "station1", x: 172, y: 196, r: 34, icon: Store, label: "Pickup Station", hub: true },
  { key: "rider", x: 272, y: 142, r: 24, icon: Bike, label: "Rider", hub: false },
  { key: "station2", x: 336, y: 258, r: 34, icon: Store, label: "Pickup Station", hub: true },
  { key: "recipient", x: 416, y: 340, r: 26, icon: Home, label: "Recipient", hub: false },
] as const;

const ROUTE_PATH =
  "M 64 116 Q 118 158 172 196 Q 222 176 272 142 Q 304 196 336 258 Q 376 300 416 340";

const pct = (v: number) => `${(v / VIEWBOX) * 100}%`;

/**
 * Hero network animation: a package travels sender → Pickup Station → rider
 * → Pickup Station → recipient. Background routes/motion live in SVG;
 * node icons are real lucide-react components overlaid as positioned divs
 * at the same coordinates (SVG text/emoji glyphs aren't real icons).
 */
export default function HeroFlowDiagram() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className="relative w-full max-w-[480px] aspect-square"
      role="img"
      aria-label="A package moving from sender to Pickup Station, to rider, to Pickup Station, to recipient"
    >
      <svg
        viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="heroBgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#006CDF" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#006CDF" stopOpacity="0" />
          </radialGradient>
          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={VIEWBOX / 2} cy={VIEWBOX / 2} r={200} fill="url(#heroBgGrad)" />

        <path id="heroRoute" d={ROUTE_PATH} stroke="#006CDF" strokeWidth="2" strokeDasharray="6 5" opacity="0.4" />

        {NODES.map((n) => (
          <circle
            key={n.key}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.hub ? "#006CDF" : "var(--bg-card, #EDF3FB)"}
            stroke={n.hub ? "#3D93E0" : "#006CDF"}
            strokeWidth={n.hub ? 2 : 1.5}
          />
        ))}

        {!reduced &&
          NODES.filter((n) => n.hub).map((n) => (
            <circle key={`pulse-${n.key}`} cx={n.x} cy={n.y} r={n.r} fill="none" stroke="#006CDF" strokeWidth="1" opacity="0">
              <animate attributeName="r" values={`${n.r};${n.r + 18}`} dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0" dur="2.4s" repeatCount="indefinite" />
            </circle>
          ))}

        {!reduced && (
          <circle r="5" fill="#006CDF" filter="url(#heroGlow)">
            <animateMotion dur="6s" repeatCount="indefinite">
              <mpath href="#heroRoute" />
            </animateMotion>
          </circle>
        )}
        {reduced && <circle cx={NODES[2].x} cy={NODES[2].y} r="5" fill="#006CDF" />}
      </svg>

      {NODES.map((n) => {
        const Icon = n.icon;
        return (
          <div
            key={n.key}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
            style={{ left: pct(n.x), top: pct(n.y) }}
          >
            <Icon
              size={n.hub ? 20 : 16}
              strokeWidth={2.25}
              className={n.hub ? "text-white" : "text-[var(--brand-blue)]"}
            />
            <span
              className="font-semibold uppercase tracking-[0.08em] whitespace-nowrap"
              style={{ color: n.hub ? "#ffffff" : "var(--text-muted)", fontSize: n.hub ? "6px" : "7px" }}
            >
              {n.label}
            </span>
          </div>
        );
      })}

      {/* Package glyph badge, purely decorative */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--shadow)]">
        <Package size={13} className="text-[var(--brand-blue)]" />
        <span className="text-[9px] font-semibold text-[var(--text-muted)]">Live network</span>
      </div>
    </div>
  );
}
