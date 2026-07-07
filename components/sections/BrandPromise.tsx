import React from "react";
import { Features } from "@/lib/config";
import Section from "@/components/layout/Section";

export default function BrandPromise() {
  const features = Features();

  return (
    <Section className="pt-20 lg:pt-24 lg:pb-10">
      <div className="mx-auto md:mx-4 max-w-screen-xl">
        <h2 className="flex sm:gap-3 flex-col sm:flex-row text-3xl md:text-4xl tracking-wide text-primary font-semibold">
          All you <span className="flex gap-5 text-fontcolor"> dreamed of</span>
        </h2>

        <div className="mx-auto mt-10 lg:mt-10 grid gap-x-20 gap-y-5 md:grid-cols-2 md:gap-y-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 rounded-lg">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12 p-1.5">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:text-xl">{feature.title}</h3>
                {/* <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
