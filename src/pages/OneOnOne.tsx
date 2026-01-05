import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock, Video, Target } from "lucide-react";
import LiquidEther from "@/components/LiquidEther";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/aFa14naJGay6g8ngvlgMw00";

const benefits = [
  {
    icon: Target,
    text: "Diagnóstico directo do teu setup"
  },
  {
    icon: Check,
    text: "Soluções aplicáveis no próprio dia"
  },
  {
    icon: Video,
    text: "Gravação incluída"
  }
];

const steps = [
  {
    number: "1",
    title: "Garantir sessão",
    description: "Pagamento único"
  },
  {
    number: "2",
    title: "Escolher horário",
    description: "Acesso imediato"
  },
    {
      number: "3",
      title: "Sessão prática",
      description: "1-on-1 com especialista"
    }
  ];

const OneOnOne = () => {
  const handlePayment = () => {
    // Redirect to Stripe payment
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
      {/* Liquid Ether Background */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            
            {/* Right Column - Video (aparece primeiro no mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 lg:order-2"
            >
              <p className="text-sm font-medium text-slate-600 text-center">
                Explico em 3 minutos se esta sessão é ou não para ti
              </p>
              
              {/* Video Embed - Placeholder */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Video className="w-16 h-16 text-cyan-400 mx-auto" />
                    <p className="text-white font-medium">Vídeo em breve</p>
                  </div>
                </div>
                {/* Quando tiveres o vídeo, usa isto:
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Consultoria 1-on-1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                */}
              </div>
            </motion.div>
            
            {/* Left Column - Conversion (aparece segundo no mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:order-1"
            >
              {/* Headline */}
              <div className="space-y-4">
                <motion.h1
                  className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Consultoria 1-on-1 em{" "}
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Automação & AI
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-slate-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Sessão prática de 60 minutos focada no teu caso específico.
                  <br />
                  <span className="font-semibold text-slate-900">Não é uma chamada comercial.</span>
                </motion.p>
              </div>

              {/* Benefits */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* How it works */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Como funciona
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg mx-auto mb-2">
                        {step.number}
                      </div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="space-y-4 py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Micro-copy acima do botão */}
                <p className="text-sm text-slate-600 text-center font-medium">
                  Sessão individual • Vagas limitadas por semana
                </p>

                <Button
                  size="lg"
                  onClick={handlePayment}
                  className="w-full h-16 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Garantir Sessão 1-on-1 — €75
                </Button>

                <p className="text-sm text-slate-600 text-center leading-relaxed">
                  <span className="font-semibold text-slate-900">Garantia:</span> Se nos primeiros 10 minutos percebermos que não faz sentido para o teu caso, a sessão é cancelada e não és cobrado.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OneOnOne;

