"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import profile from "./profile.jpg";
import resume from './_subhash_1.pdf'

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = resume;
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="py-24 flex mt-14 flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-full w-32 h-32 mb-8 overflow-hidden border-2 border-primary mx-auto">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover object-center scale-[2]"
            width={128}
            height={128}
          />
        </div>
          <h1 className="text-4xl font-bold mb-4">SUBHASH KUMAR</h1>
        <h2 className="text-2xl text-muted-foreground mb-6">
          {text}
          <span className="animate-blink">|</span>
        </h2>
        <div className="flex gap-4 justify-center mb-8">
          <a href="https://github.com/FZRAJPUT" target="_blank">
            <Button variant="outline" size="icon">
              <Github className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/subhash-kumar-f98z" target="_blank">
            <Button variant="outline" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://www.instagram.com/subhash_kushwahaa" target="_blank">
            <Button variant="outline" size="icon">
              <Instagram />
            </Button>
          </a>
        </div>
        <div className="flex gap-4 justify-center">
          <Button
            className="group"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Button>
          <Button variant="outline" onClick={handleDownloadResume}>
            Download Resume
            <Download className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
