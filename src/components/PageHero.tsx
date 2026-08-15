import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { Eyebrow } from '@/components/motion'

const EASE = [0.22, 1, 0.36, 1] as const

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  text?: string
  children?: React.ReactNode
}) {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden pt-[68px]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-[52px]"
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {text}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}