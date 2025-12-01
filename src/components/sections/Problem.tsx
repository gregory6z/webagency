"use client";

import { ChevronDown, Clock, Cog, Globe, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const problemIcons = {
  invisible: Search,
  offline: Clock,
  manual: Cog,
  presence: Globe,
};

const problemKeys = ["invisible", "offline", "manual", "presence"] as const;

function AnimatedStat({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const numericMatch = value.match(/^(\d+)(.*)$/);

          if (!numericMatch) {
            setDisplayValue(value);
            setHasAnimated(true);
            return;
          }

          const target = parseInt(numericMatch[1], 10);
          const suffix = numericMatch[2] || "";
          const duration = 1200;
          const steps = 20;
          const increment = target / steps;
          let current = 0;

          setDisplayValue(`0${suffix}`);

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setDisplayValue(`${target}${suffix}`);
              clearInterval(timer);
            } else {
              setDisplayValue(`${Math.floor(current)}${suffix}`);
            }
          }, duration / steps);

          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{displayValue}</span>;
}

// Bento Grid Item compacto
function BentoCard({
  problemKey,
  className = "",
}: {
  problemKey: (typeof problemKeys)[number];
  className?: string;
}) {
  const t = useTranslations("problem");
  const Icon = problemIcons[problemKey];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-5 lg:p-6 lg:py-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/15 hover:-translate-y-0.5 ${className}`}
    >
      {/* Gradient overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon + Stat lado a lado */}
        <div className="flex items-start justify-between mb-3">
          <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="text-right">
            <span className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">
              <AnimatedStat value={t(`problems.${problemKey}.stat`)} />
            </span>
            <p className="text-xs text-gray-500">
              {t(`problems.${problemKey}.statLabel`)}
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg lg:text-xl font-heading font-semibold text-gray-900 mb-2">
          {t(`problems.${problemKey}.title`)}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {t(`problems.${problemKey}.description`)}
        </p>
      </div>
    </div>
  );
}

export function Problem() {
  const t = useTranslations("problem");

  return (
    <section className="relative bg-[#f8fafb] py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
        {/* Header compacto */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-white bg-accent rounded-full mb-4">
            {t("sectionLabel")}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 leading-tight max-w-2xl mx-auto">
            {t("title")}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Bento Grid - Layout Assimétrico Compacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 - Invisible (Grande, ocupa 2 colunas no lg) */}
          <BentoCard problemKey="invisible" className="lg:col-span-2" />

          {/* Card 2 - Offline */}
          <BentoCard problemKey="offline" className="lg:col-span-1" />

          {/* Card 3 - Manual */}
          <BentoCard problemKey="manual" className="lg:col-span-1" />

          {/* Card 4 - Presence (Grande, ocupa 2 colunas no lg) */}
          <BentoCard problemKey="presence" className="lg:col-span-2" />
        </div>

        {/* CTA */}
        <div className="text-center mt-14 lg:mt-16">
          <a
            href="#differential"
            className="inline-flex flex-col items-center gap-1.5 text-accent hover:text-accent-hover font-medium transition-colors duration-300"
            aria-label={t("cta.ariaLabel")}
          >
            <span>{t("cta.text")}</span>
            <ChevronDown className="w-5 h-5 animate-bounce" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
