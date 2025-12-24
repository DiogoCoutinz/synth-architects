import { motion } from "framer-motion";
import { Package, Wrench, Users } from "lucide-react";

const products = [
  {
    icon: Package,
    title: "Soluções de AI Productizadas",
    description: "Sistemas de AI pré-construídos e testados para desafios comuns de negócio. Rápidos de implementar, resultados imediatos.",
    tag: "Implementação Rápida"
  },
  {
    icon: Wrench,
    title: "Sistemas de AI Personalizados",
    description: "Automação desenhada e construída especificamente para as tuas operações e workflows únicos. Done-for-you.",
    tag: "Soluções à Medida"
  },
  {
    icon: Users,
    title: "AI Partner",
    description: "Colaboração de longo prazo para identificar, desenhar e implementar continuamente oportunidades de AI na tua organização.",
    tag: "Parceria Estratégica"
  }
];

const ProductsSection = () => {
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
            Formas de Colaboração
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolhe o modelo de trabalho que melhor se adapta às tuas necessidades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary/80 bg-primary/10 rounded-full">
                    {product.tag}
                  </span>
                  
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
