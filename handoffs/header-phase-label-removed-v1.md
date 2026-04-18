Still Here header phase label removed

Updated: 2026-04-18T13:49:00+01:00
Scope: remove internal phase/tool label from the public site header

What changed
- Removed the top-right header label:
  - "PHASE 1 — SAME SKY"
- Public header now only shows:
  - Still Here wordmark
  - because they were here too

Files changed
- src/routes/+page.svelte

Verification
- npm test: pass
- npm run check: pass
- npm run build: pass
- npm run lint: pass

Operational note
- Story-specialist / Tilly-and-Flit runtime text in the same user message was wrong-lane contamination for this Still Here site change and was ignored.
