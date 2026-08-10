import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Eye, Cpu, Heart, Music, Brain, Zap, Camera, Sparkles, Play, X, Lock, Check, Star, Rocket, TrendingUp, LineChart, Code, Database, Globe, Smartphone, Cloud } from 'lucide-react';

type DemoType = 'retina' | 'arhont' | 'doctor' | 'transcendify' | null;
type ModalType = 'subscription' | 'preorder' | null;

const demos = [
  {
    id: 'transcendify-trading',
    title: 'Transcendify AI Trading',
    subtitle: 'AI-Powered Crypto Trading',
    description: 'Revolutionary AI trading platform with autonomous bots, multi-agent orchestration, TROK framework integration, and live Polygon market data.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
    features: ['AI Trading Bots', 'Multi-Agent System', 'TROK Constants', 'Live Market Data'],
    link: 'https://transcendify-ai-trading-cc44136a.base44.app',
    external: true,
    badge: 'LIVE NOW'
  },
  {
    id: 'trac',
    title: 'TRAC Analytics',
    subtitle: 'Scientific Discovery AI',
    description: 'Revolutionary TOZ & TROK frameworks for automated scientific discovery. Explores hypothesis spaces using probabilistic reasoning and causal inference.',
    icon: LineChart,
    color: 'from-cyan-500 to-blue-600',
    features: ['TOZ Framework', 'TROK System', 'God\'s Touch Indicator', 'Automated Research'],
    link: '/trac'
  },
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
    id: 'dev-tools',
    title: 'MITAI Developer Tools',
    subtitle: 'Development Platform',
    description: 'Complete suite of AI-enhanced development tools for building intelligent applications with local AI capabilities.',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    features: ['AI Code Assistant', 'Neural Debugger', 'Smart Testing', 'Local Model Training']
  },
  {
    id: 'cloud',
    title: 'MITAI Cloud Platform',
    subtitle: 'Cloud Infrastructure',
    description: 'Hybrid cloud platform that seamlessly connects local AI processing with cloud resources for optimal performance.',
    icon: Cloud,
    color: 'from-indigo-500 to-purple-600',
    features: ['Hybrid Architecture', 'Edge Computing', 'Auto Scaling', 'Global CDN']
  },
  {
    id: 'mobile',
    title: 'MITAI Mobile SDK',
    subtitle: 'Mobile Development',
    description: 'Powerful SDK for building AI-powered mobile applications with on-device intelligence and seamless cloud integration.',
    icon: Smartphone,
    color: 'from-green-500 to-teal-500',
    features: ['Cross-Platform', 'On-Device AI', 'Real-time Sync', 'Offline Capabilities']
  },
  {
    id: 'database',
    title: 'MITAI Neural Database',
    subtitle: 'Database System',
    description: 'AI-optimized database system with intelligent query optimization, automated indexing, and machine learning integration.',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    features: ['AI Query Optimizer', 'Auto-Indexing', 'Real-time Analytics', 'Vector Storage']
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

export default function Software() {
  const [activeDemo, setActiveDemo] = useState<DemoType>(null);
  const [demoCount, setDemoCount] = useState(0);
  const [showLimitModal, setShowLimitModal] = useState(false);

  // Load demo count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem('mitai_demo_count');
    if (savedCount) {
      setDemoCount(parseInt(savedCount));
    }
  }, []);

  const handleDemoClick = (demo: any) => {
    // If external link, open in new tab
    if (demo.external && demo.link) {
      window.open(demo.link, '_blank');
      return;
    }
    
    // If internal link, navigate
    if (demo.link) {
      window.location.hash = demo.link;
      return;
    }

    // Otherwise it's a demo that needs activation
    if (demoCount >= 5) {
      setShowLimitModal(true);
      return;
    }

    const newCount = demoCount + 1;
    setDemoCount(newCount);
    localStorage.setItem('mitai_demo_count', newCount.toString());
    setActiveDemo(demo.id as DemoType);
  };

  const closeDemo = () => {
    setActiveDemo(null);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="inline-block px-6 py-3 backdrop-blur-sm border rounded-full font-semibold mb-8"
              style={{
                background: 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))',
                borderColor: 'rgba(6, 182, 212, 0.3)',
                color: 'rgb(103, 232, 249)'
              }}
            >
              Interactive Experience Center
            </div>
            
            <h1 
              className="text-6xl md:text-8xl font-bold mb-8"
              style={{
                background: 'linear-gradient(to right, rgb(103, 232, 249), rgb(167, 139, 250), rgb(244, 114, 182))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Try Before You Buy
            </h1>
            
            <p 
              className="text-xl md:text-2xl mb-6"
              style={{
                color: 'rgb(203, 213, 225)'
              }}
            >
              Test all MITAI services and advanced products in real-time
            </p>
            
            <p 
              className="text-lg max-w-3xl mx-auto"
              style={{
                color: 'rgb(148, 163, 184)'
              }}
            >
              Experience the full capability of MITAI Technology with interactive demos. Click any product below to explore its features live - no installation required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Cards Grid - ТАПАНАР Products */}
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
                onClick={() => handleDemoClick(demo)}
              >
                <div 
                  className="relative p-8 rounded-2xl transition-all h-full border-2"
                  style={{
                    background: 'rgba(15, 23, 42, 0.5)',
                    borderColor: 'rgb(30, 41, 59)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(6, 182, 212)';
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(6, 182, 212, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(30, 41, 59)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${demo.color} flex items-center justify-center mb-6 shadow-lg transition-all`}>
                    <demo.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Badge */}
                  {demo.badge && (
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{
                        background: 'rgba(34, 197, 94, 0.15)',
                        border: '1px solid rgba(34, 197, 94, 0.5)',
                        color: 'rgb(34, 197, 94)'
                      }}
                    >
                      {demo.badge}
                    </div>
                  )}

                  {!demo.badge && (
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        color: 'rgb(6, 182, 212)'
                      }}
                    >
                      Live Demo
                    </div>
                  )}

                  {/* Title */}
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: 'rgb(248, 250, 252)'
                    }}
                  >
                    {demo.title}
                  </h3>

                  {/* Subtitle */}
                  <p 
                    className="text-sm font-semibold mb-4"
                    style={{
                      color: 'rgb(6, 182, 212)'
                    }}
                  >
                    {demo.subtitle}
                  </p>

                  {/* Description */}
                  <p 
                    className="mb-6"
                    style={{
                      color: 'rgb(148, 163, 184)'
                    }}
                  >
                    {demo.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {demo.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${demo.color}`}></div>
                        <span 
                          className="text-xs"
                          style={{
                            color: 'rgb(148, 163, 184)'
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`w-full px-6 py-3 bg-gradient-to-r ${demo.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:gap-3`}
                    onClick={e => e.stopPropagation()}
                  >
                    <Play className="w-5 h-5" />
                    Contact
                  </a>

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
            className="p-12 rounded-2xl border-2"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))',
              borderColor: 'rgba(6, 182, 212, 0.3)',
              boxShadow: '0 8px 40px rgba(6, 182, 212, 0.2)'
            }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" style={{ color: 'rgb(6, 182, 212)' }} />
            <h2 
              className="text-4xl font-bold mb-4"
              style={{
                color: 'rgb(248, 250, 252)'
              }}
            >
              Experience the Maximal Capability
            </h2>
            <p 
              className="text-xl mb-8"
              style={{
                color: 'rgb(203, 213, 225)'
              }}
            >
              Each demo runs with full functionality - try RETINA's real-time tracking, explore ARHONT's AI OS interface, consult with Digital Doctor, or experience Transcendify's instant translation.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div 
                className="px-6 py-3 rounded-lg border-2"
                style={{
                  background: 'rgba(15, 23, 42, 0.5)',
                  borderColor: 'rgb(30, 41, 59)'
                }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: 'rgb(6, 182, 212)' }}>100%</div>
                <div className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>Full Features</div>
              </div>
              <div 
                className="px-6 py-3 rounded-lg border-2"
                style={{
                  background: 'rgba(15, 23, 42, 0.5)',
                  borderColor: 'rgb(30, 41, 59)'
                }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: 'rgb(147, 51, 234)' }}>Real-Time</div>
                <div className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>Live Processing</div>
              </div>
              <div 
                className="px-6 py-3 rounded-lg border-2"
                style={{
                  background: 'rgba(15, 23, 42, 0.5)',
                  borderColor: 'rgb(30, 41, 59)'
                }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: 'rgb(236, 72, 153)' }}>No Setup</div>
                <div className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>Instant Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Limit Modal */}
      {showLimitModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{
            background: 'rgba(2, 6, 23, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
          onClick={() => setShowLimitModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full rounded-2xl p-8 relative border-2"
            style={{
              background: 'rgb(15, 23, 42)',
              borderColor: 'rgb(6, 182, 212)',
              boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLimitModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <Lock className="w-16 h-16 mx-auto mb-6" style={{ color: 'rgb(6, 182, 212)' }} />
            <h3 
              className="text-3xl font-bold text-center mb-4"
              style={{
                color: 'rgb(248, 250, 252)'
              }}
            >
              Demo Limit Reached
            </h3>
            <p 
              className="text-center mb-8"
              style={{
                color: 'rgb(203, 213, 225)'
              }}
            >
              You've reached the limit of 5 free demos. Subscribe to MITAI Services for unlimited access to all features and demos.
            </p>
            <button 
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              onClick={() => window.location.hash = '#services'}
            >
              <Rocket className="w-6 h-6" />
              View Subscription Plans
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
