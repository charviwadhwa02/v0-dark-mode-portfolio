"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Briefcase, Award, BookMarked, Menu, X, Github, Twitter } from "lucide-react"

export function FloatingNavbar() {
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Don't hide navbar when mobile menu is open
      if (mobileMenuOpen) {
        setPrevScrollPos(currentScrollPos)
        return
      }

      // Determine if we're scrolling up or down
      const isScrollingUp = prevScrollPos > currentScrollPos

      // Show navbar when scrolling up or at the top of the page
      // Hide navbar when scrolling down and not at the top
      setVisible(isScrollingUp || currentScrollPos < 10)

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, mobileMenuOpen])

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`fixed left-0 top-1/2 z-50 -translate-y-1/2 transition-transform duration-300 md:flex ${
          visible ? "translate-x-0" : "-translate-x-16"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 rounded-r-lg border border-zinc-800 bg-zinc-900/80 p-3 backdrop-blur-md transition-all duration-300">
          <NavIconLink href="/" icon={<Home size={20} />} isActive={isActive("/")} tooltip="Home" />
          <NavIconLink href="/blog" icon={<BookOpen size={20} />} isActive={isActive("/blog")} tooltip="Blog" />
          <NavIconLink
            href="/projects"
            icon={<Briefcase size={20} />}
            isActive={isActive("/projects")}
            tooltip="Projects"
          />
          <NavIconLink
            href="/achievements"
            icon={<Award size={20} />}
            isActive={isActive("/achievements")}
            tooltip="Achievements"
          />
          <NavIconLink
            href="/guestbook"
            icon={<BookMarked size={20} />}
            isActive={isActive("/guestbook")}
            tooltip="Guestbook"
          />
        </nav>
      </div>

      {/* Mobile Menu Button (Bottom Right Corner) */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg md:hidden"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed bottom-20 right-6 z-40 flex flex-col space-y-3 transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full opacity-0"
        }`}
      >
        <MobileNavIconLink href="/" icon={<Home size={20} />} isActive={isActive("/")} />
        <MobileNavIconLink href="/blog" icon={<BookOpen size={20} />} isActive={isActive("/blog")} />
        <MobileNavIconLink href="/projects" icon={<Briefcase size={20} />} isActive={isActive("/projects")} />
        <MobileNavIconLink href="/achievements" icon={<Award size={20} />} isActive={isActive("/achievements")} />
        <MobileNavIconLink href="/guestbook" icon={<BookMarked size={20} />} isActive={isActive("/guestbook")} />
        <MobileNavIconLink
          href="https://github.com/charrviwadhwa"
          icon={<Github size={20} />}
          isActive={false}
          external
        />
        <MobileNavIconLink href="https://x.com/charvi_wadhwa" icon={<Twitter size={20} />} isActive={false} external />
      </div>
    </>
  )
}

function NavIconLink({
  href,
  icon,
  isActive,
  tooltip,
}: {
  href: string
  icon: React.ReactNode
  isActive: boolean
  tooltip: string
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
          isActive ? "bg-blue-600 text-white" : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"
        }`}
      >
        {icon}
      </Link>
      <div className="absolute left-full ml-2 hidden rounded bg-zinc-800 px-2 py-1 text-xs text-white group-hover:block">
        {tooltip}
      </div>
    </div>
  )
}

function MobileNavIconLink({
  href,
  icon,
  isActive,
  external = false,
}: {
  href: string
  icon: React.ReactNode
  isActive: boolean
  external?: boolean
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
        isActive ? "bg-blue-600 text-white" : "bg-blue-600/90 text-white hover:bg-blue-500"
      }`}
    >
      {icon}
    </Link>
  )
}
