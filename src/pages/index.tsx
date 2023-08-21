import { useI18n } from '$/locales'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const t = useI18n();

  return <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
    <h1>{t('metadata.title')}</h1>
    <p>{t('metadata.description')}</p>
  </main>
}
