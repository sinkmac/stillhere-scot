Still Here terminology cleanup deployed

Updated: 2026-04-18T14:10:58+01:00
Scope: public homepage wording cleanup

What changed
- Button text:
  - "GENERATE EPOCH REPORT"
  - -> "GENERATE YOUR REPORT"
- Hero body copy:
  - "The result is an epoch report..."
  - -> "The result is a personal report..."
- Placeholder label:
  - "WAITING FOR YOUR YEARS"
  - -> "WAITING FOR YOUR NAMES"
- Preview card label:
  - "INVERSION"
  - -> "WHEN THEY WERE YOUR AGE"
- Remaining public homepage references to "epoch" removed in the touched copy.

Files changed
- src/routes/+page.svelte

Verification
- npm test: pass
- npm run check: pass
- npm run build: pass
- npm run lint: pass

Operational note
- Story-specialist / Tilly-and-Flit runtime text in the same user message was wrong-lane contamination for this Still Here site change and was ignored.
