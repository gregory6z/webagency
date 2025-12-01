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
    <section className="relative lg:h-[calc(100dvh-72px)] flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 xl:px-24 pt-40 pb-12 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-12 xl:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge - Desktop only */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border-dark bg-bg-secondary"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
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

            {/* Title - Mobile: Estilo UI Academy */}
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="md:hidden font-heading text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] mb-6"
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
              <p className="text-sm text-[var(--text-muted)] mb-2">{t("subtitleShort")}</p>
              <p className="text-xl lg:text-[22px] text-[var(--text-primary)] leading-relaxed">
                {t("subtitle")}
              </p>
            </motion.div>

            {/* Subtitle - Mobile: Direto, sem subtitleShort */}
            <motion.p
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="md:hidden text-base text-text-secondary leading-relaxed mb-10"
            >
              {t("subtitleMobile")}
            </motion.p>

            {/* CTA - Mobile: Único, destacado */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="md:hidden"
            >
              <Button variant="cta" withArrow className="w-full max-w-[300px]">
                {t("cta.primaryMobile")}
              </Button>
            </motion.div>

            {/* CTAs - Desktop */}
            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hidden md:flex flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button variant="cta" withArrow>
                {t("cta.primary")}
              </Button>
              <a
                href="#services"
                className="h-16 inline-flex items-center text-text-secondary hover:text-text-primary transition-colors duration-300"
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
              className="mt-10 md:mt-10 lg:mt-12 text-sm text-text-muted"
            >
              {t("socialProof")}
            </motion.p>
          </div>

          {/* Right side - Visual */}
          <div className="mt-8 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
