"use client"

import { ChevronDown } from "lucide-react"
import { useLocale } from "next-intl"
import { useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "@/i18n/navigation"

const locales = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "es", label: "ES", name: "Español" },
] as const

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLocale = locales.find((l) => l.code === locale) || locales[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const switchLocale = (newLocale: "fr" | "en" | "pt" | "es") => {
    router.replace(pathname, { locale: newLocale })
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
      >
        <span>{currentLocale.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-bg-secondary border border-white/10 rounded-xl shadow-xl min-w-[140px] z-50">
          {locales.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => switchLocale(l.code as "fr" | "en" | "pt" | "es")}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                l.code === locale
                  ? "text-accent bg-accent/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="font-medium">{l.label}</span>
              <span className="text-gray-500">{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
