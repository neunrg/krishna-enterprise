import * as React from 'react'
import { PAGES } from '@/data/site'

type EnquiryContextValue = {
  product: string
  openEnquiry: (product: string) => void
}

const EnquiryContext = React.createContext<EnquiryContextValue | null>(null)

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = React.useState('')

  const openEnquiry = React.useCallback((p: string) => {
    setProduct(p)
    sessionStorage.setItem('enquiry-product', p)
    const onContact = window.location.pathname.split('/').pop() === PAGES.contact
    if (onContact) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = PAGES.contact
    }
  }, [])

  return (
    <EnquiryContext.Provider value={{ product, openEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  const ctx = React.useContext(EnquiryContext)
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider')
  return ctx
}