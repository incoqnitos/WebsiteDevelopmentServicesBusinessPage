import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-slate-950 to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-full text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Expert Web Development Services</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-slate-100 leading-tight">
            Transform Your Vision Into
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Stunning Web Experiences
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We craft custom websites and web applications that drive results. From concept to launch, 
            we deliver exceptional digital solutions tailored to your business needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full inline-flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-slate-900/50 text-slate-200 border border-slate-700 rounded-full hover:border-cyan-500/50 transition-all"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
