import WhatsAppButton from '../components/WhatsAppButton.jsx'

/**
 * The opening screen: copy on the left, the logo in the middle, the call to
 * action on the right — the design's three columns.
 *
 * `overflow-x-clip` contains the decorative blobs, which are positioned
 * outside the hero's box and would otherwise widen the page on a narrow
 * screen.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-x-clip bg-cream pt-5 lg:pt-12">
      {/* Pale organic shapes in the top corners. Decoration only, and the
          first thing dropped when the screen gets tight. */}
      <Blob className="-left-[180px] hidden sm:block" />
      <Blob className="-right-[180px] hidden scale-x-[-1] sm:block" />

      <div className="wrap relative z-10 grid min-h-[420px] items-center gap-6 py-8 text-center lg:min-h-[620px] lg:grid-cols-[minmax(0,1.05fr)_auto_minmax(0,0.8fr)] lg:gap-10 lg:py-0 lg:text-left">
        {/* On a phone the logo comes first: it is the brand, and it is what
            should greet somebody before any wording does. */}
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-3.5">Nanny In Paradise</p>
          {/* The break is the design's own: two lines, not four. Kept
              explicit rather than left to the browser, which wraps it
              differently at every width. */}
          <h1 className="mb-5 text-[28px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:whitespace-nowrap lg:text-[46px] xl:text-[50px]">
            Trusted Agency For
            <br />
            Professional Nannies
          </h1>
          <p className="mx-auto max-w-[34ch] text-[15px] text-ink-soft lg:mx-0 lg:text-lg">
            Nanny in paradise is your trusted agency for professional nannies
            and a full range of life style services.
          </p>
        </div>

        <div className="order-1 justify-self-center lg:order-2">
          <img
            src="/img/logo.png"
            width={548}
            height={548}
            alt="Nanny In Paradise — a crawling baby with a pink heart"
            className="w-[200px] sm:w-[280px] lg:w-[420px]"
            fetchPriority="high"
          />
        </div>

        <div className="order-3 justify-self-center lg:justify-self-end">
          <p className="mb-4 text-xl font-semibold uppercase tracking-[0.01em] sm:text-2xl lg:whitespace-nowrap lg:text-[27px]">
            Ready To Join
          </p>
          <WhatsAppButton />
        </div>
      </div>

      <ToyStrip className="mt-3 lg:mt-7" />
    </section>
  )
}

function Blob({ className = '' }) {
  return (
    <svg
      viewBox="0 0 420 300"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute -top-[70px] z-0 w-[340px] opacity-50 blur-[18px] lg:w-[620px] ${className}`}
    >
      <path
        d="M-20 40C60-30 190-10 250 40s110 90 60 150-200 70-260 20-90-110-70-170Z"
        fill="#F4EFD9"
        opacity=".55"
      />
      <path
        d="M40 8C110-20 210 6 246 62"
        stroke="#E6DFC0"
        strokeWidth="2"
        fill="none"
        opacity=".8"
      />
    </svg>
  )
}

/** The toy artwork that runs under the hero and again above the footer. */
export function ToyStrip({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`toy-strip aspect-[1440/209] w-full ${className}`}
    />
  )
}
