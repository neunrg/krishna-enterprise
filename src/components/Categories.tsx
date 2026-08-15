import { CATEGORIES } from '@/data/site'
import { Reveal, Stagger, StaggerItem, Eyebrow } from '@/components/motion'
import { useEnquiry } from '@/context/EnquiryContext'
import { ArrowUpRight } from 'lucide-react'

export function Categories() {
  const { openEnquiry } = useEnquiry()

  return (
    <section id="products" className="border-y border-hairline-soft bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Product Portfolio</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              Everything Businesses Need to Keep Moving.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A curated range of stationery categories distributed through our regional network.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.name}>
              <button
                onClick={() => openEnquiry(c.name)}
                className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-md border border-hairline bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ink"
                aria-label={`Enquire about ${c.name}`}
              >
                <span className="block overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.alt}
                    width={900}
                    height={675}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </span>
                <span className="flex items-center justify-between gap-3 p-4">
                  <span className="font-bold">{c.name}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                    View Category
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}