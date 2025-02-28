import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import project_1 from "./project-1.png";
import project_2 from "./project-2.jpg";
import project_3 from "./project-3.jpg";
import project_4 from "./navigation.png";
import project_5 from "./project-5.jpg";
import project_6 from "./sylabus-1.jpg";

const projects = [
  {
    title: "Online Code Runner",
    description: "A full-stack Online Code Runner built with React and Node.js",
    image: project_1,
    github: "https://github.com/FZRAJPUT/online-compiler",
    demo: null,
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "ExamVault",
    description: "An Android app in which students can find PYQ's and Syllabus of there courses and Departments.",
    image: project_6,
    github: null,
    demo: null,
    tags: ["React Native", "API's", "Node.js", "MongoDB"],
  },
  {
    title: "3D Navigation",
    description:
      "An android Application in which you can navigate in 3D view of places and buildings.",
    image: project_4,
    github: "https://github.com/FZRAJPUT/3D-Explorer",
    demo: null,
    tags: ["React Native", "Node.js", "MongoDB", "MappedIn"],
  },
  {
    title: "Online Food Order Website",
    description: "Online Food Ordering platform with payment integration",
    image: project_2,
    github: "https://github.com/FZRAJPUT/Happy-Food",
    demo: "https://happy-food-virid.vercel.app/",
    tags: ["React", "MongoDB", "Express", "Node.js"],
  },
  {
    title: "Image-Hub",
    description: "A website where you can find any type of images.",
    image: project_3,
    github: "https://github.com/FZRAJPUT/image-Hub",
    demo: "https://image-hub-pi.vercel.app",
    tags: ["React", "Stripe", "Firebase"],
  },
  
  {
    title: "ClimBuzz",
    description: "A website where you can search weather about your city.",
    image: project_5,
    github: "https://github.com/FZRAJPUT/ClimBuzz",
    demo: "https://clima-buzz.vercel.app",
    tags: ["React", "API's", "OpenWeatherMap API"],
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-[200px] object-cover transition-all group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <a href={project.github} target="_blank">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </a>
                <a href={project.demo} target="_blank">
                  <Button size="sm">
                    <Globe className="w-4 h-4 mr-2" />
                    {
                      project.demo === null ? "Not Available" : "Demo"
                    }
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
