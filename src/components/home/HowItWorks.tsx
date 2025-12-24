import { motion } from "framer-motion";
import { MessageCircle, Users, Repeat } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Message us",
      description: "Start with a simple WhatsApp message. No forms, no pressure at all.",
    },
    {
      icon: Users,
      number: "02",
      title: "Quick chat",
      description: "A friendly conversation to understand where you are and what you need.",
    },
    {
      icon: Repeat,
      number: "03",
      title: "Ongoing support",
      description: "We handle things month-to-month. Grows with you. Cancel anytime.",
    },
  ];

  return (
    <section className="bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-medium text-xs uppercase tracking-widest">Process</span>
          </div>
          <h2 className="font-display text-foreground">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Three simple steps. That is it.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-accent/30 via-accent to-accent/30" />
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step number with icon */}
                <div className="relative z-10 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-background border-2 border-accent/30 flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  {/* Number badge */}
                  <span className="absolute -top-2 -right-2 md:right-[calc(50%-3rem)] w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-semibold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>
                
                <div className="text-center">
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
