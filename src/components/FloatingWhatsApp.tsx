import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300">
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground whitespace-nowrap shadow-lg">
          Chat with us
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
