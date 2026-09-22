/**
 * Three steps, in the order a family actually goes through them.
 *
 * An ordered list rather than three divs, because that is what this is —
 * and a screen reader announces the count and position for free.
 */

const STEPS = [
  {
    title: 'Tell Us What You Need',
    body: "Tap WhatsApp and share your dates, location, children's ages and preferred care schedule.",
    icon: (
      <>
        <path d="M17 13h18a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-7l-6 5v-5h-5a5 5 0 0 1-5-5v-8a5 5 0 0 1 5-5Z" />
        <circle cx="22" cy="22" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="27" cy="22" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="32" cy="22" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="13" cy="37" r="3.5" />
        <path d="M8 44c0-3 2.2-5 5-5s5 2 5 5" />
        <circle cx="25" cy="37" r="3.5" />
        <path d="M20 44c0-3 2.2-5 5-5s5 2 5 5" />
      </>
    ),
  },
  {
    title: 'Get Suitable Options',
    body: 'System will respond with available nanny options and relevant information.',
    icon: (
      <>
        <rect x="10" y="8" width="20" height="32" rx="3" />
        <path d="M18 12h4" />
        <circle cx="20" cy="24" r="6" />
        <path d="m17.4 24 1.9 1.9 3.6-3.8" />
        <path d="M34 20h6v14a4 4 0 0 1-4 4h-6" />
      </>
    ),
  },
  {
    title: 'Confirm On WhatsApp',
    body: 'Continue the conversation, confirm the details and arrange the childcare service.',
    icon: (
      <>
        <circle cx="17" cy="14" r="5" />
        <path d="M9 40V29a8 8 0 0 1 16 0v11" />
        <circle cx="33" cy="17" r="4" />
        <path d="M27 40V31a6 6 0 0 1 12 0v9" />
        <path d="M9 40h30" />
      </>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-20 lg:py-[110px]">
      <header className="mx-auto mb-8 max-w-[660px] px-5 text-center lg:mb-[54px]">
        <p className="eyebrow mb-2.5">How It Works</p>
        <h2 className="section-title mb-4">Everything Starts With A Message</h2>
        <p className="text-[15px] text-ink-soft lg:text-lg">
          Instead of complicated booking forms, families can simply message us
          on WhatsApp and tell us their dates, location, children&apos;s ages
          and care needs.
        </p>
      </header>

      <div className="wrap">
        <ol className="grid list-none gap-4 p-0 lg:grid-cols-3 lg:gap-6">
          {STEPS.map(({ title, body, icon }) => (
            <li key={title} className="rounded-[14px] bg-cream-card p-7 lg:p-10">
              <span className="mb-6 grid h-[62px] w-[62px] place-items-center rounded-full bg-[#FDF3D0] text-ink">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                  aria-hidden="true"
                >
                  {icon}
                </svg>
              </span>
              <h3 className="mb-3.5 text-xl font-medium leading-[1.12] tracking-[-0.02em] lg:text-[25px]">
                {title}
              </h3>
              <p className="text-[15px] text-ink-soft lg:text-[17px]">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
