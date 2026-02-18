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
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-32 py-32">
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
            className="group relative p-8 rounded-2xl
           border border-gray-200 dark:border-gray-800
           bg-white/60 dark:bg-white/5
           backdrop-blur-xl
           shadow-sm
           transition-all duration-500
           hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] 
                bg-gradient-to-r 
                from-transparent via-black to-transparent
                dark:via-white
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500" />
            <h3 className="text-xl font-semibold mb-6">
              <div className="h-1 w-10 rounded-full 
                bg-gradient-to-r from-indigo-500 to-purple-500 
                mb-6" />
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full
           border border-gray-300 dark:border-gray-700
           bg-white/50 dark:bg-white/10
           backdrop-blur
           transition-all duration-300
           hover:bg-black hover:text-white
           dark:hover:bg-white dark:hover:text-black"
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
