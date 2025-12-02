"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import {
  SiAmazonwebservices,
  SiCloudflare,
  SiDocker,
  SiFramer,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si"

const techLogos = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiZod, name: "Zod" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiAmazonwebservices, name: "AWS" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiStripe, name: "Stripe" },
  { icon: SiReactquery, name: "React Query" },
  { icon: SiFramer, name: "Framer" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiCloudflare, name: "Cloudflare" },
]

const stats = [{ key: "speed" }, { key: "score" }, { key: "security" }, { key: "support" }] as const

export function SocialProof() {
  const t = useTranslations("socialproof")

  return (
    <section id="social-proof" className="relative bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1216px] mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full mb-5 border border-accent/20">
            {t("sectionLabel")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight max-w-3xl mx-auto">
            {t("title")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-200/60"
            >
              <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-2">
                {t(`stats.${stat.key}.value`)}
              </div>
              <div className="text-sm text-gray-600">{t(`stats.${stat.key}.label`)}</div>
            </div>
          ))}
        </div>

        {/* Tech Logos - Infinite Scroll */}
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            {t("techTitle")}
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

            {/* Scrolling container */}
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {techLogos.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 mx-8 flex-shrink-0"
                >
                  <tech.icon
                    className="w-10 h-10 md:w-12 md:h-12 text-gray-400"
                    aria-label={tech.name}
                  />
                  <span className="text-xs text-gray-400">{tech.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {techLogos.map((tech) => (
                <div
                  key={`${tech.name}-dup`}
                  className="flex flex-col items-center gap-2 mx-8 flex-shrink-0"
                >
                  <tech.icon
                    className="w-10 h-10 md:w-12 md:h-12 text-gray-400"
                    aria-label={tech.name}
                  />
                  <span className="text-xs text-gray-400">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
