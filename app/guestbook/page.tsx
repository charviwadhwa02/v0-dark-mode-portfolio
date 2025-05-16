"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function GuestbookPage() {
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [entries, setEntries] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      message: "Love your work! Your projects are inspiring.",
      date: "May 12, 2023",
    },
    {
      id: 2,
      name: "Michael Chen",
      message: "Great portfolio! The Web3 content is particularly helpful.",
      date: "April 30, 2023",
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      message: "Your CLI tool tutorial helped me a lot. Thanks for sharing your knowledge!",
      date: "March 22, 2023",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && name.trim()) {
      const newEntry = {
        id: Date.now(),
        name,
        message,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      }
      setEntries([newEntry, ...entries])
      setMessage("")
      setName("")
    }
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 mt-24">
          <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold">Guestbook</h1>

        <div className="mb-10 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-medium">Leave a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-zinc-700 focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-zinc-700 focus:outline-none"
                placeholder="Write a message..."
                required
              />
            </div>
            <Button type="submit" className="inline-flex items-center bg-zinc-800 hover:bg-zinc-700">
              <Send className="mr-2 h-4 w-4" /> Sign Guestbook
            </Button>
          </form>
        </div>

        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.id} className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur-sm">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium text-white">{entry.name}</h3>
                <span className="text-xs text-gray-500">{entry.date}</span>
              </div>
              <p className="text-sm text-gray-400">{entry.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
