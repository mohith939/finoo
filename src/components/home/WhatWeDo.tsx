import { motion } from "framer-motion";
import { Bell, Calendar, FileCheck, Shield } from "lucide-react";

const WhatWeDo = () => {
  const roles = [
    {
      icon: Bell,
      title: "We remind you",
      description: "No more missed deadlines",
    },
    {
      icon: Calendar,
      title: "We follow up",
      description: "We chase documents, you build",
    },
    {
      icon: FileCheck,
      title: "We quietly handle",
      description: "Filings done without drama",
    },
    {
      icon: Shield,
      title: "We protect your peace",
      description: "No surprises, no penalties",
    },
  ];

  return (
    <section id="how-we-help" className="bg-background relative overflow-hidden py-16 lg:py-20">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            What we <span className="text-accent">actually do</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Think of us as your extended team — a quiet back office that carries the finance load.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-5 md:p-6 border border-border/60 h-full text-center transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/5">
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <role.icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-2">
                  {role.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
