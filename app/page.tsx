export default function Home() {
  return (
    <div className="flex flex-col flex-1">

      {/* Nav */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-widest uppercase text-gray-800">
            Dstorm Consulting Inc.
          </span>
          <nav className="flex gap-6 text-sm text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 py-24 md:py-36">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight">
            Dstorm Consulting Inc.
          </h1>
          <p className="mt-6 text-xl text-gray-500 font-light max-w-xl">
            Strategic consulting and digital product development.
          </p>
        </section>

        <hr className="border-gray-100 max-w-4xl mx-auto px-6" />

        {/* About */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">
            About
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl font-light">
            Dstorm Consulting Inc. is a Texas-based S Corporation providing strategic
            consulting, technology development, and digital product services. We build
            and operate software products that solve real problems for real people.
          </p>
        </section>

        <hr className="border-gray-100 max-w-4xl mx-auto px-6" />

        {/* Portfolio */}
        <section id="work" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">
            Our Work
          </h2>
          <div className="max-w-2xl">
            <div className="border-l-2 border-gray-200 pl-6">
              <p className="text-base text-gray-700 leading-relaxed font-light">
                <span className="font-medium text-gray-900">ALIGN</span>{' '}
                <span className="text-gray-400">(alignfaith.com)</span>
                {' '}— A faith-centered relationship readiness platform built on the
                Six Pillars of Relationship Fitness. Operated as a DBA of Dstorm
                Consulting Inc.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-100 max-w-4xl mx-auto px-6" />

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">
            Contact
          </h2>
          <address className="not-italic text-base text-gray-700 font-light leading-8">
            <p className="font-medium text-gray-900">Dstorm Consulting Inc.</p>
            <p>5604 1st Street</p>
            <p>Katy, TX 77493</p>
            <p className="mt-4">
              Email:{' '}
              <a
                href="mailto:thomas@dstormpg.com"
                className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
              >
                thomas@dstormpg.com
              </a>
            </p>
          </address>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-gray-400">
          <span>© 2026 Dstorm Consulting Inc. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-600 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
