"use client"

import { motion } from "framer-motion"

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Case Study
          </h2>
          <p className="text-muted-foreground">
            Deep dive into one of my impactful projects.
          </p>
        </div>

        {/* Main Card Container — SAME UI SYSTEM AS PROJECT CARD */}
        <div
          className="
            group relative p-8 rounded-2xl
            border border-gray-200 dark:border-gray-800
            bg-white/60 dark:bg-white/5
            backdrop-blur-xl
            shadow-sm
            transition-all duration-500
          "
        >
          {/* Top gradient line — SAME AS CARD */}
          <div
            className="
              absolute top-0 left-0 w-full h-[2px]
              bg-gradient-to-r
              from-transparent via-black to-transparent
              dark:via-white
            "
          />

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🧩 The Problem
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The existing e-commerce admin dashboard suffered from
                  slow load times, poor state management, and lack of
                  scalability for handling increasing product and order data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🛠 The Solution
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built a modular dashboard using Next.js with optimized
                  code-splitting, memoization, and efficient API handling
                  via FastAPI and PostgreSQL.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🏗 Architecture
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Implemented a clean frontend-backend separation with REST APIs,
                  role-based authentication, and scalable database indexing.
                </p>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  📈 Results
                </h3>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
                  <li>Improved load performance by 40%</li>
                  <li>Reduced API response time by 30%</li>
                  <li>Enabled scalable role-based access control</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  💡 Key Learnings
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Learned the importance of performance monitoring,
                  scalable state architecture, and backend query optimization.
                </p>
              </div>

              {/* Impact — Styled Like Tech Pills Logic */}
              <div
                className="
                  mt-2 p-6 rounded-xl
                  border border-gray-300 dark:border-gray-700
                  bg-white/50 dark:bg-white/10
                  backdrop-blur
                "
              >
                <p className="text-sm font-medium text-primary">
                  🚀 Impact: Delivered a production-ready dashboard
                  capable of scaling with business growth.
                </p>
              </div>

            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}