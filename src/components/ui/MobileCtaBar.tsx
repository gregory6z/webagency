"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"

export function MobileCtaBar() {
  const t = useTranslations("hero")
  const [isVisible, setIsVisible] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          // Show after scrolling past 80% of viewport height (Hero section)
          setIsVisible(window.scrollY > window.innerHeight * 0.8)
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-bg-primary via-bg-primary to-transparent md:hidden"
        >
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-accent hover:bg-accent-hover text-bg-primary font-semibold text-base transition-colors shadow-lg shadow-accent/25"
          >
            <span>{t("cta.primary")}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
