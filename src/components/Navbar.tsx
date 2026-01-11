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
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm" 
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }} 
            className="text-xl font-heading font-bold tracking-tight text-slate-900"
          >
            Diogo Coutinho
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="/#servicos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("servicos");
              }}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Serviços
            </a>
            <a
              href="/#projectos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projectos");
              }}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Produtos
            </a>
            <Button 
              asChild
              size="sm"
              className="bg-slate-900 hover:bg-slate-800 text-white border-0 px-6 h-10 cursor-pointer"
            >
              <a 
                href="/#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contacto");
                }}
              >
                Contacto
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a
              href="/#servicos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("servicos");
              }}
              className="block w-full text-left py-3 text-sm font-medium text-slate-600"
            >
              Serviços
            </a>
            <a
              href="/#projectos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projectos");
              }}
              className="block w-full text-left py-3 text-sm font-medium text-slate-600"
            >
              Produtos
            </a>
            <Button 
              asChild
              size="sm" 
              className="w-full bg-slate-900 hover:bg-slate-800 text-white"
            >
              <a 
                href="/#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contacto");
                }}
              >
                Contacto
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;


