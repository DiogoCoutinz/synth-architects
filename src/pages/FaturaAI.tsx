import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, TableProperties, Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LiquidEther from "@/components/LiquidEther";

// Declare Cal on window for TypeScript
declare global {
  interface Window {
    Cal?: any;
  }
}

const benefits = [
  {
    icon: Mail,
    text: "Recolha automática de faturas (email ou upload)",
  },
  {
    icon: TableProperties,
    text: "Dados organizados em Excel ou dashboard",
  },
  {
    icon: Check,
    text: "Pronto para contabilista e equipas internas",
  },
];

const N8N_WEBHOOK_URL = "https://n8n.diogocoutinho.cloud/webhook/faturasAI";

const CAL_BOOKING_URL = "https://cal.com/diogo-coutinho-eqeob3/implementacaofaturaai";

const FaturaAI = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBookMeeting = () => {
    window.open(CAL_BOOKING_URL, "_blank");
  };
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    email: "",
    telemovel: "",
    facturacaoAnual: "",
    numeroFaturas: "",
    urgencia: "",
    estruturaPastas: "",
    notaExtra: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor insere um email válido";
    }

    if (!formData.telemovel.trim()) {
      newErrors.telemovel = "Telemóvel é obrigatório";
    } else if (!validatePhone(formData.telemovel)) {
      newErrors.telemovel = "Por favor insere um número válido (ex: +351912345678)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const payload = JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      });

      // Nota: no browser, chamadas cross-origin com Content-Type application/json
      // disparam preflight CORS e costumam falhar em webhooks n8n.
      // sendBeacon/no-cors permite "enviar" os dados sem depender de CORS.
      const beaconOk = navigator.sendBeacon?.(
        N8N_WEBHOOK_URL,
        new Blob([payload], { type: "text/plain;charset=UTF-8" }),
      );

      if (!beaconOk) {
        await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=UTF-8",
          },
          body: payload,
        });
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero + Video + CTA - Single focused section */}
      <section className="py-6 sm:py-8 md:py-16 relative min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] animate-glow-pulse" />

        <div className="container px-4 md:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Headline */}
            <motion.h1
              className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 leading-snug text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A gestão de faturas não devia ocupar o teu tempo
            </motion.h1>

            <motion.p
              className="text-xs sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-4 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Este sistema de AI recolhe, organiza e extrai dados de faturas automaticamente, sem mudares os teus
              processos actuais.
            </motion.p>

            {/* Video - Immediately visible */}
            <motion.div
              className="mb-4 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden border border-border/50 bg-card shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/J_6fzpv-kUQ"
                  title="Automatização de Faturas - Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* CTA Button - Right below video */}
            <motion.div
              className="text-center mb-5 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => setIsFormOpen(true)}
              >
                Quero ver como funciona no meu caso
              </Button>
            </motion.div>

            {/* Minimal bullets */}
            <motion.div
              className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 text-xs sm:text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 justify-center">
                  <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="w-[calc(100vw-24px)] sm:w-[calc(100vw-32px)] max-w-lg bg-card border-border max-h-[90vh] sm:max-h-[85vh] p-0 gap-0 rounded-xl">
          <DialogHeader className="px-4 sm:px-6 py-3 sm:py-4 sticky top-0 bg-card z-10 border-b border-border/50 rounded-t-xl">
            <DialogTitle className="font-heading text-base sm:text-xl">
            {isSubmitted ? "Obrigado" : "Fale-nos sobre a sua empresa"}
            </DialogTitle>
          </DialogHeader>

          <div className="overflow-y-auto px-4 sm:px-6 pb-4 sm:pb-6 flex-1 max-h-[60vh] sm:max-h-none">
            {isSubmitted ? (
              <motion.div
                className="py-6 sm:py-8 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-heading text-base sm:text-lg mb-2">Formulário enviado!</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2 mb-6">
                  Obrigado pelo interesse. Agenda já uma chamada para ver como podemos ajudar.
                </p>
                <Button
                  variant="hero"
                  className="w-full sm:w-auto"
                  onClick={handleBookMeeting}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Marcar reunião
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4 pt-3">
                <div className="space-y-1">
                  <Label htmlFor="nomeEmpresa" className="text-xs sm:text-sm">
                    Nome da empresa
                  </Label>
                  <Input
                    id="nomeEmpresa"
                    name="nomeEmpresa"
                    value={formData.nomeEmpresa}
                    onChange={handleInputChange}
                    required
                    className="bg-background h-9 sm:h-10 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs sm:text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`bg-background h-9 sm:h-10 text-sm ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="telemovel" className="text-xs sm:text-sm">
                    Telemóvel <span className="text-destructive">*</span>
                    <span className="text-muted-foreground font-normal text-[10px] sm:text-xs ml-1">(WhatsApp)</span>
                  </Label>
                  <Input
                    id="telemovel"
                    name="telemovel"
                    type="tel"
                    placeholder="+351 912 345 678"
                    value={formData.telemovel}
                    onChange={handleInputChange}
                    required
                    className={`bg-background h-9 sm:h-10 text-sm ${errors.telemovel ? "border-destructive" : ""}`}
                  />
                  {errors.telemovel && <p className="text-xs text-destructive">{errors.telemovel}</p>}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="facturacaoAnual" className="text-xs sm:text-sm">
                    Facturação anual aproximada <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.facturacaoAnual}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, facturacaoAnual: value }))}
                    required
                  >
                    <SelectTrigger className="bg-background h-9 sm:h-10 text-sm">
                      <SelectValue placeholder="Selecciona a faixa" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50" position="popper" sideOffset={4}>
                      <SelectItem value="ate-100k">Até 100.000€</SelectItem>
                      <SelectItem value="100k-500k">100k€ – 500k€</SelectItem>
                      <SelectItem value="500k-2M">500k€ – 2M€</SelectItem>
                      <SelectItem value="2M-5M">2M€ – 5M€</SelectItem>
                      <SelectItem value="5M+">Mais de 5 Milhões €</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs sm:text-sm">Número médio de faturas por mês <span className="text-destructive">*</span></Label>
                  <Select
                    value={formData.numeroFaturas}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, numeroFaturas: value }))}
                    required
                  >
                    <SelectTrigger className="bg-background h-9 sm:h-10 text-sm">
                      <SelectValue placeholder="Selecciona uma opção" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50" position="popper" sideOffset={4}>
                      <SelectItem value="0-50">0 - 50</SelectItem>
                      <SelectItem value="50-200">50 - 200</SelectItem>
                      <SelectItem value="200-500">200 - 500</SelectItem>
                      <SelectItem value="500-1000">500 - 1000</SelectItem>
                      <SelectItem value="1000+">Mais de 1000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs sm:text-sm">Urgência em resolver este problema</Label>
                  <Select
                    value={formData.urgencia}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, urgencia: value }))}
                    required
                  >
                    <SelectTrigger className="bg-background h-9 sm:h-10 text-sm">
                      <SelectValue placeholder="Selecciona uma opção" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50" position="popper" sideOffset={4}>
                      <SelectItem value="imediata">Imediata</SelectItem>
                      <SelectItem value="proximas-semanas">Próximas semanas</SelectItem>
                      <SelectItem value="explorar">Apenas a explorar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="estruturaPastas" className="text-xs sm:text-sm text-muted-foreground">
                    Estrutura de pastas pretendida (Opcional)
                  </Label>
                  <Input
                    id="estruturaPastas"
                    name="estruturaPastas"
                    placeholder="Ex: Ano > Fornecedor > Mês"
                    value={formData.estruturaPastas}
                    onChange={handleInputChange}
                    className="bg-background h-9 sm:h-10 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="notaExtra" className="text-xs sm:text-sm text-muted-foreground leading-tight">
                    Mais alguma coisa que gostava que o sistema fizesse?
                  </Label>
                  <Textarea
                    id="notaExtra"
                    name="notaExtra"
                    placeholder="Descreve a tua situação específica..."
                    value={formData.notaExtra}
                    onChange={handleInputChange}
                    className="bg-background min-h-[60px] sm:min-h-[70px] resize-none text-sm"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full mt-2 sm:mt-3 h-10 sm:h-11 text-sm shadow-lg shadow-primary/20" disabled={isLoading}>
                  {isLoading ? "A enviar..." : "Enviar"}
                </Button>
                <p className="text-[10px] text-center text-muted-foreground mt-2">
                  🔒 Os seus dados estão seguros e serão usados apenas para preparar a demonstração.
                </p>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-4 sm:py-8 md:py-12 border-t border-border/50">
        <div className="container px-4 md:px-8">
          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Systems & Automation
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaturaAI;
