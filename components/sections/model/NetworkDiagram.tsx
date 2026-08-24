"use client";

import React from "react";
import { User, Bike, Home, Building2, Store } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const VIEWBOX = 340;
const CENTER = 170;

const SPOKES = [
  { key: "customer", x: 170, y: 38, icon: User, label: "Customer" },
  { key: "rider", x: 302, y: 170, icon: Bike, label: "Rider" },
  { key: "recipient", x: 170, y: 302, icon: Home, label: "Recipient" },
  { key: "business", x: 38, y: 170, icon: Building2, label: "Business" },
] as const;

const pct = (v: number) => `${(v / VIEWBOX) * 100}%`;

/** Hub-and-spoke network diagram for the Pickup Station Network section. */
export default function NetworkDiagram() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative w-full aspect-square" role="img" aria-label="Pickup Station connecting customers, riders, recipients, and businesses">
      <svg viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0050b3" />
            <stop offset="100%" stopColor="#3D93E0" />
          </linearGradient>
        </defs>

        <circle cx={CENTER} cy={CENTER} r="140" stroke="#006CDF" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
        <circle cx={CENTER} cy={CENTER} r="100" stroke="#006CDF" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />

        <line x1={CENTER} y1="120" x2="170" y2="55" stroke="#006CDF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
        <line x1="220" y1={CENTER} x2="285" y2={CENTER} stroke="#3D93E0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
        <line x1={CENTER} y1="220" x2="170" y2="285" stroke="#005CBE" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
        <line x1="120" y1={CENTER} x2="55" y2={CENTER} stroke="#006CDF" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />

        <circle cx={CENTER} cy={CENTER} r="50" fill="url(#hubGrad)" />
        {!reduced && (
          <circle cx={CENTER} cy={CENTER} r="50" fill="none" stroke="#3D93E0" strokeWidth="1.5" opacity="0.4">
            <animate attributeName="r" values="50;65" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0" dur="3s" repeatCount="indefinite" />
          </circle>
        )}

        {SPOKES.map((s) => (
          <circle key={s.key} cx={s.x} cy={s.y} r="22" fill="var(--bg-card, #EDF3FB)" stroke="#006CDF" strokeWidth="1.5" />
        ))}

        {!reduced && (
          <>
            <path id="netTop" d="M 170 55 L 170 120" opacity="0" />
            <path id="netRight" d="M 285 170 L 220 170" opacity="0" />
            <circle r="4" fill="#006CDF" opacity="0.8">
              <animateMotion dur="2s" repeatCount="indefinite">
                <mpath href="#netTop" />
              </animateMotion>
            </circle>
            <circle r="3.5" fill="#3D93E0" opacity="0.8">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s">
                <mpath href="#netRight" />
              </animateMotion>
            </circle>
          </>
        )}
      </svg>

      {/* Hub icon */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1" style={{ left: pct(CENTER), top: pct(CENTER) }}>
        <Store size={26} className="text-white" strokeWidth={2.25} />
        <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-white text-center leading-tight">
          Pickup
          <br />
          Station
        </span>
      </div>

      {SPOKES.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.key}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
            style={{ left: pct(s.x), top: pct(s.y) }}
          >
            <Icon size={16} className="text-[var(--brand-blue)]" strokeWidth={2.25} />
            <span className="text-[7px] font-semibold uppercase tracking-[0.08em] text-[var(--brand-blue)] whitespace-nowrap">
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
