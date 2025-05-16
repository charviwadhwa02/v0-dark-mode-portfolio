import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react"

// This would typically come from a database or CMS
const getProject = (slug: string) => {
  const projects = {
    notiger: {
      title: "Inspiro",
      description:
        "A Chrome extension that brings a daily boost of motivation right to your browser every time you open a new tab.",
      longDescription:
        "Inspiro is a Chrome extension that brings a daily boost of motivation right to your browser every time you open a new tab. With Inspiro, your new tab page will no longer be boring or empty—it'll be filled with inspiring quotes and beautiful images to keep you focused and motivated.",
      features: [
        "Motivational Quotes: Every time you open browser, Inspiro brings a fresh, uplifting quote to boost your day",
        "Fun Stickers: Added fun stickers to make your browser feel even more personal and exciting.",
        "Non-stop Inspiration: You'll never open a new tab without feeling motivated and focused.",
      ],
      technologies: ["Javascript", "Chrome Extensions API", "Notifications API"],
      image: "https://private-user-images.githubusercontent.com/154724710/444212843-e8e92a09-549e-4675-a56b-8da30c50805c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc0MTE2MDAsIm5iZiI6MTc0NzQxMTMwMCwicGF0aCI6Ii8xNTQ3MjQ3MTAvNDQ0MjEyODQzLWU4ZTkyYTA5LTU0OWUtNDY3NS1hNTZiLThkYTMwYzUwODA1Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxNlQxNjAxNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NWU2YjcwYzgzNjE3ZDE5ZDFlMGFlNDIwNjhiODAyYjczNGZiODJlNjNjYjJkZGY3YmRhZTgwN2FiNjAxNWVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.F9LOB678Z0lEqGsTJ6lYbJMzVoE1MJ_Q1bkrIn-w1qs?height=400&width=800",
      githubUrl: "https://github.com/Inspiro",
      date: "2025",
    },
    paypeer: {
      title: "HackXplore",
      description: "A unified platform to discover and discuss global hackathons and internships.",
      longDescription:
        "HackXplore is a comprehensive platform designed to help students discover hackathons, internships, and find teammates for their projects. It aggregates opportunities from various sources and provides a community space for discussion and collaboration.",
      features: [
        "Hackathon discovery with filtering by location, date, and prizes",
        "Internship listings with company reviews and application tips",
        "Team formation tools to find collaborators with complementary skills",
        "Discussion forums for each event",
        "Personalized recommendations based on your skills and interests",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      image: "?height=400&width=800",
      demoUrl: "https://hackxplore.example.com",
      githubUrl: "https://github.com/example/hackxplore",
      date: "2025",
    },
    secli: {
      title: "YouTube Bookmarker",
      description: "A browser extension that lets you bookmark specific timestamps in YouTube videos.",
      longDescription:
        "YouTube Bookmarker is a browser extension that enhances your YouTube viewing experience by allowing you to bookmark specific timestamps in videos. This makes it easy to return to important parts of tutorials, lectures, or any long-form content without having to search through the entire video.",
      features: [
        "Create bookmarks with custom labels at specific timestamps",
        "Organize bookmarks by video or category",
        "Quick navigation to bookmarked timestamps",
        "Export and share bookmarks with others",
        "Sync bookmarks across devices",
      ],
      technologies: ["JavaScript", "Chrome Extensions API", "YouTube API"],
      image: "/placeholder.svg?height=400&width=800",
      demoUrl: null,
      githubUrl: "https://github.com/example/youtube-bookmarker",
      date: "2024",
    },
    devtracker: {
      title: "TrackSafe",
      description: "TrackSafe is a community-powered accident reporting and safety alert system designed to enhance road safety",
      longDescription:
        "TrackSafe is a community-powered accident reporting and safety alert system designed to enhance road safety, reduce emergency response time, and crowdsource accident data for public awareness and prevention efforts. It empowers users to report, view, and get notified about accidents in their vicinity.",
      features: [
       "Emergency Contacts Directory",

"One-Tap Emergency Calling",

"Auto-Send Location to Emergency Contacts",

"Saved Personal Emergency Contacts",

"Nearby Hospitals & Police Stations Map"
      ],
      technologies: ["React", "Express", "Nodejs"],
      image: "/placeholder.svg?height=400&width=800",
      demoUrl: "https://women-safety-gamma.vercel.app/,
      githubUrl: "https://github.com/charrviwadhwa/Women-safety",
      date: "2024",
    },

  }

  return projects[slug as keyof typeof projects] || null
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-transparent text-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
          <div className="mb-8 mt-24">
            <Link href="/projects" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
            </Link>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
            <h1 className="mb-8 text-3xl font-bold">Project Not Found</h1>
            <p>The project you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 mt-24">
          <Link href="/projects" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
          </Link>
        </div>

        <article className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center text-sm text-gray-400">
                <Calendar className="mr-1 h-4 w-4" />
                {project.date}
              </div>
            </div>
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg sm:h-96">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Overview</h2>
              <p className="text-gray-300">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Features</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Links</h2>
              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                  >
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                )}
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
