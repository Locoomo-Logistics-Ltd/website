import React from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/layout/Section";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BluePuzzle } from "@/components/ui/app_svgs";
import { JoinNetworkCardDetails } from "@/lib/config";

export default function JoinNetwork() {
  const roadNetworkImage = "/road.png";
  const cardDetails = JoinNetworkCardDetails();

  return (
    <Section className="pt-20">
      <div className="space-y-12">
        <h1 className="flex sm:gap-3 flex-col sm:flex-row text-3xl md:text-4xl tracking-wide text-fontcolor font-semibold">
          Join{" "}
          <span className="flex gap-5 text-primary">
            {" "}
            the network <BluePuzzle />
          </span>
        </h1>

        {/* Show all tab details on mobile */}
        <div className="flex md:hidden w-full">
          <div className="flex flex-col gap-5">
            {/* Image block */}
            <div className="w-full">
              <Image
                src={roadNetworkImage}
                width={5000}
                height={500}
                alt="Road network image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card details block */}
            {cardDetails.map((card, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h3 className="text-lightblue text-2xl font-medium underline underline-offset-8 font-montserrat py-3">
                  {card.index}. {card.title}
                </h3>

                <div className="flex w-full aspect-square">
                  <article className="relative isolate flex flex-col justify-end rounded-md px-2 pb-5 h-full bg-slate-600">
                    <Image
                      src={card.image}
                      width={5000}
                      height={500}
                      alt=""
                      className="absolute inset-0 h-full object-cover rounded-md"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div className="z-10 flex flex-col mx-2 px-4 py-2 bg-black/35 gap-2 rounded-md">
                      <p className="z-10 overflow-hidden text-xs leading-6 text-white">
                        {card.description}
                      </p>

                      <Button className="z-10 px-5 py-2 w-fit">
                        <Link
                          href={card.href}
                          className="flex flex-row gap-2 items-center text-xs"
                        >
                          {card.buttonText} <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Different tab view to allow switching between tabs on tablets and PC */}
        <div className="hidden md:block">
          <Tabs
            defaultValue="driver"
            className="grid gap-2 grid-cols-1 md:grid-cols-5"
          >
            {/* Road network image */}
            <div className="md:col-span-2">
              <Image
                src={roadNetworkImage}
                width={100}
                height={100}
                alt="Road network image"
                className="w-full h-full object-cover"
              />
            </div>

            <TabsList className="md:col-span-1 w-full h-full flex items-center justify-center">
              <div className="flex flex-col gap-6">
                {cardDetails.map((card, idx) => (
                  <TabsTrigger
                    key={idx}
                    value={card.title.toLowerCase().replace(/s$/, "")}
                    className="flex gap-3 text-fontcolor text-2xl font-medium font-montserrat py-3"
                  >
                    {card.index}. {card.title} <ArrowUpRight className="" />
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>

            {/* Cards to be rendered according to tab trigger */}
            {cardDetails.map((card, idx) => (
              <TabsContent
                key={idx}
                value={card.title.toLowerCase().replace(/s$/, "")}
                className="md:col-span-2"
              >
                <div className="flex w-full aspect-square">
                  <article className="relative isolate flex flex-col justify-end rounded-md px-4 pb-8 h-full bg-slate-600">
                    <Image
                      src={card.image}
                      width={5000}
                      height={500}
                      alt=""
                      className="absolute inset-0 h-full object-cover rounded-md"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

                    <div className="z-10 flex flex-col mx-2 px-4 py-2 bg-black/35 gap-2 rounded-md">
                      <p className="z-10 overflow-hidden text-base leading-8 text-white">
                        {card.description}
                      </p>

                      <Button className="z-10 px-5 py-2 w-fit">
                        <Link
                          href={card.href}
                          className="flex flex-row gap-2 items-center text-base"
                        >
                          {card.buttonText} <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                  </article>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Section>
  );
}
