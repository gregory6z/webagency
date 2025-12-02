"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"

const guarantees = ["response", "free", "consultation"] as const

export function CtaFinal() {
  const t = useTranslations("cta")

  return (
    <section
      id="contact"
      className="relative bg-bg-primary py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto px-6 lg:px-0">
        <div className="text-center max-w-3xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {t("title")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 mb-10"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 px-4 sm:px-0"
          >
            {/* Primary Button */}
            <button
              type="button"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-bg-primary bg-accent hover:bg-accent-hover rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 sm:hover:scale-105"
            >
              <span className="truncate">{t("button")}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-green-400" />
              <span className="truncate">{t("whatsapp")}</span>
            </a>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {guarantees.map((key) => (
              <div key={key} className="flex items-center gap-2 text-gray-400">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm md:text-base">{t(`guarantees.${key}`)}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
