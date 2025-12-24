import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const FinalCTA = () => {
  return (
    <section className="bg-background">
      <div className="container-calm section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-section text-foreground mb-4">
            Ready to feel calmer about finance?
          </h2>
          <p className="body-large mb-10">
            No commitment. No pressure. Just a conversation to see if we're the right fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Message us on WhatsApp
              </a>
            </Button>
            <Button variant="calmOutline" size="lg" asChild>
              <Link to="/contact">
                Fill a simple form
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            We typically respond within a few hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
