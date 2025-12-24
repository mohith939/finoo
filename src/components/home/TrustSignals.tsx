import { motion } from "framer-motion";
import { Heart, MapPin, Users, Quote } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Heart,
      title: "Founder-first approach",
      description: "We have been there. We understand the overwhelm and the fear of getting it wrong.",
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
    <section className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative quote */}
      <div className="absolute top-12 right-12 opacity-5">
        <Quote className="w-48 h-48" />
      </div>
      
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
            <span className="text-accent font-medium text-sm uppercase tracking-wide">Why Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-background mb-4">
            Why founders trust us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Accent line on hover */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-accent/0 hover:bg-accent transition-colors rounded-full" />
              
              <div className="w-16 h-16 rounded-2xl bg-background/10 flex items-center justify-center mb-6">
                <signal.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-background mb-3">
                {signal.title}
              </h3>
              <p className="text-background/60 text-lg leading-relaxed">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-background/10"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-background/90 max-w-3xl italic leading-relaxed">
            "Our belief is simple: you focus on growth. We carry the finance and compliance load."
          </blockquote>
          <p className="mt-6 text-accent font-medium">
            — The FINSTICS Promise
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
