import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPulse from '@/components/HeroPulse'

export const metadata: Metadata = {
  title: 'Dstorm Consulting | Telecom Consulting for Texas Businesses',
  description:
    'Independent telecom consulting for enterprises and growing businesses across Texas. Audit your spend, modernize your infrastructure, manage your carriers through one trusted partner.',
}

const SERVICES = [
  {
    slug: 'voip',
    title: 'VoIP and hosted phone',
    description: 'Cloud-based voice that replaces aging PBX hardware with flexible, scalable phone systems configured for your team.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    slug: 'dedicated-internet',
    title: 'Dedicated internet',
    description: 'Business-grade connectivity with guaranteed bandwidth, symmetrical speeds, and SLA-backed uptime from national and regional carriers.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="2" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M7.76 7.76a6 6 0 0 0 0 8.49" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
      </svg>
    ),
  },
  {
    slug: 'shared-internet',
    title: 'Shared internet and broadband',
    description: 'Cost-effective connectivity for smaller sites, branch offices, and backup circuits across cable, DSL, and fiber options.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: 'sdwan',
    title: 'SD-WAN and network management',
    description: 'Software-defined networking that improves uptime across locations, prioritizes critical traffic, and reduces MPLS dependency.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M8 5h8M5 8v8M19 8v8M8 19h8" />
      </svg>
    ),
  },
  {
    slug: 'security',
    title: 'Network security',
    description: 'Firewalls, SASE, zero-trust frameworks, and endpoint protections matched to your industry, size, and compliance requirements.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    slug: 'carrier-management',
    title: 'Carrier and vendor management',
    description: 'Ongoing oversight of telecom contracts, billing audits, renewal negotiations, and carrier escalations across all your providers.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    slug: 'tem',
    title: 'Telecom expense management',
    description: 'Detailed review of spend across voice, data, mobile, and cloud services to identify unused lines, billing mistakes, and redundant costs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
]

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

      {/* Services teaser */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="font-semibold text-navy mb-3"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
          >
            What we do.
          </h2>
          <p className="text-muted max-w-xl mb-10" style={{ fontSize: '1rem' }}>
            Seven practice areas covering everything your business needs from its telecom stack.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map(({ slug, title, description, icon }) => (
              <div
                key={slug}
                className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow bg-white"
              >
                <div className="text-accent mb-3">{icon}</div>
                <h3 className="font-semibold text-navy mb-2 text-base">{title}</h3>
                <p className="text-muted leading-relaxed mb-4" style={{ fontSize: '0.875rem' }}>
                  {description}
                </p>
                <Link
                  href={`/services#${slug}`}
                  className="text-accent hover:text-accent-dark font-medium transition-colors inline-flex items-center gap-1"
                  style={{ fontSize: '0.875rem' }}
                >
                  Learn more <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
            ))}
          </div>
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

          {/*
            LANDSCAPE PHOTO PLACEHOLDER
            Recommended: 1200 × 900 px (4:3), JPEG or WebP
            Depict: Thomas with a client, field consultation, or professional office setting
            Replace this div with a Next.js <Image> component once the photo is ready.
          */}
          <div
            className="w-full rounded-xl border border-border bg-bg flex items-center justify-center"
            style={{ aspectRatio: '4 / 3' }}
          >
            <div className="text-center py-8">
              <p className="font-medium text-muted" style={{ fontSize: '0.9375rem' }}>
                Photo: Thomas with a client or in the field
              </p>
              <p className="text-muted mt-1" style={{ fontSize: '0.8125rem' }}>
                Recommended 1200 × 900 px (4:3)
              </p>
            </div>
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
