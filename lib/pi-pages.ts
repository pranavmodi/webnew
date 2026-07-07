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
    title: "AI Intake Automation for Personal Injury Firms",
    shortTitle: "Intake Automation",
    metaDescription:
      "AI intake automation for personal injury firms that helps qualify leads, recover missed calls, route high-value cases, and improve speed to signed retainer.",
    eyebrow: "Intake & Conversion",
    intro:
      "PI firms spend heavily to create demand, then lose good cases when intake is slow, inconsistent, or understaffed. We build intake systems that capture case facts, qualify fit, and hand staff a cleaner conversation before the lead goes cold.",
    buyerProblem:
      "The firm has paid leads, web forms, referrals, or inbound calls, but too many potential clients do not become signed cases.",
    bestFit:
      "Best for firms with steady lead flow, more than one intake channel, and a need to standardize qualification without removing human judgment from the signing decision.",
    outcomes: [
      "Faster response to web leads and missed callers",
      "More complete incident, injury, treatment, and insurance facts",
      "Cleaner routing by case type, urgency, language, and value",
      "Better visibility into source quality and conversion leaks",
    ],
    workflow: [
      "Capture the lead across phone, form, chat, or email.",
      "Ask a consistent PI-specific qualification sequence.",
      "Identify urgency, liability signals, injury severity, treatment status, and coverage.",
      "Route qualified matters with a concise intake summary and next action.",
      "Log source, outcome, and follow-up status for owner-level reporting.",
    ],
    proof: [
      "The law-firm case study shows how faster callback and structured follow-up increased signed cases.",
      "The PI hub frames intake as the first leak to diagnose before recommending a build.",
      "The intake blog explains why conversion is more than raw response speed.",
    ],
    faqs: [
      {
        question: "Does AI decide whether to sign the case?",
        answer:
          "No. The system collects and organizes the facts. Your team keeps the legal and business judgment around whether to sign.",
      },
      {
        question: "Can it handle Spanish-language or after-hours inquiries?",
        answer:
          "Yes, if that is part of the scoped workflow. Language, time of day, and channel are useful routing signals.",
      },
    ],
  },
  {
    slug: "after-hours-intake",
    navLabel: "After-Hours Intake",
    title: "After-Hours AI Intake for PI Firms",
    shortTitle: "After-Hours Intake",
    metaDescription:
      "After-hours AI intake for personal injury firms that responds to web leads, missed calls, and overflow inquiries before prospects call another firm.",
    eyebrow: "Missed Calls & Web Leads",
    intro:
      "The most expensive intake gap is often the unstaffed moment: nights, weekends, lunch breaks, overflow, and voicemail. After-hours AI intake gives a prospect a real next step when the alternative is silence.",
    buyerProblem:
      "Good prospects reach the firm outside staffed hours or during call spikes, then keep searching and sign somewhere else.",
    bestFit:
      "Best for PI firms with paid lead spend, after-hours form fills, missed-call logs, or intake teams that cannot reliably cover every channel.",
    outcomes: [
      "Less lead leakage from nights, weekends, and overflow",
      "Immediate qualification when staff are unavailable",
      "Structured handoff for next-business-day follow-up",
      "Cleaner reporting on when and where intake leaks happen",
    ],
    workflow: [
      "Detect the unstaffed inquiry or missed call.",
      "Start a safe qualification conversation.",
      "Capture incident, injury, treatment, insurance, and contact details.",
      "Escalate urgent or high-value matters according to firm rules.",
      "Send staff a concise summary before the next callback.",
    ],
    proof: [
      "The outbound voice solution page already focuses on missed-call and after-hours response.",
      "The PI case study describes response-time improvements and signed-case lift.",
      "The consult page positions missed leads as a diagnostic category.",
    ],
    faqs: [
      {
        question: "Is this a replacement for human intake staff?",
        answer:
          "No. It covers the moments when staff are not present or cannot answer fast enough, then hands off to people.",
      },
      {
        question: "What should happen with urgent cases?",
        answer:
          "Urgent cases should follow explicit escalation rules, such as sending an alert, routing to a live line, or marking the lead for immediate review.",
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
        question: "Can this reduce bad reviews?",
        answer:
          "It can reduce the silence and confusion that often lead to complaints, but it must be paired with real staff escalation.",
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
    ],
  },
];

export const PI_PROBLEM_PAGE_BY_SLUG = Object.fromEntries(
  piProblemPages.map((page) => [page.slug, page]),
) as Record<string, PiProblemPage>;
