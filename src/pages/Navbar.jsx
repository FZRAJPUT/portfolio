"use client";
import { useState } from "react";
import { Menu, X, User, Home, Info, Briefcase, FileText, Mail } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <a className="flex items-center space-x-2" href="#">
          <User className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Subhash Kumar</span>
        </a>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          <button onClick={() => handleScroll("home")} className="flex cursor-pointer items-center space-x-2 transition-colors hover:text-foreground/80 text-foreground">
            <span>Home</span>
          </button>
          <button onClick={() => handleScroll("about")} className="flex cursor-pointer items-center space-x-2 transition-colors hover:text-foreground/80 text-foreground">
            <span>About</span>
          </button>
          <button onClick={() => handleScroll("projects")} className="flex cursor-pointer items-center space-x-2 transition-colors hover:text-foreground/80 text-foreground">
            <span>Projects</span>
          </button>
          <button onClick={() => handleScroll("resume")} className="flex cursor-pointer items-center space-x-2 transition-colors hover:text-foreground/80 text-foreground">
            <span>Resume</span>
          </button>
          <button onClick={() => handleScroll("contact")} className="flex cursor-pointer items-center space-x-2 transition-colors hover:text-foreground/80 text-foreground">
            <span>Contact</span>
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed top-14 right-0 w-full h-screen bg-background/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/100 border-l p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 text-sm font-medium text-center">
          <button onClick={() => handleScroll("home")} className="flex items-center justify-center space-x-3 hover:text-foreground/80">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </button>
          <button onClick={() => handleScroll("about")} className="flex items-center justify-center space-x-4 hover:text-foreground/80">
            <Info className="h-5 w-5" />
            <span>About</span>
          </button>
          <button onClick={() => handleScroll("projects")} className="flex items-center justify-center space-x-2 hover:text-foreground/80">
            <Briefcase className="h-5 w-5" />
            <span>Projects</span>
          </button>
          <button onClick={() => handleScroll("resume")} className="flex items-center justify-center space-x-2 hover:text-foreground/80">
            <FileText className="h-5 w-5" />
            <span>Resume</span>
          </button>
          <button onClick={() => handleScroll("contact")} className="flex items-center justify-center space-x-2 hover:text-foreground/80">
            <Mail className="h-5 w-5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
