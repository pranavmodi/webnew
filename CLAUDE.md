# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Deployment

- Hosted on Vercel at https://getpossibleminds.com
- Auto-deploys on push to `main` branch (if GitHub integration is connected)
- Manual deploy: `vercel --prod`

## Architecture

This is the **Possible Minds marketing website** - a Next.js 14 App Router site for an AI email triage product targeting healthcare and legal teams.

### Tech Stack
- **Next.js 14** with App Router (all pages in `app/`)
- **Tailwind CSS** with CSS variables for theming (defined in `styles/globals.css`)
- **Radix UI** primitives wrapped in `components/ui/`
- **Framer Motion** for animations
- **class-variance-authority (cva)** for component variants

### Key Directories

```
app/           # Pages (/, /about, /solutions, /industries, /case-studies, /contact, /privacy)
components/
  ui/          # Base UI primitives (Button, Card, Tabs, etc.) - shadcn/ui style
  layout/      # Navbar, Footer
  *.tsx        # Page-specific components (Hero, FeatureCards, etc.)
lib/
  constants.ts # Site name, URLs, brand colors
  content.ts   # All marketing copy (headlines, features, case studies)
  navigation.ts# Nav and footer link definitions
  utils.ts     # cn() helper for className merging
```

### Content Management

All text content lives in `lib/content.ts`. Update copy there rather than in components. Key exports:
- `heroHeadline`, `heroSubhead` - Homepage hero
- `solutions`, `industries`, `caseStudies` - Page content arrays
- `ctaButtons` - CTA button configurations

### Styling Conventions

- Colors use CSS variables: `bg-primary`, `text-muted-foreground`, etc.
- HSL values defined in `styles/globals.css` under `:root`
- Primary accent color: green (`#0ea472`)
- Use `cn()` from `lib/utils` to merge Tailwind classes

### Path Aliases

`@/*` maps to project root (configured in `tsconfig.json`):
```tsx
import { Button } from "@/components/ui/button";
import { heroHeadline } from "@/lib/content";
```

### Click-tracking beacon — REQUIRED on every tracked landing page

Any landing page we drive **tracked email traffic** to (via possibleos short links
`/a/`, `/c/`, `/s/` on `aiaudit.getpossibleminds.com`) **MUST render the human-session
beacon**. Reason: the redirect click is logged server-side, but email-security
scanners (Proofpoint, Microsoft Safe Links, Mimecast, Barracuda) fetch every URL in
an email **without running page JS**, so raw clicks are bot-dominated. A `session_ready`
beacon only fires in a real browser, giving the human-confirmation signal the click
cannot. (See possibleos `docs/LEAD_GEN_CYBERNETIC_TECHNICAL.md` → `page_session`
observation.)

- Use the shared client component **`components/analytics/click-beacon.tsx`**
  (`<ClickBeacon page="consult" />`). On mount it reads the `lc` query param (the
  short-link code the `/c/` and `/s/` redirects append) and POSTs
  `{event:"session_ready", page, link_code, session_id, time_on_page_ms}` to
  `${NEXT_PUBLIC_AUTOCALLER_API_URL}/api/lead-gen/page-event`; on unload it re-posts
  with `time_on_page_ms` via `navigator.sendBeacon`.
- **When you add or start tracking a new landing/solution page, add `<ClickBeacon>`
  to it.** Pages currently requiring it: `app/consult`, `app/solutions/outbound-voice-ai`.
  Add to the other `app/solutions/*` pages as soon as we send tracked links to them.
- **Progressive-funnel gestures are what actually prove a human.** Scanners now
  run page JS *and* emulate dwell, so a bare `session_ready` (and even a long
  `time_on_page_ms`) is no longer trustworthy. ClickBeacon therefore also emits,
  at most once per session, the funnel steps `first_pointer` (first real
  pointer/scroll/touch/key gesture), `scroll_50` (scrolled ≥50% depth), and
  `content_revealed` — gestures a scanner does not perform. The possibleos
  wave-rollup scores sessions on these (`gesture_page_sessions`,
  `revealed_page_sessions`) rather than on dwell.
- **Gate the gifted payload behind a tap.** Wrap giveaway content (e.g. the
  workshop's "instruction one") in **`components/analytics/reveal-panel.tsx`**
  (`<RevealPanel buttonLabel="Show me…">…</RevealPanel>`). It hides children
  behind a tap-to-reveal button and, on tap, dispatches a `pm:funnel-step`
  window event (`content_revealed`) that ClickBeacon relays. A human taps to
  read it; a scanner never does — so this is the strongest pre-registration
  human signal. Use it on any tracked page that gives something away for free.

### Internal Tools

#### LinkedIn Outreach Tool (`/tools/linkedin-outreach`)

A tool for generating personalized LinkedIn outreach messages from a CSV file of contacts.

**Features:**
- Upload CSV with contacts (name, title, firm, bio)
- Automatically search for LinkedIn profiles using Serper API
- Generate personalized messages using OpenAI GPT-4o
- Creates 4 messages per contact:
  - Short message from Pranav (<200 chars)
  - Short message from Neha (<200 chars)
  - Long LinkedIn message from Pranav
  - Long LinkedIn message from Neha
- Download results as CSV

**API Routes:**
- `POST /api/linkedin-search` - Search for LinkedIn profiles using OpenAI Responses API with web search tool
- `POST /api/generate-messages` - Generate personalized outreach messages using gpt-5-nano

**Environment Variables Required:**
```bash
OPENAI_API_KEY=sk-...      # Required (powers both LinkedIn search and message generation)
```

See `.env.example` for configuration.
