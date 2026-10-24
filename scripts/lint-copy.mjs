#!/usr/bin/env node
/**
 * lint:copy — copy hygiene gate (user spec, round 2, item 8c).
 *
 * Scans chapter/quiz/book content files and TSX/TS source string
 * literals for punctuation the style guide bans:
 *   - U+2014 EM DASH anywhere
 *   - a SPACED EN DASH " – " (unspaced en dashes in real ranges such as
 *     "levels 0–4" are allowed)
 *   - " -- " (spaced double hyphen used as punctuation)
 *
 * Allowed and therefore NOT flagged: the true minus sign "−" (as in
 * "BF = −2"), unspaced en dashes in ranges, hyphens inside compound
 * words, and code operators (i--, ->) inside <code>/<pre> spans.
 *
 * Source comments (/* *\/ and //) are stripped before scanning so the
 * gate covers user-visible strings and authored content only.
 *
 * Prints a per-file count table and exits non-zero if anything remains.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("../src", import.meta.url).pathname;
const DASH = "\u2014";
const SPACED_EN = " \u2013 ";
const SPACED_DOUBLE = " -- ";

/** Strip JS/TS comments while keeping string literals intact. */
function stripComments(src) {
  let out = "";
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    if (c === "/" && src[i + 1] === "*") {
      const end = src.indexOf("*/", i + 2);
      i = end === -1 ? n : end + 2;
      out += " ";
      continue;
    }
    if (c === "/" && src[i + 1] === "/" && src[i - 1] !== ":") {
      const end = src.indexOf("\n", i);
      i = end === -1 ? n : end;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      out += c;
      i += 1;
      while (i < n && src[i] !== quote) {
        if (src[i] === "\\") {
          out += src[i];
          i += 1;
          if (i < n) {
            out += src[i];
            i += 1;
          }
          continue;
        }
        out += src[i];
        i += 1;
      }
      if (i < n) {
        out += src[i];
        i += 1;
      }
      continue;
    }
    out += c;
    i += 1;
  }
  return out;
}

/** Strip rendered-code spans from content HTML (code operators stay legal). */
function stripCodeSpans(html) {
  return html
    .replace(/<code[\s\S]*?<\/code>/g, " ")
    .replace(/<pre[\s\S]*?<\/pre>/g, " ");
}

function walk(dir, acc) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      walk(p, acc);
    } else if (/\.(ts|tsx)$/.test(name)) {
      acc.push(p);
    }
  }
  return acc;
}

const files = walk(ROOT, []);
const rows = [];
let total = 0;

for (const f of files) {
  const isContent = f.includes("/content/");
  let src = readFileSync(f, "utf8");
  src = stripComments(src);
  if (isContent) {
    // Only scan the authored string payloads, not the file plumbing.
    const strings = [...src.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
    src = strings.map(stripCodeSpans).join("\n");
  } else {
    src = stripCodeSpans(src);
  }
  const counts = {
    em: src.split(DASH).length - 1,
    spacedEn: src.split(SPACED_EN).length - 1,
    spacedDouble: src.split(SPACED_DOUBLE).length - 1,
  };
  const sum = counts.em + counts.spacedEn + counts.spacedDouble;
  if (sum > 0) {
    rows.push({ f: f.replace(ROOT + "/", ""), ...counts, sum });
    total += sum;
  }
}

if (rows.length === 0) {
  console.log("lint:copy — 0 violations across " + files.length + " files.");
  process.exit(0);
}

console.log("lint:copy — violations found:\n");
console.log("  count   file");
for (const r of rows.sort((a, b) => b.sum - a.sum)) {
  const parts = [
    r.em ? `${r.em} em-dash` : null,
    r.spacedEn ? `${r.spacedEn} spaced-en-dash` : null,
    r.spacedDouble ? `${r.spacedDouble} spaced-double-hyphen` : null,
  ]
    .filter(Boolean)
    .join(", ");
  console.log(`  ${String(r.sum).padStart(4)}   ${r.f} (${parts})`);
}
console.log(`\n  total: ${total} across ${rows.length} files.`);
console.log("  Em dashes and dash-as-punctuation are banned (see item 8).");
process.exit(1);
