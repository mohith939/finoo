import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-background">
        {/* Large gradient orb */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -right-48 top-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/15 via-accent/8 to-transparent blur-3xl"
        />
        {/* Secondary orb */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -left-24 bottom-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent blur-3xl"
        />
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [-100, -400]
              }}
              transition={{ 
                duration: 8,
                delay: i * 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{ 
                left: `${25 + i * 25}%`,
                bottom: '20%'
              }}
            />
          ))}
        </div>
        {/* Refined grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
      </div>
      
      <div className="container-calm px-6 py-4 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow with badge style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent font-medium text-xs uppercase tracking-wider">
                For Early-Stage Founders
              </span>
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.05] tracking-tight"
          >
            You focus on
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">growth</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-2 md:bottom-3 left-0 right-0 h-3 md:h-4 bg-accent/20 origin-left -z-0"
              />
            </span>
            <span className="text-muted-foreground/60">.</span>
            <br />
            <span className="text-muted-foreground">We handle the rest.</span>
          </motion.h1>
          
          {/* Value proposition card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative max-w-2xl mb-8"
          >
            <div className="relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm">
              {/* Accent line */}
              <div className="absolute left-0 top-5 bottom-5 w-1 bg-gradient-to-b from-accent via-accent/60 to-transparent rounded-full" />
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-5">
                Finance and compliance can feel overwhelming
                <span className="block mt-2 text-foreground font-semibold text-xl md:text-2xl">
                  — it doesn't have to be.
                </span>
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 pl-5">
                We quietly take care of everything so you can keep building.
              </p>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <Button variant="whatsapp" size="lg" className="group h-14 px-8 text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                Message us on WhatsApp
              </a>
            </Button>
            
            <div className="flex items-center gap-3">
              <span className="hidden sm:block w-8 h-px bg-border" />
              <Button variant="ghost" size="lg" className="group h-12 px-5 text-base text-muted-foreground hover:text-accent hover:bg-transparent" asChild>
                <a href="#how-we-help" className="flex items-center gap-2">
                  <span className="relative">
                    See how we help
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Trust indicators with stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 pt-6 border-t border-border/40"
          >
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span className="text-sm text-muted-foreground">Trusted by founders across India</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-border" />
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">Quick response</span> within hours
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
