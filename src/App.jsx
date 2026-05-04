import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import OurStory from './components/OurStory'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import FloatingPetals from './components/FloatingPetals'

function App() {
  return (
    <div className="relative min-h-screen">
      <FloatingPetals />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <OurStory />
        <Events />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
