import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-32 md:py-48 relative overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container px-6 md:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
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
            className="mb-16"
          >
            <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              Vamos trabalhar juntos
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/60">
              Respondo em menos de 24h
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a
              href="mailto:diogolemecoutinho@gmail.com"
              className="group relative p-8 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start justify-between">
                <div>
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground/80 text-sm mb-4">diogolemecoutinho@gmail.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/351965449996"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start justify-between">
                <div>
                  <MessageSquare className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground/80 text-sm mb-4">+351 965 449 996</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;


