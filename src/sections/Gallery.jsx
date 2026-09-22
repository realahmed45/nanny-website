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
            src="/img/gallery/g14.jpeg"
            alt="A nanny crouching in the grass with two small children in red sun hats"
            ratio="aspect-[4/3] sm:aspect-[62/93]"
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <Tile src="/img/gallery/g17.jpeg" alt="A nanny reading on a sofa with two young girls" />
            <Tile src="/img/gallery/g05.jpeg" alt="A nanny blowing bubbles in a garden with a toddler" />
            <Tile src="/img/gallery/g10.jpeg" alt="A nanny playing indoors with a baby" />
            <Tile src="/img/gallery/g01.jpeg" alt="A nanny and a young girl pointing at the sky in a sunlit field" />
          </div>
        </div>

        {/* Row 2 — two wide frames. */}
        <div className="mb-5 grid gap-5 sm:grid-cols-2">
          <Tile
            src="/img/gallery/g02.jpeg"
            alt="A nanny building with toy blocks beside a boy on a living room floor"
            ratio="aspect-[16/10]"
          />
          <Tile
            src="/img/gallery/g00.jpeg"
            alt="A girl hugging her nanny while a toddler plays nearby"
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
            src="/img/gallery/g18.jpeg"
            alt="A child running towards a smiling nanny in a park"
            ratio="aspect-[3/2]"
          />
          <Tile
            src="/img/gallery/g06.jpeg"
            alt="A nanny feeding a baby seated on the floor"
            ratio="aspect-[3/2]"
          />
        </div>

        {/* Row 4 — four narrow frames. */}
        <div className="mb-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
          <Tile src="/img/gallery/g15.jpeg" alt="A nanny cradling a sleeping baby" ratio="aspect-[4/3] lg:aspect-[2/3]" />
          <Tile src="/img/gallery/g13.jpeg" alt="A child playing with toy animals at a table" ratio="aspect-[4/3] lg:aspect-[2/3]" />
          <Tile src="/img/gallery/g16.jpeg" alt="Children playing with bubble wands on a picnic blanket" ratio="aspect-[4/3] lg:aspect-[2/3]" />
          <Tile src="/img/gallery/g12.jpeg" alt="A nanny walking through long grass with a child" ratio="aspect-[4/3] lg:aspect-[2/3]" />
        </div>

        {/* Row 5 — two wide frames. */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Tile src="/img/gallery/g03.jpeg" alt="A nanny lifting a baby in a garden" ratio="aspect-[3/2]" />
          <Tile src="/img/gallery/g11.jpeg" alt="A nanny lifting a baby into the air on a sunny path" ratio="aspect-[3/2]" />
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
        src="/img/gallery/g08.jpeg"
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
