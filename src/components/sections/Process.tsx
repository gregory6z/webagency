"use client"

import { Code2, FileText, Rocket, Search } from "lucide-react"
import { useTranslations } from "next-intl"

const stepIcons = {
  discovery: Search,
  proposal: FileText,
  creation: Code2,
  launch: Rocket,
}

const stepKeys = ["discovery", "proposal", "creation", "launch"] as const

type StepKey = (typeof stepKeys)[number]

function StepCard({
  stepKey,
  stepNumber,
  isLast,
}: {
  stepKey: StepKey
  stepNumber: number
  isLast: boolean
}) {
  const t = useTranslations("process")
  const Icon = stepIcons[stepKey]

  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector Line - hidden on mobile, visible on desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-accent to-accent/30" />
      )}

      {/* Step Number Circle */}
      <div className="relative z-10 w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
        <span className="text-2xl font-heading font-bold text-white">{stepNumber}</span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
        {t(`steps.${stepKey}.title`)}
      </h3>

      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed mb-3 max-w-[200px]">
        {t(`steps.${stepKey}.description`)}
      </p>

      {/* Duration Badge */}
      <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full">
        {t(`steps.${stepKey}.duration`)}
      </span>
    </div>
  )
}

export function Process() {
  const t = useTranslations("process")

  return (
    <section id="process" className="relative bg-gray-50 py-16 md:py-20 lg:py-24">
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

        {/* Steps Grid - 4 colunas em desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-12">
          {stepKeys.map((key, index) => (
            <StepCard
              key={key}
              stepKey={key}
              stepNumber={index + 1}
              isLast={index === stepKeys.length - 1}
            />
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-accent p-8 lg:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Search className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-xl lg:text-2xl font-heading font-semibold text-white">
                {t("highlight")}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent font-semibold rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
