import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Personal Injury Law Firm Case Study | ${SITE_NAME}`,
  description:
    "How a California personal injury firm increased signed cases by 34% and cut intake time by 70% with AI-powered outbound calling and email automation.",
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
              A Southern California personal injury firm was hemorrhaging cases to faster
              competitors. Web form leads went cold overnight. The intake team was too buried
              in inbound calls to dial out. We deployed AI outbound calling and email
              automation&mdash;and changed the math entirely.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Personal Injury", "Plaintiff\u2019s Firm", "15 Attorneys", "Southern California"].map(
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
            This firm wasn&apos;t short on leads. Between Google Ads, TV spots, referral
            networks, and lead gen services, they were getting 200+ inquiries a day. The
            problem was what happened after the lead came in.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Someone fills out a web form at 11pm after a car accident. They&apos;re scared,
            in pain, Googling from a hospital waiting room. They submit forms to three firms.
            The firm that calls first gets the case&mdash;and this firm wasn&apos;t calling
            first. Their intake team of four was drowning in inbound calls during business
            hours. By the time they worked through the morning call sheet, half the overnight
            leads had already signed with someone else.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The leads they did reach still required multiple follow-ups to collect police
            reports, medical records, and insurance information. Attorneys were spending hours
            reviewing cases that should have been screened out at intake. Good cases slipped
            through because nobody called fast enough. Bad cases ate up attorney time because
            intake couldn&apos;t qualify consistently at volume.
          </p>
        </div>

        {/* The core problem */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">The speed-to-lead problem</h2>
          <p className="mt-4 text-base text-foreground/80">
            In personal injury, speed to lead isn&apos;t a nice-to-have&mdash;it&apos;s the
            entire game. Industry data shows that calling a lead within 60 seconds of form
            submission makes you 391% more likely to convert them. After 5 minutes, the odds
            crater. After an hour, you&apos;re essentially cold-calling.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            But PI firms face a structural problem: the intake team can&apos;t make outbound
            calls when they&apos;re already handling inbound ones. You can&apos;t tell a live
            caller to hold while you chase a web form lead. And you can&apos;t just hire more
            intake staff&mdash;they&apos;d sit idle during slow periods and still be
            overwhelmed during surges.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            This firm needed something that could call leads back instantly, 24/7, without
            ever interfering with the real people already calling in. Not a robocall. Not a
            chatbot. An actual voice conversation that qualifies the case and connects them
            to a human when they&apos;re ready to sign.
          </p>
        </div>

        {/* The Solution */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">The solution: two products, one unified approach</h2>
          <p className="mt-4 text-base text-foreground/80">
            We deployed a pair of AI systems designed specifically for high-volume plaintiff
            firms&mdash;one to solve the speed-to-lead problem with outbound voice calls, and
            one to handle the document chaos that follows every signed retainer.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/solutions/outbound-voice-ai"
              className="group rounded-xl border border-primary/20 bg-black/40 p-5 transition hover:border-primary/40 hover:bg-black/60"
            >
              <div className="text-lg font-semibold text-primary group-hover:text-[#00ff41]">
                Outbound Voice AI
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                AI-powered outbound calling that reaches leads within seconds of form
                submission, qualifies cases through real conversation, and transfers to
                intake&mdash;only when the phone queue is quiet.
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
            Here&apos;s what changed after deploying outbound voice AI and email automation together:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "34%",
                title: "More signed cases",
                detail:
                  "Leads that would have signed elsewhere got a call back in under 90 seconds and never left.",
              },
              {
                value: "70%",
                title: "Faster intake",
                detail:
                  "Average time from first contact to qualified case file dropped from 3 days to under 4 hours.",
              },
              {
                value: "< 90 sec",
                title: "Lead response time",
                detail:
                  "Down from 4\u20136 hours. The AI calls leads before they finish submitting forms to competitors.",
              },
              {
                value: "58%",
                title: "Fewer bad-fit cases",
                detail:
                  "AI voice screening filters out cases that don\u2019t meet criteria before they reach attorneys.",
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
                detail: "Saturday night accidents, 3am form submissions\u2014all called back instantly.",
              },
              {
                value: "94%",
                title: "Client satisfaction",
                detail: "Clients say the fast, personal callback made them feel like a priority from day one.",
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

        {/* Phase 1: Outbound Voice AI */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Phase 1
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-primary">
            An AI caller that never lets a lead go cold
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            When a lead fills out a web form&mdash;whether it&apos;s 3pm on a Tuesday or 2am
            on a Saturday&mdash;the AI calls them back within 90 seconds. Not with a
            pre-recorded message or a robocall menu. With an actual voice conversation powered
            by OpenAI&apos;s Realtime API that sounds like a sharp intake coordinator.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The lead picks up and hears: &ldquo;Hi Maria, this is an assistant calling from
            [firm name]. I see you reached out about a car accident. I&apos;d like to ask a
            few questions to see how we can help&mdash;do you have a moment?&rdquo; It&apos;s
            conversational. It adapts. It sounds like someone who actually works there.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20">
            <Image
              src="/blog/law-intake.png"
              alt="Outbound voice AI calling a personal injury lead"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Queue-safe: inbound callers always come first</h2>
          <p className="mt-4 text-base text-foreground/80">
            Here&apos;s what makes this different from a dialer: the system monitors the
            firm&apos;s phone queue in real time, polling every 10 seconds. It only places
            outbound calls when intake coordinators are available and the inbound queue is
            empty. If a real client calls in during an AI conversation, the system knows&mdash;and
            before transferring the AI&apos;s lead to a human, it re-checks the queue. If
            things got busy, the lead gets offered a callback instead.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The entire architecture is fail-closed. If queue monitoring breaks for any
            reason&mdash;network issue, phone system hiccup, anything&mdash;outbound calling
            halts instantly. No guessing. No fallback logic. Just stop. A real person calling
            your firm will never wait longer because of an outbound AI campaign.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Fail-closed design",
                desc: "Any monitoring failure immediately disables outbound calling. Zero risk to inbound capacity.",
              },
              {
                title: "Hysteresis gating",
                desc: "Queue must be quiet across multiple consecutive polls before calling resumes. No flapping.",
              },
              {
                title: "Pre-transfer re-check",
                desc: "Before connecting a qualified lead to intake, queue state is re-verified in real time.",
              },
              {
                title: "Single concurrent call",
                desc: "Only one AI call at a time. Your phone system never gets loaded by outbound sessions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-black/40 p-4"
              >
                <div className="text-sm font-semibold text-[#00ff41]">{item.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Voice-driven case qualification</h2>
          <p className="mt-4 text-base text-foreground/80">
            The AI doesn&apos;t just confirm contact info&mdash;it qualifies cases through
            natural conversation. It knows what questions matter for PI and asks them in the
            right order: When did the accident happen? (Statute of limitations check.) Were
            you at fault? (Liability screening.) Did you seek medical treatment? (Damages
            assessment.) What kind of vehicle hit you? (Insurance coverage estimation.)
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Based on the answers, the system scores each lead in real time. High-value
            cases&mdash;serious injuries, clear liability, commercial vehicles, good
            coverage&mdash;get flagged for immediate transfer to intake. Cases that don&apos;t
            meet the firm&apos;s criteria get a polite referral. The attorneys never see
            them.
          </p>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Statute of limitations screening based on accident date and California jurisdiction rules</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Comparative fault follow-ups tailored to California&apos;s pure comparative negligence standard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Insurance coverage identification&mdash;commercial policies, umbrella coverage, uninsured motorist</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Medical treatment verification to flag strong damages cases early</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Smart lead prioritization</h2>
          <p className="mt-4 text-base text-foreground/80">
            Not all leads are equal, and the system knows it. When multiple leads are waiting,
            the AI uses a 4-tier priority system to decide who gets called first:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                priority: "P1",
                title: "Highest",
                desc: "Called in but abandoned the hold queue. They tried to hire you and couldn\u2019t get through.",
              },
              {
                priority: "P2",
                title: "High",
                desc: "Abandoned the queue and already got one AI callback they didn\u2019t answer. Time-sensitive.",
              },
              {
                priority: "P3",
                title: "Medium",
                desc: "Submitted a web form or referral. Engaged but hasn\u2019t spoken to anyone yet.",
              },
              {
                priority: "P4",
                title: "Standard",
                desc: "New referrals and older leads that need first contact outreach.",
              },
            ].map((item) => (
              <div
                key={item.priority}
                className="rounded-2xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-3xl font-semibold text-[#00ff41]">{item.priority}</div>
                <div className="mt-2 text-base font-semibold text-primary">{item.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-foreground/80">
            Within each tier, leads are sorted by urgency: shortest remaining statute of
            limitations first, then oldest submission, then fewest prior attempts. The system
            retries up to 3 times with 6&ndash;8 hour cool-downs, respects business hours and
            holidays, and stops calling once a lead is either signed or disqualified.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Five call outcomes, all handled automatically</h2>
          <p className="mt-4 text-base text-foreground/80">
            Every call resolves to one of five outcomes, each with its own automated
            follow-up&mdash;nothing falls through the cracks:
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                outcome: "Qualified & transferred",
                desc: "Lead is ready to talk. AI re-verifies the phone queue is clear, then warm-transfers to a human intake coordinator with full context.",
                tag: "Best outcome",
              },
              {
                outcome: "Answered, not available",
                desc: "Lead picks up but can\u2019t talk now. AI offers a specific callback time and sends an SMS with the firm\u2019s direct scheduling number.",
                tag: "Retry scheduled",
              },
              {
                outcome: "No answer / voicemail",
                desc: "AI leaves a brief, professional voicemail\u2014no case details, fully compliant\u2014then sends an SMS with callback info.",
                tag: "Retry scheduled",
              },
              {
                outcome: "Wrong number",
                desc: "AI detects the number doesn\u2019t belong to the lead. Flags for the intake team to update contact info manually.",
                tag: "Flagged for review",
              },
              {
                outcome: "Disconnected / invalid",
                desc: "Carrier error or dead line. Number flagged and intake team notified via email to investigate.",
                tag: "Flagged for review",
              },
            ].map((item) => (
              <div
                key={item.outcome}
                className="flex items-start gap-4 rounded-xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-base font-semibold text-primary">
                      {item.outcome}
                    </span>
                    <span className="rounded-full border border-primary/20 bg-[#04150d] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary/70">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Spanish language outreach</h2>
          <p className="mt-4 text-base text-foreground/80">
            Southern California means a large Spanish-speaking population&mdash;and PI leads
            from that community were being lost at disproportionate rates. Before our system,
            Spanish-speaking leads had to wait for one of two bilingual intake coordinators to
            be available. If they called after hours or during a rush, they got voicemail in
            English and never called back.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The AI handles Spanish conversations natively. Same qualification flow, same
            empathetic tone, same instant callback. When the lead is ready for transfer, the
            system routes them to the Spanish-speaking intake queue automatically.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The firm saw a 47% increase in signed cases from Spanish-speaking clients in the
            first quarter&mdash;simply because they were finally calling back immediately in
            the right language.
          </p>
        </div>

        {/* Phase 2: Email & Document Automation */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Phase 2
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-primary">Taming the document chaos</h2>
          <p className="mt-4 text-base text-foreground/80">
            The voice AI was signing cases faster than ever. But that created a new bottleneck:
            every signed retainer kicks off a document collection process that used to take
            weeks. Police reports, medical records, insurance policies, photos, witness
            statements&mdash;the intake team was spending hours every day tracking what they
            had and chasing what they didn&apos;t.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Phase 2 tackled the post-sign workflow. We deployed email automation to read
            incoming messages, extract information from attachments, track collection status
            per case, and automatically follow up with clients and providers for missing items.
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
            conditions&mdash;important for damages arguments&mdash;and highlights gaps in
            treatment that might need explanation at deposition.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20">
            <Image
              src="/blog/law-docs.png"
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
            The email system automatically identifies incoming lien correspondence, extracts the
            provider, amount, and patient, and logs it against the case. It validates lien
            perfection&mdash;was proper notice given? Is the amount consistent with treatment
            records?&mdash;and flags discrepancies for attorney review. When it&apos;s time for
            settlement, the system generates a complete lien summary with negotiation history.
          </p>
        </div>

        {/* Working Together */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">Better together</h2>
          <p className="mt-4 text-base text-foreground/80">
            The real power comes from both systems working in concert. The outbound voice AI
            captures and qualifies leads. The email system manages everything that happens
            after the retainer is signed. Both feed into the same case management system,
            creating a complete client history from first callback to settlement.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            A lead submits a web form at 11pm after a rideshare accident. Ninety seconds later,
            the AI calls them, qualifies the case over the phone, and confirms they want to
            proceed. The next morning, an intake coordinator gets a warm transfer with full
            context&mdash;accident details, liability assessment, injury summary. The retainer
            is signed by noon. By 2pm, the email system has already sent the client instructions
            for obtaining the police report and fired off medical records requests to the
            treating providers. A case that used to take a week to get moving is fully underway
            in half a day.
          </p>
        </div>

        {/* What Staff Think */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What the team actually thinks</h2>
          <p className="mt-4 text-base text-foreground/80">
            The intake coordinators were skeptical at first. &ldquo;An AI is going to call our
            leads?&rdquo; Six months in, they&apos;re the system&apos;s biggest advocates.
            Instead of dialing through a cold call sheet every morning, they&apos;re receiving
            warm transfers from pre-qualified leads who already want to sign. Instead of playing
            phone tag for days, they&apos;re closing cases on the first human conversation.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            One coordinator put it this way: &ldquo;I used to dread the morning call list.
            Now leads come to me already knowing they want us. I just handle the signing.&rdquo;
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The attorneys noticed too. Case files arrive more complete. Qualification is more
            consistent&mdash;the AI asks the same screening questions every time, no shortcuts.
            They&apos;re spending time on case strategy instead of asking basic facts that
            should have been captured at intake. One partner said the firm feels
            &ldquo;five years ahead&rdquo; of where they were.
          </p>
        </div>

        {/* What's Next */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What&apos;s next</h2>
          <p className="mt-4 text-base text-foreground/80">
            The system keeps getting smarter. We&apos;re continuously refining the qualification
            logic based on which voice-qualified cases actually settle well&mdash;feeding
            outcomes back into the scoring model. Adding new document types as the firm expands
            into premises liability and product cases. Building out integrations with court
            filing systems for automatic deadline tracking.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Next on the roadmap: demand letter drafting assistance that pulls from the
            structured case data to generate first drafts, settlement calculator tools that
            factor in local verdict data and adjuster history, and outbound voice follow-ups
            for existing clients who have upcoming depositions or treatment milestones.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">Could this work for your firm?</h2>
          <p className="mt-4 text-base text-foreground/80">
            If your intake team is too busy to call leads back, if web form submissions go cold
            overnight, if you&apos;re losing signed cases to firms that simply picked up the
            phone faster&mdash;we should talk. We build systems specifically for plaintiff
            firms, understanding the unique pressure of speed-to-lead, the complexity of PI
            document collection, and the lien management workflows that make personal injury
            different from every other practice area.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            No robocalls. No chatbots. An AI voice that calls your leads back in 90 seconds,
            qualifies them over a real conversation, and hands them to your intake team ready
            to sign.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="animate-glow">
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Diagnostic call
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
