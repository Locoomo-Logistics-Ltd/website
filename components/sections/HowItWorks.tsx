import React from "react";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { HOW_IT_WORKS_CONTENT } from "@/constants/content";
import HowItWorksTabs from "./how-it-works/HowItWorksTabs";


/**
 * How it Works section — Server Component.
 * Interactive tabs are extracted to HowItWorksTabs (Client Component).
 */
export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="py-24 bg-[var(--bg)]">
      <RevealWrapper>
        <SectionHeader
          label={HOW_IT_WORKS_CONTENT.label}
          title={HOW_IT_WORKS_CONTENT.headline}
          description={HOW_IT_WORKS_CONTENT.subheadline}
        />
      </RevealWrapper>

      <RevealWrapper delay={1}>
        <HowItWorksTabs />
      </RevealWrapper>
    </Section>
  );
}