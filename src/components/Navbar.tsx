import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/60 backdrop-blur-2xl border-b border-primary/10" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button 
            onClick={() => scrollToSection("hero")} 
            className="text-lg font-heading font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Diogo Coutinho
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-all duration-300"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projectos")}
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-all duration-300"
            >
              Projectos
            </button>
            <Button 
              onClick={() => scrollToSection("contacto")} 
              size="sm"
              className="bg-transparent border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-primary/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("servicos")}
              className="block w-full text-left py-2 text-xs uppercase tracking-wider text-muted-foreground"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projectos")}
              className="block w-full text-left py-2 text-xs uppercase tracking-wider text-muted-foreground"
            >
              Projectos
            </button>
            <Button onClick={() => scrollToSection("contacto")} size="sm" className="w-full">
              Contacto
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;


