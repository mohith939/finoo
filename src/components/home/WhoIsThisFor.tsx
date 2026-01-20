import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const WhoIsThisFor = () => {
  const idealFounder = [
    "Early-stage founders",
    "< 20 employees",
    "No finance team yet",
  ];

  const notFor = [
    "Complex multi-entity setups",
    "International tax needs",
  ];

  return (
    <section className="bg-card relative overflow-hidden py-16 lg:py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 via-transparent to-transparent" />
      
      <div className="container-calm px-6 md:px-12 relative z-10">
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Good Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl p-6 border border-border/60"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </span>
              <h3 className="font-semibold text-foreground">Good fit</h3>
            </div>
            <ul className="space-y-3">
              {idealFounder.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background rounded-2xl p-6 border border-border/40"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <XCircle className="w-5 h-5 text-muted-foreground" />
              </span>
              <h3 className="font-semibold text-foreground">Not ideal</h3>
            </div>
            <ul className="space-y-3">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <XCircle className="w-4 h-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
