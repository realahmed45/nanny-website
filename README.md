# Nanny in Paradise — website

Marketing site for Nanny in Paradise: verified childcare in Bali, booked over
WhatsApp. React + Vite + Tailwind, three routes (`/`, `/profile`, `/contact`).

## Running it

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build into dist/

## Environment variables

Copy `.env.example` to `.env` for local work. On Vercel these go in
Project → Settings → Environment Variables.

| Variable | Required | What it does |
|---|---|---|
| `VITE_FORMSPREE_ID` | Yes | Formspree endpoint id for the contact form. Currently `movavgrb` — the same inbox as the Bersih Clean site. |
| `VITE_AI_ENABLED` | No | Exactly `true` shows the AI assistant. Anything else hides it completely. |
| `ANTHROPIC_API_KEY` | Only with the assistant on | Read server-side by `api/chat.js`. |

## The contact form

Submissions go to [Formspree](https://formspree.io). Until
`VITE_FORMSPREE_ID` is set the form tells you it is not connected instead of
silently losing messages.

## The AI assistant — off by default

A chat bubble that answers questions about the service. It is **switched off**:
`src/components/AiAssistant.jsx` returns `null` unless `VITE_AI_ENABLED` is
exactly `"true"`, so nothing renders and nothing is billable until someone
turns it on deliberately.

To turn it on you need **both** variables — the flag and a working key. With
the flag on but no key the endpoint returns 503 and the panel says the
assistant is unavailable rather than looking broken.

**The API key must never be `VITE_`-prefixed.** Vite inlines every `VITE_*`
variable into the public bundle, so a key referenced from React source is
readable by anyone who opens devtools — on a credential that costs money per
call. That is why requests go to `/api/chat` (a Vercel serverless function)
instead of calling Anthropic from the browser.

Two guards on the endpoint, because it is public and billed per call: only the
last 12 turns are forwarded, and any single message over 2000 characters is
refused rather than sent.

The assistant answers only from the service description in `api/chat.js`. It
is told to say it does not know rather than invent a price, a nanny's
availability, or anything about an individual booking, and to refer anything
medical to a doctor.

## The background

White, with silver bubbles drifting upward behind everything
(`src/components/Bubbles.jsx`). They are deliberately faint: they sit behind
live text, so they read as texture in the paper rather than objects on top of
it. Anyone whose system asks for reduced motion gets them still.

## The logo

`public/logo.svg`, drawn rather than photographed — a sheltering arc over a
child, inside a silver bubble that ties it to the page. SVG so it stays sharp
at any size, including as the favicon.
