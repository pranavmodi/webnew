"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type DimensionId =
  | "response"
  | "escalation"
  | "followUp"
  | "signing"
  | "visibility"
  | "ownership";

type Option = {
  score: 1 | 2 | 3 | 4;
  label: string;
  detail: string;
};

type Question = {
  id: DimensionId;
  shortLabel: string;
  question: string;
  context: string;
  options: Option[];
};

type Recommendation = {
  title: string;
  summary: string;
  aiRole: string;
  humanRole: string;
  firstTest: string;
  measure: string;
};

const questions: Question[] = [
  {
    id: "response",
    shortLabel: "First response",
    question: "What happens when a potential client contacts the firm after hours?",
    context: "Think about calls, forms, chat, and text messages on a normal week.",
    options: [
      {
        score: 1,
        label: "It waits until the office reopens",
        detail: "A voicemail, inbox, or form queue holds the inquiry for the team.",
      },
      {
        score: 2,
        label: "Someone records the message",
        detail: "An answering service or staff rotation captures basic details and relays them.",
      },
      {
        score: 3,
        label: "We follow a response and escalation process",
        detail: "The team has targets, scripts, and rules for urgent or valuable matters.",
      },
      {
        score: 4,
        label: "Capture, routing, and response are measured",
        detail: "Every inquiry becomes a visible lead, the right person is alerted, and delays are tracked.",
      },
    ],
  },
  {
    id: "escalation",
    shortLabel: "Human escalation",
    question: "How does a serious or competitive case reach the right lawyer?",
    context: "Consider the caller who is injured, worried, and speaking with several firms.",
    options: [
      {
        score: 1,
        label: "It depends on who notices",
        detail: "Staff use judgment in the moment and may need to track someone down.",
      },
      {
        score: 2,
        label: "Staff usually know whom to contact",
        detail: "The handoff works, but the rules live mostly in people’s heads.",
      },
      {
        score: 3,
        label: "Clear facts trigger a defined escalation",
        detail: "Severity, urgency, fit, and shopping signals route the lead to a named person.",
      },
      {
        score: 4,
        label: "The handoff is immediate and auditable",
        detail: "The closer receives the facts, conversation history, and reason for escalation together.",
      },
    ],
  },
  {
    id: "followUp",
    shortLabel: "Follow-up",
    question: "What happens when a promising lead does not sign on the first contact?",
    context: "Use the process the team actually follows, including weekends and busy days.",
    options: [
      {
        score: 1,
        label: "Follow-up depends on memory",
        detail: "Someone calls or texts again when they remember or have time.",
      },
      {
        score: 2,
        label: "Staff create reminders and use templates",
        detail: "There is a process, but cadence and documentation vary by person.",
      },
      {
        score: 3,
        label: "Every qualified lead enters a defined cadence",
        detail: "Calls, texts, and emails have an owner, timing, stop rules, and recorded outcomes.",
      },
      {
        score: 4,
        label: "Follow-up adapts and exceptions reach staff",
        detail: "Routine touches are orchestrated while replies and judgment calls return to a human.",
      },
    ],
  },
  {
    id: "signing",
    shortLabel: "Signing and handoff",
    question: "How do you know a verbal yes became a signed, opened matter?",
    context: "Think from the decision to hire through retainer completion and case-team handoff.",
    options: [
      {
        score: 1,
        label: "Someone checks manually",
        detail: "Unsigned agreements and incomplete handoffs can sit in email or a task list.",
      },
      {
        score: 2,
        label: "We use checklists and reminders",
        detail: "Staff move the lead through the steps, with occasional gaps between systems.",
      },
      {
        score: 3,
        label: "Each step has an owner and status",
        detail: "The firm can see what is unsigned, incomplete, accepted, or ready for opening.",
      },
      {
        score: 4,
        label: "The handoff is connected and reconciled",
        detail: "Signed matters, documents, ownership, and next tasks are verified across the intake and case systems.",
      },
    ],
  },
  {
    id: "visibility",
    shortLabel: "System visibility",
    question: "Can you trace a lead from its source to its final intake outcome?",
    context: "Include phone numbers, forms, referral sources, campaign data, and changes in contact details.",
    options: [
      {
        score: 1,
        label: "Not reliably",
        detail: "The trail is split across phone, email, spreadsheets, and intake software.",
      },
      {
        score: 2,
        label: "We can reconstruct it with effort",
        detail: "Most information exists, but staff must compare systems or clean reports.",
      },
      {
        score: 3,
        label: "Core sources and outcomes are consistently recorded",
        detail: "The firm has defined fields, ownership, and reporting for the intake funnel.",
      },
      {
        score: 4,
        label: "We trust the funnel and investigate exceptions",
        detail: "Connected records support decisions from inquiry through signed case and eventual value.",
      },
    ],
  },
  {
    id: "ownership",
    shortLabel: "Ownership and control",
    question: "Who owns intake improvement and the use of AI inside it?",
    context: "The owner needs enough authority to change the workflow, test it, and review failures.",
    options: [
      {
        score: 1,
        label: "No one clearly owns it",
        detail: "Individuals try tools or make local fixes when problems appear.",
      },
      {
        score: 2,
        label: "The firm owner handles it when time allows",
        detail: "There is executive attention, but limited capacity for testing and follow-through.",
      },
      {
        score: 3,
        label: "A named person owns one workflow and its metric",
        detail: "They can coordinate staff, vendors, data access, review, and escalation rules.",
      },
      {
        score: 4,
        label: "A leader reviews performance, risk, and adoption",
        detail: "The firm measures outcomes, samples work, manages access, and improves the process.",
      },
    ],
  },
];

const recommendations: Record<DimensionId, Recommendation> = {
  response: {
    title: "Build a dependable first-response floor",
    summary:
      "A qualified inquiry cannot convert while it is waiting unseen. Begin by making every channel visible and defining how quickly a real person should enter the conversation.",
    aiRole:
      "Acknowledge the inquiry, collect essential facts, create the lead, and alert the right person at any hour.",
    humanRole:
      "Handle sensitive conversations, confirm fit, exercise judgment, and build trust with promising clients.",
    firstTest:
      "Run after-hours and overflow inquiries through one shared queue for 30 days.",
    measure: "Time to acknowledgment, time to human contact, and qualified leads reached.",
  },
  escalation: {
    title: "Make serious-case escalation unmistakable",
    summary:
      "Fast response matters most when the facts justify immediate attention. Turn the firm’s unwritten instincts into explicit triggers and a named human handoff.",
    aiRole:
      "Structure the facts, identify firm-defined urgency signals, and prepare the closer with the conversation context.",
    humanRole:
      "Decide whether the matter fits, contact the prospect, answer legal questions, and lead the relationship.",
    firstTest:
      "Review 20 recent qualified leads and write the reasons each should or should not have been escalated.",
    measure: "Time from qualification to closer contact and qualified-lead conversion.",
  },
  followUp: {
    title: "Give every qualified lead a visible follow-up path",
    summary:
      "A strong first conversation still leaks value when the next touch depends on memory. Define the cadence, ownership, stop conditions, and moments that require a person.",
    aiRole:
      "Schedule routine touches, preserve context, watch for replies, and return exceptions to staff.",
    humanRole:
      "Respond to questions, recognize hesitation, adjust the conversation, and close the relationship.",
    firstTest:
      "Create one follow-up sequence for qualified prospects who have not yet signed.",
    measure: "Contact rate, consult completion, signed cases, and opt-outs by follow-up attempt.",
  },
  signing: {
    title: "Close the gap between yes and opened matter",
    summary:
      "Verbal agreement is not a signed case. Make unsigned retainers, missing information, acceptance decisions, and case-team handoffs visible in one process.",
    aiRole:
      "Track completion, issue approved reminders, assemble the handoff record, and flag missing steps.",
    humanRole:
      "Approve representation, resolve questions, verify conflicts, and own the attorney-client relationship.",
    firstTest:
      "Map every step from verbal acceptance to the first case-team task and assign an owner to each exception.",
    measure: "Time to signature, unsigned-retainer recovery, and complete handoffs.",
  },
  visibility: {
    title: "Create one trustworthy intake trail",
    summary:
      "Automation cannot improve what the firm cannot see. Establish the identifiers, fields, sources, and outcomes needed to follow an inquiry across channels and systems.",
    aiRole:
      "Normalize incoming information, match records, highlight conflicts, and prepare exception reports.",
    humanRole:
      "Define the source of truth, resolve uncertain matches, and decide what data may be used and retained.",
    firstTest:
      "Trace 25 recent leads from first touch to disposition and record every missing or conflicting field.",
    measure: "Attribution coverage, duplicate rate, unknown dispositions, and reconciliation time.",
  },
  ownership: {
    title: "Give one person authority over one pilot",
    summary:
      "AI experiments stall when nobody owns the workflow around the tool. Assign a leader who can coordinate staff, vendors, safeguards, and a measurable outcome.",
    aiRole:
      "Support one bounded, reviewable task with logs and clear escalation rather than operate as an unsupervised general assistant.",
    humanRole:
      "Set policy, approve access, review samples and failures, train the team, and decide whether to expand.",
    firstTest:
      "Name an owner and give them one intake problem, one metric, and a weekly review meeting.",
    measure: "Adoption, exceptions, error rate, staff time, and the workflow’s business outcome.",
  },
};

const stages = {
  1: {
    name: "Reactive",
    description:
      "Important intake work still depends on attention, memory, or whoever happens to be available.",
  },
  2: {
    name: "Repeatable",
    description:
      "The process exists, but manual handoffs and person-dependent knowledge still create variation.",
  },
  3: {
    name: "Controlled",
    description:
      "The firm has enough process, ownership, and visibility for a bounded AI workflow with human review.",
  },
  4: {
    name: "Compounding",
    description:
      "The intake system is measured and connected. The next gains come from better exceptions, learning, and decisions.",
  },
} as const;

const priority: DimensionId[] = [
  "response",
  "escalation",
  "followUp",
  "signing",
  "visibility",
  "ownership",
];

function emitFunnelStep(step: string) {
  window.dispatchEvent(new CustomEvent("pm:funnel-step", { detail: { step } }));
}

export function PiIntakeDiagnostic() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<DimensionId, number>>>({});
  const [showResult, setShowResult] = useState(false);

  const question = questions[current];
  const selected = answers[question.id];
  const answeredCount = Object.keys(answers).length;

  const result = useMemo(() => {
    if (answeredCount !== questions.length) return null;
    const scores = priority.map((id) => answers[id] as 1 | 2 | 3 | 4);
    const lowest = Math.min(...scores) as 1 | 2 | 3 | 4;
    const focus = priority.find((id) => answers[id] === lowest) ?? "response";
    return {
      stage: stages[lowest],
      score: lowest,
      focus,
      recommendation: recommendations[focus],
    };
  }, [answeredCount, answers]);

  const choose = (score: number) => {
    setAnswers((existing) => ({ ...existing, [question.id]: score }));
  };

  const next = () => {
    if (!selected) return;
    if (current === questions.length - 1) {
      setShowResult(true);
      emitFunnelStep("diagnostic_complete");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setCurrent((index) => index + 1);
    emitFunnelStep(`diagnostic_q${current + 1}`);
  };

  const back = () => {
    if (current === 0) return;
    setCurrent((index) => index - 1);
  };

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showResult && result) {
    const consultHref = `/consult?focus=${result.focus}&stage=${result.score}#book`;

    return (
      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="border-b border-primary/20 py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Your intake operating stage
              </p>
              <div className="mt-4 flex items-baseline gap-4">
                <span className="font-mono text-6xl font-semibold text-[#00ff41] sm:text-7xl">
                  {result.score}
                </span>
                <span className="text-2xl font-semibold text-white sm:text-3xl">
                  {result.stage.name}
                </span>
              </div>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-foreground/75">
              {result.stage.description}
            </p>
          </div>
        </section>

        <section className="grid gap-12 py-12 lg:grid-cols-[0.72fr_1.28fr] lg:py-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Start here
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {result.recommendation.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-foreground/70">
              {result.recommendation.summary}
            </p>
            <p className="mt-5 text-sm leading-6 text-foreground/50">
              Your stage is set by the lowest-scoring dependency. A stronger area
              cannot reliably compensate for a handoff that still breaks.
            </p>
          </div>

          <div className="divide-y divide-primary/15 border-y border-primary/20">
            {questions.map((item) => {
              const score = answers[item.id] as number;
              const isFocus = item.id === result.focus;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_auto] gap-5 py-4 sm:grid-cols-[180px_1fr_44px] sm:items-center"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.shortLabel}
                    {isFocus ? (
                      <span className="ml-2 text-xs font-medium text-[#00ff41]">
                        Focus
                      </span>
                    ) : null}
                  </div>
                  <div className="col-span-2 flex h-2 gap-1 sm:col-span-1">
                    {[1, 2, 3, 4].map((segment) => (
                      <span
                        key={segment}
                        className={cn(
                          "h-full flex-1 rounded-sm",
                          segment <= score ? "bg-primary" : "bg-white/10",
                        )}
                      />
                    ))}
                  </div>
                  <div className="row-start-1 font-mono text-sm text-primary sm:col-start-3">
                    {score}/4
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-primary/20 bg-[#031009]">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-b border-primary/15 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                AI handles
              </p>
              <p className="mt-4 text-base leading-7 text-foreground/80">
                {result.recommendation.aiRole}
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                People retain
              </p>
              <p className="mt-4 text-base leading-7 text-foreground/80">
                {result.recommendation.humanRole}
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-12 sm:grid-cols-2 lg:py-16">
          <div className="border-l-2 border-primary pl-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              First test
            </p>
            <p className="mt-3 leading-7 text-foreground/80">
              {result.recommendation.firstTest}
            </p>
          </div>
          <div className="border-l-2 border-primary pl-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Measure
            </p>
            <p className="mt-3 leading-7 text-foreground/80">
              {result.recommendation.measure}
            </p>
          </div>
        </section>

        <section className="border border-primary/25 bg-[#04150d] p-6 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.18em]">
                  Firm-specific review
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Test the result against your actual intake path.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/70">
                In a focused audit, we map one channel from inquiry to signed case,
                identify the expensive delay, and define what should stay human.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={consultHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#00ff41] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90"
              >
                Book an intake audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={restart}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-primary/35 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                Retake assessment
              </button>
            </div>
          </div>
        </section>

        <p className="mt-6 text-xs leading-5 text-foreground/45">
          This is a directional self-assessment, not a compliance, security, or
          financial audit. Recommendations should be validated against your firm’s
          systems, policies, jurisdiction, and intake data.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <section className="grid gap-8 border-b border-primary/20 py-8 sm:py-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Free PI intake diagnostic
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Where is your intake system most exposed?
          </h1>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg">
            Six questions. About three minutes. Get one concrete workflow to fix,
            what AI could handle, and what should remain human.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-foreground/50">
            <span>No email required</span>
            <span>Immediate result</span>
            <span>Built for PI firms</span>
          </div>
        </div>
      </section>

      <div className="grid gap-8 pt-8 lg:grid-cols-[220px_1fr] lg:gap-12 lg:pt-12">
        <aside aria-label="Assessment progress">
          <div className="sticky top-24">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-foreground/50">
              <span>Question {current + 1}</span>
              <span>{questions.length}</span>
            </div>
            <div className="mt-3 flex gap-1" aria-hidden="true">
              {questions.map((item, index) => (
                <span
                  key={item.id}
                  className={cn(
                    "h-1.5 flex-1 rounded-sm transition-colors",
                    index <= current ? "bg-primary" : "bg-white/10",
                  )}
                />
              ))}
            </div>
            <ol className="mt-7 hidden space-y-3 lg:block">
              {questions.map((item, index) => (
                <li
                  key={item.id}
                  className={cn(
                    "flex items-center gap-3 text-sm",
                    index === current ? "text-white" : "text-foreground/40",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center border font-mono text-[11px]",
                      answers[item.id]
                        ? "border-primary bg-primary/15 text-primary"
                        : index === current
                          ? "border-white/40 text-white"
                          : "border-white/10",
                    )}
                  >
                    {answers[item.id] ? <Check className="h-3.5 w-3.5" /> : index + 1}
                  </span>
                  <span>{item.shortLabel}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <section aria-labelledby={`question-${question.id}`}>
          <p className="text-sm leading-6 text-primary">{question.context}</p>
          <h2
            id={`question-${question.id}`}
            className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl"
          >
            {question.question}
          </h2>

          <div
            className="mt-8 divide-y divide-white/10 border-y border-white/10"
            role="radiogroup"
            aria-label={question.question}
          >
            {question.options.map((option) => {
              const isSelected = selected === option.score;
              return (
                <button
                  key={option.score}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => choose(option.score)}
                  className={cn(
                    "group grid w-full grid-cols-[38px_1fr] gap-3 px-1 py-5 text-left transition sm:grid-cols-[44px_220px_1fr] sm:items-center sm:gap-5 sm:px-3",
                    isSelected ? "bg-primary/10" : "hover:bg-white/[0.035]",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center border font-mono text-xs transition",
                      isSelected
                        ? "border-[#00ff41] bg-[#00ff41] text-black"
                        : "border-white/20 text-foreground/60 group-hover:border-primary/60",
                    )}
                    aria-hidden="true"
                  >
                    {isSelected ? <Check className="h-4 w-4" /> : option.score}
                  </span>
                  <span className="font-semibold text-white">{option.label}</span>
                  <span className="col-start-2 text-sm leading-6 text-foreground/55 sm:col-start-3">
                    {option.detail}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={back}
              disabled={current === 0}
              className="inline-flex min-h-11 items-center gap-2 px-1 text-sm font-semibold text-foreground/60 transition hover:text-white disabled:invisible"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!selected}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#00ff41] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00ff41]/90 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-foreground/35"
            >
              {current === questions.length - 1 ? "See my result" : "Next question"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
