/**
 * Skeleton primitives for in-page async content (lazy player mounts).
 * Theme-aware shimmer; prefers-reduced-motion gets a static block.
 * Server components — zero JS.
 *
 * NOTE: there are deliberately NO route-level skeletons — /notes pages
 * are statically prerendered and swap atomically on navigation, so no
 * loading state ever replaces a page (only the first-visit splash runs).
 */

export function Skeleton({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={`skeleton-block inline-block rounded-md ${className}`}
      style={style}
    />
  );
}

/** Skeleton for an interactive player (viz shell: header, stage, controls). */
export function PlayerSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading interactive player"
      className="my-6 rounded-xl border border-hairline bg-paper-raised p-4 shadow-card"
    >
      <span className="sr-only">Loading player…</span>
      <div className="mb-3 flex items-center justify-between">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      {/* stage: tokens row + panels */}
      <div className="space-y-3">
        <div className="flex gap-1.5">
          {Array.from({ length: 7 }, (_, i) => (
            <Skeleton key={i} className="h-6 w-10 rounded-md" />
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,auto)]">
          <div className="flex flex-col items-center gap-1.5 rounded-lg border border-hairline bg-paper-sunken p-3">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-16 w-full rounded-lg" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>
        </div>
      </div>
      {/* controls + scrubber */}
      <div className="mt-4 flex items-center gap-2">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-16 rounded-md" />
        <Skeleton className="h-8 w-16 rounded-md" />
        <Skeleton className="ml-auto h-5 w-40 rounded-full" />
      </div>
      <Skeleton className="mt-3 h-4 w-full rounded-full" />
    </div>
  );
}
