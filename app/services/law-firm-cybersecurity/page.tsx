import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, KeyRound, ScanLine, ShieldCheck } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";
import { securityArticleSlug, securityConsultation, securityServiceFaqs, securityServicePath } from "@/lib/security-service";

const title = "Cybersecurity Assessment & Remediation for Law Firms";
const description = "Protect client information with a scoped law firm security assessment, prioritized fixes, and retesting. Built for PI firms and small legal teams.";
const url = `${SITE_URL}${securityServicePath}`;
const container = "mx-auto max-w-6xl px-4 sm:px-6";
const areas = [
  { title: "Email & staff access", text: "Former staff accounts, administrator access, MFA, forwarding rules, and third-party application permissions." },
  { title: "Websites & intake", text: "Exposed services, software updates, administrative interfaces, forms, and the path an inquiry takes into your firm." },
  { title: "Case files & recovery", text: "Sharing permissions, sensitive records, backup protection, and a scoped restore exercise with your IT provider." },
  { title: "AI & integrations", text: "What your agents can read, send, or change. Credentials, data flows, human approvals, logging, and ways to stop access." },
];
const phases = [
  { title: "Scope & authorize", text: "Identify your systems, information, and operational priorities. Agree testing permission, access, exclusions, safeguards, and evidence handling before work starts.", output: "Written scope and system inventory" },
  { title: "Assess & verify", text: "Combine appropriate scanning with account, configuration, and workflow review. Validate findings and distinguish confirmed exposure from untested areas.", output: "Prioritized findings with supporting evidence" },
  { title: "Fix & coordinate", text: "Implement approved changes within scope. Coordinate vendor-owned fixes, plan rollback, and assign an owner to work that needs your IT provider or another specialist.", output: "Change log and remediation register" },
  { title: "Retest & hand over", text: "Check that the fixes work and everyday casework still runs. Document residual risks, recovery-test results, and who maintains each protection.", output: "Retest results and an operating checklist" },
];
const deliverables = ["Owner-level summary in plain English", "System and client-data inventory", "Findings ranked by exposure and client impact", "Approved fixes and before-and-after evidence", "Open issues, limitations, and named owners", "Recovery check and maintenance handover"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  keywords: ["law firm cybersecurity services", "personal injury firm security", "security assessment", "vulnerability remediation"],
  openGraph: { title, description, type: "website", url, images: [{ url: `${SITE_URL}/blog/law-docs.png`, width: 1024, height: 1024 }] },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/blog/law-docs.png`] },
};

export default function LawFirmCybersecurityPage() {
  return (
    <div className="-mt-4 bg-black pb-16 text-white/80">
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "Service", name: title, description, url, serviceType: "Law firm security assessment and remediation", provider: { "@id": `${SITE_URL}/#organization` }, audience: { "@type": "BusinessAudience", audienceType: "Personal injury law firms and small legal teams" } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: title, item: url }] },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: securityServiceFaqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      ]} />

      <header className="border-b border-white/15">
        <div className={`${container} py-8 sm:py-14`}>
          <p className="text-sm font-semibold text-emerald-300">Possible Minds / Security services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">Cybersecurity for personal injury firms.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-7 sm:leading-8">Know where client information is exposed. Fix the important weaknesses. Verify the changes. Hands-on assessment and remediation for PI firms and small legal teams.</p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href={securityConsultation} className="inline-flex max-w-full items-center gap-3 rounded bg-emerald-300 px-5 py-3 text-base font-semibold text-black hover:bg-emerald-200">Discuss a security assessment <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" /></a>
            <a href="#engagement" className="py-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:text-emerald-300">See the engagement</a>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/60">Start with your systems and concerns. No client files or passwords needed.</p>
          <div className="mt-6 grid gap-5 border-t border-white/15 pt-6 sm:mt-8 sm:grid-cols-3">
            {[{ Icon: ScanLine, label: "Defined assessment" }, { Icon: KeyRound, label: "Approved fixes" }, { Icon: ClipboardCheck, label: "Documented verification" }].map(({ Icon, label }) => <div key={label} className="flex items-center gap-3 text-sm font-medium text-white"><Icon className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />{label}</div>)}
          </div>
        </div>
      </header>

      <section className="bg-[#111619]">
        <div className={`${container} grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start`}>
          <div>
            <p className="text-sm font-semibold text-cyan-200">The information behind every case</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">Review the places your team actually works.</h2>
            <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
              {areas.map(({ title: label, text }) => <div key={label} className="border-t border-white/20 py-5"><h3 className="text-xl font-semibold text-white">{label}</h3><p className="mt-3 text-base leading-7 text-white/75">{text}</p></div>)}
            </div>
          </div>
          <figure className="max-w-[260px]">
            <Image src="/blog/law-docs.png" alt="Illustration of case documents and a laptop" width={1024} height={1024} sizes="260px" className="aspect-square h-auto w-full rounded" />
            <figcaption className="mt-3 text-sm leading-6 text-white/60">Medical records, evidence, and settlement correspondence need protection across systems. Illustration.</figcaption>
          </figure>
        </div>
      </section>

      <section id="engagement" className={`${container} scroll-mt-24 py-12 sm:py-16`}>
        <p className="text-sm font-semibold text-emerald-300">A complete engagement</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">From exposure to verified improvement.</h2>
        <p className="mt-4 max-w-3xl text-base leading-7">We agree the systems, methods, people, and deliverables before work begins. Your firm approves material changes. Your existing IT provider stays involved.</p>
        <ol className="mt-8 divide-y divide-white/15">
          {phases.map(({ title: label, text, output }, index) => <li key={label} className="grid gap-3 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_240px] sm:gap-6"><span className="text-2xl font-semibold text-emerald-300">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-xl font-semibold text-white">{label}</h3><p className="mt-3 max-w-2xl text-base leading-7">{text}</p></div><p className="text-sm leading-6 text-cyan-200 sm:pt-1"><span className="mb-1 block text-xs font-semibold uppercase text-white/55">You receive</span>{output}</p></li>)}
        </ol>
      </section>

      <section className="border-y border-white/15 bg-white/[0.035]">
        <div className={`${container} grid gap-10 py-12 md:grid-cols-2`}>
          <div><ShieldCheck className="h-7 w-7 text-emerald-300" aria-hidden="true" /><h2 className="mt-4 text-3xl font-semibold leading-tight text-white">Evidence you can act on.</h2><p className="mt-5 text-base leading-7">A list of scanner alerts leaves your team with another project. Our scope connects assessment to approved remediation and retesting, with unresolved issues made explicit.</p><p className="mt-4 text-base leading-7">Tools may include network discovery, authenticated vulnerability checks, web application testing, and cloud-account reviews, selected for your environment. A tool score alone is not a security conclusion.</p></div>
          <ul className="divide-y divide-white/15">{deliverables.map((item) => <li key={item} className="flex items-start gap-3 py-4 text-base leading-7"><Check className="mt-1 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </section>

      <section className={`${container} py-12`}>
        <h2 className="text-3xl font-semibold leading-tight text-white">Clear boundaries. No blanket assurances.</h2>
        <div className="mt-7 grid gap-8 md:grid-cols-3">
          <div><h3 className="text-lg font-semibold text-white">Permission before testing</h3><p className="mt-3 text-base leading-7">Written scope, controlled access, safe testing windows, and a stop procedure. Vendor infrastructure requires vendor authorization. Intrusive penetration testing is separately scoped with appropriately qualified personnel.</p></div>
          <div><h3 className="text-lg font-semibold text-white">Client data handled deliberately</h3><p className="mt-3 text-base leading-7">Agree minimum access, secure evidence storage, retention, and deletion. Do not send records through an initial inquiry or upload assessment evidence to an unapproved AI tool.</p></div>
          <div><h3 className="text-lg font-semibold text-white">A defined service</h3><p className="mt-3 text-base leading-7">Scope and pricing follow discovery. This is not a compliance certification, legal opinion, guarantee against breaches, or 24/7 incident-response service. We identify any additional expertise required before accepting the scope.</p></div>
        </div>
        <p className="mt-8 border-l-2 border-amber-200 pl-4 text-sm leading-7 text-white/75"><strong className="text-amber-100">Suspect an active breach?</strong> Contact your incident-response provider, breach counsel, and insurer promptly. This inquiry channel is not monitored for emergencies.</p>
      </section>

      <section className={`${container} border-t border-white/15 py-12`}>
        <h2 className="text-3xl font-semibold text-white">Before we start</h2>
        <div className="mt-7 max-w-4xl divide-y divide-white/15">{securityServiceFaqs.map(({ question, answer }) => <div key={question} className="py-5"><h3 className="text-xl font-semibold leading-7 text-white">{question}</h3><p className="mt-3 text-base leading-7">{answer}</p></div>)}</div>
      </section>

      <section className="border-y border-emerald-300/25 bg-[#0c1814]">
        <div className={`${container} py-12`}>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white">Start with a clear picture of your firm&apos;s exposure.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7">Tell us your team size, email and case-management platforms, existing IT support, and the concern that brought you here.</p>
          <a href={securityConsultation} className="mt-6 inline-flex max-w-full items-center gap-3 rounded bg-emerald-300 px-5 py-3 text-base font-semibold text-black hover:bg-emerald-200">Discuss a security assessment <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" /></a>
          <p className="mt-5 text-sm leading-7"><Link href={`/blog/${securityArticleSlug}`} className="text-cyan-200 underline underline-offset-4">Read the owner&apos;s guide to hiring a security specialist</Link></p>
          <p className="mt-3 text-sm leading-7"><Link href="/personal-injury/vendor-risk-governance" className="text-white/70 underline underline-offset-4">Explore AI governance and vendor-risk controls</Link></p>
        </div>
      </section>
    </div>
  );
}
