import React from "react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

/**
 * Consistent section heading block: label + title + optional description.
 * Handles both centered (default) and left-aligned variants.
 */
export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center max-w-[640px] mx-auto" : "text-left",
        className
      )}
    >
      {label && <SectionLabel className="mb-5">{label}</SectionLabel>}
      <h2
        className={cn(
          "font-display text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] mb-4",
          "text-[var(--text-primary)]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-[17px] text-[var(--text-secondary)] leading-[1.7]">
          {description}
        </p>
      )}
    </div>
  );
}