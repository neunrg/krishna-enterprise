import { NAV_LINKS, CONTACT, PAGES } from '@/data/site'
import { ArrowUp } from 'lucide-react'

function FooterLogo() {
  return (
    <a href={PAGES.home} className="flex w-fit flex-col leading-tight">
      <span className="text-lg font-bold tracking-tight">Krishna</span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/50">
        Enterprise
      </span>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-16 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <FooterLogo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A Rajkot-based stationery distribution partner connecting trusted brands with
              retailers, businesses and institutions across Saurashtra, Gujarat.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              Explore
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/80">
              <li>Rajkot, Gujarat</li>
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Krishna Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <span>Stationery Distribution</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-white/20 transition-colors hover:border-primary hover:bg-primary hover:text-ink"
            >
              <ArrowUp className="size-4" />
            </button>
            <span>{CONTACT.addressLine}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}