"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface RevealProps {
  label?: string;
  children: ReactNode;
}

/**
 * Disclosure control for hidden worked-example solutions. `children` is
 * trusted HTML (dangerouslySetInnerHTML) supplied by the block renderer;
 * it is wrapped in a `.prose-book` container for inline styling.
 */
export function Reveal({ label = "Show solution", children }: RevealProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((o) => !o)}
        className="btn btn-ghost"
      >
        {label}
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          id={contentId}
          className="animate-in fade-in duration-150 mt-3 border-t border-hairline pt-3"
        >
          <span className="font-mono text-caption font-medium uppercase tracking-wider text-ok">
            Solution
          </span>
          <div className="prose-book mt-1">{children}</div>
        </div>
      )}
    </div>
  );
}
