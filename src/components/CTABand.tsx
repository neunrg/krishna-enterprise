import { Download } from 'lucide-react'

import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { CONTACT, CATALOG, PAGES } from '@/data/site'

export function CTABand({
  eyebrow = 'Business Partnership',
  title = 'Looking for a Reliable Stationery Distribution Partner?',
  text = 'Whether you are a retailer, institution, reseller or business, let\u2019s build a dependable supply relationship.',
}: {
  eyebrow?: string
  title?: string
  text?: string
}) {
  return (
    <section className="bg-surface-dark py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
            <span className="h-[3px] w-6 rounded-full bg-primary" aria-hidden="true" />
            {eyebrow}
            <span className="h-[3px] w-6 rounded-full bg-primary" aria-hidden="true" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-[40px]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">{text}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={CATALOG.pdf} download>
                <Download className="size-4" />
                Download Catalogue
              </a>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <a href={CONTACT.whatsappPricelist} target="_blank" rel="noopener noreferrer">
                Request Price List
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={PAGES.contact}>Talk to Us</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}