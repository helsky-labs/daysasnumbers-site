import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://daysasnumbers.app'

export const metadata: Metadata = {
  title: {
    default: 'DaysAsNumbers - Visual Time Awareness',
    template: '%s | DaysAsNumbers',
  },
  description: '365 squares. One year. Watch them fill as days pass. Feel time. Make it count.',
  metadataBase: new URL(siteUrl),
  keywords: ['memento mori', 'time', 'life', 'mindfulness', 'reflection', 'stoic', 'productivity', 'visual', 'minimal', 'ios app'],
  authors: [{ name: 'Hel Rabelo', url: 'https://github.com/helrabelo' }],
  creator: 'Hel Rabelo',
  publisher: 'Helsky Labs',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DaysAsNumbers - Visual Time Awareness',
    description: '365 squares. One year. Watch them fill as days pass. Feel time. Make it count.',
    url: '/',
    siteName: 'DaysAsNumbers',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DaysAsNumbers - Visual Time Awareness',
    description: '365 squares. One year. Watch them fill as days pass.',
    creator: '@helrabelo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'lifestyle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          defer
          src="https://analytics.helsky-labs.com/script.js"
          data-website-id="b6221c75-105c-4f15-a48b-857175d660c8"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
