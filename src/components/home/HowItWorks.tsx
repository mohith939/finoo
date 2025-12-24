import { motion } from "framer-motion";
import { MessageCircle, Users, Repeat } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "You message us",
      description: "Start with a simple WhatsApp message. No forms, no calls, no pressure.",
    },
    {
      icon: Users,
      number: "02",
      title: "We understand your business",
      description: "A quick chat to understand where you are and what you need.",
    },
    {
      icon: Repeat,
      number: "03",
      title: "We handle things month-to-month",
      description: "Ongoing support that grows with you. Cancel anytime.",
    },
  ];

  return (
    <section className="bg-background">
      <div className="container-calm section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-foreground mb-4">
            How it works
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Three simple steps. That's it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-sage-light flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <span className="text-sm font-medium text-accent mb-2 block">
                Step {step.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
