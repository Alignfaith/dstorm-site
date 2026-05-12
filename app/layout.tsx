import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Dstorm Consulting',
    default: 'Dstorm Consulting | Telecom Consulting for Texas Businesses',
  },
  description:
    'Independent telecom consulting for enterprises and growing businesses across Texas. Audit your spend, modernize your infrastructure, manage your carriers through one trusted partner.',
  metadataBase: new URL('https://dstormconsulting.com'),
  openGraph: {
    title: 'Dstorm Consulting | Telecom Consulting for Texas Businesses',
    description:
      'Independent telecom consulting for enterprises and growing businesses across Texas.',
    type: 'website',
    url: 'https://dstormconsulting.com',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-bg text-ink antialiased font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
