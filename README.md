# Nanny in Paradise — website

Marketing site for Nanny in Paradise: verified childcare in Bali, booked over
WhatsApp. React + Vite + Tailwind, three routes (`/`, `/profile`, `/contact`).

## Running it

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build into dist/

## The contact form

Submissions go to [Formspree](https://formspree.io). Copy `.env.example` to
`.env` and set `VITE_FORMSPREE_ID` to the id from your form endpoint. Until
that is set the form tells you it is not connected instead of silently losing
messages.

On Vercel the same value goes in Project → Settings → Environment Variables.

## The background

White, with silver bubbles drifting upward behind everything
(`src/components/Bubbles.jsx`). They are deliberately faint: they sit behind
live text, so they read as texture in the paper rather than objects on top of
it. Anyone whose system asks for reduced motion gets them still.

## The logo

`public/logo.svg`, drawn rather than photographed — a sheltering arc over a
child, inside a silver bubble that ties it to the page. SVG so it stays sharp
at any size, including as the favicon.
