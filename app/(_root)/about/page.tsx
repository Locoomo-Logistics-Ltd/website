import React from "react";
import FAQ from "@/components/sections/FAQ";
import AboutPageHero from "@/components/sections/AboutPageHero";
import MobileAppMockup from "@/components/sections/MobileAppMockup";

export default function AboutPage() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center">
        <AboutPageHero />
        <MobileAppMockup />
        <FAQ />
      </main>
    </div>
  );
}
