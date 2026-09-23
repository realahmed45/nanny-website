import WhatsAppButton, { WhatsAppIcon } from './WhatsAppButton.jsx'
import { whatsappUrl } from '../lib/whatsapp.js'

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'How It Works' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] py-8 lg:py-12">
      <div className="wrap flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <img
            src="/img/logo.png"
            width={120}
            height={120}
            alt=""
            loading="lazy"
            className="w-[72px] lg:w-[104px]"
          />
          <div>
            <p className="text-xl font-semibold leading-tight lg:text-[28px]">
              Nanny In Paradise
            </p>
            <p className="mb-4 text-ink-soft">
              Childcare made simple for families in Bali.
            </p>
            <WhatsAppButton variant="sm" />
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="flex items-center gap-3.5 text-sm uppercase tracking-[0.04em] lg:text-[17px]"
        >
          {LINKS.map(({ href, label }, i) => (
            <span key={href} className="flex items-center gap-3.5">
              <a href={href} className="transition-colors hover:text-brand-ink">
                {label}
              </a>
              {i < LINKS.length - 1 && (
                <span aria-hidden="true" className="text-neutral-400">|</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      <div className="wrap mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center lg:mt-11">
        <p className="text-ink-soft">All rights reserved 2026</p>

        {/* The agency runs on WhatsApp, so each of these opens the same
            conversation until real social accounts exist to point at. */}
        <div className="flex gap-4">
          <Social label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px]" aria-hidden="true">
              <path d="M14 8.5V7c0-.8.2-1.2 1.4-1.2H17V3h-2.6C11.3 3 10.3 4.4 10.3 6.8v1.7H8V11h2.3v10H14V11h2.5l.4-2.5H14Z" />
            </svg>
          </Social>
          <Social label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[22px] w-[22px]" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </Social>
          <Social label="WhatsApp">
            <WhatsAppIcon className="h-[22px] w-[22px]" />
          </Social>
        </div>
      </div>
    </footer>
  )
}

function Social({ label, children }) {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-[34px] w-[34px] place-items-center transition-all hover:-translate-y-0.5 hover:text-brand-ink"
    >
      {children}
    </a>
  )
}
