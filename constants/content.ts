import { APP_ROLE_SELECT_URL, APP_URL, PROMO_URL } from "@/constants/brand";
import type { IconKey } from "@/components/icons/map";

// ── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  // { label: "Services", href: "/#services" },
  { label: "Pickup Stations", href: "/#pickup-stations" },
  { label: "For Businesses", href: "/#for-businesses" },
  { label: "For Riders", href: "/#for-riders" },
  { label: "About", href: "/about" },
] as const;

// ── Hero ─────────────────────────────────────────────────────
export const HERO_CONTENT = {
  badge: "Live in Lagos, built for neighbourhoods everywhere",
  headline: "Delivery that works",
  headlineAccent: "around you.",
  subheadline:
    "Locoomo connects you to a network of neighbourhood Pickup Stations and delivery options, so sending and receiving packages fits your life, not the other way around.",
  primaryCta: "Book a Delivery",
  primaryHref: APP_URL,
  secondaryCta: "Find a Pickup Station",
  secondaryHref: "#find-station",
  chips: [
    { icon: "store" as IconKey, label: "A growing Pickup Station network" },
    { icon: "slidersHorizontal" as IconKey, label: "Pickup Station close to you, your choice" },
    { icon: "mapPin" as IconKey, label: "Live and moving packages in Lagos" },
  ],
} as const;

// ── Christmas Shopping Fund (seasonal promo) ─────────────────
// Copy mirrors https://christmas.locoomo.com/. Set `enabled: false` when the
// campaign ends and the whole section disappears from the homepage.
export const CHRISTMAS_PROMO_CONTENT = {
  enabled: true,
  label: "Christmas Shopping Fund",
  headline: "We're putting",
  headlineAccent: "₦5 million",
  headlineEnd: "behind your December shopping.",
  body: "Choose something you genuinely want from your favourite vendor. We fund your approved purchase. We move it free to a Locoomo Pickup Station. You pick it up.",
  cta: "Apply for the Christmas Fund",
  href: PROMO_URL,
  fineprint: "Limited slots. Open to Lagos residents only. Eligibility and campaign terms apply.",
  potTitle: "The Christmas pot",
  potTotal: "265 shopping slots",
  tiers: [
    { who: "First 15", amount: "₦50,000" },
    { who: "Next 100", amount: "₦20,000" },
    { who: "Next 150", amount: "₦15,000" },
  ],
  points: [
    {
      icon: "wallet" as IconKey,
      title: "We fund your approved purchase",
      desc: "Up to ₦50,000, paid straight to your vendor. Not cash to you.",
    },
    {
      icon: "truck" as IconKey,
      title: "We move it free",
      desc: "Delivery to a Locoomo Pickup Station is on us.",
    },
    {
      icon: "mapPin" as IconKey,
      title: "You pick it up",
      desc: "Collect from the Pickup Station you helped bring to your area.",
    },
  ],
  popup: {
    badge: "Limited slots",
    title: "Up to ₦50,000 toward your Christmas shopping",
    body: "Locoomo is putting ₦5 million behind 265 shopping slots. We fund your approved purchase and move it free to a Pickup Station.",
    cta: "Apply for the Christmas Fund",
    fineprint: "Lagos residents only. Eligibility and campaign terms apply.",
    close: "Close",
    pill: "Christmas Fund",
    pillLabel: "Open the Christmas Shopping Fund",
  },
  catch: {
    title: "One rule: don't buy anything yet.",
    body: "Wait until Locoomo approves your slot. Applying doesn't mean you've been selected, and purchases made before approval may not qualify for funding.",
  },
} as const;

// ── What Can I Do ────────────────────────────────────────────
export const WHAT_CAN_I_DO_CONTENT = {
  label: "What You Can Do",
  headline: "Everything you need to move a package, in one network.",
  subheadline: "Locoomo is live! here's what you can do right now.",
  actions: [
    {
      icon: "send" as IconKey,
      title: "Send a Package",
      desc: "Book a delivery and choose the option that works for you.",
      cta: "Book a Delivery",
      href: APP_ROLE_SELECT_URL,
    },
    {
      icon: "packageCheck" as IconKey,
      title: "Receive a Package",
      desc: "Collect from a convenient Pickup Station, or use an available delivery option.",
      cta: "Track a Package",
      href: APP_ROLE_SELECT_URL,
    },
    {
      icon: "route" as IconKey,
      title: "Track Your Package",
      desc: "Follow your package as it moves through the network, end to end.",
      cta: "Track a Package",
      href: APP_ROLE_SELECT_URL,
    },
    {
      icon: "mapPin" as IconKey,
      title: "Find a Pickup Station",
      desc: "Find convenient Pickup Station locations within the Locoomo network.",
      cta: "Find a Pickup Station",
      href: "#find-station",
    },
    {
      icon: "store" as IconKey,
      title: "Become a Pickup Station",
      desc: "Turn your existing business into part of the logistics network.",
      cta: "Become a Pickup Station",
      href: APP_ROLE_SELECT_URL,
    },
    {
      icon: "bike" as IconKey,
      title: "Deliver With Locoomo",
      desc: "Join the rider network and move packages through the city.",
      cta: "Join as a Rider",
      href: APP_ROLE_SELECT_URL,
    },
  ],
} as const;

// ── Service Options ──────────────────────────────────────────
export const SERVICE_OPTIONS_CONTENT = {
  label: "Delivery Options",
  headline: "Choose how your package gets to you.",
  subheadline:
    "Locoomo isn't one-size-fits-all delivery. Pick the option that fits the package.",
  options: [
    {
      icon: "store" as IconKey,
      title: "Pickup Station",
      tagline: "Affordable. Flexible. Always there.",
      desc: "Drop off or collect at a trusted business in the neighbourhood, no waiting at home, no missed deliveries.",
      bullets: [
        "More affordable delivery",
        "Flexible collection, on your schedule",
        "No waiting at home",
        "Convenient neighbourhood locations",
        "Fewer missed deliveries",
      ],
      cta: "Find a Pickup Station",
      href: "#find-station",
    },
    {
      icon: "truck" as IconKey,
      title: "Doorstep / Express",
      tagline: "Direct. Fast. Convenient.",
      desc: "Need it delivered straight to your door? A dedicated rider handles pickup and delivery, door to door.",
      bullets: [
        "Direct doorstep delivery",
        "A dedicated rider for your delivery",
        "Convenience-first",
        "Good for time-sensitive packages",
      ],
      cta: "Book a Delivery",
      href: APP_ROLE_SELECT_URL,
    },
  ],
} as const;

// ── How it Works ─────────────────────────────────────────────
export const HOW_IT_WORKS_CONTENT = {
  label: "How It Works",
  headline: "A simple, visible journey from booking to collection.",
  subheadline:
    "Five steps. Real Pickup Stations. No wondering where your package is.",
  steps: [
    {
      step: "01",
      title: "Book",
      icon: "packagePlus" as IconKey,
      desc: "Enter your package and delivery details, and tell us where it's headed.",
    },
    {
      step: "02",
      title: "Choose",
      icon: "slidersHorizontal" as IconKey,
      desc: "Choose a nearby Pickup Stations for drop-off and pickup.",
    },
    {
      step: "03",
      title: "Drop Off",
      icon: "store" as IconKey,
      desc: "Drop-off you items at the drop-off station you have chosen in step 2.",
    },
    {
      step: "04",
      title: "We Move It",
      icon: "bike" as IconKey,
      desc: "A Locoomo rider moves your package through the network toward its destination.",
    },
    {
      step: "05",
      title: "Receive",
      icon: "packageCheck" as IconKey,
      desc: "Collect your package at the Pickup Station, or receive it through your chosen option.",
    },
  ],
  // Index-synced with `steps` — drives the PackageJourney animation's status label.
  journeyStates: [
    "Booked",
    "Moving",
    "At Pickup Station",
    "Ready for Collection",
    "Delivered",
  ],
  cta: "Start Sending",
  href: APP_ROLE_SELECT_URL,
} as const;

// ── Why Locoomo ──────────────────────────────────────────────
export const WHY_LOCOOMO_CONTENT = {
  label: "Why Locoomo",
  headline: "Delivery shouldn't mean organizing your whole day around it.",
  body1:
    "Waiting in for a delivery that might not come. Missing a rider by five minutes. Re-explaining your address for the third time. Paying again for a delivery that already failed once.",
  body2:
    "Too much of delivery today depends on one thing going exactly right; you, at your door, at the exact moment a package arrives. Locoomo gives that moment more room to work.",
  solutionLabel: "The Locoomo way:",
  solution:
    "Instead of every package depending on one doorstep moment, send and receive through a network of neighbourhood Pickup Stations, putting you in control",
  outcomes: [
    {
      icon: "wallet" as IconKey,
      title: "Pay Less",
      desc: "Pickup Station delivery can be a more affordable alternative to doorstep delivery.",
    },
    {
      icon: "clock" as IconKey,
      title: "Stop Waiting",
      desc: "Your package can wait for you, instead of the other way around.",
    },
    {
      icon: "packageCheck" as IconKey,
      title: "Fewer Missed Deliveries",
      desc: "Choose a destination where you know you can collect it.",
    },
    {
      icon: "mapPin" as IconKey,
      title: "Easier Access",
      desc: "Use trusted, familiar businesses within your own neighbourhood.",
    },
    {
      icon: "slidersHorizontal" as IconKey,
      title: "More Control",
      desc: "Choose how and where your package reaches you.",
    },
    {
      icon: "heart" as IconKey,
      title: "Built Around Real Life",
      desc: "Delivery that fits your schedule, not the other way around.",
    },
  ],
} as const;

// ── Pickup Station Network ───────────────────────────────────
export const PICKUP_STATION_NETWORK_CONTENT = {
  label: "The Pickup Station Network",
  headline: "Every neighbourhood already has businesses people trust. We connect them.",
  body: "A pharmacy. A mini-mart. A supermarket. A local shop. Locoomo turns businesses people already know and trust into Pickup Stations, convenient points to drop off and collect packages, closer to where people actually live and work.",
  benefits: [
    { icon: "users" as IconKey, title: "For customers", desc: "More affordable, more flexible delivery." },
    { icon: "store" as IconKey, title: "For Pickup Station partners", desc: "Extra income and more foot traffic." },
    { icon: "bike" as IconKey, title: "For riders", desc: "A better-organized network with fewer failed drop-offs." },
    { icon: "building2" as IconKey, title: "For businesses", desc: "Smarter, more flexible delivery options for customers." },
  ],
  becomeStation: {
    label: "Become a Pickup Station",
    headline: "Turn your existing space into a Pickup Station.",
    body: "Your business already has a physical location, local customers, trust, and operating hours. Locoomo turns that existing infrastructure into part of the logistics network.",
    benefits: [
      "Earn from handling packages",
      "Increase foot traffic",
      "Become part of a growing logistics network",
      "Provide a valuable service to your neighbourhood",
    ],
    cta: "Become a Pickup Station",
    href: APP_ROLE_SELECT_URL,
  },
} as const;

// ── Find a Pickup Station (live directory) ───────────────────
export const FIND_STATION_CONTENT = {
  label: "Find a Pickup Station",
  headline: "Find a Pickup Station near you.",
  description:
    "Search any area, street or landmark to see the Pickup Stations closest to it, with their address, opening hours and whether they have space for parcels right now.",
  placeholder: "Search an area, street or landmark, e.g. Lekki Phase 1",
  searchCta: "Search",
  useMyLocation: "Use my location",
  radiusLabel: "Within",
  radiusOptions: [5, 10, 25, 50],
  defaultRadiusKm: 10,
  onlyAcceptingLabel: "Only stations with space",
  browseTitle: "Pickup Stations on Locoomo",
  nearTitlePrefix: "Pickup Stations near",
  textTitlePrefix: "Results for",
  empty: {
    title: "No Pickup Stations found here yet",
    body: "We're growing the network, starting in Lagos. Try a wider distance, a nearby area, or tell us you'd like a station in your neighbourhood.",
    widen: "Search a wider area",
    contactCta: "Request a station",
    contactHref: "/contact",
  },
  error: {
    title: "We couldn't load Pickup Stations",
    retry: "Try again",
  },
  card: {
    accepting: "Accepting parcels",
    full: "Currently full",
    details: "View details",
    hideDetails: "Hide details",
    hoursTitle: "Opening hours",
    directions: "Get directions",
    sendHere: "Send a parcel here",
    sendHereHref: APP_ROLE_SELECT_URL,
  },
  loadMore: "Show more stations",
} as const;

// ── For Customers ────────────────────────────────────────────
export const FOR_CUSTOMERS_CONTENT = {
  label: "For Customers",
  headline: "Delivery built around your life.",
  body: "Send and receive packages the way that fits you, via a nearby Pickup Station for flexibility and value",
  benefits: [
    "Choose Pickup Station (drop-off & pick-up)",
    "Track your package as it moves",
    "Collect on your own schedule",
    "Fewer missed deliveries, less back-and-forth",
  ],
  cta: "Book a Delivery",
  href: APP_ROLE_SELECT_URL,
} as const;

// ── For Riders ────────────────────────────────────────────────
export const FOR_RIDERS_CONTENT = {
  label: "For Riders",
  headline: "Move packages. Earn with your routes.",
  body: "Riders are the engine of the Locoomo network. Join a more structured delivery system built around real Pickup Stations, not guesswork.",
  benefits: [
    "Receive delivery jobs through the app",
    "Move packages between Pickup Stations and destinations",
    "Work within a structured, verified network",
    "Fewer failed drop-offs, less wasted time",
  ],
  note: "Every rider is verified before joining the network.",
  cta: "Join as a Rider",
  href: APP_ROLE_SELECT_URL,
} as const;

// ── For Businesses ───────────────────────────────────────────
export const FOR_BUSINESSES_CONTENT = {
  label: "For Businesses",
  headline: "Give your customers a better way to receive their orders.",
  body: "Connect your business to neighbourhood logistics infrastructure — give customers more delivery choice, and cut down on the friction of failed doorstep attempts.",
  benefits: [
    "Reduce delivery friction for your customers",
    "Give customers more delivery choice",
    "Reduce failed delivery attempts",
    "Connect to neighbourhood logistics infrastructure",
  ],
  cta: "Partner With Locoomo",
  href: "/contact",
} as const;

// ── Infrastructure Vision ────────────────────────────────────
export const INFRASTRUCTURE_VISION_CONTENT = {
  label: "Our Vision",
  headline: "We're building the infrastructure between neighbourhoods.",
  body: "The long-term vision is a distributed logistics network where existing businesses become logistics infrastructure, starting with parcel delivery, and built to support far more over time.",
  positioningLine: "Built in Lagos. Designed for neighbourhoods everywhere.",
  availability: {
    label: "Starting in Lagos",
    body: "Locoomo is currently building and expanding its Pickup Station network across Lagos. The mission is bigger: flexible, neighbourhood-first logistics available everywhere.",
  },
  pillars: [
    { icon: "package" as IconKey, title: "Parcel Delivery", desc: "Affordable, reliable delivery through Pickup Stations, live today." },
    { icon: "warehouse" as IconKey, title: "Inventory & Warehousing", desc: "Local inventory storage through the same trusted network." },
    { icon: "shoppingCart" as IconKey, title: "FMCG Distribution", desc: "Distribution and direct FMCG channels through community hubs." },
    { icon: "zap" as IconKey, title: "EV Charging", desc: "EV charging infrastructure embedded into the Pickup Station network." },
    { icon: "recycle" as IconKey, title: "Recycling Collection", desc: "Collection points for recycling partners, sustainable urban logistics." },
    { icon: "globe" as IconKey, title: "Commerce Network", desc: "The infrastructure future neighbourhood commerce can be built on." },
  ],
  caption: "We're building for the present first, and designing for the future from day one.",
} as const;

// ── FAQ ──────────────────────────────────────────────────────
export const FAQ_CONTENT = {
  label: "FAQ",
  headline: "Questions? We've got answers.",
  subheadline:
    "Everything you need to know about how Locoomo works, what Pickup Stations are, and how to get involved.",
  items: [
    {
      question: "What is Locoomo?",
      answer:
        "Locoomo is a logistics platform built around a network of neighbourhood Pickup Stations. It connects customers, Pickup Stations, riders, and businesses so packages can be sent and received in a way that fits real life.",
    },
    {
      question: "How do I send a package?",
      answer:
        "Book a delivery in the Locoomo app, choose Pickup Stations, drop-off items at the drop-off station selected. A Locoomo rider takes it from there.",
    },
    {
      question: "What delivery options are available?",
      answer:
        "One: Pickup Station delivery, where you drop off and collect at a nearby trusted business.",
    },
    {
      question: "What is a Pickup Station?",
      answer:
        "A Pickup Station is an existing neighbourhood business; a pharmacy, mini-mart, supermarket, or similar, that partners with Locoomo to handle drop-off and collection for packages moving through its area.",
    },
    {
      question: "Why should I use a Pickup Station?",
      answer:
        "It's typically a more affordable option than doorstep delivery, and your package waits for you instead of you waiting for it, no missed deliveries because you weren't home at the exact right moment.",
    },
    {
      question: "Can I still receive doorstep delivery?",
      answer:
        "No. For now no Doorstep/express delivery.",
    },
    {
      question: "How do I track my package?",
      answer:
        "Every order you book shows its status and route in the app, from booking through to collection or delivery.",
    },
    {
      question: "How do I find a Pickup Station?",
      answer: "Open the Locoomo app to see Pickup Stations near you and their details.",
    },
    {
      question: "How can my business become a Pickup Station?",
      answer:
        "Register as a Node Operator in the Locoomo app with your business details. We review each application before granting full access to the network.",
    },
    {
      question: "How can I become a Locoomo rider?",
      answer:
        "Register as a Rider in the Locoomo app with your identity and license information. Riders go through a verification step before they can start accepting jobs.",
    },
    {
      question: "Where is Locoomo available?",
      answer:
        "Locoomo is currently live in Lagos, Nigeria, and building out its Pickup Station network there. The long-term vision is neighbourhood logistics that scales far beyond Lagos.",
    },
    {
      question: "How do I get started?",
      answer:
        "Open the Locoomo app and choose your role; customer, rider, or Pickup Station to get started.",
    },
  ],
} as const;

// ── Final CTA ────────────────────────────────────────────────
export const FINAL_CTA_CONTENT = {
  headline: "Your package has more places to go.",
  body: "Choose how you want to send or receive your package, and get started with Locoomo.",
  primaryCta: "Book a Delivery",
  primaryHref: APP_ROLE_SELECT_URL,
  secondaryCta: "Find a Pickup Station",
  secondaryHref: "#find-station",
} as const;

// ── Footer ───────────────────────────────────────────────────
export const FOOTER_CONTENT = {
  tagline: "Neighbourhood logistics, connected.",
  subTagline: "Built in Lagos. Designed for neighbourhoods everywhere.",
  location: "Lagos, Nigeria",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Book a Delivery", href: APP_ROLE_SELECT_URL },
        { label: "Find a Pickup Station", href: "/#find-station" },
        { label: "Track a Package", href: APP_ROLE_SELECT_URL },
        { label: "How It Works", href: "/#how-it-works" },
      ],
    },
    {
      title: "Join Locoomo",
      links: [
        { label: "Become a Pickup Station", href: APP_ROLE_SELECT_URL },
        { label: "Become a Rider", href: APP_ROLE_SELECT_URL },
        { label: "Partner With Locoomo", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Our Vision", href: "/#vision" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  copyright: "© 2026 Locoomo. All rights reserved.",
} as const;
