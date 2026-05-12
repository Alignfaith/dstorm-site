'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-surface border border-border rounded-xl p-8 text-center">
        <div className="text-accent mb-3 flex justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="font-semibold text-navy mb-2 text-lg">Message sent</h3>
        <p className="text-muted" style={{ fontSize: '0.9375rem' }}>
          Thank you. Thomas will be in touch within one business day.
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-5 text-sm text-accent hover:text-accent-dark transition-colors font-medium"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Web3Forms access key — paste your key from web3forms.com/dashboard here */}
      <input type="hidden" name="access_key" value="PASTE_YOUR_WEB3FORMS_KEY_HERE" />
      <input type="hidden" name="subject" value="New inquiry from dstormconsulting.com" />
      <input type="hidden" name="from_name" value="DStorm Consulting Website" />
      {/* Honeypot field to block spam */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors bg-white"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Corp"
            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors bg-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="281-555-0100"
            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your current setup, what's not working, or what you're trying to accomplish."
          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors bg-white resize-none"
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please try again or email us directly at thomas@dstormconsulting.com.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-medium rounded-full px-8 py-3 transition-colors text-sm w-full sm:w-auto"
      >
        {state === 'submitting' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
