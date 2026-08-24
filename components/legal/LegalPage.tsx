import React from "react";
import Section from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { LegalDoc } from "@/constants/legal";

interface LegalPageProps {
  doc: LegalDoc;
}

/**
 * Shared renderer for /terms and /privacy. The content in constants/legal.ts
 * is verbatim legal copy — this component only lays it out, it never
 * rewrites or summarizes it.
 */
export default function LegalPage({ doc }: LegalPageProps) {
  return (
    <main>
      <section
        className="relative overflow-hidden pt-[140px] pb-16"
        style={{ background: "var(--brand-navy)" }}
        aria-labelledby="legal-heading"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,147,224,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(61,147,224,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1120px] mx-auto px-6">
          <SectionLabel className="mb-6 text-[var(--brand-blue-light)] bg-[rgba(61,147,224,0.12)] border-[rgba(61,147,224,0.25)]">
            Legal
          </SectionLabel>
          <h1
            id="legal-heading"
            className="font-display text-[clamp(32px,4.5vw,48px)] font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-3"
          >
            {doc.title}
          </h1>
          <p className="text-[14px] text-white/50">Effective date: {doc.effectiveDate}</p>
        </div>
      </section>

      <Section className="py-20 bg-[var(--bg)]">
        <div className="max-w-[760px] mx-auto">
          {doc.intro.map((p, i) => (
            <p key={i} className="text-[15px] text-[var(--text-secondary)] leading-[1.8] mb-10">
              {p}
            </p>
          ))}

          <div className="flex flex-col gap-10">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-[19px] font-bold text-[var(--text-primary)] mb-3 tracking-[-0.01em]">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-[var(--text-secondary)] leading-[1.8] mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="flex flex-col gap-2 mt-2 list-none" role="list">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[15px] text-[var(--text-secondary)] leading-[1.7]"
                      >
                        <span
                          className="mt-[10px] w-[5px] h-[5px] rounded-full bg-[var(--brand-blue)] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
