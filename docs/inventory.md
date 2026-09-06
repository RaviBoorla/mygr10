# Question bank inventory

What's actually in each `public/questions/*.json` bank: total question count,
and — where real board past-paper questions were sourced and labelled — which
exam years are represented and how many questions come from each. Grade X
only; Grade XII has no banks yet (every subject shows "coming soon").

Regenerate the year/count breakdown with:
```
python3 -c "
import json, glob, re
from collections import defaultdict
for f in sorted(glob.glob('public/questions/*.json')):
    d = json.load(open(f))
    years = defaultdict(int)
    for q in d:
        blob = q.get('text','') + ' ' + q.get('chapter','') + ' ' + q.get('id','')
        found = set(re.findall(r'(20\d\d)[ -]?Board', blob)) or set(re.findall(r'hindi-(\d{4})-', blob))
        for y in found: years[y] += 1
    print(f, len(d), dict(sorted(years.items())))
"
```

## CBSE

| Subject | File | Total Qs | Real board papers included |
|---|---|---|---|
| Mathematics | `X-CBSE-Mathematics.json` | 350 | 2023 Board (20), 2024 Board (20), 2025 Board (59), 2026 Board (59) — 158 real; remaining 192 are curriculum-authored, not from a specific paper. (2022's paper was the COVID-era Term 2 descriptive-only format — no MCQs — so it's skipped.) The 8 "Quadrilaterals" questions were removed — that chapter is Grade IX syllabus, not Grade X. |
| Science | `X-CBSE-Science.json` | 360 | 2023 Board (20), 2024 Board (20), 2025 Board (60), 2026 Board (60) — 160 real; remaining 200 curriculum-authored. (2022's paper was the COVID-era Term 2 descriptive-only format — no MCQs — so it's skipped, same as Math/Social Science's 2022 papers.) Every question also carries a `subject` field (`Physics`/`Chemistry`/`Biology`), derived from its `chapter`. |
| Social Science | `X-CBSE-Social-Science.json` | 280 | 2023 Board (20), 2024 Board (20), 2025 Board (20), 2026 Board (20) — 80 real; remaining 200 are curriculum-authored, not from a specific paper. (2022's paper was the COVID-era Term 2 descriptive-only format — no MCQs — so it's skipped.) Every question also carries a `subject` field (`History`/`Geography`/`Civics`/`Economics`), derived from its `chapter`. |
| Hindi | `X-CBSE-Hindi.json` | 125 | 2023 Board (49), 2024 Board (44), 2025 Board (16), 2026 Board (16) — **all 125 from real past papers** (Course A only; Sets 1/2/3 per year were confirmed identical content, so only one deduplicated copy per year is kept) |
| English | `X-CBSE-English.json` | 42 | 2023 Board (17), 2024 Board (8), 2025 Board (9), 2026 Board (8) — **all 42 from real past papers**: standalone Grammar MCQs (tenses, subject-verb agreement, reported speech, error correction, etc.) and Literature extract-based MCQs (the extract is quoted inline in the question). 2022's paper was the COVID-era Term 2 all-subjective format — no MCQs at all — so it's skipped. Unseen-passage Reading-section MCQs are skipped throughout (same reasoning as Hindi: the source passage isn't stored in the bank), as is one 2025 Board rhyme/theme MCQ whose official answer was too ambiguous to source confidently. |

## ICSE

| Subject | File | Total Qs | Real board papers included |
|---|---|---|---|
| Mathematics | `X-ICSE-Mathematics.json` | 150 | None — entirely curriculum-authored |
| Physics | `X-ICSE-Physics.json` | 120 | None — entirely curriculum-authored |
| Chemistry | `X-ICSE-Chemistry.json` | 115 | None — entirely curriculum-authored |
| Biology | `X-ICSE-Biology.json` | 115 | None — entirely curriculum-authored |
| History & Civics | `X-ICSE-History-Civics.json` | 100 | None — entirely curriculum-authored |
| Geography | `X-ICSE-Geography.json` | 100 | None — entirely curriculum-authored |
| English | `X-ICSE-English.json` | 80 | None — entirely curriculum-authored |

## IB Diploma

No question banks exist yet for any subject (Mathematics, Biology, Individuals & Societies,
Language & Literature) — every card shows "coming soon".

## Short Answers banks (separate from the MCQ banks above)

A parallel, much smaller catalogue for VSA (2-mark) and SA (3-mark) questions —
these have no `options`/`correct` field (free-text, self-assessed against a
model answer), so they're intentionally kept out of the MCQ banks above and
the mock/drill logic never touches them. Schema per question: `{id, chapter,
marks, difficulty, text, modelAnswer, keyPoints[]}` (Science and Social Science
also carry a `subject` field, same as their MCQ banks — see below). Listed in
`SA_BANKS` in `app.js`; a subject with no entry there simply has no "Short
Answers" button.

| Subject | File | Total Qs | Source |
|---|---|---|---|
| CBSE Mathematics | `X-CBSE-Mathematics-ShortAnswers.json` | 69 | 2022 Board (13), 2023 Board (13), 2024 Board (15), 2025 Board (13) and 2026 Board (15) VSA/SA sections, real past papers |
| CBSE Social Science | `X-CBSE-Social-Science-ShortAnswers.json` | 53 | 2022 Board (9), 2023 Board (11), 2024 Board (11), 2025 Board (11) and 2026 Board (11) VSA/SA sections, real past papers |
| CBSE Science | `X-CBSE-Science-ShortAnswers.json` | 63 | 2022 Board (12), 2023 Board (16), 2024 Board (13), 2025 Board (12) and 2026 Board (10) VSA/SA sections, real past papers (questions requiring a hand-drawn diagram/labelled figure were skipped, since the app has no way to render or grade a drawing) |
| CBSE English | `X-CBSE-English-ShortAnswers.json` | 90 | 2022 Board (8), 2023 Board (17), 2024 Board (20), 2025 Board (21) and 2026 Board (24) — real past papers. Two content types: (1) Grammar transformation exercises (reported speech, editing/error correction, fill-in-the-blank) that have no fixed 4-option answer; (2) Literature short-answer questions from the prescribed First Flight / Footprints Without Feet texts (known, syllabus-fixed works, not unseen passages). Creative-writing tasks (letters, analytical paragraphs/notices) are skipped as open-ended with no single model answer. |

## Solved Exercises banks (a third catalogue, separate again)

Full NCERT textbook exercise questions with a complete worked solution —
answers the "how do I actually solve Q5 of Exercise 1.1" need, distinct from
both the MCQ banks (board-exam style) and the Short Answers banks (board-exam
VSA/SA style). Schema per question: `{id, chapter, exercise, number, question,
solution, steps[]}`. Listed in `SOLVED_BANKS` in `app.js`; a subject with no
entry there simply has no "Solved Exercises" button. Not self-assessed against
a typed answer (unlike Short Answers) — a solution is either shown or hidden,
tracked per question id in `localStorage` (`rise.solvedRevealed`).

| Subject | File | Total Qs | Source |
|---|---|---|---|
| CBSE Mathematics | `X-CBSE-Mathematics-Solved.json` | 253 | All 14 NCERT Class X Mathematics chapters, from the current (2025–26 reprint) textbook — every exercise question that is fully answerable from text alone (a question requiring an unavailable textbook figure/graph to interpret is skipped). Per-chapter counts: Real Numbers 10, Polynomials 2, Pair of Linear Equations in Two Variables 12, Quadratic Equations 13, Arithmetic Progressions 49, Triangles 21, Coordinate Geometry 19, Introduction to Trigonometry 18, Some Applications of Trigonometry 15, Circles 16, Areas Related to Circles 14, Surface Areas and Volumes 17, Statistics 22, Probability 25. |

## Chapter → subject-area mapping (Science and Social Science)

Every Science and Social Science question (both MCQ and Short Answers banks)
carries a `subject` field alongside `chapter`, so a Chemistry-only or
History-only drill/report is possible without string-matching chapter names.
Derived once from `chapter` and written directly into the JSON (not computed
at runtime) — regenerate with the same mapping if a new chapter is ever added:

**Science** — Chemistry: Acids/Bases and Salts, Carbon and its Compounds,
Chemical Reactions and Equations, Metals and Non-metals, Periodic
Classification of Elements. Physics: Electricity, Light — Reflection and
Refraction, Magnetic Effects of Electric Current, Sources of Energy, The
Human Eye and the Colourful World. Biology: Control and Coordination,
Heredity and Evolution, How do Organisms Reproduce, Life Processes,
Management of Natural Resources, Our Environment.

**Social Science** — History: Nationalism in India, The Rise of Nationalism
in Europe, The Age of Industrialisation, Print Culture and the Modern World,
The Making of a Global World. Geography: Resources and Development, Forest
and Wildlife Resources, Water Resources, Agriculture, Minerals and Energy
Resources, Manufacturing Industries, Lifelines of National Economy. Civics:
Power Sharing, Federalism, Democracy and Diversity, Gender/Religion and
Caste, Popular Struggles and Movements, Political Parties, Outcomes of
Democracy, Challenges to Democracy. Economics: Development, Sectors of the
Indian Economy, Money and Credit, Globalisation and the Indian Economy,
Consumer Rights.

## How to tell, per question, whether it's from a real paper

- **Hindi**: every question is real; its `chapter` field and `id` prefix both carry the
  board year, e.g. `"chapter": "अपठित गद्यांश (2025 Board)"`, `"id": "hindi-2025-001"`.
- **CBSE Mathematics/Science/Social Science**: real ones have `"(20XX Board)"`
  appended directly to the question `text`, interspersed within their normal chapter
  (not a separate chapter) — e.g. `"text": "The LCM of 960 and 240 is (2026 Board)"`.
- **Everything else** (all of ICSE): no year tag anywhere — every
  question was authored to the syllabus rather than sourced from a specific paper.

## High-yield chapter badges

The Chapter Drill picker (app.js: `chaptersOf()` / `_renderChips()`) shows a
🔥 badge on any chapter chip that has at least one real board-sourced question,
with the count and a tooltip naming the years — e.g. "Introduction to
Trigonometry 36 🔥13" means 13 of its 36 questions are real, from 2025/2026
board papers. Chapters/subjects with no real-question data (everything in the
table above marked "None") show no badge at all, rather than a fabricated one.
