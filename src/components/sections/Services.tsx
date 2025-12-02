"use client"

import {
  Bot,
  Calendar,
  FileText,
  Globe,
  Mail,
  MessageCircle,
  Rocket,
  ShoppingCart,
  Target,
  Users,
} from "lucide-react"
import { useTranslations } from "next-intl"

const serviceIcons = {
  landingPage: Target,
  website: Globe,
  ecommerce: ShoppingCart,
  chatbot: Bot,
  booking: Calendar,
  whatsapp: MessageCircle,
  email: Mail,
  crm: Users,
  quotes: FileText,
  automation: Rocket,
}

const serviceKeys = [
  "landingPage",
  "website",
  "ecommerce",
  "chatbot",
  "booking",
  "whatsapp",
  "email",
  "crm",
  "quotes",
  "automation",
] as const

type ServiceKey = (typeof serviceKeys)[number]

function ServiceCard({ serviceKey }: { serviceKey: ServiceKey }) {
  const t = useTranslations("services")
  const Icon = serviceIcons[serviceKey]

  return (
    <div className="group p-6 rounded-2xl bg-white shadow-sm border border-gray-200/60 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">
        {t(`items.${serviceKey}.title`)}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {t(`items.${serviceKey}.description`)}
      </p>
    </div>
  )
}

export function Services() {
  const t = useTranslations("services")

  return (
    <section id="services" className="relative bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1216px] mx-auto px-6 lg:px-0">
        {/* Header - Alinhado à esquerda */}
        <div className="mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-white bg-accent rounded-full mb-5">
            Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-5 leading-tight max-w-3xl">
            {t("title")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid - 5 colunas desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {serviceKeys.map((key) => (
            <ServiceCard key={key} serviceKey={key} />
          ))}
        </div>
      </div>
    </section>
  )
}
