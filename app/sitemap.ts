import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/brand";
import { PAGE_SEO } from "@/constants/seo";

/** Only the site's real, indexable marketing routes. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}${PAGE_SEO.home.path}`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}${PAGE_SEO.about.path}`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}${PAGE_SEO.contact.path}`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}${PAGE_SEO.terms.path}`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}${PAGE_SEO.privacy.path}`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
