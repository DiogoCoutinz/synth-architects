import { motion } from "framer-motion";
import { Cpu, Workflow, Sparkles } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Systems",
    description: "Integração de modelos de AI em operações reais"
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Workflows inteligentes sem intervenção manual"
  },
  {
    icon: Sparkles,
    title: "Consulting",
    description: "Estratégia e implementação end-to-end"
  }
];

const WhatIDoSection = () => {
  return (
    <section id="servicos" className="py-32 md:py-40 relative">
      <div className="container px-6 md:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-24 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Serviços
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="mb-6">
                  <div className="relative w-16 h-16 mb-8">
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-2xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-semibold mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Line decoration */}
                <motion.div 
                  className="h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
