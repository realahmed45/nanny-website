import { useForm, ValidationError } from '@formspree/react'

const FIELDS = [
  { name: 'email', label: 'Email', type: 'email', placeholder: 'info@gmail.com', required: true },
  { name: 'contact', label: 'Contact', type: 'tel', placeholder: '+XX XXXXXXXXX', required: false },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'type here', required: true },
]

// Set VITE_FORMSPREE_ID in .env to the id from your Formspree form endpoint
// (the "xyzabcd" in https://formspree.io/f/xyzabcd).
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

export default function ContactSection() {
  // The hook needs a non-empty key even when unconfigured, so pass a
  // placeholder and gate actual submission on FORM_ID below.
  const [state, handleSubmit] = useForm(FORM_ID || 'unconfigured')

  const inputClass =
    'w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-[12.5px] text-ink outline-none transition placeholder:text-ink/30 focus:border-brand-blue'

  // Without an id the POST would 404 silently and look like a lost enquiry, so
  // say so plainly rather than pretending the message went somewhere.
  const onSubmit = (e) => {
    if (!FORM_ID) {
      e.preventDefault()
      return
    }
    handleSubmit(e)
  }

  return (
    <section id="contact" className="scroll-mt-24 pb-24">
      <div className="shell grid items-start gap-12 sm:grid-cols-2 sm:gap-20">
        <div className="sm:pt-16">
          <p className="eyebrow">Contact us</p>
          <h2 className="section-title mt-3 max-w-[14ch]">WE ARE ALWAYS READY TO HELP YOU.</h2>

          <ul className="mt-8 space-y-3 text-[13px] text-ink/75">
            <li className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" />
              </svg>
              <a href="mailto:info@nannyinparadise.com" className="transition hover:text-brand-deep">
                For Inquiries: info@nannyinparadise.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
              </svg>
              nannyinparadise.com
            </li>
            <li className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" />
              </svg>
              Bali, Indonesia
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-mist p-8 sm:p-10">
          <h3 className="text-center text-xl font-bold text-brand-deep">Get In Touch</h3>

          {state.succeeded ? (
            <div className="py-10 text-center">
              <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-deep/10 text-brand-deep">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <p className="mt-4 text-[14px] font-semibold text-brand-deep">Thank you — your message is on its way.</p>
              <p className="mt-1.5 text-[12.5px] text-ink/65">The team will get back to you shortly.</p>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate={false}>
              {FIELDS.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="mb-1.5 block text-[11px] font-medium text-ink/65">
                    {f.label}
                  </label>
                  {f.type === 'textarea' ? (
                    <textarea
                      id={f.name} name={f.name} rows={3} placeholder={f.placeholder}
                      required={f.required} className={`${inputClass} resize-none`}
                    />
                  ) : (
                    <input
                      id={f.name} name={f.name} type={f.type} placeholder={f.placeholder}
                      required={f.required} className={inputClass}
                    />
                  )}
                  <ValidationError
                    prefix={f.label} field={f.name} errors={state.errors}
                    className="mt-1 block text-[11.5px] text-red-600"
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-md bg-brand-deep py-3 text-[12.5px] font-semibold tracking-wide text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? 'Sending…' : 'Submit'}
              </button>

              {/* Errors that belong to the form as a whole, not one field. */}
              <ValidationError errors={state.errors} className="block text-center text-[11.5px] text-red-600" />

              {!FORM_ID && (
                <p className="text-center text-[11.5px] leading-relaxed text-amber-700">
                  Form not connected yet — add <code className="font-mono">VITE_FORMSPREE_ID</code> to your
                  <code className="font-mono"> .env</code> to start receiving messages.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
