import { motion } from 'framer-motion'
import { Menu, ArrowUpRight } from 'lucide-react'

import { NAV_LINKS, PAGES, CONTACT } from '@/data/site'
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

function Logo() {
  return (
    <a href={PAGES.home} className="flex flex-col leading-tight">
      <span className="text-lg font-bold tracking-tight">Krishna</span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-muted-foreground">
        Enterprise
      </span>
    </a>
  )
}

export function SiteNav() {
  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild>
            <a href={CONTACT.whatsappShort} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="justify-between p-6">
            <div>
              <Logo />
              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((l) => (
                  <DrawerClose key={l.href} asChild>
                    <a
                      href={l.href}
                      className="flex items-center justify-between rounded-md px-3 py-3 text-base font-semibold transition-colors hover:bg-secondary"
                    >
                      {l.label}
                      <ArrowUpRight className="size-4 text-muted-foreground" />
                    </a>
                  </DrawerClose>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <DrawerClose asChild>
                <Button asChild className="w-full">
                  <a href={CONTACT.whatsappShort} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </DrawerClose>
              <p className="text-center text-xs text-muted-foreground">Rajkot &middot; Saurashtra &middot; Gujarat</p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.header>
  )
}