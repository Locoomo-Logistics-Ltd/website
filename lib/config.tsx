/**
 * @deprecated
 * Kept for backward compatibility with the About and Contact pages.
 * New code should import directly from @/constants/brand and @/constants/content.
 */

export { WAITLIST_LINK as getStartedLink } from "@/constants/brand";

// Legacy feature list — used by old BrandPromise & MobileAppMockup sections.
// These sections will be refactored in a future pass.
export const Features = () => [
  { title: "Affordable deliveries", icon: "💸" },
  { title: "Less failed drop-offs", icon: "✅" },
  { title: "Flexible collection", icon: "📦" },
  { title: "Community network", icon: "🏪" },
];

export const FAQs = () => [
  { question: "How does Locoomo work?", answer: "Drop off at a Pickup Station near you." },
];

export const LocoomoDifferenceDetails = () => [
  { title: "Smart routing", description: "Packages move through existing city movement." },
  { title: "No failed drop-offs", description: "Pickup Stations are always accessible." },
];

/**
 * @deprecated
 * NavItems from here are no longer used — Navbar.tsx now reads from
 * @/constants/content NAV_LINKS directly. Kept for any legacy imports.
 */
export const NavItems = () => [];