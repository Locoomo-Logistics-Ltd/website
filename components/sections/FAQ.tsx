import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { FAQ_CONTENT } from "@/constants/content";
import { CONTACT_EMAIL } from "@/constants/brand";

/**
 * FAQ section — two-column layout.
 * Left: section heading + contact prompt.
 * Right: accordion list (AccordionItem is a Client Component for interactivity).
 */
export default function FAQ() {
  return (
    <Section id="faq" className="py-24 bg-[var(--bg)]">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Copy */}
        <RevealWrapper>
          <SectionLabel className="mb-5">{FAQ_CONTENT.label}</SectionLabel>
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)] mb-4">
            {FAQ_CONTENT.headline}
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] mb-6">
            {FAQ_CONTENT.subheadline}
          </p>
          <p className="text-[15px] text-[var(--text-secondary)]">
            Still have questions?{" "}
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[var(--brand-blue)] underline underline-offset-2 hover:no-underline"
            >
              {CONTACT_EMAIL}
            </Link>
          </p>
        </RevealWrapper>

        {/* Right: Accordion */}
        <RevealWrapper delay={1}>
          <div className="flex flex-col gap-2" role="list" aria-label="Frequently asked questions">
            {FAQ_CONTENT.items.map((item, i) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </Section>
  );
}