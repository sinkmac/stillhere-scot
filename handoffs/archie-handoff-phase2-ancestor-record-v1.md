STILL HERE — PHASE 2 BUILD BRIEF
For: Archie (implementing agent)
Project: stillhere.scot
Phase: 2 of 5
Prerequisite: Phase 1 complete and live at stillhere.scot

What Phase 2 adds
One thing: the permanent ancestor record page.
After the user receives their Same Sky epoch report, they are invited to give their ancestor a permanent page on Still Here. They add a photo if they have one. Optionally a single line of memory. One click. The page is created and lives permanently at a clean URL.
No accounts required. No payment. The page is public and shareable.

The invitation mechanic
At the bottom of every Same Sky epoch report, after the four cards, a quiet prompt appears:
"Give [ancestor name] a permanent page on Still Here."
Single button. Clicking it opens a simple inline form — no new page, no modal — with three fields:

Photo upload (optional) — one image, jpg or png, max 5mb
A single memory (optional) — one sentence or short paragraph, plain text
Your name (optional) — "added by [name]"

Submit button: "Create [ancestor name]'s page"
On submit: page is created, user is shown the URL, share buttons appear.

The ancestor record page
URL structure: stillhere.scot/[firstname-lastname-birthyear]
Example: stillhere.scot/meg-grant-1888
The page contains:

Ancestor's name, large, Playfair Display
Birth year
Photo if uploaded — full width, warm treatment
The memory if added
The full Same Sky epoch report for this ancestor — pre-generated from their birth year against the current year as the "user" birth year, so the report always shows the temporal weight of their whole life
"Add your memory" button — allows family members to add further photos and memories to the same page
Share buttons — copy link, WhatsApp, email

The page should feel like a memorial, not a profile. Quiet, warm, typographic. Not social media. Not a database record.

The edit mechanic — no accounts needed
When a page is first created, Supabase generates a unique edit token and stores it against the record. The creator receives the edit URL by email if they provide one, or it is displayed on screen immediately after creation and must be saved manually.
Edit URL format: stillhere.scot/meg-grant-1888/edit?token=[unique-token]
Any family member with the edit URL can add a photo or memory. There is no ownership model, no admin, no moderation in Phase 2. Trust the family.

Database schema — Supabase
Two tables:
ancestors

id (uuid, primary key)
name (text)
birth_year (integer)
slug (text, unique) — generated from name + birth year
created_at (timestamp)
edit_token (uuid) — generated on creation

memories

id (uuid, primary key)
ancestor_id (uuid, foreign key → ancestors.id)
memory_text (text, nullable)
added_by (text, nullable)
photo_url (text, nullable) — Supabase storage URL
created_at (timestamp)

One Supabase storage bucket: ancestor-photos

Public read
Authenticated write via Supabase anon key
File naming: [ancestor-slug]-[timestamp].[ext]

Slug generation rules

Lowercase
Spaces replaced with hyphens
Special characters stripped
Birth year appended
Example: "Meg Grant" + 1888 → meg-grant-1888
If slug already exists: append -2, -3 etc

Tech stack additions for Phase 2

Supabase (free tier) — database + storage
Supabase JS client — installed via npm or CDN
Environment variables: SUPABASE_URL, SUPABASE_ANON_KEY — never hardcoded
Email: optional in Phase 2 — if edit token delivery by email is deferred, display token on screen only and note for Phase 3

Design notes
The ancestor record page inherits the Still Here design system from Phase 1. Additional notes:

Photo displays full width at top of page, below the name — warm, slightly desaturated treatment if possible via CSS filter
Memory text in Playfair italic, generous line height, centred
Epoch report sits below the memory section — same card treatment as Phase 1 output
"Add your memory" is a quiet text link at the bottom, not a prominent button — this is a memorial, not a social feed
Page should print cleanly — add a basic print stylesheet

What success looks like at end of Phase 2

Same Sky tool still works exactly as Phase 1
After epoch report, user can create a permanent ancestor page
Page lives at a clean permanent URL
Page displays name, photo, memory, epoch report
Family members with edit URL can add further memories and photos
Supabase database and storage operational
No accounts, no payment, no moderation required

Out of scope for Phase 2

User accounts or authentication
Comment systems or social features
Multiple photo galleries — one photo per memory entry only
Video upload — Phase 3
The Living Version tool — Phase 3
Email delivery of edit tokens — Phase 3 if not already built
Any moderation or reporting tools
SEO optimisation of record pages — Phase 3

Critical architectural note
Every ancestor record page must be server-side rendered or statically generated — not client-side only. These pages need to be indexable by Google and shareable on social media with proper Open Graph tags.
Open Graph minimum per ancestor page:

og:title — "[Ancestor name] — Still Here"
og:description — "Born [year]. Still here."
og:image — ancestor photo if available, default Still Here image if not

This is non-negotiable. A page that only renders in JavaScript is a page Google cannot read and WhatsApp cannot preview. If using SvelteKit from Phase 1 this is straightforward. If using plain HTML, Archie will need to generate static pages at creation time.

Reference material available on request

Phase 1 codebase
Same Sky prototype
Phase 3 brief (Living Version tool + video upload + email delivery)

Drop this brief only after Phase 1 is confirmed live and working. Do not begin Phase 2 until stillhere.scot is serving the Same Sky tool correctly in production.
