import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Phone, FileText, Briefcase, LinkedinIcon, } from "lucide-react"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Home from "./Home"
import About from "./About"

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Home />
      <About />

      {/* Projects Section */}
      <Projects />
      {/* Resume Section */}
      <section id="resume" className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="grid gap-8 md:grid-cols-2 px-10">
          <div className="space-y-6">
            <div className="flex gap-4">
              <Briefcase className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-bold">Senior Frontend Developer</h3>
                <p className="text-sm text-muted-foreground">Tech Corp • 2021 - Present</p>
                <p className="mt-2">
                  Led frontend development for multiple projects, improving performance and user experience.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Briefcase className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-bold">Full Stack Developer</h3>
                <p className="text-sm text-muted-foreground">Web Solutions Inc • 2019 - 2021</p>
                <p className="mt-2">Developed and maintained various web applications using modern technologies.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <FileText className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">Bachelor's in Computer Science</p>
                <p className="mt-2">University of Technology • 2015 - 2019</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FileText className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-bold">Certifications</h3>
                <p className="text-sm text-muted-foreground">AWS Certified Developer</p>
                <p className="mt-2">Google Cloud Certified • MongoDB Certified Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 sm:py-32">
        <div className="grid gap-10 md:grid-cols-2 px-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>subhashkushwah134@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 9855369230</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col px-10 gap-4 items-center justify-between text-center md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 Subhash. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}