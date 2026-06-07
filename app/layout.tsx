import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Libre_Baskerville, Source_Sans_3, Geist_Mono } from 'next/font/google'
import './globals.css'

const heading = Libre_Baskerville({
  variable: '--font-heading',
  weight: ['400', '700'],
  subsets: ['latin'],
})
const sans = Source_Sans_3({
  variable: '--font-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'The NewinCo, Inc. — Worldwide Attorney Search & Acquisition',
  description:
    'The NewinCo is a boutique firm specializing in the placement of top legal talent in Washington and around the world. Your navigator in the search for legal excellence.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${sans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
