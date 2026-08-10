import { Button } from './ui/button';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-foreground max-w-4xl mx-auto">
            We Build
            <span className="text-primary block mt-2">Exceptional Websites</span>
            That Drive Results
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transform your business with custom web solutions that combine stunning design, 
            powerful functionality, and measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={scrollToContact} className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToServices}>
              View Our Services
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="mb-2">Custom Development</h3>
              <p className="text-muted-foreground text-center">
                Tailored solutions built from the ground up to meet your unique business needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-center">
                Optimized for speed and performance to keep your users engaged.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="mb-2">User-Centered</h3>
              <p className="text-muted-foreground text-center">
                Designed with your users in mind for maximum engagement and conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}