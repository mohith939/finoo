import { motion } from "framer-motion";
import { Heart, MapPin, Users } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Heart,
      title: "Founder-first approach",
      description: "We've been there. We understand the overwhelm.",
    },
    {
      icon: MapPin,
      title: "Tier-2 & Tier-3 focus",
      description: "Built for founders outside the metro bubble.",
    },
    {
      icon: Users,
      title: "Real humans, always",
      description: "No chatbots. No automated responses. Just us.",
    },
  ];

  return (
    <section className="bg-card">
      <div className="container-calm section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-foreground mb-4">
            Why founders trust us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mx-auto mb-5">
                <signal.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {signal.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
