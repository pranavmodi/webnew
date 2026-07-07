import { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/constants";
import { piProblemPages } from "@/lib/pi-pages";

const pageUrl = `${SITE_URL}/personal-injury/faq`;
const allFaqs = piProblemPages.flatMap((group) =>
  group.faqs.map((faq) => ({
    ...faq,
    group: group.navLabel,
    href: `/personal-injury/${group.slug}#faq`,
  })),
);

export const metadata: Metadata = {
  title: `Personal Injury AI FAQ | ${SITE_NAME}`,
  description:
    "FAQs for personal injury firms evaluating AI intake, after-hours response, records chasing, client communication, liens, firm intelligence, vendor risk, and AI visibility.",
  keywords: [
    "personal injury AI FAQ",
    "AI for personal injury firms",
    "law firm AI vendor risk",
    "AI intake FAQ",
    "PI firm automation questions",
  ],
};

export default function PersonalInjuryFaqPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: allFaqs.map((faq) => ({
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
          name: "FAQ",
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
              PI AI FAQ
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Questions PI owners ask before trusting AI with real workflows
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              Practical answers on intake automation, after-hours response,
              records chasing, client communication, lien workflows, reporting,
              AI visibility, and vendor risk. The through-line is simple: use AI
              where the workflow is clear, keep human review where judgment
              matters, and make vendor data exposure explicit.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={CALENDLY_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
              >
                Diagnose your firm
              </Link>
              <Link
                href="/personal-injury/vendor-risk-governance"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                Start with vendor risk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {piProblemPages.map((group) => (
            <Link
              key={group.slug}
              href={`#${group.slug}`}
              className="rounded-2xl border border-primary/25 bg-[#04150d] p-5 transition hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {group.eyebrow}
              </div>
              <div className="mt-3 text-base font-semibold text-[#00ff41]">
                {group.navLabel}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="space-y-14">
          {piProblemPages.map((group) => (
            <section
              key={group.slug}
              id={group.slug}
              className="scroll-mt-24 border-t border-primary/20 pt-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {group.eyebrow}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-[#00ff41] sm:text-3xl">
                    {group.navLabel}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {group.buyerProblem}
                  </p>
                  <Link
                    href={`/personal-injury/${group.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-primary transition hover:text-[#00ff41]"
                  >
                    View the full workflow page →
                  </Link>
                </div>
                <div className="space-y-4">
                  {group.faqs.map((faq) => (
                    <article
                      key={faq.question}
                      className="rounded-2xl border border-primary/25 bg-[#04150d] p-6"
                    >
                      <h3 className="text-base font-semibold text-primary sm:text-lg">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold text-[#00ff41] sm:text-4xl">
            The right FAQ depends on the workflow leak
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Send us your firm site and the workflow you are worried about. We
            will tell you which questions matter before you buy, build, or roll
            out another AI tool.
          </p>
          <Link
            href={CALENDLY_URL}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Book a diagnostic call
          </Link>
        </div>
      </section>
    </div>
  );
}
