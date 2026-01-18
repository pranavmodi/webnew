# Possible Minds Marketing Site

Modern Next.js (App Router) marketing site for Possible Minds with Tailwind CSS, shadcn/ui, Radix Themes, and Framer Motion. Built for healthcare and legal support/intake workflows.

## Quickstart
- Install deps: `npm install`
- Run dev server: `npm run dev` (http://localhost:3000)
- Lint: `npm run lint`

## Calendly URL
- Update the placeholder in `lib/constants.ts` (`CALENDLY_URL`). All “Book a demo” CTAs point here, including nav/footer/contact form.

## Accent & Theme
- Accent color is emerald via CSS vars in `styles/globals.css` (`--primary`) and `tailwind.config.ts`.
- Radix Themes uses `Theme` provider in `components/providers.tsx`; adjust `accentColor`/`radius` there if desired.

## Copy & Content
- Centralized copy and data live in `lib/content.ts` and `lib/navigation.ts`.
- Case studies, solution details, industries, and metrics all derive from `lib/content.ts`. Edit there to update cards/sections.
- Site constants (name, description, URLs) are in `lib/constants.ts`.

## Components & Layout
- Reusable UI in `components/ui/*` (shadcn variants for Button, Card, Tabs, Accordion, Sheet, Tooltip, Toast, etc.).
- Layout primitives: `components/layout/navbar.tsx`, `components/layout/footer.tsx`, and shared sections like `components/hero.tsx`, `product-preview.tsx`, `solution-section.tsx`, `industry-tabs.tsx`.
- Global styles: `styles/globals.css`; Tailwind config: `tailwind.config.ts`.

## Animation Patterns
- Framer Motion is used for hero reveals, product preview hover lifts, stepper, and metric cards (`components/hero.tsx`, `product-preview.tsx`, `how-it-works.tsx`, `outcomes-bar.tsx`).
- shadcn `Sheet` and `Accordion` use `tailwindcss-animate` transitions for crisp mobile menu and FAQ interactions.

## Notes
- Sitemap/robots are generated via `app/sitemap.ts` and `app/robots.ts` (base URL placeholder in `lib/constants.ts`).
- Build prompt lives in `docs/BUILD_PROMPT.md` for reference.
