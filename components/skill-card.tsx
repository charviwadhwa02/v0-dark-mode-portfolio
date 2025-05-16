"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  skills: string[]
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-gray-900 to-purple-950/70 shadow-lg transition-all duration-300 hover:shadow-purple-500/20">
        <CardContent className="p-6">
          <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
          <ul className="space-y-2">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-purple-500" />
                <span className="text-gray-300">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
