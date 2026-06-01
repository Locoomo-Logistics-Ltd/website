import React from "react";
import Link from "next/link";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { FOOTER_CONTENT } from "@/constants/content";
import { SITE_NAME, SOCIAL_LINKS } from "@/constants/brand";

import {
  Camera,
  Linkedin,
  MessageCircleMore,
  Twitter,
} from "lucide-react";

const SOCIAL_ICONS = {
  instagram: Camera,
  linkedin: Linkedin,
  whatsapp: MessageCircleMore,
  twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-subtle)] border-t border-[var(--border)] pt-16 pb-8">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-[10px] font-display font-bold text-[18px] text-[var(--text-primary)] mb-[14px]">
              <LogoIcon width={24} height={29} />
              <span>{SITE_NAME.toUpperCase()}</span>
            </div>

            <p className="text-[14px] text-[var(--text-muted)] leading-[1.6] max-w-[260px] mb-2">
              {FOOTER_CONTENT.tagline}
            </p>

            <p className="text-[14px] text-[var(--text-muted)]">
              {FOOTER_CONTENT.subTagline}
            </p>

            <p className="text-[12px] text-[var(--text-muted)] mt-4">
              {FOOTER_CONTENT.location}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_CONTENT.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-4">
                {col.title}
              </p>

              <ul className="flex flex-col gap-[10px] list-none">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--brand-blue)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
          <p className="text-[13px] text-[var(--text-muted)]">
            {FOOTER_CONTENT.copyright}
          </p>

          <div className="flex gap-3">
            {Object.entries(SOCIAL_ICONS).map(([key, Icon]) => {
              const href =
                SOCIAL_LINKS[key as keyof typeof SOCIAL_LINKS] ?? "#";

              return (
                <Link
                  key={key}
                  href={href}
                  aria-label={key}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center bg-[var(--surface)] border border-[var(--border)] transition-all duration-200 hover:bg-[var(--brand-blue)] hover:border-[var(--brand-blue)]"
                >
                  <Icon size={16} className="text-current" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}