import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const WhoIsThisFor = () => {
  const idealFounder = [
    "First-time or early-stage founders",
    "Less than 20 employees",
    "Under ₹4 Cr ARR",
    "No in-house finance team",
  ];

  const notFor = [
    "Complex multi-entity structures",
    "International tax needs",
  ];

  return (
    <section className="bg-card relative overflow-hidden py-16 lg:py-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 via-transparent to-transparent" />
      
      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Is this <span className="text-accent">for you?</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            We work best with founders who want calm support, not complex solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Good Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl p-6 md:p-8 border border-border/60"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </span>
              <h3 className="font-semibold text-lg text-foreground">You're a good fit if...</h3>
            </div>
            <ul className="space-y-4">
              {idealFounder.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground/85"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background rounded-2xl p-6 md:p-8 border border-border/40"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <XCircle className="w-6 h-6 text-muted-foreground" />
              </span>
              <h3 className="font-semibold text-lg text-foreground">Not the right fit if...</h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <XCircle className="w-5 h-5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-6 pt-4 border-t border-border/40 italic">
              That's okay — we'd rather say no early than disappoint you later.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
