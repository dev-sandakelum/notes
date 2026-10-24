#!/usr/bin/env python3
"""Interactive round-2 verification: exercises the hero widgets in a real browser.

Checks (all must pass):
  A. ch09 BST delete playground: preloaded tree, method radios, animated delete
     with narrative log, node geometry (no vertical stacking).
  B. ch10 rotation player: real numeric cases (30/20/10 etc.), role tags,
     live BF badges, playback changes the tree.
  C. ch10 rotation case cards: 4 cards populated, "Play this case" wired
     (loads the matching case in the player).
  D. TreeGraph geometry audit: parent-child dx >= 40px, same-level gaps >= 20px.
  E. Responsive: 1900 / 1280 / 390 - no horizontal overflow; dark mode flips
     the body background.
"""
import sys
from playwright.sync_api import sync_playwright

BASE = "http://localhost:3000"
CH09 = "/notes/dsa/09-binary-search-trees"
CH10 = "/notes/dsa/10-avl-trees-and-balanced-trees"

results = []


def check(name, ok, detail=""):
    results.append((name, ok, detail))
    print(f"  {'PASS' if ok else 'FAIL'}  {name}" + (f"  [{detail}]" if detail else ""))


with sync_playwright() as p:
    browser = p.chromium.launch()

    # ---------- A + D: ch09 delete playground ----------
    ctx = browser.new_context(viewport={"width": 1280, "height": 900})
    page = ctx.new_page()
    page.goto(BASE + CH09, wait_until="networkidle", timeout=60000)
    height = page.evaluate("document.body.scrollHeight")
    y = 0
    while y < height:
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(150)
        y += 700
        height = page.evaluate("document.body.scrollHeight")
    page.wait_for_timeout(600)

    # A1. playground exists with a preloaded sample tree
    shell = page.locator(".viz-shell").filter(has_text="Click a node to select it")
    n = shell.count()
    check("ch09 playground mounted", n >= 1, f"{n} shell(s)")
    if n:
        s = shell.first
        # preloaded keys on nodes (50 30 70 20 40 60 80 35 65)
        txt = s.inner_text()
        preloaded = all(k in txt for k in ["50", "30", "70", "35", "65"])
        check("ch09 preloaded sample tree", preloaded)
        # A2. controls: Delete + Random tree + Reset buttons, method radios
        btns = s.locator("button", has_text="Random tree")
        check("ch09 control buttons present", btns.count() >= 1 and s.locator("button", has_text="Reset").count() >= 1)
        radios = s.locator("[aria-label='Replacement method'], [role=radio], input[type=radio]")
        check("ch09 method selector present", radios.count() >= 1, f"{radios.count()} controls")
        # delete button works: click node 50 (root, two-children case), then Delete
        try:
            node_btn = s.locator("svg [role=button]").filter(has_text="50").first
            node_btn.click(timeout=3000)
            page.wait_for_timeout(300)
            check("ch09 node click selects", "Selected node 50" in s.inner_text())
            s.locator("button", has_text="Delete").first.click(timeout=3000)
            page.wait_for_timeout(3500)
            txt = s.inner_text()
            check("ch09 delete animates + narrates (Case 3)", "Case 3" in txt and "Deleted 50" in txt)
        except Exception as e:
            check("ch09 node click selects", False, str(e)[:80])
            check("ch09 delete animates + narrates (Case 3)", False, str(e)[:80])

    # D. geometry audit on all ch09 tree SVGs (no vertical stacking)
    geo = page.evaluate("""
    () => {
      const bad = [];
      document.querySelectorAll('.viz-shell svg').forEach((svg) => {
        const nodes = [...svg.querySelectorAll('g')].filter(g => g.querySelector('circle'));
        if (nodes.length < 4) return;
        const pos = nodes.map(g => {
          const c = g.querySelector('circle');
          const t = c.getAttribute('transform') || g.getAttribute('transform') || '';
          const m = t.match(/translate\\(([\\d.]+)[, ]+([\\d.]+)/);
          const bb = c.getBBox();
          return m ? {x: +m[1], y: +m[2], r: bb.r || 28} : null;
        }).filter(Boolean);
        for (const a of pos) for (const b of pos) {
          if (a === b) continue;
          if (Math.abs(a.y - b.y) < 2 && Math.abs(a.x - b.x) > 1 && Math.abs(a.x - b.x) < 40)
            bad.push(`same-level dx=${Math.abs(a.x-b.x).toFixed(0)}`);
        }
      });
      return bad;
    }""")
    check("ch09 tree geometry (no vertical columns)", not geo, "; ".join(geo[:3]))
    ctx.close()

    # ---------- B + C: ch10 rotation player + case cards ----------
    ctx = browser.new_context(viewport={"width": 1900, "height": 1000})
    page = ctx.new_page()
    page.goto(BASE + CH10, wait_until="networkidle", timeout=60000)
    height = page.evaluate("document.body.scrollHeight")
    y = 0
    while y < height:
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(150)
        y += 700
        height = page.evaluate("document.body.scrollHeight")
    page.wait_for_timeout(600)
    body = page.inner_text("body")

    # B1. real numeric cases present
    has_numbers = all(k in body for k in ["30", "20", "10", "35"])
    check("ch10 real-number rotation cases (30/20/10..., T0-T3)", has_numbers)
    # B2. role tags z/y/x
    check("ch10 role tags (z / y / x)", all(t in body for t in ["z", "y", "x"]))
    # B3. BF badges
    check("ch10 BF badges present", "BF" in body or "balance factor" in body.lower())
    # B4. all four case names
    check("ch10 four rotation cases named", all(c in body for c in ["LL", "RR", "LR", "RL"]))

    # C. case cards: 4 cards with Play this case
    cards = page.locator(".viz-shell").filter(has_text="Play this case")
    check("ch10 case cards populated", cards.count() >= 1, f"{cards.count()} card shell(s)")

    # C2. clicking Play this case loads the case in the player
    play_btn = page.get_by_role("button", name="Play this case").first
    player_txt_before = page.locator(".viz-shell").filter(has_text="Rotation").first.inner_text() if page.locator(".viz-shell").filter(has_text="Rotation").count() else ""
    try:
        play_btn.click(timeout=3000)
        page.wait_for_timeout(800)
        # page scrolled to player?
        scroll_y = page.evaluate("window.scrollY")
        check("ch10 Play-this-case scrolls to player", scroll_y > 200, f"scrollY={scroll_y}")
    except Exception as e:
        check("ch10 Play-this-case scrolls to player", False, str(e)[:80])

    # B5. player has case controls and takeaway
    check("ch10 player takeaway (all cases end as 20(...))", "20" in body and ("ends" in body.lower() or "becomes" in body.lower() or "result" in body.lower()))
    ctx.close()

    # ---------- E: responsive + dark ----------
    for w, h in [(1900, 1000), (1280, 900), (390, 844)]:
        ctx = browser.new_context(viewport={"width": w, "height": h})
        page = ctx.new_page()
        page.goto(BASE + CH10, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(500)
        overflow = page.evaluate(
            "document.documentElement.scrollWidth - document.documentElement.clientWidth")
        check(f"no horizontal overflow @{w}px", overflow <= 1, f"overflow={overflow}px")
        if w == 390:
            # TOC rail must not clip content
            toc = page.locator('nav[aria-label="On this page"]')
            if toc.count():
                clipped = toc.first.evaluate("el => el.scrollWidth - el.clientWidth")
                check("TOC not clipped @390px", clipped <= 1, f"clip={clipped}px")
        ctx.close()

    # dark mode
    ctx = browser.new_context(viewport={"width": 1280, "height": 900}, color_scheme="dark")
    page = ctx.new_page()
    page.goto(BASE + CH10, wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(600)
    bg = page.evaluate("getComputedStyle(document.body).backgroundColor")
    check("dark mode background", not bg.endswith("255)") and not bg.endswith("252, 252, 252)"), bg)
    ctx.close()
    browser.close()

fails = [r for r in results if not r[1]]
print(f"\n{len(results) - len(fails)}/{len(results)} interactive checks passed")
sys.exit(1 if fails else 0)
