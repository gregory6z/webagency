import { ChevronDown, Code2, Palette, Rocket, Search } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function Differential() {
  const t = await getTranslations("differential")

  return (
    <section id="differential" className="relative bg-bg-primary py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1216px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full mb-5 border border-accent/20">
            {t("sectionLabel")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight max-w-3xl">
            {t("title")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 lg:mb-16">
          {/* Card 1 - Design Unique (Large) */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-6 lg:p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <Palette className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-3">
                {t("custom.items.unique.title")}
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-md">
                {t("custom.items.unique.description")}
              </p>
              <p className="text-sm lg:text-base text-gray-500 mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {t("generic.items.template.description")}
              </p>
            </div>
          </div>

          {/* Card 2 - Next.js */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-6 lg:p-8 border border-white/10 hover:border-accent/30 transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <Code2 className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white mb-3">
                {t("custom.items.nextjs.title")}
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {t("custom.items.nextjs.description")}
              </p>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {t("generic.items.wordpress.description")}
              </p>
            </div>
          </div>

          {/* Card 3 - Flexible */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 lg:p-8 border border-white/10 hover:border-accent/30 transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <Rocket className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white mb-3">
                {t("custom.items.flexible.title")}
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {t("custom.items.flexible.description")}
              </p>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {t("generic.items.limited.description")}
              </p>
            </div>
          </div>

          {/* Card 4 - SEO (Large) */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-6 lg:p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <Search className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-3">
                {t("custom.items.seoReady.title")}
              </h3>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-md">
                {t("custom.items.seoReady.description")}
              </p>
              <p className="text-sm lg:text-base text-gray-500 mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {t("generic.items.seo.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-1">
              {t("stats.speed.value")}
            </div>
            <div className="text-sm text-gray-400">{t("stats.speed.label")}</div>
          </div>
          <div className="text-center p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-1">
              {t("stats.unique.value")}
            </div>
            <div className="text-sm text-gray-400">{t("stats.unique.label")}</div>
          </div>
          <div className="text-center p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-1">
              {t("stats.security.value")}
            </div>
            <div className="text-sm text-gray-400">{t("stats.security.label")}</div>
          </div>
          <div className="text-center p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-1">
              {t("stats.seo.value")}
            </div>
            <div className="text-sm text-gray-400">{t("stats.seo.label")}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href="#services"
            className="inline-flex flex-col items-center gap-1.5 text-accent hover:text-accent-hover font-medium transition-colors duration-300"
            aria-label={t("cta.ariaLabel")}
          >
            <span>{t("cta.text")}</span>
            <ChevronDown className="w-5 h-5 animate-bounce" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
