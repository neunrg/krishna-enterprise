import { Page } from '@/components/Page'
import { Hero } from '@/components/Hero'
import { TrustStrip } from '@/components/TrustStrip'
import { About } from '@/components/About'
import { Categories } from '@/components/Categories'
import { Network } from '@/components/Network'
import { WhyUs } from '@/components/WhyUs'
import { FAQ } from '@/components/FAQ'
import { CTABand } from '@/components/CTABand'

export default function Home() {
  return (
    <Page>
      <Hero />
      <TrustStrip />
      <About />
      <Categories />
      <Network />
      <WhyUs />
      <FAQ />
      <CTABand />
    </Page>
  )
}