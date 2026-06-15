import { Metadata } from "next";
import Link from "next/link";

import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `AI Operations for Personal Injury Firms | ${SITE_NAME}`,
  description:
    "AI-powered intake automation, lien negotiation, and case operations for personal injury law firms. Built by a team that processes thousands of medical-legal documents monthly across 60+ provider locations.",
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
    details:
      "Our email classification engine processes thousands of messages monthly, sorting across intake, scheduling, billing, liens, collections, records, and legal categories. It detects urgency, extracts case references, and routes to the right person — reducing response times from hours to minutes. Built from real workflows handling 15+ inbox categories for a medical provider network.",
  },
  {
    href: "/solutions/support-agent",
    title: "Support Agent",
    description:
      "24/7 AI chat that answers client questions, collects case details, and books consultations.",
    details:
      "Most PI firms lose 30-50% of after-hours inquiries because no one is there to answer. Our support agent handles initial case qualification, collects accident details, insurance information, and injury severity — then books directly into your calendar. It knows PI terminology, understands statute of limitations urgency, and escalates complex situations to your team.",
  },
  {
    href: "/solutions/outbound-voice-ai",
    title: "Outbound Voice AI",
    description:
      "Automated follow-up calls for missed intakes, appointment reminders, and lien status updates.",
    details:
      "The first 5 minutes after a lead submits a form are critical — response time directly correlates with conversion rate. Our voice AI calls back missed intakes within minutes, confirms appointments to reduce no-shows, and provides case status updates so your paralegals focus on case work instead of phone tag.",
  },
  {
    href: "/solutions/lien-reduction",
    title: "Lien Reduction",
    description:
      "AI-powered lien negotiation that analyzes balances, generates reduction letters, and tracks resolutions.",
    details:
      "Lien negotiation is one of the most time-consuming parts of PI case resolution. Our system analyzes lien documents using OCR and AI — detecting modifications, verifying signatures, extracting balances, and generating negotiation letters. It handles the back-and-forth with providers, flags edge cases for human review, and tracks every lien from filing to resolution.",
  },
  {
    href: "#solutions",
    title: "Intake Chatbots",
    description:
      "Around-the-clock intake bots that gather case information and qualify leads automatically.",
    details:
      "These systems capture the details that matter before a human ever gets involved: incident type, timeline, injuries, treatment status, insurance, representation history, and urgency. They reduce lead leakage, standardize qualification, and make sure every prospect gets a fast response even after hours.",
  },
  {
    href: "#solutions",
    title: "Document Automation",
    description:
      "Generate demand letters, medical summaries, and routine correspondence without starting from scratch.",
    details:
      "Instead of drafting the same documents over and over, your team works from AI-generated first drafts built from the case file, provider records, and your preferred templates. That means faster turnaround, more consistency, and less time lost to repetitive writing work.",
  },
  {
    href: "#solutions",
    title: "Case Summarization Systems",
    description:
      "Digest large record sets and surface the facts, chronology, and risks that actually matter.",
    details:
      "Medical records, bills, correspondence, and claim documents pile up fast. Our summarization workflows organize them into usable narratives, highlight treatment gaps and contradictions, and help attorneys or paralegals get context in minutes instead of hours.",
  },
  {
    href: "#solutions",
    title: "Follow-Up Automation",
    description:
      "Send reminders, status updates, and document requests automatically at the right moments.",
    details:
      "Clients should not have to chase your firm for updates, and staff should not have to manually remember every reminder. These automations trigger outreach based on case stage, missing paperwork, appointments, and deadlines — keeping cases moving and clients informed.",
  },
  {
    href: "#solutions",
    title: "Internal Knowledge Tools",
    description:
      "Give staff instant access to SOPs, templates, and operational know-how inside one searchable system.",
    details:
      "Instead of asking around for the latest template or guessing how a workflow is supposed to run, staff can query a centralized knowledge layer built on your firm&apos;s SOPs, precedent language, and internal playbooks. This reduces training drag and improves consistency across the team.",
  },
];

const whyUsPoints = [
  {
    title: "Built from Real Operations, Not Theory",
    description:
      "We didn't build PI automation in a lab. Our team runs AI systems that process thousands of medical-legal documents monthly across a 60-location provider network. We've handled the edge cases — ambiguous case law, missing records, conflicting provider claims, documents with strikethroughs that change liability. That operational experience is baked into every product we ship.",
  },
  {
    title: "PI-Specific AI, Not Generic Legal Tech",
    description:
      "General-purpose AI tools don't understand the difference between a lien and a subrogation claim, or why a 3-day gap in treatment matters for case value. Our models are trained on PI-specific workflows: intake qualification, medical records classification, lien negotiation patterns, and provider communication. The domain knowledge is the product.",
  },
  {
    title: "Plug In Without Ripping Out",
    description:
      "You don't need to replace your case management system, retrain your staff, or overhaul your workflows. Each module connects to your existing stack — whether you're on Clio, Smart Advocate, Filevine, or a custom setup. Start with one automation (most firms begin with intake or lien processing) and expand as you see results.",
  },
  {
    title: "Human Oversight Where It Matters",
    description:
      "AI handles the volume, but your team stays in control. Every automated action has clear escalation rules — the system knows when to resolve autonomously and when to surface a decision to a human. No black boxes, no surprises. You see exactly what the AI did, why it did it, and what it flagged for review.",
  },
];

const faqs = [
  {
    question: "How long does it take to set up AI automation for my firm?",
    answer:
      "Most firms are live within 2-4 weeks. We start with a workflow audit to identify your highest-impact automation opportunity (usually intake or lien processing), configure the system to match your existing processes, and run a parallel pilot before going live. No big-bang migrations.",
  },
  {
    question: "Will AI replace my intake staff or paralegals?",
    answer:
      "No. AI handles the repetitive volume work — triaging emails, qualifying leads after hours, chasing lien documents — so your team can focus on the high-value tasks that require human judgment. Most firms find their existing staff becomes more productive, not redundant. The goal is leverage, not replacement.",
  },
  {
    question: "How does AI intake work for personal injury cases?",
    answer:
      "When a potential client reaches out — via web form, chat, phone, or email — our AI qualifies the lead by collecting accident details, injury type, insurance information, and timeline. It understands PI-specific qualification criteria (statute of limitations, liability indicators, injury severity) and either books a consultation directly or routes to your intake team with a complete summary. After-hours inquiries get immediate response instead of hitting voicemail.",
  },
  {
    question: "Is my client data secure?",
    answer:
      "Absolutely. All data is encrypted in transit and at rest. We never use client data to train models. Our systems run on SOC 2-compliant infrastructure, and we can deploy within your existing cloud environment if required. Attorney-client privilege and HIPAA compliance are non-negotiable in our architecture.",
  },
  {
    question: "What if AI makes a mistake on a lien or intake qualification?",
    answer:
      "Every AI decision has confidence scoring and escalation thresholds. Low-confidence classifications get routed to your team for review — the system flags exactly what it's unsure about and why. For lien processing, modifications and anomalies (strikethroughs, missing signatures, unusual terms) are always surfaced for human verification before any action is taken.",
  },
  {
    question: "Do you work with firms of all sizes?",
    answer:
      "We work best with mid-size PI firms — typically 5 to 50 attorneys — that have enough case volume to benefit from automation but aren't so large that they've already built everything in-house. That said, we've helped solo practitioners automate intake and large firms streamline lien operations. The right fit depends on volume and pain points, not headcount.",
  },
  {
    question: "How is this different from my case management software's built-in AI features?",
    answer:
      "Case management platforms are designed to organize your cases. We're designed to work the cases — processing inbound communications, qualifying leads, negotiating liens, and handling the operational tasks between your CMS entries. Think of us as the intelligent layer that feeds clean, processed information into whatever system you already use.",
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
            Why PI Firms Choose Possible Minds
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            We build automation from operational experience, not pitch decks.
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
