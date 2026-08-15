import { FEATURES, TESTIMONIALS } from '@/data/site'
import { Reveal, Stagger, StaggerItem, Eyebrow } from '@/components/motion'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'

export function WhyUs() {
  return (
    <section className="border-y border-hairline-soft bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Why Krishna Enterprise</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              What a Distribution Partner Should Be.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Six things businesses expect from a supplier &mdash; and the standards we hold
              ourselves to.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <StaggerItem key={f.num}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-ink">
                <CardContent className="p-6">
                  <span className="mb-5 inline-block rounded-sm bg-accent px-2 py-1 text-xs font-bold tracking-wider text-accent-foreground">
                    {f.num}
                  </span>
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription className="mt-2">{f.text}</CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        {TESTIMONIALS.length > 0 && (
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between rounded-md border border-hairline bg-card p-6 shadow-soft">
                  <blockquote className="text-base leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-hairline-soft pt-4">
                    <span className="flex size-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}