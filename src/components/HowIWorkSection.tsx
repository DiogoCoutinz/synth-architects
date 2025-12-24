import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand the Business",
    description: "Deep dive into your operations, workflows, and pain points to identify the highest-impact automation opportunities."
  },
  {
    number: "02",
    title: "Design the AI System",
    description: "Architect a tailored solution using the right combination of AI models, tools, and integrations for your specific needs."
  },
  {
    number: "03",
    title: "Implement and Deploy",
    description: "Build, test, and deploy the system into your live environment with minimal disruption to ongoing operations."
  },
  {
    number: "04",
    title: "Iterate or Scale",
    description: "Monitor performance, refine the system based on real results, and expand to new use cases as value is proven."
  }
];

const HowIWorkSection = () => {
  return (
    <section className="py-32 relative bg-secondary/20">
      <div className="container px-6 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How I Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A structured approach that moves from understanding to impact.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative flex gap-6 md:gap-10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center relative z-10">
                    <span className="font-heading text-lg font-bold text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
