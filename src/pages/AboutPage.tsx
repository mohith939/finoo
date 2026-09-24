import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Factory, FileText, Globe2, ShieldCheck, ShoppingBag, Sparkles, Store, TrendingUp, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

const principles = [
  { title: 'Clear communication', text: 'We explain what matters in plain language so you can make decisions with confidence.', icon: FileText },
  { title: 'Practical guidance', text: 'We focus on useful next steps, organized information, and support that fits real businesses.', icon: CheckCircle2 },
  { title: 'Business-first support', text: 'We keep your time, priorities, and day-to-day operating needs at the center.', icon: BriefcaseBusiness },
  { title: 'One place to start', text: 'Registrations, compliance, certificates, and websites can begin with one simple conversation.', icon: ShieldCheck },
]

const audiences = [
  { label: 'Startups and founders', icon: Sparkles },
  { label: 'Small businesses', icon: Building2 },
  { label: 'Traders and manufacturers', icon: Factory },
  { label: 'Food businesses', icon: Utensils },
  { label: 'Importers and exporters', icon: Globe2 },
  { label: 'Service businesses', icon: BriefcaseBusiness },
  { label: 'E-commerce brands', icon: ShoppingBag },
  { label: 'Consultants', icon: TrendingUp },
  { label: 'Local shops', icon: Store },
]

export function AboutPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container narrow about-hero-copy">
          <span className="eyebrow eyebrow-line">About Finstics</span>
          <h1>Simple, practical support for growing businesses</h1>
          <p>Finstics is a business-services partner helping business owners with registrations, licenses, certifications, compliance guidance, and website support in one place.</p>
        </div>
      </section>

      <section className="section-block about-intro-section">
        <div className="container about-intro-grid">
          <div className="about-intro-copy">
            <span className="eyebrow eyebrow-line">Who we are</span>
            <h2>A calmer way to move your business forward</h2>
            <p>Finstics is built for business owners who want support without confusion. We help turn complicated-looking requirements into clear, manageable next steps.</p>
            <p>Whether you are starting from zero, formalizing an existing business, or building a stronger digital presence, we help you understand what comes next.</p>
          </div>
          <div className="about-intro-panel">
            <div className="about-intro-icon"><Sparkles size={28} /></div>
            <strong>Built for real business decisions</strong>
            <p>One practical conversation can help you identify the right service, information, and next action.</p>
          </div>
        </div>
      </section>

      <section className="section-block soft-bg about-principles-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow eyebrow-line">Our principles</span>
            <h2>Support that keeps things moving</h2>
            <p>Every interaction is designed to make business support easier to understand and act on.</p>
          </div>
          <div className="about-principles-grid">
            {principles.map(({ title, text, icon: Icon }, index) => (
              <article key={title} className={`about-principle-card principle-tone-${index + 1}`}>
                <div className="mini-icon-wrap"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block about-audience-section">
        <div className="container about-audience-grid">
          <div>
            <span className="eyebrow eyebrow-line">Who we support</span>
            <h2>Useful support at every stage</h2>
            <p>Our services are designed for people who need a clear place to begin, whether they are launching, formalizing, or growing.</p>
          </div>
          <div className="about-audience-list">
            {audiences.map(({ label, icon: Icon }) => (
              <span key={label}>
                <Icon size={16} strokeWidth={2} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block about-cta-section">
        <div className="container about-cta-box">
          <div>
            <span className="eyebrow eyebrow-line">Start with a conversation</span>
            <h2>Not sure where to begin?</h2>
            <p>Tell us what you are working on and we will help you understand the next step.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Talk to Finstics <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  )
}
