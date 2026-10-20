# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- XII CBSE Mathematics 2026: 68 MCQs and 57 short answers re-transcribed from
  the question papers with real answer keys and model answers (the old
  extraction had every MCQ keyed to A and placeholder solutions).
- Mocks, drills and assignments shuffle answer options (most banks keyed the
  right answer to option A).
- Cloé's knowledge base now searches question banks, revision notes and the
  career tree, and includes the actual answers in its excerpts.
- Career Pathing: listeners no longer stack per visit or throw on resize;
  chevron direction; stray markup. `careers.html` redirects to the app.
- Unreadable PDF-extracted XII CBSE Maths questions are hidden.

### Added
- Arena redesign: game-style stage, richer HUD, score pops, keyboard play,
  auto-pause on tab switch, new interstitial / results / setup layouts.
- XII CBSE Information Technology MCQ and Short Answers banks.
- Career Pathing: clickable detail links, keyboard navigation, empty search
  state, pinch/ctrl-wheel zoom, mobile auto-scroll.

### Removed
- Unused Cloudflare Workers API scaffold (`src/`: router, CORS/auth/rate-limit
  middleware, logger, example `/api/v1/*` endpoints) — never wired into the
  live app, which fetches question banks as static JSON directly from
  `public/questions/`. Trimmed the matching references from `package.json`,
  `wrangler.toml`, and `README.md`.

### Added
- Practice modes: timed full mock test, untimed chapter drill, and untimed
  self-assessed Short Answers (VSA/SA), across CBSE, ICSE and IB Diploma.
- Progress tracking, bookmarks, spaced-repetition (Leitner) review queue, and
  study streaks — see `docs/design.md` for the full feature log.
