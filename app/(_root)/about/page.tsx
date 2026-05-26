import FAQ from "@/components/sections/FAQ";
import AboutPageHero from "@/components/sections/AboutPageHero";
import MobileAppMockup from "@/components/sections/MobileAppMockup";

export default function AboutPage() {
  return (
    <main>
      <AboutPageHero />
      <MobileAppMockup />
      <FAQ />
    </main>
  );
}