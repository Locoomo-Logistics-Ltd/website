import { SITE_NAME, SITE_URL } from "@/constants/brand";

/**
 * Centralized SEO config — one metadata record per indexable route.
 *
 * The site is a single scrolling homepage with anchor-linked sections
 * (see CLAUDE.md route map) plus a handful of standalone pages, so this
 * only covers routes that actually exist: `/`, `/about`, `/contact`,
 * `/terms`, `/privacy`. Don't add entries for anchors (`#how-it-works`
 * etc.) — they aren't separate crawlable URLs.
 *
 * `title` is the full `<title>` tag text (not run through a template) so
 * each one can be hand-tuned for its specific search intent.
 */

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  /** Falls back to `title`/`description` when omitted. */
  ogTitle?: string;
  ogDescription?: string;
};

export const PAGE_SEO: Record<
  "home" | "about" | "contact" | "terms" | "privacy",
  PageSeo
> = {
  home: {
    path: "/",
    title: "Package Delivery & Pickup Stations in Lagos | Locoomo",
    description:
      "Send, receive, and track packages through Locoomo's network of neighbourhood Pickup Stations in Lagos, a more affordable, flexible alternative to doorstep delivery. Built in Lagos, designed for neighbourhoods everywhere.",
    ogTitle: "Locoomo | Neighbourhood Logistics, Connected",
    ogDescription:
      "Send, receive and track packages through a growing network of neighbourhood Pickup Stations. Live in Lagos, built for neighbourhoods everywhere.",
  },
  about: {
    path: "/about",
    title: "About Locoomo | Neighbourhood Logistics Infrastructure",
    description:
      "Locoomo turns businesses your neighbourhood already trusts into a network of Pickup Stations. Learn the story and vision behind Lagos's neighbourhood-first logistics platform.",
  },
  contact: {
    path: "/contact",
    title: "Contact Locoomo | Partnerships & Enquiries",
    description:
      "Get in touch with Locoomo for partnership enquiries, Pickup Station applications, press, or general questions. Based in Lagos, Nigeria.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Service | Locoomo",
    description:
      "The terms that govern your use of the Locoomo app and website, including Consumer, Rider, and Node Operator roles.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Locoomo",
    description:
      "How Locoomo collects, uses, and protects your personal data across the app and website.",
  },
};

export function canonicalFor(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

/**
 * Keyword strategy reference (not rendered as a `keywords` meta tag —
 * modern search engines ignore it — kept here so copy/metadata decisions
 * can be traced back to real search intent instead of guesswork).
 *
 * Customers      → parcel/package delivery Lagos, pickup station Lagos,
 *                   track package Lagos, local delivery Lagos
 * Businesses     → business delivery solutions Lagos, ecommerce logistics
 *                   Nigeria, last-mile delivery Nigeria
 * Pickup Station → become a pickup station, pickup station business
 *   partners       Nigeria, earn money as a pickup station
 * Riders         → delivery rider jobs Lagos, become a delivery rider
 *                   Nigeria
 *
 * All four intents live on the single homepage (see
 * WHAT_CAN_I_DO_CONTENT / FOR_CUSTOMERS_CONTENT / FOR_RIDERS_CONTENT /
 * PICKUP_STATION_NETWORK_CONTENT in constants/content.ts) rather than
 * separate landing pages, so the homepage title/description above is
 * written to summarize the customer + Pickup Station intent (highest
 * search volume), while the on-page H2 copy in each section carries the
 * business/rider intent for in-page relevance.
 */
export const SITE_NAME_FOR_TITLES = SITE_NAME;
