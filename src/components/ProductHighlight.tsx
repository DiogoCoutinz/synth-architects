import { motion } from "framer-motion";
import { FileText, ArrowRight, Zap, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Extracção automática de dados",
  "Suporte multi-formato",
  "Integração com ERP",
  "99%+ de precisão"
];

const ProductHighlight = () => {
  return (
    <section className="py-32 relative bg-secondary/20">
      <div className="container px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Background with gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
            <div className="absolute inset-[1px] rounded-3xl bg-card" />
            
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      Produto em Destaque
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    Automatização de Faturas
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Deixa de processar faturas manualmente. Este sistema de AI extrai dados de 
                    qualquer formato de fatura, valida-os, e envia directamente para o teu 
                    sistema de contabilidade — automaticamente.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground/80">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/faturaAI">
                      Saber Mais
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className="relative">
                  <motion.div
                    className="relative aspect-square max-w-sm mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Glow background */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px]" />
                    
                    {/* Main icon container */}
                    <div className="relative h-full flex items-center justify-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
                        <FileText className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                      </div>
                      
                      {/* Floating elements */}
                      <motion.div
                        className="absolute top-10 right-10 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Clock className="w-5 h-5 text-primary" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute bottom-10 left-10 w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      >
                        <Check className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
