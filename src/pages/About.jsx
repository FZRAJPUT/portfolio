import React from "react";
import images from "../assets/images";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLock,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman, SiCplusplus, SiThunderbird, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500 text-3xl" /> },
  { name: "React Native", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600 text-3xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 text-3xl" /> },
  { name: "JWT", icon: <FaLock className="text-yellow-500 text-3xl" /> },
  { name: "REST API", icon: <TbApi className="text-purple-500 text-3xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl" /> },
  { name: "Thunder Client", icon: <SiThunderbird className="text-blue-400 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-purple-600 text-3xl" /> },
];

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid gap-10 px-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-6">
            I'm a full-stack developer with a passion for creating beautiful and functional web applications.
            With over 1 year of experience in web development, I specialize in building modern, responsive, and
            user-friendly applications.
          </p>

          <h3 className="text-xl font-bold mb-4">My Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white"
              >
                {skill.icon}
                <p className="mt-2 text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <img
            src={images.pic}
            alt="Profile"
            className="rounded-lg object-cover"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
