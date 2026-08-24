import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { ArrowRightIcon } from "@/components/icons";
import { getIcon } from "@/components/icons/map";
import { WHAT_CAN_I_DO_CONTENT } from "@/constants/content";

function isExternal(href: string) {
  return href.startsWith("http");
}

/**
 * "What can I do with Locoomo?" — the section that makes the product feel
 * operational, not aspirational. Sits directly under the hero.
 */
export default function WhatCanIDo() {
  return (
    <Section id="what-you-can-do" className="py-24 bg-[var(--bg)]">
      <RevealWrapper>
        <SectionHeader
          label={WHAT_CAN_I_DO_CONTENT.label}
          title={WHAT_CAN_I_DO_CONTENT.headline}
          description={WHAT_CAN_I_DO_CONTENT.subheadline}
        />
      </RevealWrapper>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHAT_CAN_I_DO_CONTENT.actions.map((action, i) => {
          const Icon = getIcon(action.icon);
          return (
            <RevealWrapper key={action.title} delay={(i % 3) as 0 | 1 | 2}>
              <Link
                href={action.href}
                target={isExternal(action.href) ? "_blank" : undefined}
                rel={isExternal(action.href) ? "noopener noreferrer" : undefined}
                className="group flex flex-col h-full bg-[var(--bg-card)] border border-[var(--border)] rounded-[18px] p-7 transition-all duration-300 hover:-translate-y-[4px] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-blue)]"
              >
                <div
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,108,223,0.08)", border: "1px solid rgba(0,108,223,0.15)" }}
                  aria-hidden="true"
                >
                  <Icon size={20} className="text-[var(--brand-blue)]" />
                </div>
                <h3 className="font-display text-[17px] font-bold text-[var(--text-primary)] mb-2">
                  {action.title}
                </h3>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-[1.6] mb-6 flex-1">
                  {action.desc}
                </p>
                <span className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-[var(--brand-blue)] transition-all duration-200 group-hover:gap-[10px]">
                  {action.cta}
                  <ArrowRightIcon size={14} />
                </span>
              </Link>
            </RevealWrapper>
          );
        })}
      </div>
    </Section>
  );
}
