const ProjectCard = ({ title, description, image, tech, demoLink, codeLink }) => (
  <div
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img
      src={image || "/placeholder.svg"}
      alt={title}
      className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={demoLink}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          Live Demo
        </a>
        <a
          href={codeLink}
          className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          View Code
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React.js and Node.js",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Two",
      description: "E-commerce platform with payment integration",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Three",
      description: "Social media dashboard with real-time updates",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React", "Firebase", "Tailwind"],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  return (
    (<section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>)
  );
}

export default Projects

