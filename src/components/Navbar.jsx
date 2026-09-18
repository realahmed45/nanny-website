import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Smooth-scroll to a section, going home first when we are not there.
 *
 * The sections live on the home page, so from another route the route has to
 * change before the element exists — otherwise the scroll silently does
 * nothing, which reads as a dead link.
 */
function useSectionNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (id) => {
    const go = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (pathname === '/') {
      go()
    } else {
      navigate('/')
      // A single frame is not enough; the target section has to mount first.
      setTimeout(go, 120)
    }
  }
}

export default function Navbar() {
  const goTo = useSectionNav()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const pill = 'rounded-full px-5 py-2 text-[12px] font-semibold tracking-wide transition'
  const idle = 'text-ink/70 hover:text-brand-deep'
  const active = 'bg-brand-sky text-brand-deep'

  const goHome = () => (pathname === '/'
    ? window.scrollTo({ top: 0, behavior: 'smooth' })
    : navigate('/'))

  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-6">
      <nav className="shell flex justify-center">
        <div className="flex items-center gap-1 rounded-full bg-white/70 px-2 py-1.5 shadow-sm ring-1 ring-black/5 backdrop-blur">
          <button type="button" onClick={goHome} className={`${pill} ${pathname === '/' ? active : idle}`}>
            HOME
          </button>

          <button type="button" onClick={() => goTo('about')} className={`${pill} ${idle}`}>
            PROFILE
          </button>

          {/* CONTACT and the arrow are one control — same destination, so they
              sit flush and light up together rather than reading as two
              separate links that happen to be adjacent. */}
          <span className="group flex items-center">
            <button
              type="button"
              onClick={() => goTo('contact')}
              className={`${pill} pr-2.5 ${idle} group-hover:text-brand-deep`}
            >
              CONTACT
            </button>
            <button
              type="button"
              onClick={() => goTo('contact')}
              aria-label="Jump to the contact form"
              className="mr-0.5 grid h-8 w-8 place-items-center rounded-full bg-brand-blue text-white transition group-hover:bg-brand-deep"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </span>
        </div>
      </nav>
    </header>
  )
}
