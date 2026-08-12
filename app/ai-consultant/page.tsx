import type { Metadata } from "next";

import { MiraConsultant } from "@/components/ai-consultant/mira-consultant";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";


const title = "Free AI Advisor for Personal Injury Firms";
const description =
  "Talk with Mira, the Possible Minds AI advisor, about PI intake performance, AI workflow selection, change management, and vendor risk.";
const pageUrl = `${SITE_URL}/ai-consultant`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: pageUrl, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AiConsultantPage({
  searchParams,
}: {
  searchParams?: { lc?: string };
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Mira, Possible Minds AI Advisor",
    url: pageUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <MiraConsultant invite={searchParams?.lc || ""} />
    </>
  );
}
