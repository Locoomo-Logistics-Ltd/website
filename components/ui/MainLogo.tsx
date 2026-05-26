import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/icons/LogoIcon";

interface MainLogoProps {
  className?: string;
  href?: string;
}

/**
 * Full Locoomo wordmark: SVG mark + LOCOOMO text.
 * Wraps in a <Link> by default.
 */
export default function MainLogo({ className, href = "/" }: MainLogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-[10px]",
        "font-display font-bold text-[18px] tracking-[-0.01em]",
        "text-[var(--text-primary)] transition-opacity duration-200 hover:opacity-80",
        className
      )}
      aria-label="Locoomo home"
    >
      <LogoIcon width={28} height={34} />
      <span>LOCOOMO</span>
    </Link>
  );
}