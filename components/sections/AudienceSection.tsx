import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";
import { getIcon } from "@/components/icons/map";
import { Check } from "lucide-react";
import type { IconKey } from "@/components/icons/map";

interface AudienceSectionProps {
  id: string;
  tone: "bg" | "bg-subtle";
  reverse?: boolean;
  icon: IconKey;
  label: string;
  headline: string;
  body: string;
  benefits: readonly string[];
  note?: string;
  cta: string;
  href: string;
}

function isExternal(href: string) {
  return href.startsWith("http");
}

/**
 * Shared layout for the "For Customers / For Riders / For Businesses"
 * bands — same Problem→Solution→Benefit→Action shape, different content
 * and CTA target per audience.
 */
export default function AudienceSection({
  id,
  tone,
  reverse,
  icon,
  label,
  headline,
  body,
  benefits,
  note,
  cta,
  href,
}: AudienceSectionProps) {
  const Icon = getIcon(icon);

  return (
    <Section
      id={id}
      className={`py-24 scroll-mt-24 ${tone === "bg" ? "bg-[var(--bg)]" : "bg-[var(--bg-subtle)]"}`}
    >
      <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <RevealWrapper>
          <SectionLabel className="mb-5">{label}</SectionLabel>
          <h2 className="font-display text-[clamp(26px,3.5vw,40px)] font-bold leading-[1.15] tracking-[-0.02em] mb-5 text-[var(--text-primary)]">
            {headline}
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75] mb-8 max-w-[520px]">
            {body}
          </p>

          <ul className="flex flex-col gap-3 mb-8 list-none" role="list">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span
                  className="mt-[3px] w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(0,108,223,0.1)", border: "1px solid rgba(0,108,223,0.2)" }}
                  aria-hidden="true"
                >
                  <Check size={12} className="text-[var(--brand-blue)]" />
                </span>
                <span className="text-[14.5px] text-[var(--text-secondary)] leading-[1.5]">{b}</span>
              </li>
            ))}
          </ul>

          {note && <p className="text-[13px] text-[var(--text-muted)] mb-6">{note}</p>}

          <Button variant="primary" size="lg" asChild>
            {isExternal(href) ? (
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {cta}
                <ArrowRightIcon size={16} />
              </Link>
            ) : (
              <Link href={href}>
                {cta}
                <ArrowRightIcon size={16} />
              </Link>
            )}
          </Button>
        </RevealWrapper>

        <RevealWrapper delay={2}>
          <div
            className="relative aspect-square max-w-[400px] mx-auto rounded-[28px] flex items-center justify-center overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(circle at 50% 40%, var(--blue-glow) 0%, transparent 65%)" }}
            />
            <div
              className="relative w-32 h-32 rounded-[28px] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #0050b3 0%, #006CDF 60%, #3D93E0 100%)",
                boxShadow: "0 16px 48px rgba(0,108,223,0.35)",
              }}
            >
              <Icon size={52} className="text-white" strokeWidth={1.75} />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </Section>
  );
}
