#!/usr/bin/env python3
"""Verify the fixed layout: sidebar visible + scrollable, no overlaps, dark mode."""
import sys
from playwright.sync_api import sync_playwright

URLS = [
    ("http://localhost:3000/notes/dsa", "book page"),
    ("http://localhost:3000/notes/dsa/01-introduction", "chapter page"),
    ("http://localhost:3000/notes/dsa/10-avl-trees-and-balanced-trees", "ch10"),
]

checks = []


def check(name, ok, detail=""):
    checks.append((name, ok, detail))
    print(f"  {'PASS' if ok else 'FAIL'}  {name}" + (f"  [{detail}]" if detail else ""))


with sync_playwright() as p:
    browser = p.chromium.launch()
    for url, label in URLS:
        for w in [1900, 1280, 390]:
            for scheme in ["light", "dark"]:
                ctx = browser.new_context(
                    viewport={"width": w, "height": 1000}, color_scheme=scheme
                )
                page = ctx.new_page()
                errs = []
                page.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
                page.on("pageerror", lambda e: errs.append(str(e)))
                page.goto(url, wait_until="networkidle", timeout=30000)
                page.wait_for_timeout(400)

                info = page.evaluate("""(w) => {
                  const aside = document.querySelector('aside');
                  const header = document.querySelector('header');
                  const r = (el) => el ? el.getBoundingClientRect() : null;
                  const ar = r(aside), hr = r(header);
                  // first chapter link visible inside aside?
                  const ch = aside?.querySelector('a[href*="/notes/dsa/"]');
                  const chr = ch ? ch.getBoundingClientRect() : null;
                  // all-books count
                  const ab = [...document.querySelectorAll('a')].filter(a => /All books/i.test(a.textContent)).length;
                  // horizontal overflow?
                  const overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
                  // body bg
                  const bg = getComputedStyle(document.body).backgroundColor;
                  // sidebar parent
                  const ap = aside ? aside.parentElement.className.slice(0,30) : null;
                  // sidebar's own scrollHeight vs clientHeight (internal scroll?)
                  const scrollH = aside ? aside.scrollHeight : 0;
                  const clientH = aside ? aside.clientHeight : 0;
                  // active chapter link highlighted?
                  const active = aside?.querySelector('a[aria-current="page"]');
                  return {
                    asideH: Math.round(ar?.height || 0),
                    asideParent: ap,
                    chapterLinkVisible: chr && chr.top >= 0 && chr.top < 1000 && chr.height > 0,
                    chapterLinkText: ch?.textContent.trim().slice(0, 30),
                    allBooksCount: ab,
                    overflowPx: Math.round(overflow),
                    bodyBg: bg,
                    sidebarScrollH: scrollH,
                    sidebarClientH: clientH,
                    sidebarScrolls: scrollH > clientH + 5,
                    activeChapterHighlighted: !!active,
                  };
                }""", w)
                info["errs"] = errs[:2]
                check(
                    f"{label} @{w}px {scheme}: sidebar full-height",
                    info["asideH"] >= 900 if w >= 1024 else info["asideH"] == 0,
                    f"asideH={info['asideH']}",
                )
                check(
                    f"{label} @{w}px {scheme}: sidebar parent is root shell",
                    info["asideParent"] and "min-h-screen" in info["asideParent"],
                    info["asideParent"],
                )
                check(
                    f"{label} @{w}px {scheme}: chapter link visible",
                    bool(info["chapterLinkVisible"]),
                    info["chapterLinkText"],
                )
                check(
                    f"{label} @{w}px {scheme}: single 'All books'",
                    info["allBooksCount"] == 1,
                    f"{info['allBooksCount']} found",
                )
                check(
                    f"{label} @{w}px {scheme}: no horizontal overflow",
                    info["overflowPx"] <= 1,
                    f"{info['overflowPx']}px",
                )
                check(
                    f"{label} @{w}px {scheme}: console clean",
                    len(info["errs"]) == 0,
                    "; ".join(info["errs"])[:100],
                )
                if w >= 1024 and "ch10" in label:
                    check(
                        f"{label} @{w}px {scheme}: active chapter highlighted",
                        info["activeChapterHighlighted"],
                    )
                    check(
                        f"{label} @{w}px {cheme if False else scheme} sidebar internal scroll",
                        info["sidebarScrolls"],
                        f"scrollH={info['sidebarScrollH']} clientH={info['sidebarClientH']}",
                    )
                ctx.close()
    browser.close()

passed = sum(1 for _, ok, _ in checks if ok)
print(f"\n{passed}/{len(checks)} layout checks passed")
sys.exit(0 if passed == len(checks) else 1)
