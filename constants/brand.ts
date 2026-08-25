export const BRAND_COLORS = {
  blue: "#006CDF",
  blueDark: "#005CBE",
  blueLight: "#3D93E0",
  navy: "#000E2E",
  ctaBg: "#085ab2",
} as const;

export const SITE_NAME = "Locoomo";
export const SITE_TAGLINE = "Neighbourhood logistics, connected.";
export const SITE_DESCRIPTION =
  "Locoomo connects customers to a network of neighbourhood Pickup Stations and delivery options — book a delivery, find a Pickup Station, or become part of the network. Starting in Lagos, built for neighbourhoods everywhere.";

// The live product. Every "use Locoomo" CTA (Consumer, Rider, or Node
// Operator / Pickup Station signup) routes here — the app self-registers
// each role from this single entry point, so no role-specific sub-route
// should be invented on the marketing site.
export const APP_URL = "https://app.locoomo.com";
export const APP_ROLE_SELECT_URL = "https://app.locoomo.com";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/locoomo?igsh=MXVwbmx2bm5vMndj",
  linkedin: "https://www.linkedin.com/company/locoomo/",
  whatsapp: "https://wa.me/2347025233470?text=Hi%20Locoomo!%20I%27d%20like%20to%20know%20more%20about%20your%20service.",
  twitter: "https://x.com/LocoomoHaul",
} as const;

export const CONTACT_EMAIL = "info@locoomo.com";
