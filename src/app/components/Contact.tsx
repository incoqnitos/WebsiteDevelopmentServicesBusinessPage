import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const isDark = true; // Dark theme only
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'web-development',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'web-development',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@devcraftsolutions.com',
      href: 'mailto:hello@devcraftsolutions.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className={`inline-block px-4 py-2 ${
            isDark 
              ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
              : 'bg-blue-500/10 border-blue-500/30 text-blue-600'
          } border rounded-full text-sm`}>
            Contact Us
          </div>
          
          <h2 className={isDark ? 'text-slate-100' : 'text-gray-900'}>
            Let's Build Something Amazing
          </h2>
          
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            Ready to start your project? Get in touch and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className={`block p-6 ${
                    isDark 
                      ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/30' 
                      : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-400 hover:shadow-lg'
                  } border rounded-xl transition-all group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${
                      isDark 
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20' 
                        : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
                    } rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-blue-600'} mb-1`}>
                        {info.label}
                      </div>
                      <div className={`font-medium ${isDark ? 'text-slate-300' : 'text-blue-900'} group-hover:${isDark ? 'text-cyan-400' : 'text-blue-600'} transition-colors`}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className={`p-8 ${
              isDark 
                ? 'bg-slate-900/50 border-slate-800' 
                : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
            } border rounded-2xl space-y-6`}>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                  <h3 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                    Message Sent!
                  </h3>
                  <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                    Thank you for reaching out. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 ${
                          isDark 
                            ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                        } border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-20 ${
                          isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-500'
                        } transition-colors`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 ${
                          isDark 
                            ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                        } border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-20 ${
                          isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-500'
                        } transition-colors`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 ${
                        isDark 
                          ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                      } border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-20 ${
                        isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-500'
                      } transition-colors`}
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 ${
                          isDark 
                            ? 'bg-slate-800/50 border-slate-700 text-slate-100 focus:border-cyan-500' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                        } border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-20 ${
                          isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-500'
                        } transition-colors`}
                      >
                        <option value="web-development">Web Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="mobile">Mobile Development</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="seo">SEO Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 ${
                          isDark 
                            ? 'bg-slate-800/50 border-slate-700 text-slate-100 focus:border-cyan-500' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                        } border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-20 ${
                          isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-500'
                        } transition-colors`}
                      >
                        <option value="">Select Budget</option>
                        <option value="<5k">&lt; $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value=">50k">&gt; $50,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 ${
                        isDark 
                          ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                      } border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-20 ${
                        isDark ? 'focus:ring-cyan-500' : 'focus:ring-blue-500'
                      } transition-colors resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full px-6 py-4 ${
                      isDark 
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500'
                    } text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group`}
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}