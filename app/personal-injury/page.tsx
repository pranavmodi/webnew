import { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/constants";
import { piProblemPages } from "@/lib/pi-pages";

export const metadata: Metadata = {
  title: `AI Systems for Personal Injury Firms | ${SITE_NAME}`,
  description:
    "Diagnostic-led AI systems for personal injury firms: intake leakage, AI visibility, records, liens, follow-up, and vendor-risk controls.",
  keywords: [
    "AI for personal injury law firms",
    "PI firm intake automation",
    "legal AI operations",
    "lien negotiation automation",
    "law firm AI chatbot",
    "personal injury case management AI",
    "AI intake for lawyers",
  ],
};

const painPoints = [
  {
    title: "Leads going cold",
    stat: "Intake",
    description:
      "After-hours forms, missed calls, slow callbacks, and overwhelmed intake teams turn paid demand into signed cases for someone else.",
  },
  {
    title: "Files stalling after sign-up",
    stat: "Cycle time",
    description:
      "Records, bills, treatment updates, liens, and client follow-up create delays that push settlement checks further out.",
  },
  {
    title: "Invisible in AI answers",
    stat: "Visibility",
    description:
      "When AI systems answer a crash victim&apos;s question, your competitors may be cited while your firm is missing or described incorrectly.",
  },
  {
    title: "Unsafe AI adoption",
    stat: "Vendor risk",
    description:
      "Staff may already be experimenting with AI while the firm lacks policy, vendor diligence, data controls, or review rules.",
  },
];

const solutions = [
  {
    href: "/solutions/outbound-voice-ai",
    title: "Missed-call and after-hours intake",
    description:
      "Call back web leads, missed callers, and after-hours inquiries before they go cold.",
    details:
      "Queue-safe voice automation reaches leads quickly, qualifies the basics, captures case facts, and transfers only when your team can take the call. The wedge is the unstaffed moment, where the alternative is often voicemail or no callback.",
  },
  {
    href: "/solutions/support-agent",
    title: "Website and chat intake",
    description:
      "Turn anonymous visitors into structured, qualified conversations.",
    details:
      "The system collects incident type, timeline, injuries, treatment status, insurance details, language preference, and urgency, then routes high-intent prospects with context instead of making staff start from a blank screen.",
  },
  {
    href: "/solutions/email-automation",
    title: "Records and status automation",
    description:
      "Clean up the inbox, document chase, and provider follow-up loops that slow cases down.",
    details:
      "Email triage, attachment extraction, missing-record reminders, provider follow-up, and case-status routing reduce the repetitive work that keeps paralegals out of higher-value file movement.",
  },
  {
    href: "/solutions/lien-reduction",
    title: "Lien and disbursement workflow",
    description:
      "Track liens, spot exceptions, and speed up the closeout work that frustrates clients.",
    details:
      "We focus on the repeatable pieces first: identifying lien correspondence, extracting provider and balance details, tracking status, drafting follow-ups, and surfacing anomalies for human review before action.",
  },
  {
    href: "/personal-injury/vendor-risk-governance",
    title: "AI policy and vendor-risk controls",
    description:
      "Make AI usable without letting client data or firm judgment drift into a black box.",
    details:
      "We help define what AI may touch, where human review is required, how vendor data handling is evaluated, and how audit trails should work before sensitive workflows go live.",
  },
];

const whyUsPoints = [
  {
    title: "We diagnose before we demo",
    description:
      "The first conversation is about the leak: intake response, file movement, AI visibility, data readiness, or vendor risk. If a workflow is not ready, we say so and define the blocker.",
  },
  {
    title: "Built from real medical-legal operations",
    description:
      "We run systems that process high-volume provider communication, records, billing, status, and lien-adjacent workflows. The edge cases are not theoretical to us.",
  },
  {
    title: "Narrow first workflow, not a giant platform rollout",
    description:
      "Most firms should start with one measurable workflow: after-hours capture, records chasing, lien follow-up, or a client-update loop. The system earns expansion by proving value.",
  },
  {
    title: "Human oversight and firm ownership",
    description:
      "Sensitive and low-confidence actions route to your team. Your firm keeps the rules, review history, workflow knowledge, and audit trail instead of depending on an opaque vendor layer.",
  },
];

const faqs = [
  {
    question: "What happens before you recommend a build?",
    answer:
      "We look for a specific leak: slow speed-to-lead, after-hours drop-off, file stalls, records follow-up, lien delays, AI visibility gaps, or unsafe AI use. If the workflow is not ready, we name the blocker before proposing software.",
  },
  {
    question: "Will AI replace my intake staff or paralegals?",
    answer:
      "No. The best first workflows are the repetitive or unstaffed moments: missed-call capture, after-hours qualification, records chasing, status follow-up, and lien tracking. Your team keeps the judgment calls and gets cleaner handoffs.",
  },
  {
    question: "Where is AI intake safest to start?",
    answer:
      "The safest starting point is the delay around the human conversation: acknowledging web leads and missed calls, organizing facts, detecting urgency, and alerting the right person. Serious or competitive matters should move to a lawyer or intake closer; AI should not become the relationship.",
  },
  {
    question: "How do you reduce vendor risk?",
    answer:
      "We scope access narrowly, avoid using client data to train shared models, keep human review on sensitive or low-confidence actions, document what the system did, and help define realistic AI-use policy and vendor diligence before sensitive workflows go live.",
  },
  {
    question: "What if AI makes a mistake on a lien or intake qualification?",
    answer:
      "Every AI decision has confidence scoring and escalation thresholds. Low-confidence classifications get routed to your team for review — the system flags exactly what it's unsure about and why. For lien processing, modifications and anomalies (strikethroughs, missing signatures, unusual terms) are always surfaced for human verification before any action is taken.",
  },
  {
    question: "Do you work with firms of all sizes?",
    answer:
      "We work best with mid-size PI firms that have enough volume to feel the pain and enough operational structure to integrate a workflow. The clearest fit is usually a plaintiff firm with paid or web lead flow, auto-accident volume, and a modern case-management system.",
  },
  {
    question: "How is this different from my case management software's built-in AI features?",
    answer:
      "Case-management systems organize cases. We build around the work between systems: intake response, triage, records follow-up, lien tracking, status communication, and human review. The goal is to feed cleaner information into the stack you already use.",
  },
];

const caseStudies = [
  {
    href: "/law-case-study",
    title: "Personal Injury Law",
    description:
      "How an anonymized plaintiff firm added a transparent, sub-90-second automated response target and human escalation around its existing intake team.",
    tag: "Legal",
  },
  {
    href: "/healthcare-case-study",
    title: "Medical-Legal Operations",
    description:
      "How a California imaging provider automated 73% of its inbox and proved the operating pattern at scale.",
    tag: "Scale proof",
  },
];

const blogPosts = [
  {
    href: "/blog/ai-pi-firm-judgment-workflows",
    title: "AI Will Make Intelligence Cheap. Your PI Firm's Judgment Is the Moat.",
    tag: "AI Strategy",
  },
  {
    href: "/blog/personal-injury-marketing-attribution",
    title: "Marketing Attribution for PI Firms: Follow the Case, Not the Click",
    tag: "Intake Analytics",
  },
  {
    href: "/blog/personal-injury-intake-marketing-system",
    title: "How to Build a Personal Injury Intake System That Converts",
    tag: "Intake Operations",
  },
  {
    href: "/blog/ai-change-management-personal-injury-firms",
    title: "The Fastest AI Still Moves at the Speed of the Firm",
    tag: "AI Transformation",
  },
  {
    href: "/blog/headless-legal-software-pi-vendor-rankings",
    title: "Headless Legal Software: Which PI Vendors Are Ready for AI Agents?",
    tag: "Vendor Strategy",
  },
  {
    href: "/blog/insurance-ai-claims-pi-firms",
    title: "Insurance AI Is Scoring PI Claims. Firms Need a Counter-System.",
    tag: "Claims AI",
  },
  {
    href: "/blog/from-prompts-to-systems-law-firms-ai",
    title: "From Prompts to Systems: How Law Firms Should Absorb AI",
    tag: "AI Strategy",
  },
  {
    href: "/blog/sb-623-rideshare-injury-pi-firms",
    title: "SB 623 and Rideshare Injury Cases: What California PI Firms Should Do Now",
    tag: "PI Operations",
  },
  {
    href: "/blog/gemini-maps-pi-firms",
    title: "Google Just Put Gemini in Maps. Here&apos;s What PI Firms Need to Do Now.",
    tag: "Legal AI",
  },
  {
    href: "/blog/the-200000-satisfying-answer",
    title: "The $200,000 Answer Your Clients Never Called About",
    tag: "Legal AI",
  },
  {
    href: "/blog/ai-search-law-firm-marketing",
    title: "Your Rankings Held. Your Calls Didn&apos;t.",
    tag: "Legal AI",
  },
  {
    href: "/blog/the-science-of-client-intake-conversion",
    title: "The Science of Client Intake and Lead Conversion",
    tag: "For PI Firms",
  },
];

export default function PersonalInjuryPage() {
  const personalInjuryStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/personal-injury#service`,
      name: "AI systems for personal injury firms",
      serviceType: "AI operations systems for personal injury law firms",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      description:
        "Diagnostic-led AI systems for personal injury firms across intake, case development, client communication, settlement and liens, firm intelligence, vendor risk, and growth visibility.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PI firm operating systems",
        itemListElement: piProblemPages.map((category) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: category.navLabel,
            description: category.metaDescription,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}/personal-injury#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="bg-black pb-24">
      <JsonLd data={personalInjuryStructuredData} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Diagnostic-led AI for Personal Injury Firms
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Find the leak. Fix the workflow. Keep control of the AI.
            </h1>
            <p className="mx-auto max-w-3xl text-base text-foreground/80 sm:text-lg">
              Possible Minds helps plaintiff firms identify the operational gaps
              costing signed cases, cash flow, and client trust, then builds
              narrow, firm-owned AI systems around the workflows that are ready.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#diagnostics"
                className="inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
              >
                Get a firm-specific diagnostic
              </Link>
              <Link
                href="/law-case-study"
                className="inline-flex items-center rounded-full border border-primary/30 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                See PI case study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section id="diagnostics" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Start with the expensive question
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            PI owners do not need another abstract AI demo. They need to know
            which leak is real, whether it is safe to automate, and what the first
            fix should be.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6"
            >
              <div className="text-3xl font-semibold text-[#00ff41]">
                {point.stat}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-primary">
                {point.title}
              </h3>
              <p
                className="mt-2 text-sm text-foreground/70"
                dangerouslySetInnerHTML={{ __html: point.description }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Operating Categories */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            The PI firm systems we organize around
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Each category can hold today&apos;s workflow offers and future
            products without turning the site into a list of disconnected tools.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {piProblemPages.map((category) => (
            <Link
              key={category.slug}
              id={category.slug}
              href={`/personal-injury/${category.slug}`}
              className="group scroll-mt-24 rounded-2xl border border-primary/25 bg-[#04150d] p-6 transition hover:border-primary/40 hover:bg-[#04150d]/80"
            >
              <h3 className="text-xl font-semibold text-primary transition group-hover:text-[#00ff41]">
                {category.navLabel}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {category.intro}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                View page →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="mx-auto max-w-5xl px-4 py-20 sm:px-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            What we build after the diagnosis
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            We do not start with a platform migration. We start with one workflow
            tied to signed cases, cycle time, staff capacity, or risk reduction.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {solutions.map((sol) => (
            <Link
              key={`${sol.title}-${sol.href}`}
              href={sol.href}
              className="group block rounded-2xl border border-primary/25 bg-[#04150d] p-6 transition hover:border-primary/40 hover:bg-[#04150d]/80 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-primary transition group-hover:text-[#00ff41] sm:text-2xl">
                {sol.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-foreground/80">
                {sol.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {sol.details}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why PI Firms Choose Us */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Why this is different from another AI vendor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            The trust problem is the product problem: the system has to fit the
            firm&apos;s workflow, data obligations, and adoption reality.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyUsPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6"
            >
              <h3 className="text-lg font-semibold text-[#00ff41]">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Proof from live operations
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <Link
              key={cs.href}
              href={cs.href}
              className="group rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-8 transition hover:border-primary/40"
            >
              <span className="inline-flex rounded-full border border-primary/20 bg-black/40 px-3 py-1 text-xs text-muted-foreground">
                {cs.tag}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-primary transition group-hover:text-[#00ff41]">
                {cs.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/70">
                {cs.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Read case study →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PI Blog Posts */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            PI Insights & Research
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Data-driven thinking on what&apos;s changing for personal injury firms.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex items-center justify-between rounded-2xl border border-primary/25 bg-[#04150d] p-5 transition hover:border-primary/40 hover:bg-[#04150d]/80"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex shrink-0 rounded-full border border-primary/20 bg-black/40 px-3 py-1 text-xs text-muted-foreground">
                  {post.tag}
                </span>
                <h3
                  className="text-base font-semibold text-primary transition group-hover:text-[#00ff41] sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </div>
              <span className="hidden shrink-0 text-sm font-medium text-primary sm:block">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Free Tool CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-8 text-center sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Free Diagnostic
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-[#00ff41] sm:text-4xl">
            See how AI systems read your firm
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Run a public-footprint diagnostic that checks whether your website,
            attorney proof, local relevance, and third-party signals are strong
            enough for answer systems to cite.
          </p>
          <Link
            href="https://reputable.getpossibleminds.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Run the diagnostic →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Common questions from PI firm leaders evaluating AI automation.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-primary/25 bg-[#04150d] p-6"
            >
              <h3 className="text-base font-semibold text-primary sm:text-lg">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/personal-injury/faq"
            className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            View the full PI AI FAQ
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold text-[#00ff41] sm:text-4xl">
            Start with the leak, not the demo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Send us your firm website and market. We&apos;ll tell you which AI
            opportunity is real, which one is risky, and where the first dollar of
            ROI is likely to come from.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Book a diagnostic call
            </Link>
            <Link
              href="mailto:hello@possibleminds.ai"
              className="inline-flex items-center rounded-full border border-primary/30 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              hello@possibleminds.ai
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
