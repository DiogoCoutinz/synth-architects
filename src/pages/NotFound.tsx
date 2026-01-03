import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 flex items-center justify-center px-4">
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

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="font-heading text-[150px] md:text-[200px] font-bold leading-none">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Página Não Encontrada
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-md mx-auto">
              Parece que esta página foi automatizada... e desapareceu! 🤖
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="group h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Home className="mr-2 w-5 h-5" />
              Voltar ao Início
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate(-1)}
              className="group h-12 px-8 border-2 border-slate-300 hover:border-cyan-500/50 hover:bg-cyan-50/50 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Voltar Atrás
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-slate-200"
          >
            <p className="text-sm text-slate-500 mb-4 flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Talvez estejas à procura de:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
              >
                Serviços
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("projectos")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
              >
                Produtos
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => navigate("/faturaAI")}
                className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
              >
                Faturas AI
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
              >
                Contacto
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
