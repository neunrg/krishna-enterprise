import { BRANDS } from '@/data/site'
import { Reveal, Stagger, StaggerItem, Eyebrow } from '@/components/motion'
import { Card, CardContent } from '@/components/ui/card'

export function Brands() {
  return (
    <section id="brands" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Our Dealerships</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              Brands We Represent.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A growing portfolio of trusted stationery brands, backed by strong local
              distribution.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {BRANDS.map((b) => (
            <StaggerItem key={b.name}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-ink">
                <CardContent className="flex h-full flex-col justify-between gap-6 p-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold tracking-tight">{b.name}</span>
                    <span className="text-sm font-medium text-muted-foreground">{b.cat}</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-active">
                    Distribution Partner
                  </span>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-muted-foreground">
            Representative portfolio of our distribution brands. Our full, current brand list is
            shared on enquiry.
          </p>
        </Reveal>
      </div>
    </section>
  )
}