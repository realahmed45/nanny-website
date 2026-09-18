import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Icon from '../components/Icon'
import ContactSection from '../components/ContactSection'
import { SERVICES, ADVANTAGES } from '../data/content'

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero-wash relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
        <div className="shell">
          <h1 className="text-center text-[11vw] font-extrabold leading-[0.95] tracking-[-0.02em] text-ink sm:text-[104px]">
            NANNY IN PARADISE
          </h1>

          <div className="relative mt-4 grid items-center gap-8 sm:mt-0 sm:grid-cols-3">
            <div className="order-2 sm:order-1">
              <p className="text-lg font-semibold text-ink">Trusted care. Zero friction.</p>
              <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-ink/70">
                Nanny in Paradise connects families in Bali with verified, experienced nannies —
                booked entirely over WhatsApp.
              </p>
            </div>

            {/* The logo overlaps the wordmark in the design, so it is pulled up. */}
            <div className="order-1 flex justify-center sm:order-2 sm:mt-2">
              <img src={logo} alt="Nanny in Paradise logo" className="w-[200px] max-w-full sm:w-[260px]" />
            </div>

            <div className="order-3 sm:justify-self-end sm:text-right">
              <p className="text-2xl font-extrabold leading-tight text-brand-blue">
                NEED A<br />NANNY?
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block rounded-md bg-brand-deep px-8 py-3 text-[13px] font-semibold tracking-wide text-white shadow-sm transition hover:brightness-95"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      {/* scroll-mt clears the floating navbar, which would otherwise cover the
          heading when this section is jumped to. */}
      <section id="about" className="scroll-mt-24 py-24">
        <div className="shell grid gap-10 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-16">
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="section-title mt-3">WHO<br />ARE<br />WE?</h2>
          </div>
          <p className="max-w-[62ch] self-start text-[13.5px] leading-[1.9] text-ink/75">
            Nanny in Paradise is a childcare service built for families living in and visiting Bali.
            Every nanny on our books is identity-checked, reference-checked and interviewed before
            her profile is shown to anyone. Families search, compare and book entirely through
            WhatsApp — no app, no portal, no forms — and we stay with the booking from the first
            message to the last day, including finding cover when plans change.
          </p>
        </div>
      </section>

      {/* ---------- CORE SERVICES ---------- */}
      <section className="pb-24">
        <div className="shell">
          <div className="grid gap-10 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-16">
            <div>
              <p className="eyebrow">What we offer</p>
              <h2 className="section-title mt-3">CORE<br />SERVICES</h2>
            </div>
            <p className="max-w-[62ch] self-start text-[13.5px] leading-[1.9] text-ink/75">
              Care arranged around how families actually live — the planned weeks and the sudden
              gaps alike. Whether you need a steady presence every day or someone this afternoon,
              the same verified pool and the same clear pricing apply.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <article key={s.title} className="rounded-xl bg-brand-mist p-7 transition hover:shadow-md">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-brand-blue shadow-sm">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-5 text-[13.5px] font-semibold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink/65">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="pb-24">
        <div className="shell">
          <p className="eyebrow">Why choose us?</p>
          <h2 className="section-title mt-3 max-w-[16ch]">THE NANNY IN PARADISE ADVANTAGE</h2>

          <div className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2">
            {ADVANTAGES.map((a) => (
              <div key={a.title}>
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-sky text-brand-blue">
                  <Icon name={a.icon} />
                </span>
                <h3 className="mt-4 text-[13.5px] font-semibold text-brand-blue">{a.title}</h3>
                <p className="mt-1.5 max-w-[46ch] text-[12.5px] leading-relaxed text-ink/70">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PEACE OF MIND ---------- */}
      <section className="pb-24">
        <div className="shell grid items-center gap-12 sm:grid-cols-2">
          {/* An illustration rather than a photograph: no stock image of a real
              child, and nothing that implies a family we do not have consent from. */}
          <div className="overflow-hidden rounded-xl bg-brand-mist p-10">
            <svg viewBox="0 0 400 300" className="h-[340px] w-full" role="img" aria-label="A carer and a child under a sheltering arc">
              <defs>
                <linearGradient id="pmSilver" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F7F9FB" />
                  <stop offset="1" stopColor="#B7C3D2" />
                </linearGradient>
                <linearGradient id="pmWarm" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7FB2E8" />
                  <stop offset="1" stopColor="#3D7FC4" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="150" r="118" fill="url(#pmSilver)" opacity="0.5" />
              <ellipse cx="160" cy="98" rx="44" ry="30" fill="#fff" opacity="0.6" transform="rotate(-28 160 98)" />
              <path d="M112 196a88 88 0 0 1 176 0" fill="none" stroke="#5B6B80" strokeWidth="14" strokeLinecap="round" />
              <path d="M112 196a88 88 0 0 1 176 0" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
              <circle cx="200" cy="158" r="32" fill="url(#pmWarm)" />
              <circle cx="200" cy="158" r="32" fill="none" stroke="#fff" strokeWidth="4" opacity="0.8" />
              <ellipse cx="188" cy="146" rx="10" ry="7" fill="#fff" opacity="0.45" transform="rotate(-25 188 146)" />
              <circle cx="300" cy="78" r="15" fill="#fff" opacity="0.75" stroke="#B7C3D2" strokeWidth="1.6" />
              <circle cx="328" cy="112" r="9"  fill="#fff" opacity="0.7"  stroke="#B7C3D2" strokeWidth="1.3" />
              <circle cx="78"  cy="112" r="11" fill="#fff" opacity="0.7"  stroke="#B7C3D2" strokeWidth="1.4" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">Peace of mind comes first</p>
            <h2 className="section-title mt-3 max-w-[13ch]">CHECKED BEFORE YOU EVER SEE HER.</h2>
            <p className="mt-5 max-w-[46ch] text-[13px] leading-[1.9] text-ink/75">
              No profile reaches a family until her documents, certificates and references have been
              reviewed. You see her experience, languages, skills and verification status up front,
              and you can message her before you commit to anything.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
