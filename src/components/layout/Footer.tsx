"use client"

import { Heart, Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from "next-intl"
import { Logo } from "@/components/ui/Logo"

const serviceLinks = [
  { key: "landing", href: "#services" },
  { key: "sites", href: "#services" },
  { key: "ecommerce", href: "#services" },
  { key: "automation", href: "#services" },
]

const companyLinks = [
  { key: "about", href: "#why-us" },
  { key: "process", href: "#process" },
  { key: "contact", href: "#contact" },
]

export function Footer() {
  const t = useTranslations("footer")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-white/10">
      <div className="w-full max-w-[1216px] mx-auto px-6 lg:px-0 py-12 lg:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">{t("description")}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {t("sections.services.title")}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {t(`sections.services.items.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {t("sections.company.title")}
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {t(`sections.company.items.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {t("sections.contact.title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t("sections.contact.email")}`}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  {t("sections.contact.email")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t("sections.contact.phone").replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  {t("sections.contact.phone")}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                {t("sections.contact.location")}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <span>© {currentYear} WebSignature.</span>
              <span>{t("copyright")}</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <span>{t("madeWith")}</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>{t("in")}</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <a
                href="/mentions-legales"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200"
              >
                {t("legal.mentions")}
              </a>
              <a
                href="/politique-confidentialite"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200"
              >
                {t("legal.privacy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
