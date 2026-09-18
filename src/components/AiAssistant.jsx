import { useState, useRef, useEffect } from 'react'

/**
 * The AI assistant: a floating bubble that opens a chat panel.
 *
 * OFF BY DEFAULT. It renders nothing unless VITE_AI_ENABLED is exactly
 * "true", so the site ships without it until someone deliberately turns it on.
 * Turning it on also needs ANTHROPIC_API_KEY set server-side — without that
 * the endpoint returns 503 and the panel says so rather than looking broken.
 *
 * The key never reaches this file. Every request goes to /api/chat, which
 * holds the credential server-side; see api/chat.js for why.
 */

const ENABLED = import.meta.env.VITE_AI_ENABLED === 'true'

const GREETING = {
  role: 'assistant',
  content:
    'Hello — I can answer questions about our nannies, how booking works, and what we charge. What would you like to know?',
}

export default function AiAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Keep the newest message in view as the conversation grows.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, sending])

  // Opening the panel should put the cursor where the parent is about to type.
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  // Escape closes the panel, which is what every other overlay on the web does.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!ENABLED) return null

  const send = async (e) => {
    e?.preventDefault()
    const text = draft.trim()
    if (!text || sending) return

    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setDraft('')
    setError(null)
    setSending(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // The greeting is ours, not part of the conversation the model needs.
        body: JSON.stringify({ messages: next.slice(1) }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')

      setMessages([...next, { role: 'assistant', content: data.reply }])
    } catch (err) {
      // The failed turn stays on screen; the parent can retry without retyping.
      setError(err.message || 'Something went wrong.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Launcher. Hidden from the reading order while the panel is open, so
          screen readers are not offered a button that now closes what they
          are already inside. */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open the assistant"
          className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-deep text-white shadow-lg ring-1 ring-black/5 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12a7.5 7.5 0 0 1-10.9 6.7L4.5 20l1.4-4.4A7.5 7.5 0 1 1 20 12Z" />
            <path d="M9 11h.01M12 11h.01M15 11h.01" />
          </svg>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Assistant"
          className="fixed bottom-6 right-6 z-40 flex h-[28rem] w-[min(22rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
        >
          <header className="flex items-center justify-between border-b border-black/5 bg-brand-mist px-4 py-3">
            <div>
              <p className="text-[13px] font-bold text-brand-deep">Ask us anything</p>
              <p className="text-[11px] text-ink/55">Replies are automated</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close the assistant"
              className="grid h-7 w-7 place-items-center rounded-full text-ink/50 transition hover:bg-black/5 hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </header>

          {/* aria-live so a screen reader hears replies as they land. */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <p
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-brand-deep px-3.5 py-2 text-[12.5px] leading-relaxed text-white'
                      : 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-brand-mist px-3.5 py-2 text-[12.5px] leading-relaxed text-ink/85'
                  }
                >
                  {m.content}
                </p>
              </div>
            ))}

            {sending && (
              <div className="flex justify-start">
                <p className="rounded-2xl rounded-bl-sm bg-brand-mist px-3.5 py-2.5">
                  <span className="flex gap-1">
                    {[0, 150, 300].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/30"
                        style={{ animationDelay: `${d}ms` }}
                      />
                    ))}
                  </span>
                </p>
              </div>
            )}

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-[11.5px] leading-relaxed text-red-700">
                {error}
              </p>
            )}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-black/5 px-3 py-3">
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your question…"
              maxLength={2000}
              className="min-w-0 flex-1 rounded-full border border-black/10 px-3.5 py-2 text-[12.5px] outline-none transition placeholder:text-ink/35 focus:border-brand-blue"
            />
            <button
              type="submit"
              disabled={sending || !draft.trim()}
              aria-label="Send"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-deep text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
