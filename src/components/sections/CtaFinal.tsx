"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { ShaderBackground } from "@/components/ui/ShaderBackground"

const guarantees = ["response", "free", "consultation"] as const

export function CtaFinal() {
  const t = useTranslations("cta")

  return (
    <section
      id="contact"
      className="relative bg-bg-primary overflow-hidden min-h-screen flex flex-col"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1216px] mx-auto px-6 lg:px-0 pt-16 md:pt-20 lg:pt-24">
        <div className="text-center max-w-2xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-white mb-4"
          >
            {t("title")}
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
            <button
              type="button"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-bg-primary bg-accent hover:bg-accent-hover rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 sm:hover:scale-105"
            >
              <span className="truncate">{t("button")}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0 text-green-400" />
              <span className="truncate">{t("whatsapp")}</span>
            </a>
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

      {/* Shader Below Content */}
      <div className="relative flex-1 min-h-[120px] mt-6 md:mt-10">
        <ShaderBackground className="absolute inset-0" />
      </div>
    </section>
  )
}
