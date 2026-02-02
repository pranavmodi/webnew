import { Metadata } from "next";
import Link from "next/link";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Outbound Voice AI | ${SITE_NAME}`,
  description:
    "AI-powered outbound calling that schedules patients automatically, only when your team isn\u2019t busy. Queue-safe, multilingual, fully auditable.",
};

export default function OutboundVoiceAiPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Solution
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Outbound Voice AI
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              An AI caller that reaches patients who need to schedule appointments&mdash;but
              only when your scheduling queue is quiet. Real conversations, not robocalls.
              Queue-safe by design, so inbound callers always come first.
            </p>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-[#04150d] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              OutboundVoiceAI
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-4 pt-12 sm:px-6">
        {/* What it is */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What it is</h2>
          <p className="mt-4 text-base text-foreground/80">
            An outbound voice calling orchestrator purpose-built for healthcare scheduling.
            The system monitors your phone queue in real time and places AI-powered calls to
            patients who need appointments&mdash;only during quiet periods when agents are
            available. If the queue gets busy, outbound calling pauses instantly. Inbound
            patients never wait longer because of an outbound campaign.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Conversations are powered by OpenAI&apos;s Realtime API&mdash;not pre-recorded
            scripts. The AI adapts to what the patient says, answers operational questions
            about locations and prep instructions, and transfers to a human scheduler when
            the patient is ready to book.
          </p>
        </div>

        {/* The Problem */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">The problem it solves</h2>
          <p className="mt-4 text-base text-foreground/80">
            Patients abandon phone queues. Referrals sit unscheduled for days. Your
            scheduling team is too busy handling inbound calls to make outbound ones. And
            every day an appointment goes unbooked, you lose revenue and the patient loses
            time.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Traditional solutions don&apos;t work: hiring more staff is expensive, robocalls
            get ignored, and manual outreach campaigns are inconsistent. You need something
            that calls patients like a human, knows when to call, and never competes with
            real patients trying to reach you.
          </p>
        </div>

        {/* How it works */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">How it works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-base text-foreground/80">
            <li>
              <strong className="text-primary">Queue monitoring</strong> &mdash; Polls your
              phone system (FreePBX/Asterisk) every 10 seconds. Tracks agents available,
              calls waiting, and longest wait time.
            </li>
            <li>
              <strong className="text-primary">Gating check</strong> &mdash; Before placing
              any call, verifies agents are free, queue is empty, and conditions have been
              stable (no flapping). If anything fails, calling pauses immediately.
            </li>
            <li>
              <strong className="text-primary">Patient prioritization</strong> &mdash; Picks
              the next patient using a 4-tier priority system based on call history, due
              dates, and previous attempts.
            </li>
            <li>
              <strong className="text-primary">AI conversation</strong> &mdash; Places the
              call via Twilio. OpenAI Realtime handles the conversation: greets by name,
              qualifies availability, answers questions, and manages the flow.
            </li>
            <li>
              <strong className="text-primary">Resolution</strong> &mdash; Transfers to a
              human scheduler, leaves a voicemail with SMS follow-up, or flags the number
              for review&mdash;depending on the outcome.
            </li>
          </ol>
        </div>

        {/* Queue Safety */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">Queue-safe by design</h2>
          <p className="mt-4 text-base text-foreground/80">
            This isn&apos;t a dialer that floods your lines. The entire system is built around
            one principle: inbound patients come first, always.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Fail-closed architecture",
                desc: "If queue monitoring fails for any reason, outbound calling is disabled instantly. No guessing, no fallback\u2014just stop.",
              },
              {
                title: "Hysteresis gating",
                desc: "Queue must be quiet across multiple consecutive polls before calling resumes. Prevents flapping when volume fluctuates.",
              },
              {
                title: "Pre-transfer re-check",
                desc: "Before connecting a patient to a human, the system re-verifies queue state. If it got busy during the conversation, the patient is offered a callback instead.",
              },
              {
                title: "Single concurrent call",
                desc: "Only one outbound AI call at a time, globally. Your queue capacity is never consumed by parallel outbound sessions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-base font-semibold text-[#00ff41]">{item.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Prioritization */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Smart patient prioritization</h2>
          <p className="mt-4 text-base text-foreground/80">
            Not all patients are equal. The system uses a 4-tier priority system to decide
            who gets called first:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                priority: "P1",
                title: "Highest",
                desc: "Abandoned the queue and never received an AI callback. They tried to reach you and couldn\u2019t.",
              },
              {
                priority: "P2",
                title: "High",
                desc: "Abandoned the queue but already received one AI call. Still waiting to schedule.",
              },
              {
                priority: "P3",
                title: "Medium",
                desc: "Called before but never got an AI follow-up. Engaged patients who need a nudge.",
              },
              {
                priority: "P4",
                title: "Standard",
                desc: "Never called in at all. Referrals and new orders that need first contact.",
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
            Within each tier, patients are sorted by due date urgency, order age, and fewest
            prior attempts. The system respects business hours, holiday calendars, and
            configurable retry limits (default: 3 attempts, 6&ndash;8 hours apart).
          </p>
        </div>

        {/* Call Outcomes */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Five call outcomes</h2>
          <p className="mt-4 text-base text-foreground/80">
            Every call resolves to one of five outcomes, each with its own automated
            follow-up:
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                outcome: "Transferred",
                desc: "Patient is ready to schedule. AI re-checks queue, then connects them to a human scheduler in their preferred language.",
                tag: "Best outcome",
              },
              {
                outcome: "Not available",
                desc: "Patient answers but can\u2019t talk now. AI offers a callback and sends an SMS with the scheduling number.",
                tag: "Retry later",
              },
              {
                outcome: "No answer / voicemail",
                desc: "AI leaves a HIPAA-safe voicemail (no PHI) and sends an SMS with callback details.",
                tag: "Retry later",
              },
              {
                outcome: "Wrong number",
                desc: "AI detects the number doesn\u2019t belong to the patient. Sends an alert to the scheduling team for manual review.",
                tag: "Flag for review",
              },
              {
                outcome: "Disconnected / invalid",
                desc: "Carrier error detected. Number flagged and the scheduling team is notified via email.",
                tag: "Flag for review",
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

        {/* Voice AI */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Natural voice conversations</h2>
          <p className="mt-4 text-base text-foreground/80">
            This isn&apos;t a phone tree with numbered options. The AI has a real
            conversation&mdash;powered by OpenAI&apos;s Realtime API&mdash;that adapts to
            what the patient says.
          </p>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Greets patients by first name with facility-specific context</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Answers operational questions: hours, locations, what to bring, prep instructions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Strictly avoids medical topics&mdash;no diagnoses, results, or medical advice</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Handles interruptions, accents, and natural speech patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Multi-language support with automatic routing to language-specific queues</span>
            </li>
          </ul>
        </div>

        {/* Dashboard & Monitoring */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Real-time dashboard</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>Live queue status: agents available, calls waiting, outbound-allowed flag</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>Patient queue with priority tiers and next-up preview</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>Active call monitoring with live transcripts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>System enable/disable toggle and business hours config</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Full auditability</h2>
            <ul className="mt-4 space-y-3 text-base text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>Searchable call history with complete transcripts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>Dispatcher decision logs: why each call was or wasn&apos;t placed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>Queue state snapshots for historical analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>HIPAA-safe voicemails and SMS&mdash;no PHI in outbound messages</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Safeguards */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Built-in safeguards</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fail-closed on errors",
                desc: "Any monitoring failure immediately halts outbound calling",
              },
              {
                title: "Phone number allowlist",
                desc: "Only pre-approved numbers can be called in production",
              },
              {
                title: "Explicit enable flag",
                desc: "Live calling requires manual activation in settings",
              },
              {
                title: "No PHI in voicemails",
                desc: "Outbound messages never contain protected health information",
              },
              {
                title: "Retry limits",
                desc: "Max 3 attempts per patient with enforced cool-down periods",
              },
              {
                title: "Business hours only",
                desc: "Calls respect configurable schedules and holiday calendars",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-black/40 p-4"
              >
                <div className="text-sm font-semibold text-[#00ff41]">{item.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Typical use cases</h2>
          <ul className="mt-4 grid gap-3 text-base text-foreground/80 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Medical imaging centers (MRI, CT, ultrasound scheduling)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Patients who abandoned the scheduling queue</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Referrals and new orders that haven&apos;t been scheduled yet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Multi-language patient populations needing native-language outreach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Dental, physical therapy, and telemedicine scheduling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Any practice with high no-show or no-schedule rates</span>
            </li>
          </ul>
        </div>

        {/* Case study link */}
        <Link
          href="/healthcare-case-study"
          className="group block rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6 transition hover:border-primary/40"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                Case Study
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-primary group-hover:text-[#00ff41]">
                See it in action
              </h2>
              <p className="mt-2 max-w-2xl text-base text-foreground/80">
                Learn how a California medical imaging chain combined our Support Agent,
                Email Automation, and Outbound Voice AI to cut support workload by 62% and
                boost patient satisfaction by 41%.
              </p>
            </div>
            <span className="hidden text-3xl text-primary/50 transition group-hover:text-primary sm:block">
              →
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
