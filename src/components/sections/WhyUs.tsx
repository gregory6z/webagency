"use client"

import {
  ChevronDown,
  Code2,
  HandshakeIcon,
  HeadphonesIcon,
  MapPin,
  ShieldCheck,
  Target,
} from "lucide-react"
import { useTranslations } from "next-intl"

const items = [
  { key: "tech", icon: Code2 },
  { key: "results", icon: Target },
  { key: "support", icon: HeadphonesIcon },
  { key: "transparency", icon: HandshakeIcon },
  { key: "local", icon: MapPin },
  { key: "guarantee", icon: ShieldCheck },
] as const

function WhyUsCard({
  itemKey,
  icon: Icon,
  index,
}: {
  itemKey: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  index: number
}) {
  const t = useTranslations("whyus")

  return (
    <div className="group relative h-full">
      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 lg:p-8 border border-white/10 hover:border-accent/40 transition-all duration-500">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Number badge */}
          <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-xs font-heading font-bold text-accent/60">0{index + 1}</span>
          </div>

          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-300">
            <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white mb-3">
            {t(`items.${itemKey}.title`)}
          </h3>

          {/* Description */}
          <p className="text-base text-gray-400 leading-relaxed">
            {t(`items.${itemKey}.description`)}
          </p>
        </div>
      </div>
    </div>
  )
}

export function WhyUs() {
  const t = useTranslations("whyus")

  return (
    <section id="why-us" className="relative bg-bg-primary py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full mb-5 border border-accent/20">
            {t("sectionLabel")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight max-w-3xl">
            {t("title")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <WhyUsCard key={item.key} itemKey={item.key} icon={item.icon} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href="#contact"
            className="inline-flex flex-col items-center gap-1.5 text-accent hover:text-accent-hover font-medium transition-colors duration-300"
            aria-label={t("cta.ariaLabel")}
          >
            <span>{t("cta.text")}</span>
            <ChevronDown className="w-5 h-5 animate-bounce" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
