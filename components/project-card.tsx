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
    <div className="group h-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="h-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 transition-all hover:-translate-y-1 hover:bg-zinc-900/70 hover:shadow-lg backdrop-blur-sm">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=200&width=400"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />

          {/* Project links overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-4 bg-black/60 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition-transform hover:scale-110 hover:bg-zinc-700"
                aria-label="View source code on GitHub"
              >
                <Github size={20} />
              </Link>
            )}
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition-transform hover:scale-110 hover:bg-zinc-700"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">{title}</h3>
          </div>
          <p className="mb-3 text-sm text-gray-400 line-clamp-2">{description}</p>
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
