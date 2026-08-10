import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Eye, Cpu, Heart, Music, Brain, Zap, Camera, Sparkles, Play, X, Lock, Check, Star, Rocket } from 'lucide-react';

type DemoType = 'retina' | 'arhont' | 'doctor' | 'transcendify' | null;
type ModalType = 'subscription' | 'preorder' | null;

const demos = [
  {
    id: 'retina',
    title: 'RETINA AI',
    subtitle: 'Real-Time Object Detection',
    description: 'Experience AI-powered computer vision that sees and understands the world in real-time. Track faces, objects, and movements with superhuman accuracy.',
    icon: Eye,
    color: 'from-cyan-600 to-blue-600',
    features: ['Face Detection', 'Object Tracking', 'Real-time Analysis', '99.8% Accuracy']
  },
  {
    id: 'arhont',
    title: 'ARHONT 1',
    subtitle: 'First AI Operating System',
    description: 'Try the revolutionary AI OS that learns your habits, optimizes performance, and anticipates your needs before you even ask.',
    icon: Cpu,
    color: 'from-purple-600 to-pink-600',
    features: ['Neural Core', 'Voice Commands', 'Auto Optimization', 'Smart Assistant']
  },
  {
    id: 'doctor',
    title: 'Digital Doctor',
    subtitle: 'AI Health Assistant',
    description: 'Advanced AI medical diagnosis system that analyzes symptoms, provides health insights, and offers personalized recommendations.',
    icon: Heart,
    color: 'from-red-600 to-pink-600',
    features: ['Symptom Analysis', 'Health Monitoring', 'Personalized Care', '24/7 Available']
  },
  {
    id: 'transcendify',
    title: 'Transcendify (TR)',
    subtitle: 'AI Audio Intelligence',
    description: 'Real-time audio transcription, translation, and analysis. Convert speech to text in 100+ languages with AI-powered accuracy.',
    icon: Music,
    color: 'from-green-600 to-teal-600',
    features: ['Real-time Transcription', '100+ Languages', 'Speaker Detection', 'AI Translation']
  },
  {
    id: 'neural',
    title: 'Neural Engine',
    subtitle: 'AI Processing Core',
    description: 'Experience the power of local AI processing. See how our neural engine handles complex computations in milliseconds.',
    icon: Brain,
    color: 'from-indigo-600 to-purple-600',
    features: ['Local Processing', 'Zero Latency', 'Privacy First', 'Unlimited Power']
  },
  {
    id: 'vision',
    title: 'Vision Pro',
    subtitle: 'Advanced Camera AI',
    description: 'Professional-grade image enhancement, object removal, background replacement, and AI-powered photo editing in real-time.',
    icon: Camera,
    color: 'from-orange-600 to-red-600',
    features: ['Image Enhancement', 'Object Removal', 'AI Filters', 'Instant Processing']
  }
];

export default function DemoHub() {
  const [activeDemo, setActiveDemo] = useState<DemoType>(null);
  const [isRetinaActive, setIsRetinaActive] = useState(false);
  const [isArhontActive, setIsArhontActive] = useState(false);
  const [isDoctorActive, setIsDoctorActive] = useState(false);
  const [isTranscendifyActive, setIsTranscendifyActive] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [demoCount, setDemoCount] = useState(0);
  const [showLimitModal, setShowLimitModal] = useState(false);

  // Load demo count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem('mitai_demo_count');
    if (savedCount) {
      setDemoCount(parseInt(savedCount));
    }
  }, []);

  const startDemo = (demoId: string) => {
    // Check if user has exceeded free demo limit
    if (demoCount >= 5) {
      setShowLimitModal(true);
      return;
    }

    // Increment demo count
    const newCount = demoCount + 1;
    setDemoCount(newCount);
    localStorage.setItem('mitai_demo_count', newCount.toString());

    setActiveDemo(demoId as DemoType);
    
    // Activate specific demo
    if (demoId === 'retina') setIsRetinaActive(true);
    if (demoId === 'arhont') setIsArhontActive(true);
    if (demoId === 'doctor') setIsDoctorActive(true);
    if (demoId === 'transcendify') setIsTranscendifyActive(true);
  };

  const closeDemo = () => {
    setActiveDemo(null);
    setIsRetinaActive(false);
    setIsArhontActive(false);
    setIsDoctorActive(false);
    setIsTranscendifyActive(false);
  };

  const openModal = (modalType: ModalType) => {
    setActiveModal(modalType);
    setShowLimitModal(false);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 font-semibold mb-8">
              Interactive Experience Center
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Try Before You Buy
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              Test all MITAI services and advanced products in real-time
            </p>
            
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Experience the full capability of MITAI Technology with interactive demos. Click any product below to explore its features live - no installation required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Cards Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => startDemo(demo.id)}
              >
                <div className="relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all h-full">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${demo.color} flex items-center justify-center mb-6 shadow-lg shadow-${demo.color}/30 group-hover:shadow-2xl transition-all`}>
                    <demo.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold mb-4">
                    Live Demo
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {demo.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-cyan-400 text-sm font-semibold mb-4">
                    {demo.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 mb-6">
                    {demo.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {demo.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${demo.color}`}></div>
                        <span className="text-xs text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${demo.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:gap-3`}>
                    <Play className="w-5 h-5" />
                    Launch Demo
                  </button>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-2xl"
          >
            <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Experience the Maximal Capability
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Each demo runs with full functionality - try RETINA's real-time tracking, explore ARHONT's AI OS interface, consult with Digital Doctor, or experience Transcendify's instant translation.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Full Features</div>
              </div>
              <div className="px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-1">Real-Time</div>
                <div className="text-sm text-slate-400">Live Processing</div>
              </div>
              <div className="px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-pink-400 mb-1">No Setup</div>
                <div className="text-sm text-slate-400">Instant Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Modal - RETINA AI */}
      {activeDemo === 'retina' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-lg p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full bg-slate-900 border-2 border-cyan-500 rounded-2xl p-8 relative"
          >
            <button
              onClick={closeDemo}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">RETINA AI Demo</h3>
                <p className="text-cyan-400">Real-Time Object Detection & Tracking</p>
              </div>
            </div>

            {/* Demo Area */}
            <div className="bg-slate-950 rounded-xl p-8 mb-6 border border-cyan-500/30 min-h-[400px]">
              <div className="relative">
                {/* Simulated Camera Feed */}
                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-white text-xl mb-2">Camera Feed Active</p>
                      <p className="text-slate-400">Detecting faces and objects in real-time</p>
                    </div>
                  </div>

                  {/* Scanning overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Detection boxes simulation */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400 rounded-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute -top-6 left-0 px-2 py-1 bg-cyan-500 text-white text-xs rounded">
                      Face: 98.5%
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-blue-400 rounded-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="absolute -top-6 left-0 px-2 py-1 bg-blue-500 text-white text-xs rounded">
                      Object: 95.2%
                    </div>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-400">3</div>
                    <div className="text-xs text-slate-400">Objects Detected</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-400">1</div>
                    <div className="text-xs text-slate-400">Faces Found</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400">8ms</div>
                    <div className="text-xs text-slate-400">Response Time</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-pink-400">60</div>
                    <div className="text-xs text-slate-400">FPS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Order RETINA AI
              </button>
              <button onClick={closeDemo} className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-all">
                Close Demo
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Demo Modal - ARHONT 1 */}
      {activeDemo === 'arhont' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-lg p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full bg-slate-900 border-2 border-purple-500 rounded-2xl p-8 relative"
          >
            <button
              onClick={closeDemo}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">ARHONT 1 Demo</h3>
                <p className="text-purple-400">First AI Operating System</p>
              </div>
            </div>

            {/* Demo Area */}
            <div className="bg-slate-950 rounded-xl p-8 mb-6 border border-purple-500/30 min-h-[400px]">
              <div className="space-y-6">
                {/* Desktop Simulation */}
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-semibold">AI Assistant Active</h4>
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-400"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-slate-400 mb-1">System Optimization</p>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '87%' }}
                          transition={{ duration: 2 }}
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-purple-300">💡 AI Suggestion:</p>
                      <p className="text-xs text-slate-400 mt-1">Your workflow can be optimized by 34% with automated task scheduling</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
                        <div className="text-lg font-bold text-purple-400">12</div>
                        <div className="text-xs text-slate-400">Apps Running</div>
                      </div>
                      <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-400">2.3s</div>
                        <div className="text-xs text-slate-400">Boot Time</div>
                      </div>
                      <div className="p-3 bg-pink-500/10 border border-pink-500/30 rounded-lg text-center">
                        <div className="text-lg font-bold text-pink-400">45%</div>
                        <div className="text-xs text-slate-400">CPU Usage</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voice Command Demo */}
                <div className="p-6 bg-slate-800/50 rounded-lg border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">Voice Command Active</span>
                  </div>
                  <p className="text-slate-300 italic">"ARHONT, optimize my system for gaming"</p>
                  <p className="text-purple-400 text-sm mt-2">✓ Switching to performance mode, allocating resources...</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Download ARHONT 1
              </button>
              <button onClick={closeDemo} className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-all">
                Close Demo
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Demo Modal - Digital Doctor */}
      {activeDemo === 'doctor' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-lg p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full bg-slate-900 border-2 border-red-500 rounded-2xl p-8 relative"
          >
            <button
              onClick={closeDemo}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Digital Doctor Demo</h3>
                <p className="text-red-400">AI Health Assistant</p>
              </div>
            </div>

            {/* Demo Area */}
            <div className="bg-slate-950 rounded-xl p-8 mb-6 border border-red-500/30 min-h-[400px]">
              <div className="space-y-6">
                {/* Health Analysis */}
                <div className="p-6 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-lg border border-red-500/30">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-400" />
                    Health Analysis Dashboard
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Heart Rate</span>
                        <motion.span
                          className="text-lg font-bold text-red-400"
                          animate={{ opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          72 BPM
                        </motion.span>
                      </div>
                      <div className="text-xs text-green-400">✓ Normal</div>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Blood Pressure</span>
                        <span className="text-lg font-bold text-blue-400">120/80</span>
                      </div>
                      <div className="text-xs text-green-400">✓ Optimal</div>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Sleep Quality</span>
                        <span className="text-lg font-bold text-purple-400">87%</span>
                      </div>
                      <div className="text-xs text-green-400">✓ Good</div>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Stress Level</span>
                        <span className="text-lg font-bold text-yellow-400">Low</span>
                      </div>
                      <div className="text-xs text-green-400">✓ Relaxed</div>
                    </div>
                  </div>
                </div>

                {/* AI Recommendation */}
                <div className="p-6 bg-slate-800/50 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="w-5 h-5 text-red-400" />
                    <span className="text-white font-semibold">AI Health Recommendation</span>
                  </div>
                  <p className="text-slate-300 mb-4">
                    Based on your recent activity and vital signs, here are personalized health tips:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                      <span className="text-slate-400 text-sm">Increase water intake to 2.5L per day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                      <span className="text-slate-400 text-sm">Consider 30 minutes of cardio 3x per week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                      <span className="text-slate-400 text-sm">Your sleep schedule is excellent - maintain it!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Get Digital Doctor
              </button>
              <button onClick={closeDemo} className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-all">
                Close Demo
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Demo Modal - Transcendify */}
      {activeDemo === 'transcendify' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-lg p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full bg-slate-900 border-2 border-green-500 rounded-2xl p-8 relative"
          >
            <button
              onClick={closeDemo}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Transcendify Demo</h3>
                <p className="text-green-400">AI Audio Intelligence</p>
              </div>
            </div>

            {/* Demo Area */}
            <div className="bg-slate-950 rounded-xl p-8 mb-6 border border-green-500/30 min-h-[400px]">
              <div className="space-y-6">
                {/* Audio Waveform */}
                <div className="p-6 bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-lg border border-green-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-semibold">Live Transcription</h4>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-red-500"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="text-sm text-slate-400">Recording</span>
                    </div>
                  </div>

                  {/* Waveform visualization */}
                  <div className="flex items-center justify-center gap-1 h-20 mb-4">
                    {[...Array(40)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-gradient-to-t from-green-600 to-teal-400 rounded-full"
                        animate={{
                          height: [
                            `${20 + Math.random() * 60}%`,
                            `${20 + Math.random() * 60}%`,
                            `${20 + Math.random() * 60}%`
                          ]
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.05
                        }}
                      />
                    ))}
                  </div>

                  {/* Transcription output */}
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-slate-300 mb-2">
                      "Welcome to MITAI Transcendify, the most advanced real-time transcription system powered by artificial intelligence."
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>🎤 Speaker: User</span>
                      <span>🌐 Language: English</span>
                      <span>⚡ Confidence: 99.2%</span>
                    </div>
                  </div>
                </div>

                {/* Translation */}
                <div className="p-6 bg-slate-800/50 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">AI Translation</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-xs text-slate-400 mb-2">Spanish</div>
                      <p className="text-sm text-slate-300">Bienvenido a MITAI Transcendify...</p>
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-xs text-slate-400 mb-2">French</div>
                      <p className="text-sm text-slate-300">Bienvenue à MITAI Transcendify...</p>
                    </div>
                    <div className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-xs text-slate-400 mb-2">German</div>
                      <p className="text-sm text-slate-300">Willkommen bei MITAI Transcendify...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://transcendify-ai-trading-cc44136a.base44.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Launch Live Demo
              </a>
              <button onClick={closeDemo} className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-all">
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Subscription Modal */}
      {activeModal === 'subscription' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-lg p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full bg-slate-900 border-2 border-cyan-500 rounded-2xl p-8 relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">RETINA AI Demo</h3>
                <p className="text-cyan-400">Real-Time Object Detection & Tracking</p>
              </div>
            </div>

            {/* Demo Area */}
            <div className="bg-slate-950 rounded-xl p-8 mb-6 border border-cyan-500/30 min-h-[400px]">
              <div className="relative">
                {/* Simulated Camera Feed */}
                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-white text-xl mb-2">Camera Feed Active</p>
                      <p className="text-slate-400">Detecting faces and objects in real-time</p>
                    </div>
                  </div>

                  {/* Scanning overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Detection boxes simulation */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400 rounded-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute -top-6 left-0 px-2 py-1 bg-cyan-500 text-white text-xs rounded">
                      Face: 98.5%
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-blue-400 rounded-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="absolute -top-6 left-0 px-2 py-1 bg-blue-500 text-white text-xs rounded">
                      Object: 95.2%
                    </div>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-400">3</div>
                    <div className="text-xs text-slate-400">Objects Detected</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-400">1</div>
                    <div className="text-xs text-slate-400">Faces Found</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400">8ms</div>
                    <div className="text-xs text-slate-400">Response Time</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-pink-400">60</div>
                    <div className="text-xs text-slate-400">FPS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Order RETINA AI
              </button>
              <button onClick={closeModal} className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-all">
                Close Demo
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Preorder Modal */}
      {activeModal === 'preorder' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-lg p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full bg-slate-900 border-2 border-cyan-500 rounded-2xl p-8 relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">RETINA AI Demo</h3>
                <p className="text-cyan-400">Real-Time Object Detection & Tracking</p>
              </div>
            </div>

            {/* Demo Area */}
            <div className="bg-slate-950 rounded-xl p-8 mb-6 border border-cyan-500/30 min-h-[400px]">
              <div className="relative">
                {/* Simulated Camera Feed */}
                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-white text-xl mb-2">Camera Feed Active</p>
                      <p className="text-slate-400">Detecting faces and objects in real-time</p>
                    </div>
                  </div>

                  {/* Scanning overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Detection boxes simulation */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400 rounded-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute -top-6 left-0 px-2 py-1 bg-cyan-500 text-white text-xs rounded">
                      Face: 98.5%
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-blue-400 rounded-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="absolute -top-6 left-0 px-2 py-1 bg-blue-500 text-white text-xs rounded">
                      Object: 95.2%
                    </div>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-400">3</div>
                    <div className="text-xs text-slate-400">Objects Detected</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-400">1</div>
                    <div className="text-xs text-slate-400">Faces Found</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-400">8ms</div>
                    <div className="text-xs text-slate-400">Response Time</div>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-pink-400">60</div>
                    <div className="text-xs text-slate-400">FPS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Order RETINA AI
              </button>
              <button onClick={closeModal} className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-all">
                Close Demo
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Demo Limit Modal */}
      {showLimitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-lg p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full bg-slate-900 border-2 border-purple-500 rounded-2xl p-8 relative overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowLimitModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Free Trial Limit Reached</h3>
                  <p className="text-purple-400">You've used all 5 free demo trials</p>
                </div>
              </div>

              <p className="text-slate-300 text-lg mb-8">
                Continue exploring MITAI products with full cloud capability by subscribing to our cloud service or pre-order the MITAI DIANA robot.
              </p>

              {/* Cloud Subscription Options */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  Cloud Subscriptions
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Monthly Plan */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-cyan-400">MONTHLY</span>
                      <Star className="w-5 h-5 text-cyan-400" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-white">€150</div>
                      <div className="text-slate-400">per month</div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-slate-300">ARHONT 1 Full Access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-slate-300">RETINA AI Unlimited</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-slate-300">Cloud Processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-slate-300">Priority Support</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => openModal('subscription')}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Subscribe Monthly
                    </button>
                  </motion.div>

                  {/* Yearly Plan */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/50 rounded-xl overflow-hidden"
                  >
                    {/* Best Value Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs text-white font-bold">
                      BEST VALUE
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-purple-400">YEARLY</span>
                      <Star className="w-5 h-5 text-purple-400" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-white">€999</div>
                      <div className="text-slate-400">per year</div>
                      <div className="text-green-400 text-sm font-semibold mt-1">Save €801 / year</div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-slate-300">ARHONT 1 Full Access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-slate-300">RETINA AI Unlimited</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-slate-300">Cloud Processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-slate-300">VIP Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-slate-300 font-semibold">+ Free MITAI Merch</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => openModal('subscription')}
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Subscribe Yearly
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* MITAI DIANA Pre-order */}
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/30 rounded-xl">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-pink-400" />
                  Reserve MITAI DIANA Robot
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-300 mb-4">
                      Pre-order the revolutionary MITAI DIANA humanoid robot with advanced AI capabilities and natural human interaction.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-slate-300">12-month delivery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-slate-300">80% prepayment required</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-slate-300">Early bird pricing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-slate-300">Priority shipping</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="p-4 bg-slate-900/50 rounded-lg mb-4">
                      <div className="text-sm text-slate-400 mb-1">Estimated Total</div>
                      <div className="text-3xl font-bold text-white mb-1">Contact Sales</div>
                      <div className="text-xs text-slate-500">Price varies by configuration</div>
                    </div>

                    <button 
                      onClick={() => openModal('preorder')}
                      className="w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Rocket className="w-5 h-5" />
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Continue with free trial note */}
              <div className="mt-8 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                <p className="text-sm text-slate-400 text-center">
                  Want to explore more? <span className="text-cyan-400 font-semibold cursor-pointer hover:underline">Sign up for a free account</span> to get 5 additional demo credits or subscribe for unlimited access.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}