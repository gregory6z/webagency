"use client"

import { Clock, Cog, Globe, Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"

const problemIcons = {
  invisible: Search,
  offline: Clock,
  manual: Cog,
  presence: Globe,
}

const problemKeys = ["invisible", "offline", "manual", "presence"] as const

function AnimatedStat({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const numericMatch = value.match(/^(\d+)(.*)$/)

          if (!numericMatch) {
            setDisplayValue(value)
            setHasAnimated(true)
            return
          }

          const target = parseInt(numericMatch[1], 10)
          const suffix = numericMatch[2] || ""
          const duration = 1200
          const steps = 20
          const increment = target / steps
          let current = 0

          setDisplayValue(`0${suffix}`)

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setDisplayValue(`${target}${suffix}`)
              clearInterval(timer)
            } else {
              setDisplayValue(`${Math.floor(current)}${suffix}`)
            }
          }, duration / steps)

          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref}>{displayValue}</span>
}

function ProblemCard({ problemKey }: { problemKey: (typeof problemKeys)[number] }) {
  const t = useTranslations("problem")
  const Icon = problemIcons[problemKey]

  return (
    <div className="group relative p-6 lg:p-8 rounded-2xl bg-white shadow-sm border border-gray-200/60 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
      </div>

      {/* Stat */}
      <div className="mb-4">
        <span className="text-4xl lg:text-5xl font-heading font-bold text-gray-900">
          <AnimatedStat value={t(`problems.${problemKey}.stat`)} />
        </span>
        <span className="block text-sm text-gray-500 mt-1">
          {t(`problems.${problemKey}.statLabel`)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
        {t(`problems.${problemKey}.title`)}
      </h3>

      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed">
        {t(`problems.${problemKey}.description`)}
      </p>
    </div>
  )
}

export function Problem() {
  const t = useTranslations("problem")

  return (
    <section className="relative bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1216px] mx-auto px-6 lg:px-0">
        {/* Header - Alinhado à esquerda */}
        <div className="mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-white bg-accent rounded-full mb-5">
            {t("sectionLabel")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-5 leading-tight max-w-3xl">
            {t("title")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards Grid - 4 colunas em desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {problemKeys.map((key) => (
            <ProblemCard key={key} problemKey={key} />
          ))}
        </div>
      </div>
    </section>
  )
}
