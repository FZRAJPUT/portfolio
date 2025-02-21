import { Button } from '@/components/ui/button'
import React from 'react'
import { MessageCircle, Code } from "lucide-react"

const Home = () => {
  return (
    <section id="home" className="container px-1 pt-10 sm:mt-6 sm:py-32">
    <div className="flex flex-col items-center gap-10 text-center mt-10">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">Hi, I'm Subhash</h1>
      <p className="max-w-[700px] text-muted-foreground md:text-xl">
        A passionate full-stack developer crafting beautiful and functional web experiences
      </p>
      <div className="flex gap-4">
        <Button onClick={() => handleScroll("contact")} className="gap-2">
          <MessageCircle className="h-5 w-5" />
          Contact Me
        </Button>
        <Button variant="outline" onClick={() => handleScroll("projects")} className="gap-2">
          <Code className="h-5 w-5" />
          View Projects
        </Button>
      </div>
    </div>
  </section>
  )
}

export default Home