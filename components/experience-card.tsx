"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase } from "lucide-react" // Optional: use any icon library

interface ExperienceCardProps {
  title: string
  company: string
  duration: string
  description: string
  isLast?: boolean
}

export function ExperienceCard({
  title,
  company,
  duration,
  description,
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
              ? "bg-gradient-to-r from-pink-500 to-cyan-500 border-transparent shadow-md"
              : "bg-zinc-800 border-zinc-600"
          }`}
        />
        {!isLast && (
          <div
            className={`w-0.5 h-24 mt-2 transition-all duration-700 delay-300 ${
              isVisible ? "bg-gradient-to-b from-pink-500/40 to-cyan-500/40" : "bg-zinc-700"
            }`}
          />
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 pb-10">
        <div className="relative group bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-cyan-500/10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <span className="text-sm text-gray-400 mt-1 sm:mt-0">{duration}</span>
          </div>

          {/* Company */}
          <p className="text-cyan-400 font-medium mb-2 text-sm sm:text-base">{company}</p>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
