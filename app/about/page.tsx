import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dstorm Consulting is a Texas-based telecom consulting firm founded by Thomas Marks. Authorized partner of Telarus and Intelisys.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-surface border-b border-border py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            About us
          </p>
          <h1
            className="font-bold text-navy max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            One partner. No markup. Vendor-neutral advice.
          </h1>
          <p className="mt-4 text-muted max-w-xl leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            Dstorm Consulting Inc. is a Texas-based telecom consulting firm. We help growing businesses and enterprises make better decisions about the infrastructure that keeps them running.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">

          {/* Main content */}
          <div className="space-y-16">

            {/* Thomas's story */}
            <section>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
                The founder
              </p>
              <h2
                className="font-semibold text-navy mb-5"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)', letterSpacing: '-0.01em' }}
              >
                Thomas Marks
              </h2>
              <div className="space-y-4 text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                <p>
                  Thomas Marks is a Texas-based telecom consultant and the founder of Dstorm Consulting Inc. He started the business to give growing companies the same access to carrier relationships and procurement leverage that large enterprises take for granted.
                </p>
                <p>
                  Before founding Dstorm, Thomas spent years navigating the vendor-heavy, commission-driven side of the telecom industry. He saw how often businesses overpaid, got locked into the wrong contracts, and had no one in their corner when service problems arose. The consulting model he built was designed to flip that dynamic: deep carrier access, no vendor preference, and a fee structure that aligns with the client's outcome rather than the carrier's revenue.
                </p>
                <p>
                  He advises clients across Texas on voice, data, connectivity, and security solutions. His goal is straightforward: make telecom decisions that are easy to understand and good for the business long-term.
                </p>
              </div>
            </section>

            {/* The business */}
            <section>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
                The business
              </p>
              <h2
                className="font-semibold text-navy mb-5"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)', letterSpacing: '-0.01em' }}
              >
                Dstorm Consulting Inc.
              </h2>
              <div className="space-y-4 text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                <p>
                  Dstorm Consulting Inc. is an S Corporation registered in Texas, headquartered in Katy, and has been operating since 2015. We serve enterprises, multi-location businesses, and growing companies that depend on reliable telecom infrastructure but don't have dedicated procurement staff or established carrier relationships.
                </p>
                <p>
                  Our clients range from healthcare organizations managing HIPAA-compliant communications across multiple facilities to professional services firms that need reliable voice and data without an IT department to manage it. What they have in common is a need for straightforward advice and someone who handles the vendor side so they can focus on their business.
                </p>
              </div>
            </section>

            {/* The agent model */}
            <section>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
                How the channel works
              </p>
              <h2
                className="font-semibold text-navy mb-5"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)', letterSpacing: '-0.01em' }}
              >
                Our Telarus and Intelisys partnerships
              </h2>
              <div className="space-y-4 text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                <p>
                  Dstorm Consulting operates as an authorized partner of Telarus and Intelisys, two of the largest master agent organizations in the telecom industry. Understanding what that means helps explain how we work and why the advisory service costs you nothing.
                </p>
                <p>
                  Master agents like Telarus and Intelisys hold direct contracts with hundreds of carriers and vendors, from national providers like AT&amp;T, Verizon, and Lumen to specialized UCaaS, SD-WAN, and security vendors. As an authorized subagent partner, Dstorm Consulting accesses that entire catalog on your behalf, vendor-neutral, with no markup.
                </p>
                <p>
                  The carriers pay a commission to the master agent when a deal closes, and a portion flows to us as the referring partner. That commission structure is how the advisory work is free to you. The carrier absorbs it as a customer acquisition cost, not your invoice.
                </p>
                <p>
                  What that means practically: you get access to a vetted, nationwide carrier catalog, a partner with a decade of experience in this procurement, and ongoing relationship management after the contract is signed. All without adding a line item to your budget.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <p className="font-semibold text-navy mb-1 text-base">Telarus</p>
                  <p className="text-muted leading-relaxed" style={{ fontSize: '0.875rem' }}>
                    One of the largest technology services distributors in North America, with contracts spanning hundreds of carriers and cloud providers.
                  </p>
                </div>
                <div className="bg-surface border border-border rounded-lg p-6">
                  <p className="font-semibold text-navy mb-1 text-base">Intelisys</p>
                  <p className="text-muted leading-relaxed" style={{ fontSize: '0.875rem' }}>
                    A leading master agent and ScanSource company, known for deep carrier relationships and a broad vendor portfolio across voice, data, and cloud.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28">

            <div className="w-full rounded-xl overflow-hidden border border-border">
              <Image
                src="/thomas-marks.png"
                alt="Thomas Marks, founder of Dstorm Consulting Inc."
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="bg-surface border border-border rounded-lg p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
                Quick facts
              </p>
              <dl className="space-y-3">
                {[
                  ['Entity', 'S Corporation'],
                  ['State', 'Texas'],
                  ['Founded', '2015'],
                  ['Headquarters', 'Katy, TX'],
                  ['Partnerships', 'Telarus, Intelisys'],
                  ['Carrier access', '200+ providers'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted">{label}</dt>
                    <dd className="text-navy font-medium text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-surface border border-border rounded-lg p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
                Part of the DStorm family
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: 'DStorm Digital',
                    href: 'https://dstormdigital.com',
                    desc: 'Digital strategy and web services',
                    cta: null,
                  },
                  {
                    label: 'AlignFaith',
                    href: 'https://alignfaith.com',
                    desc: 'Faith-based community platform',
                    cta: null,
                  },
                  {
                    label: 'Thomas Marks Group',
                    href: 'https://thomasmarksgroup.com',
                    desc: 'Portfolio and parent brand',
                    cta: null,
                  },
                  {
                    label: 'Covenant CRM',
                    href: 'https://covenantcrm.com/sign-up',
                    desc: 'AI-powered CRM for solo sales professionals. A modern sales workspace that drafts agent-voiced follow-ups, surfaces re-engagement opportunities, and respects rep-level data privacy across multi-user organizations. Private beta in progress.',
                    cta: 'Join the waitlist',
                  },
                ].map(({ label, href, desc, cta }) => (
                  <div key={href} className={cta ? 'pt-4 border-t border-border' : ''}>
                    <p className="text-sm font-medium text-navy mb-0.5">{label}</p>
                    <p className="text-muted leading-relaxed mb-2" style={{ fontSize: '0.8125rem' }}>
                      {desc}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-dark transition-colors font-medium inline-flex items-center gap-1"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      {cta ?? label} <span aria-hidden="true">&#8594;</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-lg p-6">
              <p className="text-white font-semibold mb-2 text-base">Ready to talk?</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}>
                A free assessment takes about 30 minutes and gives you a clear picture of where you stand.
              </p>
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white font-medium rounded-full px-5 py-2.5 transition-colors text-sm inline-block w-full text-center"
              >
                Get a free assessment
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
