import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-background">
        {/* Large decorative circle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/8 to-accent/3 blur-3xl"
        />
        {/* Smaller accent blob */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute left-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-2xl"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      <div className="container-calm section-padding relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow with accent line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[2px] bg-accent" />
            <span className="text-accent font-medium tracking-widest uppercase text-xs">
              For early-stage founders
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-foreground mb-8"
          >
            You focus on
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 italic">growth</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-2 md:bottom-3 left-0 h-3 md:h-4 bg-accent/20 -z-0"
              />
            </span>
            <span className="text-muted-foreground">.</span>
            <br />
            <span className="text-muted-foreground">We handle the rest.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12"
          >
            Finance and compliance can feel overwhelming
            <span className="text-foreground">—it does not have to be.</span>
            {" "}We quietly take care of everything so you can keep building.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="whatsapp" size="lg" className="group" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                Message us on WhatsApp
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="group" asChild>
              <a href="#how-we-help">
                See how we help
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Trusted by founders across India
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
