# Round 2 changelog (by item)

## 1. Trees drawn as straight vertical lines
- Rewrote the shared `<TreeGraph />` layout as a contour-packed tidy layout: a lone LEFT child is always drawn down-left of its parent and a lone RIGHT child down-right (offset 0.75 x node diameter = 42px), a parent with two children is centred above them, sibling subtrees are packed per depth level with a 24px minimum edge-to-edge gap (spec minimum 20px), and edges run from node border to node border.
- Fixed two bugs found by a DOM-position audit: lone LEAF children lost their sideways offset (this produced the exact "20 -> 19 -> 3 -> 4" and "54 -> 20 -> 4" columns you saw) and left-heavy trees were clipped at the SVG's left edge.
- Animated reflow kept (320ms transform + geometry transitions). Applied once in `<TreeGraph />`, so the BST builder, deletion playground, AVL playground, rotation player, traversal trainer, terminology tree and heaps all get it.
- Verified with your four key sets (1..6, 6..1, 10 5 8 6 7, 50 30 70 20 40 60 80) by an automated geometry audit of the rendered SVG: no vertical columns (every parent-child edge has >= 40px horizontal offset), no same-level pair under 20px clear gap, nothing out of bounds; screenshots in `download/round2-shots/bst-*.png`.

## 2. Empty "Interactive playground" (Topic 9)
- Root cause: the migrated note carried the original JS-driven playground as a dead paragraph (`Nodes: <b id="nodeCount">0</b>`) plus an empty `<svg id="treeSvg" viewBox="0 0 700 360">`, so the card rendered a ~500px blank box. Not a hydration bug.
- Built `BstDeleteViz` and wired it in as a new viz block: preloaded sample tree 50 30 70 20 40 60 80 + 35 + 65, value input, successor/predecessor method radio cards, Delete, Random tree, Reset; clicking a node selects it and fills the input; delete animates all three cases with a narrated console log ("Node 30 has two children... In-order successor is 35... Copy 35 into 30, then remove the old 35."); empty tree shows a friendly placeholder with a "Load sample tree" button; the card height fits its content.

## 3. Rotation player: real numbers
- Rewritten on your exact example set: LL 30/20/10, RR 10/20/30, LR 30/10/20, RL 10/30/20, with T0-T3 played by the real keys 5, 15, 25, 35 as leaves. All four end as 20(10(5,15),30(25,35)) and the UI states this as the key takeaway.
- Nodes show real keys with small coloured role tags (z red "unbalanced, BF +/-2", y violet "heavy child", x green "heavy grandchild"); no more ghost circles.
- BF badges are recomputed from the actual structure after every step (mid-rotation states honestly still show +/-2 on z) and the end state shows every BF = 0. Explanations use the numbers ("BF(10) = -2 and BF(20) = -1, so rotate LEFT at 10. 20 becomes the subtree root, 10 swings down-left, and 20's old left child 15 becomes 10's right child.").

## 4. Gigantic "Valid AVL tree" diagram
- `<TreeGraph />` node size is now a fixed design token (56px diameter, 2px border, 2px edges) that never scales with the container. The SVG is drawn at the layout's real pixel size and centred; on narrow screens it shrinks only down to ~40px nodes and then scrolls horizontally.
- The balance factor is always the same pill badge at the node's top-right with one shared colour rule everywhere: 0 green, +/-1 amber, +/-2 red (auto-derived from the badge value, so the old "+1 green here, -1 amber there" mismatch is gone).
- "Spot the difference" is now one comparison panel: "Valid AVL tree" and "Not an AVL tree" side by side (two columns at >= 900px, stacked below), same size, the offending node ringed in red with a one-line caption saying why. The same treatment was applied to the Red-Black spot-the-difference further down the chapter.
- Bonus: the Red-Black "Case A / Case B" callouts' empty mini diagrams were filled with real recolor/rotate before-and-after SVGs (red/black nodes, dashed violation rings).

## 5. Empty "The 4 rotation cases" cards
- Same root cause family: the four callouts contained empty `<svg id="svgLLb">`-style placeholders whose JS never survived the migration.
- Replaced with a new `AvlRotationCasesViz` widget: 2x2 grid at >= 1100px, single column below, equal-height cards sized to content. Each card has the case name and rotation-type chips, the condition with your real numbers ("BF(30) = +2 and BF(20) >= 0"), a BEFORE -> AFTER `<TreeGraph />` pair with the item-3 numbers (z/y/x tagged, unbalanced node ringed red, rotated nodes in role colours), numbered plain-English steps, a one-line takeaway, and a "Play this case" button that loads the case into the animated rotation player (scrolls to it and autoplays).
- Accent colours per case: LL blue, RR violet, LR amber, RL teal, reused for chips and buttons. The C code sections were omitted because no rotation C code exists in the notes (as allowed by "if it exists in my notes").

## 6. UI reference
- Extracted the reference's design tokens into one place (`globals.css`): light/dark palettes (bg #f1f5f9/#0b1220, cards #ffffff/#111a2e, ink #0f172a/#e2e8f0, edges #94a3b8/#475569), indigo #4f46e5 accent + teal #0d9488 secondary, node fill/stroke pair, radii (16px cards, 10px buttons, 99px chips), card and button shadows, the 135deg indigo-to-teal hero gradient, the dot-grid tree wrap, and console-style status/log lines.
- Poppins (400-800) + JetBrains Mono via next/font; per-component hard-coded colours replaced by shared tokens (per-book accent overrides removed; one shared indigo accent).
- Component patterns rebuilt in the reference's language: gradient hero bands (gallery + book pages), raised cards with hover lift, chip/badge pills, method-pick radio cards, indigo-banded tables with row hover, dark console code blocks, teal-edged quiz cards with green/red option fills and explanations, floating quiz drawer tab, restyled sidebar/TOC/controls, and the reference's animation feel (fadeUp entrances, pulse on targets, 200ms transitions).
- Reference content coverage checked: the two-method deletion content, comparison table and quiz it contains all exist on the site, and the interactive playground itself was rebuilt (item 2).

## 7. TOC and chapter sweep
- Root cause of the duplicated/garbled TOC: the round-1 migration doubled every "field notes" heading (an `id` + `id-2` twin) and concatenated the Latin subtitle spans into the heading text ("The BST propertylex ordinis"). All doubled headings were de-duplicated (ch07, ch09), the 11 garbled ch09 headings were rebuilt with clean ids and labels, and duplicate TOC labels elsewhere were disambiguated ("Spot the difference: AVL / red-black", "Test yourself: AVL / red-black", field-notes search/insertion/deletion).
- TOC rail no longer clips: right padding + overflow-x-hidden + word wrapping, verified at 1280px and 1900px.
- Swept all 15 DSA chapters (and the other books) for blank blocks: removed two more JS-emptied tables (ch07; ch09), filled the econ demand schedule and maths trig table with their intended static data, cleaned dead `data-live` readout spans and stale "bench/demonstrate" promises, and restyled ch07's unstyled black A-J figure.
- Added `scripts/smoke.py` (`npm run smoke`): a Playwright script that visits every chapter (all 6 books, 75 chapters), scrolls through to mount lazy widgets, and fails on console/page errors, any widget under ~80px tall, blank SVGs, header-only tables, or duplicate/empty TOC entries. It currently reports all clean, and it is what found the remaining empty tables and duplicate labels.

## 8. Writing style
- Em dashes: every occurrence across all content and UI strings was rewritten contextually (colon for term-definition, comma for appositives, semicolon/period for independent clauses, "None" for lone table dashes, "Topic N Quiz: X" for quiz titles) - never a blind find-and-replace; the diff was reviewed and artifacts hand-fixed. Ranges (0-4, T0-T3), the true minus sign (BF = -2), compound-word hyphens and code operators were preserved, and the exam-alert wording is unchanged apart from punctuation.
- `npm run lint:copy` (`scripts/lint-copy.mjs`) scans content files and TSX/TS string literals for U+2014, spaced en dashes and " -- ", prints per-file counts and exits non-zero if any remain. It is wired into `npm run lint`. Current status: 0 violations across 240 files.
- Exclamation marks in explanatory text (46) were calmed, including inside displayed C code comments; filler ("magic function", "simply"/"just" as hype) was rewritten; headings, callout labels, buttons and TOC entries now use sentence case with acronyms and proper nouns preserved; emoji were stripped from headings (the tree headings now carry lucide-style typography only).

## Not fixed / deliberate deviations
- The case-card BEFORE/AFTER minis use a fixed 44px design node instead of 56px: the spec's 2x2 grid at >= 1100px leaves about 460px per card and two 56px-node trees cannot sit side by side in that width. They are fixed-px (never container-scaled) and render at ~33px; every interactive widget uses exactly 56px.
- The maths book's aligned-column elimination layout ("2x + 3y = 12 ... , , , ,") is original source formatting and was left as is.
- The Next.js dev-tools circle seen in screenshots is a dev-mode overlay, not part of the site.
