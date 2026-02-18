import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "Saurav | Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and scalable web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

  <div className="absolute left-1/2 top-[-200px] -translate-x-1/2">
    <div
      className="w-[1200px] h-[800px]
                 bg-gradient-to-r
                 from-indigo-300 via-purple-300 to-pink-300
                 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900
                 opacity-40 blur-3xl rounded-full
                 animate-blob"
    />
  </div>

  <div className="absolute right-[-200px] bottom-[-200px]">
    <div
      className="w-[800px] h-[600px]
                 bg-gradient-to-r
                 from-blue-300 via-cyan-300 to-teal-300
                 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900
                 opacity-30 blur-3xl rounded-full
                 animate-blob-reverse"
    />
  </div>

</div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
