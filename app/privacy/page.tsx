import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dstorm Consulting Inc.',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm mb-12" style={{ color: '#94a3b8' }}>
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8 font-light leading-relaxed" style={{ color: '#334155' }}>
            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Overview</h2>
              <p>
                Dstorm Consulting Inc. operates this website and any associated services.
                This Privacy Policy describes how we collect, use, and handle information
                in connection with our business.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Information We Collect</h2>
              <p>
                We may collect information you provide directly, such as your name and
                contact information when you reach out to us. We may also collect standard
                server log data and basic analytics about site usage.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>How We Use Information</h2>
              <p>
                Information we collect is used to respond to inquiries and conduct our
                business. We do not sell personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#1c2b3a' }}>Contact</h2>
              <p>
                Questions about this policy may be directed to{' '}
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
              This is a placeholder. Full policy to be added.
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
