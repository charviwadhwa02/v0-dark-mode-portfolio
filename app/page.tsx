import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Mail, ArrowRight, Linkedin } from "lucide-react"
import { BlogCard } from "@/components/blog-card"
import { ProjectCard } from "@/components/project-card"
import { SkillCard } from "@/components/skill-card"

export default function Home() {
  // Featured skills for home page
  const featuredSkills = [
    { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
    { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
    { name: "React", icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
    { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
    { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000" },
    { name: "Express", icon: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=00000042" },
    { name: "Java", icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" },
    { name: "Git", icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
    { name: "GitHub", icon: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" },
  ]
  

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        {/* Main Content */}
        <div className="mb-20 mt-24 flex flex-col items-center justify-between md:flex-row md:items-start">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-center text-4xl font-bold md:text-left md:text-5xl font-newsreader">Charvi Wadhwa</h1>
            <p className="mb-4 text-center text-gray-400 md:text-left font-newsreader">
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
            <p className="mb-8 text-center text-gray-300 md:text-left font-newsreader text-lg">
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
                src="/WhatsApp Image 2025-03-31 at 19.07.31_db7e897b.jpg?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>


         {/* Skills Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Skills & Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {featuredSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>

{/*           <div className="mt-8 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              View All Skills <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div> */}
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Projects</h2>

          <div className="mb-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            tags={["React", "Node.js", "MongoDB", "Express"]}
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
            title="My First Open Source Journey"
            date="May 18, 2025"
            description=" Diving into GSSoC Extended and Hacktoberfest 2024"
            image="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*w9OGCqQLPC99X-W3.png?height=200&width=400"
            tags={["OpenSource", "Hackoctoberfest", "GSSOC"]}
            liveUrl="https://medium.com/@charviwadhwa06/my-first-open-source-journey-diving-into-gssoc-extended-and-hacktoberfest-2024-7c854b87283c"
          />
          </div>

{/*           <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              View All Blog Posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div> */}
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Contact</h2>
          <p className="mb-6 text-lg text-gray-300">
            You can send me over an e-mail on{" "}
            <Link href="mailto:charviwadhwa06@gmail.com" className="text-blue-400 hover:underline">
              charviwadhwa06@gmail.com
            </Link>
          </p>
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
