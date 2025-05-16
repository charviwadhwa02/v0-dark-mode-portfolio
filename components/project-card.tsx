import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  slug: string
  tags: string[]
}

export function ProjectCard({ title, description, image, slug, tags }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      <div className="group h-full cursor-pointer overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 transition-all hover:-translate-y-1 hover:bg-zinc-900/70 hover:shadow-lg backdrop-blur-sm">
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
            <span className="text-xs text-blue-400">View Project</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
