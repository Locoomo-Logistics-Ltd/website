"use client";

import { useEffect, useRef, useState } from "react";
import { REVEAL_CONFIG } from "@/animations/variants";

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Attaches an IntersectionObserver to a ref.
 * Returns `visible` boolean and the ref to attach to your element.
 *
 * @example
 * const { ref, visible } = useReveal();
 * <div ref={ref} className={visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} />
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
) {
  const {
    threshold = REVEAL_CONFIG.threshold,
    rootMargin = REVEAL_CONFIG.rootMargin,
    once = true,
  } = options;

  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}