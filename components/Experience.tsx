"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Tech Solutions Pvt Ltd",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Developed scalable dashboard features using Next.js and FastAPI.",
      "Optimized database queries, improving API response time by 30%.",
      "Implemented role-based authentication and secure REST APIs.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 – Present",
    points: [
      "Built responsive web applications using React and Tailwind CSS.",
      "Improved UI performance using memoization and lazy loading.",
      "Delivered 10+ production-ready projects for clients.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Professional Experience
        </h2>
        <p className="text-muted-foreground">
          My journey building scalable and high-performance applications.
        </p>
      </div>

      <div className="relative pl-10 space-y-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            <div
              className="absolute top-0 left-0 w-full h-[2px] 
                bg-gradient-to-r 
                from-transparent via-black to-transparent
                dark:via-white
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500"
            />
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 flex items-center justify-center">
              <div
                className="w-4 h-4 rounded-full 
                  bg-gradient-to-r from-indigo-500 to-purple-500 
                  shadow-lg"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">
              {exp.role}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {exp.company} • {exp.period}
            </p>

            <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full 
                   bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
