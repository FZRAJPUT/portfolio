import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}