import React from "react";

import Section from "@/components/layout/Section";
import Image from "next/image";
import { Star } from "@/components/ui/app_svgs";
import { LocoomoDifferenceDetails } from "@/lib/config";

export default function MobileAppMockup() {
  const locoomodifference = LocoomoDifferenceDetails();

  return (
    <Section className="pt-16 lg:pt-28">
      <div className="wrapper flex flex-col gap-10 md:flex-row">
        {/* Phone mockup */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] lg:w-[450px] lg:h-[889px]">
            <Image
              alt="iPhone mockup"
              src="/iphonemockup.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-2/3 p-4 md:p-8 space-y-8">
          {/* Header */}
          <div className="header">
            <h1 className="text-3xl md:text-4xl tracking-wide text-fontcolor font-semibold">
              Locoomo is{" "}
              <span className="text-primary flex items-center gap-3">
                different <Star />
              </span>
            </h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locoomodifference.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="mb-5 flex size-10 p-2 items-center justify-center rounded-full bg-accent">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.header}</h3>
                <p className="pr-5 text-fontcolor text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
