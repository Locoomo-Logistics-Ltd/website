import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { APP_ROLE_SELECT_URL, CONTACT_EMAIL, SOCIAL_LINKS } from "@/constants/brand";
import {
  Mail,
  MessageCircleMore,
  Instagram,
  Linkedin,
} from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Email us",
    desc: "For general enquiries, partnerships, and anything else.",
    action: `mailto:${CONTACT_EMAIL}`,
    label: CONTACT_EMAIL,
  },
  {
    icon: MessageCircleMore,
    title: "WhatsApp",
    desc: "Quick questions? Reach us directly on WhatsApp.",
    action: SOCIAL_LINKS.whatsapp,
    label: "Chat on WhatsApp",
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "Follow us for updates, news, and behind-the-scenes.",
    action: SOCIAL_LINKS.instagram,
    label: "@locoomo",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    desc: "For partnerships, press, and professional enquiries.",
    action: SOCIAL_LINKS.linkedin,
    label: "Locoomo on LinkedIn",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[140px] pb-20"
        style={{ background: "var(--brand-navy)" }}
        aria-labelledby="contact-heading"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,147,224,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(61,147,224,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1120px] mx-auto px-6 text-center">
          <SectionLabel className="mb-6 text-[var(--brand-blue-light)] bg-[rgba(61,147,224,0.12)] border-[rgba(61,147,224,0.25)]">
            Get in Touch
          </SectionLabel>

          <h1
            id="contact-heading"
            className="font-display text-[clamp(36px,5vw,56px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-5"
          >
            We&apos;d love to hear{" "}
            <span className="text-[var(--brand-blue-light)]">from you.</span>
          </h1>

          <p className="text-[17px] text-white/65 leading-[1.75] max-w-[560px] mx-auto">
            Whether you&apos;re a business, a shop owner, a rider, or just curious
            about what we&apos;re building; reach out. We&apos;re always happy to talk.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-24 bg-[var(--bg-subtle)]" aria-label="Contact methods">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {CONTACT_METHODS.map((method) => {
              const Icon = method.icon;

              return (
                <Link
                  key={method.title}
                  href={method.action}
                  target={
                    method.action.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-[18px] p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-[4px] hover:border-[var(--brand-blue)] hover:shadow-[var(--shadow-blue)]"
                >
                  <div
                    className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                    style={{
                      background: "rgba(0,108,223,0.08)",
                      border: "1px solid rgba(0,108,223,0.15)",
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={20} className="text-[var(--brand-blue)]" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[15px] text-[var(--text-primary)] mb-[6px]">
                      {method.title}
                    </h2>

                    <p className="text-[13px] text-[var(--text-muted)] leading-[1.55] mb-3">
                      {method.desc}
                    </p>

                    <span className="text-[13px] font-medium text-[var(--brand-blue)] group-hover:underline underline-offset-2">
                      {method.label} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Location */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[24px] p-10 flex flex-col md:flex-row gap-10 items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-3">
                Our base
              </p>

              <h2 className="font-display text-[28px] font-bold text-[var(--text-primary)] mb-3">
                Lagos, Nigeria
              </h2>

              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[440px]">
                We&apos;re building our Pickup Station network right here in
                Lagos. If you&apos;re a local business, shop, or rider interested
                in partnering; we&apos;d especially love to hear from you.
              </p>
            </div>

            <div className="shrink-0">
              <Button variant="primary" size="lg" asChild>
                <Link href={APP_ROLE_SELECT_URL} target="_blank" rel="noopener noreferrer">
                  Book a Delivery →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}