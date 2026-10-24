import { Clock, FileQuestion, Layers, Library } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { books, galleryStats } from "@/content";
import { GalleryExplorer } from "@/components/gallery/gallery-explorer";

function StatItem({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <li className="flex items-center gap-1.5 text-caption text-ink-muted">
      <Icon className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
      {label}
    </li>
  );
}

/** Hairline separator between hero stats (hidden when the row wraps on mobile). */
function StatDivider() {
  return <li aria-hidden="true" className="hidden h-3.5 w-px bg-hairline sm:block" />;
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-hairline-strong focus:bg-paper-raised focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:shadow-sm"
      >
        Skip to content
      </a>

      <main
        id="main"
        className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-10 sm:px-6 sm:pt-16"
      >
        <header className="border-b border-hairline pb-8 sm:pb-10">
          <p className="text-caption font-medium uppercase tracking-widest text-ink-muted">
            Faculty of Technology · Lecture Notes
          </p>
          <h1 className="mt-3 font-display text-book-title tracking-tight text-ink">
            The Note <span className="italic">Gallery</span>
          </h1>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Six interactive course books, rebuilt from the original lecture notes —
            searchable, cross-linked and exam-ready.
          </p>
          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <StatItem icon={Library} label={`${galleryStats.books} books`} />
            <StatDivider />
            <StatItem icon={Layers} label={`${galleryStats.chapters} chapters`} />
            <StatDivider />
            <StatItem icon={FileQuestion} label={`${galleryStats.questions} questions`} />
            <StatDivider />
            <StatItem icon={Clock} label={`~${galleryStats.minutes.toLocaleString("en-US")} min reading`} />
          </ul>
        </header>

        <div className="pt-8 sm:pt-10">
          <GalleryExplorer books={books} />
        </div>
      </main>

      <footer className="mt-auto border-t border-hairline bg-paper-raised">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-caption text-ink-muted">
            Note Gallery — digital lecture notes. Built from the original interactive notes.
          </p>
          <p className="text-caption text-ink-muted">
            {galleryStats.books} books · {galleryStats.chapters} chapters
          </p>
        </div>
      </footer>
    </div>
  );
}
