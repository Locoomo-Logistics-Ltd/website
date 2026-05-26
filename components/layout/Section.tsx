import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

/**
 * Base section wrapper.
 * Handles max-width, horizontal padding, and overflow.
 * Every page section should use this as its outermost container.
 */
export default function Section({
  id,
  className,
  innerClassName,
  children,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("w-full overflow-hidden", className)}
    >
      <div className={cn("max-w-[1120px] mx-auto px-6", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}