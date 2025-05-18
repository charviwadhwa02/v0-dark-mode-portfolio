"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Briefcase, Award, Code, Menu, X, Github, Twitter } from "lucide-react"

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
        className={`fixed left-0 right-0 top-6 z-50 hidden justify-center transition-transform duration-300 md:flex ${
          visible ? "translate-y-0" : "-translate-y-24"
        }`}
      >
        <nav className="flex items-center space-x-1 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 backdrop-blur-md transition-all duration-300">
          <NavLink href="/" isActive={isActive("/")}>
            Home
          </NavLink>
          <NavLink href="/blog" isActive={isActive("/blog")}>
            Blog
          </NavLink>
          <NavLink href="/projects" isActive={isActive("/projects")}>
            Projects
          </NavLink>
          <NavLink href="/achievements" isActive={isActive("/achievements")}>
            Achievements
          </NavLink>
          <NavLink href="/skills" isActive={isActive("/skills")}>
            Skills
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu Button (Bottom Right Corner) */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg md:hidden"
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
        <MobileNavIconLink href="/skills" icon={<Code size={20} />} isActive={isActive("/skills")} />
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

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        isActive ? "bg-zinc-800 text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {children}
    </Link>
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
        isActive ? "bg-white text-black" : "bg-white/90 text-black hover:bg-white"
      }`}
    >
      {icon}
    </Link>
  )
}
