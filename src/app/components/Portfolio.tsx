import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = ['All', 'E-Commerce', 'Corporate', 'Mobile', 'Dashboard'];

const projects = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    category: 'E-Commerce',
    description: 'Full-featured online store with payment integration and inventory management',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjM2Nzc3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Corporate Website Redesign',
    category: 'Corporate',
    description: 'Professional business website with CMS integration and lead generation',
    image: 'https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MzYxMTI4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Tailwind', 'Sanity'],
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Mobile',
    description: 'Progressive web app for financial transactions and account management',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNjk0ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['PWA', 'React', 'TypeScript'],
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    category: 'Dashboard',
    description: 'Real-time data visualization and reporting platform for business insights',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM2MzM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'D3.js', 'Node.js'],
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    category: 'E-Commerce',
    description: 'Online reservation platform with menu management and order tracking',
    image: 'https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM3MTQwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Firebase', 'Stripe'],
  },
  {
    id: 6,
    title: 'Creative Portfolio',
    category: 'Corporate',
    description: 'Stunning portfolio showcase with interactive animations and transitions',
    image: 'https://images.unsplash.com/photo-1721864428830-7417b93831b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYzNzM1NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Framer Motion', 'Three.js'],
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-slate-100">
            Our Portfolio
          </h2>
          <p className="text-lg text-slate-400">
            Explore our recent projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-cyan-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/10 border rounded-2xl overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <ExternalLink className="w-5 h-5 text-slate-900" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Github className="w-5 h-5 text-slate-900" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <div className="text-xs uppercase tracking-wider text-cyan-400">
                  {project.category}
                </div>
                
                <h3 className="text-slate-100">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-400 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}