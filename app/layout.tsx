import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GradientBackground } from "@/components/gradient-background"
import { FloatingNavbar } from "@/components/floating-navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe | Developer Portfolio",
  description: "Fullstack Web Developer, Web3 Enthusiast, Blogger, and Tech Enthusiast",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <GradientBackground />
        <FloatingNavbar />
        {children}
      </body>
    </html>
  )
}
