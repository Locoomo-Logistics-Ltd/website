import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import JoinNetwork from "@/components/sections/JoinNetwork";
import BrandPromise from "@/components/sections/BrandPromise";

// =======================
// ============= Homepage
// =======================
export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center">
        <Hero />
        <Services />
        <HowItWorks />
        <JoinNetwork />
        <BrandPromise />
      </main>
    </div>
  );
}
