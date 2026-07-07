import React from "react";
import Section from "@/components/layout/Section";
import { FAQs } from "@/lib/config";
import FAQCard from "@/components/ui/FAQCard";

export default function FAQ() {
  const faqs = FAQs();

  return (
    <Section className="py-16 lg:py-28">
      <div className="header flex pb-10">
        <h1 className="flex sm:gap-3 flex-col sm:flex-row text-start text-3xl md:text-4xl tracking-wide text-fontcolor font-semibold">
          Frequently asked{" "}
          <span className="flex gap-3 text-primary"> questions</span>
        </h1>
      </div>

      <div className="wrapper h-full w-full p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10 ">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  );
}
