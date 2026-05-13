import type { Metadata } from 'next'
import Link from 'next/link'
import {
  VoipDiagram,
  DedicatedInternetDiagram,
  SharedInternetDiagram,
  SdWanDiagram,
  SecurityDiagram,
  CarrierManagementDiagram,
  TemDiagram,
} from '@/components/ServiceDiagrams'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Telecom consulting services for Texas businesses: VoIP, dedicated internet, SD-WAN, network security, carrier management, and telecom expense management.',
}

const SERVICES = [
  {
    slug: 'voip',
    title: 'VoIP and hosted phone',
    Diagram: VoipDiagram,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    description:
      'Cloud-based voice solutions that replace aging PBX hardware with flexible, scalable phone systems. We help clients evaluate providers, migrate existing lines, and configure features including auto attendants, call routing, voicemail to email, and softphone clients for remote and hybrid workers.',
    outcomes: [
      'Lower monthly per-seat cost compared to on-premise hardware maintenance',
      'Features your team can manage without dedicated IT involvement',
      'Mobility for remote and hybrid workers through softphone and mobile apps',
      'Built-in redundancy through cloud failover and geographic diversity',
    ],
    engagement:
      'We assess your current system, identify the right providers for your size and geography, and manage the full transition from contract through cutover.',
  },
  {
    slug: 'dedicated-internet',
    title: 'Dedicated internet',
    Diagram: DedicatedInternetDiagram,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="2" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M7.76 7.76a6 6 0 0 0 0 8.49" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
      </svg>
    ),
    description:
      'Business-grade internet connections with guaranteed bandwidth, symmetrical upload and download speeds, and SLA-backed uptime. We source fiber, fixed wireless, and coax options from national and regional carriers based on availability and performance requirements at each location.',
    outcomes: [
      'Predictable performance for VoIP, video conferencing, and cloud applications',
      'SLA guarantees with financial remedies for downtime and degraded service',
      'Symmetrical speeds that support upload-heavy workflows and backups',
      'Provider and circuit diversity for built-in redundancy',
    ],
    engagement:
      'We inventory your locations, run availability checks across our full carrier catalog, and present options with price-to-performance comparisons so you can make an informed decision.',
  },
  {
    slug: 'shared-internet',
    title: 'Shared internet and broadband',
    Diagram: SharedInternetDiagram,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
    description:
      'Cost-effective connectivity for smaller sites, branch offices, and backup circuits. We compare cable, DSL, and fiber broadband options across providers, negotiate pricing, and coordinate installation to minimize downtime at every location.',
    outcomes: [
      'Right-sized bandwidth at the right price for each individual location',
      'Fast provisioning compared to enterprise-grade dedicated circuits',
      'Reliable failover options to protect business continuity',
      'Consolidated procurement across multiple broadband providers',
    ],
    engagement:
      'A practical fit for businesses with mixed-size locations that need enterprise circuits at primary sites and cost-effective broadband at smaller or remote ones.',
  },
  {
    slug: 'sdwan',
    title: 'SD-WAN and network management',
    Diagram: SdWanDiagram,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M8 5h8M5 8v8M19 8v8M8 19h8" />
      </svg>
    ),
    description:
      'Software-defined networking that prioritizes traffic, improves uptime across multiple locations, and reduces reliance on traditional MPLS. We assess network topology, recommend platforms, and manage vendor deployment from procurement through go-live.',
    outcomes: [
      'Improved application performance across all locations through intelligent traffic routing',
      'Centralized visibility and control from a single management plane',
      'Reduced WAN costs compared to legacy MPLS circuits',
      'Simplified management that reduces burden on internal IT teams',
    ],
    engagement:
      'We size the deployment, select the right platform for your scale and budget, and manage the vendor relationship through implementation, testing, and ongoing support.',
  },
  {
    slug: 'security',
    title: 'Network security',
    Diagram: SecurityDiagram,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    description:
      'Protection for business networks against threats, intrusions, and data loss. We advise on firewalls, managed detection and response, secure access service edge (SASE), zero-trust frameworks, and end-user protections including email filtering and endpoint security. Every recommendation is matched to the client\'s size, industry, and compliance requirements.',
    outcomes: [
      'Layered protection across network perimeter, endpoint, and identity',
      'Compliance alignment for healthcare, financial services, and other regulated industries',
      'Reduced attack surface without over-engineering the security stack',
      'Ongoing monitoring through managed service providers in our partner catalog',
    ],
    engagement:
      'We start with a threat profile and compliance conversation, then recommend a security framework that addresses your actual risk posture and scales with your business.',
  },
  {
    slug: 'carrier-management',
    title: 'Carrier and vendor management',
    Diagram: CarrierManagementDiagram,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    description:
      'Ongoing oversight of telecom contracts, billing, and service issues. We audit invoices for errors, negotiate renewals, handle escalations with carriers, and serve as a single point of contact across all your providers. You stop getting passed between carrier support queues.',
    outcomes: [
      'Recovered billing credits on overcharges and provisioning errors',
      'Improved renewal terms through competitive leverage and market knowledge',
      'Faster resolution of service issues through direct carrier escalation paths',
      'One contact to call instead of managing multiple carrier portals and 800 numbers',
    ],
    engagement:
      'We become your de facto telecom department. You call us; we handle the carriers.',
  },
  {
    slug: 'tem',
    title: 'Telecom expense management',
    Diagram: TemDiagram,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    description:
      'Detailed review of telecom spend across voice, data, mobile, and cloud services. We identify unused lines, billing mistakes, and redundant services, then help clients consolidate and renegotiate to reduce monthly costs. Most clients see measurable savings within the first 90 days.',
    outcomes: [
      'Average 15 to 20 percent reduction in monthly telecom spend',
      'Complete inventory of all active services, circuits, and contracts',
      'Elimination of unused lines, features, and zombie services',
      'A clean billing baseline and documented service catalog going forward',
    ],
    engagement:
      'We audit your current invoices and service inventory, produce a savings analysis, and implement approved changes. There is no upfront cost to you.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-surface border-b border-border py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            What we do
          </p>
          <h1
            className="font-bold text-navy max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            Telecom services built around your business.
          </h1>
          <p className="mt-4 text-muted max-w-xl leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            Seven practice areas covering voice, data, connectivity, security, and cost management. We handle every layer of your telecom stack so you don't have to.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <section className="bg-bg py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16 items-start">

            {/* Sticky sidebar nav (desktop only) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
                  Jump to
                </p>
                <nav className="flex flex-col gap-1" aria-label="Service sections">
                  {SERVICES.map(({ slug, title }) => (
                    <a
                      key={slug}
                      href={`#${slug}`}
                      className="text-sm text-muted hover:text-accent transition-colors py-1.5 border-l-2 border-transparent hover:border-accent pl-3"
                    >
                      {title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Service detail sections */}
            <div className="divide-y divide-border">
              {SERVICES.map(({ slug, title, icon, description, outcomes, engagement, Diagram }) => (
                <div key={slug} id={slug} className="py-12 first:pt-0 scroll-mt-28">

                  {/* Two-column layout: text left, diagram right */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start">

                    {/* Text column */}
                    <div>
                      <div className="flex items-start gap-4 mb-5">
                        <div className="text-accent mt-0.5 shrink-0">{icon}</div>
                        <h2
                          className="font-semibold text-navy"
                          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', letterSpacing: '-0.01em' }}
                        >
                          {title}
                        </h2>
                      </div>

                      <p className="text-muted leading-relaxed mb-6" style={{ fontSize: '0.9375rem' }}>
                        {description}
                      </p>

                      <div className="mb-6">
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
                          What you get
                        </p>
                        <ul className="space-y-2">
                          {outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3 text-muted" style={{ fontSize: '0.9375rem' }}>
                              <span className="text-accent mt-1 shrink-0" aria-hidden="true">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-surface rounded-lg px-5 py-4 border border-border">
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1.5">
                          How we engage
                        </p>
                        <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                          {engagement}
                        </p>
                      </div>
                    </div>

                    {/* Diagram column */}
                    <div className="rounded-xl border border-border bg-surface p-5 xl:p-6">
                      <Diagram />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="font-semibold text-white mb-3"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
          >
            Not sure which services you need?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem' }}>
            Start with a free assessment. We will tell you exactly what is worth addressing and what is not.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dark text-white font-medium rounded-full px-8 py-3.5 transition-colors text-sm inline-block"
          >
            Get a free telecom assessment
          </Link>
        </div>
      </section>
    </main>
  )
}
