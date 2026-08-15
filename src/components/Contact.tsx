import * as React from 'react'

import { CONTACT } from '@/data/site'
import { Reveal, Eyebrow } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectPrimitive,
} from '@/components/ui/select'
import { useEnquiry } from '@/context/EnquiryContext'

const BUSINESS_TYPES = ['Retailer', 'Reseller', 'Institution', 'Corporate', 'Distributor', 'Other']

export function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  const { product } = useEnquiry()
  const [name, setName] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [city, setCity] = React.useState('')
  const [type, setType] = React.useState('')
  const [productReq, setProductReq] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [sent, setSent] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const fromSession = sessionStorage.getItem('enquiry-product')
    if (fromSession) setProductReq(fromSession)
  }, [])

  React.useEffect(() => {
    if (product) setProductReq(product)
  }, [product])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      setError('Please fill in your name and phone number.')
      return
    }
    setError('')
    const lines = [
      `Hello Krishna Enterprise, I would like to enquire about your stationery distribution.`,
      ``,
      `Name: ${name.trim()}`,
      company.trim() ? `Company: ${company.trim()}` : '',
      `Phone: ${phone.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : '',
      city.trim() ? `City: ${city.trim()}` : '',
      type ? `Business Type: ${type}` : '',
      productReq.trim() ? `Product Requirement: ${productReq.trim()}` : '',
      message.trim() ? `Message: ${message.trim()}` : '',
    ].filter(Boolean)
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setName('')
    setCompany('')
    setPhone('')
    setEmail('')
    setCity('')
    setType('')
    setProductReq('')
    setMessage('')
    setTimeout(() => setSent(false), 8000)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Contact &amp; Enquiry</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
                Let&rsquo;s Talk Business.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tell us what you are looking for and our team will get in touch.
              </p>
            </Reveal>
          </div>
        )}

        <div className={`grid gap-8 lg:grid-cols-[1fr_340px] ${hideHeader ? '' : 'mt-12'}`}>
          <Reveal y={26}>
            <form
              onSubmit={handleSubmit}
              className="rounded-md border border-hairline bg-card p-6 shadow-soft md:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-name">
                    Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="f-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-company">Company Name</Label>
                  <Input
                    id="f-company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    autoComplete="organization"
                    placeholder="Company"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-phone">
                    Phone Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="f-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    placeholder="+91"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-email">Email</Label>
                  <Input
                    id="f-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-city">City</Label>
                  <Input
                    id="f-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Your city"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-type">Business Type</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger id="f-type">
                      <SelectPrimitive.Value placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUSINESS_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="f-product">Product Requirement</Label>
                <Input
                  id="f-product"
                  value={productReq}
                  onChange={(e) => setProductReq(e.target.value)}
                  placeholder="e.g. Pens, notebooks, bulk office supplies"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="f-message">Message</Label>
                <Textarea
                  id="f-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Tell us about your requirement"
                />
              </div>

              {error && <p className="mt-4 text-sm font-semibold text-destructive">{error}</p>}

              <Button type="submit" size="lg" className="mt-6 w-full">
                Send Enquiry
              </Button>
              {sent && (
                <p className="mt-4 rounded-md border border-hairline bg-secondary/50 px-4 py-3 text-sm text-muted-foreground" role="status">
                  Thank you &mdash; your enquiry is ready. Please complete the send on WhatsApp, or
                  call us directly.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal y={26} delay={0.12}>
            <aside className="flex h-full flex-col rounded-md border border-hairline bg-card p-6 shadow-soft">
              <h2 className="text-lg font-bold">Reach Krishna Enterprise</h2>
              <ul className="mt-6 flex flex-col">
                <li className="flex items-start gap-4 border-b border-hairline-soft py-4 text-sm">
                  <span className="mt-0.5 h-[3px] w-6 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>
                    <strong className="font-bold">{CONTACT.addressLine}</strong>
                    <br />
                    Stationery Distribution Hub
                  </span>
                </li>
                {CONTACT.gstin && (
                  <li className="flex items-start gap-4 border-b border-hairline-soft py-4 text-sm">
                    <span className="mt-0.5 h-[3px] w-6 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      <strong className="font-bold">GSTIN</strong>
                      <br />
                      {CONTACT.gstin}
                    </span>
                  </li>
                )}
                <li className="flex items-center gap-4 border-b border-hairline-soft py-4 text-sm">
                  <span className="h-[3px] w-6 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <a href={CONTACT.phoneHref} className="font-semibold hover:text-link-blue">
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4 border-b border-hairline-soft py-4 text-sm">
                  <span className="h-[3px] w-6 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <a href={CONTACT.emailHref} className="font-semibold hover:text-link-blue">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-center gap-4 py-4 text-sm">
                  <span className="h-[3px] w-6 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <a
                    href={CONTACT.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-link-blue"
                  >
                    Get Directions on Google Maps
                  </a>
                </li>
              </ul>

              <Button asChild variant="secondary" className="mt-6">
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Fastest response via WhatsApp &mdash; we typically reply the same business day.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}