# Arena — game mode

Status: **Phase 1 built and live.** This document reflects the implemented design.

Arena is a fast, arcade-style practice mode sitting alongside Mock test and
Chapter drill. It exists because the current modes reward patience, and most
students won't open a 90-minute mock on a weekday evening. Arena is the mode
they open instead — 2–3 minutes, high pressure, a score to beat.

Arena is a **warm-up and revision tool, not exam preparation.** A timed
answer clock trains the opposite habit to a board paper. The home screen must
keep pushing the Mock test as the primary mode; Arena is the second button, not
the first.

## Hard constraints

These are decisions, not suggestions.

1. **New file: `public/arena.js`.** Do not append to `public/app.js` (already
   ~290 KB). Arena reads the existing globals (`BANKS`, board/grade selection,
   difficulty filter) and reimplements none of the question loading.
2. **Graded answers feed the existing systems.** Every Arena answer updates the
   Leitner box for that question and counts toward the daily goal and streak,
   exactly as a mock/drill answer does. Arena must not become a parallel app
   with its own disconnected progress.
3. **Answer keys stay server-side for anything competitive.** Solo Arena may
   grade client-side like the existing modes. Any mode where scores are compared
   between students grades server-side, and the client never receives `correct`
   until the question has closed.
4. **No anime, no licensed characters, no character likenesses of any kind.**
   See Collectibles below.
5. **Not a separate visual language for the whole app.** Arena screens may be
   loud. Mock and drill screens stay clean and exam-like. The skin system
   applies to Arena only.

## Phase 1 — solo Arena *(built)*

Scope: CBSE and ICSE (IB shows "Coming soon"), solo only, localStorage only, no accounts, no network.

### Run structure

A **run** is a sequence of **stages**. Each stage serves **5 questions** drawn from a flat pool across the 3 chosen subjects (not one-per-subject). The run continues until lives are exhausted or all 10 stages are cleared.

| Stage | Difficulty | Seconds per question |
|---|---|---|
| 1–3 | Easy | 45 |
| 4–6 | Medium | 40 |
| 7–9 | Medium / Hard | 35 |
| 10 (boss) | Hard | 35, 5 questions |

The timer is **per question**, not per stage — the per-question clock is what
creates the tension.

#### Life system

- Players start with **7 hearts** (stored as a float for half-heart granularity).
- **Every correct answer earns +0.5 hearts**, capped at 7.
- At stage end, hearts are drained based on how many questions were answered correctly:

| Correct | Heart drain | Net at break-even |
|---|---|---|
| 0/5 | −3 | −3 |
| 1/5 | −2 | −1.5 |
| 2/5 | −2 | −1.0 |
| 3/5 | −1 | +0.5 (gain) |
| 4/5 | 0 | +2.0 (gain) |
| 5/5 | 0 | +2.5 (gain) |

Break-even accuracy is ~52% (scoring 3+ of 5 every stage). The run ends only when hearts reach 0.

Subjects are chosen at run start (exactly 3) from those with a bank for the
current board. The first 3 subjects are pre-checked by default.

#### Setup explainer

The Arena setup screen has a two-column layout: left panel shows a "How to play" list (stages, timer, hearts system, drain table, gameover condition, combo multiplier, spaced repetition); right panel has the subject picker and Start/Back buttons. The two panels are separated by a thin blue vertical divider line.

### Scoring

Per correct answer:

```
base 100
  × difficulty multiplier (easy 1.0, medium 1.5, hard 2.0)
  + speed bonus (secondsRemaining × 5)
  × combo multiplier
```

Wrong or timed-out answer scores 0 and resets the combo to zero.

Combo multiplier, on consecutive correct answers within a run: 1.0x, rising to
1.5x at 5 in a row and 2.0x at 10. Breaking a combo should feel worse than
losing a life — that is intentional, and it is what makes a student replay
questions they already know.

The speed bonus is the core replay driver: a known question can still yield a
better score by being answered faster.

### Question selection

`pickStageQuestions(subjects, difficulty, n)`:

- one question per subject per stage
- excludes any question id already served in the current run
- respects the existing difficulty filter semantics
- prefers questions due in the Leitner queue when the difficulty band allows,
  so Arena doubles as spaced repetition rather than fighting it

### Screen

`#/arena` — a new hash route, rendered by `renderArena()`.

Deliberately **not** the OMR skin. No question palette, no mark-for-review, no
free navigation, no going back. One question full-bleed, four options, a
draining timer bar, and a HUD showing stage, lives, combo and running score.

Between stages: a short interstitial showing stage cleared, score gained, lives
remaining. This beat matters — it is where the sense of progress lives.

Run end: split 40:60 layout — left panel shows final score, deepest stage, longest combo, personal best comparison, and Play Again / Home buttons; right panel lists **all questions attempted** (not just missed), each card colour-coded green (correct) or red (wrong) with a left border, the student's wrong answer shown when applicable, the correct answer, and the explanation. A count badge in the heading shows total questions attempted.

### Persistence

Run state is written to localStorage on every answer so a closed tab resumes
mid-run:

```
{ runId, board, grade, subjects[], stage, lives, score, combo,
  servedIds[], startedAt, stageStartedAt }
```

High scores are stored per `grade::board`, the same isolation used by progress,
bookmarks and streaks: best score, deepest stage, longest combo.

## Skins and collectibles

A cosmetic unlock layer. It exists to give the Arena a reason to be replayed
after the novelty of the score wears off.

**Everything is earned through study achievements. Nothing is bought, nothing is
random, nothing is time-gated.** No currency, no chests, no pulls, no "unlocks
in 4 hours". This is a study app used by minors with parents paying for the
device; a gacha loop is the fastest route to complaints and app-store scrutiny,
and it is not needed — the achievement unlock works fine on its own.

Two collections:

**Arena skins** — full visual themes for the Arena screen (background, timer
bar, option buttons, HUD). Unlocked by subject milestones, e.g. clear stage 10
with Chemistry in the subject mix, or reach a 20-combo.

**Collectible items** — a shelf of individual objects the student accumulates,
displayed on a "Collection" screen. Two themed sets, both original artwork or
CSS/SVG constructions:

- *Instruments* — scientific and mathematical apparatus: brass compass,
  slide rule, sextant, orrery, abacus, vernier caliper, spirit level, prism,
  balance scale, armillary sphere, astrolabe, planimeter, pantograph.
- *Antiques* — historical scientific curiosities: an early microscope, a
  pendulum clock, a lodestone, a set of Napier's bones, a camera obscura, a
  Leyden jar, a tuning fork set, a Wimshurst machine.

Each item carries one line of real explanation — what it is, what it was used
for, roughly when. The collection should teach something in its own right; that
is what distinguishes it from a loot table.

Item rarity tiers (common / rare / exceptional) map to how hard the unlocking
achievement is, not to chance.

Skins are cheap to build as CSS variable sets. Items are the larger art task —
build the collection screen and the unlock plumbing first with placeholder
line-art, and fill in artwork over time. Do not block Phase 1 on artwork.

## Later phases

Not scheduled. Recorded so Phase 1 doesn't paint them out.

**Phase 2 — CBSE support.** Blocked on question tagging: `X-CBSE-Science.json`
is a single combined bank and must be split into Physics / Chemistry / Biology
via a topic tag before a mixed-subject stage is possible. This tagging pass is
the real prerequisite, not the game code.

**Phase 2 — daily challenge.** One fixed seed per calendar day, so every student
on a board gets the identical question set and scores are comparable. No
network required for the solo version — the seed is derived from the date.

**Phase 3 — async challenge codes.** A student finishes a run and generates a
code representing that exact question set plus their score. Friends play the
identical set whenever they want. Implementation: Cloudflare KV,
`challenge:<code>` → `{seed, questionIds[], creator, results[]}`, 7-day TTL. No
realtime, no Durable Objects, no accounts. Build this before any live mode — it
survives bad school WiFi and needs no coordination between players.

**Phase 4 — live rooms.** Cloudflare Durable Objects, one instance per room
code, WebSocket with hibernation. Requires the paid Workers plan. Design notes:

- Entry is a 5-letter room code shared face-to-face or in a group chat. No
  friend lists, no discovery, no way for a stranger to find a room.
- Room fixes a seed at start; the Durable Object holds the question sequence and
  grades every answer. The client never holds the answer key.
- 4–30 players. Below 4, present it as 1v1 — two friends is the common real
  case. Above ~30 the leaderboard stops meaning anything.
- 10 questions, roughly 2 minutes, with a 3-second leaderboard flash between
  questions. The shifting leaderboard is the game; the questions are the excuse.
- Scoring must be speed-weighted or the ranking never moves.
- Timer starts on client receipt of the question; the server accepts a
  client-reported elapsed time clamped to its own window, so a student on a
  weak connection isn't permanently denied the speed bonus.
- Reconnect keyed to a locally-stored player token, not the socket, so a
  dropped student rejoins at the current question with their score intact.
- Nicknames from a generated wordlist (adjective + animal), not free text.
  Host can kick.
- **No chat channel, in any phase.** Fixed emoji reactions if expression is
  wanted. A text channel between minors is a moderation obligation this project
  will not take on.
- Show only the top 5 publicly; every other player sees their own rank
  privately alongside a personal-best comparison. In a class-wide room the same
  students land last every time in front of everyone, and those are precisely
  the students who most need to stay in the game.

## Build order

1. Solo Arena — the scoring and question-serving engine everything else reuses
2. Collection screen and unlock plumbing, placeholder art
3. Daily challenge (local seed)
4. Async challenge codes (KV)
5. 1v1 live (smallest realtime surface)
6. Class rooms, host controls, leaderboard
