import { clients } from '../data/clients'

export function ClientLogo({ name, logo }: { name: string; logo?: string }) {
  return (
    <div className="client-logo" aria-label={name}>
      {logo ? <img src={logo} alt={name} /> : <span>{name}</span>}
    </div>
  )
}

export function ClientsPage() {
  const logoTrack = [...clients, ...clients]

  return (
    <>
      <section className="page-hero clients-hero">
        <div className="container narrow centered">
          <span className="eyebrow eyebrow-line">Our clients</span>
          <h1>Trusted by growing businesses</h1>
          <p>We are proud to support ambitious businesses with registrations, compliance, certifications, and digital growth.</p>
        </div>
      </section>

      <section className="section-block clients-section">
        <div className="container">
          <div className="clients-marquee" aria-label="Client logos">
            <div className="clients-marquee-track">
              {logoTrack.map((client, index) => (
                <ClientLogo key={`${client.name}-${index}`} {...client} />
              ))}
            </div>
          </div>
          <p className="clients-note">Add logo paths in <code>src/data/clients.ts</code> as your client list grows.</p>
        </div>
      </section>
    </>
  )
}