import { Page } from '@/components/Page'
import { PageHero } from '@/components/PageHero'
import { Contact } from '@/components/Contact'
import { FAQ } from '@/components/FAQ'
import { Button } from '@/components/ui/button'
import { CONTACT } from '@/data/site'

export default function ContactPage() {
  return (
    <Page>
      <PageHero
        eyebrow="Contact & Enquiry"
        title={<>Let’s Talk Business.</>}
        text="Tell us what you are looking for and our team will get in touch. Fastest response via WhatsApp — we typically reply the same business day."
      >
        <Button asChild size="lg">
          <a href={CONTACT.whatsappShort} target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </Button>
      </PageHero>

      <div className="border-t border-hairline-soft bg-secondary/50">
        <Contact hideHeader />
      </div>
      <FAQ />
    </Page>
  )
}