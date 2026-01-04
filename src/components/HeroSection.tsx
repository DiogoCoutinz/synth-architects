import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import LiquidEther from "@/components/LiquidEther";
import CRMFormDialog from "@/components/CRMFormDialog";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
        {/* Liquid Ether Background - mais subtil */}
        <div className="absolute inset-0 opacity-20">
          <LiquidEther
            colors={['#06b6d4', '#0ea5e9', '#8b5cf6']}
            mouseForce={40}
            cursorSize={160}
            isViscous={false}
            viscous={15}
            iterationsViscous={15}
            iterationsPoisson={15}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.5}
            takeoverDuration={0.3}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Overlay para clarear mais */}
        <div className="absolute inset-0 bg-white/40" />
        
        {/* Grid subtil */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container relative z-10 mx-auto px-6 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Construímos o Futuro da sua Empresa com{" "}
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    AI
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Transformamos processos complexos em sistemas automatizados inteligentes que aceleram a tua organização rumo à era da Inteligência Artificial.
                </motion.p>
              </div>

              {/* CTA with Metric */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <Button 
                  onClick={() => setIsFormOpen(true)} 
                  size="lg"
                  className="group h-14 px-10 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Falar com a nossa equipa
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>

                {/* Metric */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-4xl font-bold text-slate-900">+50</div>
                  <div className="text-sm text-slate-600 leading-tight">
                    Soluções<br />Implementadas
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Landing Image - BIGGER */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-2xl">
                <motion.img
                  src="/landing.png"
                  alt="AI Workflow Layers"
                  className="w-full h-auto drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                
                {/* Glow effects */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-slate-300 via-slate-500 to-slate-300"
          />
        </motion.div>
      </section>

      <CRMFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default HeroSection;
