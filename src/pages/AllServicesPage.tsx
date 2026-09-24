import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ServiceCard } from '../components/ServiceCard'
import { serviceCategories, services } from '../data/services'

export function AllServicesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Services')

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = activeCategory === 'All Services' || service.category === activeCategory
      const haystack = `${service.name} ${service.category} ${service.description}`.toLowerCase()
      const matchesSearch = haystack.includes(searchTerm.trim().toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow-line">All services</span>
          <h1>Choose the support your business needs</h1>
          <p>Search by service, category, or business need. Every option leads to a dedicated page with clear guidance.</p>
        </div>
      </section>

      <section className="section-block all-services-section">
        <div className="container">
          <div className="services-toolbar">
            <div className="search-input-wrap">
              <Search size={18} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search services like GST, export, ISO, trademark..."
                aria-label="Search services"
              />
            </div>
          </div>

          <div className="category-tabs" role="tablist" aria-label="Service categories">
            {serviceCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="results-summary">
            Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="empty-state">
              <h3>No services found</h3>
              <p>Try a different keyword or switch to another category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
