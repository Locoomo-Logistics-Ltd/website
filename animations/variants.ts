
export const ANIMATION_DURATION = {
  fast: "150ms",
  base: "250ms",
  slow: "400ms",
  slower: "600ms",
  slowest: "800ms",
} as const;

export const ANIMATION_EASING = {
  smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// Stagger delays for lists/grids (used as CSS animation-delay)
export const STAGGER = {
  0: "0ms",
  1: "80ms",
  2: "160ms",
  3: "240ms",
  4: "320ms",
  5: "400ms",
} as const;

// Intersection Observer thresholds used in useReveal hook
export const REVEAL_CONFIG = {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px",
} as const;