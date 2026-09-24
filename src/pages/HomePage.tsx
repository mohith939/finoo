import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Factory, FileText, Globe2, MonitorSmartphone, Phone, Rocket, ShoppingBag, ShieldCheck, Sparkles, Store, TrendingUp, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { allFAQs, services } from '../data/services'
import { clients } from '../data/clients'
import { ClientLogo } from './ClientsPage'

const featuredServiceSlugs = [
  'company-registration',
  'gst-registration-filings',
  'trademark-registration',
  'msme-udyam-registration',
  'fssai-registration',
  'iec-import-export',
  'iso-certification',
  'bis-certification',
  'labour-license',
  'pollution-certificate',
  'legal-metrology-registration',
  'website-design-development',
]

const featuredServices = featuredServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service) => service !== undefined)

const homeClientLogos = [...clients, ...clients]

const helpCards = [
  { number: '01', title: 'Business Setup', text: 'Registrations & business formation', tone: 'blue' },
  { number: '02', title: 'Compliance', text: 'Tax, filings & business requirements', tone: 'teal' },
  { number: '03', title: 'Certificates & Licenses', text: 'Approvals, certificates & standards', tone: 'purple' },
  { number: '04', title: 'Digital Presence', text: 'Websites & online business presence', tone: 'orange' },
]

const benefits = [
  { title: 'Everything in One Place', text: 'Registrations, compliance, certificates, and digital support without too many steps.' },
  { title: 'Simple Process', text: 'Clear guidance and practical support so you know what happens next.' },
  { title: 'Personal Support', text: 'We keep the experience friendly and easy to understand for growing businesses.' },
  { title: 'Business-Focused Solutions', text: 'Every step is designed around what a real business owner needs.' },
]

const processSteps = [
  { title: 'Tell Us What You Need', text: 'Start with a quick enquiry.' },
  { title: 'We Guide You', text: 'Know what you need and what comes next.' },
  { title: 'We Handle the Process', text: 'We assist with the required steps.' },
  { title: 'Get Your Service', text: 'Complete the process with confidence.' },
]

const audienceList = [
  { label: 'Startups', icon: Rocket },
  { label: 'Small Businesses', icon: Building2 },
  { label: 'Traders', icon: ShoppingBag },
  { label: 'Manufacturers', icon: Factory },
  { label: 'Food Businesses', icon: Utensils },
  { label: 'Importers / Exporters', icon: Globe2 },
  { label: 'Service Businesses', icon: BriefcaseBusiness },
  { label: 'Growing Companies', icon: TrendingUp },
  { label: 'E-commerce Brands', icon: Store },
  { label: 'Consultants', icon: BriefcaseBusiness },
  { label: 'Local Shops', icon: Store },
]

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Your business support partner</span>
            <h1>From Registration to Website — We Handle It All</h1>
            <p>
              From registrations and certificates to professional websites, Finstics helps small businesses and startups get set up and move forward — with everything handled in one place.
            </p>
            <div className="hero-actions">
              <a href="https://wa.me/918340956469?text=Hello%20Finstics%2C%20I%20want%20to%20discuss%20my%20business%20needs." className="btn btn-primary" target="_blank" rel="noreferrer">
                <WhatsAppIcon size={18} />
                WhatsApp Us
              </a>
              <a href="tel:+918340956469" className="btn btn-secondary">
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-illustration">
              <div className="floating-card card-one">
                <ShieldCheck size={22} />
                <span>Business setup</span>
              </div>
              <div className="floating-card card-four">
                <MonitorSmartphone size={22} />
                <span>Tech</span>
              </div>
              <div className="floating-card card-two">
                <FileText size={22} />
                <span>Compliance</span>
              </div>
              <div className="floating-card card-three">
                <CheckCircle2 size={22} />
                <span>Certificates</span>
              </div>
              <div className="floating-card card-five">
                <Sparkles size={22} />
                <span>Marketing</span>
              </div>
              <div className="hero-orb orb-one" />
              <div className="hero-orb orb-two" />
            </div>
          </div>
        </div>
      </section>

      <section className="proof-bar-section" aria-label="Finstics results">
        <div className="container proof-bar">
          <div><strong>150+</strong><span>Clients Supported</span></div>
          <div><strong>30+</strong><span>Websites Designed</span></div>
          <div><strong>20+</strong><span>Business Services</span></div>
          <div><strong>1:1</strong><span>Personal Support</span></div>
        </div>
      </section>

      <section className="section-block help-section help-feature-section">
        <div className="container">
          <div className="help-feature-shell">
            <div className="help-feature-copy">
              <span className="eyebrow eyebrow-line">What we help with</span>
              <h2>Everything you need to start and grow your business</h2>
              <p>Registrations, compliance, certifications and digital solutions — all in one place, with simple guidance.</p>
              <div className="help-feature-tags" aria-label="Support benefits">
                <span>Simple Process</span>
                <span>One Place</span>
                <span>Personal Support</span>
              </div>
            </div>

            <div className="help-feature-list">
              {helpCards.map((card) => (
                <div key={card.number} className={`help-feature-item tone-${card.tone}`}>
                  <span className="help-feature-number">{card.number}</span>
                  <div className="help-feature-item-copy">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  <ArrowRight className="help-feature-arrow" size={19} aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="help-feature-footer">
              <span>Popular Services</span>
              <Link to="/services">View All Services <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block soft-bg services-showcase">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow eyebrow-line">Our services</span>
            <h2>Delivering Excellence in Every Service</h2>
          </div>
          <div className="services-grid services-grid-home">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="section-action-row">
            <Link to="/services" className="btn btn-secondary large">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-clients-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow eyebrow-line">Our clients</span>
            <h2>Trusted by growing businesses</h2>
            <p>We are proud to support ambitious businesses with registrations, compliance, certifications, and digital growth.</p>
          </div>
          <div className="clients-marquee" aria-label="Client logos">
            <div className="clients-marquee-track">
              {homeClientLogos.map((client, index) => (
                <ClientLogo key={`${client.name}-${index}`} {...client} />
              ))}
            </div>
          </div>
          <div className="home-clients-action">
            <Link to="/clients" className="btn btn-secondary small">View All Clients <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="section-block why-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow eyebrow-line">Why Finstics</span>
            <h2>Built around the way businesses actually work.</h2>
            <p>Simple support, clear guidance, and everything in one place.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="benefit-card">
                <div className="mini-icon-wrap alt">
                  <CheckCircle2 size={26} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block soft-bg how-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow eyebrow-line">How it works</span>
            <h2>Simple steps, clear support</h2>
            <p>From your first message to getting your service completed.</p>
          </div>
          <div className="steps-grid">
            {processSteps.map((step, index) => (
              <div key={step.title} className="step-card">
                <div className="step-number">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="how-section-action">
            <Link to="/contact" className="btn btn-primary">Get Started <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section-block audience-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow eyebrow-line">Who we help</span>
          </div>
          <div className="audience-list">
            {audienceList.map(({ label, icon: Icon }) => (
              <span key={label} className="audience-pill">
                <Icon size={17} strokeWidth={2} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="faq-preview-header">
            <div>
              <span className="eyebrow eyebrow-line">FAQ</span>
              <h2>Common questions from growing businesses</h2>
            </div>
            <Link to="/faq" className="btn btn-secondary">View All FAQs</Link>
          </div>
          <div className="faq-preview-grid">
            {allFAQs.slice(0, 4).map((faq) => (
              <div key={faq.question} className="faq-preview-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block final-cta-section">
        <div className="container final-cta-box">
          <div>
            <span className="eyebrow eyebrow-line">Feeling unsure?</span>
            <h2>Not Sure What Your Business Needs?</h2>
          </div>
          <div className="hero-actions">
            <a href="https://wa.me/918340956469?text=Hello%20Finstics%2C%20I%20need%20help%20with%20my%20business." className="btn btn-primary" target="_blank" rel="noreferrer">
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
            <a href="tel:+918340956469" className="btn btn-secondary">
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
