import { renderOgImage, OG_IMAGE_SIZE } from "@/lib/og";

export const alt = "About Locoomo — neighbourhood logistics infrastructure";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "About Locoomo",
    headline: "Built in Lagos. Designed for neighbourhoods everywhere.",
    subhead:
      "The businesses your neighbourhood already trusts, becoming part of how packages move through it.",
  });
}
