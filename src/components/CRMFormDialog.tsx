import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const N8N_WEBHOOK_URL = "https://n8n.diogocoutinho.cloud/webhook/CRM";

interface CRMFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CRMFormDialog = ({ open, onOpenChange }: CRMFormDialogProps) => {
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

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      telemovel: "",
      empresa: "",
      faturacao_estimada: "",
      tamanho_equipa: "",
      urgencia: "",
      dor_principal: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset form when closing
      setTimeout(() => resetForm(), 300);
    }
    onOpenChange(newOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (formData.nome.trim().length < 2) {
      newErrors.nome = "Nome deve ter pelo menos 2 caracteres";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor insere um email válido";
    }

    if (!formData.telemovel.trim()) {
      newErrors.telemovel = "Telemóvel é obrigatório";
    } else if (!validatePhone(formData.telemovel)) {
      newErrors.telemovel = "Por favor insere um número válido (mín. 9 dígitos)";
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = "Nome da empresa é obrigatório";
    }

    if (!formData.faturacao_estimada) {
      newErrors.faturacao_estimada = "Seleciona a faturação anual";
    }

    if (!formData.tamanho_equipa) {
      newErrors.tamanho_equipa = "Seleciona a dimensão da equipa";
    }

    if (!formData.urgencia) {
      newErrors.urgencia = "Seleciona a urgência";
    }

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
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[calc(100vw-24px)] sm:w-[calc(100vw-32px)] max-w-lg bg-card border-border max-h-[90vh] sm:max-h-[85vh] p-0 gap-0 rounded-xl">
        <DialogHeader className="px-4 sm:px-6 py-3 sm:py-4 sticky top-0 bg-card z-10 border-b border-border/50 rounded-t-xl">
          <DialogTitle className="font-heading text-base sm:text-xl">
            {isSubmitted ? "Obrigado!" : "Vamos conversar?"}
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto px-4 sm:px-6 pb-4 sm:pb-6 flex-1 max-h-[60vh] sm:max-h-none">
          {isSubmitted ? (
            <motion.div
              className="py-8 sm:py-10 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl mb-3">Formulário enviado com sucesso!</h3>
              <p className="text-muted-foreground leading-relaxed px-2">
                Obrigado pelo contacto. Respondo em menos de 24h.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 pt-3">
              {/* Nome Completo */}
              <div className="space-y-1">
                <Label htmlFor="nome" className="text-xs sm:text-sm">
                  Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="O teu nome"
                  className={`bg-background h-9 sm:h-10 text-sm ${errors.nome ? "border-destructive" : ""}`}
                />
                {errors.nome && <p className="text-xs text-destructive">{errors.nome}</p>}
              </div>

              {/* Email & Telemóvel */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs sm:text-sm">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@empresa.com"
                    className={`bg-background h-9 sm:h-10 text-sm ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="telemovel" className="text-xs sm:text-sm">
                    Telemóvel <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="telemovel"
                    name="telemovel"
                    type="tel"
                    placeholder="+351 912 345 678"
                    value={formData.telemovel}
                    onChange={handleInputChange}
                    className={`bg-background h-9 sm:h-10 text-sm ${errors.telemovel ? "border-destructive" : ""}`}
                  />
                  {errors.telemovel && <p className="text-xs text-destructive">{errors.telemovel}</p>}
                </div>
              </div>

              {/* Nome da Empresa */}
              <div className="space-y-1">
                <Label htmlFor="empresa" className="text-xs sm:text-sm">
                  Nome da Empresa <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  placeholder="A tua empresa"
                  className={`bg-background h-9 sm:h-10 text-sm ${errors.empresa ? "border-destructive" : ""}`}
                />
                {errors.empresa && <p className="text-xs text-destructive">{errors.empresa}</p>}
              </div>

              {/* Faturação & Tamanho Equipa */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs sm:text-sm">
                    Faturação Anual <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.faturacao_estimada}
                    onValueChange={(value) => handleSelectChange("faturacao_estimada", value)}
                  >
                    <SelectTrigger className={`bg-background h-9 sm:h-10 text-sm ${errors.faturacao_estimada ? "border-destructive" : ""}`}>
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

                <div className="space-y-1">
                  <Label className="text-xs sm:text-sm">
                    Dimensão da Equipa <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.tamanho_equipa}
                    onValueChange={(value) => handleSelectChange("tamanho_equipa", value)}
                  >
                    <SelectTrigger className={`bg-background h-9 sm:h-10 text-sm ${errors.tamanho_equipa ? "border-destructive" : ""}`}>
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

              {/* Urgência */}
              <div className="space-y-2">
                <Label className="text-xs sm:text-sm">
                  Quão urgente é? <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  value={formData.urgencia}
                  onValueChange={(value) => handleSelectChange("urgencia", value)}
                  className="flex flex-wrap gap-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="muito-urgente" id="muito-urgente" />
                    <Label htmlFor="muito-urgente" className="text-xs sm:text-sm font-normal cursor-pointer">
                      Muito Urgente
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="proximas-semanas" id="proximas-semanas" />
                    <Label htmlFor="proximas-semanas" className="text-xs sm:text-sm font-normal cursor-pointer">
                      Próximas semanas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="explorar" id="explorar" />
                    <Label htmlFor="explorar" className="text-xs sm:text-sm font-normal cursor-pointer">
                      Só a explorar
                    </Label>
                  </div>
                </RadioGroup>
                {errors.urgencia && <p className="text-xs text-destructive">{errors.urgencia}</p>}
              </div>

              {/* Dor Principal */}
              <div className="space-y-1">
                <Label htmlFor="dor_principal" className="text-xs sm:text-sm">
                  Onde posso ajudar? <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="dor_principal"
                  name="dor_principal"
                  value={formData.dor_principal}
                  onChange={handleInputChange}
                  placeholder="Que processos queres automatizar? Que problema queres resolver com AI?"
                  className={`bg-background min-h-[80px] resize-none text-sm ${errors.dor_principal ? "border-destructive" : ""}`}
                />
                {errors.dor_principal && <p className="text-xs text-destructive">{errors.dor_principal}</p>}
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full mt-3 h-10 sm:h-11 text-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  "A enviar..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CRMFormDialog;
