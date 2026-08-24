import React from "react";
import Section from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { getIcon } from "@/components/icons/map";
import { WHY_LOCOOMO_CONTENT } from "@/constants/content";

export default function WhyLocoomo() {
  return (
    <Section id="why-locoomo" className="py-24 bg-[var(--bg-subtle)] relative">
      {/* Top/bottom accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-blue), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-blue), transparent)" }}
        aria-hidden="true"
      />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Copy */}
        <RevealWrapper>
          <SectionLabel className="mb-5">{WHY_LOCOOMO_CONTENT.label}</SectionLabel>
          <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] mb-6 text-[var(--text-primary)]">
            {WHY_LOCOOMO_CONTENT.headline}
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75] mb-4">
            {WHY_LOCOOMO_CONTENT.body1}
          </p>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75] mb-8">
            {WHY_LOCOOMO_CONTENT.body2}
          </p>
          {/* Solution card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] border-l-[3px] border-l-[var(--brand-blue)] rounded-[16px] p-6 shadow-[var(--shadow)]">
            <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7]">
              <strong className="text-[var(--text-primary)]">
                {WHY_LOCOOMO_CONTENT.solutionLabel}
              </strong>{" "}
              {WHY_LOCOOMO_CONTENT.solution}
            </p>
          </div>
        </RevealWrapper>

        {/* Right: Outcomes */}
        <RevealWrapper delay={2}>
          <ul className="grid sm:grid-cols-2 gap-4 list-none" role="list">
            {WHY_LOCOOMO_CONTENT.outcomes.map((outcome) => {
              const Icon = getIcon(outcome.icon);
              return (
                <li
                  key={outcome.title}
                  className="flex items-start gap-[14px] bg-[var(--bg-card)] border border-[var(--border)] rounded-[14px] p-[18px_20px] transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow)]"
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,108,223,0.08)" }}
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-[var(--brand-blue)]" />
                  </div>
                  <div>
                    <strong className="block text-[14px] font-semibold text-[var(--text-primary)] mb-1">
                      {outcome.title}
                    </strong>
                    <span className="text-[13px] text-[var(--text-muted)] leading-[1.6]">
                      {outcome.desc}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </RevealWrapper>
      </div>
    </Section>
  );
}
