import { motion } from 'motion/react';
import { useState } from 'react';
import { Sparkles, Eye, Brain, Heart, Bot, Shield, Cpu, Zap, Music, Laptop, Server, Award, Users, CheckCircle2, ArrowRight, Package, Boxes, ShoppingCart, Monitor, HardDrive, MemoryStick, ChevronRight, Check, Code, Database, Globe, Smartphone, Cloud, Lock, LineChart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import digitalDoctorOnlineImage from 'figma:asset/e19695745e16e158f39f7ddd84813a479c69e1f1.png';
import tracImage from 'figma:asset/5323745e64a5938485cc8a939a848c23934e5c67.png';
import winnexImage from 'figma:asset/25d2d739c2bcd75b4a9acb4978249597004fd870.png';
import mitaiLaptop1 from 'figma:asset/b54f1d685246a862c2e0ceb7429361c5e247e70b.png';

type Tab = 'all' | 'hardware' | 'software';

const softwareProducts = [
  {
    id: 'transcendify-trading',
    title: 'Transcendify AI Trading',
    category: 'AI-Powered Crypto Trading',
    description: 'Revolutionary AI trading platform with autonomous bots, multi-agent orchestration, TROK framework integration, and live Polygon market data.',
    icon: TrendingUp,
    features: ['AI Trading Bots', 'Multi-Agent System', 'TROK Constants', 'Live Market Data', 'Risk Profiles', 'Auto Optimization'],
    color: 'from-green-500 to-emerald-600',
    link: 'https://transcendify-ai-trading-cc44136a.base44.app',
    external: true,
    badge: 'LIVE NOW'
  },
  {
    id: 'trac-analytics',
    title: 'TRAC Analytics',
    category: 'Scientific Discovery AI',
    description: 'Revolutionary TOZ & TROK frameworks for automated scientific discovery using probabilistic reasoning and causal inference.',
    icon: LineChart,
    image: tracImage,
    features: ['TOZ Framework', 'TROK System', 'God\'s Touch Indicator', 'Automated Research'],
    color: 'from-cyan-500 to-blue-600',
    link: '/trac'
  },
  {
    id: 'arhont-os',
    title: 'ARHONT 1 OS',
    category: 'AI Operating System',
    description: 'Revolutionary OS built from the ground up for local AI processing with seamless AI integration.',
    icon: Cpu,
    features: ['Local AI Processing', 'Neural Task Manager', 'Smart Resource Allocation', 'Privacy-First Architecture'],
    color: 'from-purple-500 to-pink-500',
    badge: 'Most Popular'
  },
  {
    id: 'retina-ai',
    title: 'RETINA AI',
    category: 'Computer Vision System',
    description: 'Revolutionary computer vision with 99.8% accuracy in real-time object detection and facial recognition.',
    icon: Eye,
    features: ['Object Detection', 'Facial Recognition', 'Real-time Processing', 'Custom Neural Networks'],
    color: 'from-cyan-600 to-blue-600',
  },
  {
    id: 'digital-doctor',
    title: 'Digital Doctor',
    category: 'AI Health Assistant',
    description: 'AI-powered health assistant providing 24/7 medical analysis and diagnosis support.',
    icon: Heart,
    image: digitalDoctorOnlineImage,
    features: ['Medical AI Analysis', 'Diagnostic Support', 'Health Analytics', '24/7 Availability'],
    color: 'from-red-600 to-pink-600',
  },
  {
    id: 'dev-tools',
    title: 'MITAI Developer Tools',
    category: 'Development Platform',
    description: 'Complete suite of AI-enhanced development tools for building intelligent applications.',
    icon: Code,
    features: ['AI Code Assistant', 'Neural Debugger', 'Smart Testing', 'Local Model Training'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud-platform',
    title: 'MITAI Cloud Platform',
    category: 'Cloud Infrastructure',
    description: 'Hybrid cloud platform connecting local AI processing with cloud resources.',
    icon: Cloud,
    features: ['Hybrid Architecture', 'Edge Computing', 'Auto Scaling', 'Global CDN'],
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'mobile-sdk',
    title: 'MITAI Mobile SDK',
    category: 'Mobile Development',
    description: 'Powerful SDK for building AI-powered mobile applications with on-device intelligence.',
    icon: Smartphone,
    features: ['Cross-Platform', 'On-Device AI', 'Real-time Sync', 'Offline Capabilities'],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'neural-database',
    title: 'MITAI Neural Database',
    category: 'Database System',
    description: 'AI-optimized database with intelligent query optimization and ML integration.',
    icon: Database,
    features: ['AI Query Optimizer', 'Auto-Indexing', 'Real-time Analytics', 'Vector Storage'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'security-suite',
    title: 'MITAI Security Suite',
    category: 'Cybersecurity',
    description: 'Advanced AI-powered security platform with real-time threat detection.',
    icon: Lock,
    features: ['AI Threat Detection', 'Auto Response', 'Zero Trust', 'Privacy Protection'],
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'performance-engine',
    title: 'MITAI Performance Engine',
    category: 'System Optimization',
    description: 'Intelligent optimization system that learns usage patterns and optimizes resources.',
    icon: Zap,
    features: ['Smart Optimization', 'Learning Algorithm', 'Power Management', 'Real-time Monitoring'],
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function PortfolioPage() {
  const isDark = true;
  const [activeTab, setActiveTab] = useState<Tab>('all');

  // Laptop Configurator State
  const [selectedCPU, setSelectedCPU] = useState('i9-14900HX');
  const [selectedGPU, setSelectedGPU] = useState('RTX-5090');
  const [selectedRAM, setSelectedRAM] = useState('64GB');
  const [selectedStorage, setSelectedStorage] = useState('2TB');
  const [selectedDisplay, setSelectedDisplay] = useState('QHD-165Hz');

  const cpuOptions = [
    { id: 'i9-14900HX', name: 'Intel Core i9-14900HX', specs: '24 cores, up to 5.8GHz', price: 0, basePrice: true },
    { id: 'i7-14700HX', name: 'Intel Core i7-14700HX', specs: '20 cores, up to 5.5GHz', price: -300 },
    { id: 'AMD-7945HX', name: 'AMD Ryzen 9 7945HX', specs: '16 cores, up to 5.4GHz', price: -200 },
  ];

  const gpuOptions = [
    { id: 'RTX-5090', name: 'NVIDIA RTX 5090', specs: '32GB GDDR7', price: 0, basePrice: true },
    { id: 'RTX-4090', name: 'NVIDIA RTX 4090', specs: '24GB GDDR6X', price: -800 },
    { id: 'RTX-4070', name: 'NVIDIA RTX 4070', specs: '12GB GDDR6X', price: -1500 },
  ];

  const ramOptions = [
    { id: '96GB', name: '96GB DDR5', specs: '5600MHz', price: 400 },
    { id: '64GB', name: '64GB DDR5', specs: '5600MHz', price: 0, basePrice: true },
    { id: '32GB', name: '32GB DDR5', specs: '5200MHz', price: -200 },
  ];

  const storageOptions = [
    { id: '4TB', name: '4TB NVMe SSD', specs: 'PCIe Gen 4', price: 600 },
    { id: '2TB', name: '2TB NVMe SSD', specs: 'PCIe Gen 4', price: 0, basePrice: true },
    { id: '1TB', name: '1TB NVMe SSD', specs: 'PCIe Gen 4', price: -300 },
  ];

  const displayOptions = [
    { id: 'UHD-240Hz', name: '16" UHD 240Hz', specs: '4K OLED, 600 nits', price: 700 },
    { id: 'QHD-165Hz', name: '16" QHD+ 165Hz', specs: '500 nits, 100% DCI-P3', price: 0, basePrice: true },
    { id: 'FHD-144Hz', name: '16" FHD 144Hz', specs: '400 nits, IPS', price: -200 },
  ];

  const basePrice = 5999;
  const calculateTotalPrice = () => {
    const cpu = cpuOptions.find(c => c.id === selectedCPU);
    const gpu = gpuOptions.find(g => g.id === selectedGPU);
    const ram = ramOptions.find(r => r.id === selectedRAM);
    const storage = storageOptions.find(s => s.id === selectedStorage);
    const display = displayOptions.find(d => d.id === selectedDisplay);
    
    return basePrice + (cpu?.price || 0) + (gpu?.price || 0) + (ram?.price || 0) + (storage?.price || 0) + (display?.price || 0);
  };

  const handleBuyClick = (product: string, price: string) => {
    alert(`Added ${product} (${price}) to cart!\n\nThis is a demo. In production, this would add the item to your shopping cart.`);
  };

  const stats = [
    { value: '50M+', label: 'Users Worldwide', icon: Users },
    { value: '15+', label: 'Products', icon: Sparkles },
    { value: '25+', label: 'Industry Awards', icon: Award },
    { value: '150+', label: 'Countries', icon: Sparkles },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 via-white to-cyan-50'}`}>
      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-pink-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.08),transparent_50%)]"></div>
          </>
        )}

        {/* Floating particles */}
        {isDark && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className={`inline-flex items-center gap-2 px-6 py-3 ${isDark ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-500/30' : 'bg-cyan-100 border-cyan-600'} backdrop-blur-sm border-2 rounded-full ${isDark ? 'text-purple-400' : 'text-cyan-900'} font-bold mb-8 shadow-lg`}>
              <Sparkles className="w-5 h-5" />
              Our Innovation Portfolio
            </div>
            
            <h1 className={`text-7xl md:text-8xl font-black mb-8 ${isDark ? 'bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 text-transparent bg-clip-text' : 'bg-gradient-to-r from-slate-900 via-cyan-900 to-blue-900 text-transparent bg-clip-text'}`}>
              What We Create
            </h1>
            
            <p className={`text-2xl ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-6 font-medium`}>
              Pioneering the future of AI, robotics, and intelligent systems
            </p>
            
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
              From revolutionary AI operating systems to advanced humanoid robots, explore our complete portfolio of groundbreaking technologies.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl ${isDark ? 'bg-slate-900/50 border-purple-500/30' : 'bg-white/80 border-cyan-200'} border-2 backdrop-blur-xl`}
              >
                <stat.icon className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-cyan-600'} mx-auto mb-3`} />
                <div className={`text-4xl md:text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-2`}>
                  {stat.value}
                </div>
                <div className={`${isDark ? 'text-slate-400' : 'text-slate-600'} font-medium`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-6 sticky top-24 z-40" style={{ 
        background: isDark ? 'rgba(2, 6, 23, 0.9)' : 'rgba(255, 255, 255, 0.9)', 
        backdropFilter: 'blur(16px)',
        borderBottom: isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(6, 182, 212, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: 'all', label: 'All Products', icon: Boxes },
              { id: 'hardware', label: 'Hardware', icon: Laptop },
              { id: 'software', label: 'Software', icon: Package },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`px-8 py-4 rounded-full font-bold transition-all inline-flex items-center gap-3 ${
                  activeTab === tab.id
                    ? (isDark 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/50 scale-105')
                    : (isDark
                      ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                      : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-cyan-400 hover:shadow-md')
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE CONTENT */}
      {(activeTab === 'all' || activeTab === 'hardware') && (
        <>
          {/* MITAI Laptop Feature */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className={`relative h-[600px] ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-cyan-50 to-blue-50'}`}>
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <ImageWithFallback 
                        src={mitaiLaptop1}
                        alt="MITAI Laptop"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-12 ${isDark ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-white'} flex flex-col justify-center`}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-cyan-500/20 border-cyan-500' : 'bg-cyan-100 border-cyan-600'} border-2 rounded-full ${isDark ? 'text-cyan-400' : 'text-cyan-900'} font-bold mb-6 w-fit`}>
                      <Laptop className="w-5 h-5" />
                      Flagship Product
                    </div>
                    
                    <h2 className={`text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-6`}>
                      MITAI Laptop
                    </h2>
                    
                    <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-8`}>
                      World's first AI-powered laptop with local neural processing, glowing MITAI electric logo, and ARHONT 1 OS pre-installed.
                    </p>

                    <div className="space-y-4 mb-8">
                      {[
                        'Intel Core i9-14900HX (24 cores)',
                        'NVIDIA RTX 5090 32GB',
                        '64GB DDR5 RAM',
                        '2TB NVMe SSD',
                        '16" QHD+ 165Hz Display',
                        'Local AI Processing'
                      ].map((spec, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                          <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-lg`}>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <div>
                        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`}>Starting from</div>
                        <div className={`text-5xl font-black ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>€5,999</div>
                      </div>
                      <button 
                        onClick={() => handleBuyClick('MITAI Laptop', '€5,999')}
                        className={`px-8 py-4 ${isDark ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} text-white font-bold rounded-2xl hover:shadow-lg transition-all inline-flex items-center gap-2`}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Laptop Configurator */}
          <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-gradient-to-br from-cyan-50 to-blue-50'}`}>
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className={`text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-6`}>
                  Configure Your Laptop
                </h2>
                <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Customize your perfect machine with premium components
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Configuration Options */}
                <div className="lg:col-span-2 space-y-6">
                  {/* CPU Selection */}
                  <ConfigSection
                    title="Processor (CPU)"
                    icon={Cpu}
                    options={cpuOptions}
                    selected={selectedCPU}
                    onSelect={setSelectedCPU}
                    isDark={isDark}
                  />

                  {/* GPU Selection */}
                  <ConfigSection
                    title="Graphics Card (GPU)"
                    icon={Monitor}
                    options={gpuOptions}
                    selected={selectedGPU}
                    onSelect={setSelectedGPU}
                    isDark={isDark}
                  />

                  {/* RAM Selection */}
                  <ConfigSection
                    title="Memory (RAM)"
                    icon={MemoryStick}
                    options={ramOptions}
                    selected={selectedRAM}
                    onSelect={setSelectedRAM}
                    isDark={isDark}
                  />

                  {/* Storage Selection */}
                  <ConfigSection
                    title="Storage (SSD)"
                    icon={HardDrive}
                    options={storageOptions}
                    selected={selectedStorage}
                    onSelect={setSelectedStorage}
                    isDark={isDark}
                  />

                  {/* Display Selection */}
                  <ConfigSection
                    title="Display"
                    icon={Monitor}
                    options={displayOptions}
                    selected={selectedDisplay}
                    onSelect={setSelectedDisplay}
                    isDark={isDark}
                  />
                </div>

                {/* Summary Panel */}
                <div className="lg:sticky lg:top-40 h-fit">
                  <div className={`p-8 rounded-3xl ${isDark ? 'bg-slate-900 border-cyan-500/30' : 'bg-white border-cyan-200'} border-2`}>
                    <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-6`}>
                      Your Configuration
                    </h3>

                    <div className="space-y-4 mb-8">
                      <SummaryItem label="CPU" value={cpuOptions.find(c => c.id === selectedCPU)?.name || ''} isDark={isDark} />
                      <SummaryItem label="GPU" value={gpuOptions.find(g => g.id === selectedGPU)?.name || ''} isDark={isDark} />
                      <SummaryItem label="RAM" value={ramOptions.find(r => r.id === selectedRAM)?.name || ''} isDark={isDark} />
                      <SummaryItem label="Storage" value={storageOptions.find(s => s.id === selectedStorage)?.name || ''} isDark={isDark} />
                      <SummaryItem label="Display" value={displayOptions.find(d => d.id === selectedDisplay)?.name || ''} isDark={isDark} />
                    </div>

                    <div className={`pt-6 border-t-2 ${isDark ? 'border-slate-700' : 'border-slate-200'} mb-6`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Total Price</span>
                        <span className={`text-4xl font-black ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                          €{calculateTotalPrice().toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBuyClick('Custom MITAI Laptop', `€${calculateTotalPrice().toLocaleString()}`)}
                      className={`w-full px-8 py-4 ${isDark ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} text-white font-bold rounded-2xl hover:shadow-lg transition-all inline-flex items-center justify-center gap-2`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hardware Products Grid */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className={`text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-6`}>
                  More Hardware Products
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* ARhont 1 Pro */}
                <HardwareCard
                  title="ARhont 1 Pro"
                  subtitle="Professional Workstation"
                  description="Designed for doctors, lawyers, and notaries. Local LLM workstation."
                  price="€1,899"
                  features={['AMD Ryzen 9 7945HX', 'RTX 4070 8GB', '64GB DDR5', 'Local AI Processing']}
                  icon={Server}
                  color="from-blue-600 to-indigo-600"
                  isDark={isDark}
                  onBuy={() => handleBuyClick('ARhont 1 Pro', '€1,899')}
                />

                {/* Transcendify Dock */}
                <HardwareCard
                  title="Transcendify"
                  subtitle="Trading Docking Station"
                  description="AI model for real-time trading. Forex, DAX, and Crypto markets."
                  price="€4,999"
                  features={['Real-time AI Trading', 'Forex & Crypto', 'Pre-installed Scripts']}
                  icon={TrendingUp}
                  color="from-emerald-600 to-teal-600"
                  isDark={isDark}
                  onBuy={() => handleBuyClick('Transcendify Dock', '€4,999')}
                />

                {/* Humanoid Robot */}
                <HardwareCard
                  title="MITAI Humanoid Robot"
                  subtitle="Advanced Robotics"
                  description="AI-driven natural movement and human-like interaction."
                  price="Contact for Quote"
                  features={['Natural Movement', 'AI Vision', 'Voice Interaction']}
                  icon={Bot}
                  color="from-blue-600 to-cyan-600"
                  isDark={isDark}
                  badge="Robotics"
                />

                {/* WINNEX Security */}
                <HardwareCard
                  title="WINNEX Security Robot"
                  subtitle="Autonomous Security"
                  description="AI threat detection and 24/7 intelligent surveillance."
                  image={winnexImage}
                  price="Contact for Quote"
                  features={['24/7 Operation', 'Threat Detection', 'Facial Recognition']}
                  icon={Shield}
                  color="from-red-600 to-orange-600"
                  isDark={isDark}
                  badge="Security"
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* SOFTWARE CONTENT */}
      {(activeTab === 'all' || activeTab === 'software') && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-6`}>
                Intelligent Software Ecosystem
              </h2>
              <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Revolutionary software powered by local AI technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    if (product.link) {
                      if (product.external) {
                        window.open(product.link, '_blank');
                      } else {
                        window.location.hash = product.link;
                      }
                    }
                  }}
                >
                  <div className={`relative h-full p-8 rounded-3xl transition-all overflow-hidden ${
                    isDark 
                      ? 'bg-slate-900/50 border-slate-800 hover:border-purple-500/50' 
                      : 'bg-white border-cyan-200 hover:border-cyan-500 hover:shadow-2xl'
                  } border-2`}>
                    {/* Badge */}
                    {product.badge && (
                      <div className={`absolute top-6 right-6 px-3 py-1 ${isDark ? 'bg-purple-500/20 border-purple-500/30' : 'bg-cyan-100 border-cyan-500'} border rounded-full text-xs font-bold ${isDark ? 'text-purple-400' : 'text-cyan-900'}`}>
                        {product.badge}
                      </div>
                    )}

                    {/* Image or Icon */}
                    {product.image ? (
                      <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden">
                        <ImageWithFallback 
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 shadow-xl`}>
                        <product.icon className="w-10 h-10 text-white" />
                      </div>
                    )}

                    <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-2`}>
                      {product.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-purple-400' : 'text-cyan-600'} font-bold mb-4`}>
                      {product.category}
                    </p>
                    <p className={`${isDark ? 'text-slate-400' : 'text-slate-700'} mb-6`}>
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'} flex-shrink-0 mt-0.5`} />
                          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`w-full px-6 py-3 bg-gradient-to-r ${product.color} text-white rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
                      {product.external ? 'Launch App' : 'Learn More'}
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`py-32 px-6 ${isDark ? 'bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950' : 'bg-gradient-to-br from-cyan-100 via-blue-100 to-slate-100'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-5xl md:text-6xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-6`}>
              Ready to Transform<br/>
              <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>Your Business?</span>
            </h2>
            <p className={`text-2xl ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-12 font-medium`}>
              Explore our services or contact us for custom solutions
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a 
                href="#services"
                className={`px-12 py-6 ${isDark ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all inline-flex items-center gap-3`}
              >
                View Services & Pricing
                <ArrowRight className="w-6 h-6" />
              </a>
              <a 
                href="#contact"
                className={`px-12 py-6 ${isDark ? 'bg-slate-900 border-4 border-cyan-500 text-cyan-400 hover:bg-slate-800' : 'bg-white border-4 border-cyan-600 text-cyan-600 hover:bg-cyan-50'} font-black text-xl rounded-2xl transition-all`}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper Components
function ConfigSection({ title, icon: Icon, options, selected, onSelect, isDark }: any) {
  return (
    <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} border-2`}>
      <div className="flex items-center gap-3 mb-6">
        <Icon className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
        <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      </div>
      <div className="space-y-3">
        {options.map((option: any) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`w-full p-4 rounded-xl text-left transition-all ${
              selected === option.id
                ? (isDark ? 'bg-cyan-500/20 border-2 border-cyan-500' : 'bg-cyan-100 border-2 border-cyan-600')
                : (isDark ? 'bg-slate-800 border-2 border-transparent hover:border-slate-600' : 'bg-slate-50 border-2 border-transparent hover:border-slate-300')
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className={`font-bold ${selected === option.id ? (isDark ? 'text-cyan-400' : 'text-cyan-900') : (isDark ? 'text-white' : 'text-slate-900')}`}>
                {option.name}
              </div>
              {option.price !== 0 && (
                <div className={`text-sm font-bold ${option.price > 0 ? (isDark ? 'text-emerald-400' : 'text-emerald-600') : (isDark ? 'text-red-400' : 'text-red-600')}`}>
                  {option.price > 0 ? '+' : ''} €{option.price}
                </div>
              )}
            </div>
            <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{option.specs}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function SummaryItem({ label, value, isDark }: any) {
  return (
    <div className={`pb-4 border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
      <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`}>{label}</div>
      <div className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</div>
    </div>
  );
}

function HardwareCard({ title, subtitle, description, price, features, icon: Icon, color, isDark, image, badge, onBuy }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`p-8 rounded-3xl ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-cyan-200'} border-2 hover:shadow-2xl transition-all relative`}
    >
      {badge && (
        <div className={`absolute top-6 right-6 px-3 py-1 ${isDark ? 'bg-purple-500/20 border-purple-500/30' : 'bg-cyan-100 border-cyan-500'} border rounded-full text-xs font-bold ${isDark ? 'text-purple-400' : 'text-cyan-900'}`}>
          {badge}
        </div>
      )}
      {image ? (
        <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden">
          <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
      )}
      <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'} mb-2`}>{title}</h3>
      <p className={`text-sm ${isDark ? 'text-purple-400' : 'text-cyan-600'} font-bold mb-4`}>{subtitle}</p>
      <p className={`${isDark ? 'text-slate-400' : 'text-slate-700'} mb-6`}>{description}</p>
      <div className="space-y-2 mb-6">
        {features.map((f: string, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <Check className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
            <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{f}</span>
          </div>
        ))}
      </div>
      <div className={`text-3xl font-black ${isDark ? 'text-cyan-400' : 'text-cyan-600'} mb-6`}>{price}</div>
      {onBuy && (
        <button onClick={onBuy} className={`w-full px-6 py-3 bg-gradient-to-r ${color} text-white rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      )}
    </motion.div>
  );
}