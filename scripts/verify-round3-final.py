#!/usr/bin/env python3
"""Final round-3 verification: playback, speed, reduced-motion, and
light/dark screenshots at mobile/tablet/desktop for both routes."""
import os
from playwright.sync_api import sync_playwright

OUT = "/home/z/my-project/download/round3-shots"
os.makedirs(OUT, exist_ok=True)
CH08 = "http://localhost:3000/notes/dsa/08-tree-traversals"
BOOK = "http://localhost:3000/notes/dsa"

checks = []


def check(name, ok, detail=""):
    checks.append((name, ok, detail))
    print(f"  {'PASS' if ok else 'FAIL'}  {name}" + (f"  [{detail}]" if detail else ""))


with sync_playwright() as p:
    browser = p.chromium.launch()

    # ---- playback test: Play advances steps over time ----
    ctx = browser.new_context(viewport={"width": 1280, "height": 900})
    page = ctx.new_page()
    page.goto(CH08, wait_until="networkidle")
    page.evaluate("document.documentElement.style.scrollBehavior = 'auto'")
    page.evaluate("document.getElementById('2-pre-order-in-order-post-order-traversal')?.scrollIntoView()")
    page.wait_for_timeout(900)
    shell = page.locator(".sp-shell").filter(has_text="Traversal player").first
    shell.locator('button[aria-label="Play"]').click()
    page.wait_for_timeout(2000)  # ~2 steps at 900ms base
    txt1 = shell.locator("span.font-mono.tabular-nums").last.inner_text()  # "Step n of N"
    check("playback advances", txt1 != "Step 1 of 29", f"after 2s: {txt1}")
    page.wait_for_timeout(1200)
    txt2 = shell.locator("span.font-mono.tabular-nums").last.inner_text()
    check("playback continues", txt2 != txt1, f"{txt1} → {txt2}")
    # pause stops it
    shell.locator('button[aria-label="Pause"]').click()
    page.wait_for_timeout(1500)
    txt3 = shell.locator("span.font-mono.tabular-nums").last.inner_text()
    check("pause stops playback", txt3 == txt2, f"{txt2} == {txt3}")
    # speed 2x: set speed then play, steps advance faster
    shell.locator('input[aria-label="Playback speed"]').fill("2")
    shell.locator('button[aria-label="Play"]').click()
    page.wait_for_timeout(1000)
    txt4 = shell.locator("span.font-mono.tabular-nums").last.inner_text()
    import re as _re
    n3 = int(_re.search(r"Step (\d+)", txt3).group(1))
    n4 = int(_re.search(r"Step (\d+)", txt4).group(1))
    check("2x speed advances ~2 steps/s", n4 - n3 >= 2, f"{txt3} → {txt4}")
    ctx.close()

    # ---- reduced-motion class applied ----
    ctx = browser.new_context(
        viewport={"width": 1280, "height": 900},
        reduced_motion="reduce",
    )
    page = ctx.new_page()
    page.goto(CH08, wait_until="networkidle")
    page.evaluate("document.getElementById('evaluating-postfix-scan-left-right-one-stack')?.scrollIntoView()")
    page.wait_for_timeout(800)
    reduced = page.evaluate(
        "() => !!document.querySelector('.sp-shell.sp-reduced')"
    )
    check("prefers-reduced-motion applies sp-reduced", reduced)
    ctx.close()

    # ---- screenshots: light + dark at 1900/1280/768/390, both routes ----
    def set_dark(page):
        bg = page.evaluate("getComputedStyle(document.body).backgroundColor")
        is_dark = "11, 18, 32" in bg
        if not is_dark:
            btn = page.locator('button[aria-label*="theme" i], button[aria-label*="dark" i], button[aria-label*="light" i]').first
            if btn.count() == 0:
                btn = page.locator("header button").last
            btn.click()
            page.wait_for_timeout(500)

    for w, h, label in [(1900, 1000, "desktop"), (1280, 900, "laptop"), (768, 900, "tablet"), (390, 844, "mobile")]:
        for scheme in ["light", "dark"]:
            ctx = browser.new_context(viewport={"width": w, "height": h})
            page = ctx.new_page()
            page.goto(CH08, wait_until="networkidle")
            page.evaluate("document.documentElement.style.scrollBehavior = 'auto'")
            page.evaluate("document.getElementById('expression-trees-notations')?.scrollIntoView()")
            page.wait_for_timeout(600)
            if scheme == "dark":
                set_dark(page)
            page.screenshot(path=f"{OUT}/exprtree-{label}-{w}-{scheme}.png")
            bg = page.evaluate("getComputedStyle(document.body).backgroundColor")
            ok_bg = ("11, 18, 32" in bg) if scheme == "dark" else ("241, 245, 249" in bg)
            check(f"expr tree @{w} {scheme} bg correct", ok_bg, bg)
            ctx.close()

    # book route spot check
    for w, h, label in [(1280, 900, "laptop"), (390, 844, "mobile")]:
        ctx = browser.new_context(viewport={"width": w, "height": h})
        page = ctx.new_page()
        page.goto(BOOK, wait_until="networkidle")
        page.wait_for_timeout(500)
        overflow = page.evaluate(
            "document.documentElement.scrollWidth - document.documentElement.clientWidth"
        )
        check(f"book route @{w} no overflow", overflow <= 1, f"{overflow}px")
        page.screenshot(path=f"{OUT}/book-{label}-{w}.png")
        ctx.close()

    browser.close()

passed = sum(1 for _, ok, _ in checks if ok)
print(f"\n{passed}/{len(checks)} final checks passed")
import sys
sys.exit(0 if passed == len(checks) else 1)
