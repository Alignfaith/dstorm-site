import Link from 'next/link'
import Image from 'next/image'

const SITE_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

const FAMILY_LINKS = [
  { label: 'DStorm Digital', href: 'https://dstormdigital.com' },
  { label: 'ALIGN', href: 'https://alignfaith.com' },
  { label: 'Thomas Marks Group', href: 'https://thomasmarksgroup.com' },
  { label: 'Covenant CRM', href: 'https://covenantcrm.com/sign-up' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="flex flex-col items-start leading-none gap-1 mb-5"
              aria-label="Dstorm Consulting home"
            >
              <Image
                src="/dstorm-logo.png"
                alt="DSTORM"
                width={320}
                height={100}
                style={{ width: '160px', height: 'auto' }}
              />
              <span
                className="font-medium text-[0.55rem] uppercase text-white"
                style={{ letterSpacing: '0.15em' }}
              >
                CONSULTING
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Telecom consulting for the businesses that depend on it.
            </p>
          </div>

          <div>
            <p
              className="text-[0.65rem] font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {SITE_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p
              className="text-[0.65rem] font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Part of the DStorm family
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Family companies">
              {FAMILY_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
        >
          <span>© 2026 Dstorm Consulting Inc.</span>
          <address className="not-italic flex flex-col sm:flex-row gap-3 sm:gap-5">
            <span>24315 Devon Park Dr, Katy TX 77493</span>
            <a href="tel:2816501442" className="hover:text-white transition-colors">
              281-650-1442
            </a>
            <a href="mailto:thomas@dstormconsulting.com" className="hover:text-white transition-colors">
              thomas@dstormconsulting.com
            </a>
          </address>
        </div>
      </div>
    </footer>
  )
}
