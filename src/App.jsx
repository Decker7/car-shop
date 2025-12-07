import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
