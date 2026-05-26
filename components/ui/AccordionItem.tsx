"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
// import { ChevronDownIcon } from "@/components/icons";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

/**
 * Single self-contained accordion item.
 * Animates open/close via maxHeight transition.
 * Used inside FAQ section's <Accordion> list.
 */
export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "rounded-[14px] overflow-hidden",
        "bg-[var(--bg-card)] border border-[var(--border)]",
        "transition-colors duration-200",
        open && "border-[rgba(0,108,223,0.3)]"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={cn(
          "w-full flex items-center justify-between gap-4",
          "px-5 py-[18px] text-left",
          "text-[15px] font-semibold text-[var(--text-primary)]",
          "transition-colors duration-200",
          "hover:bg-[var(--bg-subtle)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-inset"
        )}
      >
        <span>{question}</span>
        {/* <ChevronDownIcon */}
          size={20}
          className={cn(
            "shrink-0 text-[var(--text-muted)] transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        ref={bodyRef}
        style={{
          maxHeight: open ? (bodyRef.current?.scrollHeight ?? 300) + "px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
        aria-hidden={!open}
      >
        <p className="px-5 pb-[18px] text-[14px] text-[var(--text-secondary)] leading-[1.7]">
          {answer}
        </p>
      </div>
    </div>
  );
}