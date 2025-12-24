import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const WhoIsThisFor = () => {
  const idealFounder = [
    "First-time or early-stage founders",
    "Less than 20 employees",
    "Under ₹2 Cr ARR",
    "No in-house finance team",
    "Want a partner, not a vendor",
  ];

  const notFor = [
    "Complex multi-entity structures",
    "International tax requirements",
    "Zero-involvement mindset",
  ];

  return (
    <section className="bg-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wide">Fit Check</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Is this for you?
          </h2>
          <p className="body-large max-w-xl">
            We work best with founders who want calm support, not complex solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ideal Founder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent rounded-full" />
            <div className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </span>
                You are a good fit if...
              </h3>
              <ul className="space-y-5">
                {idealFounder.map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:mt-12"
          >
            <div className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-muted-foreground" />
                </span>
                Not the right fit if...
              </h3>
              <ul className="space-y-5">
                {notFor.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <XCircle className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground italic">
                  That is okay. We would rather say no early than disappoint you later.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
