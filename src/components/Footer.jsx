import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const socials = [
  { label: 'Facebook', path: 'M13.2 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14 3.5c-2.4 0-4 1.45-4 4.12V9.9H7.3V13H10v8h3.2Z' },
  { label: 'Instagram', path: 'M12 2.9c2.95 0 3.3.01 4.47.06 1.08.05 1.66.23 2.05.38.51.2.88.44 1.27.83.39.39.63.76.83 1.27.15.39.33.97.38 2.05.05 1.17.06 1.52.06 4.47s-.01 3.3-.06 4.47c-.05 1.08-.23 1.66-.38 2.05a3.4 3.4 0 0 1-.83 1.27c-.39.39-.76.63-1.27.83-.39.15-.97.33-2.05.38-1.17.05-1.52.06-4.47.06s-3.3-.01-4.47-.06c-1.08-.05-1.66-.23-2.05-.38a3.4 3.4 0 0 1-1.27-.83 3.4 3.4 0 0 1-.83-1.27c-.15-.39-.33-.97-.38-2.05C2.91 15.3 2.9 14.95 2.9 12s.01-3.3.06-4.47c.05-1.08.23-1.66.38-2.05.2-.51.44-.88.83-1.27.39-.39.76-.63 1.27-.83.39-.15.97-.33 2.05-.38C8.7 2.91 9.05 2.9 12 2.9Zm0 5.43a3.67 3.67 0 1 0 0 7.34 3.67 3.67 0 0 0 0-7.34Zm0 6.05a2.38 2.38 0 1 1 0-4.76 2.38 2.38 0 0 1 0 4.76Zm4.67-6.2a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0Z' },
  { label: 'WhatsApp', path: 'M12 3.2a8.7 8.7 0 0 0-7.4 13.3L3.4 21l4.6-1.2A8.7 8.7 0 1 0 12 3.2Zm0 1.6a7.1 7.1 0 1 1-3.7 13.1l-.3-.2-2.7.7.7-2.6-.2-.3A7.1 7.1 0 0 1 12 4.8Zm-3.2 3.6c-.15 0-.4.06-.6.3-.2.25-.78.77-.78 1.86 0 1.1.8 2.16.9 2.3.12.15 1.55 2.47 3.83 3.36 1.9.75 2.28.6 2.7.56.4-.04 1.3-.53 1.5-1.05.18-.52.18-.96.13-1.05-.06-.1-.2-.15-.43-.27-.22-.1-1.3-.64-1.5-.72-.2-.07-.35-.1-.5.12-.14.22-.56.71-.69.86-.13.14-.25.16-.47.05-.22-.1-.94-.34-1.79-1.1-.66-.58-1.1-1.3-1.24-1.52-.12-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.1-.13.14-.22.21-.37.08-.15.04-.27-.02-.38-.05-.1-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.42Z' },
]

export default function Footer() {
  return (
    <footer className="relative bg-brand-mist">
      <div className="shell py-12">
        <div className="flex flex-col gap-8 border-b border-black/5 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Nanny in Paradise" className="h-9 w-auto" />
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-silver-700">NANNY IN </span>
                <span className="text-brand-blue">PARADISE</span>
              </span>
            </div>
            <p className="mt-2 pl-[3rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/55">
              Verified Childcare in Bali
            </p>
          </div>

          <nav className="flex items-center gap-3 text-[12px] font-semibold text-ink/70">
            <Link to="/" className="transition hover:text-brand-deep">HOME</Link>
            <span className="text-black/15">|</span>
            <Link to="/profile" className="transition hover:text-brand-deep">PROFILE</Link>
            <span className="text-black/15">|</span>
            <Link to="/contact" className="transition hover:text-brand-deep">CONTACT</Link>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-ink/50">All rights reserved 2026</p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-8 w-8 place-items-center rounded-full text-ink/55 transition hover:bg-brand-blue hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
