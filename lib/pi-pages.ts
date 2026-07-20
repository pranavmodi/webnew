export type PiProblemPage = {
  slug: string;
  navLabel: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  buyerProblem: string;
  bestFit: string;
  outcomes: string[];
  workflow: string[];
  proof: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const piProblemPages: PiProblemPage[] = [
  {
    slug: "intake-automation",
    navLabel: "Intake & Conversion",
    title: "AI-Assisted Rapid Intake Response for PI Firms",
    shortTitle: "Rapid Intake Response",
    metaDescription:
      "AI intake automation for PI firms that identifies priority matters, briefs the right human, accelerates attorney response, and improves conversion to signed cases.",
    eyebrow: "Rapid Intake Response",
    intro:
      "A prospective client has just been injured. They are stressed, uncertain, and may be contacting more than one firm. Possible Minds organizes the inquiry, identifies when human presence matters, and gets the right intake specialist or lawyer into the conversation while intent is still high.",
    buyerProblem:
      "The firm pays to create demand, but delays, manual data entry, weak follow-up, and unsigned retainers allow qualified prospects to sign somewhere else.",
    bestFit:
      "Best for PI firms with meaningful lead volume, multiple intake channels, and an existing CRM or case-management system that needs a faster, more reliable conversion workflow around it.",
    outcomes: [
      "A review-ready intake package in minutes instead of hours",
      "More complete incident, injury, treatment, and insurance facts",
      "Faster escalation of urgent, catastrophic, or high-value matters",
      "Clear measurement from lead source through signed and accepted case",
    ],
    workflow: [
      "Receive the inquiry from a call, form, chat, email, referral, or intake system.",
      "Read the submission and supporting records, then structure the relevant facts with source evidence.",
      "Apply firm-approved qualification, routing, and escalation rules.",
      "Brief the right intake specialist, closer, or lawyer and trigger the firm's human-response plan.",
      "Send, follow up, and synchronize the final state across the firm's existing systems.",
    ],
    proof: [
      "Designed around the full path from first contact to signed and accepted case.",
      "Human approval remains the default for client-facing and legally meaningful actions.",
      "Vendor-neutral connectors preserve the firm's existing systems of record.",
    ],
    faqs: [
      {
        question: "Will a chatbot handle our most valuable cases?",
        answer:
          "No. The system is designed to recognize urgency, severity, competitive-shopping signals, and other firm-defined triggers. It organizes the facts and alerts the right person so a lawyer or intake closer can take over while the prospect is still engaged.",
      },
      {
        question: "Does the system automatically accept a case?",
        answer:
          "No. It prepares the facts, proposed actions, message, and agreement for review. Your team keeps control of conflict checks, legal judgment, case acceptance, and the exact client-facing package.",
      },
      {
        question: "Is the first response fully automated?",
        answer:
          "The workflow is configurable. A firm can use immediate acknowledgment, a review-ready draft, or approved low-risk sends. Retainers and consequential communications remain subject to the firm's approval policy.",
      },
      {
        question: "Does this replace Lead Docket, Filevine, or Clio?",
        answer:
          "No. Possible Minds coordinates the work between intake, documents, communications, e-signature, and case management while keeping the firm's chosen systems authoritative.",
      },
      {
        question: "Does it only work when a prospect sends a police report?",
        answer:
          "No. A police report is one useful trigger, but the workflow can begin with a website form, email, referral, webhook, intake CRM event, missed call, or uploaded document.",
      },
      {
        question: "What happens when a matter looks urgent or high value?",
        answer:
          "The system applies explicit red flags and escalation rules, alerts the right intake specialist or attorney, and provides a structured briefing so a human can take over without making the prospect repeat the story.",
      },
      {
        question: "Can the system follow up on an unsigned retainer?",
        answer:
          "Yes. It can track whether the agreement was delivered, opened, or signed and create approved reminders or staff tasks until the lead signs, declines, opts out, or requires human intervention.",
      },
      {
        question: "How do we know whether faster response is producing revenue?",
        answer:
          "The measurement layer connects response time, contact, qualification, retainer delivery, signature, final acceptance, and lead source. That lets the firm see where wanted cases are leaking and whether the workflow improves conversion.",
      },
    ],
  },
  {
    slug: "after-hours-intake",
    navLabel: "After-Hours Intake",
    title: "After-Hours Intake Coverage for PI Firms",
    shortTitle: "After-Hours Intake",
    metaDescription:
      "AI-assisted after-hours intake coverage for PI firms that acknowledges every inquiry, captures essential facts, and escalates priority matters to a human.",
    eyebrow: "Missed Calls & Web Leads",
    intro:
      "The most expensive intake gap is often the unstaffed moment: nights, weekends, lunch breaks, overflow, and voicemail. Every inquiry gets an immediate next step, while serious, urgent, or competitive matters trigger the firm's human escalation plan.",
    buyerProblem:
      "Good prospects reach the firm outside staffed hours or during call spikes, then keep searching and sign somewhere else.",
    bestFit:
      "Best for PI firms with paid lead spend, after-hours form fills, missed-call logs, or intake teams that cannot reliably cover every channel.",
    outcomes: [
      "Less lead leakage from nights, weekends, and overflow",
      "Immediate acknowledgment and fact capture when staff are unavailable",
      "Human escalation for urgent, serious, or competitive matters",
      "Cleaner reporting on when and where intake leaks happen",
    ],
    workflow: [
      "Detect the unstaffed inquiry or missed call.",
      "Acknowledge the prospect and capture the essential facts.",
      "Capture incident, injury, treatment, insurance, and contact details.",
      "Trigger the on-call lawyer, intake closer, or live-transfer path when firm rules match.",
      "Give the responding person a concise briefing before the human conversation.",
    ],
    proof: [
      "The outbound voice solution page already focuses on missed-call and after-hours response.",
      "The PI case study documents a transparent, sub-90-second automated response target and human escalation workflow.",
      "The consult page positions missed leads as a diagnostic category.",
    ],
    faqs: [
      {
        question: "Is this a replacement for human intake staff?",
        answer:
          "No. It covers the delay around unstaffed or overloaded moments, then brings in the right person. The product is designed to make human response faster, not make valuable prospects negotiate with a bot.",
      },
      {
        question: "Can it respond to web forms, missed calls, and chat inquiries at night?",
        answer:
          "Yes. The workflow can be designed around the channels where leads go cold: web forms, missed calls, chat, SMS, email, and overflow from paid campaigns.",
      },
      {
        question: "What if the caller wants a human immediately?",
        answer:
          "The system should make that path clear. Depending on your rules, it can transfer to a live line, collect the basics first, or mark the matter for immediate human callback.",
      },
      {
        question: "What should happen with urgent cases?",
        answer:
          "Urgent, serious, or competitive matters should follow explicit escalation rules: alert the on-call person, route to a live line, or trigger an immediate lawyer or closer callback with the facts already organized.",
      },
      {
        question: "Can after-hours intake work in Spanish or other languages?",
        answer:
          "Yes, when language coverage is part of the scope. The important part is routing language preference cleanly so the next human touch is handled by the right person.",
      },
      {
        question: "How does this prevent voicemail leakage?",
        answer:
          "It gives the prospect a response and a next step while intent is still high. Even when the lead needs human review, the firm receives a structured summary instead of only a voicemail notification.",
      },
      {
        question: "How do we measure whether after-hours intake is working?",
        answer:
          "Track response time, completed qualification rate, callback success, signed-case rate, channel, campaign source, and which time windows produce the most leakage.",
      },
    ],
  },
  {
    slug: "records-chasing",
    navLabel: "Case Development",
    title: "AI Records-Chasing Automation for PI Firms",
    shortTitle: "Records Chasing",
    metaDescription:
      "AI records-chasing automation for PI firms that helps follow up on medical records, bills, provider requests, missing documents, and case development bottlenecks.",
    eyebrow: "Case Development",
    intro:
      "Signed cases lose momentum when records, bills, reports, images, wage proof, and client documents sit in disconnected follow-up loops. We build systems that keep the file moving without making staff chase every item manually.",
    buyerProblem:
      "Cases stall after sign-up because evidence, records, bills, and provider responses arrive slowly or inconsistently.",
    bestFit:
      "Best for firms where paralegals spend too much time checking inboxes, sending reminders, and rebuilding the same case-status picture.",
    outcomes: [
      "Fewer stalled files from missing records or bills",
      "Cleaner provider and document follow-up",
      "Better case summaries before demand preparation",
      "Less staff time spent on repetitive status checks",
    ],
    workflow: [
      "Identify what the file needs next.",
      "Track records, bills, reports, images, and authorizations by provider or source.",
      "Draft reminders and follow-ups in the firm's tone.",
      "Extract key facts when documents arrive.",
      "Surface missing or inconsistent items for human review.",
    ],
    proof: [
      "The healthcare case study proves high-volume records, billing, and lien-adjacent inbox automation.",
      "The law-firm case study describes police reports, medical records, and provider follow-up.",
      "The email automation solution already handles document-heavy operational loops.",
    ],
    faqs: [
      {
        question: "Can this work with our existing case management system?",
        answer:
          "Usually, yes. The first step is mapping where records status lives today and where the system should write updates.",
      },
      {
        question: "Does it summarize medical records automatically?",
        answer:
          "It can extract and summarize structured facts, but medical or legal conclusions should remain reviewable by the team.",
      },
      {
        question: "Can AI request medical records and bills from providers?",
        answer:
          "It can prepare and send approved follow-ups when the authorization, provider contact, and request rules are defined. Exceptions should route to staff instead of being guessed.",
      },
      {
        question: "Can it track missing bills, reports, images, and authorizations?",
        answer:
          "Yes. The system can maintain a structured checklist by provider or source so staff can see what is requested, received, missing, overdue, or ready for review.",
      },
      {
        question: "Can it read PDFs and email attachments?",
        answer:
          "Yes, for extraction and routing. Sensitive conclusions, unusual documents, or low-confidence reads should be surfaced for human review before they drive case decisions.",
      },
      {
        question: "Does this remove paralegal review?",
        answer:
          "No. It removes repetitive checking and reminder work. Paralegals still review important records, exceptions, inconsistencies, and judgment-heavy file movement.",
      },
      {
        question: "Can it handle provider-specific request templates?",
        answer:
          "Yes. Provider rules, preferred forms, portals, fax details, and follow-up timing can be captured as workflow knowledge instead of staying in one staff member's head.",
      },
    ],
  },
  {
    slug: "client-communication",
    navLabel: "Client Communication",
    title: "AI Client Communication for PI Law Firms",
    shortTitle: "Client Communication",
    metaDescription:
      "AI client communication systems for PI law firms that reduce repetitive status calls, improve follow-up, and keep clients informed without giving legal advice.",
    eyebrow: "Client Communication",
    intro:
      "Clients often judge the firm by communication, not by docket activity they cannot see. A safe client communication system answers routine questions, sends reminders, and flags issues before silence becomes dissatisfaction.",
    buyerProblem:
      "Staff are buried in repetitive status calls while clients still feel uninformed about treatment, records, settlement, or next steps.",
    bestFit:
      "Best for firms with high call volume from existing clients, recurring appointment reminders, document requests, and status-update bottlenecks.",
    outcomes: [
      "Fewer repetitive status calls",
      "More consistent client updates and reminders",
      "Better treatment and document follow-through",
      "Earlier escalation when a client is confused, upset, or off-track",
    ],
    workflow: [
      "Define which questions are procedural and safe to automate.",
      "Create approved update templates and escalation rules.",
      "Send reminders for appointments, documents, and next steps.",
      "Answer routine questions without giving legal advice.",
      "Route sensitive or low-confidence questions to staff.",
    ],
    proof: [
      "The PI hub identifies client communication as a major operational system.",
      "The law-firm case study discusses client satisfaction from fast, personal follow-up.",
      "The support-agent solution shows how web and SMS support can route complex cases to humans.",
    ],
    faqs: [
      {
        question: "Can AI give legal advice to clients?",
        answer:
          "No. The system should be scoped to procedural updates, reminders, and approved language, with escalation for legal judgment.",
      },
      {
        question: "Can it send treatment, document, and appointment reminders?",
        answer:
          "Yes. Reminders are often a strong starting point because they are concrete, repeatable, and easy to escalate when a client is confused or unresponsive.",
      },
      {
        question: "Can it tell a client the status of their case?",
        answer:
          "It can provide approved procedural status updates when the data is reliable. Anything involving strategy, settlement advice, fault, value, or legal interpretation should route to staff.",
      },
      {
        question: "How does it detect upset or at-risk clients?",
        answer:
          "The workflow can flag sentiment, repeated confusion, missed treatment, unanswered requests, or language that suggests frustration so the firm can step in earlier.",
      },
      {
        question: "Does this work over SMS, email, and web chat?",
        answer:
          "Yes, if those channels are in scope. The best channel mix depends on where your clients already respond and what your case management system can track cleanly.",
      },
      {
        question: "Can this reduce bad reviews?",
        answer:
          "It can reduce the silence and confusion that often lead to complaints, but it must be paired with real staff escalation.",
      },
      {
        question: "Will clients know when they are talking to automation?",
        answer:
          "They should. Clear disclosure and easy escalation protect trust. The system should feel helpful, not like the firm is hiding behind software.",
      },
    ],
  },
  {
    slug: "lien-reduction",
    navLabel: "Settlement & Liens",
    title: "AI Lien Reduction Workflow for PI Cases",
    shortTitle: "Lien Reduction",
    metaDescription:
      "AI lien reduction workflow for PI cases that helps identify lienholders, track balances, prepare follow-ups, and accelerate settlement disbursement.",
    eyebrow: "Settlement & Liens",
    intro:
      "Settlement is not finished when the carrier says yes. Lien tracking, reductions, provider balances, and disbursement readiness shape the client's net recovery and the firm's closing speed.",
    buyerProblem:
      "Settled cases remain open because lien status, provider balances, reduction requests, and disbursement details are hard to track.",
    bestFit:
      "Best for firms with many medical providers per case, slow closeout work, or inconsistent visibility into net-to-client issues.",
    outcomes: [
      "Cleaner lienholder inventory",
      "Faster follow-up on balances and reductions",
      "Better visibility into disbursement blockers",
      "More consistent review before client funds are released",
    ],
    workflow: [
      "Identify lien correspondence, bills, EOBs, and provider balances.",
      "Extract provider, patient, amount, status, and required next step.",
      "Track reduction requests and responses.",
      "Flag unusual documents or missing evidence.",
      "Prepare settlement and disbursement summaries for review.",
    ],
    proof: [
      "The lien-reduction solution page already describes the product-level workflow.",
      "The healthcare case study includes lien validation and document handling.",
      "The hidden-math lien blog uses real lien negotiation data to frame the opportunity.",
    ],
    faqs: [
      {
        question: "Can AI negotiate liens without attorney review?",
        answer:
          "The safer pattern is AI-prepared work with human approval, especially where lien law, plan language, or exceptions matter.",
      },
      {
        question: "Does this replace lien specialists?",
        answer:
          "No. It gives specialists cleaner inventories, follow-ups, and exception flags so they can focus on judgment-heavy work.",
      },
      {
        question: "Can it identify Medicare, Medicaid, ERISA, provider, or health-plan issues?",
        answer:
          "It can help classify lien-related documents and flag categories that need special review. The firm should still apply its own legal standards and review rules before taking action.",
      },
      {
        question: "Can it parse bills, EOBs, lien letters, and reduction responses?",
        answer:
          "Yes, the workflow can extract parties, balances, dates, patient details, status, and next steps from common settlement and lien documents.",
      },
      {
        question: "How does this speed up disbursement?",
        answer:
          "It reduces the time spent rebuilding the lien picture from emails, PDFs, notes, and provider calls. Staff can see blockers earlier and push the right next step sooner.",
      },
      {
        question: "Can it forecast net recovery for the client?",
        answer:
          "It can organize the inputs that affect net recovery and show a working estimate, but final numbers and advice should remain a reviewed firm decision.",
      },
      {
        question: "What lien work should always require human review?",
        answer:
          "Unusual plan language, government liens, disputed balances, compromised claims, ambiguous documents, reduction strategy, and final disbursement decisions should stay in a human review path.",
      },
    ],
  },
  {
    slug: "firm-intelligence",
    navLabel: "Firm Intelligence",
    title: "AI Firm Intelligence for Personal Injury Practices",
    shortTitle: "Firm Intelligence",
    metaDescription:
      "AI firm intelligence for PI practices that helps owners see intake conversion, stalled cases, workload, vendor performance, and workflow bottlenecks.",
    eyebrow: "Firm Intelligence",
    intro:
      "Owners cannot improve what they cannot see. Firm intelligence connects intake, case movement, vendor performance, and workflow bottlenecks into a clearer operating picture.",
    buyerProblem:
      "The firm has reports in several systems but no reliable view of where cases stall, which sources convert, or which workflows need attention.",
    bestFit:
      "Best for firms with enough case volume to feel bottlenecks but not enough clean reporting to see them early.",
    outcomes: [
      "Owner-level visibility into intake and case movement",
      "Clearer source and vendor performance signals",
      "Earlier detection of stalled files",
      "Better prioritization of automation projects",
    ],
    workflow: [
      "Map the metrics that matter by stage.",
      "Connect or export from the systems that hold those signals.",
      "Normalize source, case, workflow, and status data.",
      "Flag exceptions and bottlenecks.",
      "Use the findings to choose the next narrow workflow build.",
    ],
    proof: [
      "The PI hub frames diagnosis before demo as the operating model.",
      "The homepage already positions Possible Minds around finding workflow leaks.",
      "The engagement dashboard tracks visitor journeys and attribution for the website itself.",
    ],
    faqs: [
      {
        question: "Is this a dashboard project or an AI project?",
        answer:
          "It can be both. The first value is clean visibility. AI becomes useful when it can explain patterns and route exceptions.",
      },
      {
        question: "Do we need perfect data before starting?",
        answer:
          "No. The diagnostic usually starts by showing which data is reliable, which is missing, and which workflow should be fixed first.",
      },
      {
        question: "Which metrics matter most for a PI firm?",
        answer:
          "The first layer is usually speed-to-lead, signed-case rate, source quality, stalled files, records status, lien blockers, staff workload, cycle time, and vendor performance.",
      },
      {
        question: "Can it combine intake, case, marketing, and vendor data?",
        answer:
          "Yes, when the sources are accessible. The point is to connect the operating picture instead of leaving owners to reconcile disconnected reports by hand.",
      },
      {
        question: "Can it show which cases are stalled right now?",
        answer:
          "Yes. A useful system should surface files that have gone quiet, are missing records, lack client follow-through, have lien blockers, or have not moved to the next expected stage.",
      },
      {
        question: "How does this help choose the next AI workflow?",
        answer:
          "It shows which bottleneck is costly and repeatable enough to justify automation. That keeps the roadmap grounded in firm operations instead of vendor demos.",
      },
      {
        question: "What if our reports disagree with each other?",
        answer:
          "That is common. The first deliverable can be a source-of-truth map that explains which system owns each signal and where the gaps or contradictions live.",
      },
    ],
  },
  {
    slug: "vendor-risk-governance",
    navLabel: "Vendor Risk & AI Governance",
    title: "AI Vendor Governance for Law Firms",
    shortTitle: "Vendor Governance",
    metaDescription:
      "AI vendor governance for law firms that helps evaluate data exposure, review rules, tool usage, audit trails, and safe AI adoption.",
    eyebrow: "Vendor Risk & AI Governance",
    intro:
      "Many firms already have AI in the building through staff usage, vendors, intake tools, marketing tools, and case software. Governance turns that drift into a controlled operating system.",
    buyerProblem:
      "The firm is adopting AI without clear rules for client data, vendor diligence, human review, audit trails, or who owns the workflow.",
    bestFit:
      "Best for firms evaluating AI tools, consolidating vendors, or worried that sensitive client data is flowing through systems they do not control.",
    outcomes: [
      "Clear policy for what AI may and may not touch",
      "Narrower data access and better vendor diligence",
      "Review rules for sensitive and low-confidence work",
      "A roadmap for replacing tool sprawl with firm-owned workflows",
    ],
    workflow: [
      "Inventory current AI and automation usage.",
      "Map where client data, medical facts, and case facts travel.",
      "Score vendors by risk, ownership, access, and review controls.",
      "Define human-review and escalation rules.",
      "Prioritize safe workflows for implementation.",
    ],
    proof: [
      "The security page explains ownership, least privilege, audit trails, and sensitive data controls.",
      "The PI hub names vendor risk as one of the core problems.",
      "The derisking AI adoption blog expands the governance argument.",
    ],
    faqs: [
      {
        question: "Does governance slow down AI adoption?",
        answer:
          "Good governance speeds up serious adoption because the firm knows what is safe, what needs review, and what should wait.",
      },
      {
        question: "Can you audit tools we already use?",
        answer:
          "Yes. The first pass is usually a practical inventory of vendors, data flows, permissions, and review obligations.",
      },
      {
        question: "Can staff use ChatGPT or other general AI tools with client facts?",
        answer:
          "The firm should decide that through a written policy. In many cases, sensitive client facts, medical information, strategy, and privileged material should not be pasted into unmanaged tools.",
      },
      {
        question: "What should a law firm ask AI vendors before signing?",
        answer:
          "Ask what data the vendor stores, whether it trains on firm data, who can access the data, how deletion works, what audit logs exist, where human review fits, and who owns the workflow output.",
      },
      {
        question: "How do we know whether vendors train on our data?",
        answer:
          "You need to review contract terms, security documentation, model-provider settings, and product behavior. Marketing copy alone is not enough for sensitive legal workflows.",
      },
      {
        question: "What AI use needs attorney or senior-staff review?",
        answer:
          "Anything involving legal judgment, case valuation, settlement strategy, privileged facts, medical conclusions, final client communications, or low-confidence outputs should have a review path.",
      },
      {
        question: "What should an AI policy cover?",
        answer:
          "A practical policy should cover allowed tools, prohibited data, approved workflows, review rules, disclosure, vendor diligence, audit trails, and who owns exceptions when something is unclear.",
      },
    ],
  },
  {
    slug: "ai-visibility-audit",
    navLabel: "Growth & Visibility",
    title: "AI Visibility Audit for Personal Injury Firms",
    shortTitle: "AI Visibility Audit",
    metaDescription:
      "AI visibility audits for personal injury firms that check whether AI answer systems can find, describe, and cite the firm in competitive local searches.",
    eyebrow: "Growth & Visibility",
    intro:
      "Search is no longer only a list of links. AI answer systems, maps, and summaries increasingly shape which firms are considered. An AI visibility audit shows whether your public proof is strong enough to be found and trusted.",
    buyerProblem:
      "The firm ranks or advertises, but AI answers may cite competitors, miss the firm, or describe it with weak or outdated signals.",
    bestFit:
      "Best for firms investing in SEO, paid search, local reputation, referrals, or content who want to know how AI systems interpret their public footprint.",
    outcomes: [
      "Clearer view of whether AI systems mention the firm",
      "Competitor and source comparison in target searches",
      "Content and proof gaps that weaken discoverability",
      "A roadmap for improving local authority and answer readiness",
    ],
    workflow: [
      "Define the local market and practice-area questions that matter.",
      "Run standardized checks across AI answer surfaces.",
      "Compare target firm visibility against competitors.",
      "Review website, local, attorney, review, and third-party proof signals.",
      "Recommend fixes that improve machine-readable trust.",
    ],
    proof: [
      "The homepage includes AI visibility as one of the core PI diagnostic areas.",
      "The Gemini Maps and AI-search blog posts explain the market shift.",
      "The reputation diagnostic and AI readiness tools are built around this wedge.",
    ],
    faqs: [
      {
        question: "Can you guarantee a firm will appear in ChatGPT or Google AI answers?",
        answer:
          "No. These systems are volatile and personalized. The audit is a standardized visibility check and improvement plan, not a ranking guarantee.",
      },
      {
        question: "Is this the same as traditional SEO?",
        answer:
          "It overlaps with SEO, but it focuses more on citations, entity clarity, local proof, structured content, and how answer systems summarize the firm.",
      },
      {
        question: "Which AI and search surfaces should a PI firm check?",
        answer:
          "The useful set usually includes Google AI answers, local map-style results, ChatGPT-style answers, Perplexity-style citation behavior, and the third-party sources those systems appear to trust.",
      },
      {
        question: "What signals help AI systems cite a firm?",
        answer:
          "Clear practice-area pages, local relevance, attorney proof, case results where appropriate, structured FAQs, consistent entity data, reviews, authoritative mentions, and crawlable text all help machines understand the firm.",
      },
      {
        question: "How often should we run an AI visibility audit?",
        answer:
          "Quarterly is a practical rhythm for most firms, with extra checks after major site changes, brand campaigns, market expansion, or visible shifts in AI search behavior.",
      },
      {
        question: "Does this replace local SEO work?",
        answer:
          "No. It sharpens local SEO by showing how answer systems interpret the public footprint. The fixes often overlap, but the measurement lens is different.",
      },
      {
        question: "What is the first fix if the firm is invisible?",
        answer:
          "Usually it is not one trick. Start with crawlable service pages, stronger local proof, clearer attorney and case signals, consistent directory data, and FAQ content that directly answers buyer questions.",
      },
    ],
  },
];

export const PI_PROBLEM_PAGE_BY_SLUG = Object.fromEntries(
  piProblemPages.map((page) => [page.slug, page]),
) as Record<string, PiProblemPage>;
