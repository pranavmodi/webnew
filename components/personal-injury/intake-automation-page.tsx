import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Gauge,
  GitMerge,
  MessageSquareText,
  PhoneCall,
  Scale,
  Send,
  ShieldCheck,
  Signature,
  UserRoundCheck,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import type { PiProblemPage } from "@/lib/pi-pages";

type IntakeAutomationPageProps = {
  page: PiProblemPage;
  structuredData: Record<string, unknown>[];
};

const responseTimeline = [
  {
    time: "00:00",
    title: "Inquiry received",
    detail: "A web form, email, referral, CRM event, or police report enters one intake queue.",
  },
  {
    time: "00:18",
    title: "Facts organized",
    detail: "Contact, incident, injury, coverage, and urgency signals are structured with source evidence.",
  },
  {
    time: "00:36",
    title: "Priority assessed",
    detail: "Urgency, severity, competitive-shopping signals, conflicts, and firm-specific escalation triggers are checked.",
  },
  {
    time: "<01:00",
    title: "Right human activated",
    detail: "Priority matters alert the appropriate lawyer or intake closer with a call-ready briefing and next action.",
  },
];

const conversionSteps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Capture the moment",
    body:
      "Receive calls, forms, chat, email, referrals, and uploaded records without making the prospect start over in each channel.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Understand what happened",
    body:
      "Extract the useful facts from the inquiry and supporting documents, preserve their source, and surface contradictions instead of guessing.",
  },
  {
    number: "03",
    icon: GitMerge,
    title: "Recognize the decisive moment",
    body:
      "Apply the firm's case criteria and detect urgency, serious injuries, competitive shopping, language needs, and attorney-review triggers.",
  },
  {
    number: "04",
    icon: MessageSquareText,
    title: "Activate the right human",
    body:
      "Alert the appropriate intake specialist, closer, or lawyer with the facts organized so they can call or text without making the prospect repeat the story.",
  },
  {
    number: "05",
    icon: Signature,
    title: "Close the live window",
    body:
      "Generate the approved agreement, route it for e-signature, book the next conversation, and help staff resolve questions while intent is high.",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Follow through to acceptance",
    body:
      "Track delivery, opens, signatures, appointments, staff follow-up, and final matter acceptance across the systems the firm already uses.",
  },
];

const prospectExperience = [
  "An immediate sign that a real firm is present",
  "A human response that reflects the facts they provided",
  "Direct access to the right person when the matter is serious",
  "One understandable next step: talk, book, review, or sign",
];

const firmExperience = [
  "A structured intake record without re-keying the same facts",
  "Evidence, warnings, and proposed actions in one review workspace",
  "The right intake specialist, closer, or lawyer involved at the right time",
  "A measurable trail from lead source to signed and accepted matter",
];

const controls = [
  {
    icon: UserRoundCheck,
    title: "Human presence by design",
    body:
      "Serious and competitive matters are designed to reach a lawyer or intake closer. AI prepares the moment; a person builds the trust.",
  },
  {
    icon: ShieldCheck,
    title: "Firm policy over improvisation",
    body:
      "Qualification rules, templates, escalation thresholds, recipients, and permissions come from approved firm configuration.",
  },
  {
    icon: Scale,
    title: "Uncertainty escalates",
    body:
      "Catastrophic injuries, unclear liability, conflicting records, minors, and unusual matters move to the right person instead of receiving a confident guess.",
  },
];

const metrics = [
  "Time to meaningful human contact",
  "Time to lawyer contact for priority matters",
  "Priority leads reached within the firm's SLA",
  "Qualified lead-to-human-conversation rate",
  "Retainer conversion after human involvement",
  "Source-to-accepted-case conversion",
];

export function IntakeAutomationPage({
  page,
  structuredData,
}: IntakeAutomationPageProps) {
  return (
    <div className="bg-black pb-24">
      <JsonLd data={structuredData} />

      <section className="relative flex min-h-[78svh] items-end overflow-hidden border-b border-primary/20">
        <Image
          src="/blog/law-intake.png"
          alt="A prospective personal injury client calling a law firm after an accident"
          fill
          priority
          className="object-cover object-[62%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-y-0 left-0 w-full bg-black/30 lg:w-[62%]" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 sm:pb-16 lg:pb-20">
          <Link
            href="/personal-injury"
            className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-[#00ff41]"
          >
            Personal injury systems
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase text-primary">
            AI-assisted, human-led intake
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            They were just in a crash. Your firm has one minute to make them
            feel taken care of.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Within one minute, your team should know what happened, whether the
            matter appears urgent or competitive, and who should respond.
            Possible Minds prepares the brief, alerts the right person, and
            puts the conversation in human hands while intent is still high.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/consult">
                Request an intake revenue audit
                <Gauge className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-black/40 text-white hover:bg-black/60"
            >
              <Link href="#response-workflow">
                See the response workflow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-xs leading-5 text-white/60">
            AI handles capture, organization, routing, and follow-through. Your
            intake team and lawyers handle empathy, judgment, and the close.
          </p>
        </div>
      </section>

      <section className="border-b border-primary/15 bg-[#031009]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              The prospect&apos;s reality
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Automate the delay, not the relationship.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
              The person on the other side is not comparing software. They are
              trying to decide who will help them. They may be in pain, without
              a car, worried about work, and repeating the story to several
              firms.
            </p>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
              The first meaningful human response creates relief. It proves the
              firm is paying attention and turns uncertainty into a concrete
              next step. AI should make that human available sooner, not stand
              between the prospect and the firm.
            </p>
          </div>

          <div
            id="response-workflow"
            className="border border-primary/25 bg-black"
          >
            <div className="flex items-center justify-between border-b border-primary/20 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase text-primary">
                  Live intake workflow
                </p>
                <p className="mt-1 text-sm text-foreground/60">
                  Police report received by email
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#00ff41]">
                <span className="h-2 w-2 bg-[#00ff41]" />
                Processing
              </span>
            </div>
            <div className="divide-y divide-primary/15">
              {responseTimeline.map((event, index) => (
                <div
                  key={event.time}
                  className="grid gap-3 px-5 py-5 sm:grid-cols-[72px_1fr]"
                >
                  <span className="font-mono text-sm text-primary">
                    {event.time}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className={`h-4 w-4 ${
                          index === responseTimeline.length - 1
                            ? "text-[#00ff41]"
                            : "text-primary/60"
                        }`}
                      />
                      <h3 className="font-semibold text-white">{event.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-foreground/60">
                      {event.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-primary/20 bg-[#031009] px-5 py-4 text-sm text-foreground/70">
              <span className="font-semibold text-white">Next action:</span>{" "}
              the right lawyer or intake closer receives a call-ready brief and
              responds while the prospect is still engaged.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-primary">
            From inquiry to signed case
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            The system gets the right person into the conversation, then keeps
            everything around them moving.
          </h2>
          <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg">
            The product coordinates the work that usually gets spread across an
            inbox, intake CRM, case-management system, document template,
            calendar, and staff memory.
          </p>
        </div>

        <div className="mt-12 divide-y divide-primary/15 border-y border-primary/15">
          {conversionSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="grid gap-4 py-7 sm:grid-cols-[56px_44px_220px_1fr] sm:items-start sm:gap-5"
              >
                <span className="font-mono text-sm text-primary">
                  {step.number}
                </span>
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-foreground/70">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#031009]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-px border border-primary/15 bg-primary/15 lg:grid-cols-2">
            <div className="bg-black p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase text-primary">
                What the prospect feels
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                Someone understood what happened and knows what comes next.
              </h2>
              <div className="mt-7 space-y-4">
                {prospectExperience.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-foreground/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase text-primary">
                What the firm gains
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                The team spends its time on judgment and human connection.
              </h2>
              <div className="mt-7 space-y-4">
                {firmExperience.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-foreground/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Human-led by design
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              AI creates the opening. Your people build the trust.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              The goal is not to make a vulnerable prospect negotiate with a
              machine. It is to remove the delay and administrative work around
              the moment your best people should step in.
            </p>
          </div>

          <div className="grid gap-px bg-primary/15 sm:grid-cols-3">
            {controls.map((control) => {
              const Icon = control.icon;
              return (
                <div key={control.title} className="min-h-64 bg-[#031009] p-6">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {control.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/70">
                    {control.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#031009]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Works around your stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Keep the systems your team knows. Connect the workflow they do
              not handle well together.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground/70 sm:text-lg">
              Lead Docket or Clio Grow can remain the intake authority. Filevine
              or Clio Manage can remain the case system. Possible Minds
              coordinates the evidence, review, document, communication,
              e-signature, scheduling, follow-up, and audit trail between them.
            </p>
            <Link
              href="/blog/headless-legal-software-pi-vendor-rankings"
              className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition hover:text-[#00ff41]"
            >
              Read our PI software interoperability review
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <br />
            <Link
              href="/workshops/ai-for-lead-docket-intake-specialists"
              className="mt-3 inline-flex items-center text-sm font-semibold text-primary transition hover:text-[#00ff41]"
            >
              Join the intake team working session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px border border-primary/15 bg-primary/15">
            {[
              "Lead Docket",
              "Filevine",
              "Clio Grow",
              "Clio Manage",
              "Email & forms",
              "E-sign & calendar",
            ].map((system) => (
              <div
                key={system}
                className="flex min-h-24 items-center justify-center bg-black px-4 text-center text-sm font-semibold text-white"
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Measure the full funnel
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Know why a lead became a case, or where it disappeared.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              Speed only matters if the prospect reaches a person who can build
              trust and move the case forward. The system measures human access,
              priority escalation, signature, and final acceptance instead of
              celebrating an automated acknowledgment.
            </p>
          </div>
          <div className="grid gap-px bg-primary/15 sm:grid-cols-2">
            {metrics.map((metric, index) => (
              <div key={metric} className="min-h-32 bg-[#031009] p-6">
                <span className="font-mono text-xs text-primary">
                  0{index + 1}
                </span>
                <p className="mt-4 text-base font-semibold text-white">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-[#031009]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid border border-primary/20 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[320px]">
              <Image
                src="/blog/law-case-study.jpg"
                alt="Personal injury law firm intake team"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
            <div className="flex flex-col justify-center bg-black p-7 sm:p-10">
              <p className="text-sm font-semibold uppercase text-primary">
                Anonymized deployment
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                A PI firm added a sub-90-second automated response target without
                handing the client relationship to AI.
              </h2>
              <p className="mt-5 text-base leading-7 text-foreground/70">
                The system identified itself, captured the essential facts, and
                prepared the firm&apos;s human intake operation to respond with
                context. Lawyers and intake staff retained judgment and the close.
              </p>
              <Button asChild size="lg" variant="outline" className="mt-7 w-fit">
                <Link href="/law-case-study">
                  Read the case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-primary">
            Common questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            What PI owners want to know before changing intake
          </h2>
        </div>
        <div className="mt-10 divide-y divide-primary/15 border-y border-primary/15">
          {page.faqs.map((faq) => (
            <div
              key={faq.question}
              className="grid gap-3 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10"
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="text-sm leading-7 text-foreground/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#031009]">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center border border-primary/30 bg-black">
            <Send className="h-5 w-5 text-primary" />
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            See what happens between your first inquiry and your next signed
            case.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            We will audit one intake path, quantify the delays and lost
            follow-up, and show where a rapid-response workflow can recover
            opportunities without replacing your team or core systems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/consult">
                Request an intake revenue audit
                <Gauge className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={CALENDLY_URL}>
                Talk through the workflow
                <CalendarCheck2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
