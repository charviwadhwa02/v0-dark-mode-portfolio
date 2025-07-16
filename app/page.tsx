"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Mail, ArrowRight, Linkedin } from "lucide-react"
import { BlogCard } from "@/components/blog-card"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"
import { SkillCard } from "@/components/skill-card"

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

const experiences = [
  {
    title: "Intern",
    company: "Shiv Nadar Foundation",
    duration: "Jun 2025 - Present",
    description:
      "Built a budget management system frontend using React and Tailwind CSS for tracking financial provisioning and consumption across 4 quarters and 3+ departments.",
    
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white">
     
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">

        {/* Hero Section */}
        <div className="mb-20 mt-24 flex flex-col items-center justify-between md:flex-row md:items-start">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-center text-4xl font-bold md:text-left md:text-5xl">Charvi Wadhwa</h1>
            <p className="mb-4 text-center text-gray-400 md:text-left">
              <span className="inline-flex items-center">Open Source Contributor <span className="mx-2 text-gray-600">•</span></span>
              <span className="inline-flex items-center">Web Developer <span className="mx-2 text-gray-600">•</span></span>
              <span className="inline-flex items-center">DSA Enthusiast <span className="mx-2 text-gray-600">•</span></span>
              <span className="inline-flex items-center">Passionate about Tech</span>
            </p>
            <p className="mb-8 text-center text-gray-300 md:text-left text-lg">
              I'm a web developer working with the MERN stack. I'm passionate about building scalable web applications
              and solving problems through algorithms. Currently, I'm exploring AI and machine learning. I also enjoy
              contributing to open source projects and sharing knowledge with the developer community.
            </p>

            <div className="mb-12 flex justify-center space-x-6 md:justify-start">
              <Link href="https://x.com/charvi_wadhwa" aria-label="Twitter"><Twitter className="h-5 w-5 text-gray-400 hover:text-white" /></Link>
              <Link href="https://github.com/charrviwadhwa" aria-label="GitHub"><Github className="h-5 w-5 text-gray-400 hover:text-white" /></Link>
              <Link href="https://www.linkedin.com/in/charvi-wadhwa-23b565291/" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-gray-400 hover:text-white" /></Link>
              <Link href="mailto:charviwadhwa06@gmail.com" aria-label="Email"><Mail className="h-5 w-5 text-gray-400 hover:text-white" /></Link>
            </div>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="overflow-hidden rounded-full border-2 border-gray-800">
              <Image src="/photo.jpg?height=150&width=150" alt="Profile" width={200} height={200} className="rounded-full" priority />
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Tech Stack</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {featuredSkills.map(skill => <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />)}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Experience</h2>
            <p className="text-gray-400">My professional journey and work experience</p>
          </div>
          <div className="max-w-4xl">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                company={experience.company}
                duration={experience.duration}
                description={experience.description}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard title="GitPeek" description="Understand any GitHub repo in seconds" image="/gitpeek.png?height=200&width=400" tags={["Gemini API", "GitHub API", "React", "Nodejs"]} githubUrl="https://github.com/charrviwadhwa/Gitpeek" demoUrl="https://gitpeek1.vercel.app/" />
            <ProjectCard title="SolveStack" description="Find your next DSA problem on your terms" image="/solvestack.png?height=200&width=400" tags={["Gemini API", "Tailwind CSS", "React", "Nodejs"]} githubUrl="https://github.com/charrviwadhwa/SolveStack" demoUrl="https://solvestack.vercel.app/" />
            <ProjectCard title="HackXplore" description="A unified platform to discover and discuss global hackathons and internships." image="/Screenshot 2025-06-13 200856.png?height=200&width=400" tags={["React", "Node.js", "MongoDB", "Express"]} githubUrl="https://github.com/charrviwadhwa/HackXplore" demoUrl="https://hackxplore.vercel.app/" />
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white">
              View All Projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Blog */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Blog Posts</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              title="My First Open Source Journey"
              date="May 18, 2025"
              description="Diving into GSSoC Extended and Hacktoberfest 2024"
              image="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*w9OGCqQLPC99X-W3.png?height=200&width=400"
              tags={["OpenSource", "Hackoctoberfest", "GSSOC"]}
              liveUrl="https://medium.com/@charviwadhwa06/my-first-open-source-journey-diving-into-gssoc-extended-and-hacktoberfest-2024-7c854b87283c"
            />
          </div>
        </section>

        {/* Contact */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Contact</h2>
          <p className="mb-6 text-lg text-gray-300">
            You can send me over an e-mail at {" "}
            <Link href="mailto:charviwadhwa06@gmail.com" className="text-blue-400 hover:underline">
              charviwadhwa06@gmail.com
            </Link>
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-400">
          <div className="mb-4 flex justify-center space-x-6">
            <Link href="https://x.com/charvi_wadhwa" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-white" /></Link>
            <Link href="https://github.com/charrviwadhwa" aria-label="GitHub"><Github className="h-5 w-5 hover:text-white" /></Link>
            <Link href="https://www.linkedin.com/in/charvi-wadhwa-23b565291/" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-white" /></Link>
            <Link href="mailto:charviwadhwa06@gmail.com" aria-label="Email"><Mail className="h-5 w-5 hover:text-white" /></Link>
          </div>
          <p>Made by Charvi Wadhwa</p>
        </footer>
      </div>
    </div>
  )
}
