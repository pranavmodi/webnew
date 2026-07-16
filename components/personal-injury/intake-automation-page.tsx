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
    title: "Firm rules applied",
    detail: "The matter is matched, routed, and checked for missing facts, conflicts, and escalation triggers.",
  },
  {
    time: "<01:00",
    title: "Response ready",
    detail: "A personalized message, booking step, retainer, and system updates are ready for human review.",
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
    title: "Qualify and route",
    body:
      "Apply the firm's case criteria, urgency rules, jurisdiction logic, language preferences, and attorney-review thresholds.",
  },
  {
    number: "04",
    icon: MessageSquareText,
    title: "Make the first response count",
    body:
      "Prepare a message that reflects the prospect's actual situation, shows that the firm listened, and gives one clear next step.",
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
  "An immediate sign that the firm is present",
  "A response that reflects the facts they provided",
  "A clear path to the right human when the matter is urgent",
  "One understandable next step: talk, book, review, or sign",
];

const firmExperience = [
  "A structured intake record without re-keying the same facts",
  "Evidence, warnings, and proposed actions in one review workspace",
  "The right intake specialist or attorney involved at the right time",
  "A measurable trail from lead source to signed and accepted matter",
];

const controls = [
  {
    icon: UserRoundCheck,
    title: "Human approval by default",
    body:
      "The team reviews the facts, scope, message, agreement, and proposed external actions before consequential sends.",
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
  "Time to first response",
  "Contact and qualification rate",
  "Retainers sent, opened, and signed",
  "Time from inquiry to signature",
  "Wanted cases lost by reason",
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
        <div className="absolute inset-0 bg-black/65" />
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
            Rapid intake response
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            They were just in a crash. Your firm has one minute to make them
            feel taken care of.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            A police report or inquiry arrives. Before the prospect calls the
            next firm, Possible Minds can organize the facts, prepare a
            personalized response, generate the right retainer, and give your
            team one review screen to move the matter forward.
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
              className="border-white/35 bg-black/35 text-white hover:bg-black/60"
            >
              <Link href="#response-workflow">
                See the response workflow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-xs leading-5 text-white/55">
            Designed to work with Lead Docket, Filevine, Clio, email, forms,
            scheduling, and e-signature. Human approval remains in the loop.
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
              The intake race starts before anyone on your team opens the lead.
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/72 sm:text-lg">
              The person on the other side is not comparing software. They are
              trying to decide who will help them. They may be in pain, without
              a car, worried about work, and repeating the story to several
              firms.
            </p>
            <p className="mt-5 text-base leading-7 text-foreground/72 sm:text-lg">
              The first useful response creates relief. It proves the firm is
              paying attention and turns uncertainty into a concrete next step.
              Speed matters because trust begins forming before the first legal
              conversation.
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
                <p className="mt-1 text-sm text-foreground/55">
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
                            : "text-primary/65"
                        }`}
                      />
                      <h3 className="font-semibold text-white">{event.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-foreground/62">
                      {event.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-primary/20 bg-[#031009] px-5 py-4 text-sm text-foreground/70">
              <span className="font-semibold text-white">Next action:</span>{" "}
              intake specialist reviews the exact package before send.
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
            Fast response is not one message. It is a connected conversion
            system.
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
                <p className="text-sm leading-7 text-foreground/66">
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
              Fast, with boundaries
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Automation wins time. People keep the consequential decisions.
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
                  <p className="mt-3 text-sm leading-7 text-foreground/65">
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
              Faster response only matters if it improves contact,
              qualification, signature, and final acceptance. The system keeps
              the denominator visible so a conversion rate cannot improve by
              quietly ignoring difficult leads.
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
                Intake conversion proof
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                A PI firm cut lead response below 90 seconds and signed 34% more
                cases.
              </h2>
              <p className="mt-5 text-base leading-7 text-foreground/70">
                The implementation paired immediate outreach with structured
                qualification and follow-up around the firm&apos;s existing
                intake operation.
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
              <p className="text-sm leading-7 text-foreground/68">{faq.answer}</p>
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
