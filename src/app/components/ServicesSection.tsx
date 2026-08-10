import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Search, 
  Settings,
  Palette,
  Shield
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
      features: ['Native Performance', 'Cross-Platform', 'App Store Ready']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and customer analytics.',
      features: ['Payment Gateway', 'Inventory System', 'Analytics Dashboard']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server solutions, APIs, and database architecture to power your applications.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality for optimal user experience.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Technical SEO implementation to improve your search rankings and online visibility.',
      features: ['Technical SEO', 'Performance Optimization', 'Analytics Setup']
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your website secure and running smoothly.',
      features: ['Security Updates', 'Performance Monitoring', '24/7 Support']
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive security implementation to protect your website and user data.',
      features: ['SSL Certificates', 'Security Audits', 'Data Protection']
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive web development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}