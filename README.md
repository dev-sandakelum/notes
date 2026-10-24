# Note Gallery — Digital Book

An "Ultra-Stable Digital Book" web app built from the interactive HTML lecture
notes in [dev-sandakelum/trash](https://github.com/dev-sandakelum/trash).
Six complete course books — 75 chapters, 594 quiz questions, 169 flashcards,
8 interactive visualizations — statically generated and rendered in a flat,
hairline, editorial paper aesthetic.

| Course | Book | Dept |
|---|---|---|
| ICT2113 | Data Structures & Algorithms | DICT |
| ICT2122 | Object Oriented Programming | DICT |
| ICT2152 | Object Oriented Analysis & Design | DICT |
| ICT2162 | Management Information Systems | DICT |
| TCS2112 | Business Economics | DMS |
| TMS1113 | Foundation of Mathematics | — |

## Setup

```bash
bun install        # install dependencies
bun run dev        # dev server on http://localhost:3000
bun run lint       # eslint (clean)
bunx tsc --noEmit  # typecheck (clean)
```

No database required — reading content is typed data files; reading progress
is stored per browser in `localStorage`.

## Routes

| Route | Description |
|---|---|
| `/` | Gallery: book cards, search (`/` focuses), subject + tag filters |
| `/notes/[book]` | Book landing: description, stats, chapter index |
| `/notes/[book]/[chapter]` | Reading page (75 pages, `generateStaticParams`, `force-static`) |

## Architecture

```
src/
├── app/
│   ├── page.tsx                     # gallery (server component)
│   └── notes/[book]/
│       ├── layout.tsx               # book shell: sidebar, sticky header, progress bar
│       ├── page.tsx                 # book landing
│       └── [chapter]/page.tsx       # reading page (SSG)
├── content/
│   ├── types.ts                     # the content model (Block union, BookMeta, QuizData)
│   ├── index.ts                     # registry: books, getBook/getChapter/getQuiz
│   └── books/<slug>/
│       ├── book.ts                  # BookMeta + chapter index
│       ├── chapters/<nn-slug>.ts    # ChapterData = { meta, blocks: Block[] }
│       └── quizzes/<nn-slug>.ts     # QuizData (kept separate from chapters)
├── components/
│   ├── gallery/                     # search/filter explorer, book cards
│   ├── book/
│   │   ├── block-renderer.tsx       # server component: Block[] → semantic HTML
│   │   ├── chapter-nav.tsx          # sidebar (desktop) + Sheet drawer (mobile)
│   │   ├── table-of-contents.tsx    # sticky TOC with scroll-spy
│   │   ├── reading-progress.tsx     # rAF scroll bar (transform-only)
│   │   ├── mark-complete.tsx        # localStorage progress
│   │   ├── quiz.tsx / flashcards.tsx / reveal.tsx   # client islands
│   │   └── theme-toggle.tsx
│   └── viz/                         # 8 pure-SVG visualizations + lazy.tsx loader
├── scripts/
│   ├── migrate-html.ts              # HTML books → typed data (see below)
│   └── merge-trees.ts               # folds the tree/* HTML files into DSA chapters
└── app/globals.css                  # design tokens (the one place to change)
```

### The content model

Chapters are arrays of typed blocks — one variant per pattern found in the
original notes:

`heading · paragraph · list · callout(info/tip/warn/exam) · code · table ·
example (worked, with hidden solution) · accordion · figure (SVG) ·
htmlFigure (migrated HTML diagrams, re-skinned) · viz · flashcards · quizRef`

Quizzes live in **separate files** (`quizzes/`), referenced by chapter slug.
Interactive state (quiz answers, card flips, visualizations) is local to
small `"use client"` components; everything else renders in React Server
Components. Visualizations are code-split (`next/dynamic`) and mount via
IntersectionObserver when scrolled near — below-the-fold charts cost nothing.

### Design tokens

All colors, fonts and the type scale are defined once in
`src/app/globals.css` (`@theme` block): `paper / paper-raised / paper-sunken`,
`ink / ink-muted / ink-faint`, `hairline`, `ok / warn / danger`,
`font-display` (Newsreader) / `font-sans` (Inter) / `font-code` (JetBrains
Mono), and `text-book-title / text-section / text-caption` sizes. Dark mode
inverts the same tokens — the flat hairline style is preserved.

## Adding a new note / chapter

1. Create `src/content/books/<book>/chapters/<NN-slug>.ts`:

   ```ts
   import type { ChapterData } from "@/content/types";

   const chapter: ChapterData = {
     meta: {
       slug: "NN-my-chapter", number: 7, title: "My chapter",
       subtitle: "optional", kind: "topic", words: 800, minutes: 4,
     },
     blocks: [
       { type: "heading", depth: 3, id: "intro", text: "Introduction" },
       { type: "paragraph", html: "Trusted inline HTML with <b>bold</b>…" },
       { type: "callout", variant: "tip", title: "Tip", html: "…" },
       { type: "code", language: "c", html: "…token spans…" },
       { type: "viz", kind: "stack", caption: "…" },
     ],
   };
   export default chapter;
   ```

   Block HTML is **trusted, build-time-authored** content (rendered via
   `dangerouslySetInnerHTML`) — never pass user input through it.

2. Optional quiz: `quizzes/<NN-slug>.ts` exporting `QuizData`, then add a
   `{ type: "quiz", title, count, quizSlug: "NN-my-chapter" }` block.
3. Register the chapter in `books/<book>/book.ts` → `chapters[]`, and the
   file pair in `src/content/index.ts` (one import + one registry entry).
4. For a whole new book: add the folder + `book.ts`, register in `index.ts`,
   and add `{ book: slug }` to `generateStaticParams` in
   `app/notes/[book]/page.tsx`.

The page, sidebar, TOC, prev/next and progress stats all derive from the
data — no JSX to touch.

## Migrating the original HTML notes

```bash
bun run scripts/migrate-html.ts   # 6 books → typed data + coverage report
bun run scripts/merge-trees.ts    # fold dsa/tree*.html into DSA chapters
```

`migrate-html.ts` walks each book's DOM with cheerio and maps every pattern
to a block (`.callout.co-*` → callout, `.quiz .q[data-a]` → quiz questions,
`.example`+`.solution` → worked example, `.fc-grid` → flashcards, viz
containers → `viz` blocks…). It prints a coverage report; the migration is
complete when the report shows **zero unmatched elements** (current state).
`merge-trees.ts` appends the standalone tree study pages to the matching DSA
chapters (terminology → ch. 7, traversals → ch. 8, BST + deletion → ch. 9,
AVL + red-black → ch. 10) and appends their quiz questions.

## Performance & accessibility notes

- No gradients, backdrop-blur, WebGL or spring physics; animations are
  opacity/transform only, ≤ 200 ms, with a global `prefers-reduced-motion`
  reset.
- `next/font` (self-hosted), `next/dynamic` route-level chunk splitting,
  IntersectionObserver-lazy visualizations with stable placeholder heights
  (CLS-safe), passive scroll listeners via `requestAnimationFrame`.
- Semantic HTML (`nav`, `article`, `aside`), skip link, visible focus rings,
  WCAG-AA token palette, full keyboard navigation (native radios/buttons/
  details), `aria-live` status lines double as text alternatives for every
  visualization.
- Print stylesheet: chrome hidden, chapters break cleanly.
