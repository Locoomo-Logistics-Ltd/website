import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/constants/brand";
import { FAQ_CONTENT } from "@/constants/content";

/**
 * JSON-LD builders. Kept intentionally small: only schemas backed by real,
 * visible content on the site (see CLAUDE.md "Ground truth for product
 * claims" — no invented ratings, prices, or LocalBusiness address, since
 * Locoomo doesn't publish a physical storefront address anywhere).
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/locoomo.png`,
    description:
      "Locoomo is a logistics platform built around a network of neighbourhood Pickup Stations, live in Lagos, Nigeria.",
    areaServed: {
      "@type": "City",
      name: "Lagos",
    },
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.twitter],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Mirrors the accordion rendered by components/sections/FAQ.tsx exactly. */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CONTENT.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
