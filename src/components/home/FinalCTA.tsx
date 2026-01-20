import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-3xl"
      />
      
      <div className="container-calm px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Ready to feel <span className="text-accent">calmer</span>?
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Just say hi. No commitment.
          </p>

          <Button variant="whatsapp" size="xl" className="group shadow-lg shadow-[hsl(142,70%,45%)]/20" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
              Message us on WhatsApp
            </a>
          </Button>
          
          <p className="text-muted-foreground text-sm mt-6">
            Response within hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
