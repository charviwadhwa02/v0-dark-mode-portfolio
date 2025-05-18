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
            title="Inspiro"
            description="A Chrome extension that brings a daily boost of motivation right to your browser every time you open a new tab."
            image="/placeholder.svg?height=200&width=400"
            slug="inspiro"
            tags={["Chrome Extension", "JavaScript", "Motivation"]}
            longDescription="Inspiro is a Chrome extension that brings a daily boost of motivation right to your browser every time you open a new tab. With Inspiro, your new tab page will no longer be boring or empty—it'll be filled with inspiring quotes and beautiful images to keep you focused and motivated."
            githubUrl="https://github.com/example/inspiro"
            demoUrl="https://chrome.google.com/webstore/detail/inspiro"
          />

          <ProjectCard
            title="HackXplore"
            description="A unified platform to discover and discuss global hackathons and internships, helping students find opportunities."
            image="/placeholder.svg?height=200&width=400"
            slug="hackxplore"
            tags={["React", "Node.js", "MongoDB"]}
            longDescription="HackXplore is a comprehensive platform designed to help students discover hackathons, internships, and find teammates for their projects. It aggregates opportunities from various sources and provides a community space for discussion and collaboration."
            githubUrl="https://github.com/example/hackxplore"
            demoUrl="https://hackxplore.example.com"
          />

          <ProjectCard
            title="YouTube Bookmarker"
            description="A browser extension that lets you bookmark specific timestamps in YouTube videos for quick reference."
            image="/placeholder.svg?height=200&width=400"
            slug="youtube-bookmarker"
            tags={["JavaScript", "Chrome API", "YouTube"]}
            longDescription="YouTube Bookmarker is a browser extension that enhances your YouTube viewing experience by allowing you to bookmark specific timestamps in videos. This makes it easy to return to important parts of tutorials, lectures, or any long-form content without having to search through the entire video."
            githubUrl="https://github.com/example/youtube-bookmarker"
          />

          <ProjectCard
            title="DevTracker"
            description="Track your development progress and set coding goals with this productivity tool for developers."
            image="/placeholder.svg?height=200&width=400"
            slug="devtracker"
            tags={["React", "Firebase", "Charts"]}
            longDescription="DevTracker is a productivity tool designed specifically for developers to track their coding habits, set goals, and visualize their progress over time. It integrates with popular coding platforms and IDEs to provide comprehensive insights into your development activities."
            githubUrl="https://github.com/example/devtracker"
            demoUrl="https://devtracker.example.com"
          />

          <ProjectCard
            title="CodeSnap"
            description="Beautiful code snippet generator with syntax highlighting for sharing on social media."
            image="/placeholder.svg?height=200&width=400"
            slug="codesnap"
            tags={["TypeScript", "Canvas API", "Syntax Highlighting"]}
            longDescription="CodeSnap is a tool that allows developers to create beautiful, customizable images of their code snippets for sharing on social media, in presentations, or in documentation. It supports a wide range of programming languages with accurate syntax highlighting and various visual themes."
            githubUrl="https://github.com/example/codesnap"
            demoUrl="https://codesnap.example.com"
          />

          <ProjectCard
            title="WebPerf"
            description="Website performance monitoring and optimization tool to help improve your site's speed."
            image="/placeholder.svg?height=200&width=400"
            slug="webperf"
            tags={["Performance", "Lighthouse", "Analytics"]}
            longDescription="WebPerf is a comprehensive tool for monitoring and optimizing website performance. It provides detailed insights into loading times, resource usage, and potential bottlenecks, along with actionable recommendations to improve your site's speed and user experience."
            githubUrl="https://github.com/example/webperf"
            demoUrl="https://webperf.example.com"
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
