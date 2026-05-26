"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: React.ElementType;
}

const DELAY_MAP: Record<number, string> = {
  0: "0ms",
  1: "100ms",
  2: "200ms",
  3: "300ms",
  4: "400ms",
};

/**
 * Wraps children in a scroll-triggered fade-up reveal.
 * Uses useReveal hook internally.
 *
 * @example
 * <RevealWrapper delay={1}>
 *   <MyCard />
 * </RevealWrapper>
 */
export function RevealWrapper({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealWrapperProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${DELAY_MAP[delay]}, transform 0.7s ease ${DELAY_MAP[delay]}`,
      }}
    >
      {children}
    </Tag>
  );
}