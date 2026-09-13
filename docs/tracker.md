# Rise — Enhancement Tracker

Chronological log of shipped features and fixes. Newest at the top.

---

## Arena — How-to-play popover fixes *(done)*

- Widened `.arena-how-modal` by 40% (420px → 588px, still capped at `min(…, 92vw)` so it stays responsive on mobile)
- Header (title + close button) is now sticky at the top of the popover: content was split into `.arena-how-modal-header` (fixed, bottom border) and a new `.arena-how-modal-body` wrapper that scrolls independently
- Fixed a regression from the sticky-header change: giving `.arena-how-modal` `display:flex` had overridden the browser's default `[hidden]{display:none}` rule, leaving the popover stuck open on Arena load with a non-functional close button — fixed with an explicit `.arena-how-modal[hidden]{display:none}` override

---

## Career Pathing — Home button *(done)*

- Added a standard `btn ghost home-btn` (⌂ Home — same markup/style used in Arena, legal pages, and the progress screen) to the Career Pathing toolbar, right-aligned via `margin-left:auto` so it lines up under the header's Sign-in button
- On screens ≤640px it drops to the end of the wrapped toolbar row via flex `order`
- Toolbar height is already recalculated dynamically on resize (`syncChromeHeight()` in `careers.js`), so the extra button doesn't cause any overlap with the tree canvas below at any breakpoint

---

## CBSE Computer Applications & Information Technology *(done)*

Added as two new CBSE subject cards (one each), fully wired through the existing config-driven architecture — no new screens needed:

- **Computer Applications (165):** 80 MCQs (Networking 30, HTML 35, Cyber ethics 15), 30 Board Short Answers, 25 Textbook Solved Exercises
- **Information Technology (402):** 135 MCQs across the 5 subject-specific units (Intro to IT-ITeS, Data Entry & Keyboarding, Digital Documentation, Electronic Spreadsheet, Digital Presentation) plus the 5 shared "Employability Skills" units (Communication, Self-Management, ICT, Entrepreneurial, Green Skills) per the IT-402 Part A curriculum; 55 Board Short Answers, 45 Textbook Solved Exercises
- Mock Test, Chapter Drill, Board Short Answers, and Textbook Solved Exercises all enabled automatically via `BANKS`/`SA_BANKS`/`SOLVED_BANKS` entries in `config.js`
- Revision Notes: added `REVISION['Computer Applications']` (3 chapters) and `REVISION['Information Technology']` (10 chapters), original content authored from the public CBSE syllabi (not transcribed from any textbook)
- Renamed the existing "Comp Sci" Revision Notes tab to **"Comp App & IT"**, consolidating it with the two new CBSE subjects via `NOTES_SOURCES`/`NOTES_CATALOG` — the underlying ICSE Computer Science exam subject, its question bank, and its own `REVISION['Computer Science']` entry are untouched
- All content authored fresh from the public CBSE syllabi and calibrated against real board papers (2022–2026 CA, 2024–2026 IT) for style/difficulty — no content transcribed from copyrighted textbooks or exam papers
- See `docs/inventory.md` for full per-subject/per-chapter breakdowns

---

## AI Chat — Cloé *(done)*

Floating AI chat panel powered by Cloudflare Workers AI (free tier).

- **Name:** Cloé — a warm, witty French study companion persona
- **Entry point:** "✦ Cloé" button in the app header, visible only when signed in
- **Panel:** right-side drawer, 36% wide on desktop, bottom sheet on mobile (≤520px)
- **Grounding:** queries Rise's revision KB (`window.REVISION`) — top-3 matching chapters injected as system-prompt context; off-topic questions are politely declined
- **Persona / tone:** Socratic — 2–4 sentences per answer, ends every reply with a curiosity-provoking question, uses emojis naturally, reacts to humour
- **Providers:** Cloudflare AI (default, free), Anthropic, OpenAI, Gemini, Grok, Mistral, DeepSeek, Ollama — selectable via gear icon in panel
- **Model field:** open text input (not a dropdown) so any model ID can be typed
- **Streaming:** newline-delimited JSON from `functions/api/chat.js` (Cloudflare Pages Function)
- **Default model:** `@cf/meta/llama-3.3-70b-instruct-fp8-fast` (updated from deprecated llama-3.1-8b)
- **Actions:** Copy button (⧉) to the right of each AI bubble; Retry icon (↺) beside last user message
- **Emoji picker:** 😊 toggle in input bar opens a 20-emoji tray; inserts at cursor
- **Scroll containment:** `overscroll-behavior: contain` on message area — page behind doesn't scroll
- **Config persistence:** provider/model/key saved to `localStorage` (`rise-ai-config`)
- **Chat history:** last N turns saved to `localStorage` (`rise-ai-history`)
- **Config panel:** gear icon inside panel; fully opaque (`var(--surface)`) background

---

## Cache-busting *(done)*

- Cloudflare `_headers` file: `no-cache, must-revalidate` on all HTML/JS/CSS/JSON assets
- Service Worker bumped to `rise-shell-v4` to evict stale PWA cache on clients
- All key files versioned in `index.html` query strings (e.g. `style.css?v=60`)

---

## Welcome screen tagline update *(done)*

- "free, no login." → "free. Sign-in optional." (reflects optional auth)
- Arena description updated to mention live challenge rooms

---

## Home screen cleanup *(done)*

- Removed redundant sign-in callout card (header already has sign-in button)
- Removed subtitle text listing subjects from both CBSE and ICSE home screens

---

## Privacy Policy & Terms — global standard *(done)*

Privacy Policy expanded to 12 sections covering:
- Optional sign-in and optional profile info (display name, country, city for Arena)
- GDPR, CCPA, DPDPA rights (erasure, portability, opt-out)
- Data sharing: Google OAuth + Cloudflare only
- Children's privacy (age 13/16 thresholds)
- International transfers, data retention, contact & complaints

Terms & Conditions expanded to 15 sections covering:
- Eligibility (age 13/16), prohibited conduct, IP, UGC (Arena), third-party services
- Limitation of liability (INR 1,000 cap), indemnification
- Governing law: Bengaluru courts with EU/UK carve-out

---

## Revision Notes — mobile layout fix *(done)*

On screens ≤520px the grade/home buttons (`.rev-heading-right`) now appear **above** the subject tabs via CSS `order: -1` on the flex container. Desktop layout unchanged.

---

## Wrangler.toml AI binding fix *(done)*

- Corrected `[[ai]]` (array-of-tables) → `[ai]` (object) — Cloudflare build was failing
- Added `[env.preview.ai]` and `[env.production.ai]` so the binding is available in both named environments
