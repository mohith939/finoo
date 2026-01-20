import { motion } from "framer-motion";
import { MessageCircle, Users, Repeat } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "1",
      title: "Message",
      subtitle: "Say hi on WhatsApp",
    },
    {
      icon: Users,
      number: "2",
      title: "Chat",
      subtitle: "Quick friendly call",
    },
    {
      icon: Repeat,
      number: "3",
      title: "Support",
      subtitle: "Ongoing help",
    },
  ];

  return (
    <section className="bg-background relative overflow-hidden py-16 lg:py-20">
      <div className="container-calm px-6 md:px-12 relative z-10">
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
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon with number */}
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="w-9 h-9 text-accent" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.subtitle}</p>
              
              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <div className="w-8 h-0.5 bg-accent/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
