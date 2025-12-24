import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check } from "lucide-react";
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
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/15 via-accent/5 to-transparent blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-accent/10 to-transparent blur-3xl"
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* CTA Card */}
          <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-[2rem] border border-border/50 p-10 md:p-16 text-center shadow-2xl shadow-black/10">
            {/* Decorative corner accents */}
            <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-xl" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-xl" />
            
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Started Today</span>
            </motion.span>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4 leading-[1.1]">
              Ready to feel <span className="text-accent">calmer</span>
              <br />
              <span className="text-muted-foreground">about finance?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Let's have a simple conversation to see if we're the right fit for you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="whatsapp" size="xl" className="group shadow-lg shadow-[hsl(142,70%,45%)]/20 hover:shadow-xl hover:shadow-[hsl(142,70%,45%)]/30 transition-all" asChild>
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

            {/* Benefits list */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
