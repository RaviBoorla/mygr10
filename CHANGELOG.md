# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Revision notes: each formula now says what its symbols mean ("where v =
  image distance, u = object distance, f = focal length"), across Maths,
  Science, Physics, Chemistry, Biology and Economics for Class X and XII.
- Rough Pad for working out on touch screens: a "Rough Pad" button in tests,
  Board Short Answers and short-answer assignments opens a drawing pad (pen
  pressure, colours, thickness, eraser, undo, white/black background), with
  a page per question.
- One class at a time: pick board + class on the welcome screen; change it in
  Profile (or the header class chip). Grade tabs and the board switcher are
  gone. A child's class follows them into family links, so a parent's
  assignment form uses the child's current class. Existing users confirm
  their class once.
- Assignments come in three kinds: MCQs, Short answers (child answers online,
  parent marks by hand or with Cloé against the model answer) and a print-only
  Board paper weighted toward high-yield chapters, with an answer-key PDF for
  the parent. MCQ and short-answer assignments can cover several chapters.
- Parents can open the child's answered paper for any MCQ assignment (their
  answer vs the right one, with explanations); marked short answers show the
  child marks per question and a total percentage.

### Fixed
- Assignments open in the grade/board the parent set them for, even when the
  child is on another grade or board tab (they used to load the wrong bank:
  "No questions available", or questions from the other grade). Progress,
  bookmarks, streak and history from the assignment now land there too.
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
