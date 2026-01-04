import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Calendar, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CAL_LINK = "https://cal.com/diogo-coutinho-eqeob3/1on1";

const PaymentSuccess = () => {
  const [countdown, setCountdown] = useState(5);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Redirect when countdown reaches 0
      handleRedirect();
    }
  }, [countdown]);

  const handleRedirect = () => {
    setRedirecting(true);
    
    // Try to open Cal.com in the same window
    try {
      window.location.href = CAL_LINK;
    } catch (error) {
      console.error("Redirect failed:", error);
      // Fallback: open in new tab if main window redirect fails
      window.open(CAL_LINK, "_blank");
    }
  };

  const handleManualRedirect = () => {
    handleRedirect();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-6">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
          >
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
              Pagamento Confirmado!
            </h1>
            <p className="text-slate-600 text-lg">
              A tua sessão 1-on-1 está garantida.
            </p>
          </motion.div>

          {/* Redirect Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-cyan-50 rounded-xl p-6 space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-cyan-900">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Próximo Passo: Escolher Horário</span>
            </div>

            {redirecting ? (
              <div className="flex items-center justify-center gap-2 text-slate-600">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>A redirecionar...</span>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-slate-600 text-sm">
                  Vais ser redirecionado automaticamente em
                </p>
                <div className="text-4xl font-bold text-cyan-600">
                  {countdown}
                </div>
              </div>
            )}
          </motion.div>

          {/* Manual Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={handleManualRedirect}
              size="lg"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 text-base font-semibold"
              disabled={redirecting}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Marcar Horário Agora
            </Button>

            <p className="text-xs text-slate-500 mt-4">
              Se não fores redirecionado automaticamente,<br />
              clica no botão acima para marcar o teu horário.
            </p>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-slate-600 mt-6"
        >
          Também vais receber um email de confirmação com o link para agendar.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;

