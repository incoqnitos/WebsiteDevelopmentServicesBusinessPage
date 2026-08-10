import { Card, CardContent } from './ui/card';
import { Award, Clock, Users, Lightbulb } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '150+' },
    { icon: Award, label: 'Projects Completed', value: '300+' },
    { icon: Clock, label: 'Years Experience', value: '8+' },
    { icon: Lightbulb, label: 'Technologies Mastered', value: '25+' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              About DevCraft Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a team of passionate web developers and designers dedicated to creating 
              exceptional digital experiences. With years of experience in the industry, 
              we've helped businesses of all sizes establish their online presence and 
              achieve their digital goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our approach combines technical expertise with creative design thinking to 
              deliver solutions that not only look great but also drive real business results. 
              We stay up-to-date with the latest technologies and best practices to ensure 
              your project is built for the future.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with cutting-edge web solutions that drive growth, 
                  enhance user experience, and deliver measurable results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Our Approach</h3>
                <p className="text-muted-foreground">
                  We believe in collaborative partnerships, transparent communication, 
                  and delivering solutions that exceed expectations while staying within 
                  budget and timeline.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Why Choose Us</h3>
                <p className="text-muted-foreground">
                  Our team combines technical expertise with business acumen to create 
                  solutions that are not just beautiful, but strategically designed 
                  to achieve your business objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}