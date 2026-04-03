import { useScrollAnimation } from './hooks/useScrollAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Collection from './components/Collection'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useScrollAnimation()

  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Collection />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}

export default App
