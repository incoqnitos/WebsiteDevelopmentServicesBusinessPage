import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjM2Mzk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'DevCraft Solutions transformed our vision into reality. Their expertise in modern web technologies and attention to detail resulted in a website that exceeded our expectations. Our conversion rates have increased by 150% since launch!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, E-Shop Plus',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Working with DevCraft was a game-changer for our business. They built us a robust e-commerce platform that handles thousands of transactions daily. The team was professional, responsive, and delivered on time.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Growth Co',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2OTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'The team at DevCraft Solutions not only built us a beautiful website but also provided valuable insights on SEO and user experience. Their comprehensive approach to web development sets them apart from other agencies.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Operations Manager, LogiTech',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Outstanding work! DevCraft created a custom dashboard that streamlined our operations significantly. Their technical expertise and problem-solving abilities are truly impressive.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Jennifer Park',
    role: 'Owner, Boutique Bistro',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjM2Mzk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'DevCraft built us an amazing website with online ordering capabilities. The design is gorgeous and our customers love how easy it is to use. Highly recommend their services!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Robert Williams',
    role: 'CTO, FinServe Solutions',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY2NzA0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'As a technical person myself, I was impressed by DevCraft\'s code quality and architecture decisions. They built a scalable solution that has served us well as we\'ve grown.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-slate-100">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-400">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-cyan-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-slate-100">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Join our growing list of satisfied clients
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
