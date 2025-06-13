import type React from "react"
import Link from "next/link"
import { ArrowLeft, Award, Trophy, Medal, Github, Twitter, Mail, ArrowRight, Linkedin, ExternalLink } from "lucide-react"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 mt-24">
          <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold">Achievements</h1>

        <div className="space-y-6">
          <AchievementCard
            icon={<Trophy className="h-6 w-6 text-yellow-500" />}
            title="Finalist in AM Hacks"
            date="2025"
            description="Selected as a top 15 finalist at the AM Hacks, IGDTUW for creating a centralized platform that helps students discover top hackathons and internships from various platforms and connect with peers"
          />
          <AchievementCard
            icon={<Trophy className="h-6 w-6 text-yellow-500" />}
            title="Finalist in Hackemon"
            date="2025"
            description="Selected among the top 20 teams out of 1500+ registrations for demonstrating exceptional innovation and problem-solving skills."
          />

          <AchievementCard
            icon={<Award className="h-6 w-6 text-blue-500" />}
            title="Open Source Contributor"
            date="2024-Present"
            description="Enhanced 3 open-source projects during Hacktoberfest by submitting 8 pull requests, resolving 3 critical bugs, and refining features to improve user experience for over 500 active contributors."
          />

        </div>
         <section className="mb-20">
          

          
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
         
        </footer>
      </div>
    </div>
  )
}

function AchievementCard({
  icon,
  title,
  date,
  description,
}: {
  icon: React.ReactNode
  title: string
  date: string
  description: string
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800">{icon}</div>
        <div>
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <span className="ml-2 text-xs text-gray-500">{date}</span>
          </div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>

        
      </div>

      
    </div>
    
  )
}
