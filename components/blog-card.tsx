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

export function BlogCard({ title, date, description, image, tags, slug, githubUrl, liveUrl }: BlogCardProps) {
  return (
    <div className="group h-full cursor-pointer overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 transition-all hover:-translate-y-1 hover:bg-zinc-900/70 hover:shadow-lg backdrop-blur-sm">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=200&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />

        {/* Hover links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition-transform hover:scale-110 hover:bg-zinc-700"
              aria-label="View GitHub repository"
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition-transform hover:scale-110 hover:bg-zinc-700"
              aria-label="View live demo"
            >
              <ExternalLink className="h-5 w-5" />
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
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{date}</span>
          {slug && (
            <Link href={`/blog/${slug}`} className="text-xs text-blue-400 hover:underline">
              Read more
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
