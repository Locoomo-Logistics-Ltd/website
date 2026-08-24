import React from "react";
import AudienceSection from "./AudienceSection";
import { FOR_RIDERS_CONTENT } from "@/constants/content";

export default function ForRiders() {
  return (
    <AudienceSection
      id="for-riders"
      tone="bg-subtle"
      reverse
      icon="bike"
      label={FOR_RIDERS_CONTENT.label}
      headline={FOR_RIDERS_CONTENT.headline}
      body={FOR_RIDERS_CONTENT.body}
      benefits={FOR_RIDERS_CONTENT.benefits}
      note={FOR_RIDERS_CONTENT.note}
      cta={FOR_RIDERS_CONTENT.cta}
      href={FOR_RIDERS_CONTENT.href}
    />
  );
}
