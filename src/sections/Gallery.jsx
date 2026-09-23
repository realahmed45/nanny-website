import WhatsAppButton from '../components/WhatsAppButton.jsx'

/**
 * The gallery, laid out row by row exactly as the design places it: a tall
 * frame beside a 2×2 block, then pairs and a row of four, with the photo
 * banner sitting between them.
 *
 * Every tile carries a fixed aspect ratio so the grid holds its shape while
 * the photographs load, rather than reflowing the page underneath somebody
 * who has already started reading.
 */

const Tile = ({ src, alt, ratio = '', className = '' }) => (
  <figure className={`m-0 overflow-hidden rounded-[14px] bg-neutral-200 ${ratio} ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04] motion-reduce:hover:scale-100"
    />
  </figure>
)

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-[110px]">
      <header className="mx-auto mb-8 max-w-[660px] px-5 text-center lg:mb-[54px]">
        <p className="eyebrow mb-2.5">Gallery</p>
        <h2 className="section-title mb-4">Warm Care, Happy Moments</h2>
        <p className="text-[15px] text-ink-soft lg:text-lg">
          A visual look at the people, families and Bali lifestyle around our
          nanny service.
        </p>
      </header>

      <div className="wrap">
        {/* Row 1 — a tall frame, then a 2×2 block that stretches to match its
            height so the two sides finish level. */}
        <div className="mb-5 grid gap-5 sm:grid-cols-2 sm:items-stretch">
          <Tile
            src="/img/gallery/beach.jpg"
            alt="A nanny walking along the beach at sunset with a small boy"
            ratio="aspect-[4/3] sm:aspect-[62/93]"
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <Tile src="/img/gallery/pool.jpg" alt="A nanny in a pool holding a toddler wearing armbands" />
            <Tile src="/img/gallery/komodo.jpg" alt="A nanny and a little girl walking through a Balinese playground" />
            <Tile src="/img/gallery/homework.jpg" alt="A nanny helping a girl with homework at a laptop" />
            <Tile src="/img/gallery/reading.jpg" alt="A nanny reading an Indonesian storybook with a toddler" />
          </div>
        </div>

        {/* Row 2 — two wide frames. */}
        <div className="mb-5 grid gap-5 sm:grid-cols-2">
          <Tile
            src="/img/gallery/highchair.jpg"
            alt="A young girl in a high chair being served lunch"
            ratio="aspect-[16/10]"
          />
          <Tile
            src="/img/gallery/bench.jpg"
            alt="A nanny laughing with a toddler on a park bench"
            ratio="aspect-[16/10]"
          />
        </div>
      </div>

      {/* The banner sits inside the gallery, between its rows. */}
      <div className="wrap">
        <Banner />
      </div>

      <div className="wrap">
        {/* Row 3 — two wide frames. */}
        <div className="mb-5 grid gap-5 sm:grid-cols-2">
          <Tile
            src="/img/gallery/flying.jpg"
            alt="A nanny lifting a laughing child on the grass"
            ratio="aspect-[3/2]"
          />
          <Tile
            src="/img/gallery/swing.jpg"
            alt="A nanny pushing a boy on a playground swing"
            ratio="aspect-[3/2]"
          />
        </div>

        {/* Row 4 — four narrow frames. */}
        <div className="mb-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
          <Tile src="/img/gallery/seesaw.jpg" alt="A grandmother and a girl on a seesaw in a park" ratio="aspect-[4/3] lg:aspect-[2/3]" />
          <Tile src="/img/gallery/cooking.jpg" alt="A nanny helping a little girl with her meal" ratio="aspect-[4/3] lg:aspect-[2/3]" />
          <Tile src="/img/gallery/hug.jpg" alt="A nanny in a headscarf hugging a smiling girl" ratio="aspect-[4/3] lg:aspect-[2/3]" />
          <Tile src="/img/gallery/baby.jpg" alt="A nanny in a headscarf holding a baby in a garden" ratio="aspect-[4/3] lg:aspect-[2/3]" />
        </div>

        {/* Row 5 — two wide frames. */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Tile src="/img/gallery/tablet.jpg" alt="A nanny teaching two boys using a tablet outdoors" ratio="aspect-[3/2]" />
          <Tile src="/img/gallery/sandcastle.jpg" alt="A nanny and a small boy building a sandcastle" ratio="aspect-[3/2]" />
        </div>
      </div>
    </section>
  )
}

/**
 * The photo banner.
 *
 * The overlay is not decoration: the underlying photograph is a bright,
 * sunlit garden, and the design's yellow text is unreadable on it without
 * something to sit against.
 */
function Banner() {
  return (
    <div className="relative isolate my-8 grid min-h-[320px] place-items-center overflow-hidden rounded-[20px] lg:my-[54px] lg:min-h-[520px]">
      <img
        src="/img/gallery/banner.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/[0.42]" />

      <div className="px-5 py-8 text-center text-brand lg:py-[60px]">
        <p className="eyebrow mb-3.5 text-brand opacity-95">Nanny In Paradise</p>
        <h2 className="mb-4 text-2xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-3xl lg:text-[44px]">
          Traveling To Bali With Kids?
          <br />
          We Are Here To Help You.
        </h2>
        <p className="mb-7 text-base sm:text-lg lg:text-[23px]">
          Enjoy your holiday more through our trusted,
          <br className="hidden sm:inline" /> experienced and reliable nannies
        </p>
        <WhatsAppButton variant="outline" />
      </div>
    </div>
  )
}
