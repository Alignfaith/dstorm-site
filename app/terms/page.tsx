import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | Dstorm Consulting Inc.',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1">
      <header style={{ borderBottom: '1px solid #e2e8f0' }}>
        <div className="max-w-5xl mx-auto px-6 py-5">
          <Link
            href="/"
            className="text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-60"
            style={{ color: '#0F2744' }}
          >
            Dstorm Consulting Inc.
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-light mb-2" style={{ color: '#0F2744' }}>
            Terms of Use
          </h1>
          <p className="text-sm mb-12" style={{ color: '#94a3b8' }}>
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8 font-light leading-relaxed" style={{ color: '#334155' }}>
            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Acceptance</h2>
              <p>
                By accessing this website you agree to be bound by these Terms of Use.
                If you do not agree, please discontinue use of the site.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Use of This Site</h2>
              <p>
                This website is provided for informational purposes about Dstorm
                Consulting Inc. and its services. You may not use this site for any
                unlawful purpose or in any way that could damage or impair its operation.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Intellectual Property</h2>
              <p>
                All content on this site is the property of Dstorm Consulting Inc.
                and may not be reproduced without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Limitation of Liability</h2>
              <p>
                Dstorm Consulting Inc. makes no warranties regarding the accuracy or
                completeness of information on this site and shall not be liable for
                any damages arising from its use.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Texas.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Contact</h2>
              <p>
                Questions about these terms may be directed to{' '}
                <a
                  href="mailto:thomas@dstormconsulting.com"
                  className="underline underline-offset-4 hover:opacity-60 transition-opacity"
                  style={{ color: '#1c2b3a' }}
                >
                  thomas@dstormconsulting.com
                </a>.
              </p>
            </section>

            <p className="text-xs pt-4" style={{ color: '#94a3b8' }}>
              This is a placeholder. Full terms to be added.
            </p>
          </div>
        </div>
      </main>

      <footer style={{ backgroundColor: '#0F2744' }}>
        <div className="max-w-5xl mx-auto px-6 py-8">
          <span className="text-sm font-light" style={{ color: '#7a9ab5' }}>
            © 2026 Dstorm Consulting Inc. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}
