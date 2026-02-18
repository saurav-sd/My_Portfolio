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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Case Study
          </h2>
          <p className="text-muted-foreground">
            Deep dive into one of my impactful projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            
            <div>
              <h3 className="text-xl font-semibold mb-2">
                🧩 The Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The existing e-commerce admin dashboard suffered from
                slow load times, poor state management, and lack of
                scalability for handling increasing product and order data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                🛠 The Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built a modular dashboard using Next.js with optimized
                code-splitting, memoization, and efficient API handling
                via FastAPI and PostgreSQL.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                🏗 Architecture
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Improved load performance by 40%</li>
                <li>Reduced API response time by 30%</li>
                <li>Enabled scalable role-based access control</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                💡 Key Learnings
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Learned the importance of performance monitoring,
                scalable state architecture, and backend query optimization.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-muted/40">
              <p className="font-medium">
                🚀 Impact: Delivered a production-ready dashboard
                capable of scaling with business growth.
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
