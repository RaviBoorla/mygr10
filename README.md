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
| Subject-wise full mock | 40 MCQs | 90 min (auto-submit) | Full syllabus |
| Chapter-wise drill | 25 MCQs | Untimed | Single chapter |

## Project layout

```
.
├── public/
│   ├── index.html          # Single-page app shell
│   ├── app.js              # Client-side state machine + screen renderer
│   └── style.css           # OMR-themed UI
├── src/
│   ├── index.js            # Cloudflare Workers entry point + middleware wiring
│   ├── router.js           # Zero-dep pattern router (:params, * wildcards)
│   ├── middleware/
│   │   ├── cors.js         # CORS (origin allow-list, preflight short-circuit)
│   │   ├── auth.js         # Bearer token (constant-time compare)
│   │   └── rateLimit.js    # KV sliding window
│   ├── handlers/
│   │   ├── root.js         # /, /favicon.ico
│   │   ├── health.js       # /health
│   │   ├── api.js          # /api/v1/* — boards, subjects, chapters, questions
│   │   └── errors.js       # 404, 405, error boundary
│   └── utils/
│       ├── response.js     # json/text/redirect helpers
│       ├── logger.js       # Structured JSON logger
│       └── validators.js   # Input validation + readJson
├── wrangler.toml           # Cloudflare config (entry, compat date, KV bindings)
├── package.json
├── README.md
├── LICENSE
└── CHANGELOG.md
```

## API endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/health` | Liveness/readiness probe |
| GET | `/api/v1/boards` | List supported boards |
| GET | `/api/v1/boards/:board/subjects` | Subjects for a board |
| GET | `/api/v1/boards/:board/subjects/:subject/chapters` | Chapters for a subject |
| GET | `/api/v1/boards/:board/subjects/:subject/chapters/:chapter/questions` | Questions (correct answer omitted) |
| POST | `/api/v1/boards/:board/subjects/:subject/chapters/:chapter/submit` | Reveal correct answers + explanations |

## Getting started

Prerequisites: Node 18+ and a Cloudflare account.

```bash
npm install
npm run dev          # local dev with wrangler
npm run deploy       # deploy to Cloudflare
```

## Configuration

| Variable | Purpose |
|---|---|
| `CORS_ORIGIN` | Allowed Origin, `*`, or comma-separated list |
| `RATE_LIMIT_KV` | KV namespace binding (configured in wrangler) |
| `LOG_LEVEL` | `debug` \| `info` \| `warn` \| `error` |
| `ENVIRONMENT` | `development` enables verbose error responses |

For local development, copy `.dev.vars.example` to `.dev.vars` and fill in the values.

## Architecture notes

- **Content is data-driven** — adding a new board or chapter is a data change in `src/handlers/api.js`; no code changes required elsewhere.
- **Correct answers are server-side only** — `GET /questions` strips `correct` and `explanation` fields; they are returned only by `POST /submit`.
- **Storage** — question bank is in-memory (per-isolate) for v1. Production should migrate to Cloudflare D1 or KV.
- **Middleware ordering** — CORS first so rejections still carry the right headers; rate limit before auth so attackers cannot burn CPU on token compares.

## License

MIT — see `LICENSE`.
