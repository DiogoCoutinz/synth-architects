import { motion } from "framer-motion";
import { Cpu, Workflow, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Implementation",
    description: "I integrate AI models and tools into your existing systems, turning complex technology into practical business solutions."
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "I identify repetitive tasks across your operations and design automated workflows that run without human intervention."
  },
  {
    icon: TrendingUp,
    title: "Scalable Systems",
    description: "I build AI systems designed to grow with your business, handling increased volume without proportional cost increases."
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
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg">
            I help companies move from manual processes to intelligent, automated operations. 
            No buzzwords — just real systems that work.
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
