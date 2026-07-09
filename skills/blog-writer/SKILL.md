---
name: possible-minds-blog-writer
description: Create, optimize, publish, and verify Possible Minds blog posts with strong editorial quality, SEO/AEO structure, schema, internal links, build checks, and live deployment verification.
---

# Possible Minds Blog Writer Skill

Use this skill whenever creating, editing, or publishing a blog post for
`getpossibleminds.com`.

The goal is not to produce generic SEO content. The goal is to publish a
thesis-driven Possible Minds essay that is useful to law firm operators,
technically correct in the repo, discoverable by search engines, answerable by
LLMs, and live on production.

## Positioning

Possible Minds builds diagnostic-led, firm-owned AI systems for personal injury
firms.

The positioning is:

- Find the operational leak.
- Decide what is safe and ready to automate.
- Build narrow AI systems around workflows that matter.
- Keep the system governed, measurable, and owned by the firm.

Avoid positioning Possible Minds as a prompt-hack shop, generic AI-tool vendor,
or hype-heavy automation agency.

## Audience

Primary readers:

- Personal injury law firm owners
- Managing partners
- COOs and operations directors
- Intake directors
- Case managers and senior paralegals involved in AI adoption

Secondary readers:

- Broader legal-industry leaders evaluating AI adoption
- Operators in adjacent regulated service businesses

Assume the reader is smart, busy, and nontechnical. Write for an operator, not an
engineer.

## Voice

Write in the Possible Minds voice:

- Clear
- Strategic
- Plainspoken
- Slightly opinionated
- Practical
- Specific to legal operations
- Calm about AI risk
- Skeptical of demos that do not connect to workflow

Use short paragraphs. Make one clear argument. Avoid content-farm phrasing,
unsupported statistics, and "AI is revolutionizing everything" language.

Prefer concrete legal and operational examples:

- Reviewing an intake transcript
- After-hours lead capture
- Missed calls and web forms
- Explaining case status to a client
- Summarizing medical records while preserving uncertainty
- Identifying treatment-documentation gaps
- Drafting provider follow-up
- Explaining an insurance carrier's position in plain English
- Separating routine client communication from attorney judgment
- Escalating sensitive or low-confidence issues to staff
- Records chasing, lien tracking, and vendor-risk review

Do not give legal advice. Mention human review, attorney judgment, uncertainty,
and verification where relevant.

## Repository Workflow

Before writing:

1. Inspect the current blog architecture. Do not assume the implementation.
2. Check existing posts under `app/blog/*/page.tsx`.
3. Check shared blog metadata in `lib/blog.ts`.
4. Check navigation links in `lib/navigation.ts`.
5. Check whether the topic should appear in curated lists such as the PI hub in
   `app/personal-injury/page.tsx`.
6. Check `app/sitemap.ts` to understand how sitemap inclusion works.
7. Check newer high-quality posts for metadata and schema patterns.

Current expected architecture:

- Each blog post is a Next.js App Router page at `app/blog/<slug>/page.tsx`.
- Blog index entries come from `lib/blog.ts`.
- The sitemap is generated from `lib/blog.ts`, so adding the post there usually
  makes it crawlable at `/sitemap.xml`.
- Blog navigation is manually curated in `lib/navigation.ts`.
- Some PI-specific posts should also be added to the PI hub insight list.

If the repo changes, follow the current repo pattern instead of this historical
snapshot.

## Editorial Workflow

Start by turning source material into a publishable thesis. Do not paste,
lightly rewrite, or pad source text.

For each post, define:

- The buyer or operator problem.
- The core thesis in one sentence.
- What the reader should understand in the first 100 words.
- The operational implication for a PI firm.
- Where Possible Minds' diagnostic-led view fits naturally.
- The CTA, usually a diagnostic rather than a generic demo.

Good Possible Minds posts usually follow this arc:

1. A concrete scene or operational pain.
2. The wrong lesson most firms learn.
3. The better operating diagnosis.
4. A practical framework.
5. PI-specific examples.
6. Risk, governance, or human-review caveats.
7. What firm leaders should do next.
8. A soft diagnostic CTA.

## SEO And AEO Requirements

Every post should have:

- A clean, keyword-relevant slug.
- One H1 only.
- Logical H2/H3 structure with no skipped heading levels.
- A metadata title that is compelling and not overlong.
- A meta description under roughly 155-160 characters.
- A canonical URL.
- Open Graph title, description, type, and URL.
- Twitter metadata.
- Natural use of the primary keyword.
- Natural use of secondary keywords when they genuinely fit.
- Descriptive internal links.
- Visible FAQ if the topic has answer-engine potential.
- Structured data when supported by the site.
- A clear CTA connected to Possible Minds' diagnostic positioning.

For AEO, write answerable sections. Add a concise answer box near the top when
the topic is educational or definitional.

Recommended answer-box pattern:

```text
In plain English

<3-5 sentences that directly answer the main query in simple language.>
```

Answer-box content should:

- Define the concept simply.
- State why it matters.
- Explain the operational implication.
- Avoid jargon and unsupported claims.

FAQ questions should be phrased the way a buyer or AI answer engine would ask:

- What is <concept>?
- Why does <problem> happen?
- How should a law firm start?
- What is the difference between <A> and <B>?
- How should firms manage risk?
- What should humans still review?

FAQ answers must be concise, visible on the page, and match FAQPage schema if
schema is added.

## Internal Linking

Only link to pages that exist in the repo. Use descriptive anchor text, not
"click here."

Common internal links for PI and legal AI posts:

- `/personal-injury` as "AI systems for personal injury firms"
- `/personal-injury/intake-automation` as "AI intake automation"
- `/personal-injury/after-hours-intake` as "after-hours intake workflows"
- `/personal-injury/records-chasing` as "records chasing and case development"
- `/personal-injury/client-communication` as "client communication systems"
- `/personal-injury/lien-reduction` as "lien workflows" or "lien reduction workflows"
- `/personal-injury/vendor-risk-governance` as "AI governance and vendor-risk controls"
- `/personal-injury/faq` as "PI AI FAQ"
- `/blog/tools-vs-systems-pi-firms-ai` as "tools versus systems"
- `/blog/why-ai-readiness-matters-pi-firms` as "AI readiness for PI firms"
- `/blog/derisk-ai-adoption-legal-practice` as "derisking AI adoption"

Use internal links to clarify the content architecture. Do not overload a post
with repetitive links.

## External Links

Use external links sparingly.

When factual claims depend on current law, legal ethics, AI capability, court
rules, or public events, verify with authoritative sources and cite them
appropriately. Prefer primary sources:

- Court materials
- Statutes or agency pages
- State bar or ethics guidance
- Official model-provider documentation
- Original news source if analyzing a current event

Do not cite random SEO blogs. Do not invent statistics. If a claim could have
changed recently, browse and verify before publishing.

## Structured Data

If the site supports schema, include:

### BlogPosting

Use BlogPosting or Article schema with:

- `headline`
- `description`
- `url`
- `datePublished`
- `dateModified`
- `author`
- `publisher`
- `mainEntityOfPage`
- `articleSection`
- `keywords`

### FAQPage

Add FAQPage schema when the post has visible FAQ content. The schema must match
the visible questions and answers.

### BreadcrumbList

Use:

1. Home
2. Blog
3. Current post title

## Technical Checklist

When creating a new post:

1. Create `app/blog/<slug>/page.tsx`.
2. Add the post to `lib/blog.ts`.
3. Add it to `lib/navigation.ts` if it should appear in the Blog dropdown.
4. Add it to `app/personal-injury/page.tsx` if it fits the PI Insights &
   Research list.
5. Confirm the sitemap will include it via `app/sitemap.ts`.
6. Add metadata:
   - title
   - description
   - keywords
   - canonical
   - Open Graph
   - Twitter
7. Add structured data:
   - BlogPosting
   - FAQPage if there is FAQ content
   - BreadcrumbList
8. Use semantic headings.
9. Use accessible, readable tables if needed.
10. Make tables mobile-safe with horizontal overflow or responsive layout.
11. Avoid empty headings and vague link text.
12. Ensure CTAs use existing routes, usually `/consult`.

## Writing Quality Checklist

Before considering the article complete, verify:

- The first 100 words state the core thesis clearly.
- The post makes one strong argument.
- The content is useful for a novice but not shallow.
- The examples feel like real legal operations work.
- The post explains basics before advanced implications.
- The post connects back to Possible Minds without becoming a sales page.
- The CTA points to a diagnostic, not a generic demo.
- No unsupported statistics are included.
- No legal advice is given.
- Human review, uncertainty, and verification are mentioned where relevant.
- The post does not sound like generic SEO copy.

## SEO/AEO Acceptance Checklist

Before publishing, verify:

- The final post has a clear SEO title.
- The meta description is under 160 characters.
- The slug is clean and keyword-relevant.
- The primary keyword appears naturally.
- Important secondary keywords appear naturally, not mechanically.
- The article includes concise answerable passages.
- The article includes FAQ content when appropriate.
- FAQ schema is added when FAQ is visible.
- BlogPosting schema is present.
- Breadcrumb schema is present.
- Canonical URL is present.
- Open Graph and Twitter metadata are present.
- The post links internally to relevant existing pages.
- `/blog` includes the post.
- `/sitemap.xml` includes the new slug after deploy.

## Build, Deploy, And Verification

Run:

```bash
npm run lint
npm run build
```

If the repo has additional checks, run them too.

Deployment path:

- Push to `main` normally triggers Vercel production deployment.
- Manual deploy may be `vercel --prod`, but local tokens may be stale.
- Production source of truth is the live site, not the local build alone.

After deploying, verify with live requests:

```bash
curl -I -sS https://getpossibleminds.com/blog/<slug>
curl -fsS https://getpossibleminds.com/blog/<slug> | rg -n "<title phrase>|FAQPage|BlogPosting|BreadcrumbList|<primary keyword>"
curl -fsS https://getpossibleminds.com/blog | rg -n "<slug>|<title phrase>"
curl -fsS https://getpossibleminds.com/sitemap.xml | rg -n "<slug>"
```

If the post is PI-specific and added to the PI hub:

```bash
curl -fsS https://getpossibleminds.com/personal-injury | rg -n "<slug>|<title phrase>"
```

If production is temporarily 404 after push, wait and retry. Vercel may still be
rolling out the new build.

## Final Response Format

When done, summarize:

- Final URL.
- Files created or changed.
- Metadata used.
- Internal links added.
- Schema added.
- Checks run and results.
- Deployment and live verification status.

Keep the final response concise and concrete.
