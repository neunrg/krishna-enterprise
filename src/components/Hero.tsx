import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Counter } from '@/components/Counter'
import { CONTACT, CATALOG, BRANDS } from '@/data/site'

const EASE = [0.22, 1, 0.36, 1] as const

const STATS = [
  { value: 5, suffix: '+', label: 'Years in Market' },
  { value: 8, suffix: '', label: 'Product Categories' },
  { value: null, label: 'Saurashtra-Wide Reach' },
  { value: null, label: 'Same-Day Reply' },
]

const TAPE = [...BRANDS.map((b) => b.name), ...BRANDS.map((b) => b.name)]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[calc(100dvh-68px)] flex-col justify-between overflow-hidden bg-surface-dark pt-[68px] text-white"
    >
      {/* Cinematic backdrop */}
      <motion.div className="absolute inset-0" style={{ y: imgY }} aria-hidden="true">
        <motion.img
          initial={{ scale: reduce ? 1 : 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
          src="img/hero-cinematic.webp"
          alt=""
          width={1280}
          height={960}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_10%,rgba(247,165,1,0.14),transparent_55%)]" />
      </motion.div>

      {/* Main stage */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-10 pt-14 md:pt-24">
        <div className="grid items-end gap-12 lg:gap-16">
          <motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
              className="max-w-3xl text-[clamp(2.5rem,6.5vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.03em]"
            >
              Powering Stationery Distribution{' '}
              <span className="relative inline-block">
                Across{' '}
                <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-primary" aria-hidden="true" />
              </span>
              Saurashtra.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26, ease: EASE }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              A Rajkot-based stationery distribution partner connecting trusted brands with
              retailers, institutions and businesses across the region. One list, one supplier,
              delivered on time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
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
            </motion.div>
          </motion.div>
        </div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="mt-12 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-4 md:mt-16"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold tracking-tight md:text-4xl">
                {s.value !== null ? (
                  <>
                    <Counter value={s.value} />
                    {s.suffix}
                  </>
                ) : (
                  'Everywhere'
                )}
              </p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling brand tape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
        className="relative border-t border-white/15 bg-black/35 backdrop-blur-sm"
        aria-hidden="true"
      >
        <div className="animate-banner flex w-max items-center gap-8 py-4">
          {TAPE.map((name, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-sm font-bold uppercase tracking-[0.28em] text-white/65">
                {name}
              </span>
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}