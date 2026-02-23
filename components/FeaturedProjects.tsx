"use client";

import Container from "@/components/layout/Container";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 scroll-mt-32 py-32">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selected work showcasing scalable architecture, performance
            optimization, and production-ready frontend systems.
          </p>
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <ProjectCard
              title="E-commerce Dashboard"
              description="A scalable admin dashboard supporting product, order, and cart management with role-based access control."
              tech={["Next.js", "React", "FastAPI", "PostgreSQL"]}
              impact="Improved dashboard load performance by 40% with code-splitting and memoization."
              link="/projects/ecommerce"
              image="/projects/ecommerce.png"
            />
          </motion.div>

          {/* <motion.div variants={itemVariants}>
            <ProjectCard
              title="AI-Powered Authentication System"
              description="Secure authentication flow with JWT rotation, biometric login, and real-time session management."
              tech={["React", "FastAPI", "JWT", "WebSockets"]}
              impact="Implemented secure refresh token rotation and database-backed session control."
              link="/projects/ai-auth"
              image="/projects/ai-auth.png"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              title="High-Performance Portfolio Platform"
              description="Modern, SEO-optimized portfolio platform built with Next.js App Router and dynamic routing."
              tech={["Next.js", "TypeScript", "Tailwind"]}
              impact="Achieved Lighthouse score of 95+ with optimized image loading and metadata strategy."
              link="/projects/portfolio"
              image="/projects/portfolio.png"
            />
          </motion.div> */}
        </motion.div>
      </Container>
    </section>
  );
}
