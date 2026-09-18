// Serverless endpoint for the AI assistant. Vercel runs this as a Node
// function; it never ships to the browser.
//
// This exists because the browser must not hold the API key. Vite inlines
// every VITE_* variable into the public bundle, so a key referenced from
// React source is readable by anyone who opens devtools — and an Anthropic
// key is billable. The key stays here, server-side, under a name without the
// VITE_ prefix so it cannot be inlined by accident.

import Anthropic from '@anthropic-ai/sdk'

// What the assistant knows about the business. Kept in this file rather than
// fetched, so a cold start costs nothing extra.
const SYSTEM = `You are the assistant for Nanny in Paradise, a childcare service in Bali that connects families with verified, experienced nannies.

What the service offers:
- Newborn and infant care: feeding, settling, nappy routines, safe sleep.
- Full-day and live-in nannies: meals, naps, play, school runs.
- Emergency and same-day cover when a sitter cancels or plans change.
- Tutoring and school support: homework help, reading practice, subject tutoring.

How it works:
- Every nanny is identity-checked, reference-checked and interviewed before her profile is shown to a family. Background-check and CPR status appear on the profile.
- Families search, compare, book, pay and message entirely through WhatsApp. There is no app to install and no portal.
- Pricing is set by Nanny in Paradise and shown before a family confirms. It does not change with which nanny is chosen.
- If a booked nanny cannot make it, the team finds a replacement at the same price.

How to answer:
- Be warm, brief and concrete. Two or three sentences is usually right.
- Parents are often asking while tired or in a hurry. Lead with the answer.
- Answer only from what is above. If you do not know something — a specific
  price, a specific nanny's availability, anything about an individual booking
  — say so plainly and point them to the contact form or WhatsApp. Never invent
  a rate, a name, a certification or a promise.
- You cannot make, change or cancel a booking yourself. Hand those to the team.
- Nothing here is medical advice. If a parent describes a child who is unwell
  or hurt, tell them to contact a doctor or emergency services.`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Set in Vercel → Settings → Environment Variables. Deliberately not
  // VITE_-prefixed: that prefix is what exposes a value to the browser.
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(503).json({
      error: 'The assistant is not configured yet.',
    })
  }

  const { messages } = req.body ?? {}
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'No messages supplied.' })
  }

  // A public endpoint billed per call, so cap what one request can cost:
  // drop anything beyond the recent turns and refuse oversized input rather
  // than forwarding it.
  const recent = messages.slice(-12)
  const tooLong = recent.some(
    (m) => typeof m.content !== 'string' || m.content.length > 2000,
  )
  if (tooLong) {
    return res.status(400).json({ error: 'That message is too long.' })
  }

  try {
    const client = new Anthropic({ apiKey })

    const response = await client.messages.create({
      model: 'claude-opus-5',
      max_tokens: 1024,
      system: SYSTEM,
      messages: recent.map((m) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: String(m.content),
      })),
    })

    // content is a list of blocks, not a string — take the text ones.
    const reply = response.content
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('')
      .trim()

    return res.status(200).json({ reply })
  } catch (err) {
    // Never hand the caller the raw error: it can carry request details.
    // Distinguish "try again" from "this will not work" so the widget can say
    // something useful.
    const status = err?.status
    if (status === 429) {
      return res.status(429).json({ error: 'Busy right now — try again in a moment.' })
    }
    console.error('[chat] request failed:', err)
    return res.status(502).json({ error: 'The assistant is unavailable right now.' })
  }
}
