import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="container mx-auto flex flex-col items-center px-4">
            <Hero />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App