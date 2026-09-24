import { useState, type FormEvent } from 'react'
import { Phone, Mail } from 'lucide-react'
import { WhatsAppIcon } from '../components/WhatsAppIcon'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow-line">Contact</span>
          <h1>Talk to Finstics about your business</h1>
          <p>Tell us what you need and we will guide you to the right next step.</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container contact-grid">
          <div className="contact-panel">
            <h2>Reach out quickly</h2>
            <div className="contact-methods">
              <a href="https://wa.me/918340956469?text=Hello%20Finstics%2C%20I%20would%20like%20to%20discuss%20my%20business%20requirements." className="contact-card" target="_blank" rel="noreferrer">
                <WhatsAppIcon size={20} />
                <div>
                  <span>WhatsApp</span>
                  <strong>+91 83409 56469</strong>
                </div>
              </a>

              <a href="tel:+918340956469" className="contact-card">
                <Phone size={20} />
                <div>
                  <span>Call</span>
                  <strong>+91 83409 56469</strong>
                </div>
              </a>

              <a href="mailto:mohith@finstics.com" className="contact-card">
                <Mail size={20} />
                <div>
                  <span>Email</span>
                  <strong>mohith@finstics.com</strong>
                </div>
              </a>

              <a href="mailto:sahil@finstics.com" className="contact-card">
                <Mail size={20} />
                <div>
                  <span>Email</span>
                  <strong>sahil@finstics.com</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-panel form-panel">
            <h2>Send an enquiry</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                  Phone Number
                  <input type="tel" name="phone" placeholder="Your phone number" />
                </label>
              </div>

              <label>
                Business Name
                <input type="text" name="business" placeholder="Business name" />
              </label>

              <label>
                Service Needed
                <select name="service">
                  <option value="">Select a service</option>
                  <option value="company-registration">Company Registration</option>
                  <option value="gst-registration-filings">GST Registration & Filings</option>
                  <option value="trademark-registration">Trademark Registration</option>
                  <option value="website-design-development">Website Design & Development</option>
                  <option value="fssai-registration">FSSAI Registration</option>
                  <option value="iec-import-export">IEC / Import-Export</option>
                </select>
              </label>

              <label>
                Message
                <textarea name="message" rows={4} placeholder="Tell us what you need help with" />
              </label>

              <button type="submit" className="btn btn-primary full-width">Send Enquiry</button>
              {submitted && <p className="form-success">Your enquiry has been recorded. Update the form handler or contact details when your business information is finalized.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
