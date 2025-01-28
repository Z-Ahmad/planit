import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StarryBackground } from './components/ui/starry-background.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarryBackground />
    <App />
  </StrictMode>,
)
