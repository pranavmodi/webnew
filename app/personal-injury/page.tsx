import { Metadata } from "next";
import Link from "next/link";

import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `AI Operations for Personal Injury Firms | ${SITE_NAME}`,
  description:
    "From intake to lien resolution — automation built by people who understand PI. AI-powered solutions for personal injury law firms.",
};

const painPoints = [
  {
    title: "Missed Intake Calls",
    stat: "$5K–$50K",
    description:
      "Every missed call is a lost case. After-hours inquiries, slow callbacks, and overwhelmed front desks silently drain your pipeline.",
  },
  {
    title: "Manual Lien Negotiation",
    stat: "40+ hrs/mo",
    description:
      "Your staff spends weeks chasing providers, negotiating reductions, and reconciling balances that AI can handle in minutes.",
  },
  {
    title: "Invisible in AI Search",
    stat: "0 citations",
    description:
      "Gemini, ChatGPT, and Perplexity are answering your prospects&apos; questions. If your firm isn&apos;t in those answers, you don&apos;t exist.",
  },
  {
    title: "Disconnected Systems",
    stat: "3–5 tools",
    description:
      "Your CRM doesn&apos;t talk to your medical providers. Your intake forms don&apos;t sync with your case management. Gaps become errors.",
  },
];

const solutions = [
  {
    href: "/solutions/email-automation",
    title: "Email Automation",
    description:
      "Auto-triage intake emails, route to the right paralegal, and respond to routine queries instantly.",
  },
  {
    href: "/solutions/support-agent",
    title: "Support Agent",
    description:
      "24/7 AI chat that answers client questions, collects case details, and books consultations.",
  },
  {
    href: "/solutions/outbound-voice-ai",
    title: "Outbound Voice AI",
    description:
      "Automated follow-up calls for missed intakes, appointment reminders, and lien status updates.",
  },
  {
    href: "/solutions/lien-reduction",
    title: "Lien Reduction",
    description:
      "AI-powered lien negotiation that analyzes balances, generates reduction letters, and tracks resolutions.",
  },
];

const caseStudies = [
  {
    href: "/healthcare-case-study",
    title: "Healthcare Operations",
    description:
      "How a California imaging provider automated 73% of their inbox and saved 520+ staff hours monthly.",
    tag: "Healthcare",
  },
  {
    href: "/law-case-study",
    title: "Personal Injury Law",
    description:
      "How a PI firm recaptured lost leads and cut lien processing time by 60%.",
    tag: "Legal",
  },
];

const blogPosts = [
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
  return (
    <div className="bg-black pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              For Personal Injury Firms
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              AI Operations for Personal Injury Firms
            </h1>
            <p className="mx-auto max-w-3xl text-base text-foreground/80 sm:text-lg">
              From intake to lien resolution — automation built by people who understand PI.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center rounded-full border border-primary/30 px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                See Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            The Problems Costing You Cases
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Most PI firms lose revenue to operational gaps they can&apos;t see. Here&apos;s where the money goes.
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

      {/* Solutions */}
      <section
        id="solutions"
        className="mx-auto max-w-5xl px-4 py-20 sm:px-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Solutions Built for PI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Each module works standalone or together — plug into your existing stack without ripping anything out.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {solutions.map((sol) => (
            <Link
              key={sol.href}
              href={sol.href}
              className="group rounded-2xl border border-primary/25 bg-[#04150d] p-6 transition hover:border-primary/40 hover:bg-[#04150d]/80"
            >
              <h3 className="text-xl font-semibold text-primary transition group-hover:text-[#00ff41]">
                {sol.title}
              </h3>
              <p className="mt-3 text-sm text-foreground/70">
                {sol.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Real Results
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
            Free Tool
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-[#00ff41] sm:text-4xl">
            Maps GEO Readiness Checker
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Find out if your firm shows up when AI answers your prospects&apos; questions.
            Free, instant, no email required.
          </p>
          <Link
            href="http://67.205.132.87:8004/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Check Your Visibility →
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold text-[#00ff41] sm:text-4xl">
            Ready to Stop Losing Cases to Broken Ops?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            Book a 30-minute strategy call. We&apos;ll audit your intake flow, identify the biggest leaks, and show you what automation looks like for your firm.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#00ff41] px-8 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
            >
              Book a Strategy Call
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
