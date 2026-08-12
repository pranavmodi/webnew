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

const faq = [
  {
    question: "What can Mira help a personal injury firm with?",
    answer:
      "Mira helps PI firm owners and operators think through intake performance, the first AI workflow to implement, AI change management, and vendor or governance risk.",
  },
  {
    question: "Does Mira give legal advice?",
    answer:
      "No. Mira discusses law firm operations and AI implementation. It does not assess claims, estimate case value, or provide legal or ethics advice.",
  },
  {
    question: "What information does Mira use?",
    answer:
      "Mira is grounded in an operator-approved collection of Possible Minds articles, product pages, case studies, and implementation guidance.",
  },
];

export default function AiConsultantPage({
  searchParams,
}: {
  searchParams?: { lc?: string };
}) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Mira, Possible Minds AI Advisor",
      url: pageUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <MiraConsultant invite={searchParams?.lc || ""} />
    </>
  );
}
