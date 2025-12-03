"use client"

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
import { renderHighlight } from "@/lib/highlight"

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
    <section id="social-proof" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 xl:px-0">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-white/50 text-lg md:text-xl font-medium mb-3 md:mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-heading text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-white mb-3 md:mb-4 max-w-3xl mx-auto">
            {renderHighlight(t.raw("title"))}
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-12 md:mb-20">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            >
              <div className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-accent mb-1 md:mb-2">
                {t(`stats.${stat.key}.value`)}
              </div>
              <div className="text-xs md:text-base text-white/60">
                {t(`stats.${stat.key}.label`)}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Logos - Infinite Scroll */}
        <div className="text-center">
          <p className="text-xs md:text-sm font-medium text-white/40 uppercase tracking-wider mb-6 md:mb-10">
            {t("techTitle")}
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />

            {/* Scrolling container - CSS animation for better mobile performance */}
            <div className="flex animate-scroll">
              {/* First set */}
              {techLogos.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 md:gap-3 mx-5 md:mx-10 flex-shrink-0"
                >
                  <tech.icon
                    className="w-8 h-8 md:w-12 md:h-12 text-white/40"
                    aria-label={tech.name}
                  />
                  <span className="text-[10px] md:text-xs text-white/40">{tech.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {techLogos.map((tech) => (
                <div
                  key={`${tech.name}-dup`}
                  className="flex flex-col items-center gap-2 md:gap-3 mx-5 md:mx-10 flex-shrink-0"
                >
                  <tech.icon
                    className="w-8 h-8 md:w-12 md:h-12 text-white/40"
                    aria-label={tech.name}
                  />
                  <span className="text-[10px] md:text-xs text-white/40">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
