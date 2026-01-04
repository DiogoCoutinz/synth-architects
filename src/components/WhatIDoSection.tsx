import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ServiceAction = "contact" | "cal" | "page";

const services: Array<{
  title: string;
  description: string;
  placeholder: string;
  borderGradient: string;
  image: string;
  buttonText: string;
  buttonAction: ServiceAction;
  calLink?: string;
}> = [
  {
    title: "AI Partner",
    description: "Parceria dedicada com reuniões semanais, automação contínua de processos e otimização constante das tuas operações",
    placeholder: "🤝",
    borderGradient: "from-cyan-400 via-blue-400 to-indigo-400",
    image: "/aipartner.png",
    buttonText: "Agendar Chamada",
    buttonAction: "contact"
  },
  {
    title: "Automação Simples",
    description: "Implementação rápida e eficiente de automações específicas para resolver problemas concretos do teu negócio",
    placeholder: "⚡",
    borderGradient: "from-green-400 via-emerald-400 to-teal-400",
    image: "/automacao.png",
    buttonText: "Agendar Chamada",
    buttonAction: "contact"
  },
  {
    title: "Formação & Palestras",
    description: "Sessões práticas e inspiradoras para capacitar a tua equipa e acelerar a adoção de AI na organização",
    placeholder: "🎯",
    borderGradient: "from-violet-400 via-purple-400 to-fuchsia-400",
    image: "/formacao.png",
    buttonText: "Agendar Chamada",
    buttonAction: "contact"
  },
  {
    title: "Consultoria 1-on-1",
    description: "1 hora de sessão comigo onde tiro todas as tuas dúvidas e te ensino a melhorar no n8n!!",
    placeholder: "💡",
    borderGradient: "from-orange-400 via-amber-400 to-yellow-400",
    image: "/1on1.png",
    buttonText: "Marca Já",
    buttonAction: "page",
    calLink: "/1on1"
  }
];

const WhatIDoSection = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section id="servicos" className="py-20 md:py-32 relative bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6 rounded-full border border-slate-900 text-xs uppercase tracking-wider font-semibold"
            >
              Como Posso Ajudar
            </motion.div>
            
            <motion.h2 
              className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Soluções Desenhadas Para<br className="hidden sm:block" /> Resultados Reais
            </motion.h2>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Do acompanhamento contínuo à automação pontual. Da formação de equipas 
              à consultoria estratégica. Escolhe o que melhor se adapta ao teu negócio.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative cursor-target"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Gradient Border Wrapper */}
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent hover:shadow-2xl transition-all duration-300">
                  <div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.borderGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  
                  {/* Card Content */}
                  <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-4 md:p-6 h-full flex flex-col">
                    {/* Image */}
                    <div className="w-full h-32 md:h-40 mb-3 md:mb-4 bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} opacity-10`} />
                      {service.image ? (
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <span className="text-4xl md:text-5xl relative z-10">{service.placeholder}</span>
                          <div className="absolute bottom-2 right-2 text-slate-600 text-xs font-mono">
                            placeholder
                          </div>
                        </>
                      )}
                    </div>
                    
                    <h3 className="font-heading text-lg md:text-xl font-bold mb-2 md:mb-3 tracking-tight text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed text-xs md:text-sm mb-3 md:mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Button */}
                    <Button
                      variant="outline"
                      className="w-full cursor-target group/btn relative overflow-hidden border-slate-700 hover:border-slate-600 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 text-xs md:text-sm h-9 md:h-10"
                      onClick={() => {
                        if (service.buttonAction === "page" && service.calLink) {
                          window.location.href = service.calLink;
                        } else if (service.buttonAction === "cal" && service.calLink) {
                          window.open(service.calLink, "_blank");
                        } else if (service.buttonAction === "contact" && onContactClick) {
                          onContactClick();
                        }
                      }}
                    >
                      <span className="relative z-10 text-white font-medium">
                        {service.buttonText}
                      </span>
                      <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 relative z-10 text-white group-hover/btn:translate-x-1 transition-transform" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover/btn:opacity-20 transition-opacity`} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              size="lg"
              className="cursor-target group h-11 md:h-12 px-6 md:px-8 text-sm md:text-base bg-slate-900 hover:bg-slate-800 text-white border-2 border-slate-900 hover:border-cyan-500/50 transition-all duration-300"
              onClick={() => onContactClick?.()}
            >
              Agendar Chamada
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
