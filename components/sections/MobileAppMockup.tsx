import React from "react";
import Image from "next/image";
import Section from "@/components/layout/Section";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const DIFFERENCE_ITEMS = [
  {
    icon: "📍",
    header: "Pickup Stations everywhere",
    description:
      "Drop off and collect packages at shops already in your neighbourhood — no chasing riders, no missed deliveries.",
  },
  {
    icon: "💸",
    header: "Genuinely affordable",
    description:
      "By routing packages through existing city movement, we cut out the cost of dedicated delivery trips.",
  },
  {
    icon: "🕐",
    header: "Collect on your schedule",
    description:
      "Packages wait for you at the Pickup Station. Collect when it's convenient — morning, evening, weekend.",
  },
  {
    icon: "🌐",
    header: "Community-powered network",
    description:
      "Every shop in the network makes the system stronger, faster, and more accessible for everyone.",
  },
  {
    icon: "📲",
    header: "Real-time notifications",
    description:
      "We notify you the moment your package arrives at the Pickup Station — no more wondering where it is.",
  },
  {
    icon: "✅",
    header: "No more failed drop-offs",
    description:
      "Packages don't depend on you being home at the exact right moment. Less stress for senders and recipients.",
  },
];

/**
 * Locoomo is Different section — used on the About page.
 * Refactored to use new design system tokens.
 */
export default function MobileAppMockup() {
  return (
    <Section className="py-24 bg-[var(--bg)]">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Phone mockup */}
        <RevealWrapper className="w-full md:w-1/3 flex justify-center md:justify-start shrink-0">
          <div className="relative w-[260px] h-[520px] md:w-[300px] md:h-[600px]">
            <Image
              alt="Locoomo app mockup"
              src="/iphonemockup.svg"
              fill
              className="object-contain drop-shadow-[0_20px_60px_rgba(0,108,223,0.25)]"
            />
          </div>
        </RevealWrapper>

        {/* Right: Copy */}
        <RevealWrapper delay={1} className="w-full md:w-2/3">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--brand-blue)] mb-4">
            Why Locoomo
          </p>
          <h2 className="font-display text-[clamp(26px,3.5vw,40px)] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)] mb-3">
            Locoomo is{" "}
            <span className="text-[var(--brand-blue)]">different.</span>
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.7] mb-10 max-w-[540px]">
            We&apos;re not just another delivery app. We&apos;re building a smarter,
            community-powered logistics network that works for everyone — senders,
            recipients, shops, riders, and businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DIFFERENCE_ITEMS.map((item) => (
              <div key={item.header} className="flex flex-col gap-[6px]">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[16px] mb-1"
                  style={{ background: "rgba(0,108,223,0.08)", border: "1px solid rgba(0,108,223,0.14)" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className="text-[14px] font-semibold text-[var(--text-primary)]">
                  {item.header}
                </h3>
                <p className="text-[13px] text-[var(--text-muted)] leading-[1.6]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </Section>
  );
}