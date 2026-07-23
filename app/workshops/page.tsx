import type { Metadata } from "next";
import { ArrowRight, Check, Clock3, Code2, ShieldCheck } from "lucide-react";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

const pageTitle = "AI Workshops for Personal Injury Firm Teams";
const pageDescription =
  "Free, hands-on AI workshops for PI teams using Lead Docket, Filevine, or CASEpeer.";
const pageUrl = `${SITE_URL}/workshops`;

const workshops = [
  {
    vendor: "Lead Docket",
    role: "For intake teams",
    href: "/workshops/ai-for-lead-docket-intake-specialists",
    summary:
      "Prioritize serious leads, prepare the human closer, and recover stalled inquiries.",
    outputs: [
      "Hot-lead triage rule",
      "Attorney-ready brief",
      "Follow-up sequence",
    ],
  },
  {
    vendor: "Filevine",
    role: "For case managers",
    href: "/workshops/ai-for-filevine-case-managers",
    summary:
      "Build chronologies, find treatment gaps, and create the next records-chasing action.",
    outputs: [
      "Medical chronology",
      "Treatment-gap list",
      "Records chase plan",
    ],
  },
  {
    vendor: "CASEpeer",
    role: "For litigation paralegals",
    href: "/workshops/ai-for-casepeer-litigation-paralegals",
    summary:
      "Turn a sanitized litigation file into source-linked work an attorney can review.",
    outputs: [
      "Discovery matrix",
      "Deposition digest",
      "Deadline checks",
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Lead Docket AI workshop",
    "Filevine AI workshop",
    "CASEpeer AI workshop",
    "personal injury law firm AI training",
  ],
  alternates: { canonical: pageUrl },
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
      hasPart: workshops.map((workshop) => ({
        "@type": "WebPage",
        name: `${workshop.vendor} AI workshop for ${workshop.role.replace("For ", "")}`,
        url: `${SITE_URL}${workshop.href}`,
      })),
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
      <ClickBeacon page="workshops-hub" />
      <JsonLd data={structuredData} />

      <section className="border-b border-primary/15 bg-[#03110b]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">
            Free · live · hands-on
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[#00ff41] sm:text-5xl">
            AI workshops for PI teams.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Choose the software your team uses. Work through a sanitized PI
            example. Leave with a reusable playbook.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-foreground/60">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-primary" />
              60 minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              No client files
            </span>
            <span>10 firms maximum</span>
            <span>Certificate included, not CLE</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <article
              key={workshop.vendor}
              className="flex min-h-full flex-col border border-primary/25 bg-[#04150d] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
                {workshop.role}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#00ff41] sm:text-4xl">
                {workshop.vendor}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                {workshop.summary}
              </p>
              <ul className="mt-6 space-y-3 border-t border-primary/15 pt-5">
                {workshop.outputs.map((output) => (
                  <li
                    key={output}
                    className="flex gap-2 text-sm text-foreground/70"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={workshop.href}
                className="mt-7 inline-flex min-h-11 items-center justify-between gap-4 border-t border-primary/20 pt-5 text-sm font-semibold text-primary transition hover:text-[#00ff41]"
              >
                View workshop
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#03110b]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
              For firm owners
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#00ff41] sm:text-3xl">
              Want to build your own internal tool?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/65">
              The AI Builder Program teaches PI owners to build internal tools
              with Claude Code, Codex, or a similar coding agent.
            </p>
          </div>
          <Link
            href="/build-partnership"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Explore the Builder Program
            <Code2 className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="max-w-4xl text-sm leading-relaxed text-foreground/50">
          These are independent Possible Minds working sessions, not official
          vendor training. Exercises use sanitized materials and do not involve
          legal advice, case acceptance, final deadline authority, or CLE
          credit.
        </p>
      </section>
    </div>
  );
}
