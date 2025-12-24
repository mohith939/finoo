import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, BookOpen, Rocket, Globe, ArrowRight } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Calculator,
      title: "Finance & Compliance",
      description: "GST, TDS, income tax — filed on time, every time.",
    },
    {
      icon: BookOpen,
      title: "Bookkeeping & Reports",
      description: "Clean books and reports you can actually understand.",
    },
    {
      icon: Rocket,
      title: "Startup Setup",
      description: "Company registration, agreements, and everything to get started.",
    },
    {
      icon: Globe,
      title: "Basic Tech Help",
      description: "Simple website and tech setup to establish your presence.",
    },
  ];

  return (
    <section className="bg-card">
      <div className="container-calm section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-foreground mb-4">
            How we can help
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Simple, straightforward services. No complex packages or hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center text-accent font-medium hover:underline"
          >
            View all services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
