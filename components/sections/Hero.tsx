import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { SectionLabel } from "@/components/ui/SectionLabel";

import { HERO_CONTENT } from "@/constants/content";
import { WAITLIST_LINK } from "@/constants/brand";
import HeroFlowDiagram from "@/components/sections/hero/HeroFlowDiagram";
import { ArrowRightIcon } from "../icons";

/**
 * Homepage hero section.
 * Layout: two columns on desktop (copy left, SVG diagram right).
 * All text from HERO_CONTENT constant.
 * Entry animations via animate-fade-up Tailwind utilities.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[140px] pb-20 lg:pt-[160px]"
      aria-labelledby="hero-heading"
    >
      {/* Background glow */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--hero-glow) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-color) 1px, transparent 1px), linear-gradient(90deg, var(--line-color) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center top, black 0%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse at center top, black 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Copy ── */}
        <div>
          {/* Badge */}
          <div className="animate-fade-up mb-7">
            <div className="inline-flex items-center gap-2 px-[10px] pr-4 py-[7px] rounded-full text-[13px] font-medium text-[var(--brand-blue)] bg-[rgba(0,108,223,0.06)] border border-[rgba(0,108,223,0.18)]">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse-dot" aria-hidden="true" />
              {HERO_CONTENT.badge}
            </div>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="animate-fade-up animate-fade-up-delay-1 font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6"
          >
            {HERO_CONTENT.headline}{" "}
            <span className="relative text-[var(--brand-blue)]">
              {HERO_CONTENT.headlineAccent}
              <span
                className="absolute bottom-[-3px] left-0 right-0 h-[3px] rounded-sm opacity-50"
                style={{
                  background: "linear-gradient(90deg, var(--brand-blue), var(--brand-blue-light))",
                }}
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-up animate-fade-up-delay-2 text-[17px] text-[var(--text-secondary)] leading-[1.7] mb-9 max-w-[500px]">
            {HERO_CONTENT.subheadline}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-wrap gap-3 mb-12">
            <Button variant="primary" size="lg" asChild>
              <Link href={WAITLIST_LINK} target="_blank" rel="noopener noreferrer">
                {HERO_CONTENT.primaryCta}
                <ArrowRightIcon size={16} />
              </Link>
            </Button>
            {/* <Button variant="ghost" size="lg" asChild>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#how-it-works")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {HERO_CONTENT.secondaryCta}
              </a>
            </Button> */}

            <Button variant="ghost" size="lg" asChild>
  <a href="#how-it-works">
    {HERO_CONTENT.secondaryCta}
  </a>
</Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up animate-fade-up-delay-4 flex flex-wrap gap-8 pt-6 border-t border-[var(--border)]">
            {HERO_CONTENT.stats.map((stat) => (
              <div key={stat.num}>
                <div className="font-display text-[22px] font-bold leading-none text-[var(--text-primary)]">
                  {stat.num}
                </div>
                <div className="text-[12px] text-[var(--text-muted)] mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Visual ── */}
        <div className="hidden lg:flex items-center justify-center animate-fade-up animate-fade-up-delay-2">
          <HeroFlowDiagram />
        </div>
      </div>
    </section>
  );
}