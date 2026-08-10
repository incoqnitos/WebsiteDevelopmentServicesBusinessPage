import { Smartphone, Rocket, Building2, Star, Layers, CheckCircle2 } from 'lucide-react';

const mobileDevelopmentServices = [
  {
    title: 'MVP App',
    subtitle: 'Schneller Start',
    price: '8.000 – 15.000 €',
    icon: Rocket,
    gradient: 'from-green-600 to-teal-600',
    features: [
      '1 Plattform (iOS oder Android)',
      '5-10 Hauptscreens',
      'Basic User Authentication',
      'REST API Integration',
      'Local Data Storage',
      'Basic Push Notifications',
      'App Store Submission',
      'Privacy Policy & Terms'
    ],
    details: {
      technology: 'Swift (iOS) oder Kotlin (Android)',
      backend: 'Firebase / Supabase',
      deliveryTime: '4-6 Wochen',
      testing: 'Device Testing (3+ Geräte)'
    }
  },
  {
    title: 'Business App',
    subtitle: 'Professionelle Lösung',
    price: '15.000 – 30.000 €',
    icon: Building2,
    gradient: 'from-blue-600 to-indigo-600',
    features: [
      '1 Plattform (Native Development)',
      '15-25 Screens mit komplexer Navigation',
      'Advanced Authentication (Biometric, 2FA)',
      'Backend API Development',
      'Cloud Database Integration',
      'Rich Push Notifications',
      'In-App Messaging',
      'Offline-First Architecture',
      'Analytics Integration (Firebase, Mixpanel)',
      'Crash Reporting & Monitoring',
      'App Store Optimization (ASO)'
    ],
    details: {
      design: 'Custom UI/UX Design inklusive',
      testing: 'Automated Testing Setup',
      deliveryTime: '8-12 Wochen',
      support: '3 Monate Post-Launch Support'
    }
  },
  {
    title: 'Premium App',
    subtitle: 'iOS + Android',
    price: '30.000 – 60.000 €',
    icon: Star,
    gradient: 'from-pink-600 to-rose-600',
    features: [
      'Native Apps für iOS & Android',
      'Shared Backend Infrastructure',
      '25-40 Screens pro Plattform',
      'Real-time Features (Chat, Live Updates)',
      'Payment Integration (In-App, Subscriptions)',
      'Advanced Media Handling (Photo, Video)',
      'Location Services & Maps',
      'Social Media Integration',
      'Multi-language Support',
      'Push Campaign Management',
      'A/B Testing Integration',
      'Admin Dashboard (Web)',
      'Complete App Store Launch Support'
    ],
    details: {
      platforms: 'SwiftUI (iOS) + Jetpack Compose (Android)',
      backend: 'Custom Node.js API + PostgreSQL',
      deliveryTime: '14-20 Wochen',
      warranty: '6 Monate Bug-Fix Garantie'
    }
  },
  {
    title: 'Cross-Platform',
    subtitle: 'Flutter / React Native',
    price: '20.000 – 45.000 €',
    icon: Layers,
    gradient: 'from-purple-600 to-blue-600',
    features: [
      'Single Codebase für iOS & Android',
      'Native Performance',
      '20-35 Screens',
      'Platform-Specific Optimizations',
      'Native Modules Integration',
      'Advanced State Management',
      'Offline Synchronization',
      'Complete Backend Solution',
      'CI/CD Pipeline Setup',
      'Automated Testing (Unit, Widget, E2E)'
    ],
    details: {
      framework: 'Flutter 3+ oder React Native',
      advantage: '30-40% Kostenersparnis vs. Native',
      deliveryTime: '10-16 Wochen',
      updates: 'Synchronized Releases'
    }
  }
];

export default function MobileDevelopmentPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-4">
            <Smartphone className="w-5 h-5 text-green-400" />
            <span className="text-sm font-semibold text-green-300">Mobile Development Services</span>
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
            Mobile App Development
          </h1>
          
          <p className="text-xl text-slate-400">
            Native iOS & Android Apps sowie Cross-Platform Lösungen - von MVP bis zur Enterprise-Anwendung
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mobileDevelopmentServices.map((service, index) => {
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
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
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
                      <span className="font-semibold text-green-400 min-w-fit">
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

        {/* Platform Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div 
            className="p-6 rounded-2xl text-center"
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          >
            <div className="text-3xl mb-2">🍎</div>
            <h4 className="text-lg font-bold text-blue-400 mb-2">iOS Development</h4>
            <p className="text-sm text-slate-400">Swift, SwiftUI, UIKit</p>
          </div>
          
          <div 
            className="p-6 rounded-2xl text-center"
            style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}
          >
            <div className="text-3xl mb-2">🤖</div>
            <h4 className="text-lg font-bold text-green-400 mb-2">Android Development</h4>
            <p className="text-sm text-slate-400">Kotlin, Jetpack Compose</p>
          </div>
          
          <div 
            className="p-6 rounded-2xl text-center"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}
          >
            <div className="text-3xl mb-2">🔄</div>
            <h4 className="text-lg font-bold text-purple-400 mb-2">Cross-Platform</h4>
            <p className="text-sm text-slate-400">Flutter, React Native</p>
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
              Ihre App-Idee verwirklichen?
            </h3>
            <p className="text-lg text-slate-400 mb-8">
              Kontaktieren Sie uns für eine kostenlose App-Beratung
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
