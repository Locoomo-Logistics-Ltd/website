import { renderOgImage, OG_IMAGE_SIZE } from "@/lib/og";

export const alt = "Contact Locoomo";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Get in Touch",
    headline: "Let's talk neighbourhood logistics.",
    subhead: "Partnerships, Pickup Station applications, press, and general enquiries.",
  });
}
