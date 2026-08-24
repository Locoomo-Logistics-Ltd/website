import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";
import { APP_ROLE_SELECT_URL } from "@/constants/brand";

/**
 * About page hero section.
 * Refactored to use new design system tokens and components.
 */
export default function AboutPageHero() {
  return (
    <section
      className="relative overflow-hidden pt-[140px] pb-20"
      aria-labelledby="about-hero-heading"
      style={{ background: "var(--brand-navy)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(61,147,224,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(61,147,224,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* World map background image */}
      <Image
        alt=""
        src="/bgMap.png"
        width={1000}
        height={300}
        className="absolute opacity-10 w-96 h-72 md:h-[30rem] md:w-[33rem] lg:w-[48rem] lg:h-[34rem] 2xl:w-[67rem] 2xl:h-[40rem] bottom-0 md:right-0 md:top-10 lg:top-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between h-full">
          {/* Copy */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
            <h1
              id="about-hero-heading"
              className="font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white"
            >
              Built in Lagos.{" "}
              <span className="block text-[var(--brand-blue-light)] leading-none">
                Designed for neighbourhoods everywhere.
              </span>
            </h1>

            <p className="text-[16px] text-white/70 leading-[1.75] max-w-[480px]">
              Locoomo is a logistics network built around a simple idea: the
              businesses your neighbourhood already trusts can become part of
              how packages move through it. We&apos;re starting in Lagos, and
              building for neighbourhoods everywhere.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-2">
              <Button variant="primary" size="lg" asChild>
                <Link href={APP_ROLE_SELECT_URL} target="_blank" rel="noopener noreferrer">
                  Book a Delivery <ArrowRightIcon size={16} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 shrink-0 border-4 border-[rgba(61,147,224,0.3)] rounded-2xl overflow-hidden shadow-[var(--shadow-blue)]">
            <Image
              alt="Locoomo delivery network"
              src="/aboutHeroImage.jpg"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}