"use client";

import React, { useState } from "react";
import {
  FadedQuestionMark,
  FAQLeftSideDroplet,
  FAQRightSideDroplet,
} from "@/components/ui/app_svgs";
import { Sun } from "lucide-react";

interface FAQCardProps {
  question: string;
  answer: string;
}

export default function FAQCard({ question, answer }: FAQCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative size-full aspect-square perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      {/* Front of Card */}
      <div
        className={`absolute w-full h-full bg-transparent rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform ${
          isFlipped ? "rotate-y-180" : "rotate-y-0"
        } backface-hidden`}
      >
        <div className="box relative w-full h-full flex items-center justify-center">
          {/* Background Colors */}
          <div className="absolute border-none -z-10 left-0 w-1/2 h-full bg-[#242B3F] rounded-l-md" />
          <div className="absolute border-none -z-10 right-0 w-[51%] h-full bg-[#1F2534] rounded-r-md" />

          {/* Faded Question Mark */}
          <div className="faded absolute right-0 bottom-5">
            <FadedQuestionMark />
          </div>

          {/* Side droplets */}
          <div className="absolute left-0 bottom-8">
            <FAQLeftSideDroplet />
          </div>
          <div className="absolute right-0 top-7">
            <FAQRightSideDroplet />
          </div>

          {/* FAQ */}
          <div className="w-full h-full p-8 flex items-center justify-center">
            <p className="z-10 text-white text-center font-semibold text-2xl md:text-xl lg:text-2xl tracking-wider leading-relaxed">
              {question}
            </p>
          </div>
        </div>
      </div>

      {/* Back of Card */}
      <div
        className={`absolute w-full h-full bg-transparent rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform ${
          isFlipped ? "rotate-y-0" : "rotate-y-180"
        } backface-hidden`}
      >
        <div className="box relative w-full h-full flex items-center justify-center">
          {/* Background Colors */}
          <div className="absolute border-none -z-10 left-0 w-1/2 h-full bg-[#1F2534] rounded-l-md" />
          <div className="absolute border-none -z-10 right-0 w-[51%] h-full bg-[#242B3F] rounded-r-md" />

          {/* Faded Question Mark */}
          <div className="faded absolute left-2 top-2">
            <Sun className="size-24 stroke-[#2F3544] opacity-50" />
          </div>

          {/* FAQ */}
          <div className="w-full h-full p-8 flex items-center justify-center">
            <p className="z-10 text-white text-center font-semibold text-sm md:text-base tracking-wider leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
