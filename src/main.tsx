import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import About from './About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <About />
  </StrictMode>
)