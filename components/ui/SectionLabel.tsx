import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small pill-shaped label used above section titles.
 * Renders in brand blue with subtle background.
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] font-semibold tracking-[0.12em] uppercase",
        "text-[var(--brand-blue)] bg-[rgba(0,108,223,0.08)]",
        "px-[14px] py-[6px] rounded-full",
        "border border-[rgba(0,108,223,0.15)]",
        className
      )}
    >
      {children}
    </span>
  );
}