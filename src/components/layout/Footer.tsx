import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import finsticsLogo from "@/assets/finstics-logo.png";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";
const PHONE_NUMBER = "+91 8340956469";
const EMAIL = "finstics@gmail.com";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-[hsl(220,25%,8%)] to-[hsl(220,25%,6%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container-calm relative z-10">
        {/* Main footer content */}
        <div className="py-16 md:py-24 border-b border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand section */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block mb-6">
                <div className="bg-white/95 rounded-xl p-2 inline-block shadow-lg">
                  <img 
                    src={finsticsLogo} 
                    alt="FINSTICS" 
                    className="h-10 w-auto"
                  />
                </div>
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
                The calm back office for first-time founders. We quietly take care of 
                finance and compliance so you can focus on growth.
              </p>
              
              {/* WhatsApp CTA */}
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[hsl(142,70%,45%)]/10 border border-[hsl(142,70%,45%)]/20 text-[hsl(142,70%,45%)] font-semibold hover:bg-[hsl(142,70%,45%)]/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Message us on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3">
              <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-4">
              <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
              <ul className="space-y-5">
                <li>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-4 h-4 text-accent" />
                    </span>
                    <span>{PHONE_NUMBER}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-4 h-4 text-accent" />
                    </span>
                    <span>{EMAIL}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </span>
                    <span>Based in India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FINSTICS. Helping founders focus on what matters.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Available for new founders</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
