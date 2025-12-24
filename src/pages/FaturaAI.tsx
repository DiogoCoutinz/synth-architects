import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Mail, Upload, TableProperties, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const benefits = [
  {
    icon: Mail,
    text: "Recolha automática de faturas (email ou upload)"
  },
  {
    icon: TableProperties,
    text: "Dados organizados em Excel ou dashboard"
  },
  {
    icon: Check,
    text: "Pronto para contabilista e equipas internas"
  }
];

const FaturaAI = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    email: "",
    telemovel: "",
    areaActividade: "",
    facturacaoAnual: "",
    numeroFaturas: "",
    urgencia: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 border-b border-border/50">
        <div className="container px-6 md:px-8">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        
        <div className="container px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center glow-primary">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <motion.h1
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Deixa de perder horas todos os meses a gerir faturas manualmente
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Este sistema de AI recolhe, organiza e extrai dados de faturas automaticamente, 
              sem mudares os teus processos actuais.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20">
        <div className="container px-6 md:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 bg-card">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/E3IL7N0E5-k"
                title="Automatização de Faturas - Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container px-6 md:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => setIsFormOpen(true)}
            >
              Quero ver como funciona no meu caso
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">
              {isSubmitted ? "Obrigado" : "Fala-me sobre a tua empresa"}
            </DialogTitle>
          </DialogHeader>

          {isSubmitted ? (
            <motion.div
              className="py-8 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Obrigado. Vou analisar a informação e entro em contacto caso esta solução faça sentido para a tua empresa.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 pt-2">
              <div className="space-y-2">
                <Label htmlFor="nomeEmpresa">Nome da empresa</Label>
                <Input
                  id="nomeEmpresa"
                  name="nomeEmpresa"
                  value={formData.nomeEmpresa}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telemovel">Telemóvel</Label>
                <Input
                  id="telemovel"
                  name="telemovel"
                  type="tel"
                  value={formData.telemovel}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="areaActividade">Área de actividade</Label>
                <Input
                  id="areaActividade"
                  name="areaActividade"
                  value={formData.areaActividade}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="facturacaoAnual">Facturação anual aproximada</Label>
                <Input
                  id="facturacaoAnual"
                  name="facturacaoAnual"
                  value={formData.facturacaoAnual}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="numeroFaturas">Número médio de faturas por mês</Label>
                <Input
                  id="numeroFaturas"
                  name="numeroFaturas"
                  value={formData.numeroFaturas}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-3">
                <Label>Urgência em resolver este problema</Label>
                <RadioGroup
                  value={formData.urgencia}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, urgencia: value }))}
                  className="flex flex-col gap-2"
                  required
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="imediata" id="imediata" />
                    <Label htmlFor="imediata" className="font-normal cursor-pointer">Imediata</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="proximas-semanas" id="proximas-semanas" />
                    <Label htmlFor="proximas-semanas" className="font-normal cursor-pointer">Próximas semanas</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="explorar" id="explorar" />
                    <Label htmlFor="explorar" className="font-normal cursor-pointer">Apenas a explorar</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" variant="hero" className="w-full mt-6">
                Enviar
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container px-6 md:px-8">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Systems & Automation
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaturaAI;
