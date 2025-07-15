"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
}

export function ProjectCard({ title, description, image, tags, githubUrl, demoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative h-full cursor-pointer transform rounded-2xl border border-white/10 bg-zinc-900/50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image section */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={image || "/placeholder.svg?height=200&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay icons */}
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:scale-110 hover:bg-zinc-700"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:scale-110 hover:bg-zinc-700"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5">
        <div>
          <h3 className="mb-1 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-3">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-gray-300 transition-all hover:bg-blue-500/60 hover:text-white"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
