import React from "react";
import {
  Community,
  Encrypted,
  Happiness,
  Network,
  Package,
  Review,
  Smiley,
  Store,
  Target,
  Tracking,
} from "@/components/ui/app_svgs";
import { ExpressLottie, PickupLottie } from "@/components/ui/AppLotties";

export const getStartedLink = "https://cbl.link/APzo5e9";

/**
 * @Locoomo features and brand promises
 * @return - List of features
 */
export const Features = () => {
  return [
    {
      title: "Instant delivery or pickup, you decide",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Package />,
    },
    {
      title: "Real time package tracking",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Tracking />,
    },
    {
      title: "Built for peace of mind",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Happiness />,
    },
    {
      title: "Vast network of 500+ drivers",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Network />,
    },
    {
      title: "Secure and reliable delivery",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Encrypted />,
    },
    {
      title: "Excellent customer service",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
      icon: <Review />,
    },
  ];
};

/**
 * @Locoomo services
 * @return - List of services
 */
export const LocoomoServices = () => {
  return [
    {
      index: 1,
      title: "Express Option",
      description:
        "Need it fast? Locoomo connects you with the closest available rider in seconds. Real-time tracking ensures your package gets there, on time, every time.",
      illustration: <ExpressLottie />,
    },
    {
      index: 2,
      title: "Pick & Drop Option",
      description:
        "Budget-friendly and convenient. Drop off your package at a nearby Pickup Station. Packages are matched with a driver heading in the same direction and sent to the Pickup Station nearest the recipient same day.",
      illustration: <PickupLottie />,
    },
  ];
};

/**
 * @Locoomo network
 * @return - List of card details
 */
export const JoinNetworkCardDetails = () => {
  return [
    {
      index: 1,
      title: "Drivers",
      description:
        "Ready for an innovative opportunity? Join a network of over 500 drivers, earn commissions, and be part of brilliant solutions delivering real-world impact.",
      image: "/driver.png",
      href: "https://cbl.link/M4ofSQp",
      buttonText: "Register as a driver",
    },
    {
      index: 2,
      title: "Riders",
      description:
        "Looking for flexibility and extra income? Join us as a rider, earn commissions, and simplify logistics with every delivery.",
      image: "/rider.png",
      href: "https://cbl.link/M4ofSQp",
      buttonText: "Register as a rider",
    },
    {
      index: 3,
      title: "Vendors",
      description:
        "Got space to spare? Partner with us as a drop-off point, earn commissions, and join an innovative logistics network.",
      image: "/vendor.png",
      href: "https://cbl.link/ZUVV7cB",
      buttonText: "Register as a vendor",
    },
  ];
};

/**
 * @Locoomo difference card details
 */
export const LocoomoDifferenceDetails = () => {
  return [
    {
      icon: <Store />,
      header: "Safehouse delivery option",
      description:
        "Unlike traditional logistics services, Locoomo’s Pick and Drop service leverages safehouses near recipients, reducing delivery costs and ensuring packages are dropped off closer to the recipient.",
    },
    {
      icon: <Smiley />,
      header: "Customer-Centric Approach",
      description:
        "Locoomo prioritizes customers by offering personalized options such as gifting services, themed packaging, and surprise upgrades. These features transform logistics into a warm, memorable experience.",
    },
    {
      icon: <Target />,
      header: "Real-Time Tracking",
      description:
        "Locoomo leverages real-time matching to connect customers with nearby riders, for faster deliveries and optimized routes. This dynamic system guarantees efficiency and reliability for a smooth experience.",
    },
    {
      icon: <Community />,
      header: "Community Engagement",
      description:
        "Locoomo collaborates with local shop owners and artisans, fostering community partnerships while creating more affordable and accessible delivery options. This approach makes Locoomo a trusted and relatable brand.",
    },
  ];
};

/**
 * @Locoomo frequently asked questions
 */
export const FAQs = () => {
  return [
    {
      question: "How does Locoomo’s Pick and Drop service work?",
      answer:
        "Drop your package at a nearby Locoomo safehouse. A driver already heading that way delivers it to a safehouse near your recipient. You pay less because the driver was headed your way so no extra fuel used, and your recipient gets notified when it's ready for pickup. Simple, affordable peace of mind.",
    },
    {
      question: "What is Express Doorstep Delivery?",
      answer:
        "Direct pickup from your location to your recipient's doorstep. A dedicated Locoomo rider handles your delivery from start to finish. Choose this when speed and convenience matter most.",
    },
    {
      question: "How can I track my package?",
      answer:
        "Follow your delivery in real-time through WhatsApp (app launching soon). Get automatic updates or check status anytime. Express deliveries show continuous live location, while Pick and Drop notifies you at each handoff point. No more wondering where your package is.",
    },
    {
      question: "What makes Locoomo different from other logistics companies?",
      answer:
        "We use routes drivers are already taking, creating savings we pass on to you. Our neighborhood pickup stations bring service closer to home. But what truly sets us apart is our commitment to peace—we've built every step of our service to eliminate the anxiety that typically comes with sending packages.",
    },
    {
      question: "How do I become a Locoomo partner?",
      answer:
        "Drivers, riders, and shop owners can join our peace network. Drivers earn extra income on routes they're already traveling. Shop owners generate additional revenue by hosting a safehouse. Apply through WhatsApp or our website, complete our simple verification process, and attend a brief virtual training to join the Locoomo community.",
    },
  ];
};
