import { Code2, Palette, Smartphone, Zap, Search, ShoppingCart, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Maßgeschneiderte Web-Lösungen von Landing Pages bis Enterprise-Plattformen. Moderne Frameworks, skalierbare Architekturen.',
    features: ['Next.js & React', 'Full-Stack Development', 'API Integration'],
    link: '#services/web-development',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beeindruckende Designs die begeistern. Von Branding über Wireframes bis zu High-Fidelity Mockups und Design Systems.',
    features: ['User Research', 'Wireframing & Prototyping', 'Design Systems'],
    link: '#services/uiux-design',
    gradient: 'from-pink-600 to-rose-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native iOS & Android Apps sowie Cross-Platform Lösungen. Von MVP bis zur Enterprise-Anwendung mit Backend-Integration.',
    features: ['Native iOS & Android', 'Cross-Platform', 'Backend Integration'],
    link: '#services/mobile-development',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Leistungsstarke Online-Shops mit Payment-Integration, Lagerverwaltung und Conversion-Optimierung für maximalen Erfolg.',
    features: ['Payment Integration', 'Inventory Management', 'Analytics'],
    link: '#services/ecommerce',
    gradient: 'from-emerald-600 to-blue-600'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search rankings with technical SEO, content optimization, and performance enhancements.',
    features: ['On-Page SEO', 'Technical Audit', 'Performance'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and smooth interactions through code optimization, caching strategies, and CDN integration.',
    features: ['Speed Optimization', 'Code Splitting', 'Lazy Loading'],
  },
];

export default function ServicesPage() {
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
          <h1 
            className="text-5xl font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Services
          </h1>
          <p className="text-xl text-slate-400">
            Comprehensive development solutions from web to mobile - tailored for your success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const hasLink = service.link;
            
            return (
              <div
                key={service.title}
                className="group relative"
                style={{
                  background: 'rgba(20, 20, 35, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '32px',
                  border: hasLink ? '1px solid rgba(147, 51, 234, 0.2)' : '1px solid rgba(100, 116, 139, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (hasLink) {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.5)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(147, 51, 234, 0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = hasLink ? 'rgba(147, 51, 234, 0.2)' : 'rgba(100, 116, 139, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {hasLink && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(90deg, ${service.gradient})`,
                      boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)'
                    }}
                  />
                )}

                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{
                    background: hasLink ? `linear-gradient(135deg, ${service.gradient})` : 'linear-gradient(135deg, rgba(100, 116, 139, 0.3), rgba(71, 85, 105, 0.3))',
                    boxShadow: hasLink ? '0 8px 24px rgba(147, 51, 234, 0.3)' : 'none'
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{
                    color: hasLink ? '#9333ea' : '#94a3b8'
                  }}
                >
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="mb-5 text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                      <div 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ 
                          background: hasLink ? '#06b6d4' : '#64748b'
                        }} 
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link Button */}
                {hasLink && (
                  <a 
                    href={service.link} 
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.15))',
                      color: '#06b6d4',
                      border: '1px solid rgba(6, 182, 212, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.25), rgba(59, 130, 246, 0.25))';
                      e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.15))';
                      e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    View Pricing & Details
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                
                {!hasLink && (
                  <div className="text-xs text-slate-600 italic">Coming soon</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}