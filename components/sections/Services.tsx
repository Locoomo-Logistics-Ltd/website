import React from "react";
import Section from "@/components/layout/Section";
import { BluePuzzle } from "@/components/ui/app_svgs";
import { LocoomoServices } from "@/lib/config";

// ======================
// ============= Services
// ======================
export default function Services() {
  const locoomoServices = LocoomoServices();

  return (
    <Section className="pt-14 md:pt-20">
      <div className="wrapper">
        <h1 className="flex sm:gap-3 flex-col sm:flex-row justify-center text-3xl md:text-4xl tracking-wide text-primary font-semibold">
          Services{" "}
          <span className="flex gap-5 text-fontcolor">
            {" "}
            we offer <BluePuzzle />
          </span>
        </h1>

        {/* services */}
        <div className="wrapper pt-4">
          {locoomoServices.map((service, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 w-full items-center gap-1 md:gap-5 md:grid-cols-5 py-5"
            >
              <div className="md:col-span-3 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex flex-col gap-5 rounded-lg py-4 sm:py-5 px-2">
                  <div className="flex gap-5 items-center ">
                    <span className="flex items-center justify-center rounded-full bg-primary text-white text-xl font-semibold size-8 shrink-0 md:size-10 outline-2 outline-offset-4 outline-primary outline-dashed">
                      {service.index}
                    </span>
                    <h3 className="font-semibold text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm/8 md:text-2xl/loose md:pr-10 text-left font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service illustration */}
              <div className="scale-110 md:col-span-2 object-cover">
                {service.illustration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
