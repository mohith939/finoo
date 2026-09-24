import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page-hero compact-hero">
      <div className="container narrow centered">
        <span className="eyebrow eyebrow-line">Page not found</span>
        <h1>The page you are looking for does not exist.</h1>
        <p>Head back to the homepage or browse our full services list.</p>
        <div className="hero-actions center-actions">
          <Link className="btn btn-primary" to="/">Go Home</Link>
          <Link className="btn btn-secondary" to="/services">View Services</Link>
        </div>
      </div>
    </section>
  )
}
