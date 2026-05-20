import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStartedLink } from "@/lib/config";
import Section from "@/components/layout/Section";
import Sparkle from "@/components/ui/Sparkle";
import Link from "next/link";

export default function CTA() {
  return (
    <Section className="pt-16 md:px-4 lg:px-0">
      <div className="relative md:max-h-80 bg-ctabg rounded-2xl px-6 py-8 sm:px-6 sm:py-8 lg:px-12 lg:py-16 flex flex-col sm:flex-row items-center justify-between gap-14 sm:gap-5 overflow-hidden">
        {/* CTA Text and Button */}
        <div className="flex flex-col items-start gap-6 lg:gap-8 max-w-2xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Peace as a service{" "}
            <span className="inline-flex items-center gap-2">
              <Sparkle />
            </span>
          </h2>

          {/* CTA Paragraph */}
          <p className="mb-2 sm:mb-0 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
            Join Locoomo today and experience a logistics platform designed with
            you in mind always.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            className="bg-[#3d93e0] hover:bg-[#2a7bbf] text-white text-sm sm:text-base font-semibold py-6 px-8 sm:py-8 sm:px-10 transition-all duration-300"
          >
            <Link
              href={getStartedLink}
              aria-label="Start your delivery today"
              className="inline-flex items-center gap-3"
            >
              Start your delivery today <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>

        {/* CTA Image */}
        <div className="w-full lg:w-auto lg:max-w-[50%]">
          <Image
            alt="CTA image"
            width={548}
            height={300}
            className="rounded-lg object-cover object-center size-full aspect-square sm:aspect-auto"
            src="/cta_image.png"
          />
        </div>

        {/* CTA Decorative Elements */}
        <Image
          src="/cta_attachment.svg"
          width={50}
          height={50}
          alt="cta-attachment"
          className="absolute right-0 top-36 size-16 sm:hidden "
        />
        <Image
          src="/cta_bottom.svg"
          width={180}
          height={180}
          alt="cta-bottom-decoration"
          className="absolute bottom-0 left-80 hidden sm:block"
        />
      </div>
    </Section>
  );
}
