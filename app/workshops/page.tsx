import { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

const pageTitle = "AI Working Sessions for Personal Injury Firm Teams";
const metaTitle = "AI Workshops for PI Firm Teams";
const pageDescription =
  "Free, hands-on AI working sessions for personal injury firm staff - small cohorts, real workflows, no demos. Tracks for intake teams and case managers.";
const pageUrl = `${SITE_URL}/workshops`;

const workshops = [
  {
    slug: "ai-for-lead-docket-intake-specialists",
    audience: "Intake specialists & intake managers",
    title: "AI for Personal Injury Intake Teams Using Lead Docket",
    body: "Sixty minutes, ten firms, and a queue of sanitized PI leads. Practice hot-lead triage, attorney-ready handoffs, human escalation, stalled-lead recovery, and conversion auditing.",
  },
  {
    slug: "ai-for-filevine-case-managers",
    audience: "Case managers & records staff",
    title: "AI for Personal Injury Case Managers on Filevine",
    body: "Sixty minutes, ten firms, sanitized sample files. Build reusable AI instructions for chronologies, treatment gaps, client updates, records chasing, and handoffs — and learn where Filevine's built-in AI helps and where it stops.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function WorkshopsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#page`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Workshops", item: pageUrl },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl">
            AI Working Sessions for PI Firm Teams
          </h1>
          <p className="mt-5 max-w-3xl text-base text-foreground/80 sm:text-lg">
            Small-cohort, hands-on sessions where personal injury firm staff
            build AI workflows for their actual jobs. No webinars, no product
            demos — you do the work, you keep the playbook.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-6 px-4 pt-12 sm:px-6">
        {workshops.map((workshop) => (
          <Link
            key={workshop.slug}
            href={`/workshops/${workshop.slug}`}
            className="block rounded-2xl border border-primary/25 bg-[#04150d] p-6 transition hover:border-primary/50 sm:p-8"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
              {workshop.audience}
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-[#00ff41]">
              {workshop.title}
            </h2>
            <p className="mt-3 text-foreground/75">{workshop.body}</p>
            <div className="mt-4 text-sm font-semibold text-primary">
              Details &amp; registration →
            </div>
          </Link>
        ))}

        <p className="pt-4 text-sm text-foreground/60">
          A session for firm leadership is in development. Registering for any
          working session puts you on the list for new tracks.
        </p>
      </div>
    </div>
  );
}
