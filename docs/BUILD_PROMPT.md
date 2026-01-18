# Possible Minds Marketing Site Prompt

You are an expert product designer + senior front-end engineer. Build a slick, modern, minimalistic, high-performance marketing website for a B2B AI software company called “Possible Minds” (PossibleMinds). The company specializes in AI software for customer support and sales workflows for healthcare and legal firms.

**DECISIONS (locked)**
- Vibe: Sharp, high-performance (crisp, confident, fast, outcomes-first)
- Accent color: Emerald (single accent color; neutrals for everything else)
- Primary CTA “Book a demo”: opens Calendly link (user will provide URL)
- Secondary CTAs: “See solutions” and “View case studies”
- Pricing page: DO NOT create a pricing page

**IMPORTANT WORKFLOW**
1) Ask the user ONLY for:
   - Calendly URL (required)
   - Whether to name specific integrations (optional)
   - Whether any metrics/clients can be stated (optional)
2) If Calendly URL is not provided, use a placeholder constant CALENDLY_URL in /lib/constants and wire all CTAs to it. The site must still work.
3) Then build the site end-to-end with high polish.

**GOAL**
Create a premium, minimal, enterprise-ready site that clearly communicates:
1) what Possible Minds does
2) who it’s for (healthcare & legal)
3) outcomes (speed, accuracy, cost reduction, conversion)
4) how it works (high-level)
5) how to get started (Calendly demo)

**TECH STACK (must use)**
- Framework: Next.js (TypeScript), React, HTML (App Router)
- Styling/UI: Tailwind CSS, shadcn/ui, Radix Themes (tokens/theme)
- Icons: Use ONE primary icon set consistently (Lucide preferred). Optionally add Heroicons only if needed, but keep consistency.
- Animation: Motion (Framer Motion) — subtle, purposeful
- Fonts: Sans-serif; implement with next/font using:
  - Primary: Geist (or Inter if Geist causes friction)
  - Secondary/fallbacks: Inter, Mona Sans, IBM Plex Sans, Manrope
- Keep dependencies minimal and justified.

**QUALITY BAR (non-negotiable)**
- Modern minimalism with high-performance vibe: tight copy, strong hierarchy, clean grid
- Subtle motion that reinforces speed (quick, low-distance transitions)
- Mobile-first excellence: nav, spacing, typography, tap targets
- Accessibility: semantic HTML, focus states, ARIA
- Performance: high Lighthouse; avoid heavy images; use next/image only if needed
- SEO: per-page metadata, OG defaults, sitemap, robots
- No lorem ipsum — write real B2B copy

**DESIGN SYSTEM**
- Palette:
  - Background: near-white + optional very subtle gray
  - Text: deep charcoal
  - Borders: soft neutral
  - Accent: Emerald used for CTAs, links, key highlights only
- Define consistent rhythm:
  - Spacing scale and max-width container
  - Typography scale (h1/h2/h3/body/small)
- Use shadcn/ui:
  - Button, Card, Tabs, Accordion, Badge, Dialog (optional), Sheet (mobile menu), Input, Textarea, Separator, Tooltip, Toast (optional)
- Use Radix Themes for tokens/theme control (not for heavy styling overrides).
- Components should be cleanly reusable.

**INFORMATION ARCHITECTURE / ROUTES (required)**
- Home (/)
- Solutions (/solutions)
- Industries (/industries)
- Case Studies (/case-studies)
- About (/about)
- Contact (/contact)
- Privacy (/privacy)

**NAV + FOOTER**
- Sticky nav with subtle blur/glass (very minimal). Active route indicator.
- Primary nav items: Solutions, Industries, Case Studies, About, Contact
- Right-side nav CTA: “Book a demo” (Calendly)
- Mobile menu: shadcn/ui Sheet + Motion transitions (fast & crisp)
- Footer: Product/Solutions, Industries, Company, Contact, Social placeholders

**COPY / POSITIONING (Sharp high-performance)**
- Avoid buzzwords. Be specific: “AI triage, AI replies, lead qualification, intake summaries, doc extraction, routing, audit logs”
- Outcomes-first language: speed-to-response, speed-to-lead, reduced backlog, higher conversion, fewer errors
- Keep sentences short. Use strong verbs.

**HOME PAGE (/): SECTIONS + SPEC**
1) Hero (split layout)
   - Headline: sharp, outcome-driven (write 2–3 options then pick best)
     Example direction: “Turn every inquiry into a resolved ticket or qualified lead — automatically.”
   - Subheadline: “AI for customer support and sales workflows in healthcare & legal.”
   - CTA row:
     - Primary: Book a demo (Calendly)
     - Secondary: See solutions
     - Tertiary text-link: View case studies
   - Right side: Minimal “product preview” panel (mock UI) with 3 stacked modules:
     - Inbox Triage: categorize + route + priority
     - Suggested Reply: draft response + key facts
     - Intake Summary: qualification fields + next action
   - Motion:
     - Fast fade/slide for hero elements
     - Subtle hover motion for preview modules
     - No excessive parallax

2) Proof / Outcomes bar
   - If user provides real metrics/clients, use them.
   - Else use “Example outcomes” label and show 3 metrics (clearly marked):
     - “40% faster response time”
     - “2× lead qualification throughput”
     - “60% fewer manual tags”
   - Minimal badges for “Healthcare ops teams” “Legal intake teams” (no fake logos)

3) What we do (3 cards)
   - Support AI
   - Sales / Intake AI
   - Document & Workflow Automation
   Each card: icon + 1-line value + 2 bullet outcomes + link.

4) How it works (stepper)
   - Connect → Understand → Act → Learn
   - Include a compact “What we integrate with” line (generic unless user asks to name integrations)

5) Industries (Tabs)
   - Tabs: Healthcare / Legal
   - Each tab: top 4 workflows + top 3 outcomes + 1 short “Example automation”

6) Case Studies teaser
   - 3 cards with: Title + Problem + Solution + Results
   - Link to full case studies page

7) Final CTA
   - High-contrast but minimal
   - Primary: Book a demo (Calendly)
   - Secondary: Contact

**SOLUTIONS (/solutions)**
- Anchored sections:
  - Customer Support AI
  - Sales / Intake AI
  - Document & Workflow Automation
- Each section must include:
  - 1-sentence promise (sharp)
  - 3 feature bullets
  - 3 outcome bullets
  - “Common questions” accordion
- Add a minimal compare table (columns for the 3 solutions) with checkmarks

**INDUSTRIES (/industries)**
- Healthcare:
  - Workflows: scheduling + support inbox + records/billing support (generic)
  - Emphasize speed + accuracy + workload reduction
  - Add a “Security & privacy posture” section with careful language (no compliance guarantees unless user provides exact wording)
- Legal:
  - Intake + follow-ups + document handling + response quality
  - Speed-to-lead emphasis
- Include a simple workflow diagram per industry using HTML/CSS boxes/arrows (no heavy libs)

**CASE STUDIES (/case-studies)**
- Create 3 case studies. If real examples are not provided, label as “Illustrative example” prominently.
- Consistent format:
  - Context
  - Challenge
  - What we built
  - Impact (metrics; label “Example” if fictional)
  - Notes (integrations generic unless specified)

**ABOUT (/about)**
- Mission + principles: reliability, privacy, measurable outcomes, fast iteration
- No fake team members. Use “small senior team” language.

**CONTACT (/contact)**
- Form fields: name, email, company, industry select (Healthcare/Legal/Other), message
- Client-side validation + accessible errors
- On submit: toast + simulated success (no backend)
- Include a strong secondary CTA:
  - “Prefer to talk? Book a demo” (Calendly)

**PRIVACY (/privacy)**
- Minimal privacy template with standard sections

**TECHNICAL REQUIREMENTS**
- Next.js App Router + route layouts
- next/font typography
- Tailwind configured properly; no unused styling frameworks
- shadcn/ui installed and used across the site
- Radix Themes configured for tokens (keep overrides minimal)
- Motion animations:
  - Section reveal on scroll
  - Card hover microinteractions
  - Mobile menu transitions
- SEO: Metadata per page + OG defaults + sitemap/robots
- Performance: avoid heavy images; keep JS lean; prefer CSS

**PROJECT STRUCTURE**
- /app (routes, layouts, metadata)
- /components (Navbar, Footer, Hero, ProductPreview, FeatureCards, Stepper, IndustryTabs, CaseStudyCard, CTASection, SectionHeading)
- /lib (constants: CALENDLY_URL, navigation, copy blocks)
- /styles (globals)

**DELIVERABLES**
1) Working Next.js project with full site
2) Reusable components with clean props and strong typing
3) Centralized copy + constants for easy edits
4) README:
   - install/run
   - update CALENDLY_URL
   - change accent color
   - edit copy and case studies
   - animation patterns

**NOW**
Ask the user for Calendly URL and (optional) integrations and (optional) real metrics permission, then build everything with high polish.
