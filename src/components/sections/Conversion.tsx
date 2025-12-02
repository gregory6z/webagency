"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

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

export function Conversion() {
  const t = useTranslations("conversion")

  return (
    <section id="conversion" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Left side - Stats */}
          <div className="flex flex-col justify-center">
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
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 md:mb-12 max-w-md">
                {t("subtitle")}
              </p>
            </motion.div>

            {/* Progress bars */}
            <motion.div
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-6 md:space-y-8"
            >
              {/* Bad conversion */}
              <div className="p-4 md:p-0 rounded-xl md:rounded-none bg-white/[0.02] md:bg-transparent">
                <div className="flex items-center gap-3 md:gap-4 mb-3">
                  <div className="flex-1 h-2.5 md:h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-white/40 rounded-full"
                    />
                  </div>
                  <span className="text-white font-semibold text-base md:text-lg min-w-[50px] md:min-w-[60px] text-right">
                    1-2%
                  </span>
                </div>
                <p className="text-white font-medium text-sm md:text-base mb-1">{t("badTitle")}</p>
                <p className="text-white/50 text-xs md:text-sm">{t("badDescription")}</p>
              </div>

              {/* Good conversion */}
              <div className="p-4 md:p-0 rounded-xl md:rounded-none bg-white/[0.02] md:bg-transparent">
                <div className="flex items-center gap-3 md:gap-4 mb-3">
                  <div className="flex-1 h-2.5 md:h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.2, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                  <span className="text-accent font-semibold text-base md:text-lg min-w-[50px] md:min-w-[60px] text-right">
                    6-12%
                  </span>
                </div>
                <p className="text-white font-medium text-sm md:text-base mb-1">{t("goodTitle")}</p>
                <p className="text-white/50 text-xs md:text-sm">{t("goodDescription")}</p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image + Pills */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            {/* Image placeholder with gradient */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 aspect-square md:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-transparent" />

              {/* Logo badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center">
                <span className="text-black font-bold text-base md:text-lg">WS</span>
              </div>

              {/* Pills - horizontal on mobile, vertical on desktop */}
              <div className="absolute top-4 left-4 md:top-1/2 md:right-6 md:left-auto md:-translate-y-1/2 flex flex-row md:flex-col gap-2 md:gap-3 flex-wrap md:items-end">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-medium">
                  {t("pill1")}
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-medium">
                  {t("pill2")}
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-medium">
                  {t("pill3")}
                </span>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
                  {t("explainTitle")}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
                  {t("explainDescription")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
