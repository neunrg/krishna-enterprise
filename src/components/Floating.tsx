import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, ArrowUp } from 'lucide-react'

import { CONTACT } from '@/data/site'
import { cn } from '@/lib/utils'

export function Floating() {
  const [showMobileBar, setShowMobileBar] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      setShowMobileBar(window.scrollY > 640)
      setShowTop(window.scrollY > 900)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Krishna Enterprise on WhatsApp"
        className="fixed bottom-5 right-5 z-30 hidden size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-[#dd9001] md:inline-flex"
      >
        <MessageCircle className="size-6" />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="fixed bottom-24 right-7 z-30 inline-flex size-10 cursor-pointer items-center justify-center rounded-md border border-hairline bg-card text-foreground shadow-soft transition-colors hover:border-ink"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <div
        className={cn(
          'fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-hairline bg-background/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden',
          showMobileBar ? 'translate-y-0' : 'translate-y-full',
        )}
      >
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary text-sm font-bold text-primary-foreground"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-hairline bg-card text-sm font-bold"
        >
          Call Us
        </a>
      </div>
    </>
  )
}