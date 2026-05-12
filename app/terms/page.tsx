import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Dstorm Consulting Inc.',
}

export default function TermsPage() {
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
            Terms of use
          </h1>
          <p className="mt-2 text-muted text-sm">Last updated January 1, 2026</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="max-w-2xl space-y-10">

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Acceptance</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              By accessing this website you agree to be bound by these terms of use.
              If you do not agree, please discontinue use of the site.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Use of this site</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              This website is provided for informational purposes about Dstorm
              Consulting Inc. and its services. You may not use this site for any
              unlawful purpose or in any way that could damage or impair its operation.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Intellectual property</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              All content on this site is the property of Dstorm Consulting Inc.
              and may not be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Limitation of liability</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              Dstorm Consulting Inc. makes no warranties regarding the accuracy or
              completeness of information on this site and shall not be liable for
              any damages arising from its use.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Governing law</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              These terms are governed by the laws of the State of Texas.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-navy mb-3 text-base">Contact</h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              Questions about these terms may be directed to{' '}
              <a
                href="mailto:thomas@dstormconsulting.com"
                className="text-accent hover:text-accent-dark transition-colors underline underline-offset-4"
              >
                thomas@dstormconsulting.com
              </a>.
            </p>
          </section>

          <p className="text-muted border-t border-border pt-8" style={{ fontSize: '0.8125rem' }}>
            This is a placeholder. Full terms to be added.
          </p>

        </div>
      </div>
    </main>
  )
}
