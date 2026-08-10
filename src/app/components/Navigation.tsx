import { useState } from 'react';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import ElectricLogo from './ElectricLogo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const navLinks = [
    { href: '#pricing', label: 'Pricing' },
    { href: '#design-advertising', label: 'Design & Advertising' },
    { href: '#investors', label: 'Investors' },
  ];

  return (
    <>
      {/* Navigation Menu Bar */}
      <nav 
        className="fixed w-full z-50"
        style={{
          top: '20px', // One finger space from top
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="backdrop-blur-2xl shadow-2xl"
            style={{
              borderRadius: '32px',
              background: 'rgba(15, 23, 42, 0.4)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              boxShadow: '0 8px 32px rgba(6, 182, 212, 0.15), 0 0 80px rgba(6, 182, 212, 0.08)'
            }}
          >
            {/* Desktop Navigation */}
            <div className="flex items-center justify-between gap-8 py-3 px-8">
              {/* Logo on left */}
              <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
                <div className="w-16 h-16 group-hover:scale-105 transition-transform">
                  <ElectricLogo />
                </div>
              </a>

              {/* Menu items in center - HIDDEN ON MOBILE */}
              <div className="hidden md:flex items-center gap-8">
                {/* Home Link */}
                <a 
                  href="#home" 
                  className="transition-all duration-300"
                  style={{
                    color: 'rgb(203, 213, 225)',
                    fontWeight: 600,
                    textShadow: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgb(6, 182, 212)';
                    e.currentTarget.style.textShadow = '0 0 20px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgb(203, 213, 225)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  Home
                </a>

                {/* Portfolio Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setPortfolioDropdown(true)}
                  onMouseLeave={() => setPortfolioDropdown(false)}
                >
                  <button 
                    className="flex items-center gap-1 py-2 transition-all duration-300"
                    style={{
                      color: 'rgb(203, 213, 225)',
                      fontWeight: 600,
                      textShadow: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgb(6, 182, 212)';
                      e.currentTarget.style.textShadow = '0 0 20px rgba(6, 182, 212, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgb(203, 213, 225)';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    Portfolio
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {portfolioDropdown && (
                    <div 
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => setPortfolioDropdown(true)}
                      onMouseLeave={() => setPortfolioDropdown(false)}
                    >
                      <div 
                        className="w-56 rounded-lg shadow-xl py-2"
                        style={{
                          background: 'rgb(0, 0, 0)',
                          border: '1px solid rgba(6, 182, 212, 0.5)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.3)'
                        }}
                      >
                        <a
                          href="#portfolio"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          All Products
                        </a>
                        <div 
                          className="my-1"
                          style={{
                            borderTop: '1px solid rgba(6, 182, 212, 0.2)' 
                          }}
                        ></div>
                        <a
                          href="#software"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          Software
                        </a>
                        <a
                          href="#laptop-configurator"
                          className="block px-4 py-2 transition-all font-semibold"
                          style={{
                            color: 'rgb(6, 182, 212)',
                            textShadow: '0 0 10px rgba(6, 182, 212, 0.4)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)'; 
                            e.currentTarget.style.textShadow = '0 0 15px rgba(6, 182, 212, 0.8)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.4)';
                          }}
                        >
                          Configure Your Laptop
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <button 
                    className="flex items-center gap-1 py-2 transition-all duration-300"
                    style={{
                      color: 'rgb(203, 213, 225)',
                      fontWeight: 600,
                      textShadow: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgb(6, 182, 212)';
                      e.currentTarget.style.textShadow = '0 0 20px rgba(6, 182, 212, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgb(203, 213, 225)';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    Services
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {servicesDropdown && (
                    <div 
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <div 
                        className="w-56 rounded-lg shadow-xl py-2"
                        style={{
                          background: 'rgb(0, 0, 0)',
                          border: '1px solid rgba(6, 182, 212, 0.5)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.3)'
                        }}
                      >
                        <a
                          href="#services"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          All Services
                        </a>
                        <div 
                          className="my-1"
                          style={{
                            borderTop: '1px solid rgba(6, 182, 212, 0.2)' 
                          }}
                        ></div>
                        <a
                          href="#services/web-development"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          Web Development
                        </a>
                        <a
                          href="#services/uiux-design"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          UI/UX Design
                        </a>
                        <a
                          href="#services/mobile-development"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          Mobile Development
                        </a>
                        <a
                          href="#services/ecommerce"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          E-Commerce
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Regular Nav Links */}
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition-all duration-300"
                    style={{
                      color: 'rgb(203, 213, 225)',
                      fontWeight: 600,
                      textShadow: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgb(6, 182, 212)';
                      e.currentTarget.style.textShadow = '0 0 20px rgba(6, 182, 212, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgb(203, 213, 225)';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    {link.label}
                  </a>
                ))}

                {/* About Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <button 
                    className="flex items-center gap-1 py-2 transition-all duration-300"
                    style={{
                      color: 'rgb(203, 213, 225)',
                      fontWeight: 600,
                      textShadow: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgb(6, 182, 212)';
                      e.currentTarget.style.textShadow = '0 0 20px rgba(6, 182, 212, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgb(203, 213, 225)';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    About
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {aboutDropdown && (
                    <div 
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => setAboutDropdown(true)}
                      onMouseLeave={() => setAboutDropdown(false)}
                    >
                      <div 
                        className="w-56 rounded-lg shadow-xl py-2"
                        style={{
                          background: 'rgb(0, 0, 0)',
                          border: '1px solid rgba(6, 182, 212, 0.5)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.3)'
                        }}
                      >
                        <a
                          href="#about"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          About Us
                        </a>
                        <div 
                          className="my-1"
                          style={{
                            borderTop: '1px solid rgba(6, 182, 212, 0.2)' 
                          }}
                        ></div>
                        <a
                          href="#legal"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          Legal
                        </a>
                        <a
                          href="#privacy-policy"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          Privacy Policy
                        </a>
                        <a
                          href="#terms-of-service"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          Terms of Service
                        </a>
                        <a
                          href="#cookie-policy"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          Cookie Policy
                        </a>
                        <a
                          href="#impressum"
                          className="block px-4 py-2 transition-all"
                          style={{
                            color: 'rgb(203, 213, 225)',
                            fontWeight: 500
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; 
                            e.currentTarget.style.color = 'rgb(6, 182, 212)';
                            e.currentTarget.style.textShadow = '0 0 10px rgba(6, 182, 212, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'rgb(203, 213, 225)';
                            e.currentTarget.style.textShadow = 'none';
                          }}
                        >
                          Impressum
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right side actions - Shopping cart */}
              <div className="flex items-center gap-4">
                {/* Cart Button */}
                <a
                  href="#cart"
                  className="relative transition-all duration-300 p-2 rounded-xl"
                  style={{
                    color: 'rgb(148, 163, 184)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgb(6, 182, 212)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgb(148, 163, 184)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ShoppingCart className="w-6 h-6" />
                </a>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden transition-colors"
                  style={{
                    color: 'rgb(148, 163, 184)'
                  }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="md:hidden py-4 space-y-3 fixed top-28 left-4 right-4 rounded-3xl backdrop-blur-2xl shadow-2xl z-40"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            maxHeight: 'calc(100vh - 140px)',
            overflowY: 'auto'
          }}
        >
          <div className="px-6 py-4 space-y-3">
            {/* Home */}
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block py-2 transition-colors"
              style={{
                color: 'rgb(203, 213, 225)',
                fontWeight: 600
              }}
            >
              Home
            </a>

            {/* Portfolio with submenu */}
            <div>
              <button
                onClick={() => setPortfolioDropdown(!portfolioDropdown)}
                className="flex items-center justify-between w-full py-2 transition-colors"
                style={{
                  color: 'rgb(203, 213, 225)',
                  fontWeight: 600
                }}
              >
                Portfolio
                <ChevronDown 
                  className="w-4 h-4 transition-transform" 
                  style={{ 
                    transform: portfolioDropdown ? 'rotate(180deg)' : 'rotate(0deg)' 
                  }}
                />
              </button>
              {portfolioDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="#software"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Software
                  </a>
                  <a
                    href="#demos"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Demos
                  </a>
                </div>
              )}
            </div>

            {/* Services with submenu */}
            <div>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="flex items-center justify-between w-full py-2 transition-colors"
                style={{
                  color: 'rgb(203, 213, 225)',
                  fontWeight: 600
                }}
              >
                Services
                <ChevronDown 
                  className="w-4 h-4 transition-transform" 
                  style={{ 
                    transform: servicesDropdown ? 'rotate(180deg)' : 'rotate(0deg)' 
                  }}
                />
              </button>
              {servicesDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="#services/web-development"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Web Development
                  </a>
                  <a
                    href="#services/uiux-design"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    UI/UX Design
                  </a>
                  <a
                    href="#services/mobile-development"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Mobile Development
                  </a>
                  <a
                    href="#services/ecommerce"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    E-Commerce
                  </a>
                </div>
              )}
            </div>

            {/* Regular nav links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 transition-colors"
                style={{
                  color: 'rgb(203, 213, 225)',
                  fontWeight: 600
                }}
              >
                {link.label}
              </a>
            ))}

            {/* About with submenu */}
            <div>
              <button
                onClick={() => setAboutDropdown(!aboutDropdown)}
                className="flex items-center justify-between w-full py-2 transition-colors"
                style={{
                  color: 'rgb(203, 213, 225)',
                  fontWeight: 600
                }}
              >
                About
                <ChevronDown 
                  className="w-4 h-4 transition-transform" 
                  style={{ 
                    transform: aboutDropdown ? 'rotate(180deg)' : 'rotate(0deg)' 
                  }}
                />
              </button>
              {aboutDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    About Us
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Contact
                  </a>
                  <a
                    href="#legal"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Legal
                  </a>
                  <a
                    href="#privacy-policy"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#terms-of-service"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#cookie-policy"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Cookie Policy
                  </a>
                  <a
                    href="#impressum"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors"
                    style={{
                      color: 'rgb(148, 163, 184)',
                      fontWeight: 500
                    }}
                  >
                    Impressum
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}