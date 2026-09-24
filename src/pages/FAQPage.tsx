import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { allFAQs } from '../data/services'

const categories = ['General', 'Registrations', 'Licenses', 'Certifications', 'Tax & Compliance', 'Import & Export', 'Websites', 'Payments & Process']

const faqGroups = [
  {
    category: 'General',
    items: allFAQs,
  },
  {
    category: 'Registrations',
    items: [
      { question: 'Do I need a registration before starting?', answer: 'It depends on the business activity and the legal setup. We help explain the practical path based on your needs.' },
      { question: 'Can I discuss my business idea before deciding?', answer: 'Yes. We can begin with a quick discussion and help you understand your next steps clearly.' },
    ],
  },
  {
    category: 'Licenses',
    items: [
      { question: 'How do I know which license is needed?', answer: 'The exact requirement depends on the business activity, local rules, and your operating setup. We can help review the basics.' },
      { question: 'Is there a simple checklist?', answer: 'Yes. We usually explain the likely requirements and the main documents in a simple sequence.' },
    ],
  },
  {
    category: 'Certifications',
    items: [
      { question: 'Are certifications necessary for every business?', answer: 'No. They depend on the business type and the standard or trust need you are aiming for.' },
      { question: 'Can I decide after understanding the benefits?', answer: 'Yes. We can explain what the certification is usually used for and help you decide if it fits your goals.' },
    ],
  },
  {
    category: 'Tax & Compliance',
    items: [
      { question: 'Do I need help with tax filing?', answer: 'Many business owners benefit from clarity around filing, records, and a simple compliance checklist.' },
      { question: 'Can I keep track of compliance step by step?', answer: 'Yes. We help simplify the process and make it easier to understand the next steps.' },
    ],
  },
  {
    category: 'Import & Export',
    items: [
      { question: 'Is import-export registration complicated?', answer: 'It can feel confusing at first, but the process becomes clearer when the basics are explained step by step.' },
      { question: 'Can you help if I am new to this?', answer: 'Yes. We explain the likely requirements in clear language so you can move forward with confidence.' },
    ],
  },
  {
    category: 'Websites',
    items: [
      { question: 'Do I need a website?', answer: 'A website helps customers understand your services quickly and makes the business look more credible from the first visit.' },
      { question: 'Can you help with a basic business website?', answer: 'Yes. We build website solutions that are simple, clear, and focused on business enquiries.' },
    ],
  },
  {
    category: 'Payments & Process',
    items: [
      { question: 'How do I start?', answer: 'You can contact us by WhatsApp, phone, or through the contact form to share what you need help with.' },
      { question: 'Is the process easy for new businesses?', answer: 'Yes. We keep communication clear and guide you through the basics without making the process feel heavy.' },
    ],
  },
]

export function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('General')
  const [openItem, setOpenItem] = useState<number | null>(0)

  const activeGroup = faqGroups.find((group) => group.category === selectedCategory) || faqGroups[0]

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow-line">FAQ</span>
          <h1>Helpful answers for business owners</h1>
          <p>Browse common questions about registrations, licenses, compliance, websites, and business support.</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container narrow">
          <div className="faq-category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category)
                  setOpenItem(0)
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="faq-list large-faq-list">
            {activeGroup.items.map((faq, index) => (
              <div key={faq.question} className={`faq-item ${openItem === index ? 'open' : ''}`}>
                <button type="button" className="faq-question" onClick={() => setOpenItem(openItem === index ? null : index)}>
                  <span>{faq.question}</span>
                  <ChevronDown size={18} />
                </button>
                {openItem === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
