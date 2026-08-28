import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { TERMS_OF_SERVICE } from "@/constants/legal";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: PAGE_SEO.terms.title,
  description: PAGE_SEO.terms.description,
  alternates: { canonical: PAGE_SEO.terms.path },
  // Legal boilerplate — index it (people do search for it), but no
  // bespoke OG art; reuses the root/homepage generated image. Note: once
  // a segment sets its own `openGraph`/`twitter` object, Next replaces
  // the parent's entirely (no deep merge) — so `images` and `twitter`
  // must be set explicitly here rather than left to inherit.
  openGraph: {
    title: PAGE_SEO.terms.title,
    description: PAGE_SEO.terms.description,
    url: PAGE_SEO.terms.path,
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.terms.title,
    description: PAGE_SEO.terms.description,
    images: ["/opengraph-image.png"],
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalPage doc={TERMS_OF_SERVICE} />
    </>
  );
}
