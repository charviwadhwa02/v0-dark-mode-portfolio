import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface BlogCardProps {
  title: string
  date: string
  description: string
  image: string
  tags: string[]
  slug?: string
  githubUrl?: string
  liveUrl?: string
}

export function BlogCard({
  title,
  date,
  description,
  image,
  tags,
  slug,
  githubUrl,
  liveUrl,
}: BlogCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=200&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover links */}
        {(githubUrl || liveUrl) && (
          <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 bg-black/70 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:scale-110 hover:bg-zinc-700"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:scale-110 hover:bg-zinc-700"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-between p-5">
        <div>
          <h3 className="mb-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-blue-400">
            {title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-3">{description}</p>
        </div>

        {/* Tags */}
        <div className="my-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-gray-300 transition-all hover:bg-blue-500/60 hover:text-white"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
          <span>{date}</span>
          {slug && (
            <Link
              href={`/blog/${slug}`}
              className="flex items-center gap-1 text-blue-400 transition hover:underline hover:text-blue-500"
            >
              Read more →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
