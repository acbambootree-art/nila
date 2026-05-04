import { useScrollAnimation } from './hooks/useScrollAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Collection from './components/Collection'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IntroOverlay from './components/IntroOverlay'

function App() {
  useScrollAnimation()

  return (
    <>
      <IntroOverlay />
      <Navbar />
      <Hero />
      <Story />
      <Process />
      <Collection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
