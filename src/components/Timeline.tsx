import { TIMELINE } from '@/data/site'
import { Reveal, Stagger, StaggerItem, Eyebrow } from '@/components/motion'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'

export function Timeline() {
  return (
    <section className="border-y border-hairline-soft bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Our Journey</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              Five Years of Building Relationships.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A snapshot of how the business grew &mdash; and where it is headed next.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {TIMELINE.map((t) => (
            <StaggerItem key={t.year}>
              <Card className="relative h-full overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true" />
                <CardContent className="p-5">
                  <span className="text-xs font-bold tracking-wider text-primary-active">
                    {t.year}
                  </span>
                  <CardTitle className="mt-3 text-base">{t.title}</CardTitle>
                  <CardDescription className="mt-2">{t.text}</CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}