import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const FinalCTA = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <div className="container-calm section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Accent element */}
          <div className="flex justify-center mb-8">
            <span className="w-16 h-1 bg-accent rounded-full" />
          </div>
          
          <h2 className="font-display text-foreground mb-6">
            Ready to feel calmer
            <br />
            <span className="text-muted-foreground">about finance?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            No commitment. No pressure. Just a conversation to see if we are the right fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="lg" className="group" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                Message us on WhatsApp
              </a>
            </Button>
            <Button variant="calmOutline" size="lg" className="group" asChild>
              <Link to="/contact">
                Or fill a simple form
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mt-10 flex items-center justify-center gap-2 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            We typically respond within a few hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
