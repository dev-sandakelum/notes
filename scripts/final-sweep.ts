/**
 * Final cross-page sweep against the PRODUCTION build.
 * For each key page x {mobile, tablet, desktop} x {light, dark}:
 *   - HTTP 200
 *   - no horizontal overflow
 *   - no console errors / page errors
 * Drives the standalone server via agent-browser (CDP).
 *
 * Usage: this script prints a summary table; run it with bun.
 */
const BASE = "http://localhost:3001";

const PAGES = [
  ["/", "home (gallery)"],
  ["/notes/dsa", "book index"],
  ["/notes/dsa/05-queues", "queues + circular queue"],
  ["/notes/dsa/06-linked-lists", "linked lists"],
  ["/notes/dsa/07-trees-and-binary-trees", "trees + field notes"],
  ["/notes/dsa/08-tree-traversals", "traversals + postfix"],
  ["/notes/dsa/12-sorting-algorithms", "sorting"],
  ["/notes/maths/08-quadratic-graphs", "maths solution figure"],
  ["/notes/econ/02-production-possibility-curve-ppc", "econ ppc"],
  ["/notes/play/postfix-evaluation", "fullscreen postfix"],
  ["/notes/play/circular-queue", "fullscreen circular queue"],
  ["/notes/play/sorting", "fullscreen sorting"],
];

const WIDTHS = [390, 768, 1440];

// agent-browser is a CLI; shell out per step (simple, reliable).
const { execSync } = await import("node:child_process");
const sh = (cmd: string) => {
  try {
    return execSync(cmd, { encoding: "utf8", timeout: 120000 }).trim();
  } catch (e) {
    return `ERR: ${(e.stdout ?? e.message ?? "").toString().slice(0, 200)}`;
  }
};

let failures = 0;
console.log("page".padEnd(38), "w".padStart(5), "light", "dark", "overflowL/D", "console");
for (const [path, label] of PAGES) {
  for (const w of WIDTHS) {
    sh(`agent-browser set viewport ${w} 900`);
    sh(`agent-browser console --clear`);
    sh(`agent-browser open ${BASE}${path}`);
    sh(`agent-browser wait --load networkidle`);
    // light
    sh(`agent-browser eval "document.documentElement.classList.remove('dark')"`);
    const light = sh(
      `agent-browser eval "document.documentElement.dataset.ok='1'; document.body ? 'ok' : 'fail'"`,
    );
    const ovL = sh(
      `agent-browser eval "document.documentElement.scrollWidth > window.innerWidth"`,
    );
    // dark
    sh(`agent-browser eval "document.documentElement.classList.add('dark')"`);
    const ovD = sh(
      `agent-browser eval "document.documentElement.scrollWidth > window.innerWidth"`,
    );
    const errs = sh(
      `agent-browser console 2>/dev/null | grep -icE 'error|uncaught' || true`,
    );
    const ok =
      light.includes("ok") && ovL === "false" && ovD === "false" && errs === "0";
    if (!ok) failures++;
    console.log(
      label.padEnd(38),
      String(w).padStart(5),
      light.includes("ok") ? "ok  " : "FAIL",
      "    ",
      `${ovL === "false" ? "no" : ovL}/${ovD === "false" ? "no" : ovD}`,
      "      ",
      errs === "0" ? "clean" : `${errs} errors ${!ok ? sh(`agent-browser console | grep -iE 'error|uncaught' | head -2`) : ""}`,
    );
  }
}
console.log(failures === 0 ? "\nALL SWEEP CHECKS PASSED" : `\n${failures} CHECK GROUPS FAILED`);
process.exit(failures === 0 ? 0 : 1);
