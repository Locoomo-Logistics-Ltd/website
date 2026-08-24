import Link from "next/link";
import { Package } from "lucide-react";
import { LogoIcon } from "@/components/icons/LogoIcon";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-color) 1px, transparent 1px), linear-gradient(90deg, var(--line-color) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center max-w-[480px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[10px] font-display font-bold text-[17px] text-[var(--text-primary)] hover:opacity-75 transition-opacity mb-14"
        >
          <LogoIcon width={26} height={32} />
          <span>LOCOOMO</span>
        </Link>

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-[20px] flex items-center justify-center text-[38px] mb-7"
          style={{
            background: "rgba(0,108,223,0.08)",
            border: "1px solid rgba(0,108,223,0.15)",
          }}
          aria-hidden="true"
        >
          <Package size={30} className="text-[var(--brand-blue)]" />
        </div>

        {/* Copy */}
        <h1 className="font-display text-[28px] font-bold text-[var(--text-primary)] mb-3 tracking-[-0.02em]">
          This page got lost in transit.
        </h1>
        <p className="text-[16px] text-[var(--text-secondary)] leading-[1.75] mb-10">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back home.
        </p>

        {/* Back home button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-[14px] rounded-[12px] text-[14px] font-semibold bg-[var(--brand-blue)] text-white transition-all duration-200 hover:bg-[#0060cc] hover:-translate-y-px shadow-[0_2px_12px_rgba(0,108,223,0.35)] hover:shadow-[0_4px_20px_rgba(0,108,223,0.45)]"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}