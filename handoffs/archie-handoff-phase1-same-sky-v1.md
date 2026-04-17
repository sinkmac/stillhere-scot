ARCHIE HANDOFF PROMPT — STILL HERE PHASE 1

Drop this into Archie as the opening message. No preamble needed.

New project. No prior context. Read the full brief before doing anything.

Project: Still Here
URL: stillhere.scot
Phase: 1 — single tool, no database
Task: Build and deploy the Same Sky tool

What Same Sky does

User enters four fields: their name, their birth year, an ancestor's name, an ancestor's birth year. They click one button. They receive an epoch report — a set of emotional cards showing the relationship between their life and their ancestor's life, anchored to real historical events.

No accounts. No database. No API calls. Pure JavaScript logic against a hardcoded events array. One page, one button, one output.

The output — build this exactly

Three stat cards at the top:

- Years between births
- Ancestor's age when user was born
- How old ancestor would be today

One visual timeline bar:

- Ancestor's life span (purple)
- User's life span (teal)
- Overlap period (coral/orange)
- Year labels beneath

Four epoch cards in sequence:

Card 1 — ancestor's birth world
"[Ancestor name] was born into a world where [event]."

Card 2 — the simultaneity moment
"When you were born, [ancestor] was [X] years old. [Event from that year]."

Card 3 — the inversion (emotional centrepiece)
"[Ancestor] was your exact age now in [year]. [Event from that year] — that was their present moment."

Card 4 — today
"Every year you live now is territory [ancestor] never walked."

Historical events array

Build an array of 50–60 world historical events covering 1800–2020. Each entry: year + one plain-voice sentence. Tone target: "The Great War began. An entire generation of young men walked into the trenches." Not encyclopaedia style. Human voice throughout. Spread coverage evenly across the full date range — don't cluster around the 20th century.

Tech stack

- Single HTML file or SvelteKit — your call based on Phase 2 requirements
- No database in Phase 1
- No external API calls
- Host on Netlify, deploy from GitHub
- Domain: stillhere.scot — currently on IONOS, DNS needs pointing to Netlify

Design spec

Fonts: Playfair Display (display text, output cards) + DM Mono (UI labels, interface). Load from Google Fonts.

Colours:

- Background: #faf9f6 (warm paper)
- Text: #1a1a18 (ink)
- Muted text: #9a9a94
- Borders: #e8e6e0
- Dark mode: full support required

Logo treatment: Still Here — regular weight on "Still", italic on "Here"
Tagline: because they were here too

Output cards: Playfair italic, warm paper background, thin border, staggered fade-in on load. Must feel screenshot-worthy. Mobile-first.

Timeline bar: three colour segments (purple ancestor / teal user / coral overlap), year labels, clean legend beneath.

URL architecture — Phase 1 only

stillhere.scot — the Same Sky tool, full page

Do not build anything else. But architect cleanly for Phase 2 additions:

- stillhere.scot/[ancestor-slug] — permanent record pages
- stillhere.scot/living — The Living Version tool

Critical note on existing site

The current stillhere.scot contains a prior commercial product — kit sales, vault cards, physical editions. That product is parked. Phase 1 replaces the entire site completely. Do not preserve or integrate any existing content, structure, or architecture.

Success criteria for Phase 1

- Tool live at stillhere.scot
- Works on mobile and desktop
- Generates complete epoch report from two names and two birth years
- Output feels emotional not functional
- Page loads under 2 seconds
- Codebase ready for Phase 2 Supabase integration

Out of scope — do not build

- User accounts
- Database or file storage
- Photo upload
- Permanent ancestor record pages
- Any other tools (Living Version, Family Chain, etc.)
- Payment, kits, or vault mechanic
- Anything from the existing site

Reference material available on request

- Working interactive prototype of the Same Sky tool (design and logic reference)
- Historical events array starter (15 events — expand to 50–60)
- Phase 2 brief (Supabase integration + permanent record pages)

Begin with the historical events array. Get that right first — the tone of those sentences is the tone of the whole product.
