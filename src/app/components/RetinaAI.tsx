import { motion } from 'motion/react';
import { Eye, Cpu, Sparkles, Brain, Network, Zap, Shield, Camera } from 'lucide-react';
import retinaImage from 'figma:asset/276c05e64a7189a2dee923916772b6fd55e913eb.png';

export default function RetinaAI() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-20">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-600/30 to-teal-600/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.25),transparent_50%)]"></div>
        </div>

        {/* Animated eye particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Eye className="w-6 h-6 text-cyan-400/30" />
            </motion.div>
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 font-semibold mb-8">
                Next-Gen Computer Vision
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 text-transparent bg-clip-text">
                  RETINA AI
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
                See the World Through AI Eyes
              </p>

              <p className="text-lg text-slate-400 mb-12 max-w-xl">
                Revolutionary computer vision system that doesn't just see—it understands, analyzes, and interprets the visual world with human-like perception and beyond.
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <button className="px-10 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105">
                  Try RETINA AI
                </button>
                <button className="px-10 py-4 border-2 border-cyan-500 rounded-xl text-white font-semibold text-lg hover:bg-cyan-500/10 transition-all">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">99.8%</div>
                  <div className="text-sm text-slate-400">Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">&lt;10ms</div>
                  <div className="text-sm text-slate-400">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400 mb-1">1000+</div>
                  <div className="text-sm text-slate-400">Objects</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Glowing effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl opacity-30"></div>
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  <img 
                    src={retinaImage} 
                    alt="RETINA AI Vision System" 
                    className="w-full h-auto"
                  />
                  
                  {/* Scanning overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                    animate={{
                      y: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
                </div>

                {/* Floating info cards */}
                <motion.div
                  className="absolute -left-6 top-1/4 p-4 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/50 rounded-lg shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-slate-400">Detection Active</div>
                      <div className="text-sm font-semibold text-white">Face Recognition</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-6 bottom-1/4 p-4 bg-slate-900/90 backdrop-blur-sm border border-blue-500/50 rounded-lg shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-xs text-slate-400">AI Analysis</div>
                      <div className="text-sm font-semibold text-white">Processing</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced Vision Capabilities
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              RETINA AI brings superhuman vision to your applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: 'Object Detection',
                description: 'Instantly identify and classify thousands of objects in real-time with 99.8% accuracy.',
                color: 'from-cyan-600 to-blue-600'
              },
              {
                icon: Camera,
                title: 'Face Recognition',
                description: 'Advanced facial analysis with emotion detection, age estimation, and identity verification.',
                color: 'from-blue-600 to-purple-600'
              },
              {
                icon: Brain,
                title: 'Scene Understanding',
                description: 'Comprehensive scene analysis that understands context, relationships, and activities.',
                color: 'from-purple-600 to-pink-600'
              },
              {
                icon: Sparkles,
                title: 'Image Enhancement',
                description: 'AI-powered upscaling, denoising, and restoration for crystal-clear images.',
                color: 'from-pink-600 to-red-600'
              },
              {
                icon: Network,
                title: 'Pattern Recognition',
                description: 'Detect complex patterns, anomalies, and trends that humans might miss.',
                color: 'from-green-600 to-teal-600'
              },
              {
                icon: Zap,
                title: 'Real-Time Processing',
                description: 'Process video streams at 60+ FPS with ultra-low latency on any device.',
                color: 'from-yellow-600 to-orange-600'
              },
              {
                icon: Shield,
                title: 'Privacy Protection',
                description: 'All processing happens locally—your images never leave your device.',
                color: 'from-indigo-600 to-blue-600'
              },
              {
                icon: Cpu,
                title: 'Edge Computing',
                description: 'Run on any hardware from smartphones to servers with optimized performance.',
                color: 'from-cyan-600 to-teal-600'
              }
            ].map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all`}>
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-slate-400">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Powering Innovation Everywhere
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From healthcare to security, RETINA AI is transforming industries
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Healthcare</h3>
              <p className="text-slate-300 mb-6">
                Medical imaging analysis, disease detection, and diagnostic assistance with superhuman accuracy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                  <span className="text-slate-400">Early cancer detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                  <span className="text-slate-400">X-ray and MRI analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                  <span className="text-slate-400">Surgical assistance</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Security</h3>
              <p className="text-slate-300 mb-6">
                Advanced surveillance, threat detection, and access control with real-time monitoring capabilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <span className="text-slate-400">Facial recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <span className="text-slate-400">Anomaly detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <span className="text-slate-400">Perimeter monitoring</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Manufacturing</h3>
              <p className="text-slate-300 mb-6">
                Quality control, defect detection, and process optimization for perfect production every time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <span className="text-slate-400">Defect detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <span className="text-slate-400">Quality assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <span className="text-slate-400">Process monitoring</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.2),transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              See What You've Been Missing
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Experience the power of AI vision. Start building with RETINA AI today.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-12 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 rounded-xl text-white font-semibold text-lg hover:from-cyan-700 hover:via-blue-700 hover:to-teal-700 transition-all shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105">
                Get API Access
              </button>
              <button className="px-12 py-5 border-2 border-cyan-500 rounded-xl text-white font-semibold text-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all">
                View Documentation
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-8">
              Free tier available • 10,000 API calls/month • No credit card required
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
