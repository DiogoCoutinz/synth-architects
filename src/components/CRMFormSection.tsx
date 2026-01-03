import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const N8N_WEBHOOK_URL = "https://n8n.diogocoutinho.cloud/webhook/CRM";

const CRMFormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telemovel: "",
    empresa: "",
    faturacao_estimada: "",
    tamanho_equipa: "",
    urgencia: "",
    dor_principal: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const cleanedPhone = phone.replace(/\s/g, "");
    return cleanedPhone.length >= 9;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Nome validation (min 2 chars)
    if (formData.nome.trim().length < 2) {
      newErrors.nome = "Nome deve ter pelo menos 2 caracteres";
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor insere um email válido";
    }

    // Phone validation (min 9 digits)
    if (!formData.telemovel.trim()) {
      newErrors.telemovel = "Telemóvel é obrigatório";
    } else if (!validatePhone(formData.telemovel)) {
      newErrors.telemovel = "Por favor insere um número válido (mín. 9 dígitos)";
    }

    // Empresa validation
    if (!formData.empresa.trim()) {
      newErrors.empresa = "Nome da empresa é obrigatório";
    }

    // Faturação validation
    if (!formData.faturacao_estimada) {
      newErrors.faturacao_estimada = "Seleciona a faturação anual";
    }

    // Tamanho equipa validation
    if (!formData.tamanho_equipa) {
      newErrors.tamanho_equipa = "Seleciona a dimensão da equipa";
    }

    // Urgência validation
    if (!formData.urgencia) {
      newErrors.urgencia = "Seleciona a urgência";
    }

    // Dor principal validation (min 10 chars)
    if (formData.dor_principal.trim().length < 10) {
      newErrors.dor_principal = "Por favor descreve com pelo menos 10 caracteres";
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
        origem: "Site",
        timestamp: new Date().toISOString(),
      });

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="formulario" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" />

      <div className="container px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Conta-me sobre o teu negócio e como posso ajudar-te a crescer com automação e AI.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="py-10 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl mb-3">Mensagem enviada!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Obrigado pelo contacto. Respondo em menos de 24h.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Nome Completo */}
                <div className="space-y-1.5">
                  <Label htmlFor="nome" className="text-sm">
                    Nome Completo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="O teu nome"
                    className={`bg-background h-10 sm:h-11 ${errors.nome ? "border-destructive" : ""}`}
                  />
                  {errors.nome && <p className="text-xs text-destructive">{errors.nome}</p>}
                </div>

                {/* Email & Telemóvel - Side by side on desktop */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm">
                      Email Profissional <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@empresa.com"
                      className={`bg-background h-10 sm:h-11 ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="telemovel" className="text-sm">
                      Telemóvel <span className="text-destructive">*</span>
                      <span className="text-muted-foreground font-normal text-xs ml-1">(WhatsApp)</span>
                    </Label>
                    <Input
                      id="telemovel"
                      name="telemovel"
                      type="tel"
                      placeholder="+351 912 345 678"
                      value={formData.telemovel}
                      onChange={handleInputChange}
                      className={`bg-background h-10 sm:h-11 ${errors.telemovel ? "border-destructive" : ""}`}
                    />
                    {errors.telemovel && <p className="text-xs text-destructive">{errors.telemovel}</p>}
                  </div>
                </div>

                {/* Nome da Empresa */}
                <div className="space-y-1.5">
                  <Label htmlFor="empresa" className="text-sm">
                    Nome da Empresa <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    placeholder="A tua empresa"
                    className={`bg-background h-10 sm:h-11 ${errors.empresa ? "border-destructive" : ""}`}
                  />
                  {errors.empresa && <p className="text-xs text-destructive">{errors.empresa}</p>}
                </div>

                {/* Faturação & Tamanho Equipa - Side by side */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm">
                      Faturação Anual <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.faturacao_estimada}
                      onValueChange={(value) => handleSelectChange("faturacao_estimada", value)}
                    >
                      <SelectTrigger className={`bg-background h-10 sm:h-11 ${errors.faturacao_estimada ? "border-destructive" : ""}`}>
                        <SelectValue placeholder="Seleciona" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50" position="popper" sideOffset={4}>
                        <SelectItem value="0-50k">0 - 50k €</SelectItem>
                        <SelectItem value="50k-200k">50k - 200k €</SelectItem>
                        <SelectItem value="200k-1M">200k - 1M €</SelectItem>
                        <SelectItem value="1M-5M">1M - 5M €</SelectItem>
                        <SelectItem value="5M+">+5M €</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.faturacao_estimada && <p className="text-xs text-destructive">{errors.faturacao_estimada}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm">
                      Dimensão da Equipa <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.tamanho_equipa}
                      onValueChange={(value) => handleSelectChange("tamanho_equipa", value)}
                    >
                      <SelectTrigger className={`bg-background h-10 sm:h-11 ${errors.tamanho_equipa ? "border-destructive" : ""}`}>
                        <SelectValue placeholder="Seleciona" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50" position="popper" sideOffset={4}>
                        <SelectItem value="solo">Eu (Solo)</SelectItem>
                        <SelectItem value="2-5">2 - 5 pessoas</SelectItem>
                        <SelectItem value="6-20">6 - 20 pessoas</SelectItem>
                        <SelectItem value="21-50">21 - 50 pessoas</SelectItem>
                        <SelectItem value="50+">+ 50 pessoas</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.tamanho_equipa && <p className="text-xs text-destructive">{errors.tamanho_equipa}</p>}
                  </div>
                </div>

                {/* Urgência - Radio Group */}
                <div className="space-y-2.5">
                  <Label className="text-sm">
                    Quão urgente é resolver este problema? <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.urgencia}
                    onValueChange={(value) => handleSelectChange("urgencia", value)}
                    className="flex flex-wrap gap-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="muito-urgente" id="muito-urgente" />
                      <Label htmlFor="muito-urgente" className="text-sm font-normal cursor-pointer">
                        Muito Urgente
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="proximas-semanas" id="proximas-semanas" />
                      <Label htmlFor="proximas-semanas" className="text-sm font-normal cursor-pointer">
                        Próximas semanas
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="explorar" id="explorar" />
                      <Label htmlFor="explorar" className="text-sm font-normal cursor-pointer">
                        Estou só a explorar
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.urgencia && <p className="text-xs text-destructive">{errors.urgencia}</p>}
                </div>

                {/* Dor Principal - Textarea */}
                <div className="space-y-1.5">
                  <Label htmlFor="dor_principal" className="text-sm">
                    Onde achas que posso ser mais útil? <span className="text-destructive">*</span>
                  </Label>
                  <p className="text-xs text-muted-foreground mb-1">
                    Que processos queres automatizar? Que problema queres resolver com AI?
                  </p>
                  <Textarea
                    id="dor_principal"
                    name="dor_principal"
                    value={formData.dor_principal}
                    onChange={handleInputChange}
                    placeholder="Ex: Perco muito tempo a responder a emails repetitivos, quero automatizar o suporte ao cliente..."
                    className={`bg-background min-h-[100px] resize-none ${errors.dor_principal ? "border-destructive" : ""}`}
                  />
                  {errors.dor_principal && <p className="text-xs text-destructive">{errors.dor_principal}</p>}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full mt-4 h-11 sm:h-12"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "A enviar..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CRMFormSection;
