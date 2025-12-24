import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, BookOpen, Rocket, Globe, ArrowRight, Sparkles } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Calculator,
      title: "Finance & Compliance",
      description: "GST, TDS, income tax — filed on time, every time. No more deadline anxiety.",
      gradient: "from-emerald-500/20 to-teal-500/10",
      highlight: true,
    },
    {
      icon: BookOpen,
      title: "Bookkeeping & Reports",
      description: "Clean books and reports you can actually understand and share with investors.",
      gradient: "from-blue-500/20 to-cyan-500/10",
      highlight: false,
    },
    {
      icon: Rocket,
      title: "Startup Setup",
      description: "Company registration, agreements, and everything to get you started right.",
      gradient: "from-violet-500/20 to-purple-500/10",
      highlight: false,
    },
    {
      icon: Globe,
      title: "Basic Tech Help",
      description: "Simple website and tech setup to establish your digital presence.",
      gradient: "from-amber-500/20 to-orange-500/10",
      highlight: true,
    },
  ];

  return (
    <section className="bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-accent/8 to-transparent blur-3xl" />
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent font-medium text-xs uppercase tracking-wider">Services</span>
            </motion.span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
              How we can <span className="text-accent">help</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mt-5 leading-relaxed">
              Simple, straightforward services. No complex packages or hidden fees.
            </p>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20"
          >
            View all services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`relative rounded-3xl p-8 md:p-10 border transition-all duration-500 ${
                service.highlight 
                  ? "bg-foreground text-background border-foreground/80 group-hover:shadow-2xl group-hover:shadow-accent/10" 
                  : "bg-card/60 backdrop-blur-sm border-border/60 group-hover:border-accent/30 group-hover:shadow-xl"
              }`}>
                {/* Number indicator */}
                <span className={`absolute top-6 right-8 text-6xl font-bold font-display transition-colors duration-500 ${
                  service.highlight ? "text-background/10 group-hover:text-background/20" : "text-foreground/[0.03] group-hover:text-accent/10"
                }`}>
                  0{index + 1}
                </span>
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  service.highlight ? "bg-background/15" : "bg-gradient-to-br from-accent/15 to-accent/5"
                }`}>
                  <service.icon className={`w-8 h-8 ${service.highlight ? "text-background" : "text-accent"}`} />
                </div>
                
                <h3 className={`font-sans font-semibold text-xl mb-3 transition-colors ${
                  service.highlight 
                    ? "text-background" 
                    : "text-foreground group-hover:text-accent"
                }`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${service.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  {service.description}
                </p>
                
                {/* Hover arrow indicator */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className={`absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    service.highlight ? "text-background/60" : "text-accent"
                  }`}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
