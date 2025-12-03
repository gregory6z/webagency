"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { renderHighlight } from "@/lib/highlight";
import { Spotlight, GridBackground } from "@/components/ui/Spotlight";
import { GlowCard } from "@/components/ui/GlowCard";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
} from "react-icons/si";

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

const techStack = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiFramer, name: "Framer" },
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative h-dvh flex flex-col bg-bg-primary overflow-hidden">
      <GridBackground />
      <Spotlight />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 xl:px-0 pt-[120px] md:pt-[160px]">
          <div className="max-w-5xl">
            {/* Title with highlighted words - 70px on desktop */}
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-heading text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-semibold leading-[1.03] tracking-[-0.02em] mb-6 md:mb-10"
            >
              <span className="text-white">{t("titleLine1")}</span>
              <br />
              <span className="text-accent">{t("titleHighlight")}</span>
              <br />
              <span className="text-white">{t("titleLine2")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-xl md:text-2xl text-gray-400 font-medium leading-[1.5] max-w-2xl"
            >
              {renderHighlight(t.raw("subtitle"))}
            </motion.p>
          </div>
        </div>

        {/* Bottom section - CTA left, Tech card right */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 mt-auto w-full max-w-[1320px] mx-auto px-6 xl:px-0 pb-20"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            {/* CTA left */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <a
                href="#contact"
                className="group flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 min-h-[48px] rounded-full bg-accent hover:bg-accent-hover transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-semibold text-bg-primary">
                  {t("cta.primary")}
                </span>
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-white/20">
                  <Image
                    src="/images/avatar.jpg"
                    alt="WebSignature"
                    fill
                    className="object-cover"
                  />
                </div>
              </a>

              {/* Availability badge */}
              <div className="flex items-center gap-2 min-h-[44px]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <span className="text-sm text-gray-400">{t("availability")}</span>
              </div>
            </div>

            {/* Tech Stack card right */}
            <div className="hidden lg:block">
              <GlowCard className="p-5" glowColor="green">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t("techStack")}
                  </span>
                  <div className="flex items-center gap-4">
                    {techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.1] transition-colors"
                        title={tech.name}
                      >
                        <tech.icon className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </motion.div>
    </section>
  );
}
