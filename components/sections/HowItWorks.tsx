import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";
import { HOW_IT_WORKS_CONTENT } from "@/constants/content";
import PackageJourney from "./how-it-works/PackageJourney";

/**
 * How it Works section — Server Component.
 * The interactive journey visual is extracted to PackageJourney (Client Component).
 */
export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="py-24 bg-[var(--bg)] scroll-mt-24">
      <RevealWrapper>
        <SectionHeader
          label={HOW_IT_WORKS_CONTENT.label}
          title={HOW_IT_WORKS_CONTENT.headline}
          description={HOW_IT_WORKS_CONTENT.subheadline}
        />
      </RevealWrapper>

      <RevealWrapper delay={1}>
        <PackageJourney />
      </RevealWrapper>

      <RevealWrapper delay={2}>
        <div className="flex justify-center mt-14">
          <Button variant="primary" size="lg" asChild>
            <Link href={HOW_IT_WORKS_CONTENT.href} target="_blank" rel="noopener noreferrer">
              {HOW_IT_WORKS_CONTENT.cta}
              <ArrowRightIcon size={16} />
            </Link>
          </Button>
        </div>
      </RevealWrapper>
    </Section>
  );
}
