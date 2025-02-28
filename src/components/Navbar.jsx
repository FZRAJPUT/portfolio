import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking on mobile
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
        {/* Logo */}

        <div className="font-bold text-xl">
          <a href="#">SUBHASH KUMAR</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["about", "experience", "education", "projects", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium hover:underline"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="sm:hidden flex"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </header>
  );
}
