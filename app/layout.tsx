import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants/brand";
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
  title: `${SITE_NAME} — Neighbourhood Package Delivery & Pickup Stations`,
  description: SITE_DESCRIPTION,
  keywords: [
    "package delivery",
    "parcel delivery Lagos",
    "Pickup Station",
    "delivery service",
    "send packages",
    "neighbourhood delivery",
    "logistics network",
  ],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
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