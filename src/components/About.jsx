import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiC,
  SiCplusplus,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const skills = [
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-green-800" },
  { name: "React.js", icon: SiReact, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "React Native", icon: FaReact, color: "text-blue-500" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "GitHub", icon: SiGithub, color: "text-purple-800" },
  { name: "C", icon: SiC, color: "text-blue-700" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-red-500" }, // JWT Authentication
  { name: "API's", icon: SiPostman, color: "text-orange-600" }, // API Testing
  { name: "RESTful API's", icon: SiPostman, color: "text-orange-600" }, // API Handling
  { name: "ShadCN", icon: SiVercel, color: "text-black" }, // Best alternative icon
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate Full Stack Developer with 1 year of experience
              building web applications. I specialize in creating responsive,
              user-friendly interfaces and scalable backend systems.
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 max-w-[750px] text-center">
          <h3 className="text-xl font-semibold mb-6">Skills</h3>
          <div className="flex  flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="flex cursor-pointer items-center gap-2 px-4 py-2 text-lg transition-transform transform hover:scale-105 hover:bg-gray-100 hover:text-gray-500 shadow-lg rounded-lg"
              >
                {React.createElement(skill.icon, { size: 22, className: skill.color })}
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}