import { motion } from "framer-motion";
import { Bell, Calendar, FileCheck, Shield } from "lucide-react";

const WhatWeDo = () => {
  const roles = [
    {
      icon: Bell,
      title: "Reminders",
      subtitle: "Never miss deadlines",
    },
    {
      icon: Calendar,
      title: "Follow-ups",
      subtitle: "We chase documents",
    },
    {
      icon: FileCheck,
      title: "Filings",
      subtitle: "Done without drama",
    },
    {
      icon: Shield,
      title: "Peace",
      subtitle: "No surprises",
    },
  ];

  return (
    <section id="how-we-help" className="bg-background relative overflow-hidden py-16 lg:py-20">
      <div className="container-calm px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            What we <span className="text-accent">do</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Your quiet back office for finance & compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <role.icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                {role.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                {role.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
