"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/content";
import { WAITLIST_LINK } from "@/constants/brand";
import MainLogo from "@/components/ui/MainLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/useScrolled";

/**
 * Site-wide sticky navbar.
 * - Transparent at top, gains border on scroll
 * - Glass-morphism backdrop blur
 * - Desktop: inline nav links + theme toggle + CTAs
 * - Mobile: hamburger menu with slide-down panel
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(20);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "bg-[var(--nav-bg)] backdrop-blur-[20px] saturate-150",
          "border-b transition-colors duration-300",
          scrolled ? "border-[var(--border)]" : "border-transparent"
        )}
        aria-label="Main navigation"
      >
        <div className="max-w-[1120px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
          {/* Logo */}
          <MainLogo />

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-9 list-none" role="list">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    "text-[14px] font-medium text-[var(--text-secondary)]",
                    "transition-colors duration-200 hover:text-[var(--brand-blue)]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="default" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button variant="primary" size="default" asChild>
              <Link href={WAITLIST_LINK} target="_blank" rel="noopener noreferrer">
                Join the Waitlist
              </Link>
            </Button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="flex flex-col gap-[5px] w-6 p-[2px]"
            >
              <span
                className={cn(
                  "block h-[2px] bg-[var(--text-primary)] rounded-sm transition-all duration-300",
                  mobileOpen && "rotate-45 translate-y-[7px]"
                )}
              />
              <span
                className={cn(
                  "block h-[2px] bg-[var(--text-primary)] rounded-sm transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-[2px] bg-[var(--text-primary)] rounded-sm transition-all duration-300",
                  mobileOpen && "-rotate-45 -translate-y-[7px]"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-[68px] left-0 right-0 z-40 md:hidden",
          "bg-[var(--bg-glass)] backdrop-blur-[20px]",
          "border-b border-[var(--border)]",
          "flex flex-col gap-0 px-6 overflow-hidden",
          "transition-all duration-300",
          mobileOpen ? "max-h-[500px] py-4 pb-6" : "max-h-0 py-0"
        )}
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleSmoothScroll(e, item.href)}
            className={cn(
              "py-4 text-[16px] font-medium text-[var(--text-secondary)]",
              "border-b border-[var(--border)] last:border-b-0",
              "hover:text-[var(--brand-blue)] transition-colors"
            )}
          >
            {item.label}
          </Link>
        ))}
        <div className="flex flex-col gap-3 mt-4">
          <Button variant="ghost" size="lg" asChild className="w-full">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button variant="primary" size="lg" asChild className="w-full">
            <Link href={WAITLIST_LINK} target="_blank" rel="noopener noreferrer">
              Join the Waitlist →
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}