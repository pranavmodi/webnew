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
  { id: "why-now", label: "What changed, and what experts expect next" },
  { id: "hire-well", label: "What to hire a specialist to do" },
  { id: "assessment", label: "The assessment, tools, and fixes" },
  { id: "example", label: "What this looks like in a PI firm" },
  { id: "obligations", label: "Legal and professional obligations" },
  { id: "first-step", label: "The first conversation to have" },
  { id: "faq", label: "Common questions" },
];
const faqs = [
  { question: "Does a law firm need a cybersecurity specialist?", answer: "It needs access to competent security expertise. That may already exist within its IT provider. Ask whether the agreement includes vulnerability assessment, manual validation, remediation, and retesting. Buy help for gaps rather than duplicating work already being done well." },
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
        <p className="mt-5 text-lg leading-8 text-white/75">Critical software flaws and faster, AI-assisted attacks are changing the risk to law firms. Owners and partners need specialist help, verified fixes, and a clear understanding of their duties to clients.</p>
        <p className="mt-4 text-sm text-white/60">{post.author} &middot; {post.date} &middot; {post.readTime}</p>
        <p className="mt-6 border-l-2 border-emerald-300 pl-5 leading-7 text-white/80"><strong className="text-white">In brief:</strong> AI is accelerating the discovery and exploitation of software weaknesses. Ask your IT provider or security specialist now which current alerts affect the firm, what has been fixed, and how that was verified. Put a named owner and budget behind the remaining work.</p>
      </header>
      <BlogTableOfContents items={contents} contained={false} className="mt-7" />

      <article className="mt-9 space-y-10 text-lg leading-8 text-white/80">
        <section id="why-now" className={section}>
          <h2 className={heading}>The warning is already here</h2>
          <p>On October 21, 2026, the PHP project released emergency security fixes for two critical flaws that could let an attacker run code on affected servers without signing in. PHP is software behind many websites and applications. The <a className={link} href="https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/">PHP Foundation&apos;s account</a> describes how AI-assisted research helped establish the severity of a weakness whose roots were known years earlier. A flaw that had been difficult to exploit became an urgent operational problem.</p>
          <p>Separately, <a className={link} href="https://cloud.google.com/blog/topics/threat-intelligence/from-prompting-to-autonomy-the-evolution-of-adversarial-ai">Google Threat Intelligence Group reported in September</a> that attackers were moving from asking AI for advice to using agents to carry out parts of attacks. In one observed campaign, they went from a compromised cloud resource to an agent-enabled credential-harvesting operation in under six hours. That is evidence of changing attack speed, not a prediction.</p>
          <p>Neither report establishes that your firm has been breached. They do establish a reason to ask your providers, now, whether your website, client portal, remote-access tools, or underlying software are affected. Request the affected-system list, the update or mitigation applied, and verification that it is running. If an update cannot be applied, ask the specialist how exposure will be restricted until it can.</p>
          <h3 className="text-xl font-semibold text-white">What credible experts expect next</h3>
          <p><strong className="text-white">More weaknesses will surface.</strong> Ollie Whitehouse, the UK NCSC&apos;s chief technology officer, warned in May of a <a className={link} href="https://www.ncsc.gov.uk/blogs/prepare-for-vulnerability-patch-wave/">&ldquo;vulnerability patch wave&rdquo;</a>: AI exposing accumulated software weaknesses and forcing organizations to update more frequently. His advice is to reduce internet-facing exposure and prepare to patch at scale.</p>
          <p><strong className="text-white">The pace may increase sharply.</strong> In its <a className={link} href="https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/">October 21 disclosure</a>, OpenAI says it expects similar critical findings to increase sharply in the coming months. That is the developer&apos;s forecast, not a measured industry-wide rate. It also notes that AI helped defenders find these flaws before attackers, to its knowledge. The same technology can strengthen defense when someone acts on the findings.</p>
          <p><strong className="text-white">Agent capabilities may outrun safeguards.</strong> Anthropic CEO Dario Amodei argues in <a className={link} href="https://darioamodei.com/post/we-must-pace-the-frontier">his September essay</a> that increasingly capable agents could cause much greater cyber damage unless safety and security keep pace. His severe scenarios are warnings, not settled outcomes or a timetable firms should treat as certain.</p>
          <p>Our conclusion for firm leadership is straightforward: shorten the distance between a warning, a decision, and a verified fix. A hidden login address or an obscure application was never a substitute for access controls. Faster discovery makes relying on obscurity even less defensible.</p>
          <p>For a PI practice, the stakes include medical histories, settlement correspondence, evidence, and deadlines. Across legal practice, they include confidential client information and the ability to keep representing clients when a system fails. These are existing responsibilities under a rapidly changing threat.</p>
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
          <p>Use <a className={link} href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog">CISA&apos;s Known Exploited Vulnerabilities catalog</a> as one input. The <a className={link} href="https://www.cisecurity.org/controls/v8">CIS Critical Security Controls</a> provide a prioritized framework for safeguards. Select protections to match the firm&apos;s systems, exposure, and sensitive client information.</p>
          <h3 className="text-xl font-semibold text-white">4. Make approved changes and retest</h3>
          <p>The fixes might include updating software, removing stale accounts, enabling phishing-resistant multifactor authentication, restricting shared folders, reducing an integration&apos;s permissions, or moving an administrative interface behind controlled access. Plan backups, rollback, and staff communication before changes that could disrupt work.</p>
          <p>Then verify both sides: the weakness is addressed, and the legitimate workflow still works. Restore a representative file from backup. Check that the intake form still arrives. Confirm that an ordinary user cannot access an administrator&apos;s functions. Keep dated evidence and record any limits. The <a className={link} href="https://www.fbi.gov/investigate/cyber/ten-actions-to-improve-cyber-resiliency">FBI&apos;s resilience guidance</a> reinforces identity protection, patching, and recovery.</p>
        </section>

        <section id="example" className={section}>
          <h2 className={heading}>A former intake employee still has access</h2>
          <p>Consider a hypothetical PI firm. Its website scan looks clean. A review of its cloud accounts finds a former employee still able to sign in and a document integration able to read every matter.</p>
          <p>The specialist works with the firm to disable the stale account, revoke its sessions, examine relevant logs, and determine whether unauthorized activity needs investigation. They narrow the integration&apos;s access and test that staff can still process intake documents.</p>
          <p>The owner receives a short explanation: what was exposed, what changed, what the logs can and cannot establish, and who will review access when someone next leaves. A missing log is recorded as uncertainty, not converted into an assurance that nothing happened.</p>
          <p>That is the benefit of examining the whole workflow. A public website scan alone would not resolve either problem.</p>
        </section>

        <section id="obligations" className={section}>
          <h2 className={heading}>Legal obligations: expertise can be hired; oversight remains</h2>
          <p>The threat is evolving faster than many firms&apos; security routines. The underlying duties to clients already exist. For U.S. firms, separate professional conduct rules, privacy and breach laws, and contractual obligations. Applicable jurisdictions and the facts determine what is required; ABA model rules and opinions are guidance, not a universal statute.</p>
          <h3 className="text-xl font-semibold text-white">Protect client information and understand the risks</h3>
          <p><a className={link} href="https://www.americanbar.org/content/aba-cms-dotorg/en/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/comment_on_rule_1_6/">ABA Model Rule 1.6 and its commentary</a> address reasonable efforts to prevent unauthorized access or disclosure. Sensitivity, likelihood of disclosure, and the cost and practicality of safeguards matter. A breach does not automatically establish an ethical violation. Equally, an old security policy does not demonstrate that today&apos;s risks have been assessed.</p>
          <h3 className="text-xl font-semibold text-white">Supervise the people and providers handling the data</h3>
          <p><a className={link} href="https://www.calbar.ca.gov/Portals/0/documents/ethics/Opinions/Formal-Opinion-No-2020-203-Data-Breaches.pdf">California Opinion 2020-203</a> explains the need to understand technology risks, obtain expert help when necessary, and revisit protections as threats change. It also addresses management and supervision. In practice, assign responsibility for provider alerts, access reviews, remediation decisions, and escalation. Outsourcing the work still leaves the firm with decisions to oversee.</p>
          <h3 className="text-xl font-semibold text-white">Investigate incidents and assess notification duties promptly</h3>
          <p>If a breach is suspected, involve qualified incident responders, breach counsel, and your insurer promptly. Preserve evidence, contain the incident, and investigate its scope. <a className={link} href="https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-op-483.pdf">ABA Opinion 483</a> addresses monitoring, restoring operations, and informing current clients when confidential information is compromised or representation is significantly impaired. State law and contracts may create additional duties, including toward former clients and other affected people.</p>
          <p>There is no single notification deadline that covers every firm and incident. For example, <a className={link} href="https://www.oag.ca.gov/privacy/databreach/reporting">California&apos;s Attorney General explains</a> that qualifying breaches require notice to affected residents, with a sample notice submitted to the AG when more than 500 residents must be notified. That threshold concerns the AG submission; it does not exempt smaller breaches from individual notice. Have counsel determine the applicable triggers, recipients, and deadlines immediately.</p>
          <h3 className="text-xl font-semibold text-white">Determine whether HIPAA applies to the actual relationship</h3>
          <p>Possessing medical records does not automatically make a PI firm a HIPAA covered entity or business associate. That depends on its role and relationships, as <a className={link} href="https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html">HHS explains</a>. Other confidentiality and privacy duties may apply regardless. Ask counsel to assess the firm&apos;s position and any required agreements. This article is general education, not legal advice or a compliance determination.</p>
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
