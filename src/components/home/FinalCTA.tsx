import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const FinalCTA = () => {
  const benefits = [
    "No commitment required",
    "Response within hours",
    "Zero spam guarantee"
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-3xl"
      />
      
      <div className="container-calm px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Ready to feel <span className="text-accent">calmer</span>
            <br />
            <span className="text-muted-foreground">about finance?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Let's have a simple conversation to see if we're the right fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="whatsapp" size="xl" className="group shadow-lg shadow-[hsl(142,70%,45%)]/20" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                Message us on WhatsApp
              </a>
            </Button>
            <Button variant="calmOutline" size="xl" className="group" asChild>
              <Link to="/contact">
                Fill a simple form
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                  <Check className="w-3 h-3 text-accent" />
                </span>
                {benefit}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
