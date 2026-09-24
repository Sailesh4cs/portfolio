import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

const basePath = import.meta.env.BASE_URL
document.querySelector('meta[property="og:image"]')?.setAttribute('content', `${basePath}og-placeholder.svg`)
document.querySelector('link[rel="icon"]')?.setAttribute('href', `${basePath}favicon.svg`)
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
