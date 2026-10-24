/* One-off: fix the 5 dead SVG figures + RB playground prose in DSA ch10 (F12). */
const FILE = "/home/z/my-project/src/content/books/dsa/chapters/10-avl-trees-and-balanced-trees.ts";
let src = await Bun.file(FILE).text();
const before = src;

const embed = (s: string) => JSON.stringify(s).slice(1, -1);

/* helper fragments */
const node = (x: number, y: number, r: number, label: string, fill: string, stroke: string, textFill: string) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>` +
  `<text x="${x}" y="${y + 1}" text-anchor="middle" dominant-baseline="central" fill="${textFill}" font-size="13" font-weight="700" font-family="monospace">${label}</text>`;
const bf = (x: number, y: number, text: string, color: string) =>
  `<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-size="11" font-weight="700" font-family="monospace">${text}</text>`;
const edge = (x1: number, y1: number, x2: number, y2: number, stroke = "var(--fig-axis)", w = 2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${w}"/>`;

/* 1. Valid AVL tree (svgBal): 30 -> (20 -> (10,25), 40), all BF ok */
const avlValid =
  `<svg viewBox="0 0 235 178" xmlns="http://www.w3.org/2000/svg" role="img">` +
  edge(118, 34, 72, 96) + edge(118, 34, 164, 96) + edge(72, 96, 44, 158) + edge(72, 96, 100, 158) +
  node(118, 34, 17, "30", "var(--fig-soft)", "var(--fig-primary)", "var(--ink)") +
  node(72, 96, 17, "20", "var(--fig-soft)", "var(--fig-primary)", "var(--ink)") +
  node(164, 96, 17, "40", "var(--fig-soft)", "var(--fig-primary)", "var(--ink)") +
  node(44, 158, 17, "10", "var(--fig-soft)", "var(--fig-primary)", "var(--ink)") +
  node(100, 158, 17, "25", "var(--fig-soft)", "var(--fig-primary)", "var(--ink)") +
  bf(142, 26, "+1", "var(--ok)") + bf(96, 88, "0", "var(--ok)") +
  bf(188, 88, "0", "var(--ok)") + bf(68, 150, "0", "var(--ok)") + bf(124, 150, "0", "var(--ok)") +
  `</svg>`;

/* 2. NOT an AVL tree (svgUnb): 10 -> (–, 20 -> (–, 30)); BF(10) = −2 */
const avlBroken =
  `<svg viewBox="0 0 235 178" xmlns="http://www.w3.org/2000/svg" role="img">` +
  edge(55, 40, 117, 98) + edge(117, 98, 179, 156) +
  node(55, 40, 17, "10", "var(--danger-soft)", "var(--danger)", "var(--ink)") +
  node(117, 98, 17, "20", "var(--fig-soft)", "var(--fig-primary)", "var(--ink)") +
  node(179, 156, 17, "30", "var(--fig-soft)", "var(--fig-primary)", "var(--ink)") +
  bf(79, 32, "−2", "var(--danger)") + bf(141, 90, "−1", "var(--ok)") + bf(203, 148, "0", "var(--ok)") +
  `</svg>`;

/* 3. Valid Red-Black tree (svgValid): 13B -> (8R -> (1B,11B), 17R -> (15B, 25B -> (22R,27R))) */
const RED = "#dc2626", RED_D = "#b91c1c";
const BLK = "var(--ink)", BLK_D = "var(--ink-faint)", PAPER = "var(--paper)";
const rbValid =
  `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img">` +
  edge(150, 24, 95, 68) + edge(150, 24, 205, 68) + edge(95, 68, 58, 112) + edge(95, 68, 110, 112) +
  edge(205, 68, 182, 112) + edge(205, 68, 248, 112) + edge(248, 112, 222, 156) + edge(248, 112, 274, 156) +
  node(150, 24, 14, "13", BLK, BLK_D, PAPER) +
  node(95, 68, 14, "8", RED, RED_D, "#ffffff") + node(205, 68, 14, "17", RED, RED_D, "#ffffff") +
  node(58, 112, 14, "1", BLK, BLK_D, PAPER) + node(110, 112, 14, "11", BLK, BLK_D, PAPER) +
  node(182, 112, 14, "15", BLK, BLK_D, PAPER) + node(248, 112, 14, "25", BLK, BLK_D, PAPER) +
  node(222, 156, 14, "22", RED, RED_D, "#ffffff") + node(274, 156, 14, "27", RED, RED_D, "#ffffff") +
  `</svg>`;

/* 4. Invalid Red-Black tree (svgBad): 10B -> (5B, 20R -> (–, 30R)) — red-red pair */
const rbBad =
  `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img">` +
  edge(140, 40, 85, 102) + edge(140, 40, 195, 102) + edge(195, 102, 243, 160) +
  `<ellipse cx="219" cy="131" rx="52" ry="52" fill="none" stroke="var(--danger)" stroke-width="2" stroke-dasharray="6 4"/>` +
  node(140, 40, 15, "10", BLK, BLK_D, PAPER) +
  node(85, 102, 15, "5", BLK, BLK_D, PAPER) +
  node(195, 102, 15, "20", RED, RED_D, "#ffffff") + node(243, 160, 15, "30", RED, RED_D, "#ffffff") +
  `<text x="219" y="58" text-anchor="middle" fill="var(--danger)" font-size="12.5" font-weight="700">red-red ✗</text>` +
  `</svg>`;

/* 5. RB fixup worked example (treeSvg): 3 panels — insert 1, violation, recolor */
const panel = (ox: number, gFill: string, pFill: string, uFill: string, ring: boolean, caption: string) => {
  const gS = gFill === RED ? RED_D : BLK_D, pS = pFill === RED ? RED_D : BLK_D, uS = uFill === RED ? RED_D : BLK_D;
  const gT = gFill === RED ? "#ffffff" : PAPER, pT = pFill === RED ? "#ffffff" : PAPER, uT = uFill === RED ? "#ffffff" : PAPER;
  return (
    edge(ox + 117, 44, ox + 72, 116) + edge(ox + 117, 44, ox + 162, 116) + edge(ox + 72, 116, ox + 44, 190) +
    (ring ? `<ellipse cx="${ox + 58}" cy="153" rx="46" ry="46" fill="none" stroke="var(--danger)" stroke-width="2" stroke-dasharray="6 4"/>` : "") +
    node(ox + 117, 44, 16, "13", gFill, gS, gT) +
    node(ox + 72, 116, 16, "8", pFill, pS, pT) + node(ox + 162, 116, 16, "17", uFill, uS, uT) +
    node(ox + 44, 190, 16, "1", RED, RED_D, "#ffffff") +
    `<text x="${ox + 117}" y="252" text-anchor="middle" fill="var(--ink-muted)" font-size="12.5" font-weight="600">${caption}</text>`
  );
};
const rbFixup =
  `<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" role="img">` +
  `<g transform="translate(8,24)">` +
  panel(0, BLK, RED, RED, false, "1 · Insert 1 (red)") +
  panel(235, BLK, RED, RED, true, "2 · Red-red violation") +
  panel(470, RED, BLK, BLK, false, "3 · Recolor: 8,17 → black, 13 → red") +
  `</g></svg>`;

/* --- apply replacements --- */
type Rep = [oldStr: string, newStr: string, name: string];
const reps: Rep[] = [
  [
    `"svg": "<svg id=\\"svgBal\\" class=\\"mini\\" viewBox=\\"0 0 235 178\\"></svg>",\n      "alt": "Diagram"`,
    `"svg": "${embed(avlValid)}",\n      "alt": "${embed("Valid AVL tree: 30 with left child 20 (children 10 and 25) and right child 40 — every balance factor is 0 or +1.")}"`,
    "svgBal",
  ],
  [
    `"svg": "<svg id=\\"svgUnb\\" class=\\"mini\\" viewBox=\\"0 0 235 178\\"></svg>",\n      "alt": "Diagram"`,
    `"svg": "${embed(avlBroken)}",\n      "alt": "${embed("Not an AVL tree: 10 has only a right chain 20 then 30 — BF(10) is −2, so the AVL rule is broken and a rotation is required.")}"`,
    "svgUnb",
  ],
  [
    `"svg": "<svg id=\\"svgValid\\" class=\\"mini\\" viewBox=\\"0 0 300 180\\"></svg>",\n      "alt": "Diagram"`,
    `"svg": "${embed(rbValid)}",\n      "alt": "${embed("A valid red-black tree: black root 13, red children 8 and 17, black nodes 1, 11, 15 and 25, red leaves 22 and 27 — every root-to-NIL path has exactly three black nodes.")}"`,
    "svgValid",
  ],
  [
    `"svg": "<svg id=\\"svgBad\\" class=\\"mini\\" viewBox=\\"0 0 300 180\\"></svg>",\n      "alt": "Diagram"`,
    `"svg": "${embed(rbBad)}",\n      "alt": "${embed("Invalid red-black tree: red node 20 has a red child 30, breaking the no-red-red rule, and the two sides have unequal black heights.")}"`,
    "svgBad",
  ],
  [
    `"svg": "<svg id=\\"treeSvg\\" viewBox=\\"0 0 700 320\\"></svg>",\n      "alt": "Diagram"`,
    `"svg": "${embed(rbFixup)}",\n      "alt": "${embed("Worked example of red-black insertion fixup across three panels: a red node 1 is inserted under red parent 8; the red-red violation is resolved by recoloring parent 8 and uncle 17 black and grandparent 13 red.")}",\n      "caption": "${embed("Red-black insert fixup: when parent AND uncle are red, recolor both black and make the grandparent red (a red root is repainted black at the end). A black uncle triggers the same rotations as AVL.")}"`,
    "treeSvg",
  ],
  [
    `"text": "Interactive Playground"`,
    `"text": "Red-Black Fixup — Worked Example"`,
    "heading77",
  ],
  [
    `"html": "Insert values and watch the tree detect <b>red-red violations</b> → then <b>recolor</b> or <b>rotate</b> automatically. Nodes: <b id=\\"nodeCount\\">0</b>"`,
    `"html": "When an insertion creates a <b>red-red pair</b>, the tree looks at the <b>uncle</b> first: a <b>red uncle</b> → cheap <b>recolor</b> (parent and uncle turn black, the grandparent turns red; if that grandparent is the root it is repainted black at the end). A <b>black uncle</b> → rotate, using the <b>same four rotation cases as AVL trees</b>."`,
    "para78",
  ],
  [
    `"html": "Try: Reset → <b>Verify Rules</b> (all pass) → insert <b>25</b> (recolor cascade!) → insert <b>8</b> (rotation). Then delete a few black nodes to see fix-up cases."`,
    `"html": "For live rotation practice, use the <b>AVL rebalance playground</b> earlier in this chapter — the rotation mechanics are identical. Red-black trees simply pick the cheaper fix first: recolor when the uncle is red, rotate when it is black."`,
    "para80",
  ],
];

let fails = 0;
for (const [oldStr, newStr, name] of reps) {
  if (!src.includes(oldStr)) {
    console.error("NOT FOUND:", name);
    fails++;
    continue;
  }
  if (src.split(oldStr).length !== 2) {
    console.error("NOT UNIQUE:", name);
    fails++;
    continue;
  }
  src = src.replace(oldStr, newStr);
  console.log("OK:", name);
}

if (fails === 0 && src !== before) {
  await Bun.write(FILE, src);
  console.log("FILE WRITTEN");
} else {
  console.error("ABORTED — nothing written");
}
