# Rise — Enhancement Tracker

Chronological log of shipped features and fixes. Newest at the top.

---

## Mobile responsive fixes — Cloé panel & auth dialog *(done)*

Surgical CSS-only changes to fix layout issues on phones:

- **Cloé header clear button hidden on mobile** — `.ai-header-left` was missing `min-width: 0`, causing it to overflow into `.ai-header-right` and physically cover the ↺ clear button underneath the badge. Added `min-width: 0` to the left group and `flex-shrink: 0` to the right group — the exact same pattern already used for `.hdr-left`/`.hdr-right` in the main app header.
- **Badge hidden on mobile** — changed `max-width: 140px` → `display: none` in the ≤520px media block. At full-width the truncated "provider · model" label is unreadable anyway and was stealing ~140px from the action buttons.
- **Touch targets raised** — `.ai-icon-btn` on ≤520px now has `min-width: 36px; min-height: 36px; padding: 8px` (up from ~23px height) for thumb-friendly tapping.
- **Auth/profile dialog safe area** — `max-height` now subtracts `env(safe-area-inset-bottom, 0px)` so the dialog bottom is not clipped behind the iPhone home-bar indicator (34px on iPhone 12–16).

---

## Cloé chat history sync + avatar photo fallback *(done)*

- **Cross-device chat sync** — added `aiHistory: 'rise-ai-history'` to `SYNC_KEYS` in `auth.js` so Cloé conversation history is pushed to / pulled from Firestore like progress and bookmarks. On login, `pullFromCloud` keeps whichever copy (cloud or local) has more messages and immediately loads it into `aiState.messages`. `aiSaveHistory()` now calls `riseSync.push()` after every AI reply so history reaches Firestore without waiting for a quiz submit.
- **Avatar photo fallback** — added `onerror` to the `<img>` in the `hdr-avatar` button: when the Google profile photo URL fails (common on mobile due to referrer/cookie policy differences) it replaces the broken image with the initial-letter `<span>` fallback instead of showing a broken icon.

---

## Cloé bug fixes — streaming LaTeX, symbol picker, profile z-index *(done)*

Three bugs fixed:

- **Streaming LaTeX shows as plain text** — during streaming, a chunk can end mid-expression (e.g. `$x = \frac{-9 \pm \sqrt{` with no closing `$`). `_splitMath` now checks the last text token for a trailing unclosed `$` or `$$` and trims it; the text reads cleanly until the closing delimiter arrives in the next chunk.
- **Symbol picker clears textarea** — `insertSym()` was reading `selectionStart/selectionEnd` after the button click caused the textarea to lose focus (Chrome resets these to 0 on blur). Fixed by saving cursor position on `mousedown` via `saveCursor()` before focus is lost; also added `type="button"` to all symbol `<button>` elements to prevent accidental form submission.
- **Profile popover hidden behind app header** — `#rise-profile-modal` had no CSS position/z-index rule, so the sticky app header (`z-index: 10`) painted over it. Added `position: fixed; inset: 0; z-index: 200` — same rules already present for `#rise-auth-modal`.
- **KaTeX late-load re-render** — if the KaTeX CDN script loads after `screen-ai.js` initialises (slow connection / first visit), an IIFE now attaches a `load` listener on the script element and calls `aiRenderMessages()` once KaTeX is available, replacing any `ai-math-fb` fallback spans with rendered math.

---

## CA & IT board papers 2022–2026 *(done)*

CBSE Grade X Computer Applications and Information Technology — real board past-paper questions added across all years 2022–2026 (one year per subject per commit to avoid context overflow):

### Computer Applications

| Year | MCQs added | SAs added | Notes |
|---|---|---|---|
| 2023 | 12 (ca-101–ca-112) | 7 (sa-ca-031–sa-ca-037) | New format, Section A MCQs + Section B SAs |
| 2024 | 12 (ca-113–ca-124) | 7 (sa-ca-038–sa-ca-044) | |
| 2025 | 12 (ca-125–ca-136) | 7 (sa-ca-045–sa-ca-051) | |
| 2026 | 12 (ca-137–ca-148) | 7 (sa-ca-052–sa-ca-058) | |
| 2022 | — | 7 (sa-ca-059–sa-ca-065) | Old format (1 hour, 25 marks) — no MCQ section |

**CA bank totals after:** 148 MCQs, 65 SAs

### Information Technology

| Year | MCQs added | SAs added | Notes |
|---|---|---|---|
| 2023 | 30 (it-136–it-165) | 16 (sa-it-056–sa-it-071) | New format (2 hrs, 50 marks) |
| 2024 | 30 (it-166–it-195) | 16 (sa-it-072–sa-it-087) | |
| 2025 | 30 (it-196–it-225) | 16 (sa-it-088–sa-it-103) | |
| 2026 | 28 (it-226–it-253) | 16 (sa-it-104–sa-it-119) | Q1 had 2 non-MCQ sub-questions (iii = short answer, v = fill-in-blank with no options) — only 28 MCQs instead of 30 |
| 2022 | — | 21 (sa-it-120–sa-it-140) | Old format (1 hr, 25 marks, 3 sections A/B/C) — no MCQ section |

**IT bank totals after:** 253 MCQs, 140 SAs

All questions tagged with `year`, correct answers, `explanation`, and `whyOthersWrong` (MCQs) or `modelAnswer` + `keyPoints` (SAs). Service worker bumped to `rise-shell-v10`.

---

## Grade XII — CBSE Economics Textbook Solved Exercises *(done)*

183 questions across both NCERT Economics books, extracted from the supplied PDF textbooks and worked with full solution steps:

- **Macroeconomics** (book 2, leec1xx): 67 questions across 6 chapters
  - Introduction 4, National Income Accounting 12, Money and Banking 11, Determination of Income and Employment 6, Government Budget and the Economy 15, Open Economy Macroeconomics 19
- **Microeconomics** (book 1, leec2xx): 116 questions across 5 chapters
  - Introduction 8, Theory of Consumer Behaviour 26, Production and Costs 30, Theory of the Firm under Perfect Competition 27, Market Equilibrium 25

Registered in `SOLVED_BANKS` in `config.js` (`'XII CBSE Economics': 'XII-CBSE-Economics-Solved'`). See `docs/inventory.md` → "Grade XII" for full per-chapter breakdown.

---

## Grade XII — Revision Notes (all subjects) *(done)*

Lazy-loaded `revision-data-xii.js` (separate from the Grade X `revision-data.js`) covering 10 CBSE Grade XII subjects — 98 chapters total:

| Subject | Chapters | Notes |
|---|---|---|
| Mathematics | 13 | Relations & Functions through Probability |
| Physics | 14 | Electric Charges through Semiconductor Electronics |
| Chemistry | 10 | Current reduced syllabus (Solutions through Biomolecules) |
| Biology | 11 | Chapters 3–13; ❌ Ch 2 (Sexual Reproduction in Flowering Plants) and Ch 3 wait — **Ch 1 & 2 PDFs not yet uploaded** |
| Computer Science | 12 | Python-based CBSE syllabus, all chapters |
| Informatics Practices | 6 | SQL Functions, Pandas I & II, Matplotlib, Internet & Web, Societal Impacts — from NCERT IP textbook |
| Economics (Micro) | 5 | Introduction through Government Budget |
| Economics (Macro) | 6 | National Income through Balance of Payments |
| Political Science | 14 (6+8) | CWP book + PISI book merged |
| Psychology | 7 | Variations in Psychological Attributes through Psychological Disorders |

Each chapter carries `formulae`, `logic`, `tips`, and `bestPractices` arrays — same schema as Grade X.

**Architecture:** `_ensureRevisionDataXII()` loads the base Grade X file first (for `window.REVISION`), then appends XII keys from the second file. Each key is prefixed `'XII '` so they cannot collide with Grade X keys.

**Bug fixed on ship:** `consolidatedChaptersXII()` was not adding `_boards` to merged chapters, causing `_chLabel()` to crash (`ch._boards.join is not a function`) and silently preventing any XII notes from rendering. Fixed by mirroring the `_boards` tracking logic from `consolidatedChapters()`.

**Tab rename:** "Comp App & IT" label in `NOTES_CATALOG` changed to "Computer Science" (`id` unchanged — NOTES_SOURCES still keys on `'Comp App & IT'` internally).

**Grade X revision notes (confirmed present):** Mathematics 19 ch (CBSE), 9 ch (ICSE), 4 ch (IB) · Science 13 ch · Social Science 20 ch · ICSE History 8 ch · ICSE Geography 8 ch · Physics 10 ch (ICSE) · Chemistry 10 ch (ICSE) · Biology 9 ch (ICSE) · English 14 ch · Hindi 51 ch · Computer Science/Applications/IT all present.

---

## Grade XII — ICSE Board Short Answers (Maths, Physics, Chemistry, Biology, Computer Science) *(done)*

Built from real ISC (the ICSE board's Class XII exam) past papers,
2017–2023, on the `g12` branch. ISC papers are entirely descriptive/
long-answer — no MCQ section at all, unlike CBSE or the ICSE Class X exam —
so this is a **Short Answers bank only**; Mock Test/Chapter Drill for these
subjects stay "coming soon" since there's no real MCQ content to source
them from (a curriculum-authored MCQ bank was considered and explicitly
declined in favour of staying board-paper-sourced).

- **Mathematics** — 140 questions, all 5 supplied years (`XII-ICSE-Mathematics-ShortAnswers.json`)
- **Physics** — 156 questions, 4 years, 2017 not in the supplied set (`XII-ICSE-Physics-ShortAnswers.json`)
- **Chemistry** — 150 questions, 4 years, 2017 not in the supplied set (`XII-ICSE-Chemistry-ShortAnswers.json`)
- **Biology** — 122 questions, 3 years — 2017 not supplied, 2023's file was a scanned PDF with no extractable Biology content (`XII-ICSE-Biology-ShortAnswers.json`)
- **Computer Science** — 153 questions, all 5 supplied years, Java-based ISC syllabus (`XII-ICSE-Computer-Science-ShortAnswers.json`)

All five registered in `SA_BANKS` in `config.js`. See `docs/inventory.md` →
"Grade XII" for full per-year/topic breakdowns and skip notes.

---

## Grade XII — CBSE Textbook Solved Exercises (Maths, Physics, Chemistry, Biology, Computer Science) *(done)*

Built on the `g12` branch: Grade XII CBSE now has a real "Textbook Solved
Exercises" bank for five subjects, extracted from the actual NCERT
textbook PDFs and worked with full solution steps (not just final answers),
same schema/process as the Grade X Solved banks:

- **Mathematics** — 943 questions, all 13 chapters (`XII-CBSE-Mathematics-Solved.json`)
- **Physics** — 158 questions, all 14 chapters (`XII-CBSE-Physics-Solved.json`)
- **Chemistry** — 268 questions, all 10 chapters (`XII-CBSE-Chemistry-Solved.json`)
- **Biology** — 135 questions, 11 chapters supplied (`XII-CBSE-Biology-Solved.json`)
- **Computer Science** — 122 questions, 12 of 13 chapters (`XII-CBSE-Computer-Science-Solved.json`)

All five registered in `SOLVED_BANKS` in `config.js`. See `docs/inventory.md`
→ "Grade XII" for full per-chapter breakdowns and skip notes.

Also as part of this branch: `SUBJECTS` restructured from `{board: [...]}`
to `{grade: {board: [...]}}` so Grade X and Grade XII can show different
subject lists per board (Grade XII CBSE/ICSE both currently list
Mathematics, Physics, Chemistry, Biology, Computer Science — more subjects
to follow); the "XII Board" grade tab, previously disabled with a "Coming
soon" tooltip, is now selectable.

Not yet done at the time: Grade XII MCQ banks, Short Answers banks, and any
ICSE Grade XII content — since superseded by the ICSE Board Short Answers
entry above. Still outstanding: Grade XII MCQ banks (Mock Test/Chapter
Drill) for any subject/board, and CBSE Grade XII Short Answers banks.

---

## Arena — new subjects available for Free Run / Daily Challenge *(done)*

Added to `ARENA_SUBJECTS` in `arena.js` (shared by Free Run subject picker
and the Daily Challenge, since both draw from the same config):

- **CBSE:** Computer Applications and Information Technology, each selectable
  as its own subject (not merged)
- **ICSE:** Computer Science

All three already carry a `difficulty` field on every question, so they
slot straight into the existing easy/medium/hard stage system with no
further changes needed.

---

## Computer Applications — Scratch & Python chapter added *(done)*

Unit 4 of the Computer Applications textbook (Scratch block-based programming
+ Python basics) was missing from the initial CA rollout — added across all
three relevant surfaces:

- **Mock Test / Chapter Drill:** 20 new MCQs (`ca-081`–`ca-100`) covering
  Scratch (sprites, costumes, backdrops, blocks: motion/looks/events/control/
  sensing/variables, broadcast) and Python (print/input, data types,
  operators, if-elif-else, for/while loops, functions) — CA MCQ bank now 100
  questions total
- **Textbook Solved Exercises:** 10 new conceptual/code Q&A
  (`sol-ca-026`–`sol-ca-035`) — CA Solved bank now 35 total
- **Revision Notes:** new "Scratch & Python" chapter added to
  `REVISION['Computer Applications']`
- Note: this unit is not in the official CBSE 165 theory syllabus (which
  covers only Networking/HTML/Cyber ethics) but is included per the
  textbook's supplementary "with Scratch & Python" content, per user request

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
