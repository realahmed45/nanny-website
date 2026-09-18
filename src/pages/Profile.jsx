import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { SERVICES, ADVANTAGES } from '../data/content'

export default function Profile() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="WHO ARE WE?"
        blurb="Nanny in Paradise connects families in Bali with verified, experienced nannies — booked entirely over WhatsApp."
      />

      <section className="py-20">
        <div className="shell grid gap-10 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-16">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-3">BUILT FOR<br />THE ISLAND</h2>
          </div>
          <p className="max-w-[62ch] self-start text-[13.5px] leading-[1.9] text-ink/75">
            Finding childcare somewhere new is hard: you do not know who to trust, and the people who
            do know are not the people you have met yet. Nanny in Paradise exists to close that gap.
            Every nanny is identity-checked, reference-checked and interviewed before her profile is
            shown to anyone, and the whole booking happens in WhatsApp — the one app every family
            here already has open.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <p className="eyebrow">What we offer</p>
          <h2 className="section-title mt-3">CORE SERVICES</h2>

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

      <section className="pb-20">
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

      <section className="pb-24">
        <div className="shell rounded-2xl bg-brand-sky px-8 py-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-deep">NEED A NANNY?</h2>
          <p className="mx-auto mt-3 max-w-[48ch] text-[13px] leading-relaxed text-ink/70">
            Tell us the days you need covered and how old your children are, and we will send you
            verified nannies who are free.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-md bg-brand-deep px-8 py-3 text-[13px] font-semibold tracking-wide text-white transition hover:brightness-95"
          >
            BOOK NOW
          </Link>
        </div>
      </section>
    </>
  )
}
