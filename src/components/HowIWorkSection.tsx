import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Perceber o Negócio",
    description: "Análise profunda das tuas operações, workflows e pontos de fricção para identificar as oportunidades de automação com maior impacto."
  },
  {
    number: "02",
    title: "Desenhar o Sistema de AI",
    description: "Arquitectar uma solução à medida usando a combinação certa de modelos de AI, ferramentas e integrações para as tuas necessidades específicas."
  },
  {
    number: "03",
    title: "Implementar e Lançar",
    description: "Construir, testar e lançar o sistema no teu ambiente real com o mínimo de disrupção às operações em curso."
  },
  {
    number: "04",
    title: "Iterar ou Escalar",
    description: "Monitorizar performance, refinar o sistema com base em resultados reais, e expandir para novos casos de uso à medida que o valor é comprovado."
  }
];

const HowIWorkSection = () => {
  return (
    <section className="py-32 relative bg-secondary/20">
      <div className="container px-6 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Como Trabalho
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma abordagem estruturada que vai da compreensão ao impacto.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative flex gap-6 md:gap-10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center relative z-10">
                    <span className="font-heading text-lg font-bold text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
