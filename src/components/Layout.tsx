import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FinsticsLogo } from './FinsticsLogo'
import { WhatsAppIcon } from './WhatsAppIcon'
import ScrollToTop from './ScrollToTop'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <ScrollToTop />
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="header-brand" aria-label="Finstics home">
            <FinsticsLogo />
          </Link>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions desktop-only">
            <a href="https://wa.me/918340956469?text=Hello%20Finstics%2C%20I%20want%20to%20discuss%20my%20business%20needs." className="btn btn-secondary" target="_blank" rel="noreferrer">
              <WhatsAppIcon size={16} />
              WhatsApp Us
            </a>
            <a href="tel:+918340956469" className="btn btn-primary">
              <Phone size={16} />
              Call Us
            </a>
          </div>

          <button className="mobile-menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand-block">
            <FinsticsLogo />
            <p>Simple business support for registrations, compliance, certifications, and digital growth.</p>
            <div className="footer-cta-row">
              <a href="https://wa.me/918340956469?text=Hello%20Finstics%2C%20I%20need%20help%20with%20my%20business." className="btn btn-primary small" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Popular Services</h4>
            <ul>
              <li><Link to="/services/company-registration">Company Registration</Link></li>
              <li><Link to="/services/gst-registration-filings">GST Registration</Link></li>
              <li><Link to="/services/trademark-registration">Trademark</Link></li>
              <li><Link to="/services/website-design-development">Website Design</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+918340956469">Phone: +91 83409 56469</a></li>
              <li><a href="mailto:mohith@finstics.com">Email: mohith@finstics.com</a></li>
              <li><a href="mailto:sahil@finstics.com">Email: sahil@finstics.com</a></li>
              <li><span>Business support and guidance</span></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Finstics</span>
          <div className="legal-links">
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
