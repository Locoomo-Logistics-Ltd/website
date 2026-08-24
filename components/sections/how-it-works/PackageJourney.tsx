"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Package } from "lucide-react";
import { getIcon } from "@/components/icons/map";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { HOW_IT_WORKS_CONTENT } from "@/constants/content";

const STEPS = HOW_IT_WORKS_CONTENT.steps;
const STATES = HOW_IT_WORKS_CONTENT.journeyStates;
const AUTO_ADVANCE_MS = 3200;

/**
 * Step-driven package journey: Booked → Moving → At Pickup Station →
 * Ready for Collection → Delivered. Auto-advances on a timer (paused by
 * manual interaction and disabled entirely under prefers-reduced-motion,
 * where the marker still jumps on click but never animates on its own).
 */
export default function PackageJourney() {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduced) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % STEPS.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduced]);

  const select = (i: number) => {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    if (!reduced) {
      timerRef.current = setInterval(() => {
        setActive((v) => (v + 1) % STEPS.length);
      }, AUTO_ADVANCE_MS);
    }
  };

  return (
    <div>
      {/* Visual track */}
      <div className="relative mb-14 px-[22px]">
        <div className="absolute left-[22px] right-[22px] top-1/2 -translate-y-1/2 h-[2px] bg-[var(--border)]" />
        <div
          className="absolute left-[22px] top-1/2 -translate-y-1/2 h-[2px] bg-[var(--brand-blue)]"
          style={{
            width: `${(active / (STEPS.length - 1)) * 100}%`,
            maxWidth: "calc(100% - 44px)",
            transition: reduced ? "none" : "width 0.5s ease",
          }}
        />

        <div className="relative flex justify-between">
          {STEPS.map((step, i) => {
            const StepIcon = getIcon(step.icon);
            const reached = i <= active;
            return (
              <button
                key={step.title}
                onClick={() => select(i)}
                aria-current={i === active}
                aria-label={`${step.title}: ${STATES[i]}`}
                className="relative flex flex-col items-center gap-2 group"
              >
                <span
                  className={cn(
                    "w-11 h-11 rounded-full flex items-center justify-center border-2",
                    reached
                      ? "bg-[var(--brand-blue)] border-[var(--brand-blue)] text-white"
                      : "bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-muted)]"
                  )}
                  style={{ transition: reduced ? "none" : "background-color 0.3s ease, border-color 0.3s ease" }}
                >
                  <StepIcon size={18} />
                </span>
                <span
                  className={cn(
                    "hidden sm:block text-[10.5px] font-semibold whitespace-nowrap",
                    i === active ? "text-[var(--brand-blue)]" : "text-[var(--text-muted)]"
                  )}
                >
                  {STATES[i]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Traveling package marker */}
        <div
          className="absolute -top-8 flex flex-col items-center gap-1"
          style={{
            left: `${(active / (STEPS.length - 1)) * 100}%`,
            transform: "translateX(-50%)",
            transition: reduced ? "none" : "left 0.5s ease",
          }}
          aria-hidden="true"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--bg-card)] shadow-[var(--shadow-blue)] border border-[var(--border-strong)]">
            <Package size={14} className="text-[var(--brand-blue)]" />
          </span>
        </div>
      </div>

      {/* Step list */}
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 list-none" aria-label="Delivery steps">
        {STEPS.map((step, i) => (
          <li key={step.title}>
            <button
              onClick={() => select(i)}
              className={cn(
                "w-full text-left p-5 rounded-[14px] border transition-all duration-200",
                i === active
                  ? "bg-[var(--bg-card)] border-[var(--brand-blue)] shadow-[var(--shadow)]"
                  : "bg-transparent border-[var(--border)] hover:border-[var(--border-strong)]"
              )}
            >
              <span className="font-display text-[12px] font-bold text-[var(--brand-blue)]">{step.step}</span>
              <h3 className="font-semibold text-[15px] text-[var(--text-primary)] mt-1 mb-[6px]">
                {step.title}
              </h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-[1.6]">{step.desc}</p>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
