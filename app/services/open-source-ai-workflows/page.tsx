import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Code2, HardDrive, Users } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

const title = "Open-Source AI Workflows for Personal Injury Firms";
const description = "Set up AI for PI intake, case management, and client communication with Possible Minds. Open-source tools, self-hosting, integration, and ongoing support.";
const path = "/services/open-source-ai-workflows";
const url = `${SITE_URL}${path}`;
const contact = "mailto:pranav@possiblemindshq.com?subject=AI%20workflow%20setup%20for%20our%20PI%20firm";

const workflows = [
  { title: "Intake & follow-up", outcome: "Get the right person involved sooner.", body: "Capture inquiries, organize case facts, prepare a callback brief, and track follow-up. Your team builds the relationship and decides which cases to accept.", href: "/personal-injury/intake-automation" },
  { title: "Case management", outcome: "Keep the next action visible.", body: "Turn incoming emails and documents into proposed case updates and tasks. Surface missing information, stalled handoffs, and work that needs staff attention.", href: "/blog/redesign-pi-workflows-around-ai" },
  { title: "Records & documents", outcome: "Spend less time finding the facts.", body: "Organize records, extract dates and providers, prepare chronologies with source references, and track outstanding requests. Staff verifies the facts before they inform legal work.", href: "/personal-injury/records-chasing" },
  { title: "Client communication", outcome: "Make updates part of the workflow.", body: "Triage status questions, draft responses from verified case information, and prompt proactive updates. Route sensitive questions to the responsible person.", href: "/personal-injury/client-communication" },
  { title: "Drafting & case preparation", outcome: "Start with an organized, reviewable draft.", body: "Adapt the firm's templates and instructions for correspondence, demand preparation, and document review. Attorneys retain responsibility for strategy, citations, and final work product.", href: "/blog/why-pi-firms-need-bespoke-ai-agents" },
  { title: "Settlement & closeout", outcome: "Keep the administrative finish moving.", body: "Organize lien and bill information, identify missing closeout documents, and prepare checklists. Negotiation decisions, calculations, payments, and disbursements stay under human approval.", href: "/personal-injury/lien-reduction" },
];

const steps = [
  ["Choose the workflow", "Map a real example with your team. Agree on the outcome, current delays, information needed, and decisions that belong to a person."],
  ["Choose the foundation", "Evaluate the software, license, hardware, model, and data access. Confirm what can run locally and what would require an external service."],
  ["Build and connect", "Install the selected platform, adapt instructions and templates, and connect supported systems. Give each action a clear owner and approval rule."],
  ["Test with your team", "Run representative examples and edge cases. Check output accuracy, permissions, failure recovery, and staff review time before live use."],
  ["Operate and improve", "Train staff, monitor failures, review corrections, and retest changes. Agree on ownership of updates, backups, support, and the next workflow."],
];

const advantages = [
  ["Build around the way your firm works", "Your case-selection rules, escalation paths, and document standards should carry into the software. We can adapt an open codebase when the available configuration is not enough, instead of waiting for a vendor to prioritize the change."],
  ["Keep control of sensitive information", "Choose where the application, documents, and models run. A properly configured local setup can reduce the number of outside services that receive client information. We trace the complete data flow, including connectors and telemetry."],
  ["Reduce dependence on per-seat pricing", "The selected open-source platform can avoid an additional software license charge for every staff member. That can make broader team access more economical. We compare total costs, including hardware, model usage, implementation, and maintenance."],
  ["Keep your workflow knowledge portable", "Your templates, instructions, evaluation examples, and operating rules can be maintained as documented files. The knowledge your team develops can carry forward when you change platforms or implementation partners, subject to applicable licenses."],
  ["Choose and change your AI models", "Use a supported local model or approved external provider based on the task. You have a path to change that choice as quality, cost, and data requirements evolve. Each change still needs integration checks and evaluation against your firm's work."],
  ["Inspect problems and control updates", "When a summary misses a fact or an agent routes work incorrectly, a technical team can inspect the instructions and code. With a self-hosted deployment, you can test a fix or an upstream release before introducing it to staff."],
];

const faqs = [
  { question: "Why choose this over a proprietary AI subscription?", answer: "It is a strong fit when your firm needs workflows beyond a vendor's configuration options, control over data processing, reusable operating knowledge, or flexibility to change models and providers. Open-source software gives a technical team access to adapt the code. The tradeoff is responsibility for implementation and maintenance. A proprietary subscription can be a better fit when its existing features meet your needs and you want the vendor to operate the system." },
  { question: "Is the service free?", answer: "The selected open-source software may have no license fee. Our setup, customization, integrations, training, and support are paid services. Hardware, hosting, model usage, and third-party services can add costs. We scope those together before implementation." },
  { question: "Will all our data stay inside the firm?", answer: "That depends on the complete setup. A self-hosted application can still send data to a cloud model, connector, OCR service, or telemetry provider. For a local-only requirement, we assess and configure each of those paths, choose suitable local models, and test outbound connections." },
  { question: "Can we keep our current case-management software?", answer: "Usually that is the starting point. We assess available APIs, exports, access permissions, and vendor terms before promising an integration. MikeOSS and LQ.AI are AI foundations, not automatic replacements for the firm's case-management system." },
  { question: "Which platform should we use?", answer: "We choose after reviewing the workflow, documents, users, deployment requirements, and maintenance budget. MikeOSS and LQ.AI are options, not requirements. Features and integration readiness vary by release, so we validate the selected version against your use case." },
  { question: "Can a small firm manage a self-hosted system?", answer: "Yes, with a clear operating arrangement. The firm needs an owner for access, backups, updates, and incidents. We can scope ongoing technical support or document a handoff to your IT provider. Local models also need suitable hardware and performance testing." },
  { question: "Does open source make the system compliant?", answer: "Open source gives you visibility into the software and more control over deployment. Compliance still depends on the firm's obligations, contracts, access controls, data flows, and operating practices. We help implement the agreed controls and document how the system works." },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function OpenSourceAIWorkflowsPage() {
  return (
    <div className="bg-black pb-20">
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "Service", name: title, description, url, serviceType: "Open-source legal AI implementation and workflow integration", provider: { "@id": `${SITE_URL}/#organization` }, audience: { "@type": "Audience", audienceType: "Personal injury law firm owners and operations teams" } },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: title, item: url }] },
      ]} />

      <header className="border-b border-white/15">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold text-primary">Possible Minds / AI workflow implementation</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">Open-source AI workflows for personal injury firms.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground/80">We help your firm set up AI for intake, case management, and the work in between. Built around your process, using open-source tools and infrastructure you control.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={contact} className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-black hover:bg-primary/85">Discuss your first workflow <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href="#platforms" className="inline-flex items-center gap-2 px-1 py-3 text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-primary">Explore MikeOSS &amp; LQ.AI <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
          <div className="mt-10 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-3">
            {[{ icon: Code2, title: "Open-source first", text: "Inspect and adapt the software." }, { icon: HardDrive, title: "Self-hosting support", text: "Choose where the system runs." }, { icon: Users, title: "Hands-on implementation", text: "Setup, integration, training, support." }].map(({ icon: Icon, title: label, text }) => (
              <div key={label} className="flex gap-3"><Icon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><div><p className="font-semibold text-white">{label}</p><p className="mt-1 text-sm leading-6 text-foreground/60">{text}</p></div></div>
            ))}
          </div>
        </div>
      </header>

      <section className="bg-[#101718]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold text-[#8dd9ea]">The work we help you improve</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">One useful workflow. Then the next.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-foreground/70">Start where your team loses the most time or drops a handoff. These are workflows we can scope and build around your systems, with human review where it matters.</p>
          <div className="mt-9 grid gap-x-10 md:grid-cols-2">
            {workflows.map((workflow, index) => (
              <div key={workflow.title} className="border-t border-white/15 py-7">
                <p className="text-sm font-semibold text-[#8dd9ea]">0{index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{workflow.title}</h3>
                <p className="mt-3 font-medium text-white/90">{workflow.outcome}</p>
                <p className="mt-2 text-sm leading-7 text-foreground/70">{workflow.body}</p>
                <Link href={workflow.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8dd9ea] hover:underline">Explore this workflow <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary">Why choose open source over a closed platform?</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">More control over the system your firm depends on.</h2>
          <p className="mt-5 leading-7 text-foreground/70">A subscription gives you access to a vendor&apos;s product. An open-source deployment gives your technical team the ability to inspect, adapt, and operate the software. For a PI firm, that freedom has practical advantages.</p>
        </div>
        <div className="mt-9 grid gap-x-10 md:grid-cols-2">
          {advantages.map(([heading, body], index) => (
            <div key={heading} className="border-t border-white/15 py-7">
              <p className="text-sm font-semibold text-primary">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold leading-7 text-white">{heading}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-7 border-y border-primary/25 py-7 md:grid-cols-2">
          <div><h3 className="text-lg font-semibold text-white">A strong fit when control matters</h3><p className="mt-3 text-sm leading-7 text-foreground/70">You have a recurring workflow that standard tools handle poorly, specific data requirements, or a growing team that needs shared AI access. You want a system your firm can keep adapting, with a clear maintenance owner.</p></div>
          <div><h3 className="text-lg font-semibold text-white">The tradeoff: someone must operate it</h3><p className="mt-3 text-sm leading-7 text-foreground/70">Self-hosting brings responsibility for updates, backups, security, and support. A proprietary service may be simpler when its standard workflow already fits. We help you compare the full operating cost and take on the implementation and support work agreed in scope.</p></div>
        </div>
      </section>

      <section id="platforms" className="scroll-mt-24 border-y border-white/15 bg-[#0c1010]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold text-primary">Platforms we can help you evaluate and deploy</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">MikeOSS &amp; LQ.AI</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="border-t border-primary/40 pt-6">
              <h3 className="text-2xl font-semibold text-white">MikeOSS</h3>
              <p className="mt-4 leading-7 text-foreground/75">A legal AI workspace for document review, drafting, research, and reusable review workflows. Its documentation includes self-hosting and local model support through Ollama.</p>
              <p className="mt-4 text-sm leading-7 text-foreground/65"><strong className="text-white">Our implementation focus:</strong> install the platform, configure access and model connections, adapt document workflows, and test it with your team&apos;s examples.</p>
              <a href="https://github.com/Open-Legal-Products/mike" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">MikeOSS documentation <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <p className="mt-3 text-xs leading-5 text-foreground/50">Project license: AGPL-3.0. Deployment and modification obligations require review.</p>
            </div>
            <div className="border-t border-[#8dd9ea]/40 pt-6">
              <h3 className="text-2xl font-semibold text-white">LQ.AI</h3>
              <p className="mt-4 leading-7 text-foreground/75">A self-hosted legal AI platform with matter-based projects, reusable skills, and a choice of local or external models. Its open skills can be adapted to your firm&apos;s instructions.</p>
              <p className="mt-4 text-sm leading-7 text-foreground/65"><strong className="text-white">Our implementation focus:</strong> configure the deployment and data routes, develop PI workflow skills, and validate permissions, outputs, and integrations for the selected release.</p>
              <a href="https://github.com/LegalQuants/lq-ai" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8dd9ea] hover:underline">LQ.AI documentation <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <p className="mt-3 text-xs leading-5 text-foreground/50">Core license: Apache-2.0. Bundled components have additional license terms.</p>
            </div>
          </div>
          <p className="mt-8 max-w-4xl border-t border-white/15 pt-5 text-sm leading-7 text-foreground/60">These are foundations for a tailored setup. PI intake, phone services, case-system connections, and automation may require additional development. We verify the chosen release and dependencies before committing to scope. Possible Minds provides independent implementation services and is not claiming endorsement or affiliation with either project.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold text-white">Choose where your AI runs.</h2>
        <p className="mt-4 max-w-3xl leading-7 text-foreground/70">Self-hosting the app and running the model locally are separate decisions. We start with your data requirements and test the quality, speed, and cost of the resulting setup.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[["Local application + local model", "The application and model run on hardware you control. We assess document processing, search, telemetry, and connectors as well, so a local-only requirement covers the whole workflow."], ["Self-hosted app + approved model API", "Your firm controls the application and storage, while selected requests go to an external model. This is a hybrid setup with external data processing, even if the app is on your server."], ["Firm-controlled private hosting", "The application runs in infrastructure your firm selects and controls. This can still be cloud infrastructure. We document the providers, access, data locations, and ongoing responsibilities."]].map(([heading, body]) => <div key={heading} className="border-t border-white/20 pt-5"><h3 className="text-xl font-semibold leading-7 text-white">{heading}</h3><p className="mt-3 text-sm leading-7 text-foreground/65">{body}</p></div>)}
        </div>
      </section>

      <section className="border-y border-white/15 bg-[#101718]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-semibold text-white">From setup to daily use.</h2>
          <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
            {steps.map(([heading, body], i) => <div key={heading} className="grid gap-3 py-6 sm:grid-cols-[3rem_14rem_1fr] sm:gap-6"><span className="text-xl font-semibold text-[#8dd9ea]">0{i + 1}</span><h3 className="text-lg font-semibold text-white">{heading}</h3><p className="text-sm leading-7 text-foreground/70">{body}</p></div>)}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2"><div><h3 className="font-semibold text-white">What you receive</h3><p className="mt-2 text-sm leading-7 text-foreground/70">A working deployment within the agreed scope, workflow instructions, tested integrations, evaluation results, staff training, and an operating guide with backup and recovery steps.</p></div><div><h3 className="font-semibold text-white">What we need from you</h3><p className="mt-2 text-sm leading-7 text-foreground/70">One workflow owner, representative examples, your templates and rules, approved system access, and time from staff to test the result.</p></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-3xl font-semibold text-white">Before you decide</h2>
        <div className="mt-7 divide-y divide-white/15 border-y border-white/15">{faqs.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="cursor-pointer text-lg font-semibold text-white marker:text-primary">{question}</summary><p className="mt-3 max-w-4xl text-sm leading-7 text-foreground/70">{answer}</p></details>)}</div>
      </section>

      <section className="border-y border-primary/25 bg-[#07120d]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white">Bring us one workflow your team wants to improve.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-foreground/75">Tell us what slows it down, which systems you use, and whether local hosting is a requirement. We&apos;ll identify a practical starting point and the work needed to get it running.</p>
          <a href={contact} className="mt-7 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-black hover:bg-primary/85">Discuss your AI setup <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          <p className="mt-4 flex items-center gap-2 text-sm text-foreground/60"><Check className="h-4 w-4 text-primary" aria-hidden="true" /> Start with one workflow. Expand when it works.</p>
        </div>
      </section>
    </div>
  );
}
