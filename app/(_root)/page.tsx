import Hero from "@/components/sections/Hero";
import WhatCanIDo from "@/components/sections/WhatCanIDo";
import ServiceOptions from "@/components/sections/ServiceOptions";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyLocoomo from "@/components/sections/WhyLocoomo";
import PickupStationNetwork from "@/components/sections/PickupStationNetwork";
import ForCustomers from "@/components/sections/ForCustomers";
import ForRiders from "@/components/sections/ForRiders";
import ForBusinesses from "@/components/sections/ForBusinesses";
import InfrastructureVision from "@/components/sections/InfrastructureVision";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatCanIDo />
      <ServiceOptions />
      <HowItWorks />
      <WhyLocoomo />
      <PickupStationNetwork />
      <ForCustomers />
      <ForRiders />
      <ForBusinesses />
      <InfrastructureVision />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
