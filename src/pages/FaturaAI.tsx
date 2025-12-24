import { motion } from "framer-motion";
import { FileText, ArrowLeft, Zap, Brain, Database, Shield, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Extraction",
    description: "Advanced machine learning models extract data from any invoice format — PDF, image, email, or scanned documents."
  },
  {
    icon: Database,
    title: "ERP Integration",
    description: "Seamless integration with your existing accounting and ERP systems. No manual data entry required."
  },
  {
    icon: Shield,
    title: "Validation & Accuracy",
    description: "Built-in validation rules ensure 99%+ accuracy. Automatic flagging of anomalies for human review."
  },
  {
    icon: Clock,
    title: "Real-Time Processing",
    description: "Invoices are processed in seconds, not hours. Scale from 10 to 10,000 invoices without additional resources."
  }
];

const stats = [
  { value: "99%+", label: "Accuracy Rate" },
  { value: "90%", label: "Time Saved" },
  { value: "<30s", label: "Processing Time" },
];

const FaturaAI = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 border-b border-border/50">
        <div className="container px-6 md:px-8">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        
        <div className="container px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
                <Zap className="w-3 h-3" />
                Productized AI Solution
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center glow-primary">
                <FileText className="w-10 h-10 text-primary" />
              </div>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Invoice Automation
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Eliminate manual invoice processing. Extract, validate, and sync invoice 
              data to your systems automatically.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/20">
        <div className="container px-6 md:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="container px-6 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A complete invoice processing system, from receipt to reconciliation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="container px-6 md:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how Invoice Automation can transform your accounts payable process.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/">
                Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

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
