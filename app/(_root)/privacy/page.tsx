import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { PRIVACY_POLICY } from "@/constants/legal";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: PAGE_SEO.privacy.title,
  description: PAGE_SEO.privacy.description,
  alternates: { canonical: PAGE_SEO.privacy.path },
  // See app/(_root)/terms/page.tsx for why `images`/`twitter` are
  // spelled out explicitly rather than left to inherit from the layout.
  openGraph: {
    title: PAGE_SEO.privacy.title,
    description: PAGE_SEO.privacy.description,
    url: PAGE_SEO.privacy.path,
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.privacy.title,
    description: PAGE_SEO.privacy.description,
    images: ["/opengraph-image.png"],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalPage doc={PRIVACY_POLICY} />
    </>
  );
}
