# Search indexing audit - October 7, 2026

## Observed baseline

- Search Console screenshot last updated October 4 reports 12 duplicate URLs,
  10 redirect URLs, 2 missing URLs, 1 canonical alternate, and 12 crawled but
  unindexed URLs. These are categories, not necessarily 37 technical defects.
- Of the 10 supplied duplicate examples, 7 are Possible OS login URLs on
  autocaller.getpossibleminds.com, including next= query variants. They return
  200 without noindex. This application should not be indexed.
- The three supplied public examples (/thesis,
  /services/trialworks-migration, /blog/the-real-reason-ai-evals-matter)
  currently return 200 with correct self-referencing canonical tags in the head.
  Their tracking-parameter variants use the clean canonical as expected.
- All 79 sitemap targets return 200 with matching canonicals. No internal page
  link discovered in their server-rendered HTML points outside that set.
- /admin and the historically removed /contact return 404; current equivalents
  are /admin/engagement and /consult. These have not been confirmed as the two
  URLs in Google's 404 report.
- The outreach tool is incorrectly included in the public sitemap; admin and
  outreach pages lack explicit search exclusion.
- HTTPS www.getpossibleminds.com fails certificate verification. The presented
  certificate expired April 18, 2026. A diagnostic request bypassing validation
  shows a Vercel 307 redirect to the apex. The apex HTTPS domain works normally.

## Changes

- Added noindex metadata and response headers to admin and outreach pages.
- Removed the outreach tool from the sitemap. Public content remains indexable.
- Added permanent /contact -> /consult and /admin -> /admin/engagement redirects.
- Made the thesis and AI evals article canonical declarations explicit instead
  of relying solely on the currently functioning inherited canonical.
- Added `npm run seo:audit`, covering sitemap HTTP status, head canonicals,
  noindex exclusions, tracking variants, internal links, and legacy redirects.
- Possible OS changes are in its separate repository: nginx frontend noindex,
  crawler-accessible robots.txt, and matching Next metadata for future builds.

## Follow-up requiring account access or additional evidence

1. In Vercel project webnew, inspect the www domain, restore a valid certificate,
   and make the apex redirect permanent (308). This environment has no Vercel
   credential. DNS currently points www at Vercel. An application redirect cannot
   repair a TLS failure that occurs before HTTP is reached.
2. Inspect/export the actual two 404 URLs and 12 crawled-unindexed URLs. Do not
   redirect unknown/deleted pages to unrelated content simply to clear a report.
3. Run live URL Inspection for the three public duplicate examples; compare the
   user-declared and Google-selected canonicals, request indexing, and validate
   the fix after deployment. Google must recrawl before report counts change.
4. Keep normal redirects and canonicalized tracking variants excluded. Their
   destination pages, rather than every alternate URL, should be indexed.

## Repeatable verification

```bash
npm run seo:audit -- --output /tmp/possibleminds-indexing.json
npm run seo:audit -- --check-www
```

The second command intentionally reports the unresolved www TLS/redirect issue
until it is repaired. For local build checks, pass `--base http://127.0.0.1:PORT`.
Passing this audit establishes technical eligibility, not guaranteed indexing.

Google references:
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://support.google.com/webmasters/answer/7440203

## Crawled but not indexed examples

The subsequent export includes eight article URLs and two assets (favicon and
font), rather than all twelve reported URLs. Assets do not need standalone
search-result indexing. The supplied article crawl dates are in July/August;
they do not establish Google's current view of the October site.

The eight articles currently return 200, are indexable, have self-canonicals,
appear in the sitemap, and are linked from the blog listing. No technical
indexing blocker was found for those URLs. Improvements in this change:

- Shared explicit article metadata, clean canonicals, and publication dates
  drawn from the existing blog registry, without refreshing historical dates.
- BlogPosting and breadcrumb structured data with an author profile link.
- Topic-relevant, server-rendered related-reading links on all eight articles.
- More descriptive metadata summaries without unsupported promotional claims.
- Regression checks for article schema and social metadata in `seo:audit`.

These changes improve interpretation and discovery; they do not guarantee
indexing or establish why Google previously excluded the articles. A separate
editorial evidence review remains advisable: the AI ownership article's 80%
ROI statistic and the lien article's 563-negotiation dataset need traceable
sources/methodology. No dataset or source verification is implied by this patch.

After deployment, use Search Console live URL Inspection on the eight articles,
request indexing for the priority pages, and monitor recrawls. Obtain the two
remaining examples and the exact 404 report URLs before making further fixes.

Article schema guidance:
https://developers.google.com/search/docs/appearance/structured-data/article

Validation: ESLint and the production build pass. The local production audit
checks 78 sitemap URLs and 78 internal paths without errors. Playwright checks
all eight updated articles at 390px and 1440px widths (16 checks): one H1,
two related links, no horizontal overflow, and matching article/related-reading
alignment. Desktop and mobile screenshots were also inspected.
