import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";
import AboutPageHero from "@/components/sections/AboutPageHero";
import WhyLocoomoGrid from "@/components/sections/WhyLocoomoGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { PAGE_SEO } from "@/constants/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  alternates: { canonical: PAGE_SEO.about.path },
  openGraph: {
    title: PAGE_SEO.about.ogTitle ?? PAGE_SEO.about.title,
    description: PAGE_SEO.about.ogDescription ?? PAGE_SEO.about.description,
    url: PAGE_SEO.about.path,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.about.ogTitle ?? PAGE_SEO.about.title,
    description: PAGE_SEO.about.ogDescription ?? PAGE_SEO.about.description,
  },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPageHero />
      <WhyLocoomoGrid />
      <FAQ />
    </main>
  );
}
