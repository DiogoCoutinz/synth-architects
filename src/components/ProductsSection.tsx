import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Faturas AI",
    description: "Extração automática de dados",
    link: "/faturaAI",
    year: "2024"
  },
  {
    number: "02",
    title: "N8N Workflows",
    description: "Automação personalizada",
    year: "2024"
  },
  {
    number: "03",
    title: "AI Strategy",
    description: "Consultoria e implementação",
    year: "2024"
  }
];

const ProductsSection = () => {
  return (
    <section id="projectos" className="py-32 md:py-40 relative bg-secondary/10">
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
            Produtos
          </motion.h2>

          <div className="space-y-1">
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {project.link ? (
                  <Link to={project.link}>
                    <motion.div
                      className="group py-8 border-t border-border/30 hover:border-primary/30 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-12">
                          <span className="text-sm text-muted-foreground/50 font-mono w-12">
                            {project.number}
                          </span>
                          <div>
                            <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground/60">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className="text-sm text-muted-foreground/50 font-mono hidden md:block">
                            {project.year}
                          </span>
                          <ArrowUpRight className="w-6 h-6 text-muted-foreground/30 group-hover:text-primary group-hover:scale-125 transition-all duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div
                    className="group py-8 border-t border-border/30 opacity-50 cursor-not-allowed"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-12">
                        <span className="text-sm text-muted-foreground/50 font-mono w-12">
                          {project.number}
                        </span>
                        <div>
                          <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground/60">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className="text-sm text-muted-foreground/50 font-mono hidden md:block">
                          {project.year}
                        </span>
                        <span className="text-xs text-muted-foreground/30">Em breve</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
