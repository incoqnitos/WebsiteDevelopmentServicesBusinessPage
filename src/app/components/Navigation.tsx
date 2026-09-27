import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import ElectricLogo from './ElectricLogo';

type NavItem = { href: string; label: string; featured?: boolean; tag?: string };
type NavMenu = { label: string; items: NavItem[] };

const PORTFOLIO_MENU: NavMenu = {
  label: 'Portfolio',
  items: [
    { href: '#portfolio', label: 'All Products' },
    { href: '#software', label: 'Software' },
    { href: '#demos', label: 'Demos' },
    { href: '#laptop-configurator', label: 'Configure Your Laptop', featured: true, tag: 'New' },
  ],
};

const SERVICES_MENU: NavMenu = {
  label: 'Services',
  items: [
    { href: '#services', label: 'All Services' },
    { href: '#services/web-development', label: 'Web Development' },
    { href: '#services/uiux-design', label: 'UI/UX Design' },
    { href: '#services/mobile-development', label: 'Mobile Development' },
    { href: '#services/ecommerce', label: 'E-Commerce' },
  ],
};

const ABOUT_MENU: NavMenu = {
  label: 'About',
  items: [
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
    { href: '#legal', label: 'Legal' },
    { href: '#privacy-policy', label: 'Privacy Policy' },
    { href: '#terms-of-service', label: 'Terms of Service' },
    { href: '#cookie-policy', label: 'Cookie Policy' },
    { href: '#impressum', label: 'Impressum' },
  ],
};

const LINKS: NavItem[] = [
  { href: '#pricing', label: 'Pricing' },
  { href: '#design-advertising', label: 'Design & Advertising' },
  { href: '#investors', label: 'Investors' },
];

function DesktopMenu({ menu }: { menu: NavMenu }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="mitai-navgroup relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="mitai-navlink" aria-expanded={open}>
        {menu.label}
        <ChevronDown className="chev w-4 h-4" />
      </button>
      {open && (
        <div className="mitai-dropdown">
          <div className="mitai-dropdown-panel">
            {menu.items.map((item, i) => (
              <div key={item.href}>
                {i === 1 && <div className="mitai-ddsep" />}
                <a href={item.href} className={`mitai-dditem${item.featured ? ' featured' : ''}`}>
                  <span>{item.label}</span>
                  {item.tag && <span className="tag">{item.tag}</span>}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({
  menu,
  onNavigate,
}: {
  menu: NavMenu;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="mitai-navlink flex items-center justify-between w-full"
        style={{ paddingBlock: 10 }}
      >
        {menu.label}
        <ChevronDown
          className="w-4 h-4 transition-transform"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {open && (
        <div className="pl-3 mt-1 space-y-1" style={{ borderLeft: '1px solid rgba(6,182,212,0.2)' }}>
          {menu.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="mitai-dditem"
              style={{ fontSize: 13.5 }}
            >
              <span>{item.label}</span>
              {item.tag && <span className="tag">{item.tag}</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className={`mitai-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mitai-nav-shell">
            <div className="flex items-center justify-between gap-6 py-2.5 px-5 sm:px-7">
              {/* Logo */}
              <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
                <div className="w-14 h-14 group-hover:scale-105 transition-transform">
                  <ElectricLogo />
                </div>
                <span
                  className="hidden lg:block"
                  style={{
                    fontFamily: "'Michroma', var(--font-display)",
                    fontSize: 15,
                    letterSpacing: '0.14em',
                    color: '#e2e8f0',
                  }}
                >
                  MITAI
                </span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-7">
                <a href="#home" className="mitai-navlink">Home</a>
                <DesktopMenu menu={PORTFOLIO_MENU} />
                <DesktopMenu menu={SERVICES_MENU} />
                {LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="mitai-navlink">
                    {l.label}
                  </a>
                ))}
                <DesktopMenu menu={ABOUT_MENU} />
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-2">
                <a href="#cart" className="mitai-icon-btn" aria-label="Cart">
                  <ShoppingCart className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="mitai-icon-btn md:hidden"
                  aria-label="Menu"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed top-24 left-4 right-4 rounded-3xl z-40"
          style={{
            background: 'rgba(6, 10, 20, 0.96)',
            border: '1px solid rgba(6, 182, 212, 0.28)',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 24px 60px rgba(2,6,23,0.7)',
            maxHeight: 'calc(100vh - 140px)',
            overflowY: 'auto',
          }}
        >
          <div className="px-5 py-5 space-y-1">
            <a href="#home" onClick={close} className="mitai-navlink" style={{ display: 'block', paddingBlock: 10 }}>
              Home
            </a>
            <MobileMenu menu={PORTFOLIO_MENU} onNavigate={close} />
            <MobileMenu menu={SERVICES_MENU} onNavigate={close} />
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={close} className="mitai-navlink" style={{ display: 'block', paddingBlock: 10 }}>
                {l.label}
              </a>
            ))}
            <MobileMenu menu={ABOUT_MENU} onNavigate={close} />
          </div>
        </div>
      )}
    </>
  );
}
