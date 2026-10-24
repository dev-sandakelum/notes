#!/usr/bin/env python3
"""Round 2: ch10 Red-Black sections.

1. "Spot the difference" becomes one side-by-side comparison panel
   (.compare2, two columns >= 900px) with one-line captions.
2. The Case A / Case B callouts get real mini diagrams (they were empty
   SVG placeholders whose JS never survived the migration).
"""
import re
import sys

CH10 = "src/content/books/dsa/chapters/10-avl-trees-and-balanced-trees.ts"

with open(CH10, encoding="utf-8") as f:
    src = f.read()

# ------------------------------------------------------------------ #
# 1. Red-Black spot the difference -> side-by-side htmlFigure        #
# ------------------------------------------------------------------ #

h4_valid = re.search(
    r'    \{\n      "type": "heading",\n      "depth": 4,\n      "id": "valid-red-black-tree",\n      "text": "Valid Red-Black Tree"\n    \},\n',
    src,
)
h4_invalid = re.search(
    r'    \{\n      "type": "heading",\n      "depth": 4,\n      "id": "invalid-rule-4-broken",\n      "text": "\u274c Invalid \(Rule 4 broken\)"\n    \},\n',
    src,
)
if not h4_valid or not h4_invalid:
    print("RB headings not found")
    sys.exit(1)

# Extract the two figures (svg + alt) across the whole section: from the
# "Valid" h4 up to the next h3 heading after the invalid paragraph.
after_invalid = src.index('    {\n      "type": "heading"', h4_invalid.end())
seg = src[h4_valid.start(): after_invalid]
fig_re = re.compile(
    r'    \{\n      "type": "figure",\n      "svg": "([\s\S]*?)",\n      "alt": "([\s\S]*?)",?\n    \},\n'
)
figs = fig_re.findall(seg)
if len(figs) != 2:
    print(f"expected 2 RB figures, found {len(figs)}")
    sys.exit(1)
svg_valid, alt_valid = figs[0]
svg_invalid, alt_invalid = figs[1]

# The trailing paragraphs after each figure (one-line captions).
para_re = re.compile(
    r'    \{\n      "type": "paragraph",\n      "html": "([\s\S]*?)"\n    \},\n'
)
paras = para_re.findall(seg)
cap_valid = "Root black; no red-red pair; every root-to-NIL path has exactly 3 black nodes."
cap_invalid = "Node 20 is red and its child 30 is red: a red-red pair breaks rule 4."

start = h4_valid.start()
end = after_invalid

# svg/alt strings are extracted with their file escaping intact, so they
# can be re-embedded verbatim.
html = (
    '<div class=\\"compare2\\"><div>'
    + svg_valid
    + '<p class=\\"cap\\">' + cap_valid + '</p></div><div>'
    + svg_invalid
    + '<p class=\\"cap\\">' + cap_invalid + '</p></div></div>'
)

block = (
    '    {\n      "type": "htmlFigure",\n      "html": "'
    + html
    + '",\n      "alt": "Side-by-side comparison. Left: '
    + alt_valid
    + ' Right: '
    + alt_invalid
    + '",\n      "caption": "One red-red parent-child pair is enough to disqualify a red-black tree."\n    },\n'
)
src = src[:start] + block + src[end:]
print("ok: RB spot-the-difference -> compare2")

# ------------------------------------------------------------------ #
# 2. Fill the Case A / Case B empty minis                             #
# ------------------------------------------------------------------ #

BLACK = ("var(--ink)", "var(--ink-faint)", "var(--paper)")
RED = ("#dc2626", "#b91c1c", "#ffffff")


def node(x, y, r, color, label):
    fill, stroke, tfill = color
    return (
        f'<circle cx=\\"{x}\\" cy=\\"{y}\\" r=\\"{r}\\" fill=\\"{fill}\\" stroke=\\"{stroke}\\" stroke-width=\\"2\\"></circle>'
        f'<text x=\\"{x}\\" y=\\"{y + 1}\\" text-anchor=\\"middle\\" dominant-baseline=\\"central\\" fill=\\"{tfill}\\" font-size=\\"13\\" font-weight=\\"700\\" font-family=\\"monospace\\">{label}</text>'
    )


def edge(x1, y1, x2, y2):
    return f'<line x1=\\"{x1}\\" y1=\\"{y1}\\" x2=\\"{x2}\\" y2=\\"{y2}\\" stroke=\\"var(--fig-axis)\\" stroke-width=\\"2\\"></line>'


def ring(cx, cy, rx, ry):
    return (
        f'<ellipse cx=\\"{cx}\\" cy=\\"{cy}\\" rx=\\"{rx}\\" ry=\\"{ry}\\" fill=\\"none\\" '
        f'stroke=\\"var(--danger)\\" stroke-width=\\"2\\" stroke-dasharray=\\"6 4\\"></ellipse>'
    )


def svg(body, w=300, h=175):
    return f'<svg class=\\"mini\\" viewBox=\\"0 0 {w} {h}\\" role=\\"img\\">{body}</svg>'


# Case A: uncle RED -> recolor. Before: red-red under 8; After: recolored.
case_a_before = svg(
    edge(140, 30, 85, 100)
    + edge(140, 30, 195, 100)
    + edge(85, 100, 45, 160)
    + edge(85, 100, 125, 160)
    + ring(65, 130, 52, 40)
    + node(140, 30, 16, BLACK, "13")
    + node(85, 100, 16, RED, "8")
    + node(195, 100, 16, RED, "17")
    + node(45, 160, 14, RED, "1")
    + node(125, 160, 14, BLACK, "11")
)
case_a_after = svg(
    edge(140, 30, 85, 100)
    + edge(140, 30, 195, 100)
    + edge(85, 100, 45, 160)
    + edge(85, 100, 125, 160)
    + node(140, 30, 16, RED, "13")
    + node(85, 100, 16, BLACK, "8")
    + node(195, 100, 16, BLACK, "17")
    + node(45, 160, 14, RED, "1")
    + node(125, 160, 14, BLACK, "11")
)

# Case B: uncle BLACK -> rotate + recolor (RR shape at 10).
case_b_before = svg(
    edge(110, 30, 55, 105)
    + edge(110, 30, 185, 105)
    + edge(185, 105, 250, 160)
    + ring(218, 133, 52, 40)
    + node(110, 30, 16, BLACK, "10")
    + node(55, 105, 14, BLACK, "5")
    + node(185, 105, 16, RED, "20")
    + node(250, 160, 14, RED, "30")
)
case_b_after = svg(
    edge(150, 30, 85, 105)
    + edge(150, 30, 215, 105)
    + edge(85, 105, 45, 160)
    + node(150, 30, 16, BLACK, "20")
    + node(85, 105, 16, RED, "10")
    + node(215, 105, 16, RED, "30")
    + node(45, 160, 14, BLACK, "5")
)

src = src.replace(
    '<svg id=\\"svgRecB\\" class=\\"mini\\" viewBox=\\"0 0 300 180\\"></svg>',
    case_a_before,
)
src = src.replace(
    '<svg id=\\"svgRecA\\" class=\\"mini\\" viewBox=\\"0 0 300 180\\"></svg>',
    case_a_after,
)
src = src.replace(
    '<svg id=\\"svgRotB\\" class=\\"mini\\" viewBox=\\"0 0 300 180\\"></svg>',
    case_b_before,
)
src = src.replace(
    '<svg id=\\"svgRotA\\" class=\\"mini\\" viewBox=\\"0 0 300 180\\"></svg>',
    case_b_after,
)

# The worked-example paragraph after the Case A/B cards mentions the
# playground: keep, dashes are swept globally.

with open(CH10, "w", encoding="utf-8") as f:
    f.write(src)
print("ok: Case A/B minis filled")
print("RB FIXES APPLIED")
