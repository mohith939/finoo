import { ArrowRight, CheckCircle2, ClipboardList, FileCheck2, MessageCircle, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'

const processSteps = [
  {
    title: 'Tell Us What You Need',
    text: 'Share your business goal, current stage, or the service you are looking for. We start by understanding what you need clearly.',
  },
  {
    title: 'Get Guidance',
    text: 'We explain the basic process, what usually matters, and the kind of documents or information that may be needed.',
  },
  {
    title: 'We Handle the Process',
    text: 'We organize the details, prepare the required information, and keep the process simple and structured for you.',
  },
  {
    title: 'Get Your Service Completed',
    text: 'You move forward with a smoother process and better clarity, without the stress of figuring everything out alone.',
  },
]

const expectations = [
  { title: 'A clear first conversation', text: 'We understand your business, goal, and the kind of support you are looking for.', icon: MessageCircle },
  { title: 'A practical checklist', text: 'You know which details, documents, or decisions need to be prepared next.', icon: ClipboardList },
  { title: 'Organized follow-through', text: 'We keep the process structured so important steps are easier to track.', icon: FileCheck2 },
  { title: 'A confident next step', text: 'You finish with better clarity and a more useful path forward for your business.', icon: CheckCircle2 },
]

export function HowItWorksPage() {
  return (
    <>
      <section className="page-hero compact-hero how-page-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow-line">How it works</span>
          <h1>Simple steps for business support</h1>
          <p>From the first conversation to the final completion, the process is designed to be simple, practical, and easy to follow.</p>
        </div>
      </section>

      <section className="section-block how-process-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow eyebrow-line">Your journey</span>
            <h2>Four simple steps to move forward</h2>
            <p>We keep the process clear from your first message to completion.</p>
          </div>
          <div className="steps-grid large-steps">
            {processSteps.map((step, index) => (
              <div key={step.title} className="step-card">
                <div className="step-number">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block soft-bg how-expectations-section">
        <div className="container">
          <div className="section-header centered">
            <span className="eyebrow eyebrow-line">What to expect</span>
            <h2>Support that stays practical</h2>
            <p>No unnecessary complexity, just clear guidance and useful next steps.</p>
          </div>
          <div className="how-expectations-grid">
            {expectations.map(({ title, text, icon: Icon }, index) => (
              <article key={title} className={`how-expectation-card how-tone-${index + 1}`}>
                <div className="mini-icon-wrap"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block how-page-cta-section">
        <div className="container how-page-cta-box">
          <div>
            <span className="eyebrow eyebrow-line">Ready when you are</span>
            <h2>Start with a simple conversation</h2>
            <p>Share what you need and we will help you understand the best next step.</p>
          </div>
          <div className="hero-actions">
            <a href="https://wa.me/918340956469?text=Hello%20Finstics%2C%20I%20would%20like%20to%20get%20started." className="btn btn-primary" target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp Us
            </a>
            <Link to="/contact" className="btn btn-secondary"><PhoneCall size={17} /> Contact Us <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
