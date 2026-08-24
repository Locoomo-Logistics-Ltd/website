import React from "react";
import AudienceSection from "./AudienceSection";
import { FOR_CUSTOMERS_CONTENT } from "@/constants/content";

export default function ForCustomers() {
  return (
    <AudienceSection
      id="for-customers"
      tone="bg"
      icon="users"
      label={FOR_CUSTOMERS_CONTENT.label}
      headline={FOR_CUSTOMERS_CONTENT.headline}
      body={FOR_CUSTOMERS_CONTENT.body}
      benefits={FOR_CUSTOMERS_CONTENT.benefits}
      cta={FOR_CUSTOMERS_CONTENT.cta}
      href={FOR_CUSTOMERS_CONTENT.href}
    />
  );
}
