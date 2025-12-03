"use client"

import { useTranslations } from "next-intl"
import { GlowCard } from "@/components/ui/spotlight-card"
import { renderHighlight } from "@/lib/highlight"

const services = [
  {
    key: "strategy",
    items: ["positioning", "competition", "audience", "personas", "architecture", "copywriting"],
  },
  {
    key: "design",
    items: ["artDirection", "branding", "uiDesign", "responsive", "styleGuide"],
  },
  {
    key: "development",
    items: ["nextjs", "cms", "integrations", "performance", "seo", "testing"],
  },
  {
    key: "automation",
    items: ["workflows", "crm", "analytics", "notifications", "apis", "ai"],
  },
]

export function Services() {
  const t = useTranslations("services")

  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_760px] gap-10 md:gap-16 lg:gap-20 lg:justify-between">
          {/* Sidebar - Left */}
          <div className="flex flex-col">
            {/* Sticky wrapper - ends before bottom text */}
            <div className="flex-1 lg:pb-8">
              <div className="lg:sticky lg:top-24">
                <p className="text-white/50 text-lg md:text-xl font-medium leading-7 mb-4 md:mb-6">
                  {t("title")}
                  <br />
                  {t("titleHighlight")}
                </p>
                <h2 className="font-heading text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-white">
                  {renderHighlight(t.raw("subtitle"))}
                </h2>
              </div>
            </div>

            {/* Bottom - Unique text (outside sticky wrapper) */}
            <div className="hidden lg:block">
              <span className="text-white mb-4 block">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="currentColor">
                  <path d="M10.99 19.538L1.918 10.484L10.99 1.412L20.044 10.484ZM10.99 17.9L18.406 10.484L10.99 3.05L3.574 10.484ZM10.99 14.246L7.21 10.484L10.99 6.704L14.77 10.484Z" />
                </svg>
              </span>
              <p className="text-white/60 text-base font-medium leading-relaxed">
                <span className="text-white font-semibold">{t("uniqueTitle")}</span> —{" "}
                {renderHighlight(t.raw("uniqueDescription"))}
              </p>
            </div>
          </div>

          {/* Services Stack - Right */}
          <div className="flex flex-col gap-4 md:gap-5">
            {services.map((service) => (
              <GlowCard
                key={service.key}
                glowColor="green"
                customSize
                className="!p-5 md:!p-6 !grid-rows-1 !gap-0"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-8">
                  {/* Left - Title & Description */}
                  <div className="lg:max-w-[400px]">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold leading-tight text-white mb-2">
                      {t(`categories.${service.key}.title`)}
                    </h3>
                    <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed">
                      {renderHighlight(t.raw(`categories.${service.key}.description`))}
                    </p>
                  </div>

                  {/* Right - Tags/Pills */}
                  <div className="flex flex-row flex-wrap lg:flex-col gap-2 md:gap-3 items-start lg:items-end">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/[0.12] text-white font-medium text-xs md:text-sm min-h-[36px] md:min-h-[40px] flex items-center"
                      >
                        {t(`categories.${service.key}.items.${item}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
