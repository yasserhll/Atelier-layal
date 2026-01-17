import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-new.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "À Propos" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Expérience" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 shadow-elegant backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo + Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 text-left transition-opacity hover:opacity-80"
          >
            <img
              src={logo}
              alt="Atelier Layal - Achraf Hallaji"
              className={`h-12 w-auto transition-all ${
                isScrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />

            <div className="leading-tight">
              <span
                className={`block font-display text-lg ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
              >
                Atelier Layal
              </span>
              <span
                className={`block text-xs tracking-wide ${
                  isScrolled ? "text-muted-foreground" : "text-cream/70"
                }`}
              >
                by Achraf Hallaji
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-body text-sm uppercase tracking-widest transition-colors hover:text-gold ${
                  isScrolled ? "text-muted-foreground" : "text-cream/80"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-cream"}`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/98 backdrop-blur-md md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="py-4 font-display text-3xl text-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
