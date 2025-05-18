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
      className="flex flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-zinc-700 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative mb-3 flex h-16 w-16 items-center justify-center transition-transform duration-300 ${
          isHovered ? "scale-110" : ""
        }`}
      >
        <Image src={icon || "/placeholder.svg"} alt={name} width={64} height={64} className="object-contain" />
      </div>
      <span className="text-sm font-medium text-white">{name}</span>
    </div>
  )
}
