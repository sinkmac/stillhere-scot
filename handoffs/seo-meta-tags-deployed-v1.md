Still Here SEO meta tags deployed

Updated: 2026-04-18T10:52:48+01:00
Scope: site-wide head metadata pass

What changed

- Added shared head metadata for every page via src/routes/+layout.svelte
- Added:
  - title: Still Here — Same Sky
  - meta description
  - og:title
  - og:description
  - og:image
  - og:url
  - og:type
  - canonical link
  - robots meta
- Removed conflicting page-specific title/description tags from:
  - /
  - /about
  - /privacy
- Added static OG image asset:
  - /og-image.svg
- Added SEO constants/tests:
  - src/lib/site-seo.ts
  - src/lib/site-seo.test.ts

Verification

- npm test: pass
- npm run check: pass
- npm run build: pass
- npm run lint: pass

Deployment note

- This artifact records the SEO pass only. About/privacy deployment was handled in its own earlier artifact.
