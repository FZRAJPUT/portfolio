import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { BriefcaseIcon } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "SimTrak Solutions",
    period: "Nov-2024 - Present",
    description:
      "Led development of multiple web applications using React and Node.js. Managed team members and implemented scalable Back-End.",
    skills: ["React", "Node.js", "MongoDB", "Team Leadership"],
  },
  {
    title: "Web Developer Trainee",
    company: "InfoWiz",
    period: "June-2024 - July-2024",
    description: "Developed and maintained various client projects. Implemented responsive designs and RESTful APIs.",
    skills: ["React", "Express.js", "Node.js", "MongoDB"],
  },
  {
    title: "Python Trainee online",
    company: "Infosys springboard",
    period: "June-2023 - July-2023",
    description: "Learnt about basic's of Python. Learnt basic data types.",
    skills: ["Python"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <BriefcaseIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="flex items-center justify-between">
                        <span>{experience.title}</span>
                        <span className="text-[10px] text-muted-foreground">{experience.period}</span>
                      </CardTitle>
                      <p className="text-muted-foreground">{experience.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

