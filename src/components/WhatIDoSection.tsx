import { motion } from "framer-motion";
import { Cpu, Workflow, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Implementação de AI",
    description: "Integro modelos e ferramentas de AI nos teus sistemas existentes, transformando tecnologia complexa em soluções práticas para o negócio."
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Identifico tarefas repetitivas nas tuas operações e desenho workflows automatizados que funcionam sem intervenção humana."
  },
  {
    icon: TrendingUp,
    title: "Sistemas Escaláveis",
    description: "Construo sistemas de AI preparados para crescer com o teu negócio, suportando mais volume sem aumentar custos proporcionalmente."
  }
];

const WhatIDoSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container px-6 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O Que Faço
          </h2>
          <p className="text-muted-foreground text-lg">
            Ajudo empresas a passar de processos manuais para operações inteligentes e automatizadas. 
            Sem buzzwords — sistemas reais que funcionam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
