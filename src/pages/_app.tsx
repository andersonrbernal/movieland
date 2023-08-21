import { I18nProvider } from '../locales'
import { AppProps } from 'next/app'
import en from '$/locales/en'
import { Metadata } from 'next'
import { Flowbite } from "flowbite-react"
import "../styles/globals.css"
import { Spinner } from 'flowbite-react';
import Layout from './layout'

export const metadata: Metadata = {
  title: "Movieland",
  description: "Movieland"
}

export default function App({ Component, pageProps }: AppProps) {
  const fallback = <Spinner className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4' size='xl' />

  return (
    <I18nProvider locale={pageProps.locale} fallbackLocale={en} fallback={fallback}>
      <Flowbite>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Flowbite>
    </I18nProvider>
  )
}
