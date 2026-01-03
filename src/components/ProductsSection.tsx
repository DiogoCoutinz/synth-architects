import { motion } from "framer-motion";
import { FiFolder } from "react-icons/fi";
import GlassFolders, { GlassFolderItem } from "./GlassFolders";

const folders: GlassFolderItem[] = [
  {
    icon: <FiFolder />,
    color: 'cyan',
    label: 'Faturas AI',
    subtitle: 'Extração automática de dados',
    link: '/faturaAI',
    comingSoon: false
  },
  {
    icon: <FiFolder />,
    color: 'purple',
    label: 'N8N Workflows',
    subtitle: 'Automação personalizada',
    comingSoon: true
  },
  {
    icon: <FiFolder />,
    color: 'orange',
    label: 'AI Strategy',
    subtitle: 'Consultoria e implementação',
    comingSoon: true
  }
];

const ProductsSection = () => {
  return (
    <section id="projectos" className="py-20 md:py-32 lg:py-40 relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0891b2 1px, transparent 1px),
              linear-gradient(to bottom, #0891b2 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900 px-4">
              Produtos
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Explora as soluções que desenvolvi para automatizar e transformar negócios
            </p>
          </motion.div>

          <GlassFolders items={folders} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
