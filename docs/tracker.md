# Rise — Enhancement Tracker

Chronological log of shipped features and fixes. Newest at the top.

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
