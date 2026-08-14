import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSearch,
  Scale,
} from "lucide-react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/constants";
import {
  MIGRATION_CONSULTATION_HREF,
  migrationSystems,
  type MigrationSourcePage as MigrationSourcePageData,
} from "@/lib/migration-services";

export function MigrationSourcePage({
  data,
}: {
  data: MigrationSourcePageData;
}) {
  const pageUrl = `${SITE_URL}/services/${data.slug}`;
  const relatedSystems = migrationSystems.filter(
    (system) => system.sourceName !== data.sourceName,
  );
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: data.pageTitle,
      description: data.description,
      url: pageUrl,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: `${data.sourceName} migration support`,
      description: data.description,
      url: pageUrl,
      serviceType: "Legal case-management data migration support",
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
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case-management migration",
          item: `${SITE_URL}/services/case-management-migration`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${data.sourceName} migration`,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <header className="border-b border-primary/20 bg-[#020a06]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-foreground/60">
            <Link href="/services/case-management-migration" className="hover:text-primary">
              Case-management migration
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span>{data.sourceName}</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Independent migration support for PI firms
              </p>
              <h1 className="mt-5 max-w-4xl break-words text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                {data.pageTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80">
                {data.hero}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-12 max-w-full whitespace-normal px-5 py-3 text-center"
                >
                  <Link href={MIGRATION_CONSULTATION_HREF}>
                    Discuss your {data.sourceName} migration
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services/case-management-migration">
                    View the migration service
                  </Link>
                </Button>
              </div>
            </div>

            <aside className="border-l-2 border-primary/40 pl-6" aria-label="Scoping note">
              <p className="text-sm font-semibold text-primary">The first questions</p>
              <p className="mt-3 text-base leading-7 text-foreground/75">
                Which {data.sourceName} environment do you have? Where are the
                documents? What destination has the firm selected? Which records
                must be usable on day one?
              </p>
              <p className="mt-4 text-sm leading-6 text-foreground/50">
                Configuration, export options, and migration responsibilities vary.
                We confirm them against the firm&apos;s actual systems before defining scope.
              </p>
            </aside>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
              Who this is for
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              A move chosen by the firm, managed with care
            </h2>
            <p className="mt-5 text-base leading-8 text-foreground/75">
              {data.audience}
            </p>
          </div>
          <div className="divide-y divide-primary/20 border-y border-primary/20">
            {data.reasons.map((reason) => (
              <div key={reason} className="flex gap-4 py-5">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <p className="leading-7 text-foreground/75">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#020a06]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <FileSearch className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold text-white">
              What must be discovered in {data.sourceName}
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/70">
              {data.discoveryIntro}
            </p>
          </div>
          <ul className="mt-9 grid gap-x-10 gap-y-0 border-y border-primary/20 md:grid-cols-2">
            {data.discovery.map((item) => (
              <li
                key={item}
                className="border-b border-primary/10 py-4 text-sm leading-7 text-foreground/75 last:border-b-0 md:last:border-b"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-white">
            Migration questions specific to {data.sourceName}
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/70">
            These are the places where a technically complete export can still
            produce an operationally incomplete case file.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {data.concerns.map((concern) => (
            <section
              key={concern.title}
              className="rounded-md border border-primary/20 bg-[#031009] p-6"
            >
              <h3 className="text-xl font-semibold text-primary">{concern.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">
                {concern.body}
              </p>
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#020a06]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Database className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="mt-5 text-3xl font-semibold text-white">
                A phased {data.sourceName} migration
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/70">
                The destination is not trusted because a load completed. It is
                trusted after representative matters have been reconciled and used
                by the people who understand them.
              </p>
            </div>
            <ol className="divide-y divide-primary/20 border-y border-primary/20">
              {data.phases.map((phase) => (
                <li key={phase.step} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-sm font-semibold text-primary">
                    {phase.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">
                      {phase.body}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/60">
                      <span className="font-semibold text-primary/80">Output:</span>{" "}
                      {phase.output}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <section>
            <Scale className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold text-white">
              What the firm must decide and provide
            </h2>
            <ul className="mt-7 divide-y divide-primary/20 border-y border-primary/20">
              {data.firmDecisions.map((item) => (
                <li key={item} className="py-4 text-sm leading-7 text-foreground/75">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <ClipboardCheck className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold text-white">
              What Possible Minds does
            </h2>
            <ul className="mt-7 divide-y divide-primary/20 border-y border-primary/20">
              {data.possibleMindsWork.map((item) => (
                <li key={item} className="py-4 text-sm leading-7 text-foreground/75">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#020a06]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white">
              What is validated before cutover
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/70">
              Validation combines reconciliation with representative-matter review.
              No single count proves that a file is usable.
            </p>
          </div>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {data.validations.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-md border border-primary/20 bg-black/40 px-4 py-4 text-sm leading-6 text-foreground/75"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold text-white">Common questions</h2>
        <div className="mt-8 divide-y divide-primary/20 border-y border-primary/20">
          {data.faqs.map((faq) => (
            <section key={faq.question} className="py-6">
              <h3 className="text-xl font-semibold text-primary">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/75">{faq.answer}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#031009]">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-3xl font-semibold text-white">
            Bring the source, destination, volume, integrations, and timing
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-foreground/70">
            We will help turn those facts into a migration scope, identify the hard
            questions early, and show what must be tested before a cutover decision.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 h-auto min-h-12 max-w-full whitespace-normal px-5 py-3 text-center"
          >
            <Link href={MIGRATION_CONSULTATION_HREF}>
              Request a migration consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-5 border-b border-primary/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
              Related migration services
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Plan the whole move or review another source system
            </h2>
          </div>
          <Link
            href="/services/case-management-migration"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Migration service overview
          </Link>
        </div>
        <div className="grid gap-4 pt-7 sm:grid-cols-2">
          {relatedSystems.map((system) => (
            <Link
              key={system.href}
              href={system.href}
              className="group rounded-md border border-primary/20 bg-[#020a06] p-5 hover:border-primary/40"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-primary">
                {system.navLabel}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/60">
                {system.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View service
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-xs leading-6 text-foreground/50">
          {data.sourceName} and other product names are trademarks of their
          respective owners. Possible Minds is an independent service provider and
          does not claim certification, endorsement, partnership, or affiliation
          with the named software vendors.
        </p>
      </section>
    </div>
  );
}
