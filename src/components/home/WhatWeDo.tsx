import { motion } from "framer-motion";
import { Bell, Calendar, FileCheck, Shield } from "lucide-react";

const WhatWeDo = () => {
  const roles = [
    {
      icon: Bell,
      title: "We remind you",
      description: "No more missed deadlines. We keep track so you don't have to worry.",
      accent: true,
    },
    {
      icon: Calendar,
      title: "We follow up",
      description: "We chase the documents and details. You stay focused on building.",
      accent: false,
    },
    {
      icon: FileCheck,
      title: "We quietly handle",
      description: "Filings, bookkeeping, compliance — done without drama or stress.",
      accent: false,
    },
    {
      icon: Shield,
      title: "We protect your peace",
      description: "No surprises. No penalties. Just calm, predictable support.",
      accent: true,
    },
  ];

  return (
    <section id="how-we-help" className="bg-background relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent h-1/2" />
      
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
            <span className="text-accent font-medium text-sm uppercase tracking-wide">Our Role</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            What we actually do
          </h2>
          <p className="body-large max-w-2xl">
            Think of us as your extended team — a quiet back office 
            that carries the finance and compliance load.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:shadow-lg ${
                role.accent 
                  ? "bg-accent/5 border-accent/20 hover:border-accent/40" 
                  : "bg-card border-border hover:border-accent/30"
              }`}
            >
              {/* Number indicator */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 group-hover:text-accent/10 transition-colors">
                0{index + 1}
              </span>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                role.accent ? "bg-accent/20" : "bg-sage-light"
              }`}>
                <role.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {role.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
