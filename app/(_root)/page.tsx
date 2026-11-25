import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import ChristmasPromo from "@/components/sections/ChristmasPromo";
import ChristmasPopup from "@/components/sections/ChristmasPopup";
import WhatCanIDo from "@/components/sections/WhatCanIDo";
// import ServiceOptions from "@/components/sections/ServiceOptions";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyLocoomo from "@/components/sections/WhyLocoomo";
import PickupStationNetwork from "@/components/sections/PickupStationNetwork";
import FindStation from "@/components/sections/FindStation";
import ForCustomers from "@/components/sections/ForCustomers";
import ForRiders from "@/components/sections/ForRiders";
import ForBusinesses from "@/components/sections/ForBusinesses";
import InfrastructureVision from "@/components/sections/InfrastructureVision";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <ChristmasPopup />
      <ChristmasPromo />
      <WhatCanIDo />
      {/* <ServiceOptions /> */}
      <HowItWorks />
      <WhyLocoomo />
      <PickupStationNetwork />
      <FindStation />
      <ForCustomers />
      <ForRiders />
      <ForBusinesses />
      <InfrastructureVision />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
