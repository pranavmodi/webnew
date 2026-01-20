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
