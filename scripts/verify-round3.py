#!/usr/bin/env python3
"""Capture the fixed ch08 sections + verify interactive players work."""
import os
import json
from playwright.sync_api import sync_playwright

OUT = "/home/z/my-project/download/round3-shots"
os.makedirs(OUT, exist_ok=True)
URL = "http://localhost:3000/notes/dsa/08-tree-traversals"

checks = []


def json_str(o):
    return json.dumps(o)


def check(name, ok, detail=""):
    checks.append((name, ok, detail))
    print(f"  {'PASS' if ok else 'FAIL'}  {name}" + (f"  [{detail}]" if detail else ""))


with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={"width": 1280, "height": 900})
    page = ctx.new_page()
    errs = []
    page.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
    page.on("pageerror", lambda e: errs.append(str(e)))
    page.goto(URL, wait_until="networkidle", timeout=60000)
    # scroll through to mount lazy players
    height = page.evaluate("document.body.scrollHeight")
    y = 0
    while y < height:
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(180)
        y += 700
        height = page.evaluate("document.body.scrollHeight")
    page.wait_for_timeout(800)
    check("console clean after full scroll", len(errs) == 0, "; ".join(errs)[:120])

    # tree diagrams rendered with computed viewBox, all nodes inside
    info = page.evaluate("""() => {
      const svgs = [...document.querySelectorAll('svg.tree-diagram')];
      return svgs.map(svg => {
        const vb = svg.getAttribute('viewBox').split(/\\s+/).map(Number);
        const [vx, vy, vw, vh] = vb;
        let clipped = 0;
        svg.querySelectorAll('circle').forEach(c => {
          const cx = +c.getAttribute('cx'), cy = +c.getAttribute('cy'), r = +c.getAttribute('r');
          if (cx - r < vx - 0.5 || cx + r > vx + vw + 0.5 || cy - r < vy - 0.5 || cy + r > vy + vh + 0.5) clipped++;
        });
        const rect = svg.getBoundingClientRect();
        return {viewBox: vb.join(' '), clipped, renderedW: Math.round(rect.width), hasPanel: !!svg.querySelector('.td-panel')};
      });
    }""")
    check("tree diagrams present", len(info) >= 1, f"{len(info)} found")
    for i, t in enumerate(info):
        check(f"tree diagram {i}: no clipped nodes", t["clipped"] == 0, f"viewBox={t['viewBox']} w={t['renderedW']} panel={t['hasPanel']}")

    # expression tree leaf nodes visible (/, C, B, A all inside viewBox)
    expr = page.evaluate("""() => {
      const svg = [...document.querySelectorAll('svg.tree-diagram')].find(s => /Expression tree/.test(s.getAttribute('aria-label') || ''));
      if (!svg) return null;
      const vb = svg.getAttribute('viewBox').split(/\\s+/).map(Number);
      const [vx, vy, vw, vh] = vb;
      const leaves = [...svg.querySelectorAll('.td-label')].map(t => t.textContent);
      const circles = [...svg.querySelectorAll('circle')];
      const bottom = Math.max(...circles.map(c => +c.getAttribute('cy') + +c.getAttribute('r')));
      const left = Math.min(...circles.map(c => +c.getAttribute('cx') - +c.getAttribute('r')));
      return {leaves, bottom, vbBottom: vy + vh, fitsBottom: bottom <= vy + vh, left, vbLeft: vx, fitsLeft: left >= vx};
    }""")
    check("expression tree leaves fit", expr and expr["fitsBottom"] and expr["fitsLeft"], json_str(expr) if expr else "not found")

    # ascii blocks: multi-line preserved
    ascii_info = page.evaluate("""() => {
      const pres = [...document.querySelectorAll('pre.ascii-diagram')];
      return pres.map(pre => {
        const lines = pre.textContent.split('\\n').filter(l => l.trim()).length;
        const longest = Math.max(...pre.textContent.split('\\n').map(l => l.length));
        const style = getComputedStyle(pre);
        return {lines, longest, whiteSpace: style.whiteSpace};
      });
    }""")
    check("ascii diagrams present", len(ascii_info) >= 6, f"{len(ascii_info)} found")
    for i, a in enumerate(ascii_info):
        check(f"ascii {i}: multi-line + pre", a["lines"] >= 3 and a["whiteSpace"] == "pre", f"lines={a['lines']} longest={a['longest']}")

    # table captions rendered, header/cell counts match
    table_info = page.evaluate("""() => {
      const out = [];
      document.querySelectorAll('table').forEach((t, ti) => {
        const ths = t.querySelectorAll('thead th').length;
        const rows = [...t.querySelectorAll('tbody tr')];
        if (!rows.length) return;
        const counts = new Set(rows.map(r => r.querySelectorAll('td').length));
        const mismatched = [...counts].filter(c => c !== ths);
        const caption = t.querySelector('caption');
        if (mismatched.length || caption) {
          out.push({ti, ths, mismatched, hasCaption: !!caption, captionText: caption ? caption.textContent.slice(0, 40) : null});
        }
      });
      return out;
    }""")
    for t in table_info:
        if t["mismatched"]:
            check(f"table #{t['ti']} header/cells aligned", False, f"head={t['ths']} row cells={t['mismatched']}")
        elif t["hasCaption"]:
            check(f"table #{t['ti']} has caption", True, t["captionText"])

    # players: 4 shells with controls
    players = page.evaluate("""() => {
      const shells = [...document.querySelectorAll('.viz-shell .sp-shell')];
      return shells.map(s => ({
        title: s.querySelector('span') ? s.querySelector('span').textContent.slice(0, 40) : '',
        hasScrubber: !!s.querySelector('input[type=range][aria-label*="Scrub"]'),
        hasPlay: !!s.querySelector('button[aria-label="Play"], button[aria-label="Pause"]'),
        hasSpeed: !!s.querySelector('input[aria-label="Playback speed"]'),
        stepText: (s.textContent.match(/Step \\d+ of \\d+/) || [null])[0],
        ariaLive: !!s.querySelector('[aria-live="polite"]'),
        tabIndex: s.getAttribute('tabindex'),
      }));
    }""")
    check("4 players mounted", len(players) == 4, f"{len(players)} found: {[p['title'] for p in players]}")
    for pr in players:
        check(f"player '{pr['title']}': controls", pr["hasScrubber"] and pr["hasPlay"] and pr["hasSpeed"], f"scrub={pr['hasScrubber']} play={pr['hasPlay']} speed={pr['hasSpeed']} step={pr['stepText']}")

    # interactive: step the traversal player
    try:
        shell = page.locator(".sp-shell").filter(has_text="Traversal player").first
        before = shell.locator('[aria-live="polite"]').inner_text()
        for _ in range(3):
            shell.locator('button[aria-label="Step forward"]').click()
            page.wait_for_timeout(150)
        after = shell.locator('[aria-live="polite"]').inner_text()
        check("traversal player steps update status", before != after, f"'{before[:25]}' → '{after[:25]}'")
        # step back restores
        shell.locator('button[aria-label="Step back"]').click()
        page.wait_for_timeout(150)
        back = shell.locator('[aria-live="polite"]').inner_text()
        check("traversal step-back works", back != after, back[:40])
        # keyboard
        shell.click()
        page.keyboard.press("ArrowRight")
        page.wait_for_timeout(150)
        after_key = shell.locator('[aria-live="polite"]').inner_text()
        check("keyboard ArrowRight steps", after_key != back, after_key[:40])
    except Exception as e:
        check("traversal player steps update status", False, str(e)[:80])

    # postfix player: answer 48 at end
    try:
        pp = page.locator(".sp-shell").filter(has_text="Postfix evaluation player").first
        scrub = pp.locator('input[aria-label*="Scrub"]')
        n = int(scrub.get_attribute("max"))
        scrub.fill(str(n))
        page.wait_for_timeout(600)
        stage = page.evaluate("""() => {
          const pp = [...document.querySelectorAll('.sp-shell')].find(s => /Postfix evaluation player/.test(s.textContent));
          const stage = pp.querySelector('.sp-stage');
          const stackItems = [...stage.querySelectorAll('[aria-label="Operand stack"] span')].map(s => s.textContent.trim());
          const hasAnswerWord = /answer/i.test(stage.textContent);
          return {stackItems, hasAnswerWord};
        }""")
        check(
            "postfix player ends at 48",
            stage["stackItems"] == ["48"] and stage["hasAnswerWord"],
            f"stack={stage['stackItems']} answer={stage['hasAnswerWord']}",
        )
        # invalid expression shows friendly error
        inp = pp.locator("#postfix-expr")
        inp.fill("5 +")
        pp.locator('button:has-text("Evaluate")').click()
        page.wait_for_timeout(300)
        check("postfix friendly error on underflow", "underflow" in page.locator('[role="alert"]').first.inner_text().lower())
    except Exception as e:
        check("postfix player ends at 48", False, str(e)[:80])

    # infix player: converts A + B * C - D
    try:
        ip = page.locator(".sp-shell").filter(has_text="Infix → postfix player").first
        scrub = ip.locator('input[aria-label*="Scrub"]')
        n = int(scrub.get_attribute("max"))
        scrub.fill(str(n))
        page.wait_for_timeout(300)
        check("infix player final output", "A B C * + D" in ip.inner_text().replace("−", "-"))
    except Exception as e:
        check("infix player final output", False, str(e)[:80])

    # notation player: 3 phases
    try:
        np_ = page.locator(".sp-shell").filter(has_text="Notation player").first
        txt = np_.inner_text()
        check("notation player shows phases", "Prefix" in txt or "prefix" in txt)
    except Exception as e:
        check("notation player shows phases", False, str(e)[:80])

    ctx.close()

    # screenshots for the user
    for w, h in [(1900, 1000), (1280, 1000), (390, 844)]:
        ctx = browser.new_context(viewport={"width": w, "height": h})
        page = ctx.new_page()
        page.goto(URL, wait_until="networkidle", timeout=60000)
        # jump to the expression tree figure
        page.evaluate("document.documentElement.style.scrollBehavior = 'auto'")
        page.evaluate("document.getElementById('expression-trees-notations')?.scrollIntoView()")
        page.wait_for_timeout(700)
        page.screenshot(path=f"{OUT}/expression-tree-{w}.png")
        # evaluating postfix section with the player
        page.evaluate("document.getElementById('evaluating-postfix-scan-left-right-one-stack')?.scrollIntoView()")
        page.wait_for_timeout(700)
        page.screenshot(path=f"{OUT}/postfix-section-{w}.png")
        # how they overlap (ascii)
        page.evaluate("document.getElementById('how-they-overlap')?.scrollIntoView()")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{OUT}/how-they-overlap-{w}.png")
        ctx.close()
    browser.close()

passed = sum(1 for _, ok, _ in checks if ok)
print(f"\n{passed}/{len(checks)} checks passed")
