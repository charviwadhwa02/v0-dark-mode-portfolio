import Link from "next/link"
import { ArrowLeft, Github, Twitter, Mail, Linkedin } from "lucide-react"
import { SkillCard } from "@/components/skill-card"

export default function SkillsPage() {
  // Frontend skills
  const frontendSkills = [
    { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
    { name: "CSS", icon: "/skills/css.png" },
    { name: "JavaScript", icon: "/skills/javascript.png" },
    { name: "React", icon: "/skills/react.png" },
    { name: "Tailwind", icon: "/skills/tailwind.png" },
    { name: "Next.js", icon: "/skills/nextjs.png" },
  ]

  // Backend skills
  const backendSkills = [
    { name: "Node.js", icon: "/skills/nodejs.png" },
    { name: "Express", icon: "/skills/express.png" },
    { name: "MongoDB", icon: "/skills/mongodb.png" },
    { name: "SQL", icon: "/skills/sql.png" },
    { name: "Python", icon: "/skills/python.png" },
    { name: "Firebase", icon: "/skills/firebase.svg" },
  ]

  // Tools and others
  const toolsSkills = [
    { name: "Git", icon: "/skills/git.png" },
    { name: "GitHub", icon: "/skills/github.png" },
    { name: "VS Code", icon: "/skills/vscode.png" },
    { name: "Figma", icon: "/skills/figma.svg" },
    { name: "Docker", icon: "/skills/docker.svg" },
    { name: "AWS", icon: "/skills/aws.svg" },
  ]

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 mt-24">
          <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold">Skills & Tech Stack</h1>

        <div className="mb-12 space-y-10">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-blue-400">Frontend Development</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-blue-400">Backend Development</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-blue-400">Tools & Technologies</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {toolsSkills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
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
