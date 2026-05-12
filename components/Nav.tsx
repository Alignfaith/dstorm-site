'use client'

import Link from 'next/link'
import { useState } from 'react'
import LogoMark from '@/components/LogoMark'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Dstorm Consulting home">
          <LogoMark variant="dark" size={32} />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-navy font-bold text-base tracking-tight">DSTORM</span>
            <span
              className="text-navy font-normal text-[0.55rem] uppercase"
              style={{ letterSpacing: '0.15em' }}
            >
              CONSULTING
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-ink hover:text-accent transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm bg-accent hover:bg-accent-dark text-white rounded-full px-5 py-2 transition-colors font-medium"
          >
            Get a free assessment
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span
            className="block w-6 h-px bg-navy transition-all duration-200"
            style={{ transform: open ? 'translateY(5px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-6 h-px bg-navy transition-all duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px bg-navy transition-all duration-200"
            style={{ transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white" id="mobile-menu">
          <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-ink hover:text-accent transition-colors py-1"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm bg-accent hover:bg-accent-dark text-white rounded-full px-5 py-2.5 text-center transition-colors font-medium mt-1"
              onClick={() => setOpen(false)}
            >
              Get a free assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
