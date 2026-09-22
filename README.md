# Nanny In Paradise — website

The public marketing site: one page, built from the Figma design, with every
button opening the same WhatsApp conversation.

```
npm install
npm run dev      # local, with hot reload
npm run build    # production build into dist/
```

React + Vite + Tailwind, deployed on Vercel.

## The WhatsApp number

Defined once, in `src/lib/whatsapp.js`. Every button on the page reads it
from there, so changing the number is a single edit.

The link carries `?text=nanny` because the bot stays silent until it hears
that word — a visitor arriving from the site lands in a conversation that
has already started rather than one that ignores them.

On desktop the link points at `web.whatsapp.com` instead of `wa.me`, which
otherwise shows an interstitial before the chat opens.

## Structure

```
src/
  App.jsx                 the page, in the order the design lays it out
  lib/whatsapp.js         the number and the prefilled word
  components/             Navbar, Footer, WhatsAppButton
  sections/               Hero, Gallery, HowItWorks
public/img/
  logo.png                background removed
  toys-strip.png          cropped to the artwork, 1440x209
  gallery/                photography from the Figma export
```

## Design notes

Colours were sampled from the Figma PDF rather than estimated: the hero
cream is `#FFFDF0`, the nav pill `#FCF8DE`, the cards `#FFFCF5`, and the
brand yellow `#FFD51E` is taken from the logo itself. The typeface is Outfit.

The toy strip is drawn on white, so it is composited with `mix-blend-mode:
multiply` to sit on the cream without a visible seam.
