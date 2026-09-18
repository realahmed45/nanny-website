// Compact hero used by the inner pages so they share the home page's wash
// without repeating the giant wordmark.
export default function PageHero({ eyebrow, title, blurb }) {
  return (
    <section className="hero-wash pt-32 pb-16 sm:pt-36">
      <div className="shell text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">{title}</h1>
        {blurb && (
          <p className="mx-auto mt-4 max-w-[58ch] text-[13.5px] leading-[1.9] text-ink/70">{blurb}</p>
        )}
      </div>
    </section>
  )
}
