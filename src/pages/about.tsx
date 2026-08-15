import { Page } from '@/components/Page'
import { PageHero } from '@/components/PageHero'
import { Reveal, Eyebrow } from '@/components/motion'
import { Timeline } from '@/components/Timeline'
import { WhyUs } from '@/components/WhyUs'
import { CTABand } from '@/components/CTABand'
import { Button } from '@/components/ui/button'
import { CATALOG } from '@/data/site'
import { Download } from 'lucide-react'

export default function About() {
  return (
    <Page>
      <PageHero
        eyebrow="Who We Are"
        title={<>Built in Rajkot. Trusted Across Saurashtra.</>}
        text="Krishna Enterprise started in Rajkot and has spent five years building its business through relationships, consistent service and dependable stationery distribution."
      >
        <Button asChild size="lg">
          <a href={CATALOG.pdf} download>
            <Download className="size-4" />
            Download Catalogue
          </a>
        </Button>
      </PageHero>

      <section className="border-y border-hairline-soft bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal y={30}>
            <div className="overflow-hidden rounded-[14px] border border-hairline shadow-soft">
              <img
                src="img/about.webp"
                alt="Two workers handling a package in a warehouse surrounded by shelves stocked with boxes"
                width={1100}
                height={825}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
                Relationships First, Every Order After.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Krishna Enterprise started in Rajkot as a stationery distribution business with
                  a simple belief: supply should be dependable, so businesses never have to worry
                  about stock.
                </p>
                <p>
                  We understand the requirements of retailers and business customers. Our work
                  makes procurement simpler by bringing multiple trusted stationery brands under
                  one distribution network &mdash; one call, one list, one reliable partner.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Timeline />
      <WhyUs />
      <CTABand
        eyebrow="Work With Us"
        title="Let’s Build a Dependable Supply Relationship"
        text="Whether you are a retailer, institution, reseller or business, the door is open."
      />
    </Page>
  )
}