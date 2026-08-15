import { Reveal, Eyebrow } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { PAGES } from '@/data/site'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              Built in Rajkot. Trusted Across Saurashtra.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Krishna Enterprise started in Rajkot and has spent five years building its business
                through relationships, consistent service and dependable stationery distribution.
              </p>
              <p>
                We understand the requirements of retailers and business customers. Our work makes
                procurement simpler by bringing multiple trusted stationery brands under one
                distribution network.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <Button asChild variant="secondary" className="mt-8">
              <a href={PAGES.about}>Our Story &amp; Journey</a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={30}>
          <div className="overflow-hidden rounded-[14px] border border-hairline shadow-soft">
            <img
              src="img/about.webp"
              alt="Two workers handling a package in a warehouse surrounded by shelves stocked with boxes"
              width={1100}
              height={825}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}