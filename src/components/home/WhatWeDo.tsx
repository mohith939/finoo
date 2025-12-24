import { motion } from "framer-motion";
import { Bell, Calendar, FileCheck, Shield } from "lucide-react";

const WhatWeDo = () => {
  const roles = [
    {
      icon: Bell,
      title: "We remind you",
      description: "No more missed deadlines. We keep track so you don't have to.",
    },
    {
      icon: Calendar,
      title: "We follow up",
      description: "We chase the documents and details. You stay focused on building.",
    },
    {
      icon: FileCheck,
      title: "We quietly handle this",
      description: "Filings, bookkeeping, compliance — done without drama.",
    },
    {
      icon: Shield,
      title: "We protect your peace",
      description: "No surprises. No penalties. Just calm, predictable support.",
    },
  ];

  return (
    <section id="how-we-help" className="bg-background">
      <div className="container-calm section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-foreground mb-4">
            What we actually do
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Think of us as your extended team. A quiet back office 
            that takes care of the finance and compliance load.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                <role.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {role.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
