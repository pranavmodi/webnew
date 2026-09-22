import type { Metadata } from "next";

import { PiIntakeDiagnostic } from "@/components/diagnostic/pi-intake-diagnostic";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const pageTitle = "PI Intake AI Readiness Diagnostic";
const pageDescription =
  "Answer six questions to identify the personal injury intake workflow your firm should improve first, what AI could handle, and what should remain human.";
const pageUrl = `${SITE_URL}/ai-readiness-assessment`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: `${pageTitle} | ${SITE_NAME}`,
    description: pageDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Possible Minds PI Intake Diagnostic",
  url: pageUrl,
  description: pageDescription,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function AiReadinessAssessmentPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={structuredData} />
      <PiIntakeDiagnostic />
    </div>
  );
}
