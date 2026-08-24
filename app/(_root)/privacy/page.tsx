import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { PRIVACY_POLICY } from "@/constants/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Locoomo",
  description: "How Locoomo collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY_POLICY} />;
}
