export type MigrationConcern = {
  title: string;
  body: string;
};

export type MigrationPhase = {
  step: string;
  title: string;
  body: string;
  output: string;
};

export type MigrationFaq = {
  question: string;
  answer: string;
};

export type MigrationSourcePage = {
  slug: string;
  sourceName: string;
  navLabel: string;
  pageTitle: string;
  metaTitle: string;
  description: string;
  hero: string;
  audience: string;
  reasons: string[];
  discoveryIntro: string;
  discovery: string[];
  concerns: MigrationConcern[];
  phases: MigrationPhase[];
  firmDecisions: string[];
  possibleMindsWork: string[];
  validations: string[];
  faqs: MigrationFaq[];
};

export const migrationSystems = [
  {
    sourceName: "Needles",
    navLabel: "Needles migration",
    href: "/services/needles-migration",
    summary:
      "Preserve the meaning of firm-specific case types, fields, checklists, notes, contacts, calendars, and document conventions.",
  },
  {
    sourceName: "TrialWorks",
    navLabel: "TrialWorks migration",
    href: "/services/trialworks-migration",
    summary:
      "Reconstruct litigation history, chronology, document associations, docket activity, status meaning, and user ownership.",
  },
  {
    sourceName: "AbacusLaw",
    navLabel: "AbacusLaw migration",
    href: "/services/abacuslaw-migration",
    summary:
      "Map matters, linked contacts, calendars, notes, documents, custom fields, and any separately approved accounting scope.",
  },
] as const;

export const migrationSourcePages: Record<string, MigrationSourcePage> = {
  needles: {
    slug: "needles-migration",
    sourceName: "Needles",
    navLabel: "Needles migration",
    pageTitle: "Needles migration support for personal injury firms",
    metaTitle: "Needles Migration Support for PI Firms",
    description:
      "Hands-on Needles migration support for PI firms: data discovery, cleanup, mapping, trial conversion, validation, cutover planning, and post-migration checks.",
    hero:
      "We help your firm understand what it has built in Needles, translate that operating knowledge into the selected destination, and verify the result before the old system stops being the daily source of truth.",
    audience:
      "For PI firms choosing to modernize their case-management environment and needing an independent team to manage the data and operating details around the move. A migration should follow the firm's priorities and destination decision; it is not an emergency created by a vendor-status claim.",
    reasons: [
      "The firm has selected a modern destination and needs a practical migration plan.",
      "Remote access, reporting, integrations, or workflow changes now matter more to the practice.",
      "Years of firm-specific configuration make a standard export insufficient on its own.",
    ],
    discoveryIntro:
      "Needles installations can reflect years of firm decisions. Discovery is designed to identify both the records and the conventions staff rely on to interpret them.",
    discovery: [
      "Needles version, hosting arrangement, database access, available exports, and document storage locations",
      "Matter and case types, stages, statuses, closure reasons, and legacy values still present in historical files",
      "Firm-specific screens, fields, codes, required values, and text conventions",
      "Checklists, tasks, assignments, due dates, completion state, and recurring workflow patterns",
      "Clients, defendants, insurers, providers, experts, referring attorneys, and other linked contacts and roles",
      "Notes, negotiations, medical or demand milestones, calendar entries, and user ownership",
      "Documents, filenames, folder structures, links, templates, and records stored outside the core database",
    ],
    concerns: [
      {
        title: "A field name is not its meaning",
        body:
          "A custom field may drive reporting, a checklist, or a staff decision even when its label looks ordinary. We document use before deciding where it belongs.",
      },
      {
        title: "Case types may encode different workflows",
        body:
          "Auto, premises, malpractice, mass-tort, and other matters may use different fields and checklists. Representative matters from each meaningful type must be tested.",
      },
      {
        title: "Documents may live beside the database",
        body:
          "A record can point to a file on a server or in a separate store. The migration has to preserve the relationship, not merely export a database row.",
      },
      {
        title: "Historical values need a destination",
        body:
          "Inactive users, retired status codes, old matter types, and completed tasks may still be necessary to understand closed or long-running cases.",
      },
    ],
    phases: [
      {
        step: "01",
        title: "Inventory the actual environment",
        body:
          "Review the database, configured case types, custom fields, users, integrations, exports, and document repositories.",
        output: "Source inventory and access plan",
      },
      {
        step: "02",
        title: "Define what moves and what is archived",
        body:
          "Separate active matters, closed history, duplicates, obsolete configuration, and material that may remain in a controlled archive.",
        output: "Approved migration scope and retention decisions",
      },
      {
        step: "03",
        title: "Map data and workflow meaning",
        body:
          "Translate fields, roles, statuses, checklists, notes, calendars, documents, and user assignments into the selected destination.",
        output: "Mapping specification and exception rules",
      },
      {
        step: "04",
        title: "Run a representative trial migration",
        body:
          "Load a controlled sample spanning matter types, ages, statuses, users, and document patterns into a test environment.",
        output: "Trial dataset and issue log",
      },
      {
        step: "05",
        title: "Reconcile with the people who use it",
        body:
          "Compare counts and totals, open representative files, and ask attorneys and staff to verify that the new record tells the same operational story.",
        output: "Validation results and corrected mapping",
      },
      {
        step: "06",
        title: "Cut over and verify",
        body:
          "Plan the final extraction window, destination load, staff handoff, issue triage, and post-launch checks without promising an interruption-free move.",
        output: "Cutover checklist and post-launch verification report",
      },
    ],
    firmDecisions: [
      "The selected destination and the destination configuration owner",
      "Which active, closed, and historical matters must be available in the new system",
      "What may be retained in a read-only archive rather than transformed",
      "Which staff members can explain each case type and approve its mapping",
      "The authoritative source when duplicate or conflicting values are found",
    ],
    possibleMindsWork: [
      "Coordinate source access, exports, inventories, and migration workstreams",
      "Profile and clean data without silently discarding exceptions",
      "Create the field, role, status, task, note, calendar, contact, and document mapping",
      "Run trial conversions and maintain an exception register",
      "Lead reconciliation sessions with operations staff and destination implementers",
      "Prepare cutover, staff-readiness, rollback, and post-launch verification checklists",
    ],
    validations: [
      "Matter counts by type, stage, status, and open or closed state",
      "Representative field values and long-form notes",
      "Contact roles and links to each matter",
      "Open and completed checklist items, ownership, and due dates",
      "Calendar events and deadline-critical dates",
      "Document presence, readability, naming, and association with the correct matter",
      "Closed and long-running matters that depend on historical codes or inactive users",
    ],
    faqs: [
      {
        question: "Does Possible Minds only support Needles-to-Neos migrations?",
        answer:
          "No. We can support a Needles migration to the modern destination your firm has selected, subject to confirming the source access, destination import options, data scope, and responsibilities of each vendor or implementation team.",
      },
      {
        question: "Do all custom Needles fields move automatically?",
        answer:
          "That should not be assumed. Each field is inventoried, mapped, transformed, archived, or explicitly excluded. The destination may represent the same information differently.",
      },
      {
        question: "Can documents be migrated with the matters?",
        answer:
          "Often, but document locations, link structure, filenames, permissions, file condition, and destination capabilities must be assessed before the scope is confirmed.",
      },
      {
        question: "Should closed matters be migrated?",
        answer:
          "The firm decides based on access needs, retention policy, destination cost, reporting requirements, and archive options. We help quantify the tradeoff and test the chosen approach.",
      },
      {
        question: "Is Possible Minds affiliated with Needles or its vendor?",
        answer:
          "No affiliation or endorsement is claimed. Possible Minds provides independent migration planning and implementation support for firms that use Needles.",
      },
    ],
  },
  trialworks: {
    slug: "trialworks-migration",
    sourceName: "TrialWorks",
    navLabel: "TrialWorks migration",
    pageTitle: "TrialWorks migration support for litigation-heavy PI firms",
    metaTitle: "TrialWorks Migration Support for PI Firms",
    description:
      "TrialWorks migration support for PI firms focused on litigation history, chronology, documents, contacts, tasks, events, notes, ownership, and validation.",
    hero:
      "We help firms preserve the litigation record behind each matter: what happened, when it happened, which document or person it involved, who owned the work, and what remains open after the move.",
    audience:
      "For PI firms moving from TrialWorks to a selected modern case-management platform and unwilling to treat years of litigation history as a flat collection of names and files.",
    reasons: [
      "The firm wants modern access, reporting, integrations, or a different operating model.",
      "Litigation teams need confidence that chronology and document relationships will survive the move.",
      "The destination implementation needs an independent source-data and validation workstream.",
    ],
    discoveryIntro:
      "TrialWorks discovery starts with the case timeline. We identify which records, tabs, codes, and linked files staff use to reconstruct a matter and manage the next deadline.",
    discovery: [
      "Matter and intake records, case numbers, case types, divisions, status and priority codes, and assigned users",
      "Clients, defendants, insurers, counsel, providers, experts, witnesses, and the roles that connect them to matters",
      "History entries, notes, email records, negotiations, and other dated activity that forms the case chronology",
      "Documents, images, pleadings, discovery, production materials, attachments, categories, tabs, and file locations",
      "Docket entries, tasks, reminders, checklist items, calendar events, deadlines, and completion state",
      "User ownership, inactive staff, reassignment rules, and work queues",
      "Reporting codes and historical values used to explain pipeline or litigation status",
    ],
    concerns: [
      {
        title: "Chronology must remain trustworthy",
        body:
          "Dates, ordering, authors, completion state, and links between activities and documents must be tested as a timeline, not only counted as rows.",
      },
      {
        title: "A document without context is not enough",
        body:
          "The file may migrate while its category, tab, matter association, note attachment, or production context is lost. Those relationships are part of the record.",
      },
      {
        title: "Docket activity can change form",
        body:
          "A destination may separate calendar events, tasks, reminders, and workflow checklists differently. The mapping must preserve what staff must do and when.",
      },
      {
        title: "Inactive users still explain history",
        body:
          "Former attorneys and staff may own old notes, events, or documents. Historical attribution and current responsibility need separate treatment.",
      },
    ],
    phases: [
      {
        step: "01",
        title: "Reconstruct the source model",
        body:
          "Inventory case structures, user and code tables, chronology sources, docket logic, document repositories, and available exports.",
        output: "TrialWorks source model and access plan",
      },
      {
        step: "02",
        title: "Select representative litigation matters",
        body:
          "Choose open, closed, pre-suit, filed, discovery-heavy, settled, and document-heavy matters across responsible users.",
        output: "Representative-matter test set",
      },
      {
        step: "03",
        title: "Map chronology and associations",
        body:
          "Define how activities, notes, emails, documents, contacts, events, tasks, status codes, and owners appear in the destination.",
        output: "Data and relationship mapping specification",
      },
      {
        step: "04",
        title: "Trial-load complete matters",
        body:
          "Move whole representative files into a sandbox so users can review the matter as they would during real case work.",
        output: "Trial migration and exception report",
      },
      {
        step: "05",
        title: "Test the story of each case",
        body:
          "Have case teams verify the chronology, document access, contact roles, outstanding work, ownership, and status meaning.",
        output: "User-acceptance and reconciliation results",
      },
      {
        step: "06",
        title: "Prepare final migration and cutover",
        body:
          "Resolve exceptions, define the final change window, sequence data and files, prepare staff, and verify priority matters after launch.",
        output: "Cutover plan and priority-matter verification log",
      },
    ],
    firmDecisions: [
      "Which destination will become the system of record",
      "Which matter stages and litigation teams must be represented in testing",
      "How historical users should appear and who receives their open work",
      "Which document categories, tabs, and folder conventions must be retained",
      "Which open deadlines and high-risk matters require enhanced cutover review",
    ],
    possibleMindsWork: [
      "Inventory the database, document stores, activity sources, and code tables",
      "Build chronology, contact-role, document-association, status, and ownership mappings",
      "Clean duplicates and retired values while keeping an auditable exception record",
      "Run representative full-matter trial migrations",
      "Reconcile source and destination with case-team review",
      "Manage cutover sequencing and post-launch priority-matter checks",
    ],
    validations: [
      "Case counts and status distribution",
      "Chronological ordering, dates, authors, and activity descriptions",
      "Document and attachment presence, readability, category, and matter association",
      "Contact roles and counsel, provider, expert, witness, and insurer relationships",
      "Open tasks, docket entries, events, reminders, deadlines, and completion state",
      "Current ownership and historical attribution",
      "Representative matters from intake through active litigation and closure",
    ],
    faqs: [
      {
        question: "Why test whole matters instead of a random sample of records?",
        answer:
          "A row-level sample can miss broken relationships. Reviewing a complete matter shows whether the chronology, documents, contacts, tasks, events, status, and ownership still make sense together.",
      },
      {
        question: "Can TrialWorks documents be moved without losing their case links?",
        answer:
          "That is an explicit validation objective, not something we promise before discovery. We assess file locations and associations, test representative document patterns, and reconcile failures before cutover.",
      },
      {
        question: "What happens to former users and their assignments?",
        answer:
          "The firm decides how historical attribution should display and who should own outstanding work. We map those as separate requirements.",
      },
      {
        question: "Can the migration include open deadlines?",
        answer:
          "Yes, if the source data and destination support the agreed mapping. Deadline-critical matters receive specific pre-cutover and post-cutover checks, with staff remaining responsible for legal calendaring oversight.",
      },
      {
        question: "Is Possible Minds affiliated with TrialWorks or its vendor?",
        answer:
          "No affiliation or endorsement is claimed. Possible Minds provides independent migration planning and implementation support for firms that use TrialWorks.",
      },
    ],
  },
  abacuslaw: {
    slug: "abacuslaw-migration",
    sourceName: "AbacusLaw",
    navLabel: "AbacusLaw migration",
    pageTitle: "AbacusLaw migration support with a clear accounting boundary",
    metaTitle: "AbacusLaw Migration Support for PI Firms",
    description:
      "AbacusLaw migration support for PI firms covering matters, linked contacts, calendars, notes, documents, custom fields, and separately assessed accounting data.",
    hero:
      "We help firms move the case-management record without assuming that linked contacts, calendar rules, documents, billing, or accounting will follow the same path. Each scope is discovered and approved before migration work begins.",
    audience:
      "For PI firms moving from AbacusLaw to a selected destination and needing a disciplined separation between the case-management migration and any billing or accounting conversion.",
    reasons: [
      "The firm has selected a new practice or case-management platform.",
      "Matter, contact, calendar, document, and reporting workflows need to be redesigned for the destination.",
      "The firm needs clarity about which financial records belong in this migration and which require a separate accounting workstream.",
    ],
    discoveryIntro:
      "AbacusLaw can connect matters to names, events, notes, emails, documents, custom records, and separate accounting functions. Discovery identifies those links and prevents an assumed all-in-one export from defining the scope.",
    discovery: [
      "Matters, matter numbers, case codes, types, statuses, assigned attorneys, offices, and custom matter fields",
      "Names and contacts, linked-name roles, addresses, phone and email fields, organizations, and duplicate records",
      "Calendar events, appointments, to-dos, reminders, deadlines, rules-based entries, recurrence, and user calendars",
      "Notes, calls, email links, document links, file locations, templates, and Word or Outlook-related workflows",
      "Specialty forms, required fields, custom screens, macros, reports, and workflow conventions",
      "Time, billing, trust, general-ledger, payment, or other accounting-related data only when explicitly included",
      "Integrations and synchronized systems that may contain overlapping contacts, events, emails, or documents",
    ],
    concerns: [
      {
        title: "Names and matters are related records",
        body:
          "A contact may appear across multiple matters and in different roles. Deduplication must preserve the links that give each relationship meaning.",
      },
      {
        title: "Calendar data carries legal risk",
        body:
          "Events, to-dos, reminders, recurrence, rules, and user ownership may map differently. Deadline validation remains a dedicated workstream with human oversight.",
      },
      {
        title: "A document link is not the document",
        body:
          "The database may reference a file stored elsewhere. We verify both the record and the underlying file before treating it as migrated.",
      },
      {
        title: "Accounting is a separate decision",
        body:
          "Case-management scope does not automatically include billing, trust, ledger, payment, or accounting history. Those records require separate discovery, ownership, reconciliation, and destination capability checks.",
      },
    ],
    phases: [
      {
        step: "01",
        title: "Separate the systems and scopes",
        body:
          "Identify AbacusLaw case-management data, document stores, integrations, and any linked accounting products or processes.",
        output: "System boundary and source inventory",
      },
      {
        step: "02",
        title: "Approve the accounting boundary",
        body:
          "Decide whether financial data is excluded, archived, summarized, or handled as a separate conversion with appropriate accounting review.",
        output: "Written case-management and accounting scope",
      },
      {
        step: "03",
        title: "Map matters, names, events, and files",
        body:
          "Translate matter fields, linked contacts, notes, calendars, tasks, documents, custom values, and user ownership into destination structures.",
        output: "Mapping specification and deduplication rules",
      },
      {
        step: "04",
        title: "Trial-migrate linked records",
        body:
          "Load representative matters with their contacts, calendars, notes, and documents so relationships can be tested together.",
        output: "Sandbox load and exception report",
      },
      {
        step: "05",
        title: "Reconcile data and deadlines",
        body:
          "Compare counts, inspect linked contacts and files, review user calendars, and perform any separately scoped financial reconciliation.",
        output: "Validation results and unresolved exceptions",
      },
      {
        step: "06",
        title: "Cut over with separate sign-offs",
        body:
          "Sequence final exports, destination loads, staff readiness, and post-launch checks with distinct approval for case-management and accounting workstreams.",
        output: "Cutover checklist and signed validation record",
      },
    ],
    firmDecisions: [
      "The destination for case-management data and its import capabilities",
      "Whether billing or accounting is excluded, archived, summarized, or converted separately",
      "Which contact record wins when duplicates or conflicting details exist",
      "Which calendar rules, event types, and user assignments must be recreated",
      "Which integrations or synchronized systems must be paused, reconciled, or reconnected",
    ],
    possibleMindsWork: [
      "Inventory AbacusLaw records, linked files, custom configuration, and connected systems",
      "Document the accounting boundary before estimating or executing the migration",
      "Map and clean matters, linked names, events, tasks, notes, documents, and custom fields",
      "Coordinate trial loads and relationship-level testing",
      "Produce case-management reconciliation and any separately scoped financial exception reports",
      "Plan cutover and post-launch checks with clear owners for each workstream",
    ],
    validations: [
      "Matter counts, identifiers, types, status, and assigned professionals",
      "Names, organizations, contact details, linked roles, and deduplication results",
      "Events, to-dos, reminders, recurrence, deadlines, and calendar ownership",
      "Notes, email references, documents, file readability, and matter association",
      "Custom and specialty fields used in forms, workflows, or reports",
      "Integration duplicates or gaps caused by Outlook or other synchronized systems",
      "Financial totals and transaction detail only when a separate accounting scope has been approved",
    ],
    faqs: [
      {
        question: "Does an AbacusLaw migration automatically include accounting?",
        answer:
          "No. Case management and accounting must be scoped separately. We first identify which financial products and records the firm uses, what the destination accepts, and who will approve the reconciliation.",
      },
      {
        question: "Can linked contacts be deduplicated without losing matter roles?",
        answer:
          "That is the goal of the deduplication design. We separate identity matching from relationship mapping so one cleaned contact can still retain the correct role on each matter.",
      },
      {
        question: "How are calendar deadlines handled?",
        answer:
          "We inventory event types, rules, reminders, recurrence, users, and matter links; test the destination mapping; and require deadline-focused validation before and after cutover. Firm personnel remain responsible for legal deadline oversight.",
      },
      {
        question: "What if documents are stored outside AbacusLaw?",
        answer:
          "We locate and sample the underlying repositories, compare database links to actual files, and include file transfer or archive work only after the storage pattern is understood.",
      },
      {
        question: "Is Possible Minds affiliated with AbacusLaw or its vendor?",
        answer:
          "No affiliation or endorsement is claimed. Possible Minds provides independent migration planning and implementation support for firms that use AbacusLaw.",
      },
    ],
  },
};
