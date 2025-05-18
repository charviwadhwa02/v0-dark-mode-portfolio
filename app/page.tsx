import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Mail, ArrowRight, Linkedin } from "lucide-react"
import { BlogCard } from "@/components/blog-card"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        {/* Main Content */}
        <div className="mb-20 mt-24 flex flex-col items-center justify-between md:flex-row md:items-start">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-center text-4xl font-bold md:text-left md:text-5xl">Charvi Wadhwa</h1>
            <p className="mb-4 text-center text-gray-400 md:text-left">
              <span className="inline-flex items-center">
                Open Source Contributor <span className="mx-2 text-gray-600">•</span>
              </span>
              <span className="inline-flex items-center">
                Web Developer <span className="mx-2 text-gray-600">•</span>
              </span>
              <span className="inline-flex items-center">
                DSA Enthusiast <span className="mx-2 text-gray-600">•</span>
              </span>
              <span className="inline-flex items-center">Passionate about Tech</span>
            </p>
            <p className="mb-8 text-center text-gray-300 md:text-left">
              I'm a web developer working with the MERN stack. I'm passionate about building scalable web applications
              and solving problems through algorithms. Currently, I'm exploring AI and machine learning. I also enjoy
              contributing to open source projects and sharing knowledge with the developer community.
            </p>

            <div className="mb-12 flex justify-center space-x-6 md:justify-start">
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
          </div>

          <div className="mb-12 md:mb-0">
            <div className="overflow-hidden rounded-full border-2 border-gray-800">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Projects</h2>

          <div className="mb-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              View All Projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Blog Posts</h2>
          </div>

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
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              View All Blog Posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Contact</h2>
          <p className="mb-6 text-lg text-gray-300">
            You can send me over an e-mail on{" "}
            <Link href="mailto:contact@example.com" className="text-blue-400 hover:underline">
              contact@example.com
            </Link>
          </p>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-xl font-medium">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-zinc-700 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-zinc-700 focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-zinc-700 focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-zinc-700 focus:outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

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
          <p>Made by Charvi Wadhwa</p>
        </footer>
      </div>
    </div>
  )
}
