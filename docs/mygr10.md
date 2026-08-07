# Mygr10

A practice and self-assessment app for Indian Grade 10 students preparing for their
board examinations. Mygr10 helps students drill the exact MCQ format used in their
board's question paper — known as the OMR sheet section — so they walk into the
hall familiar with the timing, the layout and the question style.

## Supported boards

- **CBSE** — Central Board of Secondary Education
- **ICSE** — Indian Certificate of Secondary Education
- **IB Diploma** — International Baccalaureate (MYP-5 / pre-DP level)

The student picks their board on first launch; that choice drives the syllabus and
the question bank they see everywhere else in the app.

## Core practice modes

There are two practice modes. Both use the OMR-style MCQ format — one question,
four options (A / B / C / D), shade the bubble.

### 1. Subject-wise full mock

A timed mock for a single subject, structured exactly like the board's MCQ
section.

- **Questions:** 40 MCQs per session
- **Time limit:** 90 minutes
- **Coverage:** entire syllabus for that subject under the chosen board
- **Picklist:** one of the offered subjects — Mathematics, Science, Social
  Science, English, etc., as defined per board

When the timer hits zero the test auto-submits, the same as in the exam hall.

### 2. Chapter-wise drill

A short, focused session on one chapter at a time.

- **Questions:** 25 MCQs per session
- **Coverage:** a single chapter of a single subject
- **Time limit:** untimed by default (student sets their own pace), so the
  focus is on learning the chapter rather than racing the clock

Each chapter should pool from 4–5 underlying MCQs so the same chapter yields
different (but equivalent) questions across sessions — no rote memorisation of
the previous attempt.

## Things every session should do

- Render the OMR bubble sheet look — four option bubbles A/B/C/D, a question
  palette (answered / not-answered / marked-for-review) and the timer.
- Let the student navigate freely: jump to any question, mark for review,
  change an answer until they submit.
- Show a results screen at the end: score, per-chapter breakdown (chapter
  mode) or per-topic breakdown (mock mode), and a list of every wrong answer
  with the correct option and a short explanation.

## Subjects and chapters (data model)

The content is data-driven so adding a new board is just adding rows:

- **Board** — `cbse | icse | ib`
- **Subject** — board-specific list (e.g. CBSE has Mathematics, Science,
  Social Science, English, Hindi; ICSE has Mathematics, Physics, Chemistry,
  Biology, History & Civics, Geography, English; IB has the relevant MYP-5
  subjects)
- **Chapter** — the official chapter list for that subject under that board
- **MCQ** — stem, four options (one correct), topic tag, difficulty, and a
  short explanation shown after submission

## Non-goals (for now)

- Not a replacement for classroom teaching or textbook study — a drill tool.
- No live proctoring, no hall-ticket management, no result submission to any
  board.
- No paid content gating in the first version.
