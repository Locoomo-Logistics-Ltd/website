

import type { ReactNode } from "react";

// ── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "For Pickup Stations", href: "#pickup-stations" },
  { label: "For Riders & Drivers", href: "#riders" },
  { label: "Our Vision", href: "#vision" },
] as const;

// ── Hero ─────────────────────────────────────────────────────
export const HERO_CONTENT = {
  badge: "Now building — Lagos, Nigeria",
  headline: "The future of delivery might look",
  headlineAccent: "a lot closer to home.",
  subheadline:
    "Locoomo is turning nearby shops into Pickup Stations so customers and businesses can send and receive packages with less stress, better reliability, and more affordable options.",
  primaryCta: "Join the Waitlist",
  secondaryCta: "See how it works",
  stats: [
    { num: "3 steps", desc: "to send a package" },
    { num: "0 missed", desc: "deliveries with Pickup Stations" },
    { num: "100%", desc: "community powered" },
  ],
} as const;

// ── Problem ──────────────────────────────────────────────────
export const PROBLEM_CONTENT = {
  label: "Why Locoomo",
  headline: "The problem isn't just delivery. It's everything around it.",
  body1:
    "You pay high delivery fees. You wait. You call. You text. You explain your location nine times. You miss the rider — or they miss you. The package goes back. You pay again.",
  body2:
    "Too many deliveries depend on one thing going exactly right: the receiver being available at the exact moment a package arrives. When that doesn't happen, everyone feels it.",
  solutionLabel: "The Locoomo fix:",
  solution:
    "Instead of every package depending on one doorstep moment, customers and businesses can use nearby Pickup Stations for easier drop-off and collection — fewer failed deliveries, lower costs, smoother experience.",
  pains: [
    {
      icon: "💸",
      title: "High delivery fees",
      desc: "Direct doorstep delivery is expensive and often unpredictable in pricing.",
    },
    {
      icon: "📍",
      title: "Failed drop-offs",
      desc: "Packages returned when receivers aren't available — costing everyone time and money.",
    },
    {
      icon: "⏳",
      title: "Stressful waiting",
      desc: "Waiting all day for a delivery that may or may not arrive. No flexibility.",
    },
    {
      icon: "🗺️",
      title: "Location confusion",
      desc: "Explaining your address to every new rider — multiple times, every delivery.",
    },
    {
      icon: "🔁",
      title: "Repeat payments",
      desc: "Re-paying for failed deliveries that should have worked the first time.",
    },
  ],
} as const;

// ── How it Works ─────────────────────────────────────────────
export const HOW_IT_WORKS_CONTENT = {
  label: "How it Works",
  headline: "A simpler way to send, move, and collect packages.",
  subheadline:
    "Two service options, both designed around convenience. Choose what works best for you.",
  tabs: [
    {
      id: "customers",
      label: "For Customers (Sending)",
      steps: [
        {
          title: "Book your delivery",
          desc: "Choose where your package is going and select the best delivery option — express or Pickup Station.",
        },
        {
          title: "Drop off at a Pickup Station",
          desc: "For affordable delivery, drop your package at a nearby Pickup Station — any affiliated shop in your area.",
        },
        {
          title: "Track with less stress",
          desc: "Your recipient gets notified when the package arrives and can collect it at their convenience.",
        },
      ],
    },
    {
      id: "recipients",
      label: "For Recipients (Collecting)",
      steps: [
        {
          title: "Get notified",
          desc: "Once your package arrives at the Pickup Station, we let you know immediately — no waiting around wondering.",
        },
        {
          title: "Collect when it works for you",
          desc: "No waiting around all day. No repeated delivery calls. No unnecessary stress. Collect on your schedule.",
        },
        {
          title: "Pick up quickly and easily",
          desc: "Head to the nearby Pickup Station, confirm your details, and collect your package. Done.",
        },
      ],
    },
  ],
} as const;

// ── Locoomo Model ────────────────────────────────────────────
export const MODEL_CONTENT = {
  label: "The Locoomo Model",
  headline: "A smarter delivery network can start with places people already trust.",
  body: "Locoomo is building a network of Pickup Stations inside everyday businesses — shops, pharmacies, mini-marts. Packages move through places people already know, use, and can easily access.",
  benefits: [
    {
      icon: "👥",
      title: "For customers",
      desc: "More affordable and dependable delivery",
    },
    {
      icon: "🏪",
      title: "For Pickup Station partners",
      desc: "Extra income and more foot traffic",
    },
    {
      icon: "🛵",
      title: "For riders and drivers",
      desc: "Better-organized system with fewer failed deliveries",
    },
    {
      icon: "🏢",
      title: "For businesses",
      desc: "Smarter, more flexible delivery options for customers",
    },
  ],
} as const;

// ── Audience Cards ───────────────────────────────────────────
export const AUDIENCE_CONTENT = {
  label: "Join the Network",
  headline: "Built for everyone in the delivery chain.",
  subheadline:
    "Whether you're a shop owner, a rider, or a business — there's a place for you in the Locoomo network.",
  cards: [
    {
      id: "pickup-stations",
      icon: "🏪",
      title: "For Pickup Stations",
      desc: "Turn your shop into a Pickup Station. Earn more from the space you already have — shops, kiosks, pharmacies, mini-marts, any business with accessible space.",
      benefits: [
        "Earn on every package dropped off or collected",
        "Bring more people through your door",
        "Simple tools and straightforward process",
        "Join a growing community-powered network",
      ],
      cta: "Join as a Pickup Station",
      href: "#waitlist",
    },
    {
      id: "riders",
      icon: "🛵",
      title: "For Riders & Drivers",
      desc: "Join the network that keeps packages moving. Reliable riders and drivers are the engine of Locoomo — earn flexibly while being part of something smarter.",
      benefits: [
        "Earn by moving packages on your existing route",
        "Work within a more structured delivery system",
        "Fewer failed drop-offs and less confusion",
        "Be part of a network solving real problems",
      ],
      cta: "Join as a Rider or Driver",
      href: "#waitlist",
    },
    {
      id: "businesses",
      icon: "🏢",
      title: "For Businesses",
      desc: "Give your customers delivery options they'll actually use. Make delivery more flexible — reduce failed deliveries, improve convenience, build trust with your customers.",
      benefits: [
        "Flexible delivery beyond direct doorstep",
        "Reduce failed delivery rates significantly",
        "More accessible options for your customers",
        "Build trust through better delivery experience",
      ],
      cta: "Join the Business Waitlist",
      href: "#waitlist",
    },
  ],
} as const;

// ── Future Vision ────────────────────────────────────────────
export const VISION_CONTENT = {
  label: "What We're Building",
  headline: "We're starting with parcel delivery.",
  headlineAccent: "We're building much more than that.",
  body: "Today, Locoomo is solving a real logistics problem: making delivery more affordable, reliable, and accessible through Pickup Stations. Tomorrow, the same network can support far more.",
  caption:
    "We're building for the present first — and designing for the future from day one.",
  pillars: [
    {
      icon: "📦",
      title: "Parcel Delivery",
      desc: "Affordable, reliable delivery through Pickup Stations — starting now.",
    },
    {
      icon: "🏭",
      title: "Inventory & Warehousing",
      desc: "Local inventory storage and dark stores through the same trusted network.",
    },
    {
      icon: "🛒",
      title: "FMCG Distribution",
      desc: "Distribution centers and direct FMCG channels through community hubs.",
    },
    {
      icon: "⚡",
      title: "EV Charging",
      desc: "EV charging infrastructure embedded into the Pickup Station network.",
    },
    {
      icon: "♻️",
      title: "Recycling Collection",
      desc: "Collection points for recycling companies — sustainable urban logistics.",
    },
    {
      icon: "🌐",
      title: "Commerce Network",
      desc: "The infrastructure that future urban commerce will be built on.",
    },
  ],
} as const;

// ── Waitlist ─────────────────────────────────────────────────
export const WAITLIST_CONTENT = {
  label: "Join Early",
  headline: "Be first to experience a better way to send, receive, and move packages.",
  subheadline:
    "Whether you want to send packages, become a Pickup Station, or join as a rider or driver — join the Locoomo waitlist and we'll keep you updated.",
  roles: [
    { value: "customer", label: "I want to use Locoomo as a customer" },
    { value: "pickup-station", label: "I want to become a Pickup Station" },
    { value: "rider", label: "I want to join as a rider" },
    { value: "driver", label: "I want to join as a driver" },
    { value: "business", label: "I want to use Locoomo for my business" },
  ],
  cta: "Join the Waitlist",
  privacy: "We'll only contact you with relevant updates. No spam. Ever.",
} as const;

// ── FAQ ──────────────────────────────────────────────────────
export const FAQ_CONTENT = {
  label: "FAQ",
  headline: "Questions? We've got answers.",
  subheadline:
    "Everything you need to know about how Locoomo works, what Pickup Stations are, and how to get involved.",
  items: [
    {
      question: "How does Locoomo's Pickup Station service work?",
      answer:
        "Drop your package at a nearby Locoomo Pickup Station. A driver already heading in the right direction picks it up and delivers it to a Pickup Station near your recipient. Your recipient gets notified and collects at their convenience — simple, affordable, no stress.",
    },
    {
      question: "Is there an express delivery option too?",
      answer:
        "Yes! If you need direct pickup from your location to your recipient's doorstep, our express option pairs you with a dedicated rider who handles the entire delivery. Choose this when speed and convenience matter most.",
    },
    {
      question: "How will I track my package?",
      answer:
        "Follow your delivery through our app (launching soon) with automatic updates at each stage. Pickup Station deliveries notify you at each handoff point. Express deliveries show continuous live tracking — no more wondering where your package is.",
    },
    {
      question: "What kind of shop can become a Pickup Station?",
      answer:
        "Any accessible business with foot traffic — pharmacies, mini-marts, kiosks, tailors, salons, convenience stores. If you have space and customers coming through, you can become a Locoomo Pickup Station and earn on every package handled.",
    },
    {
      question: "When does Locoomo launch?",
      answer:
        "We're currently building and onboarding our first Pickup Stations in Lagos. Join the waitlist to be among the first to access Locoomo — and we'll keep you updated as we expand.",
    },
  ],
} as const;

// ── Footer ───────────────────────────────────────────────────
export const FOOTER_CONTENT = {
  tagline: "Building the smarter delivery network.",
  subTagline: "Peace as a service.",
  location: "Lagos, Nigeria 🇳🇬",
  columns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "How it Works", href: "#how-it-works" },
        { label: "Our Vision", href: "#vision" },
      ],
    },
    {
      title: "Join",
      links: [
        { label: "Customer Waitlist", href: "#waitlist" },
        { label: "Pickup Stations", href: "#pickup-stations" },
        { label: "Riders & Drivers", href: "#riders" },
        { label: "Business Partners", href: "#waitlist" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "hello@locoomo.com", href: "mailto:hello@locoomo.com" },
        { label: "WhatsApp", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ],
  copyright: "© 2025 Locoomo. All rights reserved.",
} as const;