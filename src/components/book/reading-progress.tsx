"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reading progress bar: scroll-linked, transform-only (scaleX) updates
 * driven by requestAnimationFrame. Hidden on print.
 */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${pct})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const first = requestAnimationFrame(() => {
      update();
      setReady(true);
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      cancelAnimationFrame(first);
    };
  }, []);

  return (
    <div
      className="no-print h-[2px] w-full overflow-hidden bg-paper-sunken"
      role="progressbar"
      aria-label="Reading progress"
    >
      <div
        ref={ref}
        className={`h-full w-full origin-left bg-(--accent) transition-opacity ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
