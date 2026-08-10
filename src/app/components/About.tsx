import { Target, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our developers, designers, and strategists bring years of experience and cutting-edge expertise to every project.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'We maintain the highest standards in code quality, design excellence, and project delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Driven',
    description: 'We build scalable solutions that grow with your business and adapt to changing market needs.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400 border rounded-full text-sm">
              About DevCraft Solutions
            </div>
            
            <h2 className="text-slate-100">
              Building Digital Excellence Since 2019
            </h2>
            
            <div className="space-y-4 text-slate-400">
              <p>
                DevCraft Solutions is a full-service web development agency dedicated to creating 
                exceptional digital experiences. We combine technical expertise with creative innovation 
                to deliver websites and applications that make an impact.
              </p>
              
              <p>
                Our team of passionate developers and designers works with businesses of all sizes, 
                from startups to established enterprises, helping them establish a powerful online presence 
                and achieve their digital goals.
              </p>
              
              <p>
                We believe in building long-term partnerships with our clients, providing ongoing support 
                and expertise to ensure your digital success continues long after launch.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-slate-200 border-slate-700 hover:border-cyan-500/50 border rounded-full transition-all"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 border rounded-2xl transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  
                  <h3 className="mb-2 text-slate-100">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}