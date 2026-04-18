Still Here epoch-report ancestry CTA deployed

Updated: 2026-04-18T12:10:46+01:00
Scope: main-page epoch report CTA after the four cards

What changed
- Added a quiet text CTA beneath the four epoch cards on the main page.
- Copy:
  - "Curious about [ancestor name]'s records? Search the world's largest family history archive →"
- Link target:
  - https://www.ancestry.co.uk
- Behavior:
  - opens in a new tab
- Styling:
  - small
  - muted
  - text-link only
  - aligned to the existing footer aesthetic

Files changed
- src/routes/+page.svelte
- src/app.css

Verification
- npm test: pass
- npm run check: pass
- npm run build: pass
- npm run lint: pass

Operational note
- Story-specialist / Tilly-and-Flit runtime text in the same user message was wrong-lane contamination for this Still Here site change and was ignored.
