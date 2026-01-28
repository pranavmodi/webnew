import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Personal Injury Law Firm Case Study | ${SITE_NAME}`,
  description:
    "How a California personal injury firm increased signed cases by 34% and cut intake time by 70% with AI-powered lead qualification and client communication.",
};

export default function LawCaseStudyPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/blog/law-case-study.jpg"
            alt="Personal injury law firm"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Case Study
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              From missed leads to signed retainers in under an hour
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              A Southern California personal injury firm was losing cases to faster competitors.
              Between 200+ daily leads, overwhelmed intake staff, and potential clients signing
              elsewhere, they needed a way to move faster without sacrificing case quality.
              Here&apos;s how we helped them turn things around.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Personal Injury", "Plaintiff&apos;s Firm", "15 Attorneys", "Southern California"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-12 px-4 pt-12 sm:px-6">
        {/* The Challenge */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">The situation when we first met</h2>
          <p className="mt-4 text-base text-foreground/80">
            When this firm first reached out, their problem wasn&apos;t getting leads&mdash;it was
            keeping up with them. Between Google Ads, TV spots, referral networks, and lead
            generation services, they were fielding over 200 inquiries every day. Phone calls,
            web forms, emails, even text messages at 2am from accident scenes.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Their intake team of four was drowning. By the time they called back a promising
            lead, half had already signed with another firm. The ones they did reach required
            multiple follow-ups to collect police reports, medical records, and insurance
            information. Meanwhile, attorneys were spending hours reviewing cases that should
            have been screened out during intake.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            They knew they were leaving money on the table. Good cases were slipping through
            because they couldn&apos;t respond fast enough. Bad cases were eating up attorney
            time because intake couldn&apos;t properly qualify them upfront.
          </p>
        </div>

        {/* The Solution */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">The solution: two products, one unified approach</h2>
          <p className="mt-4 text-base text-foreground/80">
            We deployed a pair of AI systems designed specifically for high-volume plaintiff
            firms&mdash;one for real-time lead engagement, and one for the document-heavy
            back-office work that bogs down intake teams.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/solutions/support-agent"
              className="group rounded-xl border border-primary/20 bg-black/40 p-5 transition hover:border-primary/40 hover:bg-black/60"
            >
              <div className="text-lg font-semibold text-primary group-hover:text-[#00ff41]">
                AI Support Agent
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                A 24/7 intake assistant on their website and SMS that qualifies leads instantly,
                collects case details, and books consultations&mdash;all before a human touches it.
              </p>
              <span className="mt-3 inline-flex items-center text-xs font-medium text-primary">
                Learn more →
              </span>
            </Link>
            <Link
              href="/solutions/email-automation"
              className="group rounded-xl border border-primary/20 bg-black/40 p-5 transition hover:border-primary/40 hover:bg-black/60"
            >
              <div className="text-lg font-semibold text-primary group-hover:text-[#00ff41]">
                Email Automation
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                AI-powered email triage that reads incoming messages, extracts case details from
                attachments, tracks document collection, and drafts responses for the intake team.
              </p>
              <span className="mt-3 inline-flex items-center text-xs font-medium text-primary">
                Learn more →
              </span>
            </Link>
          </div>
        </div>

        {/* Combined Results */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">The results after both phases</h2>
          <p className="mt-4 text-base text-foreground/80">
            Here&apos;s what changed after deploying both the AI intake assistant and email automation:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "34%",
                title: "More signed cases",
                detail:
                  "Faster response times and consistent follow-up converted leads that would have gone elsewhere.",
              },
              {
                value: "70%",
                title: "Faster intake",
                detail:
                  "Average time from first contact to qualified case file dropped from 3 days to under 4 hours.",
              },
              {
                value: "< 90 sec",
                title: "Average response time",
                detail:
                  "Down from 4-6 hours. Leads get a response before they even finish Googling other firms.",
              },
              {
                value: "58%",
                title: "Reduction in bad-fit cases",
                detail:
                  "AI screening filters out cases that don&apos;t meet criteria before they reach attorneys.",
              },
            ].map((metric) => (
              <div
                key={metric.title}
                className="rounded-2xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-4xl font-semibold text-[#00ff41]">{metric.value}</div>
                <div className="mt-2 text-base font-semibold text-primary">{metric.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                value: "$2.1M",
                title: "Additional annual revenue",
                detail: "From cases that would have been lost to slower response times.",
              },
              {
                value: "24/7",
                title: "Lead coverage",
                detail: "Weekend accidents, late-night inquiries&mdash;all handled instantly.",
              },
              {
                value: "94%",
                title: "Client satisfaction",
                detail: "Clients praise the fast, professional communication from first contact.",
              },
            ].map((metric) => (
              <div
                key={metric.title}
                className="rounded-2xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-3xl font-semibold text-[#00ff41]">{metric.value}</div>
                <div className="mt-2 text-base font-semibold text-primary">{metric.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 1: Intake Assistant */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Phase 1
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-primary">
            An intake assistant that never sleeps
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Personal injury is a speed game. When someone&apos;s been in an accident, they&apos;re
            scared, confused, and Googling &ldquo;car accident lawyer near me&rdquo; from the
            hospital waiting room. The firm that responds first usually wins the case.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            We deployed an AI intake assistant on their website and connected it to their
            existing phone system via SMS. When a potential client reaches out&mdash;whether
            it&apos;s 3pm or 3am&mdash;they get an immediate response. Not a generic
            &ldquo;we&apos;ll get back to you&rdquo; autoresponder, but an actual conversation
            that starts qualifying their case right away.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20">
            <Image
              src="/blog/law-intake.jpg"
              alt="AI intake assistant conversation with potential client"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Smart case qualification</h2>
          <p className="mt-4 text-base text-foreground/80">
            The AI doesn&apos;t just collect contact information&mdash;it qualifies cases in
            real-time. It asks the right questions: When did the accident happen? (Statute of
            limitations check.) Were you at fault? (Liability screening.) Did you seek medical
            treatment? (Damages verification.) Were there witnesses? (Evidence assessment.)
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Based on the answers, the system scores each lead and routes accordingly. High-value
            cases&mdash;serious injuries, clear liability, good insurance coverage&mdash;get
            flagged for immediate attorney review. Cases that don&apos;t meet the firm&apos;s
            criteria get a polite referral to other resources, freeing up intake for the cases
            that matter.
          </p>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Automatic statute of limitations checking based on accident date and jurisdiction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Liability screening with follow-up questions for comparative fault states</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Insurance coverage identification to estimate case value early</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Medical treatment tracking to assess damages potential</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Instant consultation booking</h2>
          <p className="mt-4 text-base text-foreground/80">
            Once a lead is qualified, the AI doesn&apos;t just hand off to a human and hope
            they call back. It books the consultation right there in the conversation. The
            system checks attorney availability, offers time slots, and confirms the
            appointment&mdash;complete with calendar invites and reminder sequences.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            For high-priority cases (catastrophic injuries, commercial vehicle accidents,
            premises liability with clear negligence), the system can even trigger an
            immediate callback from an intake coordinator, typically within 5 minutes.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Spanish language support</h2>
          <p className="mt-4 text-base text-foreground/80">
            Southern California means a large Spanish-speaking population. Before our system,
            Spanish-speaking leads had to wait for one of two bilingual intake coordinators
            to be available. Now, the AI handles Spanish conversations natively&mdash;same
            qualification process, same empathetic tone, same instant response times.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The firm saw a 47% increase in signed cases from Spanish-speaking clients in the
            first quarter alone, simply because they could finally respond immediately to
            every inquiry.
          </p>
        </div>

        {/* Phase 2: Email & Document Automation */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Phase 2
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-primary">Taming the document chaos</h2>
          <p className="mt-4 text-base text-foreground/80">
            Getting a signed retainer is just the beginning. Personal injury cases require
            mountains of documentation: police reports, medical records, insurance policies,
            photos, witness statements. The intake team was spending hours every day just
            tracking what they had and chasing what they didn&apos;t.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Phase 2 tackled the document workflow. We deployed our email automation system
            to read incoming emails, extract information from attachments, track document
            collection status, and automatically follow up with clients for missing items.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Intelligent document extraction</h2>
          <p className="mt-4 text-base text-foreground/80">
            When a client emails over their police report, the AI doesn&apos;t just file it
            away&mdash;it reads it. It extracts the parties involved, accident location,
            responding officers, citations issued, witness information, and insurance details.
            All of this goes directly into the case management system, structured and searchable.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Same with medical records. The system identifies treating providers, diagnoses,
            treatment dates, and billing amounts. It flags records that mention pre-existing
            conditions (important for damages arguments) and highlights gaps in treatment
            that might need explanation.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20">
            <Image
              src="/blog/law-docs.jpg"
              alt="Document extraction dashboard showing parsed police report"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Automated document chasing</h2>
          <p className="mt-4 text-base text-foreground/80">
            The system knows what documents are needed for each case type and tracks what&apos;s
            been received. Missing the police report after 5 days? The client gets a friendly
            reminder with specific instructions on how to obtain it. Medical records request
            sent but no response after 2 weeks? The system follows up with the provider directly.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            This automated follow-up reduced average document collection time from 23 days to
            9 days&mdash;which means cases are ready for demand letters faster, and settlements
            come sooner.
          </p>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Case-type-specific document checklists with smart prioritization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Multi-channel follow-up via email, SMS, and client portal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Provider-specific request templates for medical records</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Escalation alerts when documents are critically overdue</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Lien tracking and validation</h2>
          <p className="mt-4 text-base text-foreground/80">
            Medical liens are a constant headache in PI. Providers send lien letters, the firm
            has to track them, verify their validity, and factor them into settlement
            calculations. Miss one and it comes back to bite you at disbursement.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Our system automatically identifies incoming lien correspondence, extracts the
            provider, amount, and patient, and logs it against the case. It validates lien
            perfection (was proper notice given? is the amount consistent with treatment
            records?) and flags discrepancies for attorney review. When it&apos;s time for
            settlement, the system generates a complete lien summary with negotiation history.
          </p>
        </div>

        {/* Working Together */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Better together</h2>
          <p className="mt-4 text-base text-foreground/80">
            The real power comes from both systems working in concert. The intake assistant
            captures initial case information. The email system tracks document collection.
            Both feed into the same case management system, creating a complete client
            communication history regardless of channel.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            A potential client might text the firm from the accident scene at 11pm, get
            qualified by the AI, and have a consultation booked for the next morning. By the
            time the attorney meets with them, the system has already sent instructions for
            obtaining the police report and started the medical records request process.
            That&apos;s a case that&apos;s fully underway within 24 hours of first contact.
          </p>
        </div>

        {/* What Staff Think */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What the team actually thinks</h2>
          <p className="mt-4 text-base text-foreground/80">
            The intake coordinators were skeptical at first&mdash;&ldquo;the robots are coming
            for our jobs.&rdquo; Six months in, they&apos;re the system&apos;s biggest fans.
            Instead of playing phone tag with leads who&apos;ve already signed elsewhere,
            they&apos;re talking to pre-qualified prospects who are ready to sign. Instead of
            sending the same document request email 50 times a day, they&apos;re handling the
            complex situations that actually need a human touch.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            One coordinator put it this way: &ldquo;I used to feel like I was always behind.
            Now I feel like I&apos;m actually helping people instead of just trying to keep up.&rdquo;
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The attorneys noticed too. Case files arrive more complete. Qualification is more
            consistent. They&apos;re spending time on case strategy instead of chasing basic
            information. One partner said the firm feels &ldquo;five years ahead&rdquo; of where
            they were before.
          </p>
        </div>

        {/* What's Next */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What&apos;s next</h2>
          <p className="mt-4 text-base text-foreground/80">
            The system keeps getting smarter. We&apos;re continuously refining the qualification
            logic based on which cases actually settle well. Adding new document types as the
            firm expands into new practice areas. Building out integrations with court filing
            systems for automatic deadline tracking.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Next on the roadmap: demand letter drafting assistance that pulls from the
            structured case data to generate first drafts, and settlement calculator tools
            that factor in local verdict data and adjuster history.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">Could this work for your firm?</h2>
          <p className="mt-4 text-base text-foreground/80">
            If you&apos;re losing cases to faster competitors, drowning in document requests,
            or watching good leads slip away after hours, we should talk. We build systems
            specifically for plaintiff firms&mdash;understanding the unique workflows around
            case qualification, document collection, and lien management that make PI different
            from other practice areas.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            No generic chatbots. No one-size-fits-all templates. Just AI that understands how
            your firm actually works and makes it work faster.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="animate-glow">
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:hello@possibleminds.ai">Email us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
