"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, ChevronDown, Globe } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogoBrowser } from "@/components/ui/Logo"
import { type Locale, locales } from "@/i18n/config"
import { Link, usePathname, useRouter } from "@/i18n/navigation"

const languageLabels: Record<Locale, { short: string; full: string }> = {
  fr: { short: "FR", full: "Français" },
  en: { short: "EN", full: "English" },
  pt: { short: "PT", full: "Português" },
  es: { short: "ES", full: "Español" },
}

export function Header() {
  const t = useTranslations("common")
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: t("navigation.home") },
    { href: "#services", label: t("navigation.services") },
    { href: "#contact", label: t("navigation.contact") },
  ]

  const handleLanguageChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-white/5 z-40 flex items-center px-6 md:px-10">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoBrowser
            size="sm"
            className="group-hover:shadow-[var(--accent)]/40 transition-shadow duration-300"
          />
          <span className="text-[var(--text-primary)] font-heading font-semibold text-xl hidden sm:block">
            WebAgence
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--text-primary)] transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side: Language + CTA */}
        <div className="flex items-center gap-3">
          {/* Language Selector with shadcn Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--text-primary)] transition-all duration-200 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{languageLabels[locale].short}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-white/10 rounded-xl p-2 min-w-[160px]"
            >
              {locales.map((loc) => (
                <DropdownMenuItem
                  key={loc}
                  onClick={() => handleLanguageChange(loc)}
                  className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    locale === loc
                      ? "text-[var(--text-primary)] bg-white/5"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10"
                  }`}
                >
                  <span className="font-medium">{languageLabels[loc].full}</span>
                  {locale === loc && <Check className="w-4 h-4 text-[var(--accent)]" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button - Hidden on mobile */}
          <Button size="sm" className="hidden sm:flex shadow-lg shadow-[var(--accent)]/20">
            {t("cta.contact")}
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--text-primary)] mt-1.5 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
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
            className="absolute top-[72px] left-0 right-0 bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[var(--text-secondary)] text-base font-medium hover:text-[var(--text-primary)] transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/5">
                <Button className="w-full">{t("cta.contact")}</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
