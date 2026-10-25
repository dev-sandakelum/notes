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
          Pre-paint splash gate: ALWAYS show the first-load splash on every
          full page load (not gated by sessionStorage). Runs synchronously
          at the top of <body>, so the [data-splash] attribute exists
          before any content renders — no flash, no hydration mismatch
          (the React tree renders the overlay unconditionally; CSS keys
          off the attribute). The overlay then holds for a fixed 3s.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.splash="on"`,
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
