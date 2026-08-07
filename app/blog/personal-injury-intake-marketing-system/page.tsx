import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ClickBeacon from "@/components/analytics/click-beacon";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "personal-injury-intake-marketing-system";
const pageTitle = "Marketing Does Not End When the Phone Rings";
const metaTitle = `PI Intake Is Part of Marketing | ${SITE_NAME}`;
const pageDescription =
  "PI firms lose marketing value when intake is slow or disconnected. A practical system for response, qualification, attribution, and human follow-up.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const heroImage = `${SITE_URL}/images/blog/pi-intake-marketing-system.png`;

const sources = {
  intake:
    "https://www.cjadvertising.com/blog/industry-trends/the-dos-and-donts-of-intake/",
  afterHours:
    "https://www.cjadvertising.com/blog/industry-trends/how-to-get-the-most-out-of-an-answering-service-for-your-firm/",
  websites:
    "https://www.cjadvertising.com/blog/our-services/why-most-law-firm-websites-dont-convert/",
  metrics:
    "https://www.cjadvertising.com/blog/industry-trends/the-marketing-kpis-you-need-to-be-tracking/",
  piMarketing:
    "https://www.cjadvertising.com/blog/law-firm-operations/why-personal-injury-marketing-isnt-like-other-industries/",
  ai:
    "https://www.cjadvertising.com/blog/cj-news/what-we-learned-evaluating-50-ai-tools-for-legal-marketing/",
  privacy:
    "https://www.cjadvertising.com/blog/law-firm-operations/the-data-privacy-stakes-for-personal-injury-firms/",
  rejected:
    "https://www.cjadvertising.com/blog/industry-trends/how-to-build-a-relationship-with-rejected-leads/",
  caseManagement:
    "https://www.cjadvertising.com/blog/industry-trends/how-effective-case-management-and-marketing-work-together/",
};

const faqs = [
  {
    question: "Why is intake part of marketing for a personal injury firm?",
    answer:
      "Marketing creates the opportunity, but intake determines whether the firm contacts, qualifies, and signs the right prospect. Intake data also tells marketing which sources produce wanted cases and eventual fees, not merely leads.",
  },
  {
    question: "How quickly should a PI firm respond to a new lead?",
    answer:
      "The operating goal should be immediate acknowledgment followed by fast human contact. cj Advertising has published a two-minute outbound-call standard after a web inquiry and three-ring call answering as firm benchmarks, not universal legal requirements.",
  },
  {
    question: "What should after-hours intake do?",
    answer:
      "After-hours intake should do more than record a message. It should follow firm-specific criteria, capture decisive facts, identify urgent or serious matters, escalate to the right person, and support remote signature when the firm authorizes it.",
  },
  {
    question: "Which PI intake metrics matter most?",
    answer:
      "Track every inquiry by source, time to meaningful human response, contact rate, wanted-lead rate, wanted-lead conversion, pre-signature drop-off, signed cases, and eventual case value or fee. Review quality and escalation accuracy alongside speed.",
  },
  {
    question: "How should a PI firm use AI in intake?",
    answer:
      "Use AI to detect, structure, route, remind, monitor, and measure. Keep empathy, legal judgment, case acceptance, sensitive conversations, and consequential closing decisions with trained people.",
  },
];

const scorecard = [
  {
    label: "Response",
    measure: "Time to meaningful human contact, by source and hour",
  },
  {
    label: "Reach",
    measure: "Contact rate and aging of every no-contact inquiry",
  },
  {
    label: "Fit",
    measure: "Wanted-lead rate by campaign, case type, and market",
  },
  {
    label: "Conversion",
    measure: "Wanted leads signed, with the reason for every loss",
  },
  {
    label: "Quality",
    measure: "Call review, escalation accuracy, and avoidable friction",
  },
  {
    label: "Economics",
    measure: "Source to signed case to eventual fee, not cost per lead alone",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "personal injury law firm intake",
    "PI intake conversion",
    "law firm intake marketing",
    "personal injury intake automation",
    "after-hours intake for PI firms",
    "law firm intake metrics",
    "AI intake for personal injury firms",
    "legal intake management",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: pageUrl,
    images: [
      {
        url: heroImage,
        width: 1536,
        height: 1024,
        alt: "A human intake specialist responding to a new personal injury inquiry after hours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
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
      image: heroImage,
      datePublished: "2026-08-07",
      dateModified: "2026-08-07",
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: pageUrl,
      articleSection: "Intake Operations",
      keywords:
        "personal injury law firm intake, PI intake conversion, intake marketing system, after-hours intake, AI intake",
      citation: Object.values(sources),
      mentions: {
        "@type": "Organization",
        name: "cj Advertising",
        url: "https://www.cjadvertising.com",
      },
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
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: pageTitle,
          item: pageUrl,
        },
      ],
    },
  ];

  const sourceLinkClass =
    "text-primary underline decoration-primary/35 underline-offset-4 transition hover:decoration-primary";

  return (
    <div className="bg-black pb-24">
      <ClickBeacon page="blog-pi-intake-marketing-system" />
      <JsonLd data={structuredData} />

      <header className="relative min-h-[590px] overflow-hidden border-b border-primary/15 sm:min-h-[650px]">
        <Image
          src="/images/blog/pi-intake-marketing-system.png"
          alt="A human intake specialist responding to a new personal injury inquiry after hours"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.84)_42%,rgba(0,0,0,0.22)_100%)]" />

        <div className="relative mx-auto flex min-h-[590px] max-w-4xl flex-col justify-end px-4 pb-14 pt-24 sm:min-h-[650px] sm:px-6 sm:pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs text-foreground/70">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/50">/</span>
              <span>Intake Operations</span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff41]">
              Personal injury intake
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Marketing Does Not End When the Phone Rings
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-xl">
              A lead is only potential value. Your firm realizes that value when
              intake responds, earns trust, makes the right decision, and tells
              marketing what happened next.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground/65">
              <span>{post.author}</span>
              <span aria-hidden="true">/</span>
              <span>{post.date}</span>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-foreground/70">
              An operating analysis of intake guidance published by{" "}
              <a
                href="https://www.cjadvertising.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-primary/45 underline-offset-4 transition hover:text-primary"
              >
                cj Advertising
              </a>
              , including work by Micki Love and its legal-marketing team.
            </p>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 pt-14 text-[1.0625rem] leading-8 text-foreground/80 sm:px-6 sm:pt-16">
        <section className="space-y-6">
          <p className="text-xl leading-9 text-foreground/95">
            Imagine that your firm pays to put its name in front of an injured
            person for weeks. She sees a television spot, searches for you after
            a crash, reads your reviews, and finally submits a form at 9:14 p.m.
          </p>
          <p>
            The marketing platform records a conversion. The agency records a
            lead. An automatic email promises that someone will respond during
            business hours. The prospect keeps looking and signs another firm
            before breakfast.
          </p>
          <p>
            On paper, marketing worked and intake received the inquiry. In
            economic terms, the system failed. The firm bought attention but did
            not convert it into trust, a conversation, or a signed case.
          </p>
          <p>
            That is the clearest lesson running through cj Advertising&apos;s
            intake writing: marketing and intake are not adjacent departments.
            They are one acquisition system. This essay draws on that body of
            work, then applies it to how a PI owner should design the operating
            layer around people, automation, and AI.
          </p>
        </section>

        <section className="my-12 border-y border-primary/25 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            In plain English
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/90">
            Personal injury intake is part of marketing because it determines
            whether paid attention becomes a signed case. A good system connects
            the source of every inquiry to human response, qualification,
            signature, case outcome, and eventual fee. AI can make that system
            faster and more observable, but people should still own empathy,
            judgment, escalation, and the close.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            The lead is not the outcome
          </h2>
          <p>
            Many firms divide the work at the moment a phone rings or a form is
            submitted. Marketing owns everything before that point. Intake owns
            everything after it. Each team can hit its own numbers while the
            firm loses the case between them.
          </p>
          <p>
            cj&apos;s more recent writing rejects that boundary. It argues that a PI
            marketer needs visibility into contact speed, call handling, case
            acceptance, and pre-signature drop-off. A campaign with an attractive
            cost per lead may be producing cases your firm does not want. A
            higher-cost campaign may be producing the matters that drive the
            economics of the practice. You cannot tell at the lead stage.
          </p>

          <div className="my-9 border-y border-primary/20 py-7">
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {["Source", "Inquiry", "Contact", "Wanted", "Signed", "Fee"].map(
                (stage, index) => (
                  <div key={stage} className="relative text-center">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary/60">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-semibold text-foreground">{stage}</p>
                  </div>
                ),
              )}
            </div>
            <p className="mt-6 text-center text-sm text-foreground/60">
              One acquisition record. Six operational moments. No departmental
              handoff should break the evidence.
            </p>
          </div>

          <p>
            This is more than reporting hygiene. It changes budget decisions.
            Your firm should be able to move from marketing source to inquiry,
            contact, wanted or unwanted decision, signature, outcome, and fee.
            cj&apos;s{" "}
            <a
              href={sources.metrics}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              published KPI guidance
            </a>{" "}
            makes the same point: track all leads, no-contact leads, wanted-lead
            rate, wanted-lead conversion, cost per signed case, and case value,
            not merely the top of the funnel.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Speed matters when it reaches a person
          </h2>
          <p>
            cj&apos;s operating standards are deliberately concrete. Micki Love has
            recommended answering calls within three rings, responding to web
            inquiries immediately, and beginning outbound calls within two
            minutes even when an automated acknowledgment fires first. These are
            cj&apos;s management benchmarks, not universal legal standards.
          </p>
          <p>
            The useful distinction is between acknowledgment and response. An
            automated text can confirm that the form arrived. It can say who will
            call and what information to have ready. It can reduce uncertainty
            during the wait. But it does not create the human reassurance that a
            frightened prospect is testing for.
          </p>
          <p>
            This is why our approach to{" "}
            <Link
              href="/personal-injury/intake-automation"
              className={sourceLinkClass}
            >
              human-led AI intake automation
            </Link>{" "}
            focuses on recognizing the inquiry, structuring the facts, detecting
            urgency, and getting the right person into the conversation quickly.
            The goal is not a faster chatbot conversation. It is faster,
            better-prepared human contact.
          </p>
          <p>
            That framing also fits cj&apos;s{" "}
            <a
              href={sources.piMarketing}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              description of PI buyers
            </a>
            . The person may be in pain, worried about medical bills, missing
            work, and making a high-stakes decision for the first time. Speed
            without concern feels transactional. Concern without speed loses to
            the firm that showed both.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            After-hours intake must move the matter forward
          </h2>
          <p>
            A phone being answered at night is not the same as intake being
            available at night. If the person on the line can only record a name
            and promise a callback, the prospect is still waiting while other
            firms are evaluating the case.
          </p>
          <p>
            cj identifies two credible models: staff an internal team around the
            clock, or use a provider that understands personal injury and can act
            within the firm&apos;s rules. Its{" "}
            <a
              href={sources.afterHours}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              after-hours guidance
            </a>{" "}
            expects more than message taking. The service should use a
            firm-specific script, ask a small set of decisive questions, apply
            acceptance criteria, escalate serious injuries, support e-signature,
            and report what happened.
          </p>
          <p>
            Your own authority rules still matter. Which facts may trigger an
            attorney alert? Who can authorize a retainer? Which matters require
            immediate human review? What happens when the facts conflict? A
            vendor or AI system should execute those decisions, not invent them.
            Our guidance on{" "}
            <Link
              href="/personal-injury/after-hours-intake"
              className={sourceLinkClass}
            >
              after-hours intake workflows
            </Link>{" "}
            starts with those boundaries.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Reduce the distance between interest and signature
          </h2>
          <p>
            Every unnecessary step creates another place for a qualified
            prospect to leave. Long forms, repeated questions, investigative
            work before assignment, unclear next steps, and a retainer process
            built for desktop all lengthen the distance between trust and action.
          </p>
          <p>
            cj&apos;s advice is consistent across website and intake design: ask for
            only what you need to begin helping, make tap-to-call and contact
            actions obvious, explain what happens next, keep the initial signup
            packet short, allow remote signature, and move a signed file to the
            attorney and case manager promptly. Its{" "}
            <a
              href={sources.websites}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              2026 website analysis
            </a>{" "}
            treats the website as the first serious evaluation point, not a
            digital brochure.
          </p>
          <p>
            The practical test is simple. Open your website on a phone after
            hours and submit an inquiry as if you had never heard of the firm.
            Count the decisions, delays, and repeated questions between that
            moment and a meaningful conversation. The friction you feel is part
            of your acquisition cost, even if it never appears on an invoice.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Intake failure is often a management-design failure
          </h2>
          <p>
            It is easy to respond to missed opportunities with more coaching or
            more pressure. Sometimes that is appropriate. Often the intake
            specialist is working inside a system that makes consistency
            unlikely.
          </p>
          <p>
            The same person may be answering new calls, processing mail,
            updating unrelated files, monitoring several inboxes, and waiting
            for an attorney who has no defined escalation duty. Leadership then
            judges performance through total call volume instead of whether the
            right prospects reached the right person.
          </p>
          <p>
            cj&apos;s{" "}
            <a
              href={sources.intake}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              intake operating guidance
            </a>{" "}
            recommends specialized attention, a clear chain of command, a route
            to an attorney, special handling for catastrophic injuries, and
            regular call audits. Those are management choices. Software can
            support them, but it cannot compensate indefinitely for unclear
            ownership.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Marketing and intake need one ledger
          </h2>
          <p>
            The highest-leverage reporting change is to stop treating the lead
            record as complete when it enters the CRM. Keep one trace from source
            through case economics.
          </p>
          <p>
            cj has published a 92.5% target for conversion of wanted leads and a
            recommendation to continue pursuing no-contact leads for up to 90
            days. Those are cj&apos;s benchmarks, not universal standards. Their
            larger value is the discipline behind them: define what the firm
            wants, preserve every lead, state how long follow-up continues, and
            make loss reasons visible.
          </p>
          <p>
            Without that shared ledger, marketing can blame intake for slow
            response while intake blames marketing for poor quality. With it, an
            owner can see whether a source produces the wrong cases, whether
            strong prospects disappear at a particular handoff, and whether one
            shift, channel, or script consistently performs differently.
          </p>
        </section>

        <section className="mt-14 space-y-7">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            The owner&apos;s intake scorecard
          </h2>
          <p>
            You do not need forty charts. You need a small set of measures that
            lets you see the acquisition system from attention to economics.
          </p>
          <div className="divide-y divide-primary/20 border-y border-primary/20">
            {scorecard.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 py-5 sm:grid-cols-[130px_1fr] sm:gap-6"
              >
                <h3 className="font-semibold text-primary">{item.label}</h3>
                <p className="text-base leading-7 text-foreground/75">
                  {item.measure}
                </p>
              </div>
            ))}
          </div>
          <p>
            Review the measures together. Faster response is not a win if call
            quality falls. A higher wanted-lead conversion is not trustworthy if
            the team changes the definition of wanted. A low-cost campaign is
            not efficient if its signed matters produce little value.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            AI should assist and observe, not impersonate care
          </h2>
          <p>
            The most useful synthesis of cj&apos;s AI writing is not anti-AI. It is
            pro-reliability. Its review of more than fifty legal-marketing AI
            tools recommends starting with a defined workflow problem, favoring
            reliable automation, demanding integration, testing narrowly, and
            measuring an operational result.
          </p>
          <p>
            That creates a clear role for AI inside intake. It can detect a new
            inquiry across phone, form, chat, or email. It can structure the
            facts, identify missing information, flag urgency, assign a response
            target, prepare the closer, maintain follow-up, and analyze calls for
            missed questions or coaching opportunities. It can connect the
            interaction back to its source and preserve what happened.
          </p>
          <p>
            People should still own empathy, legal judgment, case acceptance,
            consequential escalation, and sensitive closing conversations. That
            boundary is not a concession to weak technology. It reflects what an
            injured person is evaluating when several firms appear equally
            qualified: who understood the situation, who responded, and who felt
            trustworthy.
          </p>
          <p>
            Start narrowly. The sequence in cj&apos;s{" "}
            <a
              href={sources.ai}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              AI evaluation guidance
            </a>{" "}
            is sound: choose one workflow, test in a limited scope, measure,
            refine, and scale only after the behavior is reliable. This is also
            why vendor access, source traceability, permissions, and human review
            belong in the design from the beginning.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            The relationship starts before signature and compounds after it
          </h2>
          <p>
            Intake receives information before a formal attorney-client
            relationship may exist. That data can include injury details,
            medical information, insurance facts, financial pressure, and the
            prospect&apos;s account of the incident. Speed cannot come at the cost of
            consent, access control, retention discipline, or careful vendor
            review.
          </p>
          <p>
            cj&apos;s{" "}
            <a
              href={sources.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className={sourceLinkClass}
            >
              privacy guidance for PI firms
            </a>{" "}
            treats initial intake and lead information as sensitive from the
            start. Firms should evaluate current requirements with qualified
            counsel; an article or vendor promise is not legal advice. Our{" "}
            <Link
              href="/personal-injury/vendor-risk-governance"
              className={sourceLinkClass}
            >
              AI governance and vendor-risk framework
            </Link>{" "}
            focuses on turning that obligation into concrete controls.
          </p>
          <p>
            The same continuity applies when the firm declines a matter. A
            rejected caller is still a person with a problem and a future
            opinion of the firm. cj recommends clear non-engagement, useful
            guidance where appropriate, careful referral practices, and respect
            for applicable ethics rules. After signature, prompt onboarding and
            strong case service create the reviews, referrals, and reputation
            that feed the next acquisition cycle.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Start by auditing the last twenty-five inquiries
          </h2>
          <p>
            Do not begin with a new vendor. Pull the last twenty-five inquiries
            from different sources, hours, and case types. Reconstruct what each
            prospect experienced.
          </p>
          <p>
            When did the inquiry arrive? When did a person respond? Was the
            responder prepared? Did the prospect repeat information? Was a
            serious matter escalated? Did the firm record why a wanted lead did
            not sign? Can you connect the signed case to its source and later
            economics?
          </p>
          <p>
            You will usually find the first useful automation inside those
            answers. It may be detecting an unmonitored form, creating a serious
            injury alert, preparing a short brief, assigning a human owner,
            continuing approved follow-up, or joining marketing data to case
            outcomes.
          </p>
          <p>
            Marketing creates familiarity and earns the inquiry. Intake carries
            that promise into a human relationship. Treat them as one system and
            you can finally see whether your acquisition spend is creating
            activity or valuable cases.
          </p>
        </section>

        <section id="faq" className="mt-16 scroll-mt-24">
          <h2 className="text-3xl font-semibold leading-tight text-[#00ff41]">
            Questions PI firm owners ask
          </h2>
          <div className="mt-8 divide-y divide-primary/20 border-y border-primary/20">
            {faqs.map((faq) => (
              <section key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-foreground/75">
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-primary/20 pt-8 text-sm leading-7 text-foreground/60">
          <h2 className="text-base font-semibold text-primary">Source note</h2>
          <p className="mt-3">
            This essay synthesizes public intake, marketing, AI, and privacy
            guidance from cj Advertising. Its published benchmarks are
            identified as cj&apos;s recommendations rather than universal industry
            standards. Possible Minds is not affiliated with cj Advertising.
          </p>
        </section>
      </article>

      <section className="mt-20 border-y border-primary/20 bg-[#03110b]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">
            Audit the system
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#00ff41]">
            Find where qualified inquiries lose momentum.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-foreground/70">
            Possible Minds maps the path from inquiry to human response,
            signature, and source attribution, then identifies the narrowest
            useful place for automation.
          </p>
          <Link
            href="/consult"
            className="mt-7 inline-flex min-h-11 items-center bg-[#00ff41] px-6 py-3 text-sm font-semibold text-[#04150d] transition hover:bg-[#00ff41]/90"
          >
            Discuss an intake audit
          </Link>
        </div>
      </section>
    </div>
  );
}
