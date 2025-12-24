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
    "\"Just file and don't ask me\" mindset",
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
            Is this for you?
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            We work best with founders who want calm support, not complex solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ideal Founder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <h3 className="heading-card text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </span>
              You're a good fit if...
            </h3>
            <ul className="space-y-4">
              {idealFounder.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <h3 className="heading-card text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <XCircle className="w-5 h-5 text-muted-foreground" />
              </span>
              We're not the right fit if...
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground italic">
              That's okay. We'd rather say no early than disappoint you later.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
