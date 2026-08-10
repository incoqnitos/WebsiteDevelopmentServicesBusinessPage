import { ShoppingCart, Store, TrendingUp, Zap, CheckCircle2, CreditCard, Package, Users } from 'lucide-react';

const ecommerceServices = [
  {
    title: 'E-Commerce Starter',
    subtitle: 'Online Store Setup',
    price: '5.000 – 12.000 €',
    icon: Store,
    gradient: 'from-emerald-600 to-teal-600',
    features: [
      'Produktkatalog (bis 100 Produkte)',
      'Warenkorb & Checkout',
      'Stripe / PayPal Integration',
      'Bestellverwaltung',
      'Kundenkonto System',
      'E-Mail Benachrichtigungen',
      'Grundlegende SEO',
      'Mobile-Optimiert',
      'SSL & Security',
      'DSGVO-Konform'
    ],
    details: {
      platform: 'Custom Next.js oder Shopify',
      deliveryTime: '4-6 Wochen',
      training: '2h Admin-Schulung',
      support: '30 Tage Post-Launch'
    }
  },
  {
    title: 'E-Commerce Pro',
    subtitle: 'Advanced Online Store',
    price: '12.000 – 25.000 €',
    icon: ShoppingCart,
    gradient: 'from-blue-600 to-indigo-600',
    features: [
      'Unbegrenzte Produkte & Kategorien',
      'Multi-Currency Support',
      'Mehrsprachigkeit',
      'Erweiterte Produktfilter',
      'Wishlist & Produktvergleich',
      'Rabatt-Codes & Gutscheine',
      'Versandkostenberechnung',
      'Lagerverwaltung',
      'Kunden-Reviews & Bewertungen',
      'Newsletter-Integration',
      'Analytics Dashboard',
      'Automatisierte E-Mails'
    ],
    details: {
      platform: 'Headless Commerce (Shopify Plus, Medusa)',
      deliveryTime: '8-12 Wochen',
      features: 'API-First, Scalable',
      support: '3 Monate Support'
    }
  },
  {
    title: 'E-Commerce Enterprise',
    subtitle: 'High-Volume Platform',
    price: '25.000 – 60.000 €+',
    icon: TrendingUp,
    gradient: 'from-purple-600 to-pink-600',
    features: [
      'Multi-Vendor Marketplace',
      'B2B & B2C Support',
      'Advanced Inventory Management',
      'Warehouse Integration',
      'Multi-Store Management',
      'Custom Pricing Rules',
      'Subscription & Recurring Billing',
      'Advanced Analytics & Reporting',
      'ERP/CRM Integration',
      'Custom Shipping Logic',
      'Payment Gateway Flexibility',
      'Admin Dashboard',
      'API for Third-Party Integration',
      'White-Label Capabilities'
    ],
    details: {
      platform: 'Custom Microservices Architecture',
      deliveryTime: '16-24 Wochen',
      features: 'Auto-Scaling, High Availability',
      support: 'Dedicated Account Manager'
    }
  },
  {
    title: 'E-Commerce Optimization',
    subtitle: 'Conversion & Performance',
    price: '3.000 – 10.000 €',
    icon: Zap,
    gradient: 'from-orange-600 to-red-600',
    features: [
      'Conversion Rate Optimization',
      'Performance Optimization',
      'A/B Testing Setup',
      'UX Audit & Improvements',
      'Checkout Optimization',
      'Mobile Experience Enhancement',
      'SEO Optimization',
      'Page Speed Improvements',
      'Analytics Implementation',
      'Heatmaps & User Recordings'
    ],
    details: {
      scope: 'Für bestehende Shops',
      deliveryTime: '4-8 Wochen',
      roi: 'Messbare Verbesserungen',
      support: '2 Monate Monitoring'
    }
  }
];

const additionalFeatures = [
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Stripe, PayPal, Klarna, Apple Pay',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Package,
    title: 'Fulfillment',
    description: 'Shipping, Tracking, Returns',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Marketing Tools',
    description: 'SEO, Email, Retargeting',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function ECommercePage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-4">
            <ShoppingCart className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300">E-Commerce Solutions</span>
          </div>
          
          <h1 
            className="text-5xl font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            E-Commerce Development
          </h1>
          
          <p className="text-xl text-slate-400">
            Leistungsstarke Online-Shops mit nahtloser Payment-Integration, Lagerverwaltung und Conversion-Optimierung
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {ecommerceServices.map((service, index) => {
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
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top Border Gradient */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6)`,
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.8)'
                  }}
                />

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient})`,
                    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: '#10b981',
                      textShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
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
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
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
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Details */}
                <div 
                  className="p-4 rounded-xl space-y-2"
                  style={{
                    background: 'rgba(15, 15, 25, 0.4)',
                    borderLeft: '3px solid #10b981'
                  }}
                >
                  {Object.entries(service.details).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-2 text-xs">
                      <span className="font-semibold text-emerald-400 min-w-fit">
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

        {/* Additional Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Zusätzliche Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl text-center group"
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color})`
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-400 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div 
            className="p-8 rounded-2xl text-center"
            style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}
          >
            <div 
              className="text-5xl font-black mb-2"
              style={{
                background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              99.9%
            </div>
            <p className="text-slate-400">Uptime Guarantee</p>
          </div>
          
          <div 
            className="p-8 rounded-2xl text-center"
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          >
            <div 
              className="text-5xl font-black mb-2"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              &lt;2s
            </div>
            <p className="text-slate-400">Page Load Time</p>
          </div>
          
          <div 
            className="p-8 rounded-2xl text-center"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}
          >
            <div 
              className="text-5xl font-black mb-2"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              24/7
            </div>
            <p className="text-slate-400">Support Available</p>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="relative text-center p-12 rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(20, 20, 35, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)'
          }}
        >
          <div className="relative z-10">
            <h3 
              className="text-3xl font-bold mb-4"
              style={{
                color: '#ffffff',
                textShadow: '0 0 30px rgba(16, 185, 129, 0.8)'
              }}
            >
              Starten Sie Ihren Online-Shop
            </h3>
            <p className="text-lg text-slate-400 mb-8">
              Vereinbaren Sie eine kostenlose E-Commerce Beratung
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full font-bold text-white transition-all"
              style={{
                background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                boxShadow: '0 5px 25px rgba(16, 185, 129, 0.4)',
                border: '2px solid rgba(16, 185, 129, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08) translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 25px rgba(16, 185, 129, 0.4)';
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
