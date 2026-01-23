import { Metadata } from "next";
import Image from "next/image";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Email Automation | ${SITE_NAME}`,
  description:
    "EmailTag automates inbox triage, routing, and compliant responses for regulated operations.",
};

export default function EmailAutomationPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Email Automation
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Your inbox shouldn&apos;t feel like a second job
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              When 600+ emails land in your inbox every day, your team spends more time sorting and responding
              than actually helping patients. EmailTag changes that. It reads, understands, routes, and responds
              to routine messages automatically—so your staff can focus on the cases that truly need a human touch.
            </p>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-[#04150d] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              EmailTag
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-4 pt-12 sm:px-6">
        {/* Results Stats */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">Real results from real inboxes</h2>
          <p className="mt-4 text-base text-foreground/80">
            For a California-based medical imaging provider handling 600+ emails daily, here&apos;s what changed
            after deploying EmailTag:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "73%",
                title: "Emails handled automatically",
                detail: "Routine scheduling, records, and billing inquiries resolved without staff intervention.",
              },
              {
                value: "520+",
                title: "Staff hours saved monthly",
                detail: "That's over 3 full-time employees worth of work redirected to complex cases.",
              },
              {
                value: "8 min",
                title: "Average response time",
                detail: "Down from 4-6 hours. Patients get answers while the question is still fresh.",
              },
              {
                value: "34%",
                title: "Increase in patient satisfaction",
                detail: "Faster, consistent responses mean happier patients and fewer follow-up calls.",
              },
            ].map((metric) => (
              <div
                key={metric.title}
                className="rounded-2xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-4xl font-semibold text-[#00ff41]">
                  {metric.value}
                </div>
                <div className="mt-2 text-base font-semibold text-primary">
                  {metric.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">The problem we kept hearing</h2>
          <p className="mt-4 text-base text-foreground/80">
            &ldquo;We&apos;re drowning in emails.&rdquo; That&apos;s what operations leaders tell us. Their teams spend hours
            every day reading messages, figuring out what they&apos;re about, tagging them, forwarding them to the
            right department, and typing out the same responses over and over. Meanwhile, patients wait. Staff
            burn out. And the inbox just keeps filling up.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The thing is, most of these emails aren&apos;t complicated. They&apos;re appointment confirmations, records
            requests, billing questions, lien submissions—predictable stuff that follows clear patterns. The
            problem isn&apos;t that they&apos;re hard. It&apos;s that there are so many of them.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">How EmailTag helps</h2>
          <p className="mt-4 text-base text-foreground/80">
            EmailTag connects to your CRM (like FrontApp) and watches every incoming message. When an email
            arrives, it reads the content, scans any attachments using OCR, and figures out exactly what the
            sender needs. Then it takes action:
          </p>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span><strong className="text-primary">Tags and routes automatically.</strong> No more manual sorting. Each email lands in the right inbox with the right tags, instantly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span><strong className="text-primary">Drafts compliant responses.</strong> For routine requests, EmailTag generates replies using your approved templates—complete with patient-specific details pulled from your systems.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span><strong className="text-primary">Escalates when needed.</strong> Complex cases, sensitive requests, or anything that needs human judgment gets flagged for staff review with full context attached.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span><strong className="text-primary">Keeps a complete audit trail.</strong> Every decision—what was tagged, why, what was sent—is logged for compliance and quality review.</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Templates you control</h2>
          <p className="mt-4 text-base text-foreground/80">
            Your responses should sound like you, not a robot. That&apos;s why EmailTag lets you define exactly how
            replies are written. Set up templates for each type of request—appointment confirmations, records
            releases, billing inquiries—with placeholders that automatically fill in patient names, dates, and
            other details. Your team can tweak the wording anytime without touching any code.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-primary/20">
            <Image
              src="/templates.png"
              alt="Template configuration interface showing customizable autorespond templates with placeholder fields"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Preview before sending</h2>
          <p className="mt-4 text-base text-foreground/80">
            Nobody wants to send an email with the wrong patient name or a broken placeholder. EmailTag shows
            you exactly what the final message will look like—with real data filled in—before anything goes out.
            Your staff can review, adjust if needed, and approve with confidence.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-primary/20">
            <Image
              src="/response-preview.png"
              alt="Response preview showing a generated email with patient data and formatting"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Smart document handling</h2>
          <p className="mt-4 text-base text-foreground/80">
            Attachments aren&apos;t just files to EmailTag—they&apos;re information. The system reads PDFs, scans images,
            and extracts key details automatically. For medical imaging providers dealing with liens and legal
            documents, this means:
          </p>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Barcodes are scanned to pull patient IDs, lien types, and referrer information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Signatures are detected and validated for proper placement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Modifications like strikethroughs are flagged for review</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Suspicious or non-standard documents get automatically tagged for closer inspection</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Built for compliance</h2>
            <p className="mt-4 text-base text-foreground/80">
              Healthcare means HIPAA, and HIPAA means being careful. EmailTag verifies senders before sharing
              any protected health information. If something doesn&apos;t check out, the system fails safely—no data
              leaves without proper authorization. Every response uses pre-approved language, and every action
              is logged for audits.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-2xl font-semibold text-primary">Your team stays in control</h2>
            <p className="mt-4 text-base text-foreground/80">
              Automation doesn&apos;t mean giving up control. Staff can review any message before it&apos;s sent. Low-confidence
              classifications get flagged for human review. And you decide which categories get automated responses
              versus which ones always need a person. The AI handles the volume; your team handles the judgment calls.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">What kinds of emails does it handle?</h2>
          <p className="mt-4 text-base text-foreground/80">
            Pretty much anything that follows a pattern. Our clients use EmailTag for:
          </p>
          <ul className="mt-4 grid gap-3 text-base text-foreground/80 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Scheduling requests and appointment status checks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Medical records and imaging release requests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Billing inquiries and balance questions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Lien submissions and document processing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Case updates and attorney correspondence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
              <span>Payment negotiations and collections routing</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">The bottom line</h2>
          <p className="mt-4 text-base text-foreground/80">
            Your staff didn&apos;t sign up to be email sorters. They signed up to help patients. EmailTag gives them
            that time back—hundreds of hours every month that can go toward the work that actually matters.
            Patients get faster answers. Staff get less busywork. And your inbox finally feels manageable.
          </p>
        </div>
      </section>
    </div>
  );
}
