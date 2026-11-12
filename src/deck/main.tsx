import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Deck from './Deck'
import EnterGate from '../components/EnterGate'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Deck />
    <EnterGate />
  </StrictMode>,
)
