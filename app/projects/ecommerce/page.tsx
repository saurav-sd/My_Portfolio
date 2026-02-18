import Image from "next/image"
import Link from "next/link"

export default function EcommerceCaseStudy() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      
      {/* Back Link */}
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-primary transition"
      >
        ← Back to Projects
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold mt-6 mb-6">
        E-commerce Dashboard Case Study
      </h1>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/projects/ecommerce.jpg"
          alt="E-commerce Dashboard"
          fill
          className="object-cover"
        />
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          A scalable admin dashboard designed to manage products, orders,
          and users efficiently with role-based access control.
        </p>
      </section>

      {/* Problem */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p className="text-muted-foreground leading-relaxed">
          The existing dashboard was slow, unoptimized, and unable to
          handle increasing data loads. Poor state management and
          inefficient queries caused performance issues.
        </p>
      </section>

      {/* Solution */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">The Solution</h2>
        <p className="text-muted-foreground leading-relaxed">
          Built a modular Next.js frontend with optimized rendering,
          memoization, and code-splitting. Backend powered by FastAPI
          with PostgreSQL and indexed queries for faster data retrieval.
        </p>
      </section>

      {/* Results */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Results</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Improved dashboard load speed by 40%</li>
          <li>Reduced API response time by 30%</li>
          <li>Enabled scalable role-based authentication</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["Next.js", "React", "FastAPI", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-muted border text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
