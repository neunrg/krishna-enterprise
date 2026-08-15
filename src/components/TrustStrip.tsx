import { Reveal } from '@/components/motion'
import { Counter } from '@/components/Counter'
import { STATS } from '@/data/site'

export function TrustStrip() {
  return (
    <section aria-label="Company highlights" className="border-y border-hairline-soft">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {STATS.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08}>
            <div className="flex flex-col gap-1.5">
              <span className="text-2xl font-bold tracking-tight">
                {item.value !== null ? (
                  <>
                    <Counter value={item.value} />
                    {item.suffix}
                  </>
                ) : (
                  'Multiple'
                )}
              </span>
              <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}