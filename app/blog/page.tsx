import Link from "next/link"
import { ArrowLeft, Github, Twitter, Mail, Linkedin } from "lucide-react"
import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 mt-24">
          <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            title="My First Open Source Journey"
            date="May 18, 2025"
            description=" Diving into GSSoC Extended and Hacktoberfest 2024"
            image="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*w9OGCqQLPC99X-W3.png?height=200&width=400"
            tags={["OpenSource", "Hackoctoberfest", "GSSOC"]}
            githubUrl="https://github.com/charrviwadhwa/Inspiro"
          />

          
        </div>

        <section className="mb-20"></section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-400">
          <div className="mb-4 flex justify-center space-x-6">
            <Link href="https://x.com/charvi_wadhwa" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-400 transition-colors hover:text-white" />
            </Link>
            <Link href="https://github.com/charrviwadhwa" aria-label="GitHub">
              <Github className="h-5 w-5 text-gray-400 transition-colors hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/charvi-wadhwa-23b565291/" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-400 transition-colors hover:text-white" />
            </Link>
            <Link href="mailto:charviwadhwa06@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-gray-400 transition-colors hover:text-white" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
