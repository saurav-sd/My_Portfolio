"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-32 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            I’m a Full-Stack Developer focused on building scalable,
            high-performance web applications with clean architecture
            and optimized user experience.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            I specialize in React, Next.js, and backend systems using
            FastAPI and PostgreSQL. I enjoy turning complex problems
            into simple, elegant solutions.
          </p>

          <p className="text-primary font-medium">
            🚀 Passionate about performance, scalability, and clean code.
          </p>
        </div>

        {/* Right Side – Glass Highlights */}
        <div className="grid grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl
              border border-gray-200 dark:border-gray-800
              bg-white/60 dark:bg-white/5
              backdrop-blur-xl
              shadow-sm
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top gradient line (same as Skills/Projects) */}
              <div
                className="absolute top-0 left-0 w-full h-[2px]
                bg-gradient-to-r
                from-transparent via-black to-transparent
                dark:via-white
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500"
              />

              <h3 className="text-3xl font-semibold tracking-tight">
                {item.value}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const highlights = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "40%", label: "Performance Boost" },
  { value: "Full-Stack", label: "Frontend + Backend" },
]