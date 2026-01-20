import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, BookOpen, Rocket, Globe, ArrowRight } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Calculator,
      title: "Finance & Compliance",
      description: "GST, TDS, income tax — filed on time, every time.",
      tags: ["GST", "TDS", "ITR"],
    },
    {
      icon: BookOpen,
      title: "Bookkeeping & Reports",
      description: "Clean books you can understand and share with investors.",
      tags: ["Books", "Reports"],
    },
    {
      icon: Rocket,
      title: "Startup Setup",
      description: "Company registration and agreements to get you started.",
      tags: ["Pvt Ltd", "LLP"],
    },
    {
      icon: Globe,
      title: "Tech & Automation",
      description: "Website setup and tools to streamline your operations.",
      tags: ["Website", "Tools"],
    },
  ];

  return (
    <section className="bg-card relative overflow-hidden py-16 lg:py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/8 to-transparent blur-3xl" />
      
      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">
              How we can <span className="text-accent">help</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md">
              Simple services. No complex packages or hidden fees.
            </p>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                      {tag}
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
