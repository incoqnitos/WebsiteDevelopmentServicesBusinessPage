import '../styles/globals.css';
import '../styles/navigation-responsive.css';
import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import Arhont1 from './components/Arhont1';
import ServicesPage from './components/ServicesPage';
import WebDevelopmentPage from './components/services/WebDevelopmentPage';
import MobileDevelopmentPage from './components/services/MobileDevelopmentPage';
import UIUXDesignPage from './components/services/UIUXDesignPage';
import ECommercePage from './components/services/ECommercePage';
import PricingPage from './components/PricingPage';
import DesignAdvertising from './components/DesignAdvertising';
import TRAC from './components/TRAC';
import Robotics from './components/Robotics';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import LaptopConfigurator from './components/LaptopConfigurator';
import { ShoppingCartPage } from './components/ShoppingCartPage';
import { BackgroundVideoPlayer } from './components/BackgroundVideoPlayer';
import { HeroHandControl } from './components/HeroHandControl';
import InvestorsHub from './components/InvestorsHub';
import InvestorDetail from './components/InvestorDetail';
import DemoHub from './components/DemoHub';
import HardwarePage from './components/HardwarePage';
import Software from './components/Software';
import LegalPage from './components/LegalPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookiePolicyPage from './components/CookiePolicyPage';
import ImpressumPage from './components/ImpressumPage';
import { LoadingScreen } from './components/LoadingScreen';
import ElectricLogo from './components/ElectricLogo';
import PublicationsSection from './components/PublicationsSection';
import OurClientsSection from './components/OurClientsSection';
import TOZNavierStokesPage from './components/TOZNavierStokesPage';
import ResearchPage from './components/ResearchPage';
import ClientPortalPage from './components/ClientPortalPage';
import AdminPanel from './components/AdminPanel';
import { SEO, PAGE_SEO } from './components/SEO';
import { GoogleTag, trackPageView } from './components/GoogleTag';
import { motion } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [detailId, setDetailId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      
      // Check if it's an investor detail page (format: #investor/product-id)
      if (hash.startsWith('investor/')) {
        const id = hash.split('/')[1];
        setCurrentPage('investor-detail');
        setDetailId(id);
      } 
      // Check if it's a services subpage (format: #services/web-development)
      else if (hash.startsWith('services/')) {
        const subPage = hash.split('/')[1];
        setCurrentPage(subPage);
        setDetailId(null);
      } 
      else {
        setCurrentPage(hash);
        setDetailId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', () => {
      handleHashChange();
      const page = window.location.hash.slice(1) || 'home';
      trackPageView(page);
    });
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render Investor Detail page
  if (currentPage === 'investor-detail' && detailId) {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Investor Details – MITAI" {...PAGE_SEO.investors} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <InvestorDetail id={detailId} />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Investors Hub page
  if (currentPage === 'investors') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.investors} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <InvestorsHub />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Design & Advertising Page
  if (currentPage === 'design-advertising') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO['design-advertising']} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <DesignAdvertising />
        </main>
        <Footer />
      </div>
    );
  }

  // Render TRAC Page
  if (currentPage === 'trac') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="TRAC System – MITAI" description="TRAC – intelligente Automatisierungslösung von MITAI für Tracking, Analyse und Steuerung." />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <TRAC />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Portfolio Page
  if (currentPage === 'portfolio') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.portfolio} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <PortfolioPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render About Page
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.about} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <AboutPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Laptop Configurator Page
  if (currentPage === 'laptop-configurator') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Laptop Konfigurator – MITAI Hardware" description="Konfigurieren Sie Ihren Laptop mit MITAI: leistungsstarke Hardware für Entwickler, Designer und Unternehmen." keywords="Laptop Konfigurator, Hardware Konfiguration, Custom Laptop, MITAI Hardware" />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <LaptopConfigurator />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Shopping Cart Page
  if (currentPage === 'cart') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Warenkorb – MITAI Shop" description="Ihr Warenkorb bei MITAI. Überprüfen und bestellen Sie Ihre ausgewählten Produkte und Dienstleistungen." noIndex={true} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <ShoppingCartPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Services Page
  if (currentPage === 'services') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.services} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <ServicesPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Web Development Page
  if (currentPage === 'web-development') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO['web-development']} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <WebDevelopmentPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Mobile Development Page
  if (currentPage === 'mobile-development') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO['mobile-development']} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <MobileDevelopmentPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render UI/UX Design Page
  if (currentPage === 'uiux-design') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO['uiux-design']} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <UIUXDesignPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render E-Commerce Page
  if (currentPage === 'ecommerce') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.ecommerce} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <ECommercePage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Pricing Page
  if (currentPage === 'pricing') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.pricing} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <PricingPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Hardware Page
  if (currentPage === 'hardware') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.hardware} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <HardwarePage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Software Page
  if (currentPage === 'software') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.software} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <Software />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Legal Page
  if (currentPage === 'legal') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Rechtliches – MITAI" description="Rechtliche Informationen von MIT1985 LTD (MITAI): Impressum, Datenschutz, AGB und Cookie-Richtlinien." />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <LegalPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Privacy Policy Page
  if (currentPage === 'privacy-policy') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Datenschutzerklärung – MITAI" description="Datenschutzerklärung von MIT1985 LTD (MITAI) gemäß DSGVO. Informationen zur Verarbeitung Ihrer personenbezogenen Daten." />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <PrivacyPolicyPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Terms of Service Page
  if (currentPage === 'terms-of-service') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Allgemeine Geschäftsbedingungen – MITAI" description="AGB von MIT1985 LTD (MITAI). Unsere allgemeinen Geschäftsbedingungen für Dienstleistungen und Produkte." />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <TermsOfServicePage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Cookie Policy Page
  if (currentPage === 'cookie-policy') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Cookie-Richtlinien – MITAI" description="Cookie-Richtlinien von MIT1985 LTD (MITAI). Informationen zur Verwendung von Cookies auf unserer Website." />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <CookiePolicyPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Impressum Page
  if (currentPage === 'impressum') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Impressum – MIT1985 LTD" description="Impressum von MIT1985 LTD (MITAI). Pflichtangaben gemäß § 5 TMG." />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <ImpressumPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Contact Page
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.contact} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <ContactPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Robotics Page
  if (currentPage === 'robotics') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.robotics} />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <Robotics />
        </main>
        <Footer />
      </div>
    );
  }

  // Render DemoHub Page
  if (currentPage === 'demos') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="Demo Hub – MITAI Technologie-Demos" description="Interaktive Demos der MITAI-Technologien: KI, Robotik, Mobile Apps und mehr. Erleben Sie unsere Lösungen live." keywords="MITAI Demo, KI Demo, Robotik Demo, Technologie Showcase" />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <DemoHub />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Arhont1 Page
  if (currentPage === 'arhont1') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO title="ARHONT – Autonomes Robotik-System" description="ARHONT: Das autonome Robotik- und KI-System von MITAI für industrielle und kommerzielle Anwendungen." keywords="ARHONT, autonomer Roboter, KI Robotik, MITAI Robotik System" />
        <Navigation />
        <main style={{ paddingTop: 96 }}>
          <Arhont1 />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Research & Publications profile page
  if (currentPage === 'research-publications') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO['research-publications']} />
        <Navigation />
        <main style={{ paddingTop: 80 }}>
          <ResearchPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render TOZ Navier-Stokes article
  if (currentPage === 'toz-navier-stokes') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO['toz-navier-stokes']} />
        <Navigation />
        <main style={{ paddingTop: 80 }}>
          <TOZNavierStokesPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Client Portal
  if (currentPage === 'client-portal') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO['client-portal']} />
        <Navigation />
        <main style={{ paddingTop: 80 }}>
          <ClientPortalPage />
        </main>
        <Footer />
      </div>
    );
  }

  // Render Admin Panel
  if (currentPage === 'admin') {
    return (
      <div className="min-h-screen bg-slate-950">
        <SEO {...PAGE_SEO.admin} />
        <Navigation />
        <AdminPanel />
      </div>
    );
  }

  // Render main homepage
  return (
    <div className="min-h-screen bg-slate-950" style={{ position: 'relative', zIndex: 1 }}>
      <SEO {...PAGE_SEO.home} />
      <GoogleTag />
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      


      


      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* YouTube Video Section */}
        <section className="relative overflow-hidden bg-video-section hero-video-section" style={{ width: '100%' }}>
          <BackgroundVideoPlayer />

          {/* Hero Content Overlay */}
          <div className="hero-overlay-content hero-overlay-centered">
            <div style={{ marginBottom: '8px' }}>
              <ElectricLogo size={220} />
              <div style={{ marginTop: '12px', fontSize: 'clamp(16px, 2vw, 26px)', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.9)' }}>
                Mobile Intelligence Technologies
              </div>
            </div>

            <div className="hero-actions hero-actions-centered">
              <a href="#portfolio">Explore Projects</a>
              <a href="#contact" className="secondary">Start Project</a>
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <OurClientsSection />

        {/* Product Cards Section - BELOW video in document flow */}
        <section className="relative" style={{ width: '100%' }}>
          <HeroHandControl />
        </section>

        {/* Publications & News Section */}
        <PublicationsSection />
      </main>

      <Footer />
    </div>
  );
}