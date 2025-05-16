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
      image: "/placeholder.svg?height=400&width=800",
      githubUrl: "https://github.com/Inspiro",
      date: "2023",
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
      image: "/placeholder.svg?height=400&width=800",
      demoUrl: "https://hackxplore.example.com",
      githubUrl: "https://github.com/example/hackxplore",
      date: "2022",
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
      date: "2022",
    },
    devtracker: {
      title: "DevTracker",
      description: "Track your development progress and set coding goals with this productivity tool.",
      longDescription:
        "DevTracker is a productivity tool designed specifically for developers to track their coding habits, set goals, and visualize their progress over time. It integrates with popular coding platforms and IDEs to provide comprehensive insights into your development activities.",
      features: [
        "Track coding time across different projects and languages",
        "Set daily, weekly, or monthly coding goals",
        "Visualize productivity with detailed charts and statistics",
        "Integration with GitHub, GitLab, and popular IDEs",
        "Receive personalized productivity insights and suggestions",
      ],
      technologies: ["React", "Firebase", "Chart.js", "GitHub API"],
      image: "/placeholder.svg?height=400&width=800",
      demoUrl: "https://devtracker.example.com",
      githubUrl: "https://github.com/example/devtracker",
      date: "2022",
    },
    codesnap: {
      title: "CodeSnap",
      description: "Beautiful code snippet generator with syntax highlighting for sharing on social media.",
      longDescription:
        "CodeSnap is a tool that allows developers to create beautiful, customizable images of their code snippets for sharing on social media, in presentations, or in documentation. It supports a wide range of programming languages with accurate syntax highlighting and various visual themes.",
      features: [
        "Support for over 50 programming languages with syntax highlighting",
        "Customizable themes, backgrounds, and window styles",
        "Adjustable padding, font size, and line numbers",
        "Export as PNG, JPG, or SVG",
        "One-click sharing to Twitter, LinkedIn, and other platforms",
      ],
      technologies: ["TypeScript", "Canvas API", "Prism.js", "React"],
      image: "/placeholder.svg?height=400&width=800",
      demoUrl: "https://codesnap.example.com",
      githubUrl: "https://github.com/example/codesnap",
      date: "2021",
    },
    webperf: {
      title: "WebPerf",
      description: "Website performance monitoring and optimization tool to help improve your site's speed.",
      longDescription:
        "WebPerf is a comprehensive tool for monitoring and optimizing website performance. It provides detailed insights into loading times, resource usage, and potential bottlenecks, along with actionable recommendations to improve your site's speed and user experience.",
      features: [
        "Real-time performance monitoring across different devices and locations",
        "Detailed waterfall charts of page load process",
        "Automated suggestions for performance improvements",
        "Comparison with competitor websites",
        "Integration with CI/CD pipelines for performance regression testing",
      ],
      technologies: ["Lighthouse", "Web Vitals API", "Node.js", "PostgreSQL"],
      image: "/placeholder.svg?height=400&width=800",
      demoUrl: "https://webperf.example.com",
      githubUrl: "https://github.com/example/webperf",
      date: "2021",
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
