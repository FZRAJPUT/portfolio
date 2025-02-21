import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";


export default function Projects() {
  return (
    <section id="projects" className="container py-16 sm:py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-10">
        {[ 
          { title: "Project One", desc: "A modern web application", img: "/placeholder.svg?height=200&width=400", tech: "Built with React.js and Node.js, this project showcases modern web development practices." },
          { title: "Project Two", desc: "E-commerce platform", img: "/placeholder.svg?height=200&width=400", tech: "A full-featured e-commerce platform with payment integration and admin dashboard." },
          { title: "Project Three", desc: "Social media dashboard", img: "/placeholder.svg?height=200&width=400", tech: "A responsive dashboard for managing social media content and analytics." }
        ].map((project, index) => (
          <Card key={index} className="flex flex-col py-2">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.desc}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-auto"
              />
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.tech}</p>
              <div className="flex gap-4 mt-auto">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}