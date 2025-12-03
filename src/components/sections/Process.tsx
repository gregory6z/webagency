"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { renderHighlight } from "@/lib/highlight"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
}

const steps = [
  { key: "diagnosis", symbol: "[" },
  { key: "ideation", symbol: "{" },
  { key: "prototype", symbol: ":" },
  { key: "implementation", symbol: "/" },
  { key: "delivery", symbol: "!" },
]

export function Process() {
  const t = useTranslations("process")

  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 xl:px-0">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-white mb-4">
              {t("title")}
              <br />
              <span className="text-accent">{t("titleHighlight")}</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-base md:text-lg">{t("subtitle")}</p>
          </motion.div>
        </div>

        {/* Steps - Horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              custom={0.1 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Symbol and title */}
              <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
                <span className="text-accent font-mono text-base md:text-lg">{step.symbol}</span>
                <h3 className="font-heading text-sm md:text-lg font-semibold text-white truncate">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <span className="text-accent font-mono text-base md:text-lg">
                  {step.symbol === "[" ? "]" : step.symbol === "{" ? "}" : step.symbol}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {renderHighlight(t.raw(`steps.${step.key}.description`))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
