#!/usr/bin/env python3
"""Probe ch08 for all reported task issues."""
from playwright.sync_api import sync_playwright

URL = "http://localhost:3000/notes/dsa/08-tree-traversals"

JS = r"""(w) => {
  const out = {w, issues: []};
  // 1. expression tree SVG: nodes vs viewBox
  document.querySelectorAll('.fig-embed svg').forEach((svg, si) => {
    const vb = svg.getAttribute('viewBox');
    if (!vb) return;
    const parts = vb.trim().split(/\s+/).map(Number);
    const [vx, vy, vw, vh] = parts;
    let clipped = [];
    svg.querySelectorAll('circle').forEach((c) => {
      const cx = +c.getAttribute('cx'), cy = +c.getAttribute('cy'), r = +c.getAttribute('r');
      if (cx - r < vx - 0.5 || cx + r > vx + vw + 0.5 || cy - r < vy - 0.5 || cy + r > vy + vh + 0.5) {
        clipped.push(`(${cx},${cy},r${r})`);
      }
    });
    if (clipped.length) out.issues.push(`SVG#${si} viewBox=${vb} clipped: ${clipped.join(' ').slice(0, 90)}`);
  });
  // 2. trace table: header vs row cell counts
  document.querySelectorAll('table').forEach((t, ti) => {
    const ths = t.querySelectorAll('thead th').length;
    const firstRow = t.querySelectorAll('tbody tr:first-child td');
    if (firstRow.length && ths !== firstRow.length) {
      const headTxt = [...t.querySelectorAll('thead th')].map(h => h.textContent.trim().slice(0, 12)).join('|');
      out.issues.push(`TABLE#${ti} header=${ths} cols vs row=${firstRow.length} cols [${headTxt.slice(0, 70)}]`);
    }
  });
  // 3. pre blocks that lost newlines (tree chars on a single long line)
  document.querySelectorAll('pre').forEach((pre, pi) => {
    const lines = pre.textContent.split('\n').filter(l => l.trim()).length;
    const hasTreeChars = pre.textContent.includes('/ \\') || pre.textContent.includes('/\\');
    const longest = Math.max(...pre.textContent.split('\n').map(l => l.length));
    if (hasTreeChars && lines <= 2 && longest > 60) {
      out.issues.push(`PRE#${pi} tree-chars on ${lines} line(s), longest=${longest}: ${pre.textContent.slice(0, 55)}`);
    }
  });
  // 4. quiz tab vs TOC overlap
  const tab = document.querySelector('button[aria-label="Open quiz panel"]');
  const toc = document.querySelector('nav[aria-label="On this page"]');
  if (tab && toc && w >= 1280) {
    const tr = tab.getBoundingClientRect(), cr = toc.getBoundingClientRect();
    const overlap = !(tr.right < cr.left || tr.left > cr.right || tr.bottom < cr.top || tr.top > cr.bottom);
    out.issues.push(`QUIZ-TAB overlap TOC: ${overlap} (tabL=${Math.round(tr.left)} tocL=${Math.round(cr.left)} tocR=${Math.round(cr.right)})`);
  }
  // 5. horizontal overflow
  const overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  if (overflow > 1) out.issues.push(`H-OVERFLOW ${overflow}px`);
  // 6. elements extending beyond the article column
  const contentCol = document.querySelector('article') || document.querySelector('main');
  if (contentCol) {
    const cr = contentCol.getBoundingClientRect();
    document.querySelectorAll('article pre, article table, article .fig-embed').forEach((el) => {
      const er = el.getBoundingClientRect();
      if (er.right > cr.right + 2 && !el.closest('.overflow-x-auto')) {
        out.issues.push(`WIDE ${el.tagName} right=${Math.round(er.right)} > col right=${Math.round(cr.right)}`);
      }
    });
  }
  return out;
}"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    for w in [1900, 1280, 390]:
        ctx = browser.new_context(viewport={"width": w, "height": 1000})
        page = ctx.new_page()
        errs = []
        page.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
        page.goto(URL, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(600)
        info = page.evaluate(JS, w)
        print(f"=== @{w}px ===")
        for i in info["issues"][:14]:
            print(f"  ISSUE: {i}")
        if not info["issues"]:
            print("  (no issues found)")
        if errs[:3]:
            print(f"  CONSOLE: {errs[:3]}")
        ctx.close()
    browser.close()
