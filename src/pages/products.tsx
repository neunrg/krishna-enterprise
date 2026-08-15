import { Download } from 'lucide-react'

import { Page } from '@/components/Page'
import { PageHero } from '@/components/PageHero'
import { TrustStrip } from '@/components/TrustStrip'
import { Brands } from '@/components/Brands'
import { Categories } from '@/components/Categories'
import { CTABand } from '@/components/CTABand'
import { Button } from '@/components/ui/button'
import { CATALOG, CONTACT } from '@/data/site'

export default function Products() {
  return (
    <Page>
      <PageHero
        eyebrow="Product Portfolio"
        title={
          <>
            Everything a Business Needs,{' '}
            <span className="relative inline-block">
              From One Partner.
            </span>
          </>
        }
        text="Pens, notebooks, files, markers, office products, school stationery and art supplies — sourced through trusted brands and supplied region-wide. Download the catalogue or request the current price list."
      >
        <Button asChild size="lg">
          <a href={CATALOG.pdf} download>
            <Download className="size-4" />
            Download Catalogue
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href={CONTACT.whatsappPricelist} target="_blank" rel="noopener noreferrer">
            Request Price List
          </a>
        </Button>
      </PageHero>

      <TrustStrip />
      <Brands />
      <Categories />
      <CTABand
        eyebrow="Get Started"
        title="See Stock &amp; Price for Your Requirement"
        text="Send us a list of what you need — we’ll share availability, brands and the current price list."
      />
    </Page>
  )
}