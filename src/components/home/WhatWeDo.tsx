import { motion } from "framer-motion";
import { Bell, Calendar, FileCheck, Shield, Sparkles } from "lucide-react";

const WhatWeDo = () => {
  const roles = [
    {
      icon: Bell,
      title: "We remind you",
      description: "No more missed deadlines. We keep track so you don't have to worry.",
      gradient: "from-amber-500/20 to-orange-500/10",
    },
    {
      icon: Calendar,
      title: "We follow up",
      description: "We chase the documents and details. You stay focused on building.",
      gradient: "from-blue-500/20 to-cyan-500/10",
    },
    {
      icon: FileCheck,
      title: "We quietly handle",
      description: "Filings, bookkeeping, compliance — done without drama or stress.",
      gradient: "from-emerald-500/20 to-teal-500/10",
    },
    {
      icon: Shield,
      title: "We protect your peace",
      description: "No surprises. No penalties. Just calm, predictable support.",
      gradient: "from-violet-500/20 to-purple-500/10",
    },
  ];

  return (
    <section id="how-we-help" className="bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-transparent to-transparent h-1/3" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent font-medium text-xs uppercase tracking-wider">Our Role</span>
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
            What we <span className="text-accent">actually do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mt-5 leading-relaxed">
            Think of us as your extended team — a quiet back office 
            that carries the finance and compliance load.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative rounded-3xl p-8 md:p-10 border border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-xl group-hover:shadow-accent/5">
                {/* Number indicator */}
                <span className="absolute top-6 right-8 text-6xl font-bold text-foreground/[0.03] group-hover:text-accent/10 transition-colors duration-500 font-display">
                  0{index + 1}
                </span>
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <role.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="font-sans font-semibold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {role.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
