import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { createBlogMetadata, createBlogStructuredData } from "@/lib/blog-seo";
import { SITE_URL } from "@/lib/constants";
import { securityArticleSlug as slug, securityServicePath } from "@/lib/security-service";

const post = BLOG_POSTS_BY_SLUG[slug];
const link = "text-emerald-300 underline decoration-emerald-300/40 underline-offset-4 hover:decoration-emerald-300";
const section = "scroll-mt-28 space-y-5 border-t border-white/15 pt-8";
const heading = "text-2xl font-semibold leading-tight text-white sm:text-3xl";
const contents = [
  { id: "why-now", label: "Why small firms should pay attention" },
  { id: "hire-well", label: "What to hire a specialist to do" },
  { id: "assessment", label: "The assessment, tools, and fixes" },
  { id: "example", label: "What this looks like in a PI firm" },
  { id: "obligations", label: "Your responsibilities to clients" },
  { id: "first-step", label: "The first conversation to have" },
  { id: "faq", label: "Common questions" },
];
const faqs = [
  { question: "Does a small law firm need a cybersecurity specialist?", answer: "It needs access to competent security expertise. That may already exist within its IT provider. Ask whether the agreement includes vulnerability assessment, manual validation, remediation, and retesting. Buy help for gaps rather than duplicating work already being done well." },
  { question: "Is a vulnerability scan the same as a penetration test?", answer: "No. A vulnerability scan flags potential weaknesses. A penetration test uses explicitly authorized attack techniques to investigate what could actually be exploited. Both have limits, and neither replaces configuration review, remediation, or ongoing monitoring." },
  { question: "Does a clean scan prove that client data is safe?", answer: "No. A scan covers particular systems, checks, and conditions at a point in time. It may miss permission problems, historical compromise, unsupported integrations, or systems outside its scope. Ask what was tested, what was not tested, and what evidence is missing." },
  { question: "Does possessing medical records make a PI firm subject to HIPAA?", answer: "Not automatically. HIPAA applicability depends on whether the firm is a covered entity or business associate in the relevant relationship. Confidentiality, other privacy laws, contracts, and professional duties may still apply. Have qualified counsel determine the obligations for the firm's actual role." },
];

export const metadata: Metadata = {
  ...createBlogMetadata(slug),
  title: "Law Firm Cybersecurity in the AI Era: An Owner's Guide",
  keywords: ["law firm cybersecurity", "personal injury firm security assessment", "AI security", "vulnerability remediation"],
  openGraph: {
    ...createBlogMetadata(slug).openGraph,
    images: [{ url: `${SITE_URL}/blog/law-docs.png`, width: 1024, height: 1024, alt: "Illustration of legal files and a laptop" }],
  },
  twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [`${SITE_URL}/blog/law-docs.png`] },
};

export default function LawFirmCybersecurityArticle() {
  return (
    <div className="-mt-4 bg-black">
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
      <JsonLd data={createBlogStructuredData(slug).map((item) => item["@type"] === "BlogPosting" ? { ...item, dateModified: "2026-10-23" } : item)} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} />
      <header>
        <Link href="/blog" className="text-sm text-emerald-300 hover:underline">Blog / Security &amp; Governance</Link>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-white/75">A practical guide for personal injury firm owners: hire someone who can find the exposure, fix it, and show you the evidence.</p>
        <p className="mt-4 text-sm text-white/60">{post.author} &middot; {post.date} &middot; {post.readTime}</p>
        <p className="mt-6 border-l-2 border-emerald-300 pl-5 leading-7 text-white/80"><strong className="text-white">In brief:</strong> Your firm does not need to become a cybersecurity company. It does need a named specialist, a defined assessment, and a funded plan to address the findings. Ask for verified fixes and a record of what remains unresolved.</p>
      </header>
      <BlogTableOfContents items={contents} contained={false} className="mt-7" />

      <article className="mt-9 space-y-10 text-lg leading-8 text-white/80">
        <section id="why-now" className={section}>
          <h2 className={heading}>Your firm can be found without being famous</h2>
          <p>A former employee still has email access. An old intake form sends records to a forgotten inbox. A remote-access appliance missed an update. None of these requires a criminal to know your name before looking for a way in.</p>
          <p>AI adds urgency. The <a className={link} href="https://www.ncsc.govt.nz/protect-your-organisation/frontier-ai-managing-the-increasing-risks-from-vulnerabilities/">NCSC warns</a> that AI is shortening the time between a vulnerability becoming public and attackers exploiting it. Firms have less time to identify affected systems and respond.</p>
          <p>For a PI practice, the stakes include medical histories, settlement correspondence, evidence, and the ability to meet deadlines. The same concern applies to other law firms: confidential information and uninterrupted representation are part of the service clients rely on.</p>
          <p>Being small is no dependable defense. Neither is an unadvertised admin page. The practical response is to make your protections visible to you and your advisers, then test whether they work.</p>
          <figure className="grid items-center gap-5 border-y border-white/15 py-5 sm:grid-cols-[160px_minmax(0,1fr)]">
            <Image src="/blog/law-docs.png" alt="Illustration of legal documents beside a laptop" width={1024} height={1024} sizes="160px" className="h-40 w-40 rounded object-cover" />
            <figcaption className="text-base leading-7 text-white/65">A case file now lives across inboxes, document stores, intake systems, backups, and integrations. A useful assessment follows the information across those locations. Illustration.</figcaption>
          </figure>
        </section>

        <section id="hire-well" className={section}>
          <h2 className={heading}>Hire for the work after the scan</h2>
          <p>Start with your existing IT provider. Ask whether your contract includes security assessment, investigation of findings, implementation of fixes, and retesting. General IT support may cover some of this. Find out where responsibility ends.</p>
          <p>A good specialist should explain their experience with your actual environment, show an anonymized sample report, and describe how they protect assessment data. Agree who does the work, who approves changes, and who checks the results. Certifications can support that discussion; they do not replace it.</p>
          <p>The engagement should produce an inventory, a prioritized findings register, an agreed remediation plan, and a retest record. Each important finding needs an owner and a status: fixed and verified, mitigated, accepted by the firm, or still open.</p>
          <p><a className={link} href="https://csrc.nist.gov/pubs/sp/800/115/final">NIST&apos;s testing guide</a> provides a foundation for planning assessments, examining results, and developing mitigations. Its value for an owner is the discipline: define the work and its limits before testing begins.</p>
        </section>

        <section id="assessment" className={section}>
          <h2 className={heading}>What a specialist should actually do</h2>
          <h3 className="text-xl font-semibold text-white">1. Agree the boundaries and follow the information</h3>
          <p>List the firm&apos;s email, devices, website, case-management system, document storage, backups, and AI connections. Identify what holds client information and what is reachable from the internet. Agree written authorization, testing windows, stop conditions, emergency contacts, and handling of any evidence collected.</p>
          <p>Your permission to review your account does not authorize attacks on a software vendor&apos;s infrastructure. Prefer synthetic or redacted examples, with temporary assessment access removed when the work ends.</p>
          <h3 className="text-xl font-semibold text-white">2. Use the right tools, then investigate the findings</h3>
          <p>Tools help cover ground consistently. The specialist still has to choose safe settings, confirm access worked, and distinguish real exposure from a false alarm. These are examples, not a required shopping list:</p>
          <div className="overflow-x-auto rounded border border-white/20">
            <table className="w-full min-w-[580px] text-left text-base leading-7">
              <caption className="sr-only">Examples of security assessment tools and their limits</caption>
              <thead className="bg-white/[0.06] text-white"><tr><th scope="col" className="p-4">Question</th><th scope="col" className="p-4">Example tool</th><th scope="col" className="p-4">What still needs judgment</th></tr></thead>
              <tbody className="divide-y divide-white/15">
                <tr><td className="p-4 align-top">What services are exposed?</td><td className="p-4 align-top"><a className={link} href="https://nmap.org/book/intro.html">Nmap</a></td><td className="p-4">An open service may be necessary. Decide who should be able to reach it.</td></tr>
                <tr><td className="p-4 align-top">Are patches and settings missing?</td><td className="p-4 align-top"><a className={link} href="https://docs.tenable.com/nessus/compliance-checks-reference/Content/CredentialedScanningandPrivilegedAccountUse.htm">Tenable Nessus</a></td><td className="p-4">Authenticated checks need carefully controlled privileges. Failed authentication can leave blind spots.</td></tr>
                <tr><td className="p-4 align-top">Can a web application expose data?</td><td className="p-4 align-top"><a className={link} href="https://www.zaproxy.org/getting-started/">ZAP</a></td><td className="p-4">Active testing can disrupt systems. Use explicit permission, safe scope, and manual verification.</td></tr>
                <tr><td className="p-4 align-top">Are email and identity protections configured?</td><td className="p-4 align-top"><a className={link} href="https://learn.microsoft.com/microsoft-365/security/defender/microsoft-secure-score">Microsoft Secure Score</a> and tenant logs</td><td className="p-4">Check actual access, forwarding, and integrations. A high score is not a guarantee against a breach.</td></tr>
              </tbody>
            </table>
          </div>
          <p>A cloud-hosted custom application may also need infrastructure and code review. An AI workflow needs a review of the information it receives, its credentials, and the actions it can take. An external website scan cannot answer those questions.</p>
          <h3 className="text-xl font-semibold text-white">3. Prioritize the path to client harm</h3>
          <p>A long list of red findings is difficult to act on. Ask which weaknesses are reachable, which are known to be exploited, and which could expose records or interrupt casework. A public admin endpoint with no authentication should not wait behind a cosmetic website warning.</p>
          <p>Use <a className={link} href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog">CISA&apos;s Known Exploited Vulnerabilities catalog</a> as one input. The <a className={link} href="https://www.cisecurity.org/insights/white-papers/implementation-guide-for-small-and-medium-sized-enterprises-cis-controls-ig1">CIS small-business guide</a> provides a useful baseline of essential controls. Sensitive client information may warrant protections beyond that baseline.</p>
          <h3 className="text-xl font-semibold text-white">4. Make approved changes and retest</h3>
          <p>The fixes might include updating software, removing stale accounts, enabling phishing-resistant multifactor authentication, restricting shared folders, reducing an integration&apos;s permissions, or moving an administrative interface behind controlled access. Plan backups, rollback, and staff communication before changes that could disrupt work.</p>
          <p>Then verify both sides: the weakness is addressed, and the legitimate workflow still works. Restore a representative file from backup. Check that the intake form still arrives. Confirm that an ordinary user cannot access an administrator&apos;s functions. Keep dated evidence and record any limits. The <a className={link} href="https://www.fbi.gov/investigate/cyber/ten-actions-to-improve-cyber-resiliency">FBI&apos;s resilience guidance</a> reinforces identity protection, patching, and recovery.</p>
        </section>

        <section id="example" className={section}>
          <h2 className={heading}>A former intake employee still has access</h2>
          <p>Consider a hypothetical six-person PI firm. Its website scan looks clean. A review of its cloud accounts finds a former employee still able to sign in and a document integration able to read every matter.</p>
          <p>The specialist works with the firm to disable the stale account, revoke its sessions, examine relevant logs, and determine whether unauthorized activity needs investigation. They narrow the integration&apos;s access and test that staff can still process intake documents.</p>
          <p>The owner receives a short explanation: what was exposed, what changed, what the logs can and cannot establish, and who will review access when someone next leaves. A missing log is recorded as uncertainty, not converted into an assurance that nothing happened.</p>
          <p>That is the benefit of examining the whole workflow. A public website scan alone would not resolve either problem.</p>
        </section>

        <section id="obligations" className={section}>
          <h2 className={heading}>You can delegate the technical work. Keep oversight.</h2>
          <p>For U.S. firms, the professional standard generally centers on reasonable safeguards and competent handling of technology, rather than an impossible promise of perfect security. Applicable state rules govern. <a className={link} href="https://www.calbar.ca.gov/Portals/0/documents/ethics/Opinions/Formal-Opinion-No-2020-203-Data-Breaches.pdf">California&apos;s guidance</a> specifically addresses obtaining expert help when necessary and updating protections as risks change.</p>
          <p>If a breach is suspected, the job changes. Involve qualified incident responders, breach counsel, and your insurer promptly. Preserve evidence, contain the incident, investigate client impact, and assess notification duties. <a className={link} href="https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-op-483.pdf">ABA Opinion 483</a> discusses investigation, restoration, and client communication. Statutory, contractual, and former-client duties need separate analysis.</p>
          <p>PI owners should also avoid assuming that possessing medical records automatically makes a firm subject to HIPAA. Applicability depends on its role and relationships; other confidentiality obligations remain. See <a className={link} href="https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html">HHS&apos;s explanation</a>. This article is general education, not legal advice or a compliance determination.</p>
        </section>

        <section id="first-step" className={section}>
          <h2 className={heading}>Ask for a scoped assessment and a route to fixes</h2>
          <p>Send your provider or prospective specialist this brief:</p>
          <blockquote className="border-l-2 border-emerald-300 pl-5 text-white">Review our client-data systems and internet exposure. Explain the testing boundaries, identify and validate important weaknesses, propose fixes with named owners, and retest the changes. Tell us what you cannot verify. Include a recovery check and a handover for ongoing maintenance.</blockquote>
          <p>Agree the cost, deliverables, exclusions, and follow-up before work begins. Ask how they would handle a suspected breach discovered during the review. Schedule another review when a significant system, vendor, or integration changes.</p>
          <p>Possible Minds offers <Link className={link} href={securityServicePath}>security assessment and remediation for law firms</Link>, scoped around the systems your team actually uses. We help define the exposure, implement agreed improvements, and document verification alongside your IT provider. The engagement confirms the technical scope and any additional specialist requirements before testing.</p>
          <Link href={securityServicePath} className="inline-flex items-center gap-2 text-base font-semibold text-emerald-300 hover:underline">Explore the security engagement <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </section>

        <section id="faq" className={section}>
          <h2 className={heading}>Common questions</h2>
          {faqs.map(({ question, answer }) => <div key={question} className="space-y-2"><h3 className="text-xl font-semibold text-white">{question}</h3><p>{answer}</p></div>)}
        </section>
        <aside className="border-t border-white/15 pt-6 text-base leading-7 text-white/65">
          <p>Also read: <Link href="/blog/ai-governance-roi-small-pi-firms" className={link}>information governance before AI</Link> and <Link href="/personal-injury/vendor-risk-governance" className={link}>AI governance and vendor-risk controls</Link>.</p>
          <p className="mt-3">Sources checked October 23, 2026. Tool names describe examples of professional methods, not vendor endorsements or claims that a particular license is included. No assessment can establish that every vulnerability has been found.</p>
        </aside>
      </article>
    </div>
    </div>
  );
}
