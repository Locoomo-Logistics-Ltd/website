import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import AudienceCards from "@/components/sections/AudienceCards";
import FutureVision from "@/components/sections/FutureVision";
import Waitlist from "@/components/sections/Waitlist";
import FAQ from "@/components/sections/FAQ";
import LocoomoModel from "@/components/sections/locoomoModel";
import { HowItWorksTabs } from "@/components/sections/HowItWorks";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      {/* <HowItWorksTabs /> */}
      <LocoomoModel />
      <AudienceCards />
      <FutureVision />
      <Waitlist />
      <FAQ />
    </main>
  );
}