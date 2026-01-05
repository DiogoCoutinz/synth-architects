import { motion } from "framer-motion";
import { Linkedin, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 border-t border-slate-200 bg-white">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-2 tracking-tight text-slate-900">Diogo Coutinho</h3>
            <p className="text-sm text-slate-600 max-w-xs">
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
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("projectos")}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
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
              href="https://www.linkedin.com/in/d--coutinho/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-50 text-slate-600 hover:text-cyan-600 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com/diogocoutinho.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-50 text-slate-600 hover:text-cyan-600 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/351928362223?text=Olá%20Diogo!%20Vi%20o%20teu%20site%20e%20quero%20mais%20informações%20sobre%20as%20tuas%20soluções%20de%20AI%20e%20automação."
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-50 text-slate-600 hover:text-cyan-600 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a 
              href="mailto:diogolemecoutinho@gmail.com"
              className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-50 text-slate-600 hover:text-cyan-600 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="pt-8 border-t border-slate-200 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} — Lisboa, Portugal
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
