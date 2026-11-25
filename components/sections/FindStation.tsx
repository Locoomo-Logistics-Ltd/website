import React from "react";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { FIND_STATION_CONTENT } from "@/constants/content";
import StationFinder from "./find-station/StationFinder";

/**
 * Live Pickup Station directory: search a place, see the nearest stations as
 * cards. Data is public (no login) and fetched client-side through this
 * site's own `/api/nodes` + `/api/geocode` routes.
 */
export default function FindStation() {
  return (
    <Section id="find-station" className="py-24 scroll-mt-24">
      <RevealWrapper>
        <SectionHeader
          label={FIND_STATION_CONTENT.label}
          title={FIND_STATION_CONTENT.headline}
          description={FIND_STATION_CONTENT.description}
        />
      </RevealWrapper>
      <StationFinder />
    </Section>
  );
}
