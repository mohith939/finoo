import { motion } from "framer-motion";
import { MessageCircle, Users, Repeat } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "1",
      title: "Message us",
      description: "Start with a simple WhatsApp message. No forms, no pressure.",
    },
    {
      icon: Users,
      number: "2",
      title: "Quick chat",
      description: "A friendly conversation to understand what you need.",
    },
    {
      icon: Repeat,
      number: "3",
      title: "Ongoing support",
      description: "Month-to-month help that grows with you. Cancel anytime.",
    },
  ];

  return (
    <section className="bg-background relative overflow-hidden py-16 lg:py-20">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl" />
      
      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            How it <span className="text-accent">works</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Three simple steps. That's it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/60 h-full text-center transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg group-hover:-translate-y-1">
                {/* Icon with number */}
                <div className="relative mx-auto w-16 h-16 mb-5">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
