import { Reveal, Eyebrow } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { PAGES } from '@/data/site'

const POINTS = [
  { num: '01', strong: 'Rajkot', text: 'Central distribution base and hub.' },
  { num: '02', strong: 'Saurashtra', text: 'Regional coverage and market understanding.' },
  { num: '03', strong: 'Growing Network', text: 'A distribution footprint that continues to expand.' },
]

export function Network() {
  return (
    <section id="network" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Distribution Network</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              Rooted in Rajkot. Connected Across Saurashtra.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <Reveal delay={0.1} y={30}>
            <div
              className="relative aspect-[16/13] overflow-hidden rounded-[14px] border border-hairline shadow-soft"
              role="img"
              aria-label="Satellite map of the Saurashtra region with Rajkot as the central distribution hub"
            >
              <img
                src="img/saurashtra-map.webp"
                alt="Satellite map of Saurashtra, Gujarat with Rajkot as the central distribution hub"
                width={1928}
                height={1254}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 -rotate-3 text-sm font-bold uppercase tracking-[0.2em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
                Saurashtra
              </span>
              <span className="absolute bottom-[10%] right-4 -rotate-8 text-[11px] font-medium uppercase tracking-[0.2em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
                Arabian Sea
              </span>
              <span className="absolute left-[53%] top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative block size-[22px] rounded-full border-[3px] border-ink bg-primary">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" aria-hidden="true" />
                  <span className="absolute left-1/2 top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" aria-hidden="true" />
                </span>
              </span>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md bg-white/95 px-4 py-2 text-center shadow-lift">
                <span className="block text-sm font-bold">Rajkot</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  Distribution Hub
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">
                From our base in Rajkot, Krishna Enterprise serves a growing network of retailers,
                resellers and businesses across Saurashtra.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-6">
              {POINTS.map((p, i) => (
                <Reveal key={p.num} delay={0.15 + i * 0.1}>
                  <div className="flex items-start gap-4 border-b border-hairline-soft pb-5">
                    <span className="mt-0.5 text-xs font-bold tracking-wider text-primary">
                      {p.num}
                    </span>
                    <div>
                      <p className="font-bold">{p.strong}</p>
                      <p className="text-sm text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.45}>
              <Button asChild variant="secondary" className="mt-8">
                <a href={PAGES.contact}>Enquire About Your Area</a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}