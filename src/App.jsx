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
import Iridescence from "./components/Iridescence"
import Ballpit from "./components/Ballpit"
import Galaxy from "./components/Galaxy"

function App() {
  return (
//     <Router>
//       <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
//         <div className="min-h-screen bg-background">
//           {/* <Navbar /> */}
//           <main className="container mx-auto flex flex-col items-center px-4">
//             <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
// <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
//   <Ballpit
//     count={200}
//     gravity={1.2}
//     friction={0.8}
//     wallBounce={0.95}
//     followCursor={true}
//   />
// </div>
//             </div>
//           </main>
//           <Footer />
//         </div>
//       </ThemeProvider>
//     </Router>
<div className="bg-[#080015]" style={{ width: '100%', height: '100vh',
  position: 'relative' }}>
  <Galaxy />
  <h1 className="absolute top-68">Subhash</h1>
</div>
  )
}

export default App