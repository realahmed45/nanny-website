// Line icons drawn to match the design's light, two-tone look. Keeping them
// inline avoids an icon-font dependency for eight glyphs.
const PATHS = {
  cradle: 'M4 14h16M5 14a7 7 0 0 1 14 0M6 14v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3M9 8.5 17 5',
  sun:    'M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M18.4 5.6l-1.1 1.1M6.7 17.3l-1.1 1.1',
  clock:  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4.5V12l3 2',
  book:   'M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5v-12ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5v-12Z',
  shield: 'M12 3l7 3v5.5c0 4.2-2.9 7.7-7 8.5-4.1-.8-7-4.3-7-8.5V6l7-3Zm-2.6 8.6 2 2 4-4',
  chat:   'M20 12a7.5 7.5 0 0 1-10.9 6.7L4.5 20l1.4-4.4A7.5 7.5 0 1 1 20 12ZM9 11h.01M12 11h.01M15 11h.01',
  swap:   'M4 8h13l-3-3M20 16H7l3 3',
  wallet: 'M4 8.5A2.5 2.5 0 0 1 6.5 6H18a2 2 0 0 1 2 2v1M4 8.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5M20 9.5h-4a2.5 2.5 0 0 0 0 5h4v-5Z',
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor"
         strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name] ?? PATHS.cradle} />
    </svg>
  )
}
