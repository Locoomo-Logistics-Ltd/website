import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/constants/brand";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import "@/app/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Every page's title in constants/seo.ts is already a complete
  // "X | Locoomo" string tuned for its own search intent, so this is a
  // plain default rather than a `template` — a template would double up
  // the "| Locoomo" suffix on every page that overrides it.
  title: PAGE_SEO.home.title,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: PAGE_SEO.home.ogTitle ?? PAGE_SEO.home.title,
    description: PAGE_SEO.home.ogDescription ?? SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.ogTitle ?? PAGE_SEO.home.title,
    description: PAGE_SEO.home.ogDescription ?? SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Site defaults to light mode regardless of OS preference; the
  // ThemeProvider updates this tag's content directly when the user
  // toggles theme (see hooks/useTheme.ts).
  themeColor: "#ffffff",
};

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('locoomo-theme');if(t==='dark'){document.documentElement.classList.add('dark-mode');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}