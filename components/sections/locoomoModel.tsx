import React from "react";
import Section from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { MODEL_CONTENT } from "@/constants/content";
import ModelNetworkDiagram from "./model/ModelNetworkDiagram";


export default function LocoomoModel() {
  return (
    <Section id="model" className="py-24 bg-[var(--bg-subtle)]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <RevealWrapper>
          <SectionLabel className="mb-5">{MODEL_CONTENT.label}</SectionLabel>
          <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] mb-6 text-[var(--text-primary)]">
            {MODEL_CONTENT.headline}
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75] mb-8">
            {MODEL_CONTENT.body}
          </p>

          <ul className="flex flex-col gap-3 list-none" role="list">
            {MODEL_CONTENT.benefits.map((b) => (
              <li
                key={b.title}
                className="flex items-center gap-[14px] bg-[var(--bg-card)] border border-[var(--border)] rounded-[12px] px-5 py-4 transition-colors duration-200 hover:border-[var(--brand-blue-light)]"
              >
                <span className="text-[20px] shrink-0" aria-hidden="true">{b.icon}</span>
                <div>
                  <strong className="block text-[14px] font-semibold text-[var(--text-primary)]">
                    {b.title}
                  </strong>
                  <span className="text-[13px] text-[var(--text-muted)]">{b.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </RevealWrapper>

        {/* Right: Diagram */}
        <RevealWrapper delay={2}>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[24px] p-8 shadow-[var(--shadow-blue)]">
            <ModelNetworkDiagram />
          </div>
        </RevealWrapper>
      </div>
    </Section>
  );
}