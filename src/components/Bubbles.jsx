/**
 * The silver bubbles the whole site floats on.
 *
 * Fixed rather than per-section, so the drift is continuous as you scroll
 * instead of restarting at every band. It sits behind everything and ignores
 * the pointer, so it can never intercept a click meant for the page.
 *
 * The sizes and delays are written out rather than randomised: a fixed set
 * looks deliberately composed, and it renders identically on every visit.
 */
const BUBBLES = [
  { size: 120, left: '6%',  delay: 0,    duration: 34 },
  { size: 52,  left: '14%', delay: 8,    duration: 26 },
  { size: 88,  left: '23%', delay: 16,   duration: 38 },
  { size: 34,  left: '31%', delay: 3,    duration: 22 },
  { size: 140, left: '41%', delay: 11,   duration: 44 },
  { size: 46,  left: '52%', delay: 20,   duration: 25 },
  { size: 74,  left: '60%', delay: 5,    duration: 31 },
  { size: 28,  left: '68%', delay: 14,   duration: 20 },
  { size: 108, left: '76%', delay: 23,   duration: 40 },
  { size: 60,  left: '86%', delay: 9,    duration: 28 },
  { size: 38,  left: '93%', delay: 18,   duration: 24 },
]

export default function Bubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble animate-rise"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            // Start below the fold so every bubble rises into view rather than
            // popping into existence mid-screen.
            bottom: `-${b.size + 40}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `-${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
