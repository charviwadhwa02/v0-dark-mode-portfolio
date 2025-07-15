import Link from "next/link"
import { ArrowLeft, Github, Twitter, Mail, Linkedin } from "lucide-react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 mt-24">
          <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold">All Projects</h1>

        <div className="mb-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="GitPeek"
            description="Understand any GitHub repo in seconds"
            image="/gitpeek.png?height=200&width=400"
            tags={["Gemini API", "GitHub API","React","Nodejs"]}
            githubUrl="https://github.com/charrviwadhwa/Gitpeek"
            demoUrl="https://gitpeek1.vercel.app/"
          />
          <ProjectCard
            title="SolveStack"
            description="Find your next DSA problem on your terms"
            image="/solvestack.png?height=200&width=400"
            tags={["Gemini API", "Tailwind CSS","React","Nodejs"]}
            githubUrl="https://github.com/charrviwadhwa/SolveStack"
            demoUrl="https://solvestack.vercel.app/"
          />
          <ProjectCard
            title="Inspiro"
            description="A Chrome extension that brings daily boost of motivation right to your browser."
            image="/Screenshot 2025-01-18 035341.png?height=200&width=400"
            tags={["Chrome Extension", "JavaScript"]}
            githubUrl="https://github.com/charrviwadhwa/Inspiro"
          />

          <ProjectCard
            title="HackXplore"
            description="A unified platform to discover and discuss global hackathons and internships."
            image="/Screenshot 2025-06-13 200856.png?height=200&width=400"
            tags={["React", "Node.js", "MongoDB","Express"]}
            githubUrl="https://github.com/charrviwadhwa/HackXplore"
            demoUrl="https://hackxplore.vercel.app/"
          />

          <ProjectCard
            title="YouTube Bookmarker"
            description="A browser extension that lets you bookmark specific timestamps in YouTube videos for quick reference."
            image="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YT_logo.max-500x3000.format-webp.webp?height=200&width=400"
            tags={["JavaScript", "Chrome API", "YouTube"]}
            githubUrl="https://github.com/charrviwadhwa/My-YT-Bookmarks"
          />

          <ProjectCard
            title="Hubble"
            description="Hubble is a centralized web platform designed to manage, organize, and promote college events efficiently for students and administrators."
            image="/Screenshot 2025-06-13 205528.png?height=200&width=400"
            tags={["React", "Firebase", "MongoDB", "Express", "Nodejs"]}
            githubUrl="https://github.com/charrviwadhwa/hubble"
          />

    </div>


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
