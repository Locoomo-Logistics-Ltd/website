import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { getIcon } from "@/components/icons/map";
import { MapPin } from "lucide-react";
import { INFRASTRUCTURE_VISION_CONTENT } from "@/constants/content";

export default function InfrastructureVision() {
  const { availability } = INFRASTRUCTURE_VISION_CONTENT;

  return (
    <section
      id="vision"
      className="py-24 relative overflow-hidden scroll-mt-24"
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
            {INFRASTRUCTURE_VISION_CONTENT.label}
          </SectionLabel>
          <h2
            id="vision-heading"
            className="font-display text-[clamp(28px,4vw,48px)] font-extrabold text-white mb-6 max-w-[720px] leading-[1.1] tracking-[-0.02em]"
          >
            {INFRASTRUCTURE_VISION_CONTENT.headline}
          </h2>
          <p className="text-[16px] text-white/65 leading-[1.8] max-w-[600px] mb-4">
            {INFRASTRUCTURE_VISION_CONTENT.body}
          </p>
          <p className="text-[15px] font-semibold text-[var(--brand-blue-light)] mb-12">
            {INFRASTRUCTURE_VISION_CONTENT.positioningLine}
          </p>
        </RevealWrapper>

        {/* Pillars grid */}
        <RevealWrapper delay={1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {INFRASTRUCTURE_VISION_CONTENT.pillars.map((pillar) => {
              const Icon = getIcon(pillar.icon);
              return (
                <div
                  key={pillar.title}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-[16px] p-6 transition-all duration-200 hover:bg-[rgba(0,108,223,0.1)] hover:border-[rgba(61,147,224,0.3)]"
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4"
                    style={{ background: "rgba(61,147,224,0.15)" }}
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-[var(--brand-blue-light)]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-white/90 mb-[6px]">{pillar.title}</h3>
                  <p className="text-[13px] text-white/45 leading-[1.6]">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </RevealWrapper>

        {/* Availability */}
        <RevealWrapper delay={2}>
          <div className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.08] rounded-[16px] p-6 max-w-[640px] mb-8">
            <div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
              style={{ background: "rgba(61,147,224,0.15)" }}
              aria-hidden="true"
            >
              <MapPin size={18} className="text-[var(--brand-blue-light)]" />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-white mb-[6px]">{availability.label}</h3>
              <p className="text-[13.5px] text-white/50 leading-[1.65]">{availability.body}</p>
            </div>
          </div>

          <p className="text-[14px] text-white/40 italic">{INFRASTRUCTURE_VISION_CONTENT.caption}</p>
        </RevealWrapper>
      </div>
    </section>
  );
}
