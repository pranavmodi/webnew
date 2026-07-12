import { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/constants";

const pageTitle = "Case Manager Working Session — Instructor Script (1:1)";
const pageDescription =
  "Internal facilitation script for the Filevine case-manager AI working session, run one-on-one: timings, verbatim lines, exercises, and contingencies.";
const pageUrl = `${SITE_URL}/workshops/case-manager-session-script`;

export const metadata: Metadata = {
  title: `${pageTitle} | ${SITE_NAME}`,
  description: pageDescription,
  robots: { index: false, follow: false },
  alternates: { canonical: pageUrl },
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-3 inline-flex shrink-0 items-center rounded-full border border-primary/30 bg-black/50 px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">
      {children}
    </span>
  );
}

function Say({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-3 rounded-r-xl border-l-2 border-[#00ff41]/60 bg-[#04150d] py-3 pl-4 pr-4 italic leading-relaxed text-foreground/85">
      {children}
    </blockquote>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-3 rounded-xl border border-amber-500/25 bg-amber-950/10 p-3 text-sm leading-relaxed text-foreground/75">
      <span className="font-semibold uppercase tracking-wide text-amber-400/90">
        Coach note:&nbsp;
      </span>
      {children}
    </p>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-xl border border-primary/25 bg-black/60 p-4 font-mono text-sm leading-relaxed text-foreground/80">
      {children}
    </div>
  );
}

function Section({
  title,
  chip,
  defaultOpen = false,
  children,
}: {
  title: string;
  chip: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-2xl border border-primary/25 bg-[#04150d] open:border-primary/40"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
        <h2 className="text-lg font-semibold text-[#00ff41] sm:text-xl">
          {title}
        </h2>
        <span className="flex items-center">
          <Chip>{chip}</Chip>
          <span className="ml-3 text-primary/60 transition-transform group-open:rotate-90">
            ▸
          </span>
        </span>
      </summary>
      <div className="space-y-3 border-t border-primary/15 p-5 text-[15px] leading-relaxed text-foreground/80 sm:p-6">
        {children}
      </div>
    </details>
  );
}

export default function SessionScriptPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Internal — facilitation script
          </div>
          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-4xl">
            Case Manager Working Session — 1:1 Instructor Script
          </h1>
          <p className="mt-4 max-w-3xl text-foreground/75">
            Sixty minutes, one case manager, one instructor, screen shared.
            The participant does the typing from exercise two onward. Goals in
            priority order: (1) they leave with five working instructions and
            the managing-partner memo, (2) they experience being{" "}
            <em>better at their job</em> for an hour, not being sold to, (3)
            we capture their vocabulary, objections, and workflow details for
            the listening system. This page is unlisted — do not link it from
            the public site.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-4 px-4 pt-10 sm:px-6">
        <Section title="Before the call — prep checklist" chip="T-30 min" defaultOpen>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Pull their registration record: name, firm, role, firm size,
              case-management system. If the CMS field isn&apos;t Filevine,
              re-read the exercises — everything works, but drop the
              Filevine-specific boundary map and ask about their stack instead.
            </li>
            <li>
              Open the sanitized sample file set (the &quot;Rivera&quot; MVA
              file: ~240 pages — ER records, two imaging reports, PT notes
              with a 6-week gap, one referenced-but-missing orthopedic
              follow-up, billing summary). Have it loaded in the shared AI
              workspace before they join.
            </li>
            <li>
              Open a blank copy of the <strong>Case Manager Prompt
              Playbook</strong> template — you fill it live as each
              instruction is finished; it becomes their take-home.
            </li>
            <li>
              Verify the Filevine boundary map is current (AIFields, MedChron,
              DemandsAI — check their docs monthly; if something changed, say
              so in the session, it builds more trust than being right).
            </li>
            <li>
              Have the managing-partner memo template open in a second tab.
            </li>
            <li>
              Recording: ask permission at the top; if no, take notes in the
              observation log instead. Either way, log vocabulary and
              objections afterward.
            </li>
          </ul>
        </Section>

        <Section title="1 · Opening — set the frame, read the room" chip="0:00–0:05">
          <p>
            Camera on, smile, zero slides. The first 90 seconds decide whether
            this feels like training they were sent to or an hour someone
            finally built for them.
          </p>
          <Say>
            &quot;Thanks for making the hour. Quick promise before anything
            else: there&apos;s no demo and no pitch in this session. You&apos;re
            going to build five AI instructions for your own work, on a sample
            file, and everything you build leaves with you. If at any point
            this stops being useful, tell me and we&apos;ll change course —
            you&apos;re the only student, so the agenda is yours.&quot;
          </Say>
          <p>Then three calibration questions. Listen more than you talk:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <em>&quot;Walk me through your caseload — roughly how many
              active files, and what stage eats most of your week?&quot;</em>{" "}
              (Sizes the examples. 40 files pre-lit is a different session
              than 90 mixed.)
            </li>
            <li>
              <em>&quot;What&apos;s the task you most dread coming back to
              after lunch?&quot;</em> (Their answer becomes your recurring
              example. If they say &quot;records review,&quot; you&apos;re on
              script. If they say something else — client calls, liens — note
              it and bend exercise five toward it.)
            </li>
            <li>
              <em>&quot;What have you actually tried with AI so far — at work
              or at home?&quot;</em> (Sorts them into the three profiles in
              the contingencies section: never-touched-it, burned-once, or
              power user.)
            </li>
          </ol>
          <Note>
            Write down the exact words they use for their pain. &quot;Chasing
            records&quot; vs &quot;working up the file&quot; vs &quot;getting
            the demand out&quot; — their vocabulary goes in the observation
            log and, later, in our emails.
          </Note>
        </Section>

        <Section title="2 · The rule we teach first — PHI boundary" chip="0:05–0:09">
          <Say>
            &quot;Before we build anything: the one rule in this session that
            has no exceptions. Medical records are protected health
            information. They never go into a public chatbot — not ChatGPT,
            not a free tool, not once, not &apos;just this file.&apos; Not
            because AI is dangerous, but because those tools aren&apos;t under
            your firm&apos;s control, and you personally do not want to be the
            person who has to explain that upload. Everything we do today
            happens in tools your firm approves — and today, on a sample file
            with no real client in it.&quot;
          </Say>
          <p>Check question — make them say it back:</p>
          <Say>
            &quot;So — your attorney hands you 300 pages of records Monday
            morning and says &apos;get me a summary by noon.&apos; What&apos;s
            the first question you ask before any AI touches it?&quot;
          </Say>
          <p>
            Target answer: <em>which tool is approved / where does this data
            go</em>. If they get there, reinforce hard (&quot;that question is
            the whole rule&quot;). If they don&apos;t, give it plainly and
            move on — no quizzing energy.
          </p>
          <Note>
            If they admit they&apos;ve already pasted records into ChatGPT —
            common — do not flinch and do not lecture. &quot;You&apos;re in
            large company, and it means the leverage is real. From here on
            there&apos;s a safe way to get it.&quot; Shame closes people;
            we need them open for the next 50 minutes.
          </Note>
        </Section>

        <Section
          title="3 · Exercise 1 — records to treatment timeline (instructor drives)"
          chip="0:09–0:20"
        >
          <p>
            The anchor exercise. You drive the keyboard for this one; they
            drive everything after. Start with the failure they&apos;ve
            already lived:
          </p>
          <Say>
            &quot;Let&apos;s do this the way everyone tries it first.&quot;
          </Say>
          <Prompt>Summarize these medical records.</Prompt>
          <p>
            Run it on the Rivera file. Let them read the output. Ask:
            <em> &quot;Would your attorney trust this? What&apos;s missing
            that you&apos;d get in trouble for?&quot;</em> They&apos;ll spot
            it — vague, no dates, no gaps flagged, reads confident. Name the
            lesson:
          </p>
          <Say>
            &quot;The model isn&apos;t bad. The instruction was. It got the
            task but not the judgment — it doesn&apos;t know what a case
            manager gets blamed for. So let&apos;s tell it.&quot;
          </Say>
          <p>Build instruction one on screen, narrating each clause:</p>
          <Prompt>
            Build a chronological treatment timeline from these records for a
            personal injury case manager preparing a file for demand. Flag
            every gap in treatment longer than 30 days. Separate documented
            facts from provider conclusions and label which is which. List
            every record, image, or bill that is referenced but not present.
            End with the questions a case manager should verify with the
            client or provider before anyone relies on this summary. Do not
            guess at dates or diagnoses; mark them as unverified instead.
          </Prompt>
          <p>
            Run it. The Rivera file is built so this lands: the 6-week PT gap
            gets flagged, the missing ortho follow-up shows up in the
            &quot;referenced but not present&quot; list. Pause on that
            moment:
          </p>
          <Say>
            &quot;That gap, and that missing follow-up — when do you usually
            find those?&quot;
          </Say>
          <p>
            The honest answer is &quot;late, or the defense finds them.&quot;
            That is the emotional core of the session. Then teach the
            verification habit: pick two flagged items and trace them back to
            the page numbers in the source records, together. AI drafts,
            humans verify — shown, not preached.
          </p>
          <Note>
            Paste instruction one into their playbook and say so: &quot;that
            one&apos;s yours, that&apos;s page one.&quot; First tangible
            deposit; it changes the energy of everything after.
          </Note>
        </Section>

        <Section
          title="4 · Exercise 2 — client status update (they drive)"
          chip="0:20–0:30"
        >
          <Say>
            &quot;Your turn on the keyboard. Scenario: Ms. Rivera calls, third
            time this month, wants to know what&apos;s happening with her
            case. Records are still pending from the ortho. Write the
            instruction that drafts that update — using the six parts we just
            used: task, background, judgment, constraints, deliverable,
            verification.&quot;
          </Say>
          <p>
            Let them type. Expect a decent task line and weak constraints.
            Coach with questions, not corrections:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <em>&quot;What must this update never do?&quot;</em> → cross
              into legal advice, promise outcomes or dates, speculate on
              value. Make them write the constraint in their own words.
            </li>
            <li>
              <em>&quot;What does Ms. Rivera actually want to hear?&quot;</em>{" "}
              → that someone is on it, what happens next, what she can do.
              That&apos;s the judgment clause.
            </li>
            <li>
              <em>&quot;What if she replies asking whether she should take
              the insurance company&apos;s call?&quot;</em> → escalation
              rule: legal questions route to a human, drafted response says
              so warmly.
            </li>
          </ul>
          <p>
            Run their instruction, review the draft together, tighten one
            clause, run again so they feel the output move. Into the
            playbook as instruction two — their authorship, their words.
          </p>
          <Note>
            Resist fixing their prompt into your ideal version. A B+
            instruction they wrote beats an A+ instruction they watched you
            write. The playbook should read like them.
          </Note>
        </Section>

        <Section
          title="5 · Exercises 3–4 — records chase & weekly gap sweep (rapid build)"
          chip="0:30–0:42"
        >
          <p>
            Pace shifts: two instructions in twelve minutes, them typing, you
            calling out only the missing clause. Frame the speed-up
            explicitly — &quot;you know the anatomy now, let&apos;s prove
            it.&quot;
          </p>
          <p>
            <strong>Instruction three — the records chase.</strong> Input: the
            outstanding-requests list (three providers, one 40 days
            overdue). Output: a follow-up email per provider plus an
            escalation note for the stale one. The clause they&apos;ll miss:
            tone differentiation — a first nudge and a fourth follow-up are
            different letters. Ask: <em>&quot;which provider on your real
            desk ignores you the longest, and what finally works on
            them?&quot;</em> — that answer becomes the judgment clause, and
            it&apos;s also gold for the observation log.
          </p>
          <p>
            <strong>Instruction four — the Monday morning gap sweep.</strong>{" "}
            Input: case-notes summaries across active files (sample set of
            eight). Output: a ranked list — new treatment gaps, new symptoms
            mentioned, files with no client contact in 21+ days. The clause
            they&apos;ll miss: ranking criteria. Ask: <em>&quot;of these
            eight, which one would your attorney ask about first?&quot;</em>
          </p>
          <Note>
            If time is bleeding (you&apos;re past 0:45 before instruction
            four runs), build four together verbally, paste a clean version
            into the playbook, and say what you&apos;re doing — &quot;I&apos;ll
            finish this one for your playbook so we protect time for the memo
            that gets you credit upstairs.&quot; Never silently skip a
            promised artifact.
          </Note>
        </Section>

        <Section
          title="6 · Exercise 5 — handoff memo + where these live in Filevine"
          chip="0:42–0:50"
        >
          <p>
            <strong>Instruction five — pre-lit to lit handoff.</strong> One
            pass, together: memo with case posture, treatment status,
            outstanding items, and escalation flags, built from the Rivera
            timeline they made in exercise one — show the outputs chaining
            (&quot;instruction one&apos;s output is instruction five&apos;s
            input — that&apos;s the beginning of a system&quot;).
          </p>
          <p>Then the Filevine residency conversation:</p>
          <Say>
            &quot;Last thing before the memo. Right now these five live in a
            doc — which means they live with <em>you</em>, and they go on
            vacation when you do. Where could they live so the whole team
            uses them the same way? In Filevine terms: AIFields carries a
            prompt on a document type. MedChron already owns the chronology
            piece — so instruction one becomes your <em>verification</em> layer
            on top of it, not a replacement. The chase and the sweep want to
            be task templates. What nothing in the stack will do is check the
            output — that stays a human job, and after today it&apos;s a job
            you know how to run.&quot;
          </Say>
          <Note>
            This section is honest positioning, not a pitch — the words
            &quot;we could build that&quot; do not appear. If they ask
            &quot;could you set that up for us?&quot; the answer is in the
            close, section 7.
          </Note>
        </Section>

        <Section title="7 · The memo & the close" chip="0:50–1:00">
          <p>
            Open the managing-partner memo template and fill it{" "}
            <em>with them</em> — their name on it, their words:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>What I learned (one line, their phrasing).</li>
            <li>
              The five instructions our team could standardize (titles only).
            </li>
            <li>
              The rule we should adopt firm-wide (PHI boundary + verification
              before reliance).
            </li>
            <li>
              Recommended next step (their choice — pilot on one file type,
              share playbook with the team, or a leadership conversation).
            </li>
          </ul>
          <Say>
            &quot;This page is the reason the hour was worth it to your firm,
            not just to you. Send it to your managing partner with one line:
            &apos;I did a working session on AI for our records workflow,
            here&apos;s what I think we should standardize.&apos; You&apos;re
            now the person at the firm who&apos;s actually done this.&quot;
          </Say>
          <p>Then the close — honest ladder, zero pressure:</p>
          <Say>
            &quot;You leave with the playbook and the memo — I&apos;ll email
            both within the hour. If your leadership ever wants the systems
            version of this — these instructions wired into Filevine with
            review rules and logging, so they run without anyone remembering
            to run them — that&apos;s a different conversation and it&apos;s
            theirs to start, not yours to sell. Last thing, and be blunt:
            what was the least useful part of this hour?&quot;
          </Say>
          <Note>
            Ask for the <em>least</em> useful part, not feedback in general —
            it produces real answers, and it&apos;s the final anti-webinar
            signal. Log the answer verbatim.
          </Note>
        </Section>

        <Section title="After the call — within the hour" chip="T+60 min">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Email the completed playbook + memo. Subject: &quot;Your five
              instructions + the memo&quot;. No CTA in this email — the
              artifact is the message.
            </li>
            <li>
              Log to the observation system: their vocabulary (exact phrases),
              dread-task answer, AI profile, objections raised, provider-chase
              anecdote, least-useful answer, and whether they intend to send
              the memo.
            </li>
            <li>
              Follow-up cadence: day 5 — one new instruction variant relevant
              to their dread-task answer, two sentences. Day 14 — &quot;did
              the memo land? happy to join a 20-minute call with your
              managing partner if useful.&quot; Nothing after that unless they
              respond; the artifact does the compounding.
            </li>
          </ul>
        </Section>

        <Section title="Contingencies & participant profiles" chip="as needed">
          <p>
            <strong>The output hallucinates live.</strong> Best thing that can
            happen. Do not apologize — teach: &quot;Stop — look at that date.
            Check page 47 of the source. It&apos;s wrong. <em>This</em> is why
            verification is a clause in every instruction and not a vibe.
            You just caught it in ninety seconds; the version of you without
            the checklist ships it.&quot;
          </p>
          <p>
            <strong>&quot;Will this replace me?&quot;</strong> — asked
            directly or hovering. Answer directly, once: &quot;No — and
            here&apos;s the specific reason. Every instruction we wrote today
            has a verification step that only works if the person running it
            knows what a treatment gap means for a demand. AI compresses the
            mechanical part of your job. It makes the judgment part — the
            part that&apos;s actually yours — more visible, not less.&quot;
            Then return to the work; don&apos;t marinate in reassurance.
          </p>
          <p>
            <strong>&quot;My firm blocks all AI tools.&quot;</strong> The
            session still works — build all five instructions as written; they
            become the proposal. Reframe the memo: &quot;recommended pilot
            under an approved tool&quot; becomes the next step, and that memo
            is more likely to move leadership than any vendor email.
          </p>
          <p>
            <strong>The burned-once profile</strong> (tool was bought, dumped
            on them, made cleanup): acknowledge in their terms early —
            &quot;you&apos;ve seen the version where software becomes your
            second job.&quot; Emphasize authorship: nothing today is
            configured <em>at</em> them; they write every instruction.
          </p>
          <p>
            <strong>The power user</strong> (already prompting daily): skip
            the weak-prompt theater in exercise one — tell them you&apos;re
            skipping it and why. Go deeper instead: verification design,
            chaining outputs (ex. five), and team residency. Their session
            ends with &quot;how do I get my whole team doing this&quot; —
            which is the memo, and the strongest champion outcome we have.
          </p>
          <p>
            <strong>The silent participant.</strong> Stop asking questions
            into silence; hand them the keyboard earlier. Typing beats
            talking — the work itself is the conversation.
          </p>
          <p>
            <strong>Session overruns.</strong> Sacrifice exercises four and
            five before you ever touch the memo or the close. The playbook
            can arrive complete by email; the memo moment and the honest
            close cannot.
          </p>
        </Section>
      </div>
    </div>
  );
}
