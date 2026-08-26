import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { APP_URL } from "@/constants/brand";

/**
 * Fixed bottom "Book a Delivery" bar, mobile/tablet only (hidden at lg+
 * where the navbar CTA is already visible). Sits above WhatsAppFloat's
 * bottom-right position — WhatsAppFloat stays clear at bottom-6 right-6.
 */
export default function MobileStickyCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pb-4 pointer-events-none"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)" }}
    >
      <Link
        href={APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center gap-2 w-full h-[52px] rounded-[14px] bg-[var(--brand-blue)] text-white text-[15px] font-semibold shadow-[0_8px_28px_rgba(0,108,223,0.45)] transition-transform duration-200 active:scale-[0.98]"
      >
        Book a Delivery
        <ArrowRightIcon size={16} />
      </Link>
    </div>
  );
}
