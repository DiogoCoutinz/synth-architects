import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

const ContactSection = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section id="contacto" className="py-20 md:py-32 relative overflow-hidden bg-white">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #06b6d4 1px, transparent 1px),
              linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900">
              Vamos trabalhar juntos
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-8">
              Respondo em menos de 24h
            </p>

            {/* CTA Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                size="lg"
                className="cursor-target group h-12 md:h-14 px-8 md:px-10 text-base md:text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => onContactClick?.()}
              >
                Agendar Chamada
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Links de Contacto Compactos */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="mailto:diogolemecoutinho@gmail.com"
              className="cursor-target flex items-center gap-2 hover:text-cyan-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">diogolemecoutinho@gmail.com</span>
              <span className="md:hidden">Email</span>
            </motion.a>

            <span className="text-slate-300">•</span>

            <motion.a
              href="https://wa.me/351928362223?text=Olá%20Diogo!%20Vi%20o%20teu%20site%20e%20quero%20mais%20informações%20sobre%20as%20tuas%20soluções%20de%20AI%20e%20automação."
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target flex items-center gap-2 hover:text-cyan-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>928 362 223</span>
            </motion.a>

            <span className="text-slate-300">•</span>

            <motion.a
              href="https://instagram.com/diogocoutinho.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target flex items-center gap-2 hover:text-cyan-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@diogocoutinho.ai</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;


