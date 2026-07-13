import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

const slug = "insurance-ai-claims-pi-firms";
const pageTitle =
  "Insurance AI Is Scoring PI Claims. Firms Need a Counter-System.";
const metaTitle = `Insurance AI Claims: PI Firm Counter-System | ${SITE_NAME}`;
const pageDescription =
  "Insurers use AI to triage, score, and negotiate injury claims. PI firms need cleaner case data, review rules, and counter-workflows.";
const pageUrl = `${SITE_URL}/blog/${slug}`;
const imagePath = "/blog/insurance-ai-counter-system.png";
const imageUrl = `${SITE_URL}${imagePath}`;

const insurerUses = [
  {
    title: "Claims triage",
    insurerUse:
      "Predictive models score which claims look complex, expensive, likely to litigate, or likely to involve an attorney.",
    firmCounter:
      "Build a front-loaded case classification workflow that identifies liability, injury severity, treatment status, venue, coverage, and risk signals before the carrier frames the file.",
  },
  {
    title: "Medical bill review",
    insurerUse:
      "Bill-review platforms benchmark charges, flag anomalies, validate paid amounts, and standardize recommendations.",
    firmCounter:
      "Maintain a medical-specials layer that ties bills to records, CPT or diagnosis context where available, treatment chronology, causation support, and known gaps.",
  },
  {
    title: "Demand-package synthesis",
    insurerUse:
      "AI tools summarize demand packages, surface key medical facts, and help adjusters review high-volume records faster.",
    firmCounter:
      "Write demands for both humans and machines: structured chronology, exhibit map, gap explanations, uncertainty notes, and a clear damages table.",
  },
  {
    title: "Fraud and anomaly detection",
    insurerUse:
      "Carriers use text, image, audio, video, social, provider, and network data to flag suspicious patterns or inconsistent details.",
    firmCounter:
      "Run an internal contradiction check before demand: statements, records, bills, social risk, prior injuries, provider patterns, and missing documentation.",
  },
  {
    title: "Impact and damage analysis",
    insurerUse:
      "Computer vision and vehicle-photo analysis can estimate damage, infer impact severity, and inform bodily-injury exposure decisions.",
    firmCounter:
      "Preserve photos, repair estimates, crash data, medical onset, mechanism of injury, and expert review paths where low visible damage does not match real injury.",
  },
  {
    title: "Settlement guidance",
    insurerUse:
      "Settlement and liability tools benchmark claims against historical outcomes, venue patterns, company payment trends, and adjuster workflows.",
    firmCounter:
      "Track carrier, adjuster, venue, injury, treatment, offer, demand, litigation, and outcome data so negotiation posture is evidence-based, not anecdotal.",
  },
];

const counterSystem = [
  {
    title: "1. Build a claim intelligence layer",
    body:
      "Every case needs a structured timeline of liability facts, symptoms, treatment, diagnostics, bills, wage loss, client communications, offers, and missing evidence. The point is not prettier notes. The point is a source of truth the firm can use before the carrier reduces the case to a score.",
  },
  {
    title: "2. Map the insurer's likely scoring triggers",
    body:
      "PI firms should assume the file will be evaluated for delayed treatment, treatment gaps, prior injuries, inconsistent statements, low property damage, provider anomalies, billing benchmarks, social-media contradictions, and attorney or venue history. The counter is not hiding weaknesses. It is identifying, explaining, documenting, or escalating them early.",
  },
  {
    title: "3. Make the demand package machine-readable",
    body:
      "A demand should be easy for an adjuster, a supervisor, and an AI summary layer to understand. Use clear headings, a chronology, exhibit labels, cited records, a specials table, gap explanations, prior-injury distinctions, liability facts, and a concise theory of damages.",
  },
  {
    title: "4. Use AI for internal contradiction review",
    body:
      "Before sending the package, run a review that asks: What will the carrier attack? What facts appear inconsistent? Which records are missing? Which symptoms are unsupported? Which bills look disconnected from treatment? Which questions require attorney review?",
  },
  {
    title: "5. Create escalation rules for judgment calls",
    body:
      "AI can flag a treatment gap, prior injury, questionable causation note, lien issue, or possible social-media risk. It should not decide case value, legal strategy, client advice, or settlement authority. Those issues need explicit human-review gates.",
  },
  {
    title: "6. Track negotiation intelligence",
    body:
      "Carrier AI learns from carrier history. PI firms need their own memory: initial offers, adjuster behavior, delay patterns, venue outcomes, provider reductions, litigation triggers, and settlement deltas. Without this, each negotiation starts from staff memory instead of institutional evidence.",
  },
  {
    title: "7. Govern the tools and vendors",
    body:
      "The firm should know which AI tools touch client data, where that data goes, whether outputs are logged, what gets reviewed by humans, and which vendor systems may train on or retain sensitive information. Vendor risk is part of claims strategy now.",
  },
];

const faqs = [
  {
    question: "How are insurance companies using AI in personal injury claims?",
    answer:
      "Insurers use AI and predictive analytics for claims triage, medical bill review, demand-package synthesis, fraud detection, injury evaluation, impact analysis, liability review, settlement guidance, and litigation-risk prediction.",
  },
  {
    question: "Does insurance AI automatically deny personal injury claims?",
    answer:
      "Not usually. In liability and casualty claims, AI more often supports adjusters by scoring, summarizing, routing, benchmarking, or flagging claims. That still matters because those scores and summaries can shape how the file is handled.",
  },
  {
    question: "What claim facts do insurer AI systems look for?",
    answer:
      "Common signals include treatment gaps, delayed care, prior injuries, inconsistent statements, low visible vehicle damage, provider billing anomalies, medical-record contradictions, fraud indicators, attorney involvement, venue, and litigation risk.",
  },
  {
    question: "How can PI firms counter insurer AI?",
    answer:
      "PI firms should build a counter-system: structured case data, early gap detection, machine-readable demand packages, internal contradiction review, human escalation rules, negotiation intelligence, and vendor-risk governance.",
  },
  {
    question: "Should personal injury firms use AI for medical record review?",
    answer:
      "Yes, if it is scoped carefully. AI can summarize records, build timelines, identify missing documents, and flag uncertainty, but case managers and attorneys should review important medical, causation, and legal conclusions.",
  },
  {
    question: "Can AI help with demand letters?",
    answer:
      "AI can help organize chronology, exhibits, treatment summaries, specials tables, and issue spotting. It should not replace attorney judgment on case value, legal theory, settlement authority, or sensitive client advice.",
  },
  {
    question: "Why does vendor risk matter in claims AI?",
    answer:
      "Claims AI often touches medical records, client facts, liens, settlement data, and strategy. Firms need controls for confidentiality, retention, training use, access, audit logs, human review, and whether the system is firm-owned or vendor-owned.",
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  keywords: [
    "insurance AI claims personal injury",
    "AI insurance claims",
    "personal injury claims AI",
    "AI for personal injury law firms",
    "insurance claims predictive analytics",
    "AI claims triage",
    "medical bill review AI",
    "demand package AI",
    "AI systems for law firms",
    "law firm AI strategy",
    "AI governance for law firms",
    "vendor risk law firms",
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
        url: imageUrl,
        width: 1600,
        height: 900,
        alt: "Comparison of carrier AI claims scoring and the PI firm counter-system.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [imageUrl],
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
      datePublished: "2026-07-12",
      dateModified: "2026-07-12",
      author: {
        "@type": "Person",
        name: post.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      image: imageUrl,
      mainEntityOfPage: pageUrl,
      articleSection: "Industry Analysis",
      keywords:
        "insurance AI claims personal injury, AI insurance claims, personal injury claims AI, AI for personal injury law firms, claims predictive analytics, AI claims triage",
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
              Insurance AI Is Scoring PI Claims. Firms Need a Counter-System.
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Insurance carriers are not waiting for plaintiff firms to catch
              up. They are using AI and predictive analytics to triage, score,
              summarize, benchmark, and negotiate claims. PI firms need an
              operating response, not a panic response.
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
        <section className="space-y-4">
          <p>
            The old mental model of an insurance claim is too human. A lawyer
            sends a demand. An adjuster reads the file. The two sides negotiate.
          </p>
          <p>
            That still happens. But the file may now be shaped before the
            adjuster ever gets to judgment. A claim can be triaged, summarized,
            scored, benchmarked, routed, and flagged by software. The demand
            package can be condensed by AI. Medical bills can be reviewed against
            pricing databases. Treatment gaps, prior injuries, inconsistent
            statements, provider patterns, and fraud indicators can be surfaced
            automatically.
          </p>
          <p>
            The strategic question for personal injury firms is not whether
            insurers use AI. They do. The better question is whether the firm has
            a counter-system: a way to make the file cleaner, earlier, more
            structured, more verifiable, and harder to undervalue.
          </p>
          <p>
            This is where <strong>insurance AI claims personal injury</strong>
            strategy becomes an operating issue. Firms do not counter carrier
            analytics by buying a random AI tool. They counter it by building
            firm-owned workflows around intake, records, medical specials, demand
            preparation, negotiation intelligence, and vendor governance.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/25 bg-[#04150d] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            In plain English
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/75">
            Insurance companies use AI and machine learning to process claims
            faster, spot patterns, flag risk, benchmark bills, and guide
            settlement decisions. That does not mean a robot decides every claim,
            but it does mean the file is increasingly filtered through data
            systems before and during negotiation. PI firms should respond by
            building their own structured workflows: clean case data, early
            weakness detection, machine-readable demands, human review gates, and
            negotiation intelligence.
          </p>
        </section>

        <figure className="overflow-hidden rounded-2xl border border-primary/20 bg-[#04150d]/60">
          <Image
            src={imagePath}
            alt="Carrier AI scores exposure, treatment gaps, bills, demand packages, litigation risk, and offers while a PI firm counter-system structures case facts, explains gaps, ties bills to records, makes demands machine-readable, routes judgment calls to humans, and tracks negotiation memory."
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 896px, calc(100vw - 32px)"
            className="h-auto w-full"
            priority={false}
          />
          <figcaption className="border-t border-primary/15 px-5 py-4 text-sm leading-relaxed text-foreground/65">
            The plaintiff-side answer is not a single AI tool. It is a cleaner,
            more structured case-development workflow.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What insurer AI is actually doing
          </h2>
          <p>
            The National Association of Insurance Commissioners says AI is used
            across the insurance life cycle, including claims handling and fraud
            detection. Its model bulletin also reminds insurers that AI-supported
            decisions must still comply with laws on unfair trade practices,
            unfair claims settlement practices, and unfair discrimination.
          </p>
          <p>
            Public vendor materials show what that looks like in the casualty
            workflow. CCC describes third-party casualty tools for medical bill
            review, demand-package intake, general damages, pricing benchmarks,
            AI-powered medical-record synthesis, impact severity from vehicle
            photos, digital information capture, and settlement offers. Verisk
            describes bodily-injury decision tools that use predictive medical
            and settlement models, summarize demand packages, highlight medical
            and valuation considerations, detect provider alerts, apply liability
            modules, and connect with ClaimSearch. Guidewire describes predictive
            analytics for P&amp;C insurers covering claims triage, settlement,
            litigation detection, and auto bodily-injury outcomes.
          </p>
          <p>
            None of that is science fiction. It is the operating stack on the
            other side of the negotiation table.
          </p>
          <div className="rounded-2xl border border-primary/20 bg-[#04150d]/60 p-5 text-sm leading-relaxed text-foreground/75">
            <p>
              The clean way to think about it: insurer AI helps carriers decide
              which files need attention, what the file appears to be worth,
              where the weaknesses are, what needs investigation, and how quickly
              the claim can be resolved.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The insurer AI playbook, and the PI counter-system
          </h2>
          <p>
            PI firms should not mirror the carrier blindly. The plaintiff-side
            job is different. The firm is not trying to minimize payout. It is
            trying to build a complete, credible, well-supported case while
            protecting client data and preserving attorney judgment.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-primary/20 bg-[#04150d]/60">
            <table className="min-w-[900px] border-collapse text-left text-sm">
              <thead className="border-b border-primary/20 text-primary">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Carrier workflow
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    How insurers use AI
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    PI firm counter-system
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10 text-foreground/75">
                {insurerUses.map((row) => (
                  <tr key={row.title}>
                    <td className="px-4 py-4 align-top font-semibold text-foreground/90">
                      {row.title}
                    </td>
                    <td className="px-4 py-4 align-top">{row.insurerUse}</td>
                    <td className="px-4 py-4 align-top">{row.firmCounter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Why this changes the economics of claims work
          </h2>
          <p>
            In a manual world, carriers had an advantage because they had more
            staff, more claims history, and more repeatable process. In an AI
            world, that advantage compounds. The carrier can process more files,
            spot more patterns, route claims faster, and standardize settlement
            posture across thousands of matters.
          </p>
          <p>
            The risk for PI firms is not that AI makes every carrier right. The
            risk is that a messy file becomes cheaper to discount. If treatment
            gaps are unexplained, if prior injuries are not distinguished, if
            bills are disconnected from the records, if the client&apos;s statements
            vary across forms, if liability facts are buried, or if the demand is
            a narrative with no structure, the carrier&apos;s systems have more room
            to frame the claim against the client.
          </p>
          <p>
            That is why the plaintiff-side answer is not only better demand
            writing. It is better case development upstream of the demand.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Seven workflows PI firms should build now
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {counterSystem.map((item) => (
              <section
                key={item.title}
                className="rounded-2xl border border-primary/20 bg-[#04150d]/60 p-5"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {item.body}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The demand package has to be built for humans and machines
          </h2>
          <p>
            PI lawyers often think of the demand package as persuasion. It is.
            But it is also data architecture.
          </p>
          <p>
            A carrier-side AI summary layer will not admire a beautiful paragraph
            if the facts are hard to extract. It will look for dates, diagnoses,
            treatment, charges, gaps, prior conditions, liability signals,
            inconsistencies, and documents. If those are scattered, the machine
            summary may miss the point before the human negotiator ever reads the
            nuance.
          </p>
          <p>
            The counter is a demand package that is emotionally persuasive and
            operationally legible:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-foreground/75">
            <li>One clear liability theory.</li>
            <li>A treatment chronology with record cites.</li>
            <li>A medical-specials table tied to provider records and bills.</li>
            <li>Explicit explanations for treatment gaps or delayed care.</li>
            <li>Separate sections for prior injuries, aggravation, and causation support.</li>
            <li>A map of exhibits and what each exhibit proves.</li>
            <li>Human-reviewed notes on uncertainty and disputed facts.</li>
          </ul>
          <p>
            This is not about writing for a machine instead of a person. It is
            about making the person and the machine see the strongest version of
            the same file.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Fraud detection is a workflow risk, not just a client risk
          </h2>
          <p>
            Insurers are investing heavily in fraud and anomaly detection.
            Deloitte describes AI use cases across text analytics, social-media
            analysis, audio-image-video analysis, photo metadata, telematics,
            geospatial data, and simulation models for provider and repair-shop
            patterns. The NAIC Journal of Insurance Regulation notes that
            insurers use or are considering AI/ML to identify claims for further
            investigation, detect first- and third-party liability, identify
            medical-provider fraud, and analyze social media in some lines.
          </p>
          <p>
            A good PI firm should not treat this as a reason to become defensive
            or vague. It should treat it as a reason to run its own quality
            control earlier.
          </p>
          <p>
            Before demand, the firm should know whether there are unexplained
            gaps, conflicting statements, missing records, confusing prior
            injuries, questionable billing patterns, or social posts that may be
            misunderstood. Some items will be harmless. Some will need context.
            Some will require attorney judgment. The point is to find them before
            the carrier&apos;s system does.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The governance lesson cuts both ways
          </h2>
          <p>
            Regulators are increasingly focused on insurer AI governance. The
            NAIC model bulletin says AI-supported consumer-impacting decisions
            must comply with insurance laws and that regulators may request
            documentation about an insurer&apos;s AI systems. California&apos;s insurance
            bulletin on bias and unfair discrimination says insurers must conduct
            due diligence before using fraud algorithms or claims tools and that
            the Department reserves the right to audit claims criteria, programs,
            and practices.
          </p>
          <p>
            PI firms should absorb the same lesson for their own side. If the
            firm uses AI on client files, it needs rules: approved tools, data
            boundaries, human review, escalation paths, audit logs, vendor review,
            and clear prohibitions on unsupervised legal advice. This is why{" "}
            <Link
              href="/personal-injury/vendor-risk-governance"
              className="text-primary underline-offset-4 hover:underline"
            >
              AI governance and vendor-risk controls
            </Link>{" "}
            are not back-office details. They are part of claims strategy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Where to start
          </h2>
          <p>
            Do not start by trying to automate every claim. Start with the
            bottleneck most exposed to carrier scoring.
          </p>
          <p>
            For many PI firms, the first useful system is{" "}
            <Link
              href="/personal-injury/records-chasing"
              className="text-primary underline-offset-4 hover:underline"
            >
              records chasing and case development
            </Link>
            . Missing records, bills, imaging, authorizations, and provider
            responses create weaknesses the carrier can use. For firms with heavy
            lead spend, the starting point may be{" "}
            <Link
              href="/personal-injury/intake-automation"
              className="text-primary underline-offset-4 hover:underline"
            >
              AI intake automation
            </Link>{" "}
            or{" "}
            <Link
              href="/personal-injury/after-hours-intake"
              className="text-primary underline-offset-4 hover:underline"
            >
              after-hours intake workflows
            </Link>
            , because case quality is shaped from the first call. For firms with
            high client-call volume, it may be{" "}
            <Link
              href="/personal-injury/client-communication"
              className="text-primary underline-offset-4 hover:underline"
            >
              client communication systems
            </Link>{" "}
            that keep facts current and prevent avoidable dissatisfaction.
          </p>
          <p>
            The mature answer is a portfolio of{" "}
            <Link
              href="/personal-injury"
              className="text-primary underline-offset-4 hover:underline"
            >
              AI systems for personal injury firms
            </Link>
            , built one workflow at a time. The goal is not to out-hype the
            carrier. The goal is to make the firm&apos;s operating model harder to
            exploit.
          </p>
          <p>
            This is also the deeper point behind our pieces on{" "}
            <Link
              href="/blog/tools-vs-systems-pi-firms-ai"
              className="text-primary underline-offset-4 hover:underline"
            >
              tools versus systems
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/from-prompts-to-systems-law-firms-ai"
              className="text-primary underline-offset-4 hover:underline"
            >
              moving from prompts to systems
            </Link>
            . Better AI use is not a prompt library. It is a repeatable operating
            system.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Sources and research notes
          </h2>
          <p>
            This article draws on public regulator materials and insurance-vendor
            materials, including the{" "}
            <a
              href="https://content.naic.org/sites/default/files/cmte-h-big-data-artificial-intelligence-wg-ai-model-bulletin.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              NAIC model bulletin on AI systems by insurers
            </a>
            , the NAIC&apos;s{" "}
            <a
              href="https://content.naic.org/insurance-topics/artificial-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              insurance AI topic page
            </a>
            , the NAIC Journal of Insurance Regulation article on{" "}
            <a
              href="https://content.naic.org/sites/default/files/jir-45-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              AI and insurance regulation
            </a>
            , CCC&apos;s public materials on{" "}
            <a
              href="https://www.cccis.com/insurance-carriers/casualty/third-party"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              third-party casualty claims
            </a>
            , Verisk&apos;s{" "}
            <a
              href="https://www.verisk.com/49bdc6/siteassets/iso-claims-partners/downloads/liability-navigator.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Liability Navigator materials
            </a>
            , Guidewire&apos;s public pages on{" "}
            <a
              href="https://www.guidewire.com/products/analytics/predict"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              predictive analytics
            </a>{" "}
            and{" "}
            <a
              href="https://www.guidewire.com/products/analytics/industry-intel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Claims Intel
            </a>
            , Deloitte&apos;s discussion of{" "}
            <a
              href="https://www.deloitte.com/us/en/insights/industry/financial-services/financial-services-industry-predictions/2025/ai-to-fight-insurance-fraud.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              AI in insurance fraud detection
            </a>
            , and California Department of Insurance guidance on{" "}
            <a
              href="https://www.insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/BULLETIN-2022-5-Allegations-of-Racial-Bias-and-Unfair-Discrimination-in-Marketing-Rating-Underwriting-and-Claims-Practices-by-the-Insurance-Industry.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              bias and unfair discrimination in claims practices
            </a>
            .
          </p>
          <p>
            Health-insurance litigation over algorithmic claim decisions, such as
            reporting on Cigna&apos;s PxDx process and litigation involving
            UnitedHealth&apos;s disputed nH Predict allegations, is not the same as a
            third-party auto bodily-injury claim. It is still relevant as a
            warning: courts and regulators are increasingly interested in how
            algorithmic claim systems work, who reviews them, and whether human
            judgment is real or symbolic.
          </p>
        </section>

        <section id="faq" className="space-y-5 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <section
                key={faq.question}
                className="rounded-2xl border border-primary/20 bg-[#04150d]/60 p-5"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p>
            The firms that adapt will not be the ones that merely tell staff to
            use AI. They will be the ones that use AI to make case facts cleaner,
            weaknesses visible earlier, demands more structured, and negotiation
            memory more institutional.
          </p>
          <p>
            Insurer AI is an operating system. The answer is a better operating
            system on the plaintiff side.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Find the workflow carriers can exploit
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-foreground/70">
            Possible Minds starts with a diagnostic: where the file leaks value,
            which workflow is ready for AI, and what controls need to exist
            before automation touches client data.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href={CALENDLY_URL}>Book a Diagnostic Call</a>
          </Button>
        </section>
      </article>
    </div>
  );
}
