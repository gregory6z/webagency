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
    <div className="relative flex flex-col items-center text-center h-full p-6 bg-white rounded-2xl shadow-sm border border-gray-200/60">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-accent/30" />
      )}

      {/* Step Number */}
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-5">
        <span className="text-lg font-heading font-bold text-accent">{stepNumber}</span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3">
        {t(`steps.${stepKey}.title`)}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
        {t(`steps.${stepKey}.description`)}
      </p>

      {/* Duration Badge */}
      <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mt-auto">
        {t(`steps.${stepKey}.duration`)}
      </span>
    </div>
  )
}

export function Process() {
  const t = useTranslations("process")

  return (
    <section id="process" className="relative bg-gray-50 pt-0 pb-16 md:pb-20 lg:pb-24">
      <div className="w-full max-w-[1216px] mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-accent rounded-full mb-4">
            {t("sectionLabel")}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight max-w-2xl">
            {t("title")}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
        <div className="relative overflow-hidden rounded-xl bg-accent p-6">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Search className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-base lg:text-lg font-heading font-semibold text-white">
                {t("highlight")}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm bg-white text-accent font-semibold rounded-full hover:bg-white/90 transition-colors duration-300"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
