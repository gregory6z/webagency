import { defineRouting } from "next-intl/routing"
import { defaultLocale, locales } from "./config"

export const routing = defineRouting({
  locales,
  defaultLocale, // "fr" como padrão
  localePrefix: "as-needed",
  localeDetection: true,
})
