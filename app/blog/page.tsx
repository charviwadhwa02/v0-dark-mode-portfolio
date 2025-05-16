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
            title="Building a Real-time Notification System"
            date="May 10, 2023"
            description="Learn how to build a scalable real-time notification system using WebSockets and Redis."
            image="/placeholder.svg?height=200&width=400"
            tags={["WebSockets", "Redis", "Node.js"]}
            slug="building-a-real-time-notification-system"
          />

          <BlogCard
            title="Introduction to Web3 Development"
            date="April 22, 2023"
            description="A beginner's guide to getting started with Web3 development using Ethereum and Solidity."
            image="/placeholder.svg?height=200&width=400"
            tags={["Web3", "Ethereum", "Solidity"]}
            slug="introduction-to-web3-development"
          />

          <BlogCard
            title="Creating a CLI Tool with Rust"
            date="March 15, 2023"
            description="Step-by-step guide to building your first command-line interface tool using Rust."
            image="/placeholder.svg?height=200&width=400"
            tags={["Rust", "CLI", "Programming"]}
            slug="creating-a-cli-tool-with-rust"
          />

          <BlogCard
            title="Optimizing React Applications"
            date="February 28, 2023"
            description="Learn advanced techniques to optimize your React applications for better performance."
            image="/placeholder.svg?height=200&width=400"
            tags={["React", "Performance", "JavaScript"]}
            slug="optimizing-react-applications"
          />

          <BlogCard
            title="Getting Started with TypeScript"
            date="January 15, 2023"
            description="A comprehensive guide to TypeScript for JavaScript developers."
            image="/placeholder.svg?height=200&width=400"
            tags={["TypeScript", "JavaScript", "Web Development"]}
            slug="getting-started-with-typescript"
          />

          <BlogCard
            title="Building Accessible Web Applications"
            date="December 10, 2022"
            description="Best practices for creating web applications that are accessible to everyone."
            image="/placeholder.svg?height=200&width=400"
            tags={["Accessibility", "HTML", "CSS", "JavaScript"]}
            slug="building-accessible-web-applications"
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
