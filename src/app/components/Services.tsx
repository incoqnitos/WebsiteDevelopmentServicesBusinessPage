import { Code2, Palette, Smartphone, Zap, Search, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    description: 'Tailored web solutions built with modern technologies like React, Next.js, and Node.js for optimal performance and scalability.',
    features: ['Responsive Design', 'Modern Frameworks', 'Clean Code'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that engage users and drive conversions. We focus on creating memorable digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Development',
    description: 'Progressive web apps and mobile-optimized websites that deliver seamless experiences across all devices and screen sizes.',
    features: ['PWA Development', 'Cross-Platform', 'Touch-Optimized'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online store development with payment integration, inventory management, and conversion optimization.',
    features: ['Payment Gateway', 'Product Management', 'Analytics'],
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

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-slate-100">
            Our Services
          </h2>
          <p className="text-lg text-slate-400">
            Comprehensive web development solutions to help your business thrive in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/10 border rounded-2xl transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="mb-3 text-slate-100">
                  {service.title}
                </h3>
                
                <p className="mb-4 text-slate-400">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}