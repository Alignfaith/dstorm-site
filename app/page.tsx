import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPulse from '@/components/HeroPulse'

export const metadata: Metadata = {
  title: 'Dstorm Consulting | Telecom Consulting for Texas Businesses',
  description:
    'Independent telecom consulting for enterprises and growing businesses across Texas. Audit your spend, modernize your infrastructure, manage your carriers through one trusted partner.',
}

const CARRIER_CATEGORIES = [
  {
    label: 'Carriers and connectivity',
    brands: ['AT&T', 'Verizon', 'Lumen', 'Comcast Business', 'Spectrum Business'],
  },
  {
    label: 'Voice and UCaaS',
    brands: ['RingCentral', '8x8', 'Zoom', 'Mitel'],
  },
  {
    label: 'Contact center',
    brands: ['Five9'],
  },
  {
    label: 'Security and network',
    brands: ['Cisco Meraki', 'Fortinet'],
  },
]

const WHY_ITEMS = [
  {
    title: 'Vendor-neutral',
    body: 'We have no preferred carrier. Every recommendation is based on your specific needs, budget, and geography.',
  },
  {
    title: 'Single point of contact',
    body: 'One partner manages all your telecom relationships, contracts, and escalations so you never get passed around.',
  },
  {
    title: 'Carrier reach',
    body: 'Through Telarus and Intelisys, we access 200+ carriers and vendors nationwide. Small consultancies cannot match that.',
  },
  {
    title: 'No cost to you',
    body: 'Carriers pay us a commission for the introduction. The advisory and management work is free to your business.',
  },
]

const PROCESS_STEPS = [
  { number: '01', title: 'Discover', body: 'We learn your locations, current carriers, contract status, and pain points.' },
  { number: '02', title: 'Audit', body: 'We review invoices, contracts, and service inventory to find waste and gaps.' },
  { number: '03', title: 'Recommend', body: 'We present carrier options with side-by-side comparisons and a clear rationale.' },
  { number: '04', title: 'Implement', body: 'We coordinate the order, installation, and cutover so your team stays focused.' },
  { number: '05', title: 'Manage', body: 'We stay on as your ongoing telecom contact for billing, renewals, and issues.' },
]

const INDUSTRIES = [
  'Healthcare',
  'Multi-location retail',
  'Professional services',
  'Manufacturing',
  'Hospitality',
  'SMB',
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bg py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 items-center">
          <div className="md:col-span-3">
            <h1
              className="font-bold text-ink leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              Telecom that works as hard as your business.
            </h1>
            <p className="mt-5 text-muted leading-relaxed max-w-xl" style={{ fontSize: '1.125rem' }}>
              Independent telecom consulting for enterprises and growing businesses across Texas. Audit your spend, modernize your infrastructure, manage your carriers through one trusted partner.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white font-medium rounded-full px-7 py-3 transition-colors text-sm inline-block"
              >
                Get a free telecom assessment
              </Link>
              <Link
                href="/services"
                className="text-ink hover:text-accent font-medium text-sm transition-colors inline-flex items-center gap-1.5"
              >
                See how we work
                <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <HeroPulse />
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            Partner ecosystem
          </p>
          <h2
            className="font-semibold text-navy mb-10"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
          >
            Carriers and vendors we quote.
          </h2>

          <div className="divide-y divide-border">
            {CARRIER_CATEGORIES.map(({ label, brands }) => (
              <div
                key={label}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-6 items-start"
              >
                <div className="md:sticky md:top-24 pt-0.5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted">
                    {label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {brands.map((brand) => (
                    <div
                      key={brand}
                      className="vendor-cell rounded-lg px-6 py-5 flex flex-col items-center justify-center gap-1.5 min-w-[120px]"
                    >
                      <span className="text-sm font-medium text-ink text-center">{brand}</span>
                      <span
                        className="font-mono tracking-widest uppercase text-muted"
                        style={{ fontSize: '0.6rem', opacity: 0.45 }}
                      >
                        LOGO
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted mt-6">
            Through our Telarus and Intelisys partnerships, we have access to 200+ carriers and vendors.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            What we do
          </p>
          <h2
            className="font-semibold text-navy mb-5 mx-auto max-w-2xl"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
          >
            Seven practice areas, one trusted partner.
          </h2>
          <p className="text-muted mx-auto max-w-2xl mb-8 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            We work across the full telecom stack — voice, internet, SD-WAN, security, carrier management, and expense optimization — so your business stays focused on what it does best.
          </p>
          <Link
            href="/services"
            className="bg-accent hover:bg-accent-dark text-white font-medium rounded-full px-7 py-3 transition-colors text-sm inline-block"
          >
            See all services
          </Link>
        </div>
      </section>

      {/* Why DStorm */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="font-semibold text-navy mb-10 text-center"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
          >
            Why DStorm.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {WHY_ITEMS.map(({ title, body }) => (
              <div key={title}>
                <h3 className="font-semibold text-navy mb-2 text-base">{title}</h3>
                <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="font-semibold text-navy mb-12 text-center"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
          >
            How we work.
          </h2>
          <div className="relative">
            {/* Horizontal connector line (desktop only) */}
            <div
              className="absolute hidden lg:block bg-border"
              style={{ top: '20px', left: '10%', right: '10%', height: '1px' }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {PROCESS_STEPS.map(({ number, title, body }) => (
                <div key={number} className="flex flex-col items-center text-center relative">
                  <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center bg-white relative z-10 mb-3">
                    <span className="text-accent font-semibold text-xs">{number}</span>
                  </div>
                  <h3 className="font-semibold text-navy mb-1.5 text-base">{title}</h3>
                  <p className="text-muted leading-relaxed" style={{ fontSize: '0.875rem' }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="font-semibold text-navy mb-8 text-center"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
          >
            Industries we serve.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="border border-border rounded-full px-5 py-2 text-muted bg-white"
                style={{ fontSize: '0.9375rem' }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="font-semibold text-white mb-3"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
          >
            Ready to optimize your telecom?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem' }}>
            Free, no-obligation assessment.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dark text-white font-medium rounded-full px-8 py-3.5 transition-colors text-sm inline-block"
          >
            Schedule a consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
