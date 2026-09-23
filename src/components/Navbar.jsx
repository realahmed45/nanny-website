import { useEffect, useState } from 'react'
import { whatsappUrl } from '../lib/whatsapp.js'

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'What We Provide' },
]

export default function Navbar() {
  const [active, setActive] = useState('#top')

  /**
   * Highlight whichever section is actually on screen.
   *
   * The margins fire the change around the upper third, so the highlight
   * moves as a section takes over the view rather than when it first peeks
   * in at the bottom.
   */
  useEffect(() => {
    const targets = LINKS
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    if (!targets.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      id="top"
      className="sticky top-0 z-50 flex justify-center bg-cream px-4 pt-3 sm:pt-[22px]"
    >
      <nav aria-label="Main">
        <ul className="flex flex-wrap items-center justify-center gap-1 rounded-[20px] bg-cream-nav px-2.5 py-2 sm:gap-3 sm:rounded-full sm:px-4 lg:gap-[30px] lg:px-[26px] lg:py-2.5">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-2 text-[15px] transition-colors hover:bg-black/5 sm:px-3.5 lg:text-lg ${
                  active === href ? 'font-medium' : 'font-normal'
                }`}
              >
                {label}
              </a>
            </li>
          ))}

          <li>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-2 text-[15px] transition-colors hover:bg-black/5 sm:px-3.5 lg:text-lg"
            >
              Join Us
              <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-brand text-ink">
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" className="h-[13px] w-[13px]"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
