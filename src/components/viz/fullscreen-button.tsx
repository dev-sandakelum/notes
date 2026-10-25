"use client";

import { createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Maximize2 } from "lucide-react";
import { PLAYER_BY_KIND, playerFullscreenPath } from "./player-registry";

/**
 * Fullscreen button shown on EVERY interactive player. Opens the same
 * player on its own stable route (/notes/play/<slug>) in a NEW TAB
 * (target="_blank" rel="noopener"), where it fills the viewport.
 *
 * Design (site-wide): a TINY icon-only button (26px) absolutely
 * positioned in the top-right corner INSIDE the player card — it takes
 * no layout space (no extra row, no added height or margin). Cards
 * reserve a little right padding on their header row (StepPlayer does
 * this centrally) so the button never overlaps a title or control.
 *
 * LazyViz provides the player's registry entry through context, so every
 * player gets the button without each component knowing about the route.
 * On the fullscreen page itself no provider exists, so the button is
 * absent (that page's header has the "Back to chapter" link instead).
 */
const PlayerFullscreenContext = createContext<string | null>(null);

export function PlayerFullscreenProvider({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <PlayerFullscreenContext.Provider value={slug}>
      {children}
    </PlayerFullscreenContext.Provider>
  );
}

export function PlayerFullscreenButton() {
  const slug = useContext(PlayerFullscreenContext);
  const pathname = usePathname();
  if (!slug) return null;

  const from = pathname && pathname.startsWith("/notes/") ? `?from=${encodeURIComponent(pathname)}` : "";
  return (
    <Link
      href={`${playerFullscreenPath(slug)}${from}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open fullscreen in new tab"
      title="Open fullscreen in new tab"
      className="absolute right-1.5 top-1.5 z-20 flex size-[26px] items-center justify-center rounded-md border border-hairline bg-paper-raised/90 text-ink-muted no-print backdrop-blur-sm transition-colors duration-150 hover:border-hairline-strong hover:text-ink"
    >
      <Maximize2 className="size-3.5" aria-hidden />
    </Link>
  );
}

/** Slug for a viz kind, if a registered player exists for it. */
export function slugForKind(kind: string): string | null {
  return PLAYER_BY_KIND.get(kind as never)?.slug ?? null;
}
