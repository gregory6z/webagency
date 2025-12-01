"use client"

import { motion, useInView } from "framer-motion"
import { Clock, Cog, Moon, Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const problemIcons = {
  invisible: Search,
  slow: Clock,
  offline: Moon,
  manual: Cog,
}

const problemKeys = ["invisible", "slow", "offline", "manual"] as const

function AnimatedStat({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState("0")
  const numericMatch = value.match(/^(\d+)(.*)$/)

  useEffect(() => {
    if (!inView || !numericMatch) {
      if (!numericMatch) setDisplayValue(value)
      return
    }

    const target = parseInt(numericMatch[1], 10)
    const suffix = numericMatch[2] || ""
    const duration = 1500
    const steps = 30
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setDisplayValue(`${target}${suffix}`)
        clearInterval(timer)
      } else {
        setDisplayValue(`${Math.floor(current)}${suffix}`)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value, numericMatch])

  return <span>{displayValue}</span>
}

function ProblemCard({ problemKey }: { problemKey: (typeof problemKeys)[number] }) {
  const t = useTranslations("problem")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = problemIcons[problemKey]

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent/20 transition-colors duration-300">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" strokeWidth={1.5} />
      </div>

      {/* Stat */}
      <div className="mb-3 md:mb-4">
        <span className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
          <AnimatedStat value={t(`problems.${problemKey}.stat`)} inView={isInView} />
        </span>
        <p className="text-sm text-gray-500 mt-1">{t(`problems.${problemKey}.statLabel`)}</p>
      </div>

      {/* Title & Description */}
      <h3 className="text-lg md:text-xl font-heading font-semibold text-gray-900 mb-2">
        {t(`problems.${problemKey}.title`)}
      </h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        {t(`problems.${problemKey}.description`)}
      </p>
    </motion.div>
  )
}

export function Problem() {
  const t = useTranslations("problem")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative bg-[#f8fafb] py-20 md:py-28 lg:py-32">
      <div className="w-full max-w-[1216px] mx-auto px-6 md:px-10 lg:px-6">
        {/* Section Label */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full">
            {t("sectionLabel")}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight"
        >
          {t("title")}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
        >
          {problemKeys.map((key) => (
            <ProblemCard key={key} problemKey={key} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#differential"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-lg transition-colors duration-300 group"
            aria-label={t("cta.ariaLabel")}
          >
            {t("cta.text")}
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
