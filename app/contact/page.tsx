import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Dstorm Consulting. Free telecom assessment for businesses in Texas.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-surface border-b border-border py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
            Get in touch
          </p>
          <h1
            className="font-bold text-navy max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            Start with a free telecom assessment.
          </h1>
          <p className="mt-4 text-muted max-w-xl leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            No obligation, no sales pitch. We review your current setup and tell you exactly where the opportunities are.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">

          {/* Left column: form + Calendly */}
          <div className="space-y-14">

            {/* Contact form */}
            <section>
              <h2
                className="font-semibold text-navy mb-6"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', letterSpacing: '-0.01em' }}
              >
                Send us a message
              </h2>
              <ContactForm />
            </section>

            {/* Calendly embed placeholder */}
            <section>
              <h2
                className="font-semibold text-navy mb-2"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', letterSpacing: '-0.01em' }}
              >
                Or book a time directly
              </h2>
              <p className="text-muted mb-6" style={{ fontSize: '0.9375rem' }}>
                Pick a slot that works for you and we'll connect by phone or video.
              </p>

              {/*
                CALENDLY EMBED
                Replace this placeholder div with your Calendly inline widget code.
                Example: paste the script + div from calendly.com/event_types/user/view
                Recommended embed type: Inline Widget
                Minimum height: 630px
              */}
              <div
                className="border border-border rounded-xl bg-surface flex items-center justify-center text-center"
                style={{ minHeight: '300px' }}
              >
                <div>
                  <p className="text-muted font-medium mb-1" style={{ fontSize: '0.9375rem' }}>
                    Calendly scheduling widget
                  </p>
                  <p className="text-muted" style={{ fontSize: '0.8125rem' }}>
                    Paste the Calendly inline embed code here.
                    {/* CALENDLY_URL: https://calendly.com/YOUR_USERNAME */}
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Right sidebar: NAP + Map */}
          <aside className="space-y-8 lg:sticky lg:top-28">

            {/* NAP block */}
            <div className="bg-surface border border-border rounded-xl p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-5">
                Contact information
              </p>
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-navy text-sm">Dstorm Consulting Inc.</p>
                    <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                      24315 Devon Park Dr<br />Katy, TX 77493
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-accent shrink-0" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <a
                    href="tel:2816501442"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    281-650-1442
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-accent shrink-0" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <a
                    href="mailto:thomas@dstormconsulting.com"
                    className="text-sm text-muted hover:text-accent transition-colors break-all"
                  >
                    thomas@dstormconsulting.com
                  </a>
                </div>
              </address>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                title="Dstorm Consulting office location"
                width="100%"
                height="240"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=24315+Devon+Park+Dr,+Katy+TX+77493&output=embed&z=15"
              />
            </div>

          </aside>
        </div>
      </div>
    </main>
  )
}
