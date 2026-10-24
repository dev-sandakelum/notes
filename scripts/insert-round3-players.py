#!/usr/bin/env python3
"""Insert the four StepPlayer viz blocks into ch08, above the existing
static trace tables (tables are kept)."""
import sys

F = "src/content/books/dsa/chapters/08-tree-traversals.ts"
src = open(F, encoding="utf-8").read()

inserts = []


def insert_before(anchor, block, tag):
    global src
    if anchor not in src:
        inserts.append((tag, "ANCHOR MISSING"))
        return
    if block.strip() in src:
        inserts.append((tag, "already present"))
        return
    src = src.replace(anchor, block + anchor, 1)
    inserts.append((tag, "ok"))


# (a) traversal player — top of the "pre-order, in-order, post-order traversal" section
anchor_a = '''    {
      "type": "heading",
      "depth": 4,
      "id": "2-pre-order-in-order-post-order-traversal",'''
block_a = '''    {
      "type": "viz",
      "kind": "traversalPlayer",
      "caption": "Optional: step through the real recursive traversal (the static trace tables below stay)."
    },
'''
insert_before(anchor_a, block_a, "traversal player above section 2 tables")

# (b) notation player — right after the expression-tree treeDiagram figure's closing
anchor_b = '''    {
      "type": "heading",
      "depth": 3,
      "id": "traversals-and-notations-deeper-notes",'''
block_b = '''    {
      "type": "viz",
      "kind": "notationPlayer",
      "caption": "Optional: watch the same tree produce all three notations."
    },
'''
insert_before(anchor_b, block_b, "notation player after expression tree figure")

# (c) postfix eval player — before the "Evaluating postfix" heading content (after the list of rules)
# find the warn callout that follows the heading, insert after the list block
anchor_c = '''    {
      "type": "callout",
      "variant": "warn",
      "title": "Note",
      "html": "⚠ <b>#1 mistake:</b> the <b>first pop is the RIGHT operand</b> (second pop = left). Critical for <code>-</code> and <code>/</code>!"
    },'''
block_c = '''    {
      "type": "viz",
      "kind": "postfixEval",
      "caption": "Optional: scan 5 3 + 8 2 - * step by step (edit the expression to try your own)."
    },
'''
insert_before(anchor_c, block_c, "postfix eval player above trace table")

# (d) infix->postfix player — after the ordered rules list in "Converting infix → postfix"
anchor_d = '''    {
      "type": "table",
      "caption": "Trace: <code>A + B * C - D</code>",'''
block_d = '''    {
      "type": "viz",
      "kind": "infixPostfix",
      "caption": "Optional: the shunting-yard method live (the trace tables below stay)."
    },
'''
insert_before(anchor_d, block_d, "infix->postfix player above trace table")

open(F, "w", encoding="utf-8").write(src)
for tag, status in inserts:
    print(f"  [{status}] {tag}")
bad = [t for t, s in inserts if s not in ("ok", "already present")]
sys.exit(1 if bad else 0)
