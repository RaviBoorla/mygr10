# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
