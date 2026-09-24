import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { AllServicesPage } from './pages/AllServicesPage'
import { ContactPage } from './pages/ContactPage'
import { ClientsPage } from './pages/ClientsPage'
import { FAQPage } from './pages/FAQPage'
import { HomePage } from './pages/HomePage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicePage } from './pages/ServicePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/services" element={<Layout><AllServicesPage /></Layout>} />
        <Route path="/services/:slug" element={<Layout><ServicePage /></Layout>} />
        <Route path="/how-it-works" element={<Layout><HowItWorksPage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/clients" element={<Layout><ClientsPage /></Layout>} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
