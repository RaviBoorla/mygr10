#!/usr/bin/env python3
"""One-off backfill: tag existing MCQs with an optional `qtype` field so
Assertion-Reason and statement-based ("I./II./III." reasoning) competency
questions become queryable. See docs/design.md's competency-question entry.

Detection is pattern-based on question text only — no new content is
authored here, just labeling what already exists. Run once from repo root:
    python3 scripts/tag_qtype.py
"""
import json
import re
from pathlib import Path

QUESTIONS_DIR = Path(__file__).resolve().parent.parent / "public" / "questions"

AR_RE = re.compile(r"assertion\s*\(a\)|assertion\s*:", re.I)
REASON_RE = re.compile(r"reason\s*\(r\)|reason\s*:", re.I)
ROMAN_RE = re.compile(r"\bI\.\s|\bII\.\s|\bIII\.\s|\bIV\.\s")

FILES = [
    "X-CBSE-Mathematics.json",
    "X-CBSE-Science.json",
    "X-CBSE-Social-Science.json",
]


def classify(text):
    if AR_RE.search(text) and REASON_RE.search(text):
        return "assertion-reason"
    if len(ROMAN_RE.findall(text)) >= 3:
        return "statement-based"
    return None


def tag_file(path):
    data = json.loads(path.read_text(encoding="utf-8"))
    counts = {}
    out = []
    for q in data:
        qtype = classify(q.get("text", ""))
        if qtype:
            counts[qtype] = counts.get(qtype, 0) + 1
            # Rebuild with qtype right after chapter, preserving the rest of
            # the field order — insertion order matters for readable diffs.
            new_q = {}
            for k, v in q.items():
                new_q[k] = v
                if k == "chapter":
                    new_q["qtype"] = qtype
            if "qtype" not in new_q:
                new_q["qtype"] = qtype
            out.append(new_q)
        else:
            out.append(q)
    path.write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")
    return counts


def main():
    grand_total = {}
    for fname in FILES:
        path = QUESTIONS_DIR / fname
        counts = tag_file(path)
        for k, v in counts.items():
            grand_total[k] = grand_total.get(k, 0) + v
        print(fname, counts)
    print("TOTAL", grand_total, sum(grand_total.values()))


if __name__ == "__main__":
    main()
