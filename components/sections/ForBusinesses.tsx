import React from "react";
import AudienceSection from "./AudienceSection";
import { FOR_BUSINESSES_CONTENT } from "@/constants/content";

export default function ForBusinesses() {
  return (
    <AudienceSection
      id="for-businesses"
      tone="bg"
      icon="building2"
      label={FOR_BUSINESSES_CONTENT.label}
      headline={FOR_BUSINESSES_CONTENT.headline}
      body={FOR_BUSINESSES_CONTENT.body}
      benefits={FOR_BUSINESSES_CONTENT.benefits}
      cta={FOR_BUSINESSES_CONTENT.cta}
      href={FOR_BUSINESSES_CONTENT.href}
    />
  );
}
