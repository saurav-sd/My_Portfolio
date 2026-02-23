"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function EcommerceDocumentation() {
  return (
    <div className="relative max-w-5xl mx-auto px-6 py-24 space-y-28">

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.08),transparent_60%)]" />

      {/* Back Link */}
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-primary transition"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Full Stack E-Commerce Dashboard
        </h1>

        <p className="text-muted-foreground mt-6 max-w-3xl leading-relaxed">
          A production-grade full stack e-commerce management system built using 
          React.js, FastAPI, and PostgreSQL. Designed with secure authentication,
          layered backend architecture, and scalable database modeling.
        </p>

        {/* Links */}
        {/* <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://your-live-link.com"
            target="_blank"
            className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow hover:shadow-lg transition"
          >
            🌍 Live Project
          </a>

          <a
            href="https://github.com/your-repo"
            target="_blank"
            className="px-6 py-2.5 rounded-xl border bg-background/60 backdrop-blur text-sm font-medium hover:bg-muted transition"
          >
            💻 GitHub Repository
          </a>
        </div> */}
      </section>

      {/* Hero Preview */}
      <div className="relative w-full aspect-[26.5/9] rounded-2xl overflow-hidden border bg-background/60 backdrop-blur shadow-lg">
        <Image
          src="/projects/ecommerce.png"
          alt="E-commerce Dashboard"
          fill
          className="object-contain"
        />
      </div>

      {/* Architecture Section */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          System Architecture
        </h2>

        <div className="rounded-2xl border bg-background/60 backdrop-blur p-10 shadow-sm">
          <svg
            viewBox="0 0 800 400"
            className="w-full h-auto"
            fill="none"
          >
            {/* Boxes */}
            <rect x="300" y="20" width="200" height="60" rx="16" className="stroke-current text-muted-foreground" />
            <text x="400" y="55" textAnchor="middle" className="fill-current text-sm">
              React.js Client
            </text>

            <rect x="300" y="120" width="200" height="60" rx="16" className="stroke-current text-muted-foreground" />
            <text x="400" y="155" textAnchor="middle" className="fill-current text-sm">
              FastAPI REST API
            </text>

            <rect x="300" y="220" width="200" height="60" rx="16" className="stroke-current text-muted-foreground" />
            <text x="400" y="255" textAnchor="middle" className="fill-current text-sm">
              Service Layer
            </text>

            <rect x="300" y="320" width="200" height="60" rx="16" className="stroke-current text-muted-foreground" />
            <text x="400" y="355" textAnchor="middle" className="fill-current text-sm">
              PostgreSQL Database
            </text>

            {/* Arrows */}
            <line x1="400" y1="80" x2="400" y2="120" stroke="currentColor" />
            <line x1="400" y1="180" x2="400" y2="220" stroke="currentColor" />
            <line x1="400" y1="280" x2="400" y2="320" stroke="currentColor" />
          </svg>
        </div>

        <p className="text-muted-foreground max-w-3xl">
          The system follows a layered architecture separating API routing,
          business logic, and database operations to ensure scalability,
          maintainability, and clean separation of concerns.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Core Engineering Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "JWT Authentication with Refresh Token Rotation",
            "Secure Logout & Token Revocation",
            "Product & Category CRUD Modules",
            "Persistent Database Cart System",
            "Order Processing Pipeline",
            "Checkout-Ready Architecture",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border bg-background/60 backdrop-blur p-6 shadow-sm hover:shadow-lg transition"
            >
              <p className="text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Database Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Database Design
        </h2>

        <div className="rounded-2xl border bg-background/60 backdrop-blur p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <ul className="space-y-2">
              <li>• Users</li>
              <li>• Products</li>
              <li>• Categories</li>
              <li>• Cart</li>
              <li>• CartItems</li>
            </ul>
            <ul className="space-y-2">
              <li>• Orders</li>
              <li>• OrderItems</li>
              <li>• RefreshTokens</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React.js",
            "FastAPI",
            "PostgreSQL",
            "SQLAlchemy",
            "JWT",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border bg-background/60 backdrop-blur text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

    </div>
  )
}