import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PLAYER_REGISTRY, PLAYER_BY_SLUG } from "@/components/viz/player-registry";
import { PlayerFullscreen } from "@/components/viz/player-fullscreen";
import { ThemeToggle } from "@/components/book/theme-toggle";

/**
 * Fullscreen player route: /notes/play/<slug>
 *
 * One dynamic route renders ANY registered player (central registry),
 * with generateStaticParams so every player is prerendered for Vercel —
 * an unknown slug has no static params and gets a 404.
 *
 * The player component itself is resolved SERVER-SIDE (await entry.load())
 * and handed to the client shell as an already-rendered element, so the
 * prerendered HTML contains the player from the very first byte — no
 * loading state, no skeleton flash, no layout shift on this route.
 * Query params (?expr=…) are still honoured client-side by the shell.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return PLAYER_REGISTRY.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = PLAYER_BY_SLUG.get(slug);
  if (!entry) return {};
  return {
    title: `${entry.title} · Fullscreen player`,
    description: `Interactive ${entry.title.toLowerCase()} player, fullscreen.`,
  };
}

export default async function PlayerFullscreenPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = PLAYER_BY_SLUG.get(slug);
  if (!entry) notFound();

  // Resolve the player on the server: the element crosses the RSC
  // boundary as a client reference, prerendered into the page HTML.
  const Comp = await entry.load();

  return (
    <div className="relative">
      {/* Theme toggle floats over the header (right edge) */}
      <div className="fixed right-4 top-3 z-30">
        <ThemeToggle />
      </div>
      <PlayerFullscreen slug={entry.slug} playerElement={<Comp />} />
    </div>
  );
}
