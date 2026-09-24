import { CheckCircle2, ChevronDown, Phone } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { services } from '../data/services'
import { Building2, BriefcaseBusiness, FileText, FileSpreadsheet, LayoutGrid, MonitorSmartphone, ShieldCheck, Sparkles, BadgeCheck, Scale, ShipWheel, Factory, Truck, CheckCircle, Leaf, PackageCheck, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  sparkles: Sparkles,
  fileMoney: FileSpreadsheet,
  briefcase: BriefcaseBusiness,
  clipboard: FileText,
  monitor: MonitorSmartphone,
  ledger: LayoutGrid,
  badge: BadgeCheck,
  users: BriefcaseBusiness,
  award: BadgeCheck,
  factory: Factory,
  trademark: PackageCheck,
  shield: ShieldCheck,
  checkCircle: CheckCircle,
  shieldCheck: ShieldCheck,
  leaf: Leaf,
  pepper: Truck,
  scale: Scale,
  ship: ShipWheel,
  fileText: FileText,
}

export function ServicePage() {
  const { slug } = useParams()
  const service = useMemo(() => services.find((item) => item.slug === slug), [slug])
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    if (service) {
      document.title = `${service.metaTitle} | Finstics`
    }
  }, [service])

  if (!service) {
    return (
      <section className="page-hero compact-hero">
        <div className="container narrow centered">
          <span className="eyebrow eyebrow-line">Service not found</span>
          <h1>We could not find that page.</h1>
          <Link className="btn btn-primary" to="/services">View all services</Link>
        </div>
      </section>
    )
  }

  const Icon = iconMap[service.icon] ?? Building2
  const relatedServices = services.filter((item) => service.related.includes(item.slug)).slice(0, 3)

  return (
    <>
      <section className="page-hero service-hero">
        <div className="container service-hero-grid">
          <div>
            <span className="eyebrow eyebrow-line">{service.category}</span>
            <h1>{service.name}</h1>
            <p>{service.intro}</p>
            <div className="hero-actions">
              <a href="https://wa.me/918340956469?text=Hello%20Finstics%2C%20I%20want%20help%20with%20service%20{encodeURIComponent(service.name)}" className="btn btn-primary" target="_blank" rel="noreferrer">
                <WhatsAppIcon size={18} />
                WhatsApp Us
              </a>
              <a href="tel:+918340956469" className="btn btn-secondary">
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>

          <div className="service-hero-visual">
            <div className="service-icon-panel" style={{ ['--service-accent' as string]: service.accent }}>
              <Icon size={64} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container narrow">
          <div className="service-details-quick">
            <div className="quick-info-box">
              <span>Service category</span>
              <strong>{service.category}</strong>
            </div>
            <div className="quick-info-box">
              <span>Suitable for</span>
              <strong>{service.suitableFor[0]}</strong>
            </div>
            <div className="quick-info-box">
              <span>Support type</span>
              <strong>Guided assistance</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container narrow">
          <div className="content-section">
            <h2>What is this service?</h2>
            <p>{service.description}</p>
          </div>
        </div>
      </section>

      <section className="section-block soft-bg">
        <div className="container narrow">
          <div className="content-section">
            <h2>Who needs it?</h2>
            <div className="info-grid simple-grid">
              {service.suitableFor.map((item) => (
                <div key={item} className="info-card">
                  <div className="mini-icon-wrap"><CheckCircle2 size={20} /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container narrow">
          <div className="content-section">
            <h2>Documents / information required</h2>
            <div className="info-grid docs-grid">
              {service.docs.map((item) => (
                <div key={item} className="info-card">
                  <div className="mini-icon-wrap alt"><FileText size={18} /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block soft-bg">
        <div className="container narrow">
          <div className="content-section">
            <h2>How the process works</h2>
            <div className="timeline-grid">
              {service.process.map((step, index) => (
                <div key={step.title} className="timeline-item">
                  <div className="timeline-step">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container narrow">
          <div className="content-section">
            <h2>Why use Finstics?</h2>
            <div className="info-grid simple-grid">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="info-card">
                  <div className="mini-icon-wrap"><CheckCircle2 size={20} /></div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block soft-bg">
        <div className="container narrow">
          <div className="content-section">
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {service.faqs.map((faq, index) => (
                <div key={faq.question} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                  <button type="button" className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{faq.question}</span>
                    <ChevronDown size={18} />
                  </button>
                  {openFaq === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container narrow">
          <div className="content-section">
            <h2>Related services</h2>
            <div className="services-grid related-grid">
              {relatedServices.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block final-cta-section">
        <div className="container final-cta-box narrow">
          <div>
            <span className="eyebrow eyebrow-line">Need help with this?</span>
            <h2>Talk to the Finstics team</h2>
          </div>
          <div className="hero-actions">
            <a href="https://wa.me/918340956469?text=Hello%20Finstics%2C%20I%20want%20help%20with%20{encodeURIComponent(service.name)}" className="btn btn-primary" target="_blank" rel="noreferrer">
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
