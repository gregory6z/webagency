"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { HeroVisual } from "./HeroVisual"

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

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative h-[calc(100vh-72px)] flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 xl:px-24 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full border border-[var(--border-dark)] bg-[var(--bg-secondary)]"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-sm text-[var(--text-secondary)]">{t("badge")}</span>
            </motion.div>

            {/* Title - Desktop */}
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hidden md:block font-heading text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-[1.08] tracking-[-0.02em] mb-6 lg:mb-8"
            >
              {t("title")}
            </motion.h1>

            {/* Title - Mobile */}
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="md:hidden font-heading text-[32px] sm:text-[40px] font-semibold leading-[1.12] tracking-[-0.02em] mb-5"
            >
              {t("titleMobile")}
            </motion.h1>

            {/* Subtitle - Desktop */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hidden md:block max-w-[560px] mb-10 lg:mb-12"
            >
              <p className="text-sm text-[var(--text-muted)] mb-2">
                {t("subtitleShort")}
              </p>
              <p className="text-xl lg:text-[22px] text-[var(--text-primary)] leading-relaxed">
                {t("subtitle")}
              </p>
            </motion.div>

            {/* Subtitle - Mobile */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="md:hidden max-w-md mx-auto lg:mx-0 mb-8"
            >
              <p className="text-xs text-[var(--text-muted)] mb-2">
                {t("subtitleShort")}
              </p>
              <p className="text-lg text-[var(--text-primary)] leading-relaxed">
                {t("subtitleMobile")}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              {/* Primary CTA - Desktop */}
              <Button variant="cta" withArrow className="hidden sm:inline-flex">
                {t("cta.primary")}
              </Button>
              {/* Primary CTA - Mobile */}
              <Button variant="cta" withArrow className="sm:hidden w-full max-w-xs">
                {t("cta.primaryMobile")}
              </Button>

              {/* Secondary - Link âncora */}
              <a
                href="#services"
                className="h-16 inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                {t("cta.secondary")}
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.p
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 lg:mt-12 text-sm text-[var(--text-muted)]"
            >
              {t("socialProof")}
            </motion.p>
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
