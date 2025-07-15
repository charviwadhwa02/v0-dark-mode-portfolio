"use client"

import { useState } from "react"
import Image from "next/image"

interface SkillCardProps {
  name: string
  icon: string
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/40 p-5 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-1 hover:ring-white/20`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative mb-3 flex h-16 w-16 items-center justify-center transition-transform duration-300 ${
          isHovered ? "scale-110 rotate-[2deg]" : ""
        }`}
      >
        <Image
          src={icon || "/placeholder.svg"}
          alt={name}
          width={64}
          height={64}
          className="object-contain drop-shadow-md transition-all duration-300"
        />
      </div>
      <span className="text-sm font-semibold text-white tracking-wide group-hover:text-blue-400 transition-colors duration-200">
        {name}
      </span>
    </div>
  )
}
