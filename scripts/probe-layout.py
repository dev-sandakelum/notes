#!/usr/bin/env python3
"""Probe the book layout to confirm the structural bugs from screenshots."""
import sys
from playwright.sync_api import sync_playwright

URLS = [
    "http://localhost:3000/notes/dsa",
    "http://localhost:3000/notes/dsa/01-introduction",
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for url in URLS:
        for w in [1900, 1280, 390]:
            ctx = browser.new_context(viewport={"width": w, "height": 1000}, color_scheme="light")
            page = ctx.new_page()
            errs = []
            page.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
            page.on("pageerror", lambda e: errs.append(str(e)))
            page.goto(url, wait_until="networkidle", timeout=30000)
            page.wait_for_timeout(400)
            info = page.evaluate("""
            (w) => {
              const aside = document.querySelector('aside');
              const header = document.querySelector('header');
              const r = (el) => el ? el.getBoundingClientRect() : null;
              const ar = r(aside), hr = r(header);
              // what is the aside's parent?
              const asideParent = aside ? aside.parentElement.tagName : null;
              const asideParentCls = aside ? aside.parentElement.className.slice(0,60) : null;
              // count "All books" occurrences
              const allBooks = [...document.querySelectorAll('a')].filter(a => /All books/i.test(a.textContent)).length;
              // does the sidebar show chapter links? (links whose href contains /notes/dsa/01...)
              const chapterLinks = [...document.querySelectorAll('aside a[href*="/notes/dsa/"]')].length;
              // top bar overlap with breadcrumb?
              const breadcrumb = document.querySelector('nav[aria-label="Breadcrumb"]');
              const br = r(breadcrumb);
              // chapter number badge overlap?
              const badge = document.querySelector('header span[class*="bg-(--accent)"]') || document.querySelector('span[style*="accent"]');
              return {w, asideParent, asideParentCls, asideH: ar?.height, asideW: ar?.width, asideTop: ar?.top,
                      headerH: hr?.height, allBooksCount: allBooks, chapterLinksInAside: chapterLinks,
                      breadcrumbTop: br?.top, breadcrumbLeft: br?.left, errors: __errors__};
            }
            """.replace("__errors__", "[]"))
            # errors via closure: collect separately
            info = page.evaluate("""(w) => {
              const aside = document.querySelector('aside');
              const header = document.querySelector('header');
              const r = (el) => el ? el.getBoundingClientRect() : null;
              const ar = r(aside), hr = r(header);
              const asideParent = aside ? aside.parentElement.tagName + '.' + aside.parentElement.className.slice(0,40) : null;
              const allBooks = [...document.querySelectorAll('a')].filter(a => /All books/i.test(a.textContent)).length;
              const chapterLinks = [...document.querySelectorAll('aside a[href*="/notes/dsa/"]')].length;
              const breadcrumb = document.querySelector('nav[aria-label="Breadcrumb"]');
              const br = r(breadcrumb);
              const courseCode = document.querySelector('.font-mono.text-caption.text-ink-faint');
              const ccr = r(courseCode);
              return {w, asideParent,
                asideH: ar?.height, asideW: ar?.width, asideTop: ar?.top,
                headerH: hr?.height, headerTop: hr?.top,
                allBooksCount: allBooks, chapterLinksInAside: chapterLinks,
                breadcrumbTop: br?.top, breadcrumbLeft: br?.left,
                courseCodeTop: ccr?.top, courseCodeH: ccr?.height};
            }""", w)
            info['errs'] = errs[:3]
            print(f"@{w:4} {url.split('3000')[1][:30]:30}", info)
            ctx.close()
    browser.close()
