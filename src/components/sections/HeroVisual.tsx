"use client"

import { motion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import { useRef } from "react"

const badgeDelays = {
  speed: 1,
  seo: 7,
  automation: 13,
  lead: 19,
}

export function HeroVisual() {
  const t = useTranslations("hero.visual")
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "100px" })

  return (
    <div ref={ref} className="relative w-full h-[320px] sm:h-[340px] lg:h-[480px] xl:h-[520px]">
      {/* Glow background - reduced blur for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(97,190,153,0.15)_0%,transparent_70%)] blur-3xl" />

      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[280px] lg:w-[400px] xl:w-[440px]"
      >
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-dark)] rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 xl:p-8 shadow-xl">
          {/* Header */}
          <div className="flex items-center gap-1.5 lg:gap-2 mb-3 lg:mb-5">
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500/80" />
            <span className="ml-1.5 lg:ml-2 text-[10px] lg:text-xs text-[var(--text-muted)]">
              {t("dashboard")}
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 lg:gap-4 mb-3 lg:mb-5">
            <div className="bg-[var(--bg-tertiary)] rounded-lg lg:rounded-xl p-2.5 lg:p-4">
              <p className="text-[10px] lg:text-xs text-[var(--text-muted)] mb-0.5 lg:mb-1">
                {t("visitors")}
              </p>
              <p className="text-base lg:text-2xl font-semibold text-[var(--accent)]">+247%</p>
            </div>
            <div className="bg-[var(--bg-tertiary)] rounded-lg lg:rounded-xl p-2.5 lg:p-4">
              <p className="text-[10px] lg:text-xs text-[var(--text-muted)] mb-0.5 lg:mb-1">
                {t("conversions")}
              </p>
              <p className="text-base lg:text-2xl font-semibold text-[var(--text-primary)]">
                1,429
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-[var(--bg-tertiary)] rounded-lg lg:rounded-xl p-2.5 lg:p-4 h-16 lg:h-28 xl:h-32 flex items-end gap-1 lg:gap-1.5">
            {[40, 65, 45, 80, 55, 90, 70, 85, 95].map((h) => (
              <motion.div
                key={h}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: 0.5 + h * 0.01 }}
                className="flex-1 bg-[var(--accent)] rounded-sm opacity-80"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Speed Badge - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? {
          opacity: 1,
          x: [0, 12, 0],
          y: [0, -12, 0],
        } : { opacity: 1, x: 0, y: 0 }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          x: {
            duration: 4,
            delay: badgeDelays.speed,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 20,
            ease: "easeInOut",
          },
          y: {
            duration: 4,
            delay: badgeDelays.speed,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 20,
            ease: "easeInOut",
          },
        }}
        className="absolute top-[0%] right-[5%] lg:top-[5%] lg:right-[-12%] xl:right-[-15%] bg-[var(--bg-secondary)] border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-xl scale-[0.65] lg:scale-100 origin-top-right"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
            <svg
              role="img"
              aria-label="Speed icon"
              className="w-5 h-5 text-[var(--accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">{t("speed")}</p>
            <p className="text-xs text-[var(--accent)]">{t("speedValue")}</p>
          </div>
        </div>
      </motion.div>

      {/* SEO Badge - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? {
          opacity: 1,
          scale: 1,
          x: [0, -12, 0],
          y: [0, -12, 0],
        } : { opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8 },
          scale: { duration: 0.8, delay: 0.8 },
          x: {
            duration: 4,
            delay: badgeDelays.seo,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 20,
            ease: "easeInOut",
          },
          y: {
            duration: 4,
            delay: badgeDelays.seo,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 20,
            ease: "easeInOut",
          },
        }}
        className="absolute top-[0%] left-[5%] lg:top-[8%] lg:left-[-12%] xl:left-[-15%] bg-[var(--bg-secondary)] border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-xl scale-[0.65] lg:scale-100 origin-top-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-500/20 flex items-center justify-center">
            <svg
              role="img"
              aria-label="SEO icon"
              className="w-5 h-5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">{t("seo")}</p>
            <p className="text-xs text-blue-400">{t("seoValue")}</p>
          </div>
        </div>
      </motion.div>

      {/* Automation Badge - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? {
          opacity: 1,
          x: [0, -12, 0],
          y: [0, 12, 0],
        } : { opacity: 1, x: 0, y: 0 }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          x: {
            duration: 4,
            delay: badgeDelays.automation,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 20,
            ease: "easeInOut",
          },
          y: {
            duration: 4,
            delay: badgeDelays.automation,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 20,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-[0%] left-[5%] lg:bottom-[8%] lg:left-[-15%] xl:left-[-18%] bg-[var(--bg-secondary)] border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-xl scale-[0.65] lg:scale-100 origin-bottom-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-purple-500/20 flex items-center justify-center">
            <svg
              role="img"
              aria-label="Automation icon"
              className="w-5 h-5 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">{t("automation")}</p>
            <p className="text-xs text-purple-400">{t("automationValue")}</p>
          </div>
        </div>
      </motion.div>

      {/* New Lead Notification - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? {
          opacity: 1,
          x: [0, 12, 0],
          y: [0, 12, 0],
        } : { opacity: 1, x: 0, y: 0 }}
        transition={{
          opacity: { duration: 0.8, delay: 1 },
          x: {
            duration: 4,
            delay: badgeDelays.lead,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 20,
            ease: "easeInOut",
          },
          y: {
            duration: 4,
            delay: badgeDelays.lead,
            repeat: isInView ? Infinity : 0,
            repeatDelay: 20,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-[0%] right-[5%] lg:bottom-[5%] lg:right-[-8%] xl:right-[-12%] bg-[var(--bg-secondary)] border border-[var(--accent)]/30 rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-xl scale-[0.65] lg:scale-100 origin-bottom-right"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center">
            <svg
              role="img"
              aria-label="Checkmark"
              className="w-5 h-5 text-[var(--bg-primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs text-[var(--text-muted)]">{t("newLead")}</p>
            <p className="text-sm font-medium text-[var(--text-primary)]">{t("newClient")}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
