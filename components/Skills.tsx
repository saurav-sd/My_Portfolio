"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Vercel", "CI/CD"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical Skills
        </h2>
        <p className="text-muted-foreground">
          Technologies I use to build scalable and high-performance applications.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border shadow-sm hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-muted border hover:bg-primary hover:text-white transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
