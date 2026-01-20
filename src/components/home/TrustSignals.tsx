import { motion } from "framer-motion";
import { Heart, MapPin, Users } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Heart,
      title: "Founder-first",
    },
    {
      icon: MapPin,
      title: "Tier-2 & 3 focus",
    },
    {
      icon: Users,
      title: "Real humans",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,8%)] to-[hsl(220,25%,12%)]" />
      
      <div className="container-calm px-6 md:px-12 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <signal.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="font-medium text-foreground">{signal.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
