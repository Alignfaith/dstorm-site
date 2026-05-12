import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Dstorm Consulting Inc.',
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-surface border-b border-border py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-6"
          >
            <span aria-hidden="true">&#8592;</span> Back to home
          </Link>
          <h1
            className="font-bold text-navy"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
          >
            Privacy policy
          </h1>
          <p className="mt-2 text-muted text-sm">Last updated January 1, 2026</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="max-w-2xl space-y-10">

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Overview</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              Dstorm Consulting Inc. operates this website and any associated services.
              This privacy policy describes how we collect, use, and handle information
              in connection with our business.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Information we collect</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              We may collect information you provide directly, such as your name and
              contact information when you reach out to us. We may also collect standard
              server log data and basic analytics about site usage.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">How we use information</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              Information we collect is used to respond to inquiries and conduct our
              business. We do not sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Contact</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              Questions about this policy may be directed to{' '}
              <a
                href="mailto:thomas@dstormconsulting.com"
                className="text-accent hover:text-accent-dark transition-colors underline underline-offset-4"
              >
                thomas@dstormconsulting.com
              </a>.
            </p>
          </section>

          <p className="text-muted border-t border-border pt-8" style={{ fontSize: '0.8125rem' }}>
            This is a placeholder. Full policy to be added.
          </p>

        </div>
      </div>
    </main>
  )
}
