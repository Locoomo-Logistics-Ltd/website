import React from "react";
import Section from "@/components/layout/Section";
import { BluePuzzle } from "@/components/ui/app_svgs";
import { LocoomoServices } from "@/lib/config";

// 1. Declare the shape of the data coming out of your config file
interface RawService {
  title: string;
  description: string;
  index?: number | string;       // Optional, so TS doesn't crash if it's missing
  illustration?: React.ReactNode; // Optional fallback
}

// ======================
// ============= Services
// ======================
export default function Services() {
  // Cast the function response to our known type structure
  const locoomoServices = LocoomoServices() as RawService[];

  return (
    <Section className="pt-14 md:pt-20">
      <div className="wrapper">
        <h1 className="flex sm:gap-3 flex-col sm:flex-row justify-center text-3xl md:text-4xl tracking-wide text-primary font-semibold">
          Services{" "}
          <span className="flex gap-5 text-fontcolor">
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
                    {/* Fallback to index loop counter (idx + 1) if index is missing */}
                    <span className="flex items-center justify-center rounded-full bg-primary text-white text-xl font-semibold size-8 shrink-0 md:size-10 outline-2 outline-offset-4 outline-primary outline-dashed">
                      {service.index ?? idx + 1}
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

              {/* Service illustration — falls back to a clean placeholder box if empty */}
              <div className="scale-110 md:col-span-2 object-cover">
                {service.illustration ?? (
                  <div className="w-full aspect-video bg-slate-100 rounded-xl flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-200">
                    Illustration Placeholder
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}