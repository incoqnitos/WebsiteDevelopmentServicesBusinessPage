import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mitaiLaptop1 from 'figma:asset/b54f1d685246a862c2e0ceb7429361c5e247e70b.png';
import mitaiLaptop2 from 'figma:asset/10db3509cfaac70a1359296b3d5b8ea1c632b952.png';

// Real AI Computer & Robotics Design Projects
const realProjects = [
  {
    id: 1,
    title: 'MITAI Laptop - World\'s First Local AI Computer',
    category: 'AI Computer Design',
    description: 'Revolutionary fully AI-powered laptop with local processing, advanced thermal design, and glowing MITAI branding',
    image: mitaiLaptop1,
    images: [
      mitaiLaptop1,
      mitaiLaptop2,
      'https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbXB1dGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjgwMDAzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    specs: ['Local AI Processing', 'Neural Engine', 'Advanced Cooling System', 'RGB Lighting']
  },
  {
    id: 2,
    title: 'MITAI Mobile Intellect Laptop',
    category: 'Premium AI Hardware',
    description: 'Sleek design with RGB edge lighting, human-robot interaction display, and cutting-edge AI capabilities',
    image: mitaiLaptop2,
    images: [
      mitaiLaptop2,
      mitaiLaptop1,
      'https://images.unsplash.com/photo-1751170958511-e9df5cdf9a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzY4MDAwMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    specs: ['Premium RGB Lighting', 'AI Touchpad', 'Ultra-Slim Design', 'Mobile Intellect®']
  },
  {
    id: 3,
    title: 'Humanoid Robot Design',
    category: 'Robotics Engineering',
    description: 'Advanced humanoid robot with precision engineering and lifelike interaction capabilities',
    image: 'https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90fGVufDF8fHx8MTc2ODAwMDM0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90fGVufDF8fHx8MTc2ODAwMDM0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767716134818-25a2a91a5289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGRlc2lnbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzY4MDAwMzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc2Nzk0Mzg3OXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    specs: ['AI-Powered Movement', '360° Sensors', 'Natural Language', 'Autonomous Navigation']
  },
  {
    id: 4,
    title: 'AI Robot Companion',
    category: 'Consumer Robotics',
    description: 'Next-generation robot assistant with advanced AI and intuitive human interaction',
    image: 'https://images.unsplash.com/photo-1767716134818-25a2a91a5289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGRlc2lnbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzY4MDAwMzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1767716134818-25a2a91a5289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGRlc2lnbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzY4MDAwMzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90fGVufDF8fHx8MTc2ODAwMDM0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      mitaiLaptop2
    ],
    specs: ['Voice Recognition', 'Emotion Detection', 'Learning AI', 'Smart Home Integration']
  },
  {
    id: 5,
    title: 'Industrial Robot Engineering',
    category: 'Industrial Design',
    description: 'Precision industrial robotics with advanced manufacturing capabilities',
    image: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc2Nzk0Mzg3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc2Nzk0Mzg3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767716134818-25a2a91a5289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGRlc2lnbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzY4MDAwMzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1751170958511-e9df5cdf9a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzY4MDAwMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    specs: ['Precision Arms', 'AI Vision System', 'Safety Sensors', 'Programmable Tasks']
  },
  {
    id: 6,
    title: 'AI Hardware Innovation',
    category: 'Technology Design',
    description: 'Cutting-edge AI processing hardware with neural network acceleration',
    image: 'https://images.unsplash.com/photo-1751170958511-e9df5cdf9a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzY4MDAwMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1751170958511-e9df5cdf9a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwaGFyZHdhcmV8ZW58MXx8fHwxNzY4MDAwMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbXB1dGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjgwMDAzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      mitaiLaptop1
    ],
    specs: ['Neural Processors', 'Machine Learning', 'Edge Computing', 'Quantum Ready']
  }
];

export default function DesignAdvertising() {
  const [selectedProject, setSelectedProject] = useState(realProjects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section - Interactive Showcase */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-cyan-400 font-semibold mb-6"
            >
              World's First Local AI Computer Design
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              AI Computer & Robot Design
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Pioneering the future of AI-powered computing and intelligent robotics
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              From revolutionary local AI laptops to advanced humanoid robots - designing the next generation of intelligent machines
            </p>
          </motion.div>

          {/* Interactive Premium Showcase - Main Project Display */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main large image display */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden mb-8 group">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
              </motion.div>

              {/* Glowing effect overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-cyan-600/30"></div>
              </div>

              {/* Project info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-sm rounded-full text-sm text-white mb-4 shadow-lg shadow-blue-500/50">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{selectedProject.title}</h2>
                  <p className="text-xl text-slate-300 mb-6 max-w-3xl drop-shadow-lg">{selectedProject.description}</p>
                  
                  {/* Specs */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {selectedProject.specs.map((spec, idx) => (
                      <div 
                        key={idx}
                        className="px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/50 rounded-lg text-sm text-cyan-300 shadow-lg shadow-cyan-500/20"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Image navigation dots */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                {selectedProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`transition-all ${
                      idx === currentImageIndex 
                        ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50' 
                        : 'w-3 h-3 bg-slate-600 rounded-full hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project thumbnails - Interactive selection */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {realProjects.map((project, idx) => (
                <motion.button
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`relative h-40 rounded-xl overflow-hidden group transition-all ${
                    selectedProject.id === project.id 
                      ? 'ring-4 ring-cyan-500 shadow-xl shadow-cyan-500/50' 
                      : 'ring-2 ring-slate-800 hover:ring-cyan-500/50'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="text-xs text-cyan-400 mb-1">{project.category}</div>
                    <div className="text-sm font-semibold text-white line-clamp-2">{project.title}</div>
                  </div>
                  
                  {/* Active indicator */}
                  {selectedProject.id === project.id && (
                    <motion.div
                      layoutId="activeProject"
                      className="absolute top-2 right-2 w-3 h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/80"
                    >
                      <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping"></div>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MITAI AI Computer Design - Featured Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              MITAI - World's First Local AI Computer
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Revolutionary laptop design with built-in AI processing, advanced thermal management, and stunning aesthetics
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-[500px] rounded-3xl overflow-hidden group"
            >
              <img
                src={mitaiLaptop1}
                alt="MITAI Laptop - Mobile Intellect"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 font-semibold mb-6">
                Premium AI Hardware
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Mobile Intellect® Technology</h3>
              <p className="text-xl text-slate-400 mb-8">
                The MITAI laptop features a revolutionary glowing logo design, premium build quality, 
                and the world's first fully local AI processing system. No cloud required - all AI runs on device.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shadow-lg shadow-cyan-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Local AI Neural Engine</h4>
                    <p className="text-slate-400">Process AI workloads without internet connectivity</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shadow-lg shadow-cyan-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Glowing Brand Identity</h4>
                    <p className="text-slate-400">Signature MITAI logo with ambient backlighting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shadow-lg shadow-cyan-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Advanced Thermal Design</h4>
                    <p className="text-slate-400">Precision-engineered cooling for sustained performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shadow-lg shadow-cyan-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Premium Materials</h4>
                    <p className="text-slate-400">Aerospace-grade aluminum with precision CNC machining</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second MITAI Laptop variant */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 font-semibold mb-6">
                AI Interaction Design
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Human-AI Touch Interface</h3>
              <p className="text-xl text-slate-400 mb-8">
                Featuring RGB edge lighting and revolutionary human-robot interaction visualization. 
                The display shows the connection between human intelligence and artificial intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shadow-lg shadow-purple-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">RGB Ambient Lighting</h4>
                    <p className="text-slate-400">Customizable edge lighting for immersive experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shadow-lg shadow-purple-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">AI Touchpad Integration</h4>
                    <p className="text-slate-400">Intelligent touchpad with MITAI branding</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shadow-lg shadow-purple-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Ultra-Slim Profile</h4>
                    <p className="text-slate-400">Premium thin design without compromising performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shadow-lg shadow-purple-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Gesture Control Ready</h4>
                    <p className="text-slate-400">Compatible with hand control systems</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-[500px] rounded-3xl overflow-hidden group order-1 lg:order-2"
            >
              <img
                src={mitaiLaptop2}
                alt="MITAI Laptop with RGB Lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/20 via-transparent to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Robotics Design Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced Robotics Engineering
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Designing the next generation of intelligent robots with human-like interaction and autonomous capabilities
            </p>
          </motion.div>

          {/* Robot Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/30">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/h_5z8Lp15nI"
                  title="MITAI Robot Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-8"
            >
              <div className="inline-block px-6 py-3 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-400 font-semibold mb-4">
                Live Robot Demonstration
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">MITAI Robot in Action</h3>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Watch our advanced robotics technology demonstrate autonomous movement, AI decision-making, and human interaction
              </p>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-[500px] rounded-3xl overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737644467636-6b0053476bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90fGVufDF8fHx8MTc2ODAwMDM0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Humanoid Robot Design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-400 font-semibold mb-6">
                Humanoid Robotics
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Human-Like Intelligence</h3>
              <p className="text-xl text-slate-400 mb-8">
                Our humanoid robots combine advanced AI with precision mechanical engineering. 
                Natural language processing, emotion detection, and autonomous decision-making in a human-like form.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shadow-lg shadow-cyan-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">AI-Powered Movement</h4>
                    <p className="text-slate-400">Natural motion with real-time path planning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shadow-lg shadow-cyan-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">360° Sensor Array</h4>
                    <p className="text-slate-400">Complete environmental awareness and obstacle avoidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shadow-lg shadow-cyan-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Natural Language Interface</h4>
                    <p className="text-slate-400">Conversational AI with context understanding</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shadow-lg shadow-cyan-500/50"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Autonomous Navigation</h4>
                    <p className="text-slate-400">Self-guided movement in complex environments</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Design the Future with MITAI
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Join us in pioneering the next generation of AI computers and intelligent robotics. 
              World-class design meets cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-xl text-white font-semibold text-lg hover:from-blue-700 hover:via-cyan-700 hover:to-purple-700 transition-all shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105">
                Explore MITAI Products
              </button>
              <button className="px-10 py-4 border-2 border-cyan-700 rounded-xl text-white font-semibold text-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
                Contact Design Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}