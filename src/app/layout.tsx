import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
