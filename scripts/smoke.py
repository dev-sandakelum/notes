#!/usr/bin/env python3
"""Playwright smoke test (user spec, round 2, item 7).

Visits every chapter of the DSA book (pass --all for every book),
scrolls through it so lazy widgets mount, and fails on:

  * console errors or page errors;
  * any widget/visualizer card whose rendered content is under 80px tall;
  * any figure SVG that renders with no drawable children (blank box);
  * any table rendered with a header but zero body rows;
  * duplicate or empty TOC entries.

Usage:  python3 scripts/smoke.py [--all] [--base http://localhost:3000]
Exit code 0 = clean.
"""
import json
import subprocess
import sys

from playwright.sync_api import sync_playwright

BASE = "http://localhost:3000"

# The book registry is authored in TS; chapter slugs are read straight
# from the static params by probing the sitemap-free route list below.
DS = [
    "01-introduction", "02-introduction-to-dsa", "03-algorithms-and-complexity",
    "04-stacks", "05-queues", "06-linked-lists",
    "07-trees-and-binary-trees", "08-tree-traversals",
    "09-binary-search-trees", "10-avl-trees-and-balanced-trees",
    "11-heaps-and-heap-sort", "12-sorting-algorithms", "13-hashing",
    "14-master-cheat-sheet", "15-final-practice-exam",
]
ALL_BOOKS = ["dsa", "oop", "ood", "mis", "econ", "maths"]

CHECK_JS = """
() => {
  const problems = [];
  // 1. Visualizer cards and figure shells too short to hold real content
  document.querySelectorAll('.viz-shell').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.height < 80) problems.push(['short-widget', el.className.slice(0, 40), Math.round(r.height)]);
  });
  // 2. Blank SVGs (no drawable children)
  document.querySelectorAll('figure svg, .fig-embed svg').forEach((svg) => {
    const drawable = svg.querySelectorAll('circle, line, path, rect, text, ellipse, polyline, polygon, g').length;
    if (drawable === 0) problems.push(['blank-svg', svg.id || svg.getAttribute('viewBox') || '', 0]);
  });
  // 3. Header-only tables
  document.querySelectorAll('table').forEach((t) => {
    const rows = t.querySelectorAll('tbody tr').length;
    if (rows === 0) problems.push(['empty-table', (t.closest('div')?.className || '').slice(0, 40), 0]);
  });
  // 4. TOC duplicates / empty labels
  const toc = [...document.querySelectorAll('nav[aria-label="On this page"] a')].map((a) => a.textContent.trim());
  const dup = toc.filter((t, i) => toc.indexOf(t) !== i);
  if (dup.length) problems.push(['toc-duplicates', dup.join(' | ').slice(0, 80), dup.length]);
  if (toc.some((t) => !t)) problems.push(['toc-empty-label', '', 1]);
  // 5. Page-level horizontal overflow (body wider than viewport)
  const vw = document.documentElement.clientWidth;
  const sw = document.documentElement.scrollWidth;
  if (sw > vw + 1) problems.push(['h-overflow', 'document', sw - vw]);
  // 6. Table header vs row cell count mismatch
  document.querySelectorAll('table').forEach((t, ti) => {
    const ths = t.querySelectorAll('thead th').length;
    const rows = [...t.querySelectorAll('tbody tr')];
    if (!rows.length || !ths) return;
    const bad = rows.filter((r) => r.querySelectorAll('td').length !== ths).length;
    if (bad) problems.push(['table-mismatch', `#${ti} head=${ths}`, bad]);
  });
  return problems;
}
"""


def chapter_list(book):
    if book == "dsa":
        return DS
    # Probe the book page for chapter links
    out = subprocess.run(
        ["curl", "-s", f"{BASE}/notes/{book}"], capture_output=True, text=True
    ).stdout
    import re
    hrefs = re.findall(rf'href="/notes/{book}/([^"]+)"', out)
    return list(dict.fromkeys(hrefs))


def main():
    books = ["dsa"]
    if "--all" in sys.argv:
        books = ALL_BOOKS
    failures = []
    visited = 0
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for book in books:
            # Fresh context per book: bounds renderer memory on long runs
            # (a single reused page accumulates heap across ~60 chapters and
            # can OOM-crash the renderer on small-RAM machines).
            context = browser.new_context(viewport={"width": 1280, "height": 900})
            chapters = chapter_list(book)
            if not chapters:
                failures.append([book, "no chapters found", 0])
                context.close()
                continue
            for ch in chapters:
                url = f"{BASE}/notes/{book}/{ch}"
                # Fresh page per chapter: console listeners attach only to
                # this page, so errors attribute to exactly one chapter and
                # can never be double-counted by stale listeners.
                page = context.new_page()
                errors = []
                page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
                page.on("pageerror", lambda e: errors.append(str(e)))
                try:
                    page.goto(url, wait_until="networkidle", timeout=30000)
                except Exception as e:
                    failures.append([url, f"load failed: {e}", 0])
                    page.close()
                    continue
                # Scroll through in steps so lazy widgets mount
                height = page.evaluate("document.body.scrollHeight")
                y = 0
                while y < height:
                    page.evaluate(f"window.scrollTo(0, {y})")
                    page.wait_for_timeout(220)
                    y += 700
                    height = page.evaluate("document.body.scrollHeight")
                page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                page.wait_for_timeout(500)
                problems = page.evaluate(CHECK_JS)
                for pr in problems:
                    failures.append([url, pr[0] + " " + pr[1], pr[2]])
                for err in errors:
                    if "Download the React DevTools" in err or "HMR" in err:
                        continue
                    failures.append([url, "console: " + err[:120], 0])
                visited += 1
                status = "FAIL" if any(f[0] == url for f in failures) else "ok"
                print(f"  {status}  /notes/{book}/{ch}")
                page.close()
            context.close()
        browser.close()
    print(f"\nvisited {visited} chapters")
    if failures:
        print(f"\n{len(failures)} FAILURES:")
        for url, what, n in failures:
            print(f"  - {url}\n      {what} ({n})")
        sys.exit(1)
    print("smoke: all clean")


if __name__ == "__main__":
    main()
