import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero, { ToyStrip } from './sections/Hero.jsx'
import Gallery from './sections/Gallery.jsx'
import Services from './sections/Services.jsx'

/**
 * One page, in the order the design lays it out.
 *
 * The router is gone: every route used to render a different page, and the
 * new design is a single scroll with anchors, so the dependency earned
 * nothing but its own bundle size.
 */
export default function App() {
  return (
    <>
      {/* The nav is a row of similar-looking links; a skip link saves a
          keyboard user tabbing past all of them on every load. */}
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[100] rounded-br-[14px] bg-ink px-5 py-3 text-white focus:left-0"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Gallery />
        <Services />
        <ToyStrip />
      </main>

      <Footer />
    </>
  )
}
