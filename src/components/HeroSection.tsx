import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import LiquidEther from "@/components/LiquidEther";
import CRMFormDialog from "@/components/CRMFormDialog";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Liquid Ether Background */}
        <div className="absolute inset-0 opacity-40">
          <LiquidEther
            colors={['#06b6d4', '#0ea5e9', '#8b5cf6']}
            mouseForce={50}
            cursorSize={180}
            isViscous={false}
            viscous={20}
            iterationsViscous={20}
            iterationsPoisson={20}
            resolution={0.6}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.6}
            autoIntensity={3.0}
            takeoverDuration={0.2}
            autoResumeDelay={2500}
            autoRampDuration={0.5}
          />
        </div>

        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        <motion.div 
          className="container relative z-10 px-6 md:px-8"
          style={{ opacity }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Diogo Coutinho
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground max-w-4xl">
                  Elimino trabalho manual com <span className="text-primary font-medium">sistemas de AI</span>
                </p>
                <p className="text-lg md:text-xl text-muted-foreground/60 max-w-3xl">
                  Ajudo empresas a escalar sem fricção através de automação inteligente
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button 
                onClick={() => setIsFormOpen(true)} 
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
              >
                Falar Comigo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => scrollToSection("projectos")} 
                variant="ghost"
                size="lg"
                className="h-12 px-8 text-muted-foreground hover:text-foreground"
              >
                Ver Produtos
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"
          />
        </motion.div>
      </section>

      <CRMFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default HeroSection;
