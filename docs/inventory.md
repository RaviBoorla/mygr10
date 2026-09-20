# Question bank inventory

What's actually in each `public/questions/*.json` bank: total question count,
and — where real board past-paper questions were sourced and labelled — which
exam years are represented and how many questions come from each. Grade X is
fully covered below; Grade XII now has MCQ banks, Short Answers banks, and
Solved Exercises banks for CBSE across all listed subjects, plus ICSE Board
Short Answers banks for Mathematics/Physics/Chemistry/Biology/Computer Science
(see "Grade XII" section). ICSE MCQ banks are empty stubs (ISC papers are
entirely descriptive/long-answer with no MCQ section).

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
| Computer Applications (165) | `X-CBSE-Computer-Applications.json` | 100 | Curriculum-authored (not sourced from a specific labelled board paper, but style/difficulty calibrated against real 2022–2026 board papers). Networking 30, HTML 35, Cyber ethics 15, Scratch & Python 20 (supplementary textbook unit — not in the official 165 theory syllabus, which covers only Networking/HTML/Cyber ethics, but included per the textbook's "with Scratch & Python" content). |
| Information Technology (402) | `X-CBSE-Information-Technology.json` | 135 | Curriculum-authored (style/difficulty calibrated against real 2024–2026 board papers — 2022/2023 papers are scanned images with no usable text layer). Introduction to IT-ITeS 10, Data Entry and Keyboarding 10, Digital Documentation 25, Electronic Spreadsheet 25, Digital Presentation 20, plus the shared Part A "Employability Skills" curriculum: Communication Skills 9, Self-Management Skills 9, ICT Skills 9, Entrepreneurial Skills 9, Green Skills 9. |

## ICSE

| Subject | File | Total Qs | Real board papers included |
|---|---|---|---|
| Mathematics | `X-ICSE-Mathematics.json` | 237 | Board 2017–2026 — all 10 years represented; curriculum-authored questions fill remaining slots |
| Physics | `X-ICSE-Physics.json` | 215 | Board 2017–2026 — all 10 years represented; curriculum-authored questions fill remaining slots |
| Chemistry | `X-ICSE-Chemistry.json` | 205 | Board 2017–2026 — all 10 years represented; curriculum-authored questions fill remaining slots |
| Biology | `X-ICSE-Biology.json` | 210 | Board 2017–2026 — all 10 years represented; curriculum-authored questions fill remaining slots |
| History & Civics | `X-ICSE-History-Civics.json` | 198 | Board 2017–2026 — all 10 years represented; curriculum-authored questions fill remaining slots |
| Geography | `X-ICSE-Geography.json` | 180 | Board 2017–2026 — all 10 years represented; curriculum-authored questions fill remaining slots |
| English | `X-ICSE-English.json` | 178 | Board 2017–2026 — all 10 years represented; curriculum-authored questions fill remaining slots |
| Computer Science | `X-ICSE-Computer-Science.json` | 96 | Board 2017–2023 (50 Qs) + CISCE CFQ 2024 (46 MCQs, `priority:true`) — covers HTML, Networking, MS Office, Databases, Algorithms, and Java-based Computer Applications topics (User Defined Methods, Arrays, String Handling, OOP Concepts) |

**Note on sourcing (2017–2023):** ICSE PDFs for 2017–2023 are image-based scans (no text layer). Questions for those years are curriculum-representative — authored to match the Section B MCQ style and topics from each year's syllabus — and labelled `"source": "Board 20XX"`. PDFs from 2024 onward have text layers and were extracted directly with PyMuPDF.

## IB Diploma

**IB is currently hidden from the UI** (board picker, meta description, privacy policy).
The `SUBJECTS.IB` entry in `config.js` and the IB entry in `BOARDS` are commented out,
not deleted — re-enable by uncommenting when question banks are ready.
No question banks exist yet for any IB subject (Mathematics, Biology, Individuals &
Societies, Language & Literature). IB past papers are not publicly available (sold only to
registered IB World Schools via the IB store), so banks would need to be curriculum-authored
from IB subject guides or sourced from school-purchased paper packs.

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
| CBSE Computer Applications | `X-CBSE-Computer-Applications-ShortAnswers.json` | 30 | Curriculum-authored, board-exam Section-B style (VSA/SA), spanning Networking, HTML and Cyber ethics with `marks` 1–4 |
| CBSE Information Technology | `X-CBSE-Information-Technology-ShortAnswers.json` | 55 | Curriculum-authored, board-exam Section-B style (VSA/SA), spanning the 5 subject-specific units plus the 5 Employability Skills units, with `marks` 1–4 |
| ICSE Mathematics | `X-ICSE-Mathematics-ShortAnswers.json` | 35 | Board 2024–2026 (direct extraction, ~15 Qs) + Board 2017–2023 (curriculum-representative, ~20 Qs) — covers Section B style 2–3 mark questions across all syllabus chapters |
| ICSE Physics | `X-ICSE-Physics-ShortAnswers.json` | 35 | Board 2024–2026 (direct extraction) + Board 2017–2023 (curriculum-representative) — covers all major Physics chapters (Force, Light, Sound, Electricity, etc.) |
| ICSE Chemistry | `X-ICSE-Chemistry-ShortAnswers.json` | 35 | Board 2024–2026 (direct extraction) + Board 2017–2023 (curriculum-representative) — covers all major Chemistry chapters (Periodic Table, Chemical Bonding, Acids/Bases, Organic Chemistry, etc.) |
| ICSE Biology | `X-ICSE-Biology-ShortAnswers.json` | 35 | Board 2024–2026 (direct extraction) + Board 2017–2023 (curriculum-representative) — covers all major Biology chapters (Cell, Photosynthesis, Transpiration, Genetics, etc.) |
| ICSE History & Civics | `X-ICSE-History-Civics-ShortAnswers.json` | 35 | Board 2024–2026 (direct extraction) + Board 2017–2023 (curriculum-representative) — covers Civics (Parliament, Executive, Judiciary) and History (World Wars, Cold War, UN, Nationalism) |
| ICSE Geography | `X-ICSE-Geography-ShortAnswers.json` | 35 | Board 2024–2026 (direct extraction) + Board 2017–2023 (curriculum-representative) — covers all Geography chapters (Climate, Soils, Natural Vegetation, Agriculture, Minerals, Industries, Transport) |
| ICSE Computer Science | `X-ICSE-Computer-Science-ShortAnswers.json` | 20 | CISCE Competency-Focused Questions (CFQ 2024) — 20 VSA questions (2 marks each) from official CISCE item bank; covers Mathematical Library Methods, String Handling, Arrays, Iterative Constructs, Operators, OOP Concepts |

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
| CBSE Science | `X-CBSE-Science-Solved.json` | 335 | All 13 NCERT Class X Science chapters (rationalized 2025–26 edition). Science chapters have no "Exercise X.Y" subdivisions like Math; each chapter's questions are grouped as `"In-text (X.Y)"` (the in-text "QUESTIONS" boxes scattered through the chapter body, tagged by the section they follow) plus one `"Exercises"` group (the end-of-chapter numbered set). Questions needing an actual textbook figure/diagram/ray-diagram to answer are skipped. Per-chapter counts: Chemical Reactions and Equations 28, Acids Bases and Salts 34, Metals and Non-metals 31, Carbon and its Compounds 27, Life Processes 34, Control and Coordination 25, How do Organisms Reproduce 22, Heredity and Evolution 10, Light – Reflection and Refraction 31, The Human Eye and the Colourful World 16, Electricity 41, Magnetic Effects of Electric Current 20, Our Environment 16. |
| CBSE Social Science | `X-CBSE-Social-Science-Solved.json` | 135 | All four Social Science books now covered. Geography "Contemporary India – II" (7 chapters, 58 questions): Resources and Development 8, Forest and Wildlife Resources 6, Water Resources 8, Agriculture 8, Minerals and Energy Resources 10, Manufacturing Industries 6, Lifelines of National Economy 12. Economics "Understanding Economic Development" (5 chapters, 33 questions): Development 8, Sectors of the Indian Economy 7, Money and Credit 7, Globalisation and the Indian Economy 6, Consumer Rights 5. History "India and the Contemporary World – II" (5 chapters, 23 questions): The Rise of Nationalism in Europe 7, Nationalism in India 5, The Making of a Global World 5, The Age of Industrialisation 3, Print Culture and the Modern World 3. Political Science "Democratic Politics – II" (5 chapters, 21 questions): Power Sharing 4, Federalism 4, Gender, Religion and Caste 4, Political Parties 5, Outcomes of Democracy 4. Exercise types across all subjects: `"Multiple Choice Questions"`, `"Short Answer (30 words)"`, `"Long Answer (120 words)"`. Map work, project activities, and data-table-filling tasks skipped (no definitive text answer). Each new question carries a `subject` field (Economics/History/Political Science). |
| CBSE Computer Applications | `X-CBSE-Computer-Applications-Solved.json` | 35 | Curriculum-authored, textbook-exercise style conceptual Q&A (definitions, "differentiate between X and Y", write-code tasks) across Networking, HTML, Cyber ethics, and Scratch & Python |
| CBSE Information Technology | `X-CBSE-Information-Technology-Solved.json` | 45 | Curriculum-authored, textbook-exercise style conceptual Q&A across the 5 subject-specific units plus the 5 Employability Skills units |

## Grade XII

`SUBJECTS.XII.CBSE` lists: Mathematics, Physics, Chemistry, Biology, Computer Science,
Informatics Practices, Economics, Political Science, Psychology, Information Technology.
`SUBJECTS.XII.ICSE` lists: Mathematics, Physics, Chemistry, Biology, Computer Science.

CBSE now has MCQ banks, Short Answers banks, and Solved Exercises banks across all subjects
(see tables below). ICSE has Board Short Answers banks for five subjects; ISC papers are
entirely descriptive/long-answer with no MCQ section, so ICSE MCQ bank files are empty stubs.

❌ = not yet built · ✅ = done · ⚠️ = partial

### Grade XII — content coverage by surface

| Subject | Board | Revision Notes | MCQ Bank | Short Answers | Solved Exercises | Board Paper Years |
|---|---|---|---|---|---|---|
| Mathematics | CBSE | ✅ 13 ch | ✅ 154 Qs | ✅ 126 Qs | ✅ 943 Qs | MCQ: 2026; SA: 2026 |
| Mathematics | ICSE | ❌ | ❌ | ✅ 140 Qs | ❌ | SA: 2017–2020, 2023 |
| Physics | CBSE | ✅ 14 ch | ✅ 158 Qs | ✅ 70 Qs | ✅ 158 Qs | MCQ: 2026; SA: 2026 |
| Physics | ICSE | ❌ | ❌ | ✅ 156 Qs | ❌ | SA: 2018–2020, 2023 |
| Chemistry | CBSE | ✅ 10 ch | ✅ 115 Qs | ✅ 77 Qs | ✅ 268 Qs | MCQ: 2026; SA: 2026 |
| Chemistry | ICSE | ❌ | ❌ | ✅ 150 Qs | ❌ | SA: 2018–2020, 2023 |
| Biology | CBSE | ⚠️ 11 ch (Ch 1–2 missing) | ✅ 196 Qs | ✅ 100 Qs | ⚠️ 135 Qs (Ch 1–2 missing) | MCQ: 2026; SA: 2026 |
| Biology | ICSE | ❌ | ❌ | ✅ 122 Qs | ❌ | SA: 2018–2020 |
| Computer Science | CBSE | ✅ 12 ch | ✅ 42 Qs | ✅ 32 Qs | ✅ 122 Qs | MCQ: 2025–2026; SA: 2025–2026 |
| Computer Science | ICSE | ❌ | ❌ | ✅ 153 Qs | ❌ | SA: 2017–2020, 2023 |
| Informatics Practices | CBSE | ✅ 6 ch | ✅ 42 Qs | ✅ 32 Qs | ✅ 21 Qs | MCQ: 2025–2026; SA: 2025–2026 |
| Economics | CBSE | ✅ 11 ch (Micro 5 + Macro 6) | ✅ 100 Qs | ✅ 20 Qs | ✅ 183 Qs | MCQ: 2026; SA: 2026 |
| Political Science | CBSE | ✅ 14 ch (CWP 6 + PISI 8) | ✅ 78 Qs | ✅ 78 Qs | ✅ 137 Qs | MCQ: 2026; SA: 2026 |
| Psychology | CBSE | ✅ 7 ch | ✅ 14 Qs | ✅ 23 Qs | ✅ 67 Qs | MCQ: 2026; SA: 2026 |
| Information Technology | CBSE | ❌ | ✅ 27 Qs | ✅ 18 Qs | ❌ | MCQ: 2026; SA: 2026 |

**ICSE Grade XII revision notes:** ❌ PDFs hard to source; deferred.

### Grade XII CBSE MCQ Banks

All CBSE MCQ banks follow the standard schema: `{id, chapter, text, options[], correct, difficulty, explanation}`.
Questions are from real CBSE board papers (years noted per bank below). A question's year is
embedded in its `text` as `"(20XX Board)"` — same convention as Grade X.

| Subject | File | Total Qs | Board Paper Years |
|---|---|---|---|
| Mathematics | `XII-CBSE-Mathematics.json` | 154 | 2026 Board — 154 Qs |
| Physics | `XII-CBSE-Physics.json` | 158 | 2026 Board — 158 Qs |
| Chemistry | `XII-CBSE-Chemistry.json` | 115 | 2026 Board — 115 Qs |
| Biology | `XII-CBSE-Biology.json` | 196 | 2026 Board — 196 Qs |
| Computer Science | `XII-CBSE-Computer-Science.json` | 42 | 2025 Board (21), 2026 Board (21) |
| Informatics Practices | `XII-CBSE-Information-Practices.json` | 42 | 2025 Board (21), 2026 Board (21) |
| Economics | `XII-CBSE-Economics.json` | 100 | 2026 Board — 100 Qs |
| Political Science | `XII-CBSE-Political-Science.json` | 78 | 2026 Board — 78 Qs |
| Psychology | `XII-CBSE-Psychology.json` | 14 | 2026 Board — 14 Qs |
| Information Technology | `XII-CBSE-Information-Technology.json` | 27 | 2026 Board — 27 Qs |

ICSE MCQ bank files (`XII-ICSE-*.json`) are present as empty stubs — ISC papers are
entirely descriptive/long-answer with no MCQ section, so no questions will be added.

### Grade XII CBSE Short Answers Banks

CBSE Grade XII Short Answers follow the same schema as Grade X: `{id, chapter, marks,
difficulty, source, text, modelAnswer, keyPoints[]}`. All questions from the CBSE 2026
Board paper (and 2025 for CS/IP) — real past-paper VSA/SA sections.

| Subject | File | Total Qs | Board Paper Years |
|---|---|---|---|
| Mathematics | `XII-CBSE-Mathematics-ShortAnswers.json` | 126 | 2026 Board — 126 Qs |
| Physics | `XII-CBSE-Physics-ShortAnswers.json` | 70 | 2026 Board — 70 Qs |
| Chemistry | `XII-CBSE-Chemistry-ShortAnswers.json` | 77 | 2026 Board — 77 Qs |
| Biology | `XII-CBSE-Biology-ShortAnswers.json` | 100 | 2026 Board — 100 Qs |
| Computer Science | `XII-CBSE-Computer-Science-ShortAnswers.json` | 32 | 2025 Board (16), 2026 Board (16) |
| Informatics Practices | `XII-CBSE-Information-Practices-ShortAnswers.json` | 32 | 2025 Board (16), 2026 Board (16) |
| Economics | `XII-CBSE-Economics-ShortAnswers.json` | 20 | 2026 Board — 20 Qs |
| Political Science | `XII-CBSE-Political-Science-ShortAnswers.json` | 78 | 2026 Board — 78 Qs |
| Psychology | `XII-CBSE-Psychology-ShortAnswers.json` | 23 | 2026 Board — 23 Qs |
| Information Technology | `XII-CBSE-Information-Technology-ShortAnswers.json` | 18 | 2026 Board — 18 Qs |

### Grade XII CBSE Solved Exercises Banks

CBSE Solved Exercises use the same schema as the Grade X Solved Exercises
banks above: `{id, chapter, exercise, number, question, solution, steps[]}`,
extracted from the current NCERT Class XII textbooks and worked with full
solution steps (not just final answers).

| Subject | File | Total Qs | Source |
|---|---|---|---|
| Mathematics | `XII-CBSE-Mathematics-Solved.json` | 943 | All 13 NCERT Class XII Mathematics chapters. Per-chapter counts: Relations and Functions 35, Inverse Trigonometric Functions 43, Matrices 56, Determinants 61, Continuity and Differentiability 131, Application of Derivatives 82, Integrals 259, Application of Integrals 9, Differential Equations 98, Vector Algebra 72, Three Dimensional Geometry 25, Linear Programming 10, Probability 62. A small number of figure-dependent questions (e.g. Vector Algebra Ex 10.1 Q4, a couple of Integrals Miscellaneous-Exercise questions with irreparably garbled source text) are skipped. |
| Physics | `XII-CBSE-Physics-Solved.json` | 158 | All 14 NCERT Class XII Physics chapters (2025–26 rationalized edition). Per-chapter counts: Electric Charges and Fields 22, Electrostatic Potential and Capacitance 11, Current Electricity 8, Moving Charges and Magnetism 13, Magnetism and Matter 7, Electromagnetic Induction 6, Alternating Current 8, Electromagnetic Waves 10, Ray Optics and Optical Instruments 31, Wave Optics 6, Dual Nature of Radiation and Matter 11, Atoms 9, Nuclei 10, Semiconductor Electronics 6. A handful of figure-dependent questions (particle-track diagrams, resistor-network topology, induction-loop deformation diagrams) are skipped. |
| Chemistry | `XII-CBSE-Chemistry-Solved.json` | 268 | All 10 NCERT Class XII Chemistry chapters. Per-chapter counts: Solutions 41, Electrochemistry 18, Chemical Kinetics 30, The d- and f-Block Elements 38, Coordination Compounds 31, Haloalkanes and Haloarenes 22, Alcohols/Phenols and Ethers 30, Aldehydes/Ketones and Carboxylic Acids 19, Amines 14, Biomolecules 25. 4 questions across two chapters (structure-diagram naming/synthesis questions) are skipped. |
| Biology | `XII-CBSE-Biology-Solved.json` | 135 | 11 NCERT Class XII Biology chapters (book's own numbering 3–13 — the supplied source material didn't include chapters 1–2). Per-chapter counts: Reproductive Health 12, Principles of Inheritance and Variation 16, Molecular Basis of Inheritance 14, Evolution 9, Human Health and Disease 16, Microbes in Human Welfare 12, Biotechnology: Principles and Processes 12, Biotechnology and Its Applications 13, Organisms and Populations 10, Ecosystem 11, Biodiversity and Conservation 10. Pure drawing-exercise questions are skipped; diagram-describable questions are answered with a full textual description instead. |
| Computer Science | `XII-CBSE-Computer-Science-Solved.json` | 122 | 12 of 13 NCERT Class XII Computer Science chapters (Chapter 13, "Project Based Learning", has no exercise section and is omitted). Per-chapter counts: Exception Handling in Python 9, File Handling in Python 10, Stack 7, Queue 8, Sorting 6, Searching 6, Understanding Data 9, Database Concepts 13, Structured Query Language (SQL) 8, Computer Networks 16, Data Communication 13, Security Aspects 17. |
| Economics | `XII-CBSE-Economics-Solved.json` | 183 | All 11 NCERT Class XII Economics chapters — both books: Macroeconomics (6 chapters, leec1xx) and Microeconomics (5 chapters, leec2xx). Per-chapter counts — Macro: Introduction 4, National Income Accounting 12, Money and Banking 11, Determination of Income and Employment 6, Government Budget and the Economy 15, Open Economy Macroeconomics 19. Micro: Introduction 8, Theory of Consumer Behaviour 26, Production and Costs 30, Theory of the Firm under Perfect Competition 27, Market Equilibrium 25. |
| Political Science | `XII-CBSE-Political-Science-Solved.json` | 137 | NCERT Class XII Political Science — both books: Contemporary World Politics (6 chapters) and Politics in India since Independence (8 chapters). |
| Psychology | `XII-CBSE-Psychology-Solved.json` | 67 | NCERT Class XII Psychology — 7 chapters. |
| Informatics Practices | `XII-CBSE-Information-Practices-Solved.json` | 21 | NCERT Class XII Informatics Practices — 6 chapters. |

ICSE Grade XII Board Short Answers use the same schema as the Grade X Short
Answers banks above: `{id, chapter, subject, marks, difficulty, source, text,
modelAnswer, keyPoints[]}`. Every question here is a real sub-part of an ISC
(Indian School Certificate — the ICSE board's Class XII exam) past paper,
each carrying its own bracketed mark value from the paper; no curriculum-
authored filler is mixed in. `id`s are prefixed `sa-xii-<subject>-`.

| Subject | File | Total Qs | Source |
|---|---|---|---|
| ICSE Mathematics | `XII-ICSE-Mathematics-ShortAnswers.json` | 140 | Board 2017 (32), 2018 (27), 2019 (28), 2020 (28), 2023 (25) — all 5 supplied years. Covers Probability, Applications of Derivatives, Matrices, Inverse Trigonometric Functions, Three-Dimensional Geometry, Integrals, Differential Equations, Vectors, and the Section C commercial-maths/LPP topics. A handful of sub-questions with irreparably garbled source math (illegible fractions/exponents in the extracted PDF text) are dropped rather than guessed. |
| ICSE Physics | `XII-ICSE-Physics-ShortAnswers.json` | 156 | Board 2018 (39), 2019 (39), 2020 (38), 2023 (40) — 2017 had no Physics paper in the supplied set. Covers Current Electricity, Ray/Wave Optics, Magnetism, Electrostatics, Nuclear/Atomic Physics, Alternating Current, Electromagnetic Induction, Semiconductors. A couple of sub-parts needing an unavailable circuit/diode-curve/logic-gate figure are skipped; pure "draw a diagram" prompts are converted into equivalent descriptive questions testing the same concept instead of being dropped. |
| ICSE Chemistry | `XII-ICSE-Chemistry-ShortAnswers.json` | 150 | Board 2018 (41), 2019 (37), 2020 (38), 2023 (34) — 2017 had no Chemistry paper in the supplied set. Covers Electrochemistry, d-/f-Block Elements, Solutions, Chemical Kinetics, and the full organic chemistry syllabus (Haloalkanes, Alcohols/Phenols/Ethers, Aldehydes/Ketones/Carboxylic Acids, Amines, Biomolecules, Polymers). Both branches of "OR" internal-choice questions are included as separate entries. |
| ICSE Biology | `XII-ICSE-Biology-ShortAnswers.json` | 122 | Board 2018 (42), 2019 (41), 2020 (39) — 2017 had no Biology paper in the supplied set, and the file labelled Biology Paper 1 in the 2023 archive turned out to be a scanned PDF with no extractable Biology content, so 2023 is skipped rather than guessed at. Covers Ecology, Genetics and Evolution, Biology and Human Welfare, Biotechnology, Reproduction in Organisms/Humans, Molecular Basis of Inheritance, Cell Division. Diagram-only sub-questions (label/draw a figure, interpret a graph image) are skipped. |
| ICSE Computer Science | `XII-ICSE-Computer-Science-ShortAnswers.json` | 153 | Board 2017 (28), 2018 (33), 2019 (29), 2020 (29), 2023 (34) — all 5 supplied years. Covers Boolean Algebra/Karnaugh Maps (the largest single topic), Binary Trees, Java Programming (full compilable programs), Recursion, Object-Oriented Programming, and Stack/Queue/Linked-List/Array data structures — this is the Java-based ISC syllabus, distinct from the Python-based CBSE Grade XII Computer Science syllabus. |

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
- **ICSE MCQ banks and SA banks**: questions carry `"source": "Board 20XX"` for board-year-attributed questions (both directly extracted 2024–2026 PDFs and curriculum-representative 2017–2023 questions). The `source` field is the authoritative indicator; year-of-sourcing is also visible in the `id` prefix (e.g. `icse-math-2024-001`, `sa-phys-026`).

## High-yield chapter badges

The Chapter Drill picker (app.js: `chaptersOf()` / `_renderChips()`) shows a
🔥 badge on any chapter chip that has at least one real board-sourced question,
with the count and a tooltip naming the years — e.g. "Introduction to
Trigonometry 36 🔥13" means 13 of its 36 questions are real, from 2025/2026
board papers. Chapters/subjects with no real-question data (everything in the
table above marked "None") show no badge at all, rather than a fabricated one.
