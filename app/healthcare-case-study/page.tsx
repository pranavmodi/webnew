import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Healthcare Case Study | ${SITE_NAME}`,
  description:
    "How a California medical imaging company turned 600 daily emails into a company-owned AI learning loop that improves its private workflow intelligence over time.",
};

export default function HealthcareCaseStudyPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/blog/precise-mri.jpg"
            alt="Medical imaging center"
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
              From 600 daily emails to company-owned operational intelligence
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Precise Imaging processes referrals, lien requests, medical records, billing questions,
              appointment updates, patient documents, and a long tail of operational edge cases. We helped
              them automate the work and retain the knowledge, so every reviewed workflow can make the
              company smarter over time.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Healthcare", "Medical Imaging", "200+ Employees", "California"].map(
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
            When Precise Imaging first reached out, their challenge was straightforward: volume. Over 600
            emails landing in their inbox every day. Referrals, lien requests, medical records, billing
            questions, appointment updates, patient documents, and edge cases that did not fit neatly into
            a standard queue.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Their support staff were spending a good chunk of their day on routine tasks, which meant less
            time for the cases that genuinely needed human attention. Response times had stretched longer than
            they wanted, and they knew there was a better way to handle the workload.
          </p>
        </div>

        {/* Guiding Philosophy */}
        <div className="rounded-2xl border border-[#00ff41]/30 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6 shadow-[0_20px_70px_rgba(0,255,65,0.1)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff41]/30 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#00ff41]">
            The strategic layer
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-primary">
            The point was never just automation. The point was a learning loop.
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            At Possible Minds, our founding belief is that the most valuable AI systems do not just
            complete tasks. They create loops where human expertise and AI capability compound over time.
            Human judgment sets the direction. AI scales the execution. The learning loop compounds the
            expertise.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            For Precise, that means reviewed emails become durable operational IP. When a human marks an
            email for AI training, the system preserves the conversation, the correct human-approved labels,
            the AI&apos;s original decision, and the trace of how that decision was made. If the AI was right,
            that becomes validation. If it was wrong, that becomes training signal.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Over time, those examples improve the company&apos;s private rules, evals, and workflow
            intelligence. The knowledge does not disappear into a generic model or walk out the door when
            someone leaves. It becomes company-owned intelligence that can survive model changes, software
            changes, and team changes.
          </p>
        </div>

        {/* The Solution */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">The solution: two products, one unified approach</h2>
          <p className="mt-4 text-base text-foreground/80">
            We tackled the problem in two phases, deploying a pair of AI systems that work together to cover
            both real-time and asynchronous patient communication while keeping the operating knowledge
            inside Precise&apos;s own system.
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
                A voice-enabled chatbot embedded on their website, handling patient inquiries 24/7 with
                secure access to appointment data and seamless handoff to staff when needed.
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
                AI-powered email triage that reads, tags, routes, and drafts responses for 600+ daily
                messages—with smart document handling for liens and records requests.
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
            Here&apos;s what changed after deploying both the AI chatbot and email automation together:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "62%",
                title: "Reduction in support workload",
                detail:
                  "Combining chat and email automation handled the bulk of routine inquiries automatically.",
              },
              {
                value: "670+",
                title: "Staff hours saved monthly",
                detail:
                  "That's over 4 full-time employees worth of work redirected to complex patient cases.",
              },
              {
                value: "< 5 min",
                title: "Average response time",
                detail:
                  "Down from 4-6 hours on email and missed after-hours chats. Patients get answers fast.",
              },
              {
                value: "41%",
                title: "Increase in patient satisfaction",
                detail:
                  "Faster answers, consistent responses, and 24/7 availability transformed the experience.",
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
                value: "$127K",
                title: "Annual cost savings",
                detail: "Reduced overtime, faster resolution cycles, and fewer escalations.",
              },
              {
                value: "24/7",
                title: "Support availability",
                detail: "Patients get help nights, weekends, and holidays—no extra staffing.",
              },
              {
                value: "98.5%",
                title: "Accuracy rate",
                detail: "AI responses consistently match staff-approved language and protocols.",
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

        {/* Phase 1: Chatbot */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Phase 1
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-primary">
            An AI assistant that sounds like your best staff member
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            We started with the website. Patients were landing on their site at all hours—early mornings,
            late nights, weekends—and finding nobody to help them. The old chat widget was basically a
            contact form with extra steps.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            We deployed an AI chat assistant trained on their specific services, locations, prep
            instructions, and policies. It doesn&apos;t just spit out generic answers. It knows the difference
            between their Glendale and Burbank locations. It knows which scans require fasting and which
            don&apos;t. It sounds like someone who actually works there—because we trained it on how their best
            staff members communicate.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20">
            <Image
              src="/blog/pre1.png"
              alt="AI chatbot interface showing a patient conversation"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Voice that actually works</h2>
          <p className="mt-4 text-base text-foreground/80">
            Not everyone wants to type. Some patients—especially older ones—prefer to just talk. So we
            added voice. Real-time speech recognition, natural responses, and the same knowledge base
            powering the text chat. Patients can ask questions out loud and get spoken answers back,
            just like talking to a receptionist.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The voice system handles the back-and-forth naturally. It understands accents, handles
            interruptions, and knows when someone&apos;s finished speaking. It&apos;s not the robotic voice
            assistant people dread—it&apos;s conversational.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Secure access to real patient data</h2>
          <p className="mt-4 text-base text-foreground/80">
            Here&apos;s where it gets interesting. Patients don&apos;t just want generic information—they want
            to know about <em>their</em> appointment, <em>their</em> results, <em>their</em> balance.
            But healthcare means HIPAA, and HIPAA means you can&apos;t just hand out patient data to anyone
            who asks.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            We built a secure verification flow. When a patient asks about their specific appointment or
            records, the system sends a one-time code to their phone via SMS. Once verified, they can
            access their information—appointment times, prep instructions, even past visit history. All
            logged, all auditable, all compliant.
          </p>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>SMS verification through Twilio before any PHI is shared</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Real-time appointment lookups from their scheduling system</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Complete audit trail of every verification and data access</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Seamless handoff when humans are needed</h2>
          <p className="mt-4 text-base text-foreground/80">
            Not everything can be automated, and that&apos;s the point. When a conversation needs human
            judgment—a complicated scheduling conflict, a sensitive medical question, an upset patient—the
            AI knows to step back. It hands off the conversation to staff through FrontApp, complete with
            the full chat history and context.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Staff don&apos;t have to ask &ldquo;what were you calling about?&rdquo; They already know. The
            patient doesn&apos;t have to repeat themselves. It&apos;s a warm handoff, not a cold transfer.
          </p>
        </div>

        {/* Phase 2: Email */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Phase 2
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-primary">Taming the email flood</h2>
          <p className="mt-4 text-base text-foreground/80">
            The chatbot was working. Patient satisfaction on the website was up, and after-hours
            inquiries were finally getting answered. But the email inbox? Still a disaster. 600+ messages
            a day, and staff were spending hours just reading, sorting, and routing them before they could
            even start responding.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Phase 2 tackled email. We deployed EmailTag—our AI-powered email triage system—directly
            into their FrontApp inbox. Now, every incoming email gets read, understood, tagged, and
            routed automatically. Routine requests get drafted responses. Complex cases get flagged for
            staff with full context attached.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Just as importantly, the review process creates memory. When staff correct a label, approve a
            response, or mark a conversation for AI training, the system captures the example against the
            original AI decision. That gives Precise a growing private library of what good judgment looks
            like in its own operation.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Smart document handling</h2>
          <p className="mt-4 text-base text-foreground/80">
            Medical imaging means paperwork. Lien documents from attorneys. Records requests from other
            providers. Faxes that somehow still exist in 2024. Most of these come as attachments, and
            reading them manually was eating up hours every day.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            EmailTag doesn&apos;t just see an attachment—it reads it. OCR extracts the text. Barcodes get
            scanned for patient IDs and lien types. Signatures are detected and validated. If a document
            has been modified (strikethroughs, whiteout, alterations), the system flags it for review.
            Fraudulent or non-standard liens get caught before they cause problems.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20">
            <Image
              src="/blog/pre2.png"
              alt="Email automation dashboard showing tagged and routed messages"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Responses that sound right</h2>
          <p className="mt-4 text-base text-foreground/80">
            Automated doesn&apos;t have to mean robotic. We worked with their team to build response
            templates for every common scenario—appointment confirmations, records release instructions,
            billing inquiries, lien acknowledgments. Each template uses their language, their tone, their
            specific policies.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            When an email comes in asking about prep instructions for an MRI, the system doesn&apos;t just
            recognize the intent—it drafts a response with the right instructions for that specific scan
            type, personalized with the patient&apos;s name and appointment details. Staff can review and
            send with one click, or edit if needed.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            That is the IP layer: not a generic answer from a generic model, but Precise&apos;s own tone,
            policies, exception handling, and routing logic encoded into a system the company can keep
            improving.
          </p>
        </div>

        {/* Working Together */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Better together</h2>
          <p className="mt-4 text-base text-foreground/80">
            The real magic happened when both systems started working together. The chatbot handles
            website visitors and after-hours inquiries. Email automation handles the inbox during
            business hours. Both feed into the same CRM, so staff have complete context regardless of
            how a patient reached out.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            A patient might start a conversation on the website chat at 10pm, get verified and check
            their appointment, then send a follow-up email the next morning asking to reschedule.
            The email system sees the chat history. It knows who this patient is. It can draft an
            appropriate response with the right scheduling options. No context lost, no patient repeating
            themselves.
          </p>
        </div>

        {/* Human Element */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What the staff actually think</h2>
          <p className="mt-4 text-base text-foreground/80">
            Here&apos;s what surprised us most: the staff love it. We expected some resistance—&ldquo;the
            robots are taking our jobs&rdquo;—but instead we heard relief. The scheduling coordinator
            who used to spend her mornings just sorting emails now actually has time to call patients
            with complex cases. The billing team can focus on negotiations instead of answering the
            same balance questions fifty times a day.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            One staff member put it simply: &ldquo;I finally feel like I&apos;m doing the job I was hired to
            do.&rdquo; That&apos;s the goal. Not replacing humans, but freeing them to do human work.
          </p>
        </div>

        {/* What's Next */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What compounds next</h2>
          <p className="mt-4 text-base text-foreground/80">
            This isn&apos;t a &ldquo;set it and forget it&rdquo; deployment. The system keeps improving
            based on real conversations and staff feedback. The knowledge base gets updated as policies
            change. New response templates get added as patterns emerge. Private evals and rules improve
            as the team reviews more edge cases.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Next on the roadmap: deeper scheduling automation (patients booking and rescheduling directly
            through chat), expanded SMS support for appointment reminders and follow-ups, and integration
            with their patient portal for even more self-service options.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">Could this work for you?</h2>
          <p className="mt-4 text-base text-foreground/80">
            If your team is spending more time sorting messages than helping patients, we should talk.
            Every healthcare organization is different, and we&apos;ll build a system that fits your
            workflows, your policies, and your patients while keeping the operational knowledge inside
            your company. No generic chatbots, no one-size-fits-all templates, and no lock-in to a single
            model or employee.
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
