import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "ExamVault",
      description:
        "ExamVault is an academic tool designed to provide students with comprehensive syllabi, previous year question papers, and personalized features to enhance their study experience.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "React Native"],
      codeLink: "https://github.com/FZRAJPUT/upload_pdf",
      liveLink: "https://examvault1.vercel.app/",
    },
    {
      title: "CodeCompiler",
      description: "An online HTML, CSS, and JavaScript editor that lets users write, edit, and preview code in real time. Designed for practicing, testing snippets, and learning web development interactively.",
      tags: ["JavaScript", "Canvas API", "Game Development"],
      codeLink: "https://github.com/FZRAJPUT/HTML_Editor",
      liveLink: "https://html-editor-ten.vercel.app/",
    },
    {
      title: "Poultry Farm Feed Management System",
      description:
        "A web-based management system designed for poultry farms to handle employee tasks, product records, and order management.",
      tags: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "React.js"],
      codeLink: "https://github.com/your-username/poultry-farm-management",
      liveLink: null,
    },
    {
      title: "Sphere",
      description:
        "A modern social media platform built with React Native that enables users to create posts, like, comment, and interact in real time.",
      tags: ["React.js Native", "Node.js", "MongoDB", "Express.js", "REST API"],
      codeLink: "https://github.com/randeep88/sphere",
      liveLink: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
