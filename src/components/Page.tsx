import { EnquiryProvider } from '@/context/EnquiryContext'
import { SiteNav } from '@/components/SiteNav'
import { Footer } from '@/components/Footer'
import { Floating } from '@/components/Floating'

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryProvider>
      <SiteNav />
      <main>{children}</main>
      <Footer />
      <Floating />
    </EnquiryProvider>
  )
}