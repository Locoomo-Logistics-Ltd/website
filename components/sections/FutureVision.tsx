import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { VISION_CONTENT } from "@/constants/content";

export default function FutureVision() {
  return (
    <section
      id="vision"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--brand-navy)" }}
      aria-labelledby="vision-heading"
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,108,223,0.2) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(61,147,224,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(61,147,224,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <RevealWrapper>
          <SectionLabel className="mb-5 text-[var(--brand-blue-light)] bg-[rgba(61,147,224,0.12)] border-[rgba(61,147,224,0.25)]">
            {VISION_CONTENT.label}
          </SectionLabel>
          <h2
            id="vision-heading"
            className="font-display text-[clamp(28px,4vw,48px)] font-extrabold text-white mb-6 max-w-[700px] leading-[1.1] tracking-[-0.02em]"
          >
            {VISION_CONTENT.headline}{" "}
            <span className="text-[var(--brand-blue-light)]">
              {VISION_CONTENT.headlineAccent}
            </span>
          </h2>
          <p className="text-[16px] text-white/65 leading-[1.8] max-w-[600px] mb-12">
            {VISION_CONTENT.body}
          </p>
        </RevealWrapper>

        {/* Pillars grid */}
        <RevealWrapper delay={1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VISION_CONTENT.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white/[0.04] border border-white/[0.08] rounded-[16px] p-6 transition-all duration-200 hover:bg-[rgba(0,108,223,0.1)] hover:border-[rgba(61,147,224,0.3)]"
              >
                <div className="text-[28px] mb-3" aria-hidden="true">{pillar.icon}</div>
                <h3 className="text-[15px] font-semibold text-white/90 mb-[6px]">
                  {pillar.title}
                </h3>
                <p className="text-[13px] text-white/45 leading-[1.6]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* Caption */}
        <RevealWrapper delay={2}>
          <p className="mt-12 text-[14px] text-white/40 italic">{VISION_CONTENT.caption}</p>
        </RevealWrapper>
      </div>
    </section>
  );
}