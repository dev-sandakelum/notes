"use client";

import { useEffect, useState } from "react";

/**
 * First-load splash — shown on EVERY full page load for a fixed 3 seconds.
 *
 * The whole SITE is a multi-subject notes library, so the loader is a
 * NOTEBOOK THAT OPENS — not a single-subject glyph:
 *
 *   1. a closed notebook rises in (cover carries the site wordmark, so
 *      the logo is visible from the very first frame);
 *   2. the cover swings open on its spine (rotateY + opacity);
 *   3. ink-stroke doodles draw themselves on the pages — one per
 *      subject: a tiny tree for Computer Science, a supply/demand
 *      cross for Economics on the left page;
 *   4. a page flips (rotateY around the spine) and reveals the right
 *      page, where a sine wave draws for Mathematics;
 *   5. the open book fades/lifts into the gallery (clip-path + opacity
 *      exit, never layout).
 *
 * Beneath the book: the wordmark, a rotating line ("Opening your
 *      notes…") and a smooth progress bar.
 *
 * - shown on EVERY full page load (refresh / direct navigation) and
 *   held for a fixed 3s every time; client-side navigations never
 *   re-run the gate (the App Router layout persists);
 * - the visibility attribute is set by a pre-paint inline script in the
 *   root layout (no hydration mismatch, no wrong-theme flash — colors
 *   are CSS variables resolved under the already-applied theme class);
 * - pure SVG + CSS keyframes on transform / opacity / stroke-dashoffset
 *   (pathLength="100" normalises every draw to the same dash math);
 * - prefers-reduced-motion gets a static open book + gentle progress;
 * - accessible: role="status" + aria-live="polite" + sr-only label, and
 *   focus moves to the main content when the splash finishes.
 */

/**
 * Fixed duration: the splash holds for exactly 3 seconds on every load,
 * then exits. We do NOT wait for `window.load`, so the timing is the same
 * regardless of how fast or slow the page assets arrive.
 */
const MIN_MS = 3000;
/** Exit (fade/lift) transition length. */
const EXIT_MS = 650;

/** Rotating one-liners while the book opens. */
const TIPS = [
  "Opening your notes…",
  "Sharpening pencils…",
  "CS · Economics · Mathematics",
  "Flipping to your shelf…",
];

export function SplashGate() {
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let done = false;
    let exitTimer = 0;

    const finish = () => {
      if (done) return;
      done = true;
      root.dataset.splash = "exiting";
      exitTimer = window.setTimeout(() => {
        root.dataset.splash = "off";
        setRemoved(true);
        // focus management: land keyboard users on the content
        const main =
          document.getElementById("main") ?? document.querySelector("main");
        if (main) {
          main.setAttribute("tabindex", "-1");
          (main as HTMLElement).focus({ preventScroll: true });
        }
      }, EXIT_MS);
    };

    // Fixed 3-second hold on every load — independent of asset load speed,
    // so the timing is identical every time.
    const holdTimer = window.setTimeout(finish, MIN_MS);

    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className="splash-root" role="status" aria-live="polite">
      <span className="sr-only">Loading Note Gallery…</span>

      {/* backdrop: gradient + drifting ink dots (decorative) */}
      <div className="splash-backdrop" aria-hidden>
        <span className="splash-dot splash-dot-1" />
        <span className="splash-dot splash-dot-2" />
        <span className="splash-dot splash-dot-3" />
        <span className="splash-dot splash-dot-4" />
        <span className="splash-dot splash-dot-5" />
        <span className="splash-dot splash-dot-6" />
      </div>

      <div className="splash-content">
        {/* the notebook that opens (decorative) */}
        <div className="splash-book" aria-hidden>
          <div className="splash-book-perspective">
            {/* open pages: CS tree + econ cross on the left, sine on the right */}
            <svg
              className="splash-pages"
              viewBox="0 0 360 240"
              aria-hidden
              focusable="false"
            >
              {/* page pair + spine */}
              <rect
                className="splash-page-paper"
                x="8"
                y="10"
                width="172"
                height="220"
                rx="6"
              />
              <rect
                className="splash-page-paper"
                x="180"
                y="10"
                width="172"
                height="220"
                rx="6"
              />
              <line
                className="splash-spine-line"
                x1="180"
                y1="12"
                x2="180"
                y2="228"
              />

              {/* --- left page · COMPUTER SCIENCE: a tiny tree --- */}
              <text className="splash-chip" x="28" y="38">
                CS
              </text>
              <path
                className="splash-ink splash-draw"
                style={{ animationDelay: "800ms" }}
                pathLength={100}
                d="M96 85 L66 100"
              />
              <path
                className="splash-ink splash-draw"
                style={{ animationDelay: "880ms" }}
                pathLength={100}
                d="M96 85 L126 100"
              />
              <g
                className="splash-pop"
                style={{ animationDelay: "950ms" }}
              >
                <circle className="splash-node" cx="96" cy="74" r="11" />
                <text className="splash-node-text" x="96" y="77">
                  4
                </text>
              </g>
              <g
                className="splash-pop"
                style={{ animationDelay: "1030ms" }}
              >
                <circle className="splash-node splash-node-sm" cx="66" cy="108" r="9" />
                <text className="splash-node-text" x="66" y="111">
                  2
                </text>
              </g>
              <g
                className="splash-pop"
                style={{ animationDelay: "1110ms" }}
              >
                <circle className="splash-node splash-node-sm" cx="126" cy="108" r="9" />
                <text className="splash-node-text" x="126" y="111">
                  6
                </text>
              </g>

              {/* --- left page · ECONOMICS: supply & demand --- */}
              <text className="splash-chip" x="28" y="146">
                ECON
              </text>
              {/* axes */}
              <path
                className="splash-ink splash-draw"
                style={{ animationDelay: "1050ms" }}
                pathLength={100}
                d="M46 196 L46 152 M46 196 L156 196"
              />
              {/* demand (down-slope) */}
              <path
                className="splash-ink-demand splash-draw"
                style={{ animationDelay: "1200ms" }}
                pathLength={100}
                d="M54 158 L148 192"
              />
              {/* supply (up-slope) */}
              <path
                className="splash-ink-supply splash-draw"
                style={{ animationDelay: "1350ms" }}
                pathLength={100}
                d="M54 192 L148 158"
              />
              <g className="splash-pop" style={{ animationDelay: "1500ms" }}>
                <circle className="splash-dot-eq" cx="101" cy="175" r="3.4" />
              </g>
              <g className="splash-fade" style={{ animationDelay: "1550ms" }}>
                <text className="splash-ax-label" x="34" y="156">
                  P
                </text>
                <text className="splash-ax-label" x="150" y="206">
                  Q
                </text>
                <text className="splash-ax-label" x="46" y="154">
                  D
                </text>
                <text className="splash-ax-label" x="150" y="156">
                  S
                </text>
              </g>

              {/* --- right page · MATHEMATICS: sine wave (revealed by the
                   page flip, so its delay starts as the flip lands) --- */}
              <text className="splash-chip" x="200" y="38">
                MATH
              </text>
              <path
                className="splash-ink-axis splash-draw"
                style={{ animationDelay: "2150ms" }}
                pathLength={100}
                d="M200 128 L332 128"
              />
              <path
                className="splash-ink-math splash-draw splash-draw-slow"
                style={{ animationDelay: "2250ms" }}
                pathLength={100}
                d="M200 128 C208 100 216 100 224 128 C232 156 240 156 248 128 C256 100 264 100 272 128 C280 156 288 156 296 128 C304 100 312 100 320 128"
              />
              <g className="splash-fade" style={{ animationDelay: "2850ms" }}>
                <text className="splash-eq" x="266" y="94">
                  y = sin x
                </text>
                <text className="splash-ax-label" x="198" y="142">
                  0
                </text>
                <text className="splash-ax-label" x="244" y="142">
                  2π
                </text>
                <text className="splash-ax-label" x="292" y="142">
                  4π
                </text>
              </g>
            </svg>

            {/* the page that flips from right to left */}
            <div className="splash-flip">
              <span className="splash-flip-lines" />
            </div>

            {/* the cover: wordmark visible while the book is closed */}
            <div className="splash-cover">
              <div className="splash-cover-spine" />
              <div className="splash-cover-art">
                <svg
                  viewBox="0 0 48 48"
                  aria-hidden
                  focusable="false"
                  className="splash-cover-mark"
                >
                  {/* little stack of three subject books */}
                  <rect
                    x="8"
                    y="30"
                    width="32"
                    height="9"
                    rx="2"
                    className="splash-cover-b3"
                  />
                  <rect
                    x="11"
                    y="19"
                    width="26"
                    height="9"
                    rx="2"
                    className="splash-cover-b2"
                  />
                  <rect
                    x="14"
                    y="8"
                    width="20"
                    height="9"
                    rx="2"
                    className="splash-cover-b1"
                  />
                </svg>
                <p className="splash-cover-title">Note Gallery</p>
                <p className="splash-cover-sub">Interactive lecture notes</p>
                <p className="splash-cover-dots" aria-hidden>
                  <span /> <span /> <span />
                </p>
              </div>
            </div>
          </div>
          {/* soft shadow under the open book */}
          <span className="splash-book-shadow" aria-hidden />
        </div>

        {/* wordmark (visible from the start, stays after the cover opens) */}
        <p className="splash-title">Note Gallery</p>
        <p className="splash-sub">A library of interactive lecture notes</p>

        {/* rotating lines */}
        <ul className="splash-tips" aria-hidden>
          {TIPS.map((t, i) => (
            <li key={i} style={{ animationDelay: `${600 + i * 1150}ms` }}>
              {t}
            </li>
          ))}
        </ul>

        {/* progress */}
        <div className="splash-progress" aria-hidden>
          <div className="splash-progress-fill" />
        </div>
      </div>
    </div>
  );
}
