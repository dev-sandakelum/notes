import { Clock, FileQuestion, Layers, Library } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { books, galleryStats } from "@/content";
import { GalleryExplorer } from "@/components/gallery/gallery-explorer";

function StatItem({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <li className="flex items-center gap-1.5 text-caption font-medium text-white/85">
      <Icon className="h-3.5 w-3.5 text-white/70" aria-hidden="true" />
      {label}
    </li>
  );
}

/** Hairline separator between hero stats (hidden when the row wraps on mobile). */
function StatDivider() {
  return <li aria-hidden="true" className="hidden h-3.5 w-px bg-white/25 sm:block" />;
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

      {/* Reference-style gradient hero band */}
      <header className="hero-gradient no-print rounded-b-[26px] px-5 pb-9 pt-12 text-center sm:pb-11 sm:pt-16">
        <p className="text-caption font-semibold uppercase tracking-[0.2em] text-white/80">
          Faculty of Technology · Lecture Notes
        </p>
        <h1 className="mt-3 font-display text-book-title font-extrabold tracking-tight text-white">
          The Note Gallery
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-white/90">
          Six interactive course books, rebuilt from the original lecture
          notes: cross-linked, visual and exam-ready.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <StatItem icon={Library} label={`${galleryStats.books} books`} />
          <StatDivider />
          <StatItem icon={Layers} label={`${galleryStats.chapters} chapters`} />
          <StatDivider />
          <StatItem icon={FileQuestion} label={`${galleryStats.questions} questions`} />
          <StatDivider />
          <StatItem icon={Clock} label={`~${galleryStats.minutes.toLocaleString("en-US")} min reading`} />
        </ul>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-10 sm:px-6">
        <GalleryExplorer books={books} />
      </main>

      <footer className="mt-auto border-t border-hairline bg-paper-raised">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-caption text-ink-muted">
            Note Gallery: digital lecture notes, built from the original
            interactive notes.
          </p>
          <p className="text-caption text-ink-muted">
            {galleryStats.books} books · {galleryStats.chapters} chapters
          </p>
        </div>
      </footer>
    </div>
  );
}
