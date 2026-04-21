export default function Home() {
  return (
    <div className="flex flex-col flex-1">

      {/* Nav */}
      <header style={{ borderBottom: '1px solid #e2e8f0' }}>
        <div className="max-w-5xl mx-auto px-6 py-5">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#0F2744' }}
          >
            Dstorm Consulting Inc.
          </span>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section style={{ backgroundColor: '#0F2744' }}>
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Dstorm Consulting Inc.
            </h1>
            <p className="mt-5 text-lg md:text-xl font-light max-w-2xl" style={{ color: '#a8bfd4' }}>
              Telecommunications consulting for enterprises and service providers.
            </p>
          </div>
        </section>

        {/* About */}
        <section style={{ borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <h2
                className="text-xs font-bold tracking-widest uppercase mb-6"
                style={{ color: '#0F2744' }}
              >
                About
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: '#334155' }}>
                Dstorm Consulting Inc. is a Texas-based S Corporation providing
                telecommunications consulting services. We partner with clients to evaluate,
                plan, and implement telecom solutions that meet the demands of their business.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <h2
                className="text-xs font-bold tracking-widest uppercase mb-6"
                style={{ color: '#0F2744' }}
              >
                Capabilities
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: '#334155' }}>
                Our practice covers telecommunications strategy, carrier and vendor
                evaluation, network and infrastructure planning, and ongoing technology
                advisory. Engagements are scoped to each client&apos;s needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section style={{ borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <h2
                className="text-xs font-bold tracking-widest uppercase mb-6"
                style={{ color: '#0F2744' }}
              >
                Contact
              </h2>
              <address className="not-italic font-light leading-8" style={{ color: '#334155' }}>
                <p className="font-medium text-base" style={{ color: '#1c2b3a' }}>
                  Dstorm Consulting Inc.
                </p>
                <p>24315 Devon Park Dr</p>
                <p>Katy, TX 77493</p>
                <p className="mt-4">
                  Phone:{' '}
                  <a
                    href="tel:2816501442"
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                    style={{ color: '#1c2b3a' }}
                  >
                    281-650-1442
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:thomas@dstormconsulting.com"
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                    style={{ color: '#1c2b3a' }}
                  >
                    thomas@dstormconsulting.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0F2744' }}>
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span className="text-sm font-light" style={{ color: '#7a9ab5' }}>
            © 2026 Dstorm Consulting Inc. All rights reserved.
          </span>
          <div className="flex gap-5 text-sm font-light" style={{ color: '#7a9ab5' }}>
            <a
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
