import { Palette, Layers, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

const uiuxDesignServices = [
  {
    title: 'Custom UI/UX Design',
    subtitle: 'Maßgeschneidert',
    price: '3.000 – 12.000 €',
    icon: Palette,
    gradient: 'from-rose-600 to-pink-600',
    features: [
      'User Research & Persona Development',
      'Wireframing & Prototyping (Figma)',
      'High-Fidelity Mockups (20-50 Screens)',
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Design System Creation',
      'Component Library',
      'Interactive Prototypes',
      'Usability Testing',
      'Design Handoff (Developer Ready)',
      '3 Revision Rounds'
    ],
    details: {
      deliverables: 'Figma Files, Assets, Style Guide',
      timeline: '4-8 Wochen',
      bonus: 'Brand Color Psychology Analysis'
    }
  },
  {
    title: 'Branding & Identity',
    subtitle: 'Complete Package',
    price: '2.500 – 8.000 €',
    icon: Sparkles,
    gradient: 'from-purple-600 to-pink-600',
    features: [
      'Logo Design (3-5 Konzepte)',
      'Brand Strategy & Positioning',
      'Color Palette Development',
      'Typography System',
      'Brand Guidelines (30-50 Seiten)',
      'Business Card Design',
      'Letterhead & Email Signature',
      'Social Media Templates',
      'Presentation Templates',
      'Icon Set (20-30 Icons)'
    ],
    details: {
      formats: 'Vector (AI, SVG), PNG, PDF',
      usageRights: 'Full Commercial License',
      revisions: 'Unlimited in Concept Phase'
    }
  },
  {
    title: 'Mobile App Design',
    subtitle: 'iOS & Android',
    price: '4.000 – 15.000 €',
    icon: Smartphone,
    gradient: 'from-blue-600 to-cyan-600',
    features: [
      'Native Design Patterns (iOS & Android)',
      'User Flow Mapping',
      '30-60 Unique Screens',
      'Micro-interactions & Animations',
      'Icon Design (App Icon + In-App)',
      'Splash Screens & Onboarding',
      'Dark Mode Support',
      'Accessibility Compliance (WCAG)',
      'App Store Screenshots',
      'Marketing Assets'
    ],
    details: {
      tools: 'Figma, Principle, After Effects',
      specs: 'iOS HIG + Material Design',
      animation: 'Lottie Files inklusive'
    }
  },
  {
    title: 'Motion Design & Animation',
    subtitle: 'Engaging Experiences',
    price: '1.500 – 5.000 €',
    icon: Layers,
    gradient: 'from-orange-600 to-red-600',
    features: [
      'Loading Animations',
      'Micro-interactions',
      'Transition Effects',
      'Explainer Animations (30-60s)',
      'Logo Animation',
      'Lottie File Creation',
      'CSS/GSAP Animations',
      'Video Editing & Post-Production'
    ],
    details: {
      formats: 'Lottie, MP4, GIF, CSS',
      useCase: 'Web & Mobile',
      performance: 'Optimiert für 60fps'
    }
  }
];

export default function UIUXDesignPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 mb-4">
            <Palette className="w-5 h-5 text-pink-400" />
            <span className="text-sm font-semibold text-pink-300">UI/UX Design Services</span>
          </div>
          
          <h1 
            className="text-5xl font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #9333ea 50%, #fb923c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            UI/UX Design & Branding
          </h1>
          
          <p className="text-xl text-slate-400">
            Beeindruckende Designs, die Nutzer begeistern und Conversions steigern - von Branding bis zur fertigen UI
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {uiuxDesignServices.map((service, index) => {
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
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(236, 72, 153, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top Border Gradient */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, #ec4899, #9333ea, #fb923c)`,
                    boxShadow: '0 0 20px rgba(236, 72, 153, 0.8)'
                  }}
                />

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient})`,
                    boxShadow: '0 8px 24px rgba(236, 72, 153, 0.3)'
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: '#ec4899',
                      textShadow: '0 0 20px rgba(236, 72, 153, 0.5)'
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
                      <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Details */}
                <div 
                  className="p-4 rounded-xl space-y-2"
                  style={{
                    background: 'rgba(15, 15, 25, 0.4)',
                    borderLeft: '3px solid #ec4899'
                  }}
                >
                  {Object.entries(service.details).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-2 text-xs">
                      <span className="font-semibold text-pink-400 min-w-fit">
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

        {/* Design Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Unser Design-Prozess</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Research', desc: 'User & Market Analysis' },
              { step: '02', title: 'Ideation', desc: 'Wireframes & Concepts' },
              { step: '03', title: 'Design', desc: 'High-Fidelity Mockups' },
              { step: '04', title: 'Handoff', desc: 'Developer-Ready Files' }
            ].map((phase, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: 'rgba(236, 72, 153, 0.1)',
                  border: '1px solid rgba(236, 72, 153, 0.3)'
                }}
              >
                <div 
                  className="text-4xl font-black mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899, #9333ea)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {phase.step}
                </div>
                <h4 className="text-lg font-bold text-pink-400 mb-2">{phase.title}</h4>
                <p className="text-sm text-slate-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="relative text-center p-12 rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(20, 20, 35, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            boxShadow: '0 20px 60px rgba(236, 72, 153, 0.3)'
          }}
        >
          <div className="relative z-10">
            <h3 
              className="text-3xl font-bold mb-4"
              style={{
                color: '#ffffff',
                textShadow: '0 0 30px rgba(236, 72, 153, 0.8)'
              }}
            >
              Designen wir gemeinsam Ihr Projekt?
            </h3>
            <p className="text-lg text-slate-400 mb-8">
              Vereinbaren Sie eine kostenlose Design-Beratung
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full font-bold text-white transition-all"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #9333ea)',
                boxShadow: '0 5px 25px rgba(236, 72, 153, 0.4)',
                border: '2px solid rgba(236, 72, 153, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08) translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(236, 72, 153, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 25px rgba(236, 72, 153, 0.4)';
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
