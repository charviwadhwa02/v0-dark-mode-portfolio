"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

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
        className={`fixed left-0 right-0 top-6 z-50 flex justify-center transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-24"
        }`}
      >
        <nav className="flex items-center space-x-1 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 backdrop-blur-md transition-all duration-300">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mr-2 rounded-full p-1 text-gray-400 hover:bg-zinc-800 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-1">
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
            <NavLink href="/guestbook" isActive={isActive("/guestbook")}>
              Guestbook
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transform bg-zinc-900 p-4 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-2">
          <MobileNavLink href="/" isActive={isActive("/")}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/blog" isActive={isActive("/blog")}>
            Blog
          </MobileNavLink>
          <MobileNavLink href="/projects" isActive={isActive("/projects")}>
            Projects
          </MobileNavLink>
          <MobileNavLink href="/achievements" isActive={isActive("/achievements")}>
            Achievements
          </MobileNavLink>
          <MobileNavLink href="/guestbook" isActive={isActive("/guestbook")}>
            Guestbook
          </MobileNavLink>
        </div>
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

function MobileNavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-4 py-3 text-center text-base font-medium transition-colors ${
        isActive ? "bg-zinc-800 text-white" : "text-gray-400 hover:bg-zinc-800 hover:text-white"
      }`}
    >
      {children}
    </Link>
  )
}
