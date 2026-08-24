import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";
import { getIcon } from "@/components/icons/map";
import { Check } from "lucide-react";
import { PICKUP_STATION_NETWORK_CONTENT } from "@/constants/content";
import NetworkDiagram from "./model/NetworkDiagram";

export default function PickupStationNetwork() {
  const { becomeStation } = PICKUP_STATION_NETWORK_CONTENT;

  return (
    <Section id="pickup-stations" className="py-24 bg-[var(--bg-subtle)] scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        {/* Left: Copy */}
        <RevealWrapper>
          <SectionLabel className="mb-5">{PICKUP_STATION_NETWORK_CONTENT.label}</SectionLabel>
          <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.15] tracking-[-0.02em] mb-6 text-[var(--text-primary)]">
            {PICKUP_STATION_NETWORK_CONTENT.headline}
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75] mb-8">
            {PICKUP_STATION_NETWORK_CONTENT.body}
          </p>

          <ul className="flex flex-col gap-3 list-none" role="list">
            {PICKUP_STATION_NETWORK_CONTENT.benefits.map((b) => {
              const Icon = getIcon(b.icon);
              return (
                <li
                  key={b.title}
                  className="flex items-center gap-[14px] bg-[var(--bg-card)] border border-[var(--border)] rounded-[12px] px-5 py-4 transition-colors duration-200 hover:border-[var(--brand-blue-light)]"
                >
                  <span
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,108,223,0.08)" }}
                    aria-hidden="true"
                  >
                    <Icon size={16} className="text-[var(--brand-blue)]" />
                  </span>
                  <div>
                    <strong className="block text-[14px] font-semibold text-[var(--text-primary)]">
                      {b.title}
                    </strong>
                    <span className="text-[13px] text-[var(--text-muted)]">{b.desc}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </RevealWrapper>

        {/* Right: Diagram */}
        <RevealWrapper delay={2}>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[24px] p-8 shadow-[var(--shadow-blue)]">
            <NetworkDiagram />
          </div>
        </RevealWrapper>
      </div>

      {/* Become a Pickup Station */}
      <RevealWrapper>
        <div
          className="relative rounded-[24px] overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 grid lg:grid-cols-2 gap-10 items-center"
          style={{
            background: "linear-gradient(135deg, #0050b3 0%, #006CDF 50%, #3D93E0 100%)",
            boxShadow: "0 20px 80px rgba(0,108,223,0.35)",
          }}
        >
          <div
            className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)" }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/70 mb-4">
              {becomeStation.label}
            </p>
            <h3 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold text-white mb-4 leading-[1.15] tracking-[-0.02em]">
              {becomeStation.headline}
            </h3>
            <p className="text-[15px] text-white/75 leading-[1.7] mb-8 max-w-[440px]">
              {becomeStation.body}
            </p>
            <Button variant="white" size="lg" asChild>
              <Link href={becomeStation.href} target="_blank" rel="noopener noreferrer">
                {becomeStation.cta}
                <ArrowRightIcon size={16} />
              </Link>
            </Button>
          </div>

          <ul className="relative z-10 flex flex-col gap-3 list-none" role="list">
            {becomeStation.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 bg-white/[0.08] border border-white/[0.15] rounded-[12px] px-5 py-4">
                <Check size={17} className="text-white mt-[1px] shrink-0" />
                <span className="text-[13.5px] text-white/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealWrapper>
    </Section>
  );
}
