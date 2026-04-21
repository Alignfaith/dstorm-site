import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Dstorm Consulting Inc.',
}

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-light text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: January 1, 2026</p>

        <div className="prose prose-gray max-w-2xl font-light text-gray-700 leading-relaxed space-y-8">

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Overview</h2>
            <p>
              Dstorm Consulting Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates this website and any associated
              digital products. This Privacy Policy describes how we collect, use, and handle
              information in connection with our services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p>
              We may collect information you provide directly to us, such as your name and email
              address when you contact us. We may also collect standard server log data and
              analytics information about how visitors use our website.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">How We Use Information</h2>
            <p>
              We use information we collect to respond to inquiries, operate and improve our
              services, and communicate with you about our products. We do not sell personal
              information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Contact</h2>
            <p>
              Questions about this policy may be directed to{' '}
              <a href="mailto:thomas@dstormpg.com" className="underline underline-offset-4 hover:text-gray-900 transition-colors">
                thomas@dstormpg.com
              </a>.
            </p>
          </section>

          <p className="text-sm text-gray-400 pt-4">
            This privacy policy is a placeholder and will be updated with complete terms.
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
