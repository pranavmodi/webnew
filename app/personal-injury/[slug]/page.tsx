import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { CALENDLY_URL, SITE_URL } from "@/lib/constants";
import { PI_PROBLEM_PAGE_BY_SLUG, piProblemPages } from "@/lib/pi-pages";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return piProblemPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = PI_PROBLEM_PAGE_BY_SLUG[params.slug];
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: [
      page.title,
      page.eyebrow,
      "AI for personal injury firms",
      "personal injury law firm automation",
      "PI firm operations",
    ],
  };
}

export default function PiProblemPage({ params }: PageProps) {
  const page = PI_PROBLEM_PAGE_BY_SLUG[params.slug];
  if (!page) notFound();

  const relatedPages = piProblemPages.filter((item) => item.slug !== page.slug).slice(0, 3);
  const pageUrl = `${SITE_URL}/personal-injury/${page.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.title,
      serviceType: page.title,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      description: page.metaDescription,
      audience: {
        "@type": "Audience",
        audienceType: "Personal injury law firms",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: page.faqs.map((faq) => ({
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
          name: "Personal Injury",
          item: `${SITE_URL}/personal-injury`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.navLabel,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-6">
            <Link
              href="/personal-injury"
              className="inline-flex text-sm font-semibold text-primary transition hover:text-[#00ff41]"
            >
              ← Personal injury AI systems
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {page.eyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              {page.intro}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={CALENDLY_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
              >
                Diagnose this workflow
              </Link>
              <Link
                href="/law-case-study"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                See PI case study
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Buyer problem
          </div>
          <p className="mt-4 text-lg leading-relaxed text-foreground/85">
            {page.buyerProblem}
          </p>
        </div>
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Best fit
          </div>
          <p className="mt-4 text-lg leading-relaxed text-foreground/85">
            {page.bestFit}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3">
        <div>
          <h2 className="text-2xl font-semibold text-primary">What improves</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/75">
            {page.outcomes.map((item) => (
              <li key={item} className="rounded-xl border border-primary/20 bg-[#04150d] p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary">Workflow shape</h2>
          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/75">
            {page.workflow.map((item, index) => (
              <li key={item} className="rounded-xl border border-primary/20 bg-[#04150d] p-4">
                <span className="mr-2 font-mono text-primary">{index + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary">Why us</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/75">
            {page.proof.map((item) => (
              <li key={item} className="rounded-xl border border-primary/20 bg-[#04150d] p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Questions PI owners ask
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {page.faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
              <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-8">
          <h2 className="text-3xl font-semibold text-[#00ff41]">
            Related PI systems
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedPages.map((related) => (
              <Link
                key={related.slug}
                href={`/personal-injury/${related.slug}`}
                className="rounded-xl border border-primary/20 bg-black/30 p-4 transition hover:border-primary/40 hover:bg-primary/10"
              >
                <h3 className="font-semibold text-primary">{related.navLabel}</h3>
                <p className="mt-2 text-sm text-foreground/65">{related.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
