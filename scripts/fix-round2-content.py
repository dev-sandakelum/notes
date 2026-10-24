#!/usr/bin/env python3
"""Round 2 content fixes for the DSA book (chapters 07, 09, 10).

Structural changes only (viz replacements, heading de-duplication, dead
fragment removal, table repair). The global dash/case sweep runs
separately in sweep_copy.py.
"""
import re
import sys

BASE = "src/content/books/dsa/chapters/"


def sub(path, old, new, count=1, must=True):
    with open(path, encoding="utf-8") as f:
        src = f.read()
    n = src.count(old)
    if n == 0:
        if new and new in src:
            print(f"skip (already applied) {path}: {old[:60]!r}")
            return
        if must:
            print(f"MISS in {path}: {old[:90]!r}")
            sys.exit(1)
        return
    if count and n != count:
        print(f"COUNT MISMATCH in {path} ({n} != {count}): {old[:90]!r}")
        sys.exit(1)
    src = src.replace(old, new)
    with open(path, "w", encoding="utf-8") as f:
        f.write(src)
    print(f"ok {path}: {n}x {old[:60]!r}")


def heading(depth, hid, text):
    return (
        '    {\n      "type": "heading",\n      "depth": %d,\n      "id": "%s",\n'
        '      "text": "%s"\n    },\n' % (depth, hid, text)
    )


# ------------------------------------------------------------------ #
# Part A: mechanical de-duplication of doubled heading blocks        #
# (an id + the same id with "-2", identical depth and text)          #
# ------------------------------------------------------------------ #

def dedupe_headings(path):
    with open(path, encoding="utf-8") as f:
        src = f.read()
    block = (
        r'    \{\n      "type": "heading",\n      "depth": (\d+),\n'
        r'      "id": "([^"]+)",\n      "text": "([^"]+)"\n    \},\n'
    )
    pat = re.compile(block + block)
    removed = []

    def repl(m):
        d1, id1, t1, d2, id2, t2 = m.groups()
        if d1 == d2 and t1 == t2 and id2 == id1 + "-2":
            removed.append(id2)
            return m.group(0)[: m.end(1) - m.start(1)] and heading(
                int(d1), id1, t1
            )
        return m.group(0)

    prev = None
    while prev != removed:
        prev = list(removed)
        out = pat.sub(repl, src)
        # re-run until stable (pattern is non-overlapping per pass)
        with open(path, "w", encoding="utf-8") as f:
            f.write(out)
        src = out
        removed = []
        out2 = pat.sub(repl, src)
        if out2 == src:
            break
        src = out2
        with open(path, "w", encoding="utf-8") as f:
            f.write(src)
    print(f"{path}: removed duplicate heading ids: {removed}")


for ch in ("07-trees-and-binary-trees", "09-binary-search-trees"):
    dedupe_headings(BASE + ch + ".ts")

# ------------------------------------------------------------------ #
# Part B: ch09 garbled heading pairs -> one clean heading            #
# ------------------------------------------------------------------ #

ch09 = BASE + "09-binary-search-trees.ts"

PAIRS = [
    ("the-bst-propertylex-ordinis", "The BST propertylex ordinis", "fn-bst-property", "The BST property"),
    ("searchquaestio", "Searchquaestio", "fn-search", "Search"),
    ("minimum-and-maximumextrema", "Minimum & maximumextrema", "fn-min-max", "Minimum & maximum"),
    ("insertioninsitio-a-graft", "Insertioninsitio \u2014 a graft", "fn-insertion", "Insertion"),
    ("deletionputatio-a-pruning", "Deletionputatio \u2014 a pruning", "fn-deletion", "Deletion"),
    ("height-and-balanceaequilibrium", "Height & balanceaequilibrium", "fn-height-balance", "Height & balance"),
    ("traversallectio-a-reading", "Traversallectio \u2014 a reading", "fn-traversal", "Traversal"),
    ("preorderradix-prius", "Preorderradix prius", "fn-preorder", "Preorder"),
    ("inorderradix-media", "Inorderradix media", "fn-inorder", "Inorder"),
    ("postorderradix-postrema", "Postorderradix postrema", "fn-postorder", "Postorder"),
    ("level-orderper-gradus", "Level-orderper gradus", "fn-level-order", "Level-order"),
]

for old_id, old_text, new_id, new_text in PAIRS:
    old = heading(4, old_id, old_text)
    new = heading(4, new_id, new_text)
    sub(ch09, old, new)

# ------------------------------------------------------------------ #
# Part C: ch09 dead JS fragments and stale promises                  #
# ------------------------------------------------------------------ #

sub(
    ch09,
    '"html": "The specimen is live \u2014 click its nodes, search, graft, and prune from the bench \u2014 and the reading bench in Part II plays every traversal step by step, stamping visit numbers on the nodes as it goes."',
    '"html": "The BST builder earlier in this chapter is the live bench: search, graft and prune from it. The traversal trainer in Topic 8 plays every reading step by step, stamping visit numbers on the nodes as it goes."',
)
sub(
    ch09,
    "The consequence is almost geometric: each node inherits an open interval of legal keys from its ancestors (the root rules (\u2212\u221e, +\u221e)), and every descent narrows it. Press demonstrate and every node prints its interval \u2014 the law, drawn.",
    "The consequence is almost geometric: each node inherits an open interval of legal keys from its ancestors (the root rules (\u2212\u221e, +\u221e)), and every descent narrows it.",
)
sub(
    ch09,
    '"html": "\u2200 node \u00b7 left subtree &lt; node &lt; right subtree \u2014 whole subtrees, recursively<br>specimen check: <span data-live=\\"check\\"></span>"',
    '"html": "\u2200 node \u00b7 left subtree &lt; node &lt; right subtree, whole subtrees, recursively."',
)
sub(
    ch09,
    '"html": "cost = one root-to-node path \u2264 h + 1 = <span data-live=\\"h1\\"></span> comparisons (h = <span data-live=\\"h\\"></span>)<br>balanced \u2192 O(log n) \u00b7 skewed \u2192 O(n)"',
    '"html": "cost = one root-to-node path \u2264 h + 1 comparisons<br>balanced \u2192 O(log n) \u00b7 skewed \u2192 O(n)"',
)
sub(
    ch09,
    "If k is present the walk ends at its node; if absent, it ends at an empty pointer \u2014 and the cost is the same either way: one root-to-node path, never more than h + 1 comparisons. Try <em>find 45</em> and <em>find 65</em> on the bench and watch both destinies unfold.",
    "If k is present the walk ends at its node; if absent, it ends at an empty pointer, and the cost is the same either way: one root-to-node path, never more than h + 1 comparisons. Try searching 45 (absent) and 40 (present) in the BST builder above and watch both destinies unfold.",
)
sub(
    ch09,
    '"html": "min = leftmost node \u00b7 max = rightmost node \u00b7 each \u2264 h+1 steps<br>live: <span data-live=\\"min\\"></span> \u00b7 <span data-live=\\"max\\"></span>"',
    '"html": "min = leftmost node \u00b7 max = rightmost node \u00b7 each \u2264 h+1 steps"',
)
sub(
    ch09,
    "No rearrangement, no re-checking: insertion is a failed search plus one graft. Try <em>graft 55</em> from the bench, or type any key 0\u201399.",
    "No rearrangement, no re-checking: insertion is a failed search plus one graft. Try inserting 55 in the BST builder above, or type any key from 0 to 99.",
)
sub(
    ch09,
    '"html": "every insertion lands as a leaf \u2014 the property is preserved by construction"',
    '"html": "every insertion lands as a leaf; the property is preserved by construction"',
)
sub(
    ch09,
    "it has no left child, so its own removal falls back to case 1 or 2. Click any node on the specimen and prune it from its record.",
    "it has no left child, so its own removal falls back to case 1 or 2. Use the deletion playground below to prune nodes and watch every case.",
)
sub(
    ch09,
    '"html": "search O(h) \u2192 O(log n) if balanced \u00b7 O(n) if skewed<br>live: h = <span data-live=\\"h\\"></span> \u00b7 n = <span data-live=\\"n\\"></span> \u00b7 \u230alog\u2082 n\u230b = <span data-live=\\"logn\\"></span>"',
    '"html": "search O(h) \u2192 O(log n) if balanced \u00b7 O(n) if skewed"',
)
sub(
    ch09,
    "A list has one reading order; a tree chooses among four. The reading bench plays each one on the live specimen, step by step \u2014 stack or queue visible, visit numbers stamped, keys emitted as they are read.",
    "A list has one reading order; a tree chooses among four. The traversal trainer in Topic 8 plays each one step by step, with the stack or queue visible and visit numbers stamped.",
)
sub(
    ch09,
    '"html": "N = the node \u00b7 L = left subtree \u00b7 R = right subtree \u2014 the root\u2019s seat names the reading"',
    '"html": "N = the node \u00b7 L = left subtree \u00b7 R = right subtree; the root\u2019s seat names the reading"',
)
sub(
    ch09,
    "Watch the mechanism strip on the bench: depth-first readings drive a call stack; level-order drives a queue.",
    "Watch the mechanism strip: depth-first readings drive a call stack; level-order drives a queue.",
)
sub(
    ch09,
    '"html": "first emitted = the root \u00b7 rebuild: insert in this order<br>live: <span data-live=\\"pre\\"></span>"',
    '"html": "first emitted = the root \u00b7 rebuild: insert in this order"',
)
sub(
    ch09,
    '"html": "inorder(BST) = keys ascending, zero comparisons spent<br>live: <span data-live=\\"in\\"></span>"',
    '"html": "inorder(BST) = keys ascending, zero comparisons spent"',
)
sub(
    ch09,
    '"html": "last emitted = the root \u00b7 subtree aggregates compute bottom-up<br>live: <span data-live=\\"post\\"></span>"',
    '"html": "last emitted = the root \u00b7 subtree aggregates compute bottom-up"',
)
sub(
    ch09,
    '"html": "a queue, not recursion: dequeue \u2192 visit \u2192 enqueue children<br>live: <span data-live=\\"lvl\\"></span>"',
    '"html": "a queue, not recursion: dequeue \u2192 visit \u2192 enqueue children"',
)

# Remove the JS-filled empty table (Term / In plain words / On this specimen).
sub(
    ch09,
    """    {
      "type": "table",
      "head": [
        "Term",
        "In plain words",
        "On this specimen"
      ],
      "rows": []
    },
""",
    "",
    must=False,
)

# ------------------------------------------------------------------ #
# Part D: ch09 interactive playground (item 2)                        #
# ------------------------------------------------------------------ #

sub(
    ch09,
    """    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-playground",
      "text": "Interactive Playground"
    },
    {
      "type": "paragraph",
      "html": "Click a node to select it (or type a value), pick a method, then press <b>Delete</b> to watch the animation. Nodes: <b id=\\"nodeCount\\">0</b>"
    },
    {
      "type": "figure",
      "svg": "<svg id=\\"treeSvg\\" viewBox=\\"0 0 700 360\\"></svg>",
      "alt": "Diagram"
    },
""",
    """    {
      "type": "heading",
      "depth": 3,
      "id": "interactive-playground",
      "text": "Interactive playground"
    },
    {
      "type": "viz",
      "kind": "bstDelete",
      "caption": "Sample tree 50 30 70 20 40 60 80 35 65. Delete 30 to watch the two-children case, or 20 for a leaf."
    },
""",
)

# ------------------------------------------------------------------ #
# Part E: ch09 headings, callouts, tables, small text                #
# ------------------------------------------------------------------ #

for old, new in [
    ("Search \u2014 TreeSearch", "Search: TreeSearch"),
    ("Deletion \u2014 the 3 cases", "Deletion: the 3 cases"),
    ("The ordered specimen \u2014 BST field notes", "The ordered specimen: BST field notes"),
    ("Deleting a node \u2014 the two replacement methods", "Deleting a node: the two replacement methods"),
    ("First: The 3 Cases of Deletion", "First: the 3 cases of deletion"),
    ("\u2696 The Two Methods", "The two methods"),
    ("Method 1 \u2014 In-order Successor", "Method 1: in-order successor"),
    ("Method 2 \u2014 In-order Predecessor", "Method 2: in-order predecessor"),
    ("Comparison Table", "Comparison table"),
    ("Test Yourself", "Test yourself"),
    ("Case 1: Leaf", "Case 1: leaf"),
    ("Case 2: One Child", "Case 2: one child"),
    ("Case 3: Two Children", "Case 3: two children"),
    ("Topic 8 Quiz \u2014 Binary Search Trees", "Topic 8 Quiz: Binary Search Trees"),
]:
    sub(ch09, '"text": "%s"' % old, '"text": "%s"' % new, must=False)
    sub(ch09, '"title": "%s"' % old, '"title": "%s"' % new, must=False)

sub(ch09, '"html": "<p>No children \u2192 just remove it. Easy!</p>"', '"html": "<p>No children. Remove the node directly.</p>"')
sub(ch09, '"html": "<p>Can\'t just remove it \u2014 we <b>replace its value</b> using one of the two methods below!</p>"',
    '"html": "<p>The node cannot simply be removed: <b>replace its value</b> using one of the two methods below.</p>"')
sub(ch09, '"html": "Both keep the tree a valid BST \u2014 the in-order (sorted) sequence never changes."',
    '"html": "Both keep the tree a valid BST; the in-order (sorted) sequence never changes."')
sub(ch09, "Why does the replacement always have \u2264 1 child? Because we walked <i>all the way</i> in one direction \u2014 there's nothing left on that side!",
    "Why does the replacement always have \u2264 1 child? Because we walked <i>all the way</i> in one direction, and there is nothing left on that side.")
sub(ch09, '"html": "Click an answer \u2014 instant feedback!"', '"html": "Click an answer for instant feedback."')
sub(ch09, "insert the new key there. Example \u2014 insert <b>63</b>:", "insert the new key there. Example with insert <b>63</b>:")
sub(ch09, '"caption": "Inorder of this tree is always sorted \u2014 verify with the traversal buttons in Topic 7!"',
    '"caption": "Inorder of this tree is always sorted. Verify it with the traversal trainer in Topic 8."')

# Comparison table: 3 columns everywhere.
sub(
    ch09,
    '''        " Successor",
        " Predecessor"''',
    '''        "Successor",
        "Predecessor"''',
)
sub(
    ch09,
    '''        [
          "Children of replacement",
          "At most <b>one</b> child \u2192 always easy to remove \u2714"
        ],
        [
          "Result",
          "Both produce a valid BST with the <b>same sorted order</b> "
        ]''',
    '''        [
          "Children of replacement",
          "At most <b>one</b> child",
          "At most <b>one</b> child"
        ],
        [
          "Result",
          "Valid BST, <b>same sorted order</b>",
          "Valid BST, <b>same sorted order</b>"
        ]''',
)

# ------------------------------------------------------------------ #
# Part F: ch07 restyle the static A-J field-guide figure             #
# (rendered with unstyled black circles + invisible black text)      #
# ------------------------------------------------------------------ #

ch07 = BASE + "07-trees-and-binary-trees.ts"
with open(ch07, encoding="utf-8") as f:
    src07 = f.read()
if '"alt": "General tree with root A' in src07:
    print("skip (already applied) ch07 figure")
else:
    m = re.search(r'"svg": "(<svg id=\\"tree-svg\\"[\s\S]*?)",\n      "alt": "Diagram"', src07)
    if not m:
        print("ch07 figure not found")
        sys.exit(1)
    edges = [
        ("A-B", 320, 40, 200, 110), ("A-C", 320, 40, 440, 110),
        ("B-D", 200, 110, 140, 185), ("B-E", 200, 110, 260, 185),
        ("C-F", 440, 110, 440, 185), ("D-G", 140, 185, 105, 260),
        ("D-H", 140, 185, 175, 260), ("E-I", 260, 185, 225, 260),
        ("E-J", 260, 185, 295, 260),
    ]
    nodes = [
        ("A", 320, 40, 22), ("B", 200, 110, 22), ("C", 440, 110, 22),
        ("D", 140, 185, 22), ("E", 260, 185, 22), ("F", 440, 185, 22),
        ("G", 105, 260, 20), ("H", 175, 260, 20), ("I", 225, 260, 20),
        ("J", 295, 260, 20),
    ]
    parts = [
        '<svg viewBox=\\"0 0 640 300\\" role=\\"img\\" aria-label=\\"General tree with nodes A to J\\">',
    ]
    for _id, x1, y1, x2, y2 in edges:
        parts.append(f'<line class=\\"edge\\" x1=\\"{x1}\\" y1=\\"{y1}\\" x2=\\"{x2}\\" y2=\\"{y2}\\"></line>')
    for label, cx, cy, r in nodes:
        parts.append(f'<circle class=\\"vtx\\" cx=\\"{cx}\\" cy=\\"{cy}\\" r=\\"{r}\\"></circle><text class=\\"vlbl\\" x=\\"{cx}\\" y=\\"{cy}\\">{label}</text>')
    parts.append("</svg>")
    new_svg = "".join(parts)
    src07 = src07[: m.start(1)] + new_svg + src07[m.end(1):]
    src07 = src07.replace('"alt": "Diagram"', '"alt": "General tree with root A, children B and C, and leaves F, G, H, I and J"', 1)
    with open(ch07, "w", encoding="utf-8") as f:
        f.write(src07)
    print("ok ch07: A-J figure restyled")

# ------------------------------------------------------------------ #
# Part G: ch10 structural replacements                               #
# ------------------------------------------------------------------ #

ch10 = BASE + "10-avl-trees-and-balanced-trees.ts"

# G1: Spot the difference (AVL) -> avlCompare viz.
sub(
    ch10,
    """    {
      "type": "heading",
      "depth": 3,
      "id": "spot-the-difference",
      "text": "Spot the Difference"
    },
    {
      "type": "heading",
      "depth": 4,
      "id": "valid-avl-tree",
      "text": "Valid AVL Tree"
    },
""",
    """    {
      "type": "heading",
      "depth": 3,
      "id": "spot-the-difference",
      "text": "Spot the difference"
    },
""",
)
with open(ch10, encoding="utf-8") as f:
    src10 = f.read()

valid_fig = re.search(
    r'    \{\n      "type": "figure",\n      "svg": "<svg viewBox=\\"0 0 235 178\\"[\s\S]*?"alt": "Valid AVL tree:[\s\S]*?\n    \},\n    \{\n      "type": "paragraph",\n      "html": "All BF \u2208 \{\u22121, 0, \+1\} \u2192 balanced \u2714"\n    \},\n',
    src10,
)
if not valid_fig:
    print("ch10 valid figure block not found")
    sys.exit(1)
src10 = src10[: valid_fig.start()] + src10[valid_fig.end():]

invalid_block = re.search(
    r'    \{\n      "type": "heading",\n      "depth": 4,\n      "id": "not-an-avl-tree",\n      "text": "\u274c NOT an AVL Tree"\n    \},\n    \{\n      "type": "figure",\n      "svg": "<svg viewBox=\\"0 0 235 178\\"[\s\S]*?"alt": "Not an AVL tree:[\s\S]*?\n    \},\n    \{\n      "type": "paragraph",\n      "html": "It\'s a valid BST, but BF = \u22122 breaks the AVL rule \u2192 rotation needed!"\n    \},\n',
    src10,
)
if not invalid_block:
    print("ch10 invalid block not found")
    sys.exit(1)

viz_block = """    {
      "type": "viz",
      "kind": "avlCompare",
      "caption": "Compute the balance factor of every node; one node with BF \u00b12 disqualifies the tree."
    },
"""
src10 = src10[: invalid_block.start()] + viz_block + src10[invalid_block.end():]
with open(ch10, "w", encoding="utf-8") as f:
    f.write(src10)
print("ok ch10: avlCompare wired")

# G2: the four rotation case callouts -> avlCases viz.
with open(ch10, encoding="utf-8") as f:
    src10 = f.read()
start_marker = '    {\n      "type": "callout",\n      "variant": "info",\n      "title": "\u21bb LL Case \u2014 Single RIGHT Rotation"'
end_marker = '    {\n      "type": "callout",\n      "variant": "tip",\n      "title": "Memory hook",\n      "html": "<b>Memory trick:</b> <b>L</b><b>L</b> = straight Left line'
i = src10.index(start_marker)
j = src10.index(end_marker)
src10 = (
    src10[:i]
    + """    {
      "type": "viz",
      "kind": "avlCases",
      "caption": "Press Play this case to load a case into the animated rotation player above."
    },
"""
    + src10[j:]
)
src10 = src10.replace(
    '"html": "The case name = the shape of the problem path. Red node = unbalanced (|BF| = 2)."',
    '"html": "The case name = the shape of the problem path from the unbalanced node z down to the new key. The unbalanced node (|BF| = 2) is ringed in red below."',
)
with open(ch10, "w", encoding="utf-8") as f:
    f.write(src10)
print("ok ch10: avlCases wired")

print("ALL CONTENT FIXES APPLIED")
