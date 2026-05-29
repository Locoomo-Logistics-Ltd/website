import React from "react";
import Section from "@/components/layout/Section";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { WAITLIST_CONTENT } from "@/constants/content";
import WaitlistForm from "./waitlist/WaitlistForm";

export default function Waitlist() {
  return (
    <Section id="waitlist" className="py-16 bg-[var(--bg-subtle)]">
      <RevealWrapper>
        <div
          className="relative rounded-[24px] overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16"
          style={{
            background: "linear-gradient(135deg, #0050b3 0%, #006CDF 50%, #3D93E0 100%)",
            boxShadow: "0 20px 80px rgba(0,108,223,0.4)",
          }}
        >
          {/* Shine */}
          <div
            className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy + Form */}
            <div>
              <h2 className="font-display text-[clamp(22px,3.5vw,40px)] font-extrabold text-white mb-4 leading-[1.15] tracking-[-0.02em]">
                {WAITLIST_CONTENT.headline}
              </h2>
              <p className="text-[15px] text-white/75 leading-[1.7] mb-8">
                {WAITLIST_CONTENT.subheadline}
              </p>
              <WaitlistForm />
            </div>

            {/* Decorative cards — desktop only */}
            <div className="hidden lg:block" aria-hidden="true">
              <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px] ml-auto">
                <defs>
                  <linearGradient id="glassy" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                  </linearGradient>
                </defs>
                <rect x="10" y="20" width="220" height="65" rx="14" fill="url(#glassy)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <circle cx="38" cy="52" r="16" fill="rgba(255,255,255,0.15)" />
                <text x="38" y="56" textAnchor="middle" fontSize="14">🎉</text>
                <text x="64" y="46" fontFamily="Sora,sans-serif" fontSize="10" fill="white" fontWeight="700">You&apos;re on the list!</text>
                <text x="64" y="60" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.7)">We&apos;ll notify you when we launch</text>
                <rect x="30" y="105" width="220" height="65" rx="14" fill="url(#glassy)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="58" cy="137" r="16" fill="rgba(255,255,255,0.15)" />
                <text x="58" y="141" textAnchor="middle" fontSize="14">📍</text>
                <text x="84" y="131" fontFamily="Sora,sans-serif" fontSize="10" fill="white" fontWeight="700">Pickup Station Near You</text>
                <text x="84" y="145" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.7)">Sunrise Pharmacy · 0.3km away</text>
                <rect x="10" y="190" width="220" height="65" rx="14" fill="url(#glassy)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="38" cy="222" r="16" fill="rgba(255,255,255,0.15)" />
                <text x="38" y="226" textAnchor="middle" fontSize="14">✅</text>
                <text x="64" y="216" fontFamily="Sora,sans-serif" fontSize="10" fill="white" fontWeight="700">Package Delivered</text>
                <text x="64" y="230" fontFamily="DM Sans,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.7)">Ready for collection · No stress</text>
                <text x="110" y="295" textAnchor="middle" fontFamily="Sora,sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)">Peace as a service.</text>
              </svg>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </Section>
  );
}