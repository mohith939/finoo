import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, BookOpen, Rocket, Globe, ArrowRight } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Calculator,
      title: "Finance & Compliance",
      items: ["GST", "TDS", "Income Tax"],
    },
    {
      icon: BookOpen,
      title: "Bookkeeping",
      items: ["Clean books", "Reports"],
    },
    {
      icon: Rocket,
      title: "Startup Setup",
      items: ["Registration", "Agreements"],
    },
    {
      icon: Globe,
      title: "Tech & Tools",
      items: ["Website", "Automation"],
    },
  ];

  return (
    <section className="bg-card relative overflow-hidden py-16 lg:py-20">
      <div className="container-calm px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">
              Our <span className="text-accent">services</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-5 md:p-6 border border-border/60 h-full transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-3">
                  {service.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {service.items.map((item, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
