import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  impact: string
  link: string
  image: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  impact,
  link,
  image,
}: ProjectCardProps) {
  return (
    <div
      className="group relative p-8 rounded-2xl
      border border-gray-200 dark:border-gray-800
      bg-white/60 dark:bg-white/5
      backdrop-blur-xl
      shadow-sm
      transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]
        bg-gradient-to-r
        from-transparent via-black to-transparent
        dark:via-white
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500"
      />

      {/* Image */}
      <div className="relative h-52 w-full mb-6 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Tech Pills (same style logic as Skills) */}
      <div className="mt-5 flex flex-wrap gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="px-4 py-2 text-sm rounded-full
            border border-gray-300 dark:border-gray-700
            bg-white/50 dark:bg-white/10
            backdrop-blur
            transition-all duration-300
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Impact */}
      <p className="mt-5 text-sm font-medium text-primary">
        {impact}
      </p>

      {/* CTA */}
      <Link
        href={link}
        className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
      >
        View Case Study →
      </Link>
    </div>
  )
}
