import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroLottie } from "@/components/ui/AppLotties";
import { Button } from "@/components/ui/button";
import { getStartedLink } from "@/lib/config";
import Section from "@/components/layout/Section";
import Sparkle from "@/components/ui/Sparkle";

// ===========================
// ============= Homepage hero
// ===========================
export default function Hero() {
  return (
    <Section className="bg-herobg">
      {/* lg:h-[calc(99vh-90px)] */}
      <div className="relative lg:h-[80dvh]">
        <div className="wrapper flex flex-col md:flex-row gap-1 sm:gap-14 2xl:gap-0 py-5 lg:pt-20 md:pt-14 md:mx-5">
          <div className="w-full md:w-[45%] flex flex-col justify-center text-center sm:text-left gap-4 sm:gap-8 text-fontcolor px-6 sm:px-1">
            <h1 className="text-5xl lg:text-5xl font-semibold leading-tight">
              More Options,{" "}
              <span className="text-primary">Seamless Deliveries.</span>
            </h1>

            <p className="text-sm sm:text-base leading-relaxed">
              Locoomo is redefining logistics by giving you choices. Whether
              it&apos;s matching with the nearest rider for instant deliveries
              or using our Pickup Stations for affordable options, we&apos;ve
              got you covered.
            </p>

            <div className="flex flex-col gap-4 sm:gap-2 sm:flex-row justify-center items-center sm:justify-normal mt-3 sm:mt-0">
              <Button asChild className="py-6 w-fit">
                <Link href={getStartedLink}>
                  Get Started <ArrowRight />
                </Link>
              </Button>

              <Button
                variant={"ghost"}
                className="text-linkfont w-full sm:w-fit"
              >
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-base font-medium"
                >
                  Peace as a service <Sparkle />
                </Link>
              </Button>
            </div>
          </div>

          <div className="size-full md:size-3/5 py-8">
            <HeroLottie />
          </div>
        </div>

        {/* Attachment */}
        <Image
          src={"/hero_attachment.svg"}
          width={300}
          height={300}
          alt="cta-attachment"
          className="absolute left-10 bottom-0 md:right-8 hidden md:block"
        />
      </div>
    </Section>
  );
}
