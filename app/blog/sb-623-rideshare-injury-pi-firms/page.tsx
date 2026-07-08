import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "sb-623-rideshare-injury-pi-firms";
const pageTitle =
  "SB 623 and Rideshare Injury Cases: What California PI Firms Should Do Now";
const pageDescription =
  "California SB 623 is a major but targeted change for PI firms handling Uber and Lyft injury cases with lien-based treatment. Here are the operating, valuation, discovery, and vendor-risk implications.";
const pageUrl = `${SITE_URL}/blog/${slug}`;

const takeaways = [
  {
    label: "1",
    title: "This is not a statewide reset of every California auto case.",
    body:
      "The practical blast radius is narrower: covered post-January 1, 2027 automobile accident claims against a network company, subsidiary, or app-based driver where the claimant used lien-based treatment.",
  },
  {
    label: "2",
    title: "For rideshare cases, medical specials may anchor much lower.",
    body:
      "Lien-based medical expense recovery generally moves toward a 70th percentile FAIR Health or comparable commercial benchmark, with a further cap when the lien or receivable has been sold or factored.",
  },
  {
    label: "3",
    title: "Lien finance and referral relationships become discovery issues.",
    body:
      "Assignments, factoring, consideration paid, referral history, ownership, investment, lending, and compensation relationships move closer to the center of case strategy.",
  },
  {
    label: "4",
    title: "The operational answer is not panic. It is segmentation.",
    body:
      "Firms need a clean workflow for identifying covered TNC claims, coding lien bills, tracking transfer disclosures, adjusting valuation, and routing provider/referral conflicts to review.",
  },
];

const implications = [
  {
    title: "Intake",
    body:
      "Add early questions for rideshare involvement, app status, passenger/driver role, accident date, lien-based providers, and whether any treatment or lien obligation predates January 1, 2027.",
  },
  {
    title: "Medical specials",
    body:
      "Stop treating gross lien bills as the default settlement anchor in covered rideshare claims. Build the first valuation model around coded services, geographic benchmarks, and transfer history.",
  },
  {
    title: "Provider workflow",
    body:
      "Require itemized CPT, HCPCS, or ICD-level billing support early. A demand package that cannot map services to benchmarkable codes is weaker under the new regime.",
  },
  {
    title: "Lien finance",
    body:
      "Track whether a lien, receivable, or right to payment has been sold, assigned, financed, factored, or otherwise transferred, and capture the consideration paid or payable.",
  },
  {
    title: "Discovery",
    body:
      "Expect more requests around referral history, ownership, investment, lending, compensation, assignment agreements, and provider declarations.",
  },
  {
    title: "Governance",
    body:
      "Treat attorney-provider financial relationships as a risk-control workflow, not an after-the-fact explanation. Escalate ownership, referral compensation, and add-on lien-fee issues before they touch the file.",
  },
];

const operatingChecklist = [
  "Add a TNC coverage branch to intake and case-opening checklists.",
  "Create a post-January 1, 2027 rideshare-lien flag in the case management system.",
  "Require procedure-code-level lien bills before demand preparation.",
  "Capture FAIR Health or comparable benchmark assumptions in the valuation worksheet.",
  "Track lien transfer, factoring, assignment, and purchase-price disclosures.",
  "Separate gross billed charges from recoverable medical-specials assumptions.",
  "Review attorney-provider referral and ownership relationships before provider routing.",
  "Update mediation briefs and demand templates so above-cap bills are not used as the wrong anchor.",
];

const faqs = [
  {
    question: "Does SB 623 affect every California car accident case?",
    answer:
      "No. Based on the bill materials, the medical-lien provisions are targeted to covered claims against a network company, subsidiary, or app-based driver arising from automobile accidents on or after January 1, 2027 where the claimant used lien-based treatment.",
  },
  {
    question: "Does SB 623 cap attorney fees?",
    answer:
      "The CalMatters report says the compromise does not cap attorney fees. That is a major difference from Uber's broader ballot-measure proposal, which reportedly would have reached contingency-fee economics across a wider set of auto cases.",
  },
  {
    question: "What is the biggest operational change for PI firms?",
    answer:
      "The biggest operational change is that rideshare lien cases need earlier classification and valuation. Firms should know, before demand preparation, whether the case is covered, whether treatment is lien based, whether the lien has been transferred, and what benchmark or transfer-price cap may apply.",
  },
];

export const metadata: Metadata = {
  title: `${pageTitle} | ${SITE_NAME}`,
  description: pageDescription,
  keywords: [
    "SB 623 personal injury",
    "California rideshare injury law",
    "Uber Lyft injury cases",
    "medical lien reform California",
    "PI firm lien workflow",
    "rideshare accident medical specials",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function BlogPostPage() {
  const post = BLOG_POSTS_BY_SLUG[slug];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: pageTitle,
      description: pageDescription,
      url: pageUrl,
      datePublished: "2026-07-08",
      dateModified: "2026-07-08",
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: pageUrl,
      articleSection: "Industry Analysis",
      keywords:
        "SB 623, rideshare injury cases, California personal injury firms, medical liens, Uber, Lyft, lien-based treatment",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
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
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageTitle,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/40">/</span>
              <span>Industry Analysis</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              SB 623 and Rideshare Injury Cases: What California PI Firms Should Do Now
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              California&apos;s Uber compromise is not a broad PI apocalypse. It is
              a major, targeted change for rideshare injury cases with lien-based
              treatment, and it should change how firms classify, value, document,
              and negotiate those files.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {[post.author, post.date, post.readTime].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        <section className="rounded-2xl border border-primary/25 bg-[#04150d] p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            TL;DR for PI owners
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-[#00ff41]">
            Yes, SB 623 has major implications. But the implications are concentrated.
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/75">
            For California personal injury firms that handle Uber, Lyft, delivery
            network, or app-based-driver crash cases, SB 623 should trigger a
            workflow update. For firms handling ordinary auto, premises, product,
            or non-TNC injury cases, the direct effect appears much narrower.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {takeaways.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-black/35 p-5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 text-sm font-semibold text-primary">
                  {item.label}
                </div>
                <h3 className="mt-4 text-base font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What Happened
          </h2>
          <p className="leading-relaxed">
            On June 25, 2026, CalMatters reported that Governor Gavin Newsom
            signed a compromise bill that allowed Uber and California lawyers to
            avoid a high-cost ballot fight over ride-hailing liability. The key
            political trade: Uber avoided a broader fight over crash liability and
            attorney-fee economics, while plaintiffs&apos; lawyers avoided a ballot
            measure that reportedly would have reached all California crashes.
          </p>
          <p className="leading-relaxed">
            The chaptered bill, SB 623, is narrower than the ballot-measure
            threat. The CalMatters report says the law applies to ride-hailing
            crashes only, does not cap attorney fees, limits recovery for
            lien-based medical treatment, adds attorney-provider relationship
            restrictions, and requires new driver background-check rules.
          </p>
          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 p-5 text-sm leading-relaxed text-foreground/70">
            <strong className="text-primary">Sources reviewed:</strong>{" "}
            <a
              href="https://calmatters.org/economy/2026/06/uber-ballot-measure-deal/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              CalMatters&apos; June 25, 2026 report
            </a>
            , the{" "}
            <a
              href="https://calmatters.digitaldemocracy.org/bills/ca_202520260sb623"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              SB 623 bill tracker
            </a>
            , and the{" "}
            <a
              href="https://sjud.senate.ca.gov/system/files/2026-06/sjud-info-hearing-sb-623-background-paper.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Senate Judiciary Committee background paper
            </a>
            . This analysis is for law-firm operating strategy, not legal advice.
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Core Legal-Operations Shift
          </h2>
          <p className="leading-relaxed">
            The practical shift is that a covered rideshare case is no longer
            just a liability file with a medical-bill reasonableness fight
            attached. It becomes a classification and documentation problem from
            the first client conversation.
          </p>
          <p className="leading-relaxed">
            A firm needs to know whether the defendant is a network company,
            subsidiary, or app-based driver; whether the accident occurred on or
            after January 1, 2027; whether the claimant received lien-based
            treatment; whether the provider&apos;s bills are properly itemized;
            whether the lien has been sold, assigned, financed, factored, or
            otherwise transferred; and whether attorney-provider relationships
            create discoverable or disciplinary risk.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {implications.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-[#04150d] p-5"
              >
                <h3 className="text-base font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What Changes in Case Value
          </h2>
          <p className="leading-relaxed">
            In a traditional lien-treatment case, the plaintiff may begin
            settlement strategy with the provider&apos;s billed charges, then fight
            over reasonable value, necessity, causation, and expert testimony.
            In a covered SB 623 rideshare case, the opening number may be
            constrained much earlier.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-primary/20 bg-[#04150d] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Old anchor
              </div>
              <div className="mt-3 text-3xl font-semibold text-[#00ff41]">
                Billed liens
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                The demand often started from gross lien bills, even if the
                defense attacked reasonable value.
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-[#04150d] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                New benchmark
              </div>
              <div className="mt-3 text-3xl font-semibold text-[#00ff41]">
                70th percentile
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Covered lien-based medical expenses generally move toward a
                FAIR Health or comparable commercial billed-charge benchmark.
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-[#04150d] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Transfer cap
              </div>
              <div className="mt-3 text-3xl font-semibold text-[#00ff41]">
                Purchase price
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                If the lien was sold or factored, the recoverable number may be
                pulled down to the consideration paid or payable.
              </p>
            </div>
          </div>
          <p className="leading-relaxed">
            That does not mean non-economic damages disappear. It does mean the
            medical-specials anchor, mediation psychology, lien negotiation, and
            client-net analysis can move materially.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What Does Not Change
          </h2>
          <p className="leading-relaxed">
            The most important strategic point is what SB 623 does not appear to
            do. It is not the broader Uber ballot measure. It does not appear to
            apply to every California vehicle crash. It does not appear to cap
            contingency fees. It does not eliminate the need to prove liability,
            causation, necessity, permanency, wage loss, or non-economic harm.
          </p>
          <p className="leading-relaxed">
            It also does not make the defendant&apos;s number automatically right.
            The Senate Judiciary materials note that defendants may still
            challenge reasonableness, medical necessity, billing accuracy,
            coding, and causation. The difference is that covered lien-based
            medical bills now carry a more explicit statutory framework.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Case Example
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-[#00ff41]">
              A Covered Uber Crash with Lien-Based Treatment
            </h2>
          </div>
          <p className="leading-relaxed">
            Assume a passenger is injured in an Uber crash in Los Angeles on
            February 15, 2027. Liability is strong. The passenger receives
            orthopedic care, imaging, injections, and a cervical procedure, much
            of it from lien-based providers. Later, the lien package is sold to a
            funding company.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-primary/20 bg-[#04150d] p-5">
              <h3 className="text-lg font-semibold text-primary">
                Earlier valuation posture
              </h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-2">
                  <dt className="text-foreground/65">Lien bills</dt>
                  <dd className="font-semibold text-foreground">$260,000</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-2">
                  <dt className="text-foreground/65">Wage loss</dt>
                  <dd className="font-semibold text-foreground">$20,000</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-2">
                  <dt className="text-foreground/65">Pain and suffering anchor</dt>
                  <dd className="font-semibold text-foreground">$250,000</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-foreground/65">Opening demand anchor</dt>
                  <dd className="font-semibold text-[#00ff41]">~$530,000</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-xl border border-primary/20 bg-[#04150d] p-5">
              <h3 className="text-lg font-semibold text-primary">
                SB 623-style valuation posture
              </h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-2">
                  <dt className="text-foreground/65">Gross lien bills</dt>
                  <dd className="font-semibold text-foreground">$260,000</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-2">
                  <dt className="text-foreground/65">70th percentile benchmark</dt>
                  <dd className="font-semibold text-foreground">$145,000</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-2">
                  <dt className="text-foreground/65">Lien purchase price</dt>
                  <dd className="font-semibold text-foreground">$70,000</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-foreground/65">Recoverable past meds model</dt>
                  <dd className="font-semibold text-[#00ff41]">$70,000</dd>
                </div>
              </dl>
            </div>
          </div>

          <p className="leading-relaxed">
            The file may no longer feel like a $260,000 medical-specials case.
            It may feel more like a $70,000 recoverable-medicals case, assuming
            the transfer-price cap applies and the benchmark is higher than the
            transfer consideration. That shift can move the opening demand,
            mediation range, trial presentation, lien-resolution strategy, and
            client-net discussion.
          </p>

          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 p-6">
            <h3 className="text-lg font-semibold text-primary">
              The subtle point: gross settlement may fall faster than client net
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              If the lien burden is also capped, the client&apos;s net may not fall
              dollar-for-dollar with the headline settlement value. The bigger
              pressure may land on settlement anchoring, attorney fee dollars,
              lien-provider economics, and medical-factoring economics.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The 90-Day Firm Response
          </h2>
          <p className="leading-relaxed">
            The firms that adapt fastest will not wait for the first post-2027
            rideshare file to reach mediation. They will update the operating
            model now: intake, case typing, medical-document collection,
            valuation worksheets, provider governance, and settlement review.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {operatingChecklist.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-primary/20 bg-[#04150d] p-4 text-sm leading-relaxed text-foreground/75"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Why This Is a Systems Problem
          </h2>
          <p className="leading-relaxed">
            SB 623 is a legal development, but for PI firms it lands as an
            operating-system problem. The risk is not only that one lawyer
            misreads one statute. The risk is that case data, provider data, lien
            transfer data, and valuation assumptions live in disconnected places
            until it is too late to use them well.
          </p>
          <p className="leading-relaxed">
            That is exactly the type of work that should be systematized:
            classify the case early, gather the right billing fields, flag
            transfer disclosures, surface referral-risk issues, and force human
            review before a demand, mediation brief, or lien compromise relies on
            the wrong anchor.
          </p>
        </section>

        <section id="faq" className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-primary/20 bg-[#04150d] p-5"
              >
                <h3 className="text-base font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Turn SB 623 into a Workflow, Not a Fire Drill
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-foreground/70">
            Possible Minds helps PI firms map intake, lien, valuation, vendor
            risk, and case-development workflows into systems that staff can
            actually use under pressure.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a PI systems diagnostic
            </a>
          </Button>
        </section>
      </article>
    </div>
  );
}
