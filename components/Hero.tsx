"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Senior Frontend Engineer
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Building{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                scalable, high-performance
              </span>{" "}
              web applications with React & Next.js.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              I specialize in production-grade dashboards, secure authentication
              systems, and performance-optimized frontend architectures. Focused
              on clean code, scalability, and exceptional UX.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a
                  href="/Saurav_Daware_Resume.pdf"
                  download
                  className="hidden md:inline-block text-sm font-medium border px-4 py-2 rounded-lg 
                            bg-gradient-to-r from-indigo-500 to-purple-500 text-white
                            hover:opacity-90 transition-all duration-300"
                >
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Availability Badge */}
            <div className="mt-6 flex items-center gap-2 text-sm text-green-600">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Open to opportunities
            </div>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div
              className="group relative rounded-2xl 
                border border-gray-200 dark:border-gray-800
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                shadow-sm
                transition-all duration-500
                hover:-translate-y-1 hover:shadow-2xl
                p-8"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] 
                bg-gradient-to-r 
                from-transparent via-black to-transparent
                dark:via-white
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500" />
              <p className="text-xs font-semibold tracking-wider uppercase 
              text-gray-500 dark:text-gray-400 
              mb-6">
                Core Expertise
              </p>

              <ul className="space-y-4 text-sm">
                {[
                  "React & Next.js Architecture",
                  "Scalable Dashboard Systems",
                  "JWT & Secure Auth Flows",
                  "Performance Optimization",
                  "FastAPI Integration",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="group flex items-center gap-3 
                              text-gray-700 dark:text-gray-300
                              transition-all duration-300
                              hover:translate-x-1"
                  >
                    <CheckCircle2
                      className="w-4 h-4 
                         text-black dark:text-white
                         transition-transform duration-300
                         group-hover:scale-110"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
