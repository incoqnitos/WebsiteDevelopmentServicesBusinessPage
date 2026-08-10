import { motion } from 'motion/react';
import { Bot, Cpu, Eye, Zap, Shield, Network, Brain, Sparkles } from 'lucide-react';

const roboticsProducts = [
  {
    id: 1,
    title: 'MITAI Humanoid Automation',
    category: 'Advanced Automation',
    description: 'Next-generation automation system with advanced AI capabilities, natural movement control, and human-like interaction. Built for industrial automation and human assistance.',
    icon: Bot,
    features: ['Natural Movement', 'AI Vision System', 'Voice Interaction', 'Autonomous Navigation'],
    price: 'From $125,000',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1768400730875-d55297e10f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90JTIwYWl8ZW58MXx8fHwxNzY5MDMxMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    title: 'MITAI Industrial Arm Control',
    category: 'Industrial Automation',
    description: 'Precision automation control with AI-powered object recognition and adaptive gripping. Perfect for manufacturing and assembly lines.',
    icon: Cpu,
    features: ['6-Axis Movement', 'AI Object Detection', 'Precision Gripping', 'Safety Sensors'],
    price: 'From $45,000',
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1641311281574-98b9e7a76479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpYyUyMGFybXxlbnwxfHx8fDE3NjkwMDEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    title: 'MITAI Vision System',
    category: 'Computer Vision',
    description: 'Advanced AI vision system for quality control, defect detection, and real-time monitoring in production environments.',
    icon: Eye,
    features: ['Real-time Analysis', 'Defect Detection', 'Multi-Camera Support', 'Cloud Integration'],
    price: 'From $15,000',
    color: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1654572832144-ce085b87620b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHZpc2lvbiUyMGNhbWVyYXxlbnwxfHx8fDE3NjkwMzEzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    title: 'MITAI Autonomous Vehicle Control',
    category: 'Autonomous Systems',
    description: 'Self-driving automation platform for logistics and transportation. Features advanced sensors and AI decision-making for safe autonomous operation.',
    icon: Zap,
    features: ['360° Sensors', 'AI Navigation', 'Obstacle Avoidance', 'Fleet Management'],
    price: 'From $89,000',
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1650699060603-5636741760d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MDMxMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    title: 'MITAI Drone Control System',
    category: 'Aerial Automation',
    description: 'Intelligent drone automation for surveillance, inspection, and delivery. Equipped with AI-powered flight control and object tracking.',
    icon: Sparkles,
    features: ['AI Flight Control', 'Object Tracking', 'Long Battery Life', 'Weather Resistant'],
    price: 'From $8,500',
    color: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1762478237936-187fa02b9c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBhZXJpYWx8ZW58MXx8fHwxNzY4OTI4Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    title: 'MITAI Security Robot',
    category: 'Security & Surveillance',
    description: 'Autonomous security robot with AI-powered threat detection, facial recognition, and 24/7 patrol capabilities.',
    icon: Shield,
    features: ['Facial Recognition', 'Threat Detection', 'Night Vision', 'Alert System'],
    price: 'From $55,000',
    color: 'from-red-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1655720033654-a4239dd42d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHJvYm90fGVufDF8fHx8MTc2OTAzMTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 7,
    title: 'MITAI Collaborative Automation',
    category: 'Human-Machine Collaboration',
    description: 'Safe collaborative automation designed to work alongside humans. Features advanced safety sensors and intuitive programming.',
    icon: Network,
    features: ['Safe Collaboration', 'Easy Programming', 'Force Sensing', 'Compact Design'],
    price: 'From $32,000',
    color: 'from-indigo-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwcm9ib3QlMjBjb2JvdHxlbnwxfHx8fDE3Njg5ODE1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 8,
    title: 'MITAI Research Platform',
    category: 'Research & Development',
    description: 'Open automation platform for research and AI development. Fully customizable with SDK and development tools.',
    icon: Brain,
    features: ['Open Platform', 'SDK Included', 'Modular Design', 'Research Support'],
    price: 'From $25,000',
    color: 'from-yellow-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHJlc2VhcmNoJTIwbGFifGVufDF8fHx8MTc2OTAzMTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export default function Robotics() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 font-semibold mb-8">
              MITAI Robotics Division
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Advanced Robotics
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              Intelligent machines powered by AI for the future of automation
            </p>
            
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              From humanoid robots to autonomous systems, our robotics solutions combine cutting-edge AI with precision engineering to revolutionize industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Robotics Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roboticsProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl transition-all h-full flex flex-col overflow-hidden" style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  backdropFilter: 'blur(10px)'
                }}>
                  {/* Winnex Background Image - More visible for WINNEX product */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: product.id === 6 ? 0.6 : 0.3,
                      zIndex: 0
                    }}
                  />
                  
                  {/* Content with higher z-index */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Category */}
                    <div className="text-sm font-semibold mb-3" style={{
                      color: 'var(--brand-2)'
                    }}>
                      {product.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4" style={{
                      color: 'var(--brand-2)'
                    }}>
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 flex-grow" style={{
                      color: 'rgb(148, 163, 184)'
                    }}>
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}></div>
                          <span className="text-sm" style={{
                            color: 'rgb(148, 163, 184)'
                          }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="text-xl font-bold mb-4" style={{
                      color: 'var(--brand-2)'
                    }}>
                      {product.price}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full px-6 py-3 bg-gradient-to-r ${product.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}>
                      Request Quote
                    </button>
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/20 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why MITAI Robotics?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leading the future of intelligent automation with AI-first robotics
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/30">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
              <p className="text-slate-400">
                Every robot is equipped with advanced AI for autonomous decision-making, learning, and adaptation to complex environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl shadow-purple-500/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safety First Design</h3>
              <p className="text-slate-400">
                Advanced safety systems with real-time monitoring, collision avoidance, and emergency stop capabilities ensure safe operation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-xl shadow-orange-500/30">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-slate-400">
                Built with precision engineering and cutting-edge components for reliable, efficient, and powerful performance in any environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Ready to Automate Your Future?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Contact our robotics specialists to find the perfect solution for your needs.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-xl text-white font-semibold text-lg hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 transition-all shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105">
                Request Demo
              </button>
              <button className="px-10 py-4 border-2 border-cyan-700 rounded-xl text-white font-semibold text-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
                View Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
