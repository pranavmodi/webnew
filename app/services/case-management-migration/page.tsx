import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Database,
  FileCheck2,
  FileSearch,
  RefreshCw,
  Users,
} from "lucide-react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/constants";
import { migrationSystems } from "@/lib/migration-services";

const pageTitle = "Case-Management Migration for Personal Injury Firms";
const pageDescription =
  "Possible Minds helps PI firms plan, extract, clean, map, test, validate, and complete migrations between legal case-management systems.";
const pageUrl = `${SITE_URL}/services/case-management-migration`;
const consultationHref =
  "mailto:hello@possibleminds.ai?subject=Case%20management%20migration%20consultation";

const scopeAreas = [
  {
    title: "Matters and workflow",
    body:
      "Matter numbers, case types, stages, statuses, custom fields, closure reasons, pipeline meaning, and firm-specific workflow configuration.",
  },
  {
    title: "People and ownership",
    body:
      "Clients, defendants, insurers, providers, counsel, experts, referral relationships, user assignments, teams, and historical attribution.",
  },
  {
    title: "Work and deadlines",
    body:
      "Tasks, checklists, events, reminders, calendars, due dates, completion state, recurrence, and deadline-critical records.",
  },
  {
    title: "Case history",
    body:
      "Notes, chronology, communications, negotiations, treatment and demand milestones, activity history, authorship, and timestamps.",
  },
  {
    title: "Documents and links",
    body:
      "Files, attachments, categories, folder structures, document metadata, templates, external repositories, and associations to matters or notes.",
  },
  {
    title: "Financial scope, when applicable",
    body:
      "Settlement or lien fields, costs, time, billing, trust, payments, or accounting records only after the source, destination, and reconciliation owner are confirmed.",
  },
];

const process = [
  {
    step: "01",
    title: "Assess the source and destination",
    body:
      "Confirm versions, access, export paths, document stores, integrations, destination import options, and the people responsible on each side.",
  },
  {
    step: "02",
    title: "Inventory the data",
    body:
      "Identify record types, counts, custom fields, code tables, users, inactive values, documents, duplicate patterns, and records that may require a separate archive.",
  },
  {
    step: "03",
    title: "Clean and map",
    body:
      "Define how each material field, relationship, status, task, note, event, document, contact, and approved financial record will appear in the destination.",
  },
  {
    step: "04",
    title: "Run a trial migration",
    body:
      "Load representative active, closed, old, new, simple, complex, and document-heavy matters into a sandbox or test environment.",
  },
  {
    step: "05",
    title: "Reconcile and validate",
    body:
      "Compare source and destination counts, inspect complete matters, test relationships and files, record exceptions, and correct the mapping.",
  },
  {
    step: "06",
    title: "Prepare the cutover and staff",
    body:
      "Plan the final change window, data load sequence, staff instructions, destination readiness, issue ownership, and contingency steps.",
  },
  {
    step: "07",
    title: "Verify after launch",
    body:
      "Check priority matters, deadlines, documents, assignments, integrations, and exception resolution after the new system becomes operational.",
  },
];

const deliverables = [
  {
    icon: ClipboardList,
    title: "Migration plan",
    body: "Scope, responsibilities, sequence, dependencies, risks, decisions, and cutover approach.",
  },
  {
    icon: Database,
    title: "Mapping workbook or specification",
    body: "Source-to-destination fields, transformations, relationships, defaults, exclusions, and archive rules.",
  },
  {
    icon: FileSearch,
    title: "Exception report",
    body: "Duplicates, invalid values, missing links, unreadable files, unmapped records, and decisions still required.",
  },
  {
    icon: FileCheck2,
    title: "Validation results",
    body: "Count reconciliation, representative-matter findings, file checks, user acceptance, and unresolved risks.",
  },
  {
    icon: RefreshCw,
    title: "Cutover checklist",
    body: "Final extraction, load sequence, communications, staff readiness, ownership, and post-launch checks.",
  },
  {
    icon: Users,
    title: "Post-launch support",
    body: "Priority issue triage, exception follow-through, verification, and handoff to the firm's long-term owners.",
  },
];

const faqs = [
  {
    question: "Which destination systems do you support?",
    answer:
      "We support migrations to the modern destination selected by the firm when its import capabilities, data model, access, and implementation responsibilities can be confirmed. We do not claim universal compatibility with every destination.",
  },
  {
    question: "Can you work alongside the source and destination vendors?",
    answer:
      "Yes. We can coordinate the firm's data, mapping, testing, and validation work with vendor implementation teams. That coordination does not imply certification, endorsement, partnership, or affiliation.",
  },
  {
    question: "How long does a migration take?",
    answer:
      "Timing depends on data volume, customization, document storage, cleanup, destination readiness, integrations, staff availability, and whether financial data is included. We define timing after discovery rather than offering a fixed promise.",
  },
  {
    question: "Can you guarantee every record or zero downtime?",
    answer:
      "No responsible migration should make that promise before discovery and testing. We reduce risk through inventory, trial loads, reconciliation, exception tracking, cutover planning, and post-launch verification.",
  },
  {
    question: "Do we have to migrate every closed file?",
    answer:
      "No. The firm can choose to transform, archive, summarize, or exclude records based on access needs, retention requirements, cost, and destination capability. The decision and its consequences are documented.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "legal case management migration",
    "personal injury case management migration",
    "law firm data migration services",
    "Needles migration support",
    "TrialWorks migration support",
    "AbacusLaw migration support",
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

export default function CaseManagementMigrationPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      serviceType: "Legal case-management data migration",
      provider: { "@id": `${SITE_URL}/#organization` },
      audience: {
        "@type": "Audience",
        audienceType: "Personal injury law firms",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case-management migration",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#020a06]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Hands-on migration service
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Case-management migration for personal injury firms
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80">
                Possible Minds helps firms plan, extract, clean, map, test,
                validate, and complete a move from one legal case-management
                system to the modern destination they have selected.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-12 max-w-full whitespace-normal px-5 py-3 text-center"
                >
                  <Link href={consultationHref}>
                    Request a migration consultation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#source-systems">Review source systems</Link>
                </Button>
              </div>
            </div>

            <aside className="border-l-2 border-primary/40 pl-6">
              <p className="text-sm font-semibold text-primary">
                A migration is more than an export
              </p>
              <p className="mt-3 text-base leading-7 text-foreground/75">
                The new system has to preserve the meaning of matters, people,
                work, history, documents, deadlines, and any approved financial
                scope, not merely receive a set of files.
              </p>
            </aside>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-primary/20 pt-5 text-sm">
            <span className="text-foreground/50">Detailed migration support:</span>
            {migrationSystems.map((system) => (
              <Link
                key={system.href}
                href={system.href}
                className="font-semibold text-primary hover:text-primary/80"
              >
                {system.sourceName}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              First understand the systems. Then plan the move.
            </h2>
            <p className="mt-5 text-base leading-8 text-foreground/75">
              The source tells us what exists. The destination tells us what can be
              accepted. The firm tells us what each field, status, task, note, date,
              document, and relationship means in practice.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground/75">
              Our role is to connect those three perspectives, surface exceptions
              early, and make the cutover decision with evidence from a trial migration.
            </p>
          </div>
          <div className="border-y border-primary/20">
            {[
              "Source-system and destination assessment",
              "Data inventory and export planning",
              "Cleanup, deduplication, and mapping",
              "Trial migration in a sandbox or test environment",
              "Reconciliation, user validation, and exception resolution",
              "Cutover planning, staff readiness, and post-launch verification",
            ].map((item) => (
              <div key={item} className="flex gap-4 border-b border-primary/10 py-4 last:border-b-0">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <p className="leading-7 text-foreground/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#020a06]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white">
              What may need to be mapped
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/70">
              The final scope depends on the source, the selected destination, and
              how the firm uses its current system. These are the core discovery areas.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {scopeAreas.map((area) => (
              <section
                key={area.title}
                className="rounded-md border border-primary/20 bg-black/40 p-5"
              >
                <h3 className="text-lg font-semibold text-primary">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/70">
                  {area.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-3xl font-semibold text-white">
              The migration process
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/70">
              Each phase produces evidence or a decision. The firm can narrow,
              correct, pause, or proceed before the final cutover.
            </p>
          </div>
          <ol className="divide-y divide-primary/20 border-y border-primary/20">
            {process.map((phase) => (
              <li key={phase.step} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-mono text-sm font-semibold text-primary">
                  {phase.step}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/70">
                    {phase.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#020a06]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white">
              What the firm receives
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/70">
              The engagement produces working artifacts the firm can review, use,
              and retain, not only a completed data load.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((deliverable) => {
              const Icon = deliverable.icon;
              return (
                <section
                  key={deliverable.title}
                  className="rounded-md border border-primary/20 bg-black/40 p-5"
                >
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {deliverable.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/70">
                    {deliverable.body}
                  </p>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="source-systems"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-white">
            Source-system migration support
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/70">
            Each source requires a different discovery and validation plan. Review
            the detailed page for the system your firm is leaving.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {migrationSystems.map((system) => (
            <Link
              key={system.href}
              href={system.href}
              className="group rounded-md border border-primary/20 bg-[#031009] p-6 hover:border-primary/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/60">
                Source system
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white group-hover:text-primary">
                {system.sourceName}
              </h3>
              <p className="mt-4 text-sm leading-7 text-foreground/70">
                {system.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View migration service
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="border-y border-primary/20 bg-[#020a06]">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-semibold text-white">Common questions</h2>
          <div className="mt-8 divide-y divide-primary/20 border-y border-primary/20">
            {faqs.map((faq) => (
              <section key={faq.question} className="py-6">
                <h3 className="text-xl font-semibold text-primary">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/75">
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold text-white">
          Start with the source, destination, volume, integrations, and timing
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-foreground/70">
          We will help identify the real scope, the records that require special
          handling, and the evidence your firm should demand before cutover.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-7 h-auto min-h-12 max-w-full whitespace-normal px-5 py-3 text-center"
        >
          <Link href={consultationHref}>
            Discuss your migration
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
        <p className="mx-auto mt-10 max-w-4xl text-xs leading-6 text-foreground/50">
          Needles, TrialWorks, AbacusLaw, and other product names are trademarks of
          their respective owners. Possible Minds is an independent service provider
          and does not claim certification, endorsement, partnership, or affiliation
          with the named software vendors.
        </p>
      </section>
    </div>
  );
}
