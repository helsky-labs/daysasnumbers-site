import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'DaysAsNumbers - Visual Time Awareness',
    template: '%s | DaysAsNumbers',
  },
  description: '365 squares. One year. Watch them fill as days pass. Feel time. Make it count.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  keywords: ['memento mori', 'time', 'life', 'mindfulness', 'reflection', 'stoic', 'productivity', 'visual', 'minimal', 'ios app'],
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
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
