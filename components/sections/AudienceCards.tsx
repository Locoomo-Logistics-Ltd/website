import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { ArrowRightIcon } from "@/components/icons";
import { AUDIENCE_CONTENT } from "@/constants/content";

/**
 * "Join the Network" section — three audience cards.
 * Pickup Stations / Riders & Drivers / Businesses.
 */
export default function AudienceCards() {
  return (
    <Section id="pickup-stations" className="py-24 bg-[var(--bg)]">
      <RevealWrapper>
        <SectionHeader
          label={AUDIENCE_CONTENT.label}
          title={AUDIENCE_CONTENT.headline}
          description={AUDIENCE_CONTENT.subheadline}
        />
      </RevealWrapper>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {AUDIENCE_CONTENT.cards.map((card, i) => (
          <RevealWrapper key={card.id} delay={i as 0 | 1 | 2}>
            <article
              id={card.id}
              className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-[20px] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[var(--shadow-blue)] hover:border-[var(--border-strong)] group"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-blue-light))" }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[24px] mb-6"
                style={{
                  background: "rgba(0,108,223,0.08)",
                  border: "1px solid rgba(0,108,223,0.15)",
                }}
                aria-hidden="true"
              >
                {card.icon}
              </div>

              <h3 className="font-display text-[20px] font-bold text-[var(--text-primary)] mb-3">
                {card.title}
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] mb-5">
                {card.desc}
              </p>

              {/* Benefits */}
              <ul className="flex flex-col gap-2 mb-6 list-none" role="list">
                {card.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span
                      className="mt-[3px] w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(0,108,223,0.1)", border: "1px solid rgba(0,108,223,0.2)" }}
                      aria-hidden="true"
                    >
                      <span className="w-[6px] h-[6px] rounded-full bg-[var(--brand-blue)]" />
                    </span>
                    <span className="text-[13px] text-[var(--text-secondary)] leading-[1.5]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={card.href}
                className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-[var(--brand-blue)] transition-all duration-200 group-hover:gap-[10px]"
                aria-label={card.cta}
              >
                {card.cta}
                {/* <ArrowRightIcon size={14} /> */}
              </Link>
            </article>
          </RevealWrapper>
        ))}
      </div>
    </Section>
  );
}