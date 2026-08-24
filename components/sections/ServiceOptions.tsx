import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/components/icons/map";
import { Check } from "lucide-react";
import { SERVICE_OPTIONS_CONTENT } from "@/constants/content";

function isExternal(href: string) {
  return href.startsWith("http");
}

/**
 * "Choose how your package gets to you" — Pickup Station vs Doorstep/Express.
 * Makes explicit that Pickup Stations are a choice, not the only option.
 */
export default function ServiceOptions() {
  return (
    <Section id="services" className="py-24 bg-[var(--bg-subtle)]">
      <RevealWrapper>
        <SectionHeader
          label={SERVICE_OPTIONS_CONTENT.label}
          title={SERVICE_OPTIONS_CONTENT.headline}
          description={SERVICE_OPTIONS_CONTENT.subheadline}
        />
      </RevealWrapper>

      <div className="grid md:grid-cols-2 gap-6">
        {SERVICE_OPTIONS_CONTENT.options.map((option, i) => {
          const Icon = getIcon(option.icon);
          return (
            <RevealWrapper key={option.title} delay={i as 0 | 1}>
              <div className="h-full flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-[20px] p-8">
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6"
                  style={{ background: "rgba(0,108,223,0.08)", border: "1px solid rgba(0,108,223,0.15)" }}
                  aria-hidden="true"
                >
                  <Icon size={22} className="text-[var(--brand-blue)]" />
                </div>

                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--brand-blue)] mb-2">
                  {option.tagline}
                </p>
                <h3 className="font-display text-[22px] font-bold text-[var(--text-primary)] mb-3">
                  {option.title}
                </h3>
                <p className="text-[14.5px] text-[var(--text-secondary)] leading-[1.7] mb-6">
                  {option.desc}
                </p>

                <ul className="flex flex-col gap-[10px] mb-8 flex-1 list-none" role="list">
                  {option.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-[10px]">
                      <Check size={16} className="text-[var(--brand-blue)] mt-[2px] shrink-0" />
                      <span className="text-[13.5px] text-[var(--text-secondary)]">{b}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="default" asChild className="self-start">
                  {isExternal(option.href) ? (
                    <Link href={option.href} target="_blank" rel="noopener noreferrer">
                      {option.cta}
                    </Link>
                  ) : (
                    <a href={option.href}>{option.cta}</a>
                  )}
                </Button>
              </div>
            </RevealWrapper>
          );
        })}
      </div>
    </Section>
  );
}
