import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";
import { FINAL_CTA_CONTENT } from "@/constants/content";

/**
 * Closing section of the sales journey — the conclusion, not another pitch.
 */
export default function FinalCTA() {
  return (
    <Section id="get-started" className="py-16 bg-[var(--bg-subtle)]">
      <RevealWrapper>
        <div
          className="relative rounded-[24px] overflow-hidden px-6 py-16 sm:px-10 lg:px-16 text-center"
          style={{
            background: "linear-gradient(135deg, #0050b3 0%, #006CDF 50%, #3D93E0 100%)",
            boxShadow: "0 20px 80px rgba(0,108,223,0.4)",
          }}
        >
          <div
            className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-[120px] -left-[120px] w-[380px] h-[380px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[560px] mx-auto">
            <h2 className="font-display text-[clamp(26px,4vw,44px)] font-extrabold text-white mb-4 leading-[1.15] tracking-[-0.02em]">
              {FINAL_CTA_CONTENT.headline}
            </h2>
            <p className="text-[15.5px] text-white/75 leading-[1.7] mb-9">
              {FINAL_CTA_CONTENT.body}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="white" size="lg" asChild>
                <Link href={FINAL_CTA_CONTENT.primaryHref} target="_blank" rel="noopener noreferrer">
                  {FINAL_CTA_CONTENT.primaryCta}
                  <ArrowRightIcon size={16} />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 shadow-none hover:translate-y-0"
              >
                <a href={FINAL_CTA_CONTENT.secondaryHref}>{FINAL_CTA_CONTENT.secondaryCta}</a>
              </Button>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </Section>
  );
}
