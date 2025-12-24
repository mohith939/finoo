import { Link } from "react-router-dom";
import finsticsLogo from "@/assets/finstics-logo.png";

const WHATSAPP_LINK = "https://wa.me/918340956469?text=Hi%20FINSTICS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.";
const PHONE_NUMBER = "+91 8340956469";
const EMAIL = "finstics@gmail.com";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-calm section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={finsticsLogo} 
                alt="FINSTICS" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="body-regular max-w-md mb-6">
              The calm back office for first-time founders. We quietly take care of 
              finance and compliance so you can focus on growth.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline"
            >
              Message us on WhatsApp →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="hover:text-foreground transition-colors"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="hover:text-foreground transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} FINSTICS. Helping founders focus on what matters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
