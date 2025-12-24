import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, BookOpen, Rocket, Globe, ArrowRight } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Calculator,
      title: "Finance & Compliance",
      description: "GST, TDS, income tax — filed on time, every time. No more deadline anxiety.",
      highlight: true,
    },
    {
      icon: BookOpen,
      title: "Bookkeeping & Reports",
      description: "Clean books and reports you can actually understand and share with investors.",
      highlight: false,
    },
    {
      icon: Rocket,
      title: "Startup Setup",
      description: "Company registration, agreements, and everything to get you started right.",
      highlight: false,
    },
    {
      icon: Globe,
      title: "Basic Tech Help",
      description: "Simple website and tech setup to establish your digital presence.",
      highlight: true,
    },
  ];

  return (
    <section className="bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/3 blur-3xl" />
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wide">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              How we can help
            </h2>
            <p className="body-large max-w-xl">
              Simple, straightforward services. No complex packages or hidden fees.
            </p>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            View all services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:shadow-xl cursor-default ${
                service.highlight 
                  ? "bg-foreground text-background border-foreground" 
                  : "bg-card border-border hover:border-accent/30"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                service.highlight ? "bg-background/10" : "bg-sage-light"
              }`}>
                <service.icon className={`w-7 h-7 ${service.highlight ? "text-background" : "text-accent"}`} />
              </div>
              
              <h3 className={`text-2xl font-semibold mb-3 ${service.highlight ? "text-background" : "text-foreground"}`}>
                {service.title}
              </h3>
              <p className={`text-lg leading-relaxed ${service.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                {service.description}
              </p>
              
              {/* Hover arrow indicator */}
              <div className={`absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity ${service.highlight ? "text-background/50" : "text-accent/50"}`}>
                <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
