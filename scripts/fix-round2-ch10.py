#!/usr/bin/env python3
"""Round 2 content fixes for ch10 (text, headings, Red-Black sections)."""
import re
import sys

CH10 = "src/content/books/dsa/chapters/10-avl-trees-and-balanced-trees.ts"


def sub(old, new, count=1, must=True):
    with open(CH10, encoding="utf-8") as f:
        src = f.read()
    n = src.count(old)
    if n == 0:
        if new and new in src:
            return
        if must:
            print(f"MISS: {old[:100]!r}")
            sys.exit(1)
        return
    if count and n != count:
        print(f"COUNT MISMATCH ({n} != {count}): {old[:100]!r}")
        sys.exit(1)
    with open(CH10, "w", encoding="utf-8") as f:
        f.write(src.replace(old, new))
    print(f"ok: {n}x {old[:70]!r}")


# ------------------------------------------------------------------ #
# Headings and callout titles                                         #
# ------------------------------------------------------------------ #

for old, new in [
    ("What is an AVL Tree?", "What is an AVL tree?"),
    ("\u2696 Balance Factor (BF) \u2014 The Heart of AVL", "Balance factor (BF): the heart of AVL"),
    ("The 4 Rotation Cases (when BF hits \u00b12)", "The four rotation cases (when BF hits \u00b12)"),
    ("Interactive AVL Playground", "Interactive AVL playground"),
    ("AVL vs Normal BST", "AVL vs normal BST"),
    ("Test Yourself", "Test yourself"),
    ("Red-Black trees (introduction)", "Red-black trees (introduction)"),
    ("What is a Red-Black Tree?", "What is a red-black tree?"),
    ("The 5 Golden Rules", "The five golden rules"),
    ("Spot the Difference", "Spot the difference"),
    ("\u2795 Insertion \u2014 Always Insert RED!", "Insertion: always insert red"),
    ("\u2796 Deletion (The Short Version)", "Deletion (the short version)"),
    ("Red-Black Fixup \u2014 Worked Example", "Red-black fixup: worked example"),
    ("Red-Black vs AVL", "Red-black vs AVL"),
    ("Case A \u2014 Uncle is RED \u2192 RECOLOR", "Case A: uncle is red \u2192 recolor"),
    ("\u26ab Case B \u2014 Uncle is BLACK \u2192 ROTATE + RECOLOR", "Case B: uncle is black \u2192 rotate + recolor"),
    ("Topic 9 Quiz \u2014 AVL Trees & Balanced Trees", "Topic 9 Quiz: AVL Trees & Balanced Trees"),
    ("Exercise \u2014 is this a balanced tree? (from lecture)\u25be", "Exercise: is this a balanced tree? (from lecture)"),
]:
    sub('"text": "%s"' % old, '"text": "%s"' % new, count=None, must=False)
    sub('"title": "%s"' % old, '"title": "%s"' % new, count=None, must=False)

# ------------------------------------------------------------------ #
# Paragraphs and captions                                             #
# ------------------------------------------------------------------ #

sub(
    "Invented by <b>Adelson-Velsky &amp; Landis</b> (1962) \u2014 the <b>first self-balancing BST</b> in history.",
    "Invented by <b>Adelson-Velsky &amp; Landis</b> (1962), the <b>first self-balancing BST</b> in history.",
)
sub(
    "so search stays <b>O(log n)</b> \u2014 always.",
    "so search stays <b>O(log n)</b>, always.",
)
sub(
    '"caption": "A valid AVL tree \u2014 balance factor \u2208 {\u22121, 0, +1} at every node"',
    '"caption": "A valid AVL tree: balance factor \u2208 {\u22121, 0, +1} at every node"',
)
sub(
    '"caption": "Rotation case player \u2014 LL, RR, LR and RL step by step"',
    '"caption": "Rotation case player: LL, RR, LR and RL step by step"',
)
sub(
    '"caption": "AVL rebalance playground \u2014 insert keys and watch the rotations"',
    '"caption": "AVL rebalance playground: insert keys and watch the rotations"',
)
sub(
    "and the tree <b>rotates itself</b> \u2014 step by step!",
    "and the tree <b>rotates itself</b>, step by step.",
)
sub(
    "then insert <b>5</b> (LL rotation!). Or press",
    "then insert <b>5</b> (LL rotation). Or press",
)
sub(
    '"html": "Click an answer \u2014 instant feedback!"',
    '"html": "Click an answer for instant feedback."',
    count=2,
)
sub(
    "(fix the bend first!).<br> Why does one rotation always fix it? The rotation promotes the middle value of the three nodes \u2014 which is exactly what sorted order demands!",
    "(fix the bend first).<br> Why does one rotation always fix it? The rotation promotes the middle value of the three nodes, which is exactly what sorted order demands.",
)

# Notation paragraph: T0-T3 are played by real keys now.
sub(
    "<b>T\u2080\u2013T\u2083</b> = the four subtrees hanging off x, y, z. Compact rule:",
    "<b>T\u2080\u2013T\u2083</b> = the four subtrees hanging off x, y and z (played by the leaves 5, 15, 25 and 35). Compact rule:",
)

# The four case bullets: real keys instead of abstract z/y/x notation.
sub(
    '"<b>LL \u2014 insert into the LEFT subtree of the LEFT child</b> (z \u2192 y \u2192 x all lean left; BF(z) = +2, BF(y) = +1). Cure: one <b>right rotation at z</b> \u2014 y rises to head the subtree, z drops to y\'s right, and y\'s old right child T\u2082 passes to z as its new left child. After: y(x(T\u2080, T\u2081), z(T\u2082, T\u2083)) \u2014 every |BF| \u2264 1.",',
    '"<b>LL: insert into the LEFT subtree of the LEFT child</b> (30 \u2192 20 \u2192 10 all lean left; BF(30) = +2, BF(20) = +1). Cure: one <b>right rotation at 30</b>. 20 rises to head the subtree, 30 drops to 20\'s right, and 20\'s old right child 25 passes to 30 as its new left child. After: 20(10(5,15),30(25,35)), every |BF| \u2264 1.",',
)
sub(
    '"<b>RR \u2014 insert into the RIGHT subtree of the RIGHT child</b> (z \u2192 y \u2192 x all lean right; BF(z) = \u22122, BF(y) = \u22121). Cure: one <b>left rotation at z</b> \u2014 y rises to head the subtree, z drops to y\'s left, and y\'s old left child T\u2081 passes to z as its new right child. After: y(z(T\u2080, T\u2081), x(T\u2082, T\u2083)).",',
    '"<b>RR: insert into the RIGHT subtree of the RIGHT child</b> (10 \u2192 20 \u2192 30 all lean right; BF(10) = \u22122, BF(20) = \u22121). Cure: one <b>left rotation at 10</b>. 20 rises to head the subtree, 10 drops to 20\'s left, and 20\'s old left child 15 passes to 10 as its new right child. After: 20(10(5,15),30(25,35)).",',
)
sub(
    '"<b>LR \u2014 insert into the RIGHT subtree of the LEFT child</b> (the z \u2192 y \u2192 x path zig-zags; BF(z) = +2, BF(y) = \u22121). Cure: <b>two rotations</b> \u2014 first a <b>left rotation at y</b> straightens the bend into a plain left-left line, then a <b>right rotation at z</b> finishes the job. After: x(y(T\u2080, T\u2081), z(T\u2082, T\u2083)).",',
    '"<b>LR: insert into the RIGHT subtree of the LEFT child</b> (the 30 \u2192 10 \u2192 20 path zig-zags; BF(30) = +2, BF(10) = \u22121). Cure: <b>two rotations</b>. First a <b>left rotation at 10</b> straightens the bend into a plain left-left line, then a <b>right rotation at 30</b> finishes the job. After: 20(10(5,15),30(25,35)).",',
)
sub(
    '"<b>RL \u2014 insert into the LEFT subtree of the RIGHT child</b> (the zig-zag runs the other way; BF(z) = \u22122, BF(y) = +1). Cure: <b>two rotations</b> \u2014 first a <b>right rotation at y</b>, then a <b>left rotation at z</b>. After: x(z(T\u2080, T\u2081), y(T\u2082, T\u2083))."',
    '"<b>RL: insert into the LEFT subtree of the RIGHT child</b> (the 10 \u2192 30 \u2192 20 path zig-zags the other way; BF(10) = \u22122, BF(30) = +1). Cure: <b>two rotations</b>. First a <b>right rotation at 30</b>, then a <b>left rotation at 10</b>. After: 20(10(5,15),30(25,35))"',
)

# ------------------------------------------------------------------ #
# Tables                                                              #
# ------------------------------------------------------------------ #

sub('"html": "You will be shown a BST and asked \u201cis this an AVL tree?\u201d \u2014 compute BF for <b>every node</b>.',
    '"html": "You will be shown a BST and asked \u201cis this an AVL tree?\u201d Compute BF for <b>every node</b>.')
sub('"\u274c Rotate!"', '"Rotate"', count=2)
sub('''        [
          "Worst-case search",
          "O(n) \u2014 skewed tree",
          "O(log n) \u2014 guaranteed"
        ],''', '''        [
          "Worst-case search",
          "O(n) in a skewed tree",
          "O(log n), guaranteed"
        ],''')
sub('''        [
          "Self-balancing",
          "\u274c",
          " via LL/RR/LR/RL rotations"
        ],''', '''        [
          "Self-balancing",
          "No",
          "Yes, via LL/RR/LR/RL rotations"
        ],''')
sub('''        [
          "Extra storage per node",
          "\u2014",
          "Height (or BF)"
        ],''', '''        [
          "Extra storage per node",
          "None",
          "Height (or BF)"
        ],''')
sub('"Strict \u2014 BF \u2208 {\u22121, 0, +1}"', '"Strict: BF \u2208 {\u22121, 0, +1}"')
sub('"Loose \u2014 longest \u2264 2\u00d7 shortest path"', '"Loose: longest \u2264 2\u00d7 shortest path"')
sub('" Fewer rotations \u2014 faster"', '"Fewer rotations, faster"')
sub('" Faster (flatter tree)"', '"Faster (flatter tree)"')
sub('" std::map, TreeMap, Linux kernel"', '"std::map, TreeMap, Linux kernel"')

# ------------------------------------------------------------------ #
# Red-Black text                                                      #
# ------------------------------------------------------------------ #

sub(
    '"html": "Every Red-Black tree must satisfy ALL of them \u2014 the playground checks them for you!"',
    '"html": "Every red-black tree must satisfy all five rules, simultaneously."',
)
sub(
    "A red node can only break <b>Rule 4</b> locally (easy fix). A black node would break Rule 5 on <i>every</i> path \u2014 much worse!",
    "A red node can only break <b>Rule 4</b> locally, which is a local fix. A black node would break Rule 5 on <i>every</i> path, which is much worse.",
)
sub("<span class=\\\"cond\\\">No rotation needed!</span>", "<span class=\\\"cond\\\">No rotation needed.</span>")
sub("<span class=\\\"cond\\\">Same LL / RR / LR / RL shapes as AVL!</span>", "<span class=\\\"cond\\\">Same LL / RR / LR / RL shapes as AVL.</span>")
sub("(no cascade!)", "(no cascade)")
sub(
    "<b>Exam tip:</b> deletion fix-up is the most complex part of RB trees \u2014 exams usually focus on <b>properties + insertion</b>. Try deletions in the playground and watch the sibling cases fire!",
    "<b>Exam tip:</b> deletion fix-up is the most complex part of red-black trees; exams usually focus on the properties and insertion.",
)
sub(
    "For live rotation practice, use the <b>AVL rebalance playground</b> earlier in this chapter \u2014 the rotation mechanics are identical. Red-black trees simply pick the cheaper fix first: recolor when the uncle is red, rotate when it is black.",
    "For live rotation practice, use the <b>AVL rebalance playground</b> earlier in this chapter; the rotation mechanics are identical. Red-black trees pick the cheaper fix first: recolor when the uncle is red, rotate when it is black.",
)

print("CH10 TEXT FIXES APPLIED")
