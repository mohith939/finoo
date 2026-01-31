import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import finsticsLogo from "@/assets/finstics-logo.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
      <div className="absolute inset-0 bg-gradient-to-b from-card via-[hsl(220,25%,8%)] to-[hsl(220,25%,5%)]" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container-calm relative z-10">
        {/* Top accent bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand section */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block mb-6 group">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/95 rounded-xl p-2.5 inline-block shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-accent/10 transition-shadow"
                >
                  <img 
                    src={finsticsLogo} 
                    alt="FINSTICS" 
                    className="h-10 w-auto"
                  />
                </motion.div>
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
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[hsl(142,70%,45%)]/15 to-[hsl(142,70%,45%)]/5 border border-[hsl(142,70%,45%)]/25 text-[hsl(142,70%,45%)] font-semibold hover:border-[hsl(142,70%,45%)]/40 transition-all shadow-lg shadow-[hsl(142,70%,45%)]/5"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Message us on WhatsApp
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </motion.a>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Navigation</h4>
              </div>
              <ul className="space-y-3.5">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2 group py-1"
                    >
                      <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300" />
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Get in Touch</h4>
              </div>
              <ul className="space-y-4">
                <li>
                  <motion.a 
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group p-3 -ml-3 rounded-xl hover:bg-accent/5"
                  >
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/10 flex items-center justify-center group-hover:border-accent/20 transition-colors">
                      <Phone className="w-4 h-4 text-accent" />
                    </span>
                    <div>
                      <span className="text-xs text-muted-foreground/70 block">Phone</span>
                      <span className="font-medium">{PHONE_NUMBER}</span>
                    </div>
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href={`mailto:${EMAIL}`}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group p-3 -ml-3 rounded-xl hover:bg-accent/5"
                  >
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/10 flex items-center justify-center group-hover:border-accent/20 transition-colors">
                      <Mail className="w-4 h-4 text-accent" />
                    </span>
                    <div>
                      <span className="text-xs text-muted-foreground/70 block">Email</span>
                      <span className="font-medium">{EMAIL}</span>
                    </div>
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://maps.google.com/?q=Shirdi+Nagar+Yeleswaram+Kakinada+District+Andhra+Pradesh+533429"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 text-muted-foreground hover:text-foreground transition-colors group p-3 -ml-3 rounded-xl hover:bg-accent/5"
                  >
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/10 flex items-center justify-center group-hover:border-accent/20 transition-colors flex-shrink-0">
                      <MapPin className="w-4 h-4 text-accent" />
                    </span>
                    <div>
                      <span className="text-xs text-muted-foreground/70 block">Andhra Pradesh</span>
                      <span className="font-medium leading-relaxed text-sm">Shirdi Nagar, Yeleswaram, Kakinada District - 533429</span>
                    </div>
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://maps.google.com/?q=Dangipara+Sevoke+More+Siliguri+Darjeeling+734001+West+Bengal"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 text-muted-foreground hover:text-foreground transition-colors group p-3 -ml-3 rounded-xl hover:bg-accent/5"
                  >
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/10 flex items-center justify-center group-hover:border-accent/20 transition-colors flex-shrink-0">
                      <MapPin className="w-4 h-4 text-accent" />
                    </span>
                    <div>
                      <span className="text-xs text-muted-foreground/70 block">West Bengal</span>
                      <span className="font-medium leading-relaxed text-sm">1st Floor, Rupa Store, Dangipara, Sevoke More, Siliguri - 734001</span>
                    </div>
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground/80">
              © 2025 FINSTICS. Helping founders focus on what matters.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-muted-foreground/80">Available for new founders</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground/60">
                <Sparkles className="w-3.5 h-3.5 text-accent/60" />
                <span>Built with care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
