import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { TERMS_OF_SERVICE } from "@/constants/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Locoomo",
  description: "The terms that govern your use of the Locoomo app and website.",
};

export default function TermsPage() {
  return <LegalPage doc={TERMS_OF_SERVICE} />;
}
