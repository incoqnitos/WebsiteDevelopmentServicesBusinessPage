import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import ElectricLogo from './ElectricLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Web Development', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
      { label: 'Mobile Development', href: '#services' },
      { label: 'E-Commerce', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Research & Publications', href: '#research-publications' },
      { label: 'Contact', href: '#contact' },
      { label: 'Client Portal', href: '#client-portal' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy-policy' },
      { label: 'Terms of Service', href: '#terms-of-service' },
      { label: 'Cookie Policy', href: '#cookie-policy' },
      { label: 'Impressum', href: '#impressum' },
      { label: '⚙ Admin', href: '#admin' },
    ],
  };

  return (
    <footer 
      className="border-t pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      style={{ 
        position: 'relative', 
        zIndex: 20,
        background: '#020617',
        borderTop: '1px solid #1e293b'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 group inline-block">
              <div className="w-40 h-40">
                <ElectricLogo />
              </div>
            </a>
            
            <p className="max-w-sm text-slate-400">
              Crafting exceptional digital experiences through innovative web development solutions. 
              Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 border rounded-lg flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 border rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 border rounded-lg flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="mailto:hello@devcraftsolutions.com"
                className="w-10 h-10 bg-slate-900 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 border rounded-lg flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-slate-100">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-slate-100">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-4 text-slate-100">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-slate-900 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} MIT AI Mobile Intelligent Technologies. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}