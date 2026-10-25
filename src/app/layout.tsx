import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SplashGate } from "@/components/loading/splash";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Note Gallery · Digital Book",
    template: "%s · Note Gallery",
  },
  description:
    "A digital bookshelf of interactive lecture notes: Data Structures, OOP, OOAD, MIS, Business Economics and Foundation Mathematics.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${jetbrains.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-paper text-ink antialiased"
      >
        {/*
          Pre-paint splash gate: decide BEFORE the first paint whether this
          session still needs the first-load splash (once per session,
          sessionStorage). Runs synchronously at the top of <body>, so the
          [data-splash] attribute exists before any content renders — no
          flash, no hydration mismatch (the React tree renders the overlay
          unconditionally; CSS keys off the attribute).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.splash=sessionStorage.getItem("notes-splash-shown")?"off":"on"}catch(e){document.documentElement.dataset.splash="off"}`,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SplashGate />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
