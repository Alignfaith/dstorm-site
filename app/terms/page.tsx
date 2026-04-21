import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use — Dstorm Consulting Inc.',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <Link href="/" className="text-sm font-semibold tracking-widest uppercase text-gray-800 hover:text-gray-600 transition-colors">
            Dstorm Consulting Inc.
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-light text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: January 1, 2026</p>

        <div className="prose prose-gray max-w-2xl font-light text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Acceptance</h2>
            <p>
              By accessing this website, you agree to be bound by these Terms of Use. If you
              do not agree with any part of these terms, please discontinue use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Use of the Site</h2>
            <p>
              This website is provided for informational purposes about Dstorm Consulting Inc.
              and its services. You may not use this site for any unlawful purpose or in any
              way that could damage, disable, or impair the site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including text, design, and code, is the property
              of Dstorm Consulting Inc. and may not be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
            <p>
              Dstorm Consulting Inc. makes no warranties regarding the accuracy or completeness
              of information on this site and shall not be liable for any damages arising from
              its use.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Texas, without regard to
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Contact</h2>
            <p>
              Questions about these terms may be directed to{' '}
              <a href="mailto:thomas@dstormpg.com" className="underline underline-offset-4 hover:text-gray-900 transition-colors">
                thomas@dstormpg.com
              </a>.
            </p>
          </section>

          <p className="text-sm text-gray-400 pt-4">
            These terms are a placeholder and will be updated with complete terms.
          </p>

        </div>
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-gray-400">
          © 2026 Dstorm Consulting Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
