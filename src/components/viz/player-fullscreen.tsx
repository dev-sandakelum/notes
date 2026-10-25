"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Expand, Shrink } from "lucide-react";
import { PLAYER_BY_SLUG, type PlayerEntry } from "./player-registry";

/**
 * Fullscreen player surface: renders any registered player filling the
 * viewport. The saved theme (next-themes) and playback speed
 * (localStorage, same origin) carry over automatically.
 *
 * The DEFAULT player arrives prerendered from the server (the page
 * resolves the component and passes it as `playerElement`), so opening
 * /notes/play/<slug> shows the player instantly — no loading state.
 * Only when the URL carries player-specific query params (e.g.
 * ?expr=…) does the shell lazily re-mount the component with those
 * props (the page itself stays static; params are read from
 * window.location.search on the client).
 */
export function PlayerFullscreen({
  slug,
  playerElement,
}: {
  slug: string;
  /** Prerendered default player (server-resolved client element). */
  playerElement: React.ReactNode;
}) {
  // The page 404s for unknown slugs; this is pure belt-and-braces for TS.
  const entry: PlayerEntry | undefined = PLAYER_BY_SLUG.get(slug);
  const [query, setQuery] = useState<Record<string, string>>({});
  /** Non-null once query params require re-mounting the player with props. */
  const [Comp, setComp] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [nativeFs, setNativeFs] = useState(false);

  // Read ?query params client-side; if the URL carries any params this
  // player supports (?expr=…), load the component again to pass props.
  // Deferred one frame so the first paint matches the prerendered markup
  // (and no setState fires synchronously inside the effect).
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const out: Record<string, string> = {};
      for (const [k, v] of new URLSearchParams(window.location.search)) out[k] = v;
      setQuery(out);
      const wantsProps = (entry?.query ?? []).some((q) => out[q.param]);
      if (!wantsProps || !entry) return;
      entry
        .load()
        .then((c) => {
          setComp(() => c as React.ComponentType<Record<string, unknown>>);
        })
        .catch(() => {
          setErr("This player could not be loaded.");
        });
    });
    return () => cancelAnimationFrame(raf);
  }, [entry]);

  // Native Fullscreen API state (button lives in the header of this page).
  useEffect(() => {
    const onChange = () => setNativeFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleNative = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {});
    } else {
      void document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  // Forward supported query params as props (?expr=… -> initialExpr=…).
  const props = useMemo(() => {
    const out: Record<string, unknown> = {};
    for (const q of entry?.query ?? []) {
      const v = query[q.param];
      if (v && v.length > 0) out[q.prop] = v;
    }
    return out;
  }, [entry, query]);

  const from =
    query.from && query.from.startsWith("/notes/") ? query.from : entry?.chapterHref ?? "/";

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      {/* Minimal header: back link · title · chapter badge */}
      <header className="sticky top-0 z-20 border-b border-hairline bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 pr-14 sm:px-6 sm:pr-16">
          <a
            href={from}
            className="inline-flex items-center gap-1.5 rounded-md px-1 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden />
            <span className="hidden sm:inline">Back to</span> chapter
          </a>
          <span aria-hidden className="text-ink-faint">
            /
          </span>
          <h1 className="min-w-0 truncate font-display text-sm font-semibold text-ink">
            {entry?.title ?? "Player"}
          </h1>
          <span className="ml-auto font-mono text-caption text-ink-faint">
            {entry?.chapterLabel}
          </span>
        </div>
      </header>

      {/* Native Fullscreen API toggle */}
      <div className="mx-auto flex w-full max-w-6xl justify-end px-4 pt-3 sm:px-6">
        <button
          type="button"
          onClick={toggleNative}
          aria-pressed={nativeFs}
          className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper-raised px-3 py-1 text-caption text-ink-muted transition-colors duration-150 hover:border-hairline-strong hover:text-ink"
        >
          {nativeFs ? (
            <Shrink className="size-3.5" aria-hidden />
          ) : (
            <Expand className="size-3.5" aria-hidden />
          )}
          {nativeFs ? "Exit native fullscreen" : "Native fullscreen"}
        </button>
      </div>

      {/* The player, large and responsive — prerendered, instant */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-3 sm:px-6">
        {err ? (
          <p role="alert" className="mt-10 text-center text-sm text-danger">
            {err}
          </p>
        ) : Comp ? (
          <Comp {...props} />
        ) : (
          playerElement
        )}

        {entry?.query?.length ? (
          <p className="mt-4 text-center font-mono text-caption text-ink-faint">
            {entry.query.map((q) => q.hint).join(" · ")}
          </p>
        ) : null}
      </main>
    </div>
  );
}
