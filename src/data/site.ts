export const PAGES = {
  home: 'index.html',
  products: 'products.html',
  about: 'about.html',
  contact: 'contact.html',
}

export const CONTACT = {
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'info@krishnaenterprise.in',
  emailHref: 'mailto:info@krishnaenterprise.in',
  whatsapp: 'https://wa.me/919876543210?text=Hello%20Krishna%20Enterprise%2C%20I%20would%20like%20to%20enquire%20about%20your%20stationery%20distribution.',
  whatsappShort: 'https://wa.me/919876543210?text=Hello%20Krishna%20Enterprise.',
  whatsappPricelist:
    'https://wa.me/919876543210?text=Hello%20Krishna%20Enterprise%2C%20please%20share%20your%20current%20product%20catalogue%20and%20price%20list.',
  maps: 'https://maps.google.com/?q=Rajkot,Gujarat,India',
  // ---- Swap-later slots (placeholder data for prototype) ----
  addressLine: 'Rajkot, Gujarat — Stationery Distribution Hub',
  gstin: '',
  mapPin: '',
  hours: '',
}

export const CATALOG = {
  pdf: 'catalogue/krishna-enterprise-catalogue.pdf',
}

export const NAV_LINKS = [
  { label: 'Home', href: PAGES.home },
  { label: 'Products', href: PAGES.products },
  { label: 'About', href: PAGES.about },
  { label: 'Contact', href: PAGES.contact },
]

export const STATS = [
  { value: 5, suffix: '+', label: 'Years of Market Experience' },
  { value: null, label: 'Trusted Brand Partnerships' },
  { value: null, label: 'Regional Distribution Network' },
  { value: null, label: 'B2B — Retailers · Businesses · Institutions' },
]

export const FEATURES = [
  { num: '01', title: 'Reliable Supply', text: 'Consistent product availability and dependable distribution support across the region.' },
  { num: '02', title: 'Trusted Brands', text: 'A portfolio of established stationery brands and dealership relationships.' },
  { num: '03', title: 'Regional Reach', text: 'Strong understanding of the Saurashtra market and its business network.' },
  { num: '04', title: 'Business-First Service', text: 'Focused on long-term relationships with retailers, institutions and commercial buyers.' },
  { num: '05', title: 'Bulk & Recurring Orders', text: 'Built to handle bulk and repeat requirements for schools, offices and resellers.' },
  { num: '06', title: 'Fast Response', text: 'Enquiries answered the same business day — typically via WhatsApp.' },
]

export const BRANDS = [
  { name: 'Linc', cat: 'Writing Instruments' },
  { name: 'Navneet', cat: 'Paper Products' },
  { name: 'Classmate', cat: 'School & Office Supplies' },
  { name: 'Kores', cat: 'Files & Folders' },
  { name: 'DOMS', cat: 'Art & Craft' },
  { name: 'Camlin', cat: 'Office Stationery' },
  { name: 'Apsara', cat: 'General Stationery' },
  { name: 'Cello', cat: 'Desk Accessories' },
]

export const CATEGORIES = [
  { name: 'Writing Instruments', img: 'img/cat-pens.webp', alt: 'Display of assorted pens hanging in a stationery shop' },
  { name: 'Notebooks & Paper', img: 'img/cat-notebooks.webp', alt: 'A stack of colourful spiral-bound notebooks' },
  { name: 'Office Essentials', img: 'img/cat-office.webp', alt: 'Office supplies including notebooks, pens and a stapler' },
  { name: 'Files & Folders', img: 'img/cat-files.webp', alt: 'Hands organising papers into a blue file folder' },
  { name: 'School Stationery', img: 'img/cat-school.webp', alt: 'Vibrant school supplies with colourful notebooks and pens' },
  { name: 'Art & Craft', img: 'img/cat-art.webp', alt: 'Colourful art supplies including acrylic paints and brushes' },
  { name: 'Desk Accessories', img: 'img/cat-desk.webp', alt: 'Colourful ballpoint pens in a metallic desk holder' },
  { name: 'General Stationery', img: 'img/cat-general.webp', alt: 'A stack of colourful paper sheets' },
]

export const SERVE = [
  { num: '01', title: 'Retailers', text: 'Helping stationery and general retailers maintain a dependable product assortment.' },
  { num: '02', title: 'Resellers & Distributors', text: 'Supporting businesses looking for reliable supply and trusted brands.' },
  { num: '03', title: 'Institutions', text: 'Serving schools, offices and other organizations with stationery requirements.' },
  { num: '04', title: 'Corporate & Commercial Buyers', text: 'Helping businesses source everyday office and stationery essentials.' },
]

export const TIMELINE = [
  { year: '2019', title: 'Founded in Rajkot', text: 'The beginning of Krishna Enterprise as a local stationery distribution business.' },
  { year: '2021', title: 'Building Market Relationships', text: 'Growing connections with retailers and stationery brands across the city.' },
  { year: '2022', title: 'Expanding Product Portfolio', text: 'Adding more brands and categories to a single-source assortment.' },
  { year: '2024', title: 'Growing Regional Reach', text: 'Expanding distribution reach across Saurashtra.' },
  { year: 'Today', title: 'Building the Next Chapter', text: 'Creating a stronger and more scalable distribution brand.' },
]

// ---- Swap-later: real testimonials go here ----
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      'A dependable partner for our shop — consistent stock and quick answers on WhatsApp. Never had to chase a delivery.',
    name: 'Retail Customer',
    role: 'Stationery Retailer, Rajkot',
  },
  {
    quote:
      'We order school supplies in bulk every season. Krishna Enterprise handles the range and the quantity without surprises.',
    name: 'Institutional Customer',
    role: 'Bulk Buyer, Saurashtra',
  },
]

export const FAQS = [
  {
    q: 'Do you supply outside Rajkot?',
    a: 'Yes. We distribute across the Saurashtra region from our base in Rajkot. Tell us your location and we\u2019ll confirm coverage for your area.',
  },
  {
    q: 'Which areas of Saurashtra do you serve?',
    a: 'Our primary distribution network covers the Saurashtra region. For your specific city or district, please enquire and our team will confirm.',
  },
  {
    q: 'Which stationery brands do you deal in?',
    a: 'We carry a portfolio of stationery brands across writing instruments, paper, files, school supplies and office essentials. Our current brand list is shared on enquiry.',
  },
  {
    q: 'Do you supply retailers and institutions?',
    a: 'Yes. We work with retailers, resellers, institutions, schools, offices and commercial buyers across the region.',
  },
  {
    q: 'Can businesses download the catalogue or price list?',
    a: 'Yes. Download our product catalogue from the site or ask for the current price list on WhatsApp — we\u2019ll share an updated list for your requirement.',
  },
  {
    q: 'Can businesses request bulk stationery requirements?',
    a: 'Absolutely. We support bulk and recurring stationery requirements. Share your list via the enquiry form and our team will respond with options.',
  },
  {
    q: 'How can I become a business partner?',
    a: 'Get in touch through the enquiry form or WhatsApp. We\u2019ll understand your requirements and discuss how we can work together.',
  },
]

export const MARQUEE_WORDS = [
  'Rajkot', 'Saurashtra', 'Stationery Distribution', 'B2B Wholesale', 'Trusted Brands',
  'Schools & Institutions', 'Office Essentials', 'Bulk Supply',
]