import { whatsappUrl } from '../lib/whatsapp.js'

/** The WhatsApp glyph, kept here so every button draws the same one. */
export function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.7c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1 1.1-3.9-.3-.4a10.7 10.7 0 1 1 9.2 5zm6-8c-.3-.2-1.9-1-2.2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7 0a8.7 8.7 0 0 1-2.6-1.6 9.7 9.7 0 0 1-1.8-2.2c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.3 3.4a13 13 0 0 0 5 4.4c.7.3 1.2.5 1.7.6a4 4 0 0 0 1.8.1c.6 0 1.9-.7 2.1-1.5s.3-1.3.2-1.5z" />
    </svg>
  )
}

/**
 * The call to action, in the two forms the design uses:
 *
 *   dark    — black pill with the green WhatsApp mark, on cream
 *   outline — yellow outline over the photo banner, where a solid fill
 *             would hide the photograph behind it
 */
export default function WhatsAppButton({ variant = 'dark', className = '', children }) {
  const base =
    'inline-flex items-center gap-2.5 rounded-[10px] font-medium leading-none ' +
    'transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0'

  const styles = {
    dark: 'bg-ink text-white px-6 py-4 text-[17px] shadow-[0_4px_14px_rgba(0,0,0,.16)] hover:bg-black hover:shadow-[0_8px_22px_rgba(0,0,0,.22)]',
    sm: 'bg-ink text-white px-[18px] py-3 text-[15px] shadow-[0_4px_14px_rgba(0,0,0,.16)] hover:bg-black',
    outline:
      'border-2 border-brand text-brand px-10 py-4 text-base sm:text-lg lg:text-xl hover:bg-brand hover:text-ink',
  }

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children || 'Join On WhatsApp'}
      {variant !== 'outline' && (
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-wa text-white">
          <WhatsAppIcon />
        </span>
      )}
    </a>
  )
}
