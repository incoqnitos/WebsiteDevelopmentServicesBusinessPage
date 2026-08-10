import { Code2, Rocket, Zap, Building2, CheckCircle2 } from 'lucide-react';

const webDevelopmentServices = [
  {
    title: 'Landing Page',
    subtitle: 'Basis Website',
    price: '3.000 – 5.000 €',
    icon: Rocket,
    gradient: 'from-purple-600 to-blue-600',
    features: [
      '5-8 Sections / Bereiche',
      'Responsive Design (Mobile, Tablet, Desktop)',
      'SEO-Optimierung (Meta-Tags, Sitemap)',
      'Kontaktformular mit E-Mail-Integration',
      'Google Analytics / Tracking Setup',
      'DSGVO-konforme Cookie-Banner',
      'Ladezeit-Optimierung (< 2s)',
      'SSL-Zertifikat & Security Headers'
    ],
    details: {
      technologies: 'Next.js, Tailwind CSS, TypeScript',
      hosting: 'Vercel / Netlify (inkl. Setup)',
      deliveryTime: '2-3 Wochen',
      revisions: '2 Runden inklusive'
    }
  },
  {
    title: 'Business Website',
    subtitle: 'Erweiterte Präsenz',
    price: '5.000 – 12.000 €',
    icon: Building2,
    gradient: 'from-blue-600 to-cyan-600',
    features: [
      '10-20 Seiten mit individuellem Design',
      'CMS-Integration (Sanity, Strapi, WordPress Headless)',
      'Blog-System mit Admin-Panel',
      'Mehrsprachigkeit (i18n)',
      'Erweiterte SEO & Schema Markup',
      'Newsletter-Integration (Mailchimp, Brevo)',
      'Dynamische Formulare & Validierung',
      'Performance Monitoring & Analytics',
      'Backup-System & Wartungsplan'
    ],
    details: {
      technologies: 'Next.js 14+, CMS, TypeScript',
      features: 'ISR/SSG, Image Optimization',
      deliveryTime: '4-6 Wochen',
      training: '2h CMS-Schulung inklusive'
    }
  },
  {
    title: 'Web Application',
    subtitle: 'Dashboard / SaaS Platform',
    price: '12.000 – 25.000 €',
    icon: Zap,
    gradient: 'from-cyan-600 to-blue-700',
    features: [
      'User Authentication & Authorization (OAuth, JWT)',
      'Rollen & Permissions System',
      'Interaktive Dashboards & Data Visualization',
      'REST API / GraphQL Backend',
      'PostgreSQL / MongoDB Datenbank',
      'Real-time Updates (WebSockets)',
      'File Upload & Processing',
      'Export-Funktionen (PDF, Excel, CSV)',
      'Responsive Admin Panel',
      'E-Mail-Benachrichtigungen (Transactional)'
    ],
    details: {
      technologies: 'React, Node.js, PostgreSQL',
      features: 'API-First, Scalable Architecture',
      deliveryTime: '8-12 Wochen',
      testing: 'Unit & Integration Tests'
    }
  },
  {
    title: 'Enterprise Platform',
    subtitle: 'Komplexe Anwendung',
    price: '25.000 – 60.000 €+',
    icon: Code2,
    gradient: 'from-pink-600 to-purple-700',
    features: [
      'Multi-Tenant Architecture',
      'Advanced User Management (SSO, LDAP)',
      'Payment Integration (Stripe, PayPal)',
      'Subscription & Billing System',
      'Advanced Analytics & Reporting',
      'API Gateway & Microservices',
      'Workflow Automation Engine',
      'Third-Party Integrations (CRM, ERP)',
      'Advanced Security (2FA, Encryption)',
      'White-Label Capabilities',
      'Custom Admin Dashboard',
      'Comprehensive API Documentation'
    ],
    details: {
      technologies: 'Microservices, Kubernetes, Redis',
      features: 'High Availability, Auto-Scaling',
      deliveryTime: '16-24 Wochen',
      support: 'Dedicated Technical Account Manager'
    }
  }
];

export default function WebDevelopmentPage() {
  const isDark = true;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-4">
            <Code2 className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Web Development Services</span>
          </div>
          
          <h1 
            className="text-5xl font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Web Development
          </h1>
          
          <p className="text-xl text-slate-400">
            Von einfachen Landing Pages bis zu komplexen Enterprise-Plattformen - maßgeschneiderte Web-Lösungen für jeden Bedarf
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {webDevelopmentServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative"
                style={{
                  background: 'rgba(20, 20, 35, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '1px solid rgba(147, 51, 234, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.5)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(147, 51, 234, 0.3), 0 0 60px rgba(147, 51, 234, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top Border Gradient */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, #9333ea, #3b82f6, #ec4899)`,
                    boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)'
                  }}
                />

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient})`,
                    boxShadow: '0 8px 24px rgba(147, 51, 234, 0.3)'
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: '#9333ea',
                      textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 uppercase tracking-wide">
                    {service.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div 
                  className="text-4xl font-black mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899, #9333ea)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 30px rgba(236, 72, 153, 0.5)'
                  }}
                >
                  {service.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Details */}
                <div 
                  className="p-4 rounded-xl space-y-2"
                  style={{
                    background: 'rgba(15, 15, 25, 0.4)',
                    borderLeft: '3px solid #3b82f6'
                  }}
                >
                  {Object.entries(service.details).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-2 text-xs">
                      <span className="font-semibold text-cyan-400 min-w-fit">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      <span className="text-slate-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          className="relative text-center p-12 rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(20, 20, 35, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(147, 51, 234, 0.3)',
            boxShadow: '0 20px 60px rgba(147, 51, 234, 0.3)'
          }}
        >
          <div className="relative z-10">
            <h3 
              className="text-3xl font-bold mb-4"
              style={{
                color: '#ffffff',
                textShadow: '0 0 30px rgba(147, 51, 234, 0.8)'
              }}
            >
              Bereit für Ihr Projekt?
            </h3>
            <p className="text-lg text-slate-400 mb-8">
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full font-bold text-white transition-all"
              style={{
                background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                boxShadow: '0 5px 25px rgba(147, 51, 234, 0.4)',
                border: '2px solid rgba(147, 51, 234, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08) translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(147, 51, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 25px rgba(147, 51, 234, 0.4)';
              }}
            >
              Kostenloses Beratungsgespräch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
