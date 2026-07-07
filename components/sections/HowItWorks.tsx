import React from "react";
import Section from "@/components/layout/Section";
import { BluePuzzle } from "@/components/ui/app_svgs";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <Section className="pt-20">
      <div className="wrapper">
        <h1 className="flex sm:gap-3 flex-col sm:flex-row text-3xl md:text-4xl tracking-wide text-fontcolor font-semibold">
          How it{" "}
          <span className="flex gap-5 text-primary">
            {" "}
            works <BluePuzzle />
          </span>
        </h1>

        {/* Instructions */}
        <div className="flex flex-col md:flex-row gap-10 py-14 w-full">
          <div className="flex flex-col bg-slate-300/20 rounded-xl aspect-square md:w-[43%]">
            {/* Express */}
            <div className="express bg-lightblue text-center text-white text-2xl font-bold py-5 rounded-t-xl">
              <p>For Express Delivery</p>
            </div>
            <div className="relative w-full">
              <Image
                src="/door.svg"
                width={500}
                height={500}
                alt="Express Delivery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-[55%]">
            <div className="flex h-fit w-full px-6 py-5 bg-lightblue rounded-xl flex-col gap-4">
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-5">
                  <Image
                    src={"/book.svg"}
                    alt="booking icon"
                    width={32}
                    height={32}
                  />

                  <div className="text-white text-xl md:text-3xl font-semibold">
                    Book your delivery
                  </div>
                </div>

                <div className="flex size-10 p-5 bg-white rounded-full justify-center items-center">
                  <div className="text-[#3d93e0] text-3xl font-bold">1</div>
                </div>
              </div>
              <div className="flex pr-8 text-white text-lg">
                Choose Instant Match, and Locoomo pairs you with the nearest
                rider.
              </div>
            </div>

            <div className="flex h-fit w-full px-6 py-5 bg-lightblue rounded-xl flex-col gap-4">
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-5">
                  <Image
                    src={"/track.svg"}
                    alt="booking icon"
                    width={32}
                    height={32}
                  />

                  <div className="text-white text-xl md:text-3xl font-semibold">
                    Real-time tracking
                  </div>
                </div>

                <div className="flex size-10 p-5 bg-white rounded-full justify-center items-center">
                  <div className="text-[#3d93e0] text-3xl font-bold">2</div>
                </div>
              </div>
              <div className="flex pr-8 text-white text-lg">
                Track your package’s journey from pickup to delivery
              </div>
            </div>

            <div className="flex h-fit w-full px-6 py-5 bg-lightblue rounded-xl flex-col gap-4">
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-5">
                  <Image
                    src={"/fast_time.svg"}
                    alt="booking icon"
                    width={32}
                    height={32}
                  />

                  <div className="text-white text-xl md:text-3xl font-semibold">
                    Fast delivery
                  </div>
                </div>

                <div className="flex size-10 p-5 bg-white rounded-full justify-center items-center">
                  <div className="text-[#3d93e0] text-3xl font-bold">3</div>
                </div>
              </div>
              <div className="flex pr-8 text-white text-lg">
                Package is delivered directly to recipient, on time
              </div>
            </div>
          </div>
        </div>

        {/* Pickup and delivery */}
        <div className="flex flex-col md:flex-row gap-10 py-10 w-full">
          <div className="flex flex-col bg-slate-300/20 rounded-xl aspect-square md:w-[43%]">
            {/* Pickup */}
            <div className="express bg-lightblue text-center text-white text-2xl font-bold py-5 rounded-t-xl">
              <p>For Pick and Drop Delivery</p>
            </div>
            <div className="relative w-full p-14">
              <Image
                src="/pickshop.svg"
                width={500}
                height={500}
                alt="Express Delivery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-[55%]">
            <div className="flex h-fit w-full px-6 py-5 bg-lightblue rounded-xl flex-col gap-4">
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-5">
                  <Image
                    src={"/dropoff.svg"}
                    alt="booking icon"
                    width={32}
                    height={32}
                  />

                  <div className="text-white text-xl md:text-3xl font-semibold">
                    Drop off your package
                  </div>
                </div>

                <div className="flex size-10 p-5 bg-white rounded-full justify-center items-center">
                  <div className="text-lightblue text-3xl font-bold">1</div>
                </div>
              </div>
              <div className="flex pr-8 text-white text-lg">
                Take your package to the nearest Locoomo station.
              </div>
            </div>

            <div className="flex h-fit w-full px-6 py-5 bg-lightblue rounded-xl flex-col gap-4">
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-5">
                  <Image
                    src={"/drive.svg"}
                    alt="driver icon"
                    width={32}
                    height={32}
                  />

                  <div className="text-white text-xl md:text-3xl font-semibold">
                    Driver matching
                  </div>
                </div>

                <div className="flex size-10 p-5 bg-white rounded-full justify-center items-center">
                  <div className="text-[#3d93e0] text-3xl font-bold">2</div>
                </div>
              </div>
              <div className="flex pr-8 text-white text-lg">
                We match your package with a driver going in the same direction,
                the driver delivers the package to the nearest pickup station.
              </div>
            </div>

            <div className="flex h-fit w-full px-6 py-5 bg-lightblue rounded-xl flex-col gap-4">
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-5">
                  <Image
                    src={"/recipient.svg"}
                    alt="driver icon"
                    width={32}
                    height={32}
                  />

                  <div className="text-white text-xl md:text-3xl font-semibold">
                    Recipient pickup
                  </div>
                </div>

                <div className="flex size-10 p-5 bg-white rounded-full justify-center items-center">
                  <div className="text-[#3d93e0] text-3xl font-bold">3</div>
                </div>
              </div>
              <div className="flex pr-8 text-white text-lg">
                The recipient is notified to collect their package at their
                convenience. No stress, no rush, just affordable & reliable
                delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
