"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher"
import { Logo } from "@/components/ui/Logo"

export function Header() {
  const t = useTranslations("common")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#solution", label: t("navigation.solution") },
    { href: "#services", label: t("navigation.services") },
    { href: "#process", label: t("navigation.process") },
    { href: "#contact", label: t("navigation.contact") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled ? "bg-bg-primary border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 xl:px-0 py-3 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop Navigation - Right */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-5 py-2 text-base font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-2 border-l border-white/10 pl-3">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-bg-secondary border-b border-white/5 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 text-base font-medium hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 px-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
