import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Deck from './Deck'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Deck />
  </StrictMode>,
)
