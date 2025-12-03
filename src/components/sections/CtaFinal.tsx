"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { useTranslations } from "next-intl"
import { ContactDialog } from "@/components/ui/ContactDialog"
import { ShaderBackground } from "@/components/ui/ShaderBackground"
import { renderHighlight } from "@/lib/highlight"

const guarantees = ["response", "free", "consultation"] as const

export function CtaFinal() {
  const t = useTranslations("cta")

  return (
    <section
      id="contact"
      className="relative bg-bg-primary overflow-hidden md:min-h-screen md:flex md:flex-col py-16 md:py-0"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1216px] mx-auto px-6 lg:px-0 md:pt-20 lg:pt-24">
        <div className="text-center max-w-2xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-white mb-4"
          >
            {renderHighlight(t.raw("title"))}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-gray-400 mb-6"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 px-4 sm:px-0"
          >
            {/* Primary Button */}
            <ContactDialog>
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-bg-primary bg-accent hover:bg-accent-hover rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105"
              >
                <span>{t("button")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </ContactDialog>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6"
          >
            {guarantees.map((key) => (
              <div key={key} className="flex items-center gap-1.5 text-gray-400">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">{t(`guarantees.${key}`)}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Shader Below Content - hidden on mobile */}
      <div className="hidden md:flex relative flex-1 min-h-[120px] mt-10">
        <ShaderBackground className="absolute inset-0" />
      </div>
    </section>
  )
}
