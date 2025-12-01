export const locales = ["fr", "en", "pt", "es"] as const
export const defaultLocale = "fr" as const

export type Locale = (typeof locales)[number]
