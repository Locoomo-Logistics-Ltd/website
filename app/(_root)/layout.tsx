import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="relative pb-20 lg:pb-0">
        {children}
        <Footer />
      </div>
      <WhatsAppFloat />
      <MobileStickyCTA />
    </>
  );
}