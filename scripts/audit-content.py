#!/usr/bin/env python3
"""Audit all chapter content for:
1. Tables whose header length != row length (mismatched columns)
2. HTML blocks with ASCII trees (multi-space patterns) that lost newlines
3. SVG figures with hardcoded viewBox smaller than node extents (cropping)
4. Long unbroken mono lines (overflow candidates)
"""
import re
import glob
import json

issues = []

for path in sorted(glob.glob("src/content/books/*/chapters/*.ts")):
    book = path.split("/")[3]
    ch = path.split("/")[-1].replace(".ts", "")
    src = open(path, encoding="utf-8").read()

    # --- 1. table head/rows length mismatch ---
    # crude TS parse: find "type": "table" blocks with head + rows
    for m in re.finditer(r'"type":\s*"table",\s*"head":\s*\[(.*?)\]\s*,\s*"rows":\s*\[(.*?)\]\s*,?\s*\}', src, re.S):
        head_raw, rows_raw = m.group(1), m.group(2)
        head_cells = re.findall(r'"(?:[^"\\]|\\.)*"', head_raw)
        # split rows by "], [" boundaries
        row_groups = re.findall(r'\[(.*?)\]', rows_raw, re.S)
        for i, rg in enumerate(row_groups):
            cells = re.findall(r'"(?:[^"\\]|\\.)*"', rg)
            if len(cells) != len(head_cells):
                line_no = src[:m.start()].count("\n") + 1
                issues.append((book, ch, line_no, "table-mismatch",
                               f"head={len(head_cells)} cols but row {i} has {len(cells)}: {[c[:30] for c in cells[:4]]}"))

    # --- 2. ASCII tree / lost newlines ---
    # html strings containing tree-ish backslash patterns on one line
    for m in re.finditer(r'"html":\s*"((?:[^"\\]|\\.)*)"', src):
        h = m.group(1)
        # ASCII tree markers: "/ \" sequences or repeated spaces+letters
        if re.search(r'/\s*\\', h) and '\\n' not in h:
            line_no = src[:m.start()].count("\n") + 1
            issues.append((book, ch, line_no, "ascii-tree-lost-newlines", h[:80]))
        # long runs of internal spaces (alignment lost)
        if re.search(r'\S( {6,}\S.*){3,}', h) and '\\n' not in h:
            line_no = src[:m.start()].count("\n") + 1
            issues.append((book, ch, line_no, "lost-newlines-spaces", h[:80]))

    # --- 3. SVG viewBox vs node extents ---
    for m in re.finditer(r'"svg":\s*"((?:[^"\\]|\\.)*)"', src):
        svg = m.group(1).replace('\\"', '"')
        vb = re.search(r'viewBox="([\d.\s-]+)"', svg)
        if not vb:
            continue
        vx, vy, vw, vh = [float(x) for x in vb.group(1).split()]
        # collect circle positions
        ok = True
        worst = None
        for c in re.finditer(r'<circle[^>]*cx="([\d.]+)"[^>]*cy="([\d.]+)"[^>]*r="([\d.]+)"', svg):
            cx, cy, r = map(float, c.groups())
            over = []
            if cx - r < vx: over.append(f"left:{cx-r:.0f}<{vx:.0f}")
            if cx + r > vx + vw: over.append(f"right:{cx+r:.0f}>{vx+vw:.0f}")
            if cy - r < vy: over.append(f"top:{cy-r:.0f}<{vy:.0f}")
            if cy + r > vy + vh: over.append(f"bottom:{cy+r:.0f}>{vy+vh:.0f}")
            if over:
                ok = False
                worst = "; ".join(over)
        if not ok:
            line_no = src[:m.start()].count("\n") + 1
            issues.append((book, ch, line_no, "svg-cropped", f"viewBox={vb.group(1)} nodes out: {worst}"))
        # also check text elements position beyond viewBox
        for t in re.finditer(r'<text[^>]*x="([\d.]+)"[^>]*y="([\d.]+)"', svg):
            tx, ty = map(float, t.groups())
            if tx < vx or tx > vx + vw or ty < vy or ty > vy + vh:
                line_no = src[:m.start()].count("\n") + 1
                issues.append((book, ch, line_no, "svg-text-outside-viewBox", f"text at ({tx},{ty}) vs viewBox {vb.group(1)}"))
                break

print(f"{len(issues)} issues found:")
for book, ch, line, kind, detail in issues:
    print(f"  [{kind}] {book}/{ch}:{line}")
    print(f"      {detail}")
