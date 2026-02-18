"use client";

import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "../theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b bg-background/80">
  <Container>
    <div className="flex h-16 items-center justify-between">
      
      {/* Logo */}
      <Link href="/" className="text-lg font-semibold tracking-tight bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
        Saurav
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="#about" className="relative px-1 py-1 text-muted-foreground transition-colors duration-300 hover:text-foreground">
          About
        </Link>
        <Link href="#projects" className="relative px-1 py-1 text-muted-foreground transition-colors duration-300 hover:text-foreground">
          Projects
        </Link>
        <Link href="#skills" className="relative px-1 py-1 text-muted-foreground transition-colors duration-300 hover:text-foreground">
          Skills
            </Link>
           <Link href="#experience" className="relative px-1 py-1 text-muted-foreground transition-colors duration-300 hover:text-foreground">
          Experience
            </Link> 
        <Link href="#contact" className="relative px-1 py-1 text-muted-foreground transition-colors duration-300 hover:text-foreground">
          Contact
        </Link>
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Link
          href="/Saurav_Daware_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-sm font-medium border px-4 py-2 rounded-lg hover:bg-muted transition-colors"
        >
          Resume
        </Link>

        <ThemeToggle />
      </div>

    </div>
  </Container>
</header>
  );
}
