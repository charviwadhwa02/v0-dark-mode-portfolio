"use client"

import { useEffect, useRef, useState } from "react"

interface ExperienceCardProps {
  title: string
  company: string
  duration: string
  description: string
  technologies: string[]
  isLast?: boolean
}

export function ExperienceCard({
  title,
  company,
  duration,
  description,
  technologies,
  isLast = false,
}: ExperienceCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative flex items-start transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center mr-6">
        <div
          className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
            isVisible
              ? "bg-gradient-to-r from-pink-500 to-cyan-500 border-transparent shadow-lg"
              : "bg-zinc-800 border-zinc-600"
          }`}
        />
        {!isLast && (
          <div
            className={`w-0.5 h-24 mt-2 transition-all duration-700 delay-300 ${
              isVisible ? "bg-gradient-to-b from-pink-500/50 to-cyan-500/50" : "bg-zinc-700"
            }`}
          />
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 pb-8">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <span className="text-sm text-gray-400 mt-1 sm:mt-0">{duration}</span>
          </div>

          <p className="text-lg text-cyan-400 font-medium mb-2">{company}</p>

          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-zinc-800 text-gray-300 rounded-full border border-zinc-700 hover:border-cyan-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
