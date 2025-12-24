import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

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
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/8 to-transparent blur-3xl rounded-full" />
      
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
            <span className="text-accent font-medium text-xs uppercase tracking-wider">Fit Check</span>
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
            Is this <span className="text-accent">for you?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mt-5 leading-relaxed">
            We work best with founders who want calm support, not complex solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Ideal Founder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />
            <div className="bg-background rounded-3xl p-8 md:p-10 border border-border/80 shadow-xl shadow-black/5">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-accent" />
                </span>
                <h3 className="font-sans font-semibold text-xl text-foreground">You're a good fit if...</h3>
              </div>
              <ul className="space-y-5">
                {idealFounder.map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </span>
                    <span className="text-foreground/85 text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative md:mt-16"
          >
            <div className="bg-background rounded-3xl p-8 md:p-10 border border-border/60 shadow-lg shadow-black/5">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-14 h-14 rounded-2xl bg-muted/80 flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-muted-foreground" />
                </span>
                <h3 className="font-sans font-semibold text-xl text-foreground">Not the right fit if...</h3>
              </div>
              <ul className="space-y-5">
                {notFor.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4 text-muted-foreground" />
                    </span>
                    <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 pt-6 border-t border-border/60">
                <p className="text-muted-foreground text-sm italic leading-relaxed">
                  That's okay. We'd rather say no early than disappoint you later.
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
