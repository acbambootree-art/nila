import { useScrollAnimation } from './hooks/useScrollAnimation'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Collection from './components/Collection'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EnterGate from './components/EnterGate'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  useLenis()
  useScrollAnimation()

  return (
    <>
      <EnterGate />
      <Navbar />
      <Hero />
      <Story />
      <Process />
      <Collection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
