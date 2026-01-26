import { useState } from 'react';
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import './App.css'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);

  return (
    <div className="landing-page" style={{ position: 'relative', minHeight: '100vh' }}>
      <Topbar onOpenContact={openContactModal} />
      <main>
        <Hero onOpenContact={openContactModal} />
        <Features />
        <Services />
        <Testimonials />
        <FAQ />
        <CallToAction onOpenContact={openContactModal} />
        <Footer />
      </main>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}

export default App
