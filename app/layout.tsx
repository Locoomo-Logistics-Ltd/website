import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://tivere.tech"),
  // openGraph: { images: ["/og.png"] },
  title: "Locoomo – Seamless deliveries for you and your business",
  description:
    "More options for your deliveries. Locoomo is a logistics solution that offers you delivery options that work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
