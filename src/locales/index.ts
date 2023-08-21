import { createI18n } from 'next-international'

export const { useI18n, useScopedI18n, I18nProvider, getLocaleProps, defineLocale, useChangeLocale, useCurrentLocale } = createI18n({
  en: () => import('./en'),
  'pt-br': () => import('./pt-br')
})