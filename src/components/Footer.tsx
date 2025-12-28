import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 border-t border-border/30">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-2 tracking-tight">Diogo Coutinho</h3>
            <p className="text-sm text-muted-foreground/60 max-w-xs">
              AI Systems & Automation
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex items-center gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button 
              onClick={() => scrollToSection("servicos")}
              className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("projectos")}
              className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              Projectos
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              Contacto
            </button>
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="https://linkedin.com/in/diogocoutinho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-border/30 flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/diogocoutinho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-border/30 flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="mailto:diogolemecoutinho@gmail.com"
              className="w-10 h-10 rounded-xl border border-border/30 flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="pt-8 border-t border-border/30 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-muted-foreground/40 font-mono">
            © {new Date().getFullYear()} — Lisboa, Portugal
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
