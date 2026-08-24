"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the `prefers-reduced-motion` media query.
 * Every SMIL/CSS-driven logistics diagram gates its motion on this —
 * reduced-motion users get the static end-state, not a stripped tween.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
