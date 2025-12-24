import { motion } from "framer-motion";
import { MessageCircle, Users, Repeat, Sparkles, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Message us",
      description: "Start with a simple WhatsApp message. No forms, no pressure at all.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Users,
      number: "02",
      title: "Quick chat",
      description: "A friendly conversation to understand where you are and what you need.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Repeat,
      number: "03",
      title: "Ongoing support",
      description: "We handle things month-to-month. Grows with you. Cancel anytime.",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/5 to-transparent blur-3xl" />
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent font-medium text-xs uppercase tracking-wider">Process</span>
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
            How it <span className="text-accent">works</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-5 max-w-md mx-auto">
            Three simple steps. That's it.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-32 left-[20%] right-[20%]">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="w-5 h-5 text-accent/40" />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step card */}
                <div className="bg-background rounded-3xl p-8 border border-border/60 shadow-lg shadow-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:border-accent/30 group-hover:-translate-y-2">
                  {/* Icon with gradient background */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 absolute inset-0 blur-xl transition-opacity group-hover:opacity-40`} />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center">
                      <step.icon className="w-9 h-9 text-accent" />
                    </div>
                    {/* Number badge */}
                    <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-lg shadow-accent/30">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-[2px] h-8 bg-gradient-to-b from-accent/40 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
