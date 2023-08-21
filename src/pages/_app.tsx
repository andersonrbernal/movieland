import { I18nProvider } from '../locales'
import { AppProps } from 'next/app'
import en from '$/locales/en'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Movieland",
  description: "Movieland"
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider locale={pageProps.locale} fallbackLocale={en}>
      <Component {...pageProps} />
    </I18nProvider>
  )
}
