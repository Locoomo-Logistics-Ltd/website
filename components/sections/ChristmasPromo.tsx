import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";
import { getIcon } from "@/components/icons/map";
import { CHRISTMAS_PROMO_CONTENT as C } from "@/constants/content";

/**
 * Seasonal campaign banner. Everything here (numbers, tiers, rules) mirrors
 * the live promo site; the application itself happens there, so the CTA is an
 * external link. Toggle off via `CHRISTMAS_PROMO_CONTENT.enabled`.
 */
export default function ChristmasPromo() {
  if (!C.enabled) return null;
  const Gift = getIcon("gift");

  return (
    <Section id="christmas" className="py-24 bg-[var(--bg)] scroll-mt-24">
      <RevealWrapper>
        <div
          className="relative rounded-[24px] overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-blue-dark) 0%, var(--brand-blue) 55%, var(--brand-blue-light) 100%)",
            boxShadow: "var(--shadow-blue)",
          }}
        >
          <div
            className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 60%)" }}
            aria-hidden="true"
          />

          {/* Left: pitch */}
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/80 mb-5">
              <Gift size={15} aria-hidden="true" />
              {C.label}
            </p>
            <h2 className="font-display text-[clamp(28px,3.8vw,44px)] font-extrabold text-white leading-[1.12] tracking-[-0.02em] mb-5">
              {C.headline}{" "}
              <span className="whitespace-nowrap underline decoration-white/40 decoration-[3px] underline-offset-[6px]">
                {C.headlineAccent}
              </span>{" "}
              {C.headlineEnd}
            </h2>
            <p className="text-[15.5px] text-white/80 leading-[1.7] mb-8 max-w-[520px]">{C.body}</p>

            <Button variant="white" size="lg" asChild>
              <Link href={C.href} target="_blank" rel="noopener noreferrer">
                {C.cta}
                <ArrowRightIcon size={16} />
              </Link>
            </Button>
            <p className="text-[12.5px] text-white/65 mt-4 max-w-[460px] leading-[1.6]">{C.fineprint}</p>
          </div>

          {/* Right: the pot */}
          <div className="relative z-10 rounded-[18px] bg-white/[0.08] border border-white/[0.18] p-6 sm:p-7">
            <div className="flex items-baseline justify-between gap-3 mb-5">
              <h3 className="font-display text-[15px] font-bold text-white">{C.potTitle}</h3>
              <span className="text-[12.5px] text-white/70">{C.potTotal}</span>
            </div>
            <ul className="flex flex-col gap-3 list-none" role="list">
              {C.tiers.map((t) => (
                <li
                  key={t.who}
                  className="flex items-center justify-between gap-4 rounded-[12px] bg-white/[0.08] border border-white/[0.15] px-5 py-4"
                >
                  <span className="text-[14px] text-white/85">{t.who} people get</span>
                  <strong className="font-display text-[22px] font-extrabold text-white tracking-[-0.01em]">
                    {t.amount}
                  </strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealWrapper>

      {/* How it pays out + the one rule */}
      <div className="grid md:grid-cols-3 gap-5 mt-6">
        {C.points.map((p, i) => {
          const Icon = getIcon(p.icon);
          return (
            <RevealWrapper key={p.title} delay={(i % 3) as 0 | 1 | 2}>
              <div className="h-full bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-6">
                <span
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,108,223,0.08)" }}
                  aria-hidden="true"
                >
                  <Icon size={18} className="text-[var(--brand-blue)]" />
                </span>
                <h3 className="font-display text-[16px] font-bold text-[var(--text-primary)] mb-1.5">
                  {p.title}
                </h3>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-[1.6]">{p.desc}</p>
              </div>
            </RevealWrapper>
          );
        })}
      </div>

      <RevealWrapper>
        <p className="mt-6 text-[13.5px] text-[var(--text-secondary)] leading-[1.7] bg-[var(--bg-subtle)] border border-[var(--border)] rounded-[12px] px-5 py-4">
          <strong className="text-[var(--text-primary)]">{C.catch.title}</strong> {C.catch.body}
        </p>
      </RevealWrapper>
    </Section>
  );
}
