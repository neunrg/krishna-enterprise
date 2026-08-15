import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '@/pages/home'
import Products from '@/pages/products'
import About from '@/pages/about'
import Contact from '@/pages/contact'

const PAGES = { home: Home, products: Products, about: About, contact: Contact } as const

const rootEl = document.getElementById('root')
const pageName = (rootEl?.dataset.page ?? 'home') as keyof typeof PAGES
const Component = PAGES[pageName] ?? Home

createRoot(rootEl!).render(
  <StrictMode>
    <Component />
  </StrictMode>,
)