import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStartedLink } from "@/lib/config";
import Section from "@/components/layout/Section";

export default function AboutPageHero() {
  return (
    <Section className="relative bg-fontcolor lg:h-[calc(99vh-90px)] lg:max-h-[750px] space-y-8 py-10 md:py-20">
      {/* White-lines patterned background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
      <Image
        alt="World Map Image"
        src={"/bgMap.png"}
        width={1000}
        height={300}
        className="absolute w-96 h-72 md:h-[30rem] md:w-[33rem] lg:w-[48rem] lg:h-[34rem] 2xl:w-[67rem] 2xl:h-[40rem] bottom-0 md:right-0 md:top-10 lg:top-20"
      />

      <div className="flex flex-col md:flex-row  gap-11 items-center justify-between h-full md:pl-3 md:pr-6 lg:pr-10">
        <div className="z-10 w-full h-full md:w-[40%] flex flex-col justify-center text-white text-center sm:text-left gap-4 sm:gap-8 px-6 sm:px-1">
          <h1 className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold lg:leading-normal">
            Your peace,{" "}
            <span className="block text-aboutpageblue lg:leading-none">
              Our promise.
            </span>
          </h1>

          <p className="flex text-sm sm:text-base leading-relaxed md:pr-20">
            Locoomo is changing the way logistics works in Nigeria by creating
            more options for businesses and individuals. Think of us as the
            &ldquo;Uber for Logistics&rdquo;, offering faster deliveries with a
            vast network.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-normal mt-3 sm:mt-0">
            <Button asChild className="py-6 px-8 w-fit">
              <Link href={getStartedLink}>
                Get Started <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        {/* Image side */}
        <div className="z-10 w-80 h-80 aspect-square border-4 rounded-xl">
          <Image
            alt="Hero Image"
            src="/aboutHeroImage.jpg"
            width={500}
            height={500}
            className="w-full h-full rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </Section>
  );
}
