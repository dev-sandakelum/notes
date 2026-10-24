#!/usr/bin/env python3
"""Capture layout screenshots in both light and dark by clicking the theme toggle."""
import os
from playwright.sync_api import sync_playwright

OUT = "/home/z/my-project/download/layout-fix-shots"
os.makedirs(OUT, exist_ok=True)

URLS = [
    ("http://localhost:3000/notes/dsa", "book-page"),
    ("http://localhost:3000/notes/dsa/01-introduction", "ch01"),
    ("http://localhost:3000/notes/dsa/10-avl-trees-and-balanced-trees", "ch10"),
]


def set_theme(page, scheme):
    """next-themes uses class-based dark mode; click the toggle to flip."""
    bg = page.evaluate("getComputedStyle(document.body).backgroundColor")
    want_dark = scheme == "dark"
    is_dark = bg in ("rgb(11, 18, 32)", "rgb(17, 26, 46)") or "1" in bg.split(",")[0].split("(")[1] and int(bg.split("(")[1].split(",")[0]) < 50
    if (want_dark and not is_dark) or (not want_dark and is_dark):
        btn = page.locator('button[aria-label*="theme" i], button[aria-label*="dark" i], button[aria-label*="light" i]').first
        if btn.count() == 0:
            btn = page.locator("header button").last
        btn.click()
        page.wait_for_timeout(500)


with sync_playwright() as p:
    browser = p.chromium.launch()
    for url, label in URLS:
        for w, h in [(1900, 1000), (1280, 1000)]:
            for scheme in ["light", "dark"]:
                ctx = browser.new_context(viewport={"width": w, "height": h})
                page = ctx.new_page()
                page.goto(url, wait_until="networkidle", timeout=30000)
                page.wait_for_timeout(400)
                set_theme(page, scheme)
                fname = f"{OUT}/{label}-{w}-{scheme}.png"
                page.screenshot(path=fname, full_page=False)
                bg = page.evaluate("getComputedStyle(document.body).backgroundColor")
                print(f"  saved {fname}  (bg={bg})")
                ctx.close()

    # Mobile: closed + drawer open (light only - dark mobile is same drawer behaviour)
    for url, label in URLS:
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        page = ctx.new_page()
        page.goto(url, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(400)
        page.screenshot(path=f"{OUT}/{label}-390-light.png", full_page=False)
        try:
            page.locator('button[aria-label="Open chapter menu"]').click(timeout=3000)
            page.wait_for_timeout(500)
            page.screenshot(path=f"{OUT}/{label}-390-light-drawer.png", full_page=False)
            print(f"  saved drawer shot for {label}")
        except Exception as e:
            print(f"  (no menu button for {label}: {e})")
        ctx.close()
    browser.close()
print(f"\nScreenshots saved to {OUT}/")
