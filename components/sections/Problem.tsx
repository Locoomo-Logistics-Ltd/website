import React from "react";
import Section from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { PROBLEM_CONTENT } from "@/constants/content";

/**
 * Problem section — explains the delivery pain points.
 * Left: headline + body + solution card.
 * Right: pain point list cards.
 */
export default function Problem() {
  return (
    <Section
      id="problem"
      className="py-24 bg-[var(--bg-subtle)] relative"
    >
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
          <SectionLabel className="mb-5">{PROBLEM_CONTENT.label}</SectionLabel>
          <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] mb-6 text-[var(--text-primary)]">
            {PROBLEM_CONTENT.headline}
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75] mb-4">
            {PROBLEM_CONTENT.body1}
          </p>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75] mb-8">
            {PROBLEM_CONTENT.body2}
          </p>
          {/* Solution card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] border-l-[3px] border-l-[var(--brand-blue)] rounded-[16px] p-6 shadow-[var(--shadow)]">
            <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7]">
              <strong className="text-[var(--text-primary)]">
                {PROBLEM_CONTENT.solutionLabel}
              </strong>{" "}
              {PROBLEM_CONTENT.solution}
            </p>
          </div>
        </RevealWrapper>

        {/* Right: Pain points */}
        <RevealWrapper delay={2}>
          <ul className="flex flex-col gap-4 list-none" role="list">
            {PROBLEM_CONTENT.pains.map((pain, i) => (
              <li
                key={pain.title}
                className="flex items-start gap-[14px] bg-[var(--bg-card)] border border-[var(--border)] rounded-[14px] p-[18px_20px] transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow)]"
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 text-[18px]"
                  style={{ background: "rgba(0,108,223,0.08)" }}
                  aria-hidden="true"
                >
                  {pain.icon}
                </div>
                <div>
                  <strong className="block text-[14px] font-semibold text-[var(--text-primary)] mb-1">
                    {pain.title}
                  </strong>
                  <span className="text-[13px] text-[var(--text-muted)] leading-[1.6]">
                    {pain.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </RevealWrapper>
      </div>
    </Section>
  );
}