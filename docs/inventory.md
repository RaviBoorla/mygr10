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
| Mathematics | `X-CBSE-Mathematics.json` | 318 | 2025 Board (59), 2026 Board (59) — 118 real; remaining 200 are curriculum-authored, not from a specific paper |
| Science | `X-CBSE-Science.json` | 320 | 2025 Board (60), 2026 Board (60) — 120 real; remaining 200 curriculum-authored |
| Social Science | `X-CBSE-Social-Science.json` | 200 | None — entirely curriculum-authored |
| Hindi | `X-CBSE-Hindi.json` | 125 | 2023 Board (49), 2024 Board (44), 2025 Board (16), 2026 Board (16) — **all 125 from real past papers** (Course A only; Sets 1/2/3 per year were confirmed identical content, so only one deduplicated copy per year is kept) |
| English | — | 0 | No bank yet — card shows "Question bank coming soon" for Grade X |

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

## How to tell, per question, whether it's from a real paper

- **Hindi**: every question is real; its `chapter` field and `id` prefix both carry the
  board year, e.g. `"chapter": "अपठित गद्यांश (2025 Board)"`, `"id": "hindi-2025-001"`.
- **CBSE Mathematics/Science**: real ones have `"(2025 Board)"` or `"(2026 Board)"`
  appended directly to the question `text`, interspersed within their normal chapter
  (not a separate chapter) — e.g. `"text": "The LCM of 960 and 240 is (2026 Board)"`.
- **Everything else** (Social Science, all of ICSE): no year tag anywhere — every
  question was authored to the syllabus rather than sourced from a specific paper.
