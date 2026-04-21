import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dstorm Consulting Inc. | Telecommunications Consulting',
  description: 'Texas-based telecommunications consulting for enterprises and service providers.',
  metadataBase: new URL('https://dstormconsulting.com'),
  openGraph: {
    title: 'Dstorm Consulting Inc. | Telecommunications Consulting',
    description: 'Texas-based telecommunications consulting for enterprises and service providers.',
    type: 'website',
    url: 'https://dstormconsulting.com',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-white text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  )
}
