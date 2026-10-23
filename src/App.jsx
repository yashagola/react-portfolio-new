import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Floating from './components/Floating'
import Preloader from './components/Preloader'
import Effects from './components/Effects'

function App() {
  return (
    <>
      <Preloader />
      <Effects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <Floating />
    </>
  )
}

export default App
