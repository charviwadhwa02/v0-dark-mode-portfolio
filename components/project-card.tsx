"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, X } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  slug: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  longDescription?: string
}

export function ProjectCard({
  title,
  description,
  image,
  slug,
  tags,
  githubUrl = `https://github.com/example/${slug}`,
  demoUrl,
  longDescription,
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="group relative h-full">
      <div
        className="h-full cursor-pointer overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 transition-all hover:-translate-y-1 hover:bg-zinc-900/70 hover:shadow-lg backdrop-blur-sm"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=200&width=400"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">{title}</h3>
          </div>
          <p className="mb-3 text-sm text-gray-400 line-clamp-2">{description}</p>
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-blue-400">View Details</span>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowDetails(false)}></div>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute right-4 top-4 rounded-full bg-zinc-800 p-1 text-gray-400 hover:bg-zinc-700 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
              <div className="mb-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-medium text-white">About</h3>
              <p className="text-gray-300">{longDescription || description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              )}
              {demoUrl && (
                <Link
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
