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

        {/* Services */}
        <section style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
            <h2
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: '#0F2744' }}
            >
              Services
            </h2>
            <p className="text-base font-light mb-12 max-w-2xl" style={{ color: '#334155' }}>
              Solutions across voice, data, connectivity, and security for businesses of every size.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid #e2e8f0', backgroundColor: '#e2e8f0' }}>
              {[
                {
                  title: 'VoIP and Hosted Phone Systems',
                  body: 'Cloud-based voice solutions that replace aging PBX hardware with flexible, scalable phone systems. We help clients evaluate providers, migrate existing lines, and configure features such as auto attendants, call routing, voicemail to email, and softphone clients for remote workers.',
                },
                {
                  title: 'Dedicated Internet Access',
                  body: 'Business-grade internet connections with guaranteed bandwidth, symmetrical upload and download speeds, and service level agreements. We source fiber, fixed wireless, and coax options from national and regional carriers based on each location\'s availability and performance requirements.',
                },
                {
                  title: 'Shared Internet and Broadband',
                  body: 'Cost-effective connectivity for smaller sites, branch offices, and backup circuits. We compare cable, DSL, and fiber broadband options, negotiate pricing, and coordinate installation to minimize downtime.',
                },
                {
                  title: 'SD-WAN and Network Management',
                  body: 'Software-defined networking that prioritizes traffic, improves uptime across multiple locations, and reduces reliance on traditional MPLS. We assess network topology, recommend platforms, and manage vendor deployment.',
                },
                {
                  title: 'Network Security',
                  body: 'Protection for business networks against threats, intrusions, and data loss. We advise on firewalls, managed detection and response, secure access service edge (SASE), zero trust frameworks, and end-user protections including email filtering and endpoint security. Recommendations are matched to each client\'s size, industry, and compliance needs.',
                },
                {
                  title: 'Carrier and Vendor Management',
                  body: 'Ongoing oversight of telecom contracts, billing, and service issues. We audit invoices for errors, negotiate renewals, handle escalations with carriers, and maintain a single point of contact across multiple providers.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-8"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <h3 className="text-sm font-semibold mb-3" style={{ color: '#0F2744' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#334155' }}>
                    {service.body}
                  </p>
                </div>
              ))}

              {/* Service 7 — full width */}
              <div
                className="p-8 md:col-span-2"
                style={{ backgroundColor: '#f8fafc' }}
              >
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#0F2744' }}>
                  Telecom Expense Management
                </h3>
                <p className="text-sm font-light leading-relaxed max-w-2xl" style={{ color: '#334155' }}>
                  Detailed review of telecom spend across voice, data, mobile, and cloud services.
                  We identify unused lines, billing mistakes, and redundant services, and help
                  clients consolidate to reduce monthly costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section style={{ borderBottom: '1px solid #e2e8f0' }}>
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
            <h2
              className="text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: '#0F2744' }}
            >
              Partners
            </h2>
            <div className="flex justify-center gap-12 mb-10 flex-wrap">
              {['Telarus', 'Intelisys'].map((name) => (
                <span
                  key={name}
                  className="text-lg font-light tracking-wide"
                  style={{ color: '#0F2744' }}
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-base font-light leading-relaxed max-w-2xl mx-auto" style={{ color: '#334155' }}>
              Dstorm Consulting Inc. works with leading telecom master solution providers
              including Telarus and Intelisys, giving clients access to a broad portfolio
              of nationwide and regional carriers, cloud communications providers, and
              managed service vendors. This reach allows us to design solutions that fit
              each client&apos;s geography, budget, and performance needs.
            </p>
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
