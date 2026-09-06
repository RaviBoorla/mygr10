# Mygr10

A practice and self-assessment app for Indian Grade 10 students preparing for
board examinations. Students drill the MCQ (OMR bubble-sheet) format used by
their board so they walk into the exam hall familiar with the timing, layout,
and question style.

## Supported boards

- **CBSE** — Central Board of Secondary Education
- **ICSE** — Indian Certificate of Secondary Education
- **IB Diploma** — International Baccalaureate (MYP-5 / pre-DP level)

## Practice modes

| Mode | Questions | Time | Coverage |
|---|---|---|---|
| Full mock test | 49 MCQs | 40 min (auto-submit) | Whole subject |
| Chapter drill | up to 25 MCQs | Untimed | One chapter |
| Short Answers (VSA/SA) | Self-paced, self-assessed | Untimed | One chapter or all |

Mock and drill are started from the home screen — a mock is one click, a
chapter drill is two (subject → chapter). Revision notes and Short Answers for
a subject are one click from the same card, where a bank exists.

## Project layout

```
.
├── public/
│   ├── index.html          # Single-page app shell
│   ├── app.js              # Revision content + hash router + screen renderer
│   ├── style.css           # OMR-themed UI
│   ├── careers.html        # Career Pathing standalone page
│   ├── manifest.json, sw.js, icons/, .well-known/  # PWA / installability
│   └── questions/*.json    # Client-side question banks (MCQ + Short Answers, one pair per subject)
├── docs/                   # Design log, content inventory, feature specs
├── wrangler.toml           # Cloudflare Pages config (static site deploy)
├── package.json
├── README.md
├── LICENSE
└── CHANGELOG.md
```

Everything the app needs at runtime lives under `public/` and is served as a
static site — there is no backend API. Question banks are plain JSON fetched
directly by the client; grading, progress, bookmarks and streaks are computed
client-side and persisted to `localStorage`.

## Getting started

Prerequisites: Node 18+ and a Cloudflare account (for deployment only — no
account is needed to run the app locally).

```bash
npx serve public        # or any static file server
```

Deployment is a static Cloudflare Pages project (`pages_build_output_dir =
"public"` in `wrangler.toml`) — no build step, no server-side code.

## Client behaviour

- **Hash routing** — every screen has a URL (`#/home`, `#/notes/Mathematics/5`),
  so the browser Back button, refresh and shared links all work.
- **Board is remembered** — chosen once, kept in `localStorage`, changed from the
  header select without losing where you are.
- **In-progress tests survive** — answers, marks and the remaining time are
  written to `localStorage` on every change, so leaving or reloading offers a
  Resume rather than losing the attempt.
- **Keyboard-first test taking** — `A`–`D` / `1`–`4` answer, `←` `→` move,
  `M` marks for review, `Enter` advances; answering auto-advances by default.
- **No fabricated questions** — a subject without a bank is labelled
  "coming soon" and a failed load shows an error, never placeholder answers.

## License

MIT — see `LICENSE`.
