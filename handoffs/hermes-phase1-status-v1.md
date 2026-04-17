Still Here — Hermes Phase 1 status

Updated: 2026-04-17

What was built

- SvelteKit Phase 1 implementation of the Same Sky tool in this project directory.
- Pure client-side epoch report generation with no database and no external API calls.
- Historical events array expanded to 55 entries spanning 1804–2020 in a human, plain-voice tone.
- Mobile-first one-page interface with dark mode, Google Fonts, stat cards, visual timeline, and four staggered epoch cards.
- Unit-tested report logic separated into reusable library modules for a cleaner Phase 2 extension path.

Architecture notes

- Stack chosen: SvelteKit with the Netlify adapter.
- Root route is prerendered for fast delivery in Phase 1, while the code structure leaves room for future slug routes and Supabase-backed record pages in Phase 2.
- Timeline currently uses an estimated lifespan fallback for the ancestor bar because Phase 1 only collects birth years. The code is structured so a real death year can replace the estimate later.

Verification completed

- npm run lint
- npm run check
- npm test
- npm run build
- npm run preview verified locally with curl on http://127.0.0.1:4173

Deployment status

- Netlify CLI reached via npx, but deployment is blocked by authentication.
- Netlify CLI response: "Not logged in. Please log in to see project status."
- GitHub CLI is also unauthenticated on this machine.
- No deployment or DNS change was possible from the current credential state.

Key files

- src/routes/+page.svelte
- src/routes/+page.ts
- src/routes/+layout.svelte
- src/app.css
- src/app.html
- src/lib/data/historical-events.ts
- src/lib/report/same-sky.ts
- src/lib/report/same-sky.test.ts
- netlify.toml

Caveats

- The scaffold's default vitest example files remain present because removal via tool-side file deletion was blocked in this session. They do not affect the build.
