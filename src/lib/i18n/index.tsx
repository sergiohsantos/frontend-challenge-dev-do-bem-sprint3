import React from "react"
import { ptBR, type Translations } from "./locales/pt-BR"

type Locale = "pt-BR"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const staticI18n: I18nContextType = {
  locale: "pt-BR",
  setLocale: () => undefined,
  t: ptBR,
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function useI18n() {
  return staticI18n
}

export function useTranslation() {
  return { t: ptBR }
}

export { type Locale, type Translations }
