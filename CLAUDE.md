# CLAUDE.md

Guidance for Claude Code (and other agents) working in this repository.

## Git identity

Commit author for all commits in this repository must be:

```
ravi.boorla@gmail.com
```

Set it once per clone:

```
git config user.email "ravi.boorla@gmail.com"
git config user.name "ravi.boorla"
```

Do not commit as "Claude" or any other identity. This applies to every branch,
including feature branches created by an agent.

## Project shape

Mygr10 is a static, client-only PWA (no backend) for Grade 10 board-exam
practice. Everything lives under `public/`:

- `public/index.html` — page shell, loads `public/app.js` as a plain script.
- `public/app.js` (~4700 lines) — hash router, all screens, question-bank
  loading (`BANKS`/`SA_BANKS`/`SOLVED_BANKS`), Leitner spaced-repetition,
  streak/daily-goal tracking, results-review rendering. This file is large;
  prefer adding a new sibling file over appending to it further (see
  `docs/arena.md` constraint #1 for a precedent — `public/arena.js`).
- `public/questions/*.json` — one MCQ bank + one Short-Answers bank per
  subject, fetched client-side.
- `docs/` — design log (`design.md`), content inventory (`inventory.md`),
  feature specs (e.g. `arena.md`) written *before* implementation. Read the
  relevant spec in `docs/` before building a feature described there.

All grading, progress, bookmarks, and streaks are computed client-side and
persisted to `localStorage`, keyed per `grade::board` so different
grade/board combinations don't share progress.

## Branching

Always commit and push directly to `main`. Never push to a feature branch.

## Working conventions

- No build step, no bundler, no framework — plain HTML/CSS/JS. Keep new code
  in that style unless a doc explicitly asks otherwise.
- Follow `docs/*.md` specs as the source of truth for feature behavior; they
  are written as "agreed design, implement against it".
- Update `docs/design.md`'s "Enhancement ideas" log when a listed item is
  completed, matching its existing terse `*(done)*` / `*(in progress)*` style.
- Cloudflare Pages serves `public/` directly (`wrangler.toml`); there is no
  server-side code to keep in sync.
