import { motion } from "framer-motion";
import { Heart, MapPin, Users } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Heart,
      title: "Founder-first approach",
      description: "We understand the overwhelm and fear of getting it wrong.",
    },
    {
      icon: MapPin,
      title: "Tier-2 & Tier-3 focus",
      description: "Built for founders outside the metro bubble.",
    },
    {
      icon: Users,
      title: "Real humans, always",
      description: "No chatbots. Just real people who care.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,8%)] to-[hsl(220,25%,12%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Why founders <span className="text-accent">trust us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <signal.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
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
