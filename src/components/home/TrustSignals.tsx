import { motion } from "framer-motion";
import { Heart, MapPin, Users, Quote } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Heart,
      title: "Founder-first approach",
      description: "We've been there. We understand the overwhelm and the fear of getting it wrong.",
    },
    {
      icon: MapPin,
      title: "Tier-2 & Tier-3 focus",
      description: "Built specifically for founders outside the metro bubble. We understand your context.",
    },
    {
      icon: Users,
      title: "Real humans, always",
      description: "No chatbots. No automated responses. Just real people who actually care.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Dark section with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,8%)] via-[hsl(220,25%,10%)] to-[hsl(220,25%,12%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Large decorative quote */}
      <motion.div 
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="absolute top-8 right-8 md:right-16"
      >
        <Quote className="w-32 h-32 md:w-56 md:h-56 text-foreground" />
      </motion.div>
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-accent rounded-full" />
            <span className="text-accent font-medium text-xs uppercase tracking-widest">Why Us</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
            Why founders <span className="text-accent">trust us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-3xl border border-border/30 bg-background/5 backdrop-blur-sm transition-all duration-500 group-hover:border-accent/30 group-hover:bg-background/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-110">
                  <signal.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-4 group-hover:text-accent transition-colors">
                  {signal.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />
          <div className="pl-8 md:pl-12">
            <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground/90 max-w-3xl italic leading-snug">
              "Our belief is simple: you focus on growth. We carry the finance and compliance load."
            </blockquote>
            <p className="mt-8 text-accent font-semibold text-lg">
              — The FINSTICS Promise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
