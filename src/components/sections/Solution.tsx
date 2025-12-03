"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { renderHighlight } from "@/lib/highlight";

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
};

const cards = [
  { key: "quality", icon: "✦" },
  { key: "conversion", icon: "◈" },
  { key: "differentiation", icon: "◇" },
  { key: "speed", icon: "⚡" },
];

export function Solution() {
  const t = useTranslations("solution");

  return (
    <section id="solution" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left side - Text */}
          <div className="flex flex-col justify-between">
            {/* Title at top */}
            <motion.h2
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-heading text-[28px] sm:text-[32px] md:text-[40px] font-semibold leading-[1.1] tracking-tight text-white"
            >
              {t("title")}
              <br />
              <span className="text-white/60">
                {renderHighlight(t.raw("titleHighlight"))}
              </span>
            </motion.h2>

            {/* Badge at bottom */}
            <motion.div
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-3 mt-12 lg:mt-0"
            >
              <span className="text-accent font-semibold text-lg">+50</span>
              <span className="text-gray-400">{t("badge")}</span>
            </motion.div>
          </div>

          {/* Right side - Cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {cards.map((card, index) => (
              <motion.div
                key={card.key}
                custom={0.1 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative p-5 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 w-full aspect-[4/5] md:aspect-square flex flex-col overflow-hidden hover:scale-[1.02]"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-transparent" />

                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-[40px]"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(97, 190, 153, 0.15), transparent 70%)",
                  }}
                />

                {/* Icon top left */}
                <span className="relative z-10 text-xl md:text-2xl text-accent transition-transform duration-500 group-hover:scale-110">
                  {card.icon}
                </span>

                {/* Text at bottom */}
                <p className="relative z-10 text-sm md:text-lg text-gray-400 leading-relaxed mt-auto group-hover:text-gray-300 transition-colors duration-300">
                  {renderHighlight(t.raw(`cards.${card.key}`))}
                </p>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
