import React from 'react';
import { Cpu, Zap, Shield, Network, Brain, Code, Database, Sparkles } from 'lucide-react';
import archontImage from 'figma:asset/63da37c779d496ce7c50019dfe6e14bdd6b7bbf3.png';
import winnexBg from 'figma:asset/25d2d739c2bcd75b4a9acb4978249597004fd870.png';

export default function Arhont1() {
  const isDark = true; // Dark theme only
  
  return (
    <div 
      style={{
        minHeight: '100vh',
        background: isDark 
          ? 'rgb(2, 6, 23)' 
          : 'linear-gradient(135deg, rgb(250, 245, 255) 0%, rgb(237, 233, 254) 50%, rgb(221, 214, 254) 100%)'
      }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* ARCHONT Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${archontImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />
        
        {/* Animated background overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-cyan-600/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_50%)]"></div>
        </div>

        {/* Animated particles */}
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

        <div className="relative z-10 max-w-6xl mx-auto text-center mt-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo/Badge */}
            <motion.div
              className="inline-block mb-8"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 blur-2xl opacity-50"></div>
                <div className="relative px-8 py-4 bg-slate-900 border-2 border-purple-500 rounded-2xl">
                  
                </div>
              </div>
            </motion.div>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
              style={{
                color: isDark ? 'white' : 'rgb(15, 23, 42)',
                textShadow: isDark 
                  ? 'none' 
                  : '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(79, 70, 229, 0.4)'
              }}
            >
              The Ultimate AI Operating System
            </h1>
            
            <p 
              className="text-2xl md:text-3xl mb-12 font-light"
              style={{
                color: isDark ? 'rgb(203, 213, 225)' : 'rgb(71, 85, 105)',
                textShadow: isDark ? 'none' : '0 0 20px rgba(139, 92, 246, 0.3)'
              }}
            >
              Where Intelligence Meets Performance
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-16">
              <button className="px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                Test in Cloud
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                color: isDark ? 'white' : 'rgb(15, 23, 42)',
                textShadow: isDark ? 'none' : '0 0 40px rgba(139, 92, 246, 0.5)'
              }}
            >
              Revolutionary Features
            </h2>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}
            >
              Built from the ground up with AI at its core
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Neural Core',
                description: 'Advanced AI engine that learns your patterns and optimizes system performance in real-time.',
                color: 'from-purple-600 to-pink-600'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized for speed with instant boot times and near-zero latency for all operations.',
                color: 'from-yellow-600 to-orange-600'
              },
              {
                icon: Shield,
                title: 'Fort Knox Security',
                description: 'Military-grade encryption with AI-powered threat detection keeps your data safe.',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                icon: Network,
                title: 'Universal Compatibility',
                description: 'Run any application from any platform with built-in compatibility layers.',
                color: 'from-green-600 to-teal-600'
              },
              {
                icon: Code,
                title: 'Developer Heaven',
                description: 'Complete development environment with AI code assistant and debugging tools.',
                color: 'from-indigo-600 to-purple-600'
              },
              {
                icon: Database,
                title: 'Smart Storage',
                description: 'AI-optimized file system that organizes and compresses data intelligently.',
                color: 'from-cyan-600 to-blue-600'
              },
              {
                icon: Cpu,
                title: 'Resource Mastery',
                description: 'Intelligent resource allocation ensures optimal performance at all times.',
                color: 'from-red-600 to-pink-600'
              },
              {
                icon: Sparkles,
                title: 'Beautiful UI',
                description: 'Stunning, customizable interface that adapts to your workflow and preferences.',
                color: 'from-purple-600 to-blue-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div 
                  className="p-8 rounded-2xl transition-all h-full"
                  style={{
                    background: isDark 
                      ? 'rgba(15, 23, 42, 0.5)' 
                      : 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: isDark 
                      ? '1px solid rgba(100, 116, 139, 0.3)' 
                      : '1px solid rgba(139, 92, 246, 0.3)',
                    boxShadow: isDark 
                      ? '0 8px 32px rgba(139, 92, 246, 0.1)' 
                      : '0 8px 32px rgba(139, 92, 246, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(168, 85, 247, 0.5)';
                    e.currentTarget.style.boxShadow = isDark 
                      ? '0 12px 48px rgba(139, 92, 246, 0.3)' 
                      : '0 12px 48px rgba(139, 92, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = isDark 
                      ? '1px solid rgba(100, 116, 139, 0.3)' 
                      : '1px solid rgba(139, 92, 246, 0.3)';
                    e.currentTarget.style.boxShadow = isDark 
                      ? '0 8px 32px rgba(139, 92, 246, 0.1)' 
                      : '0 8px 32px rgba(139, 92, 246, 0.25)';
                  }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{
                      color: isDark ? 'white' : 'rgb(15, 23, 42)',
                      textShadow: isDark ? 'none' : '0 0 20px rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section 
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background: isDark 
            ? 'linear-gradient(to bottom, rgb(2, 6, 23) 0%, rgba(88, 28, 135, 0.2) 50%, rgb(2, 6, 23) 100%)' 
            : 'linear-gradient(to bottom, rgba(250, 245, 255, 0.5) 0%, rgba(237, 233, 254, 0.8) 50%, rgba(250, 245, 255, 0.5) 100%)'
        }}
      >
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                color: isDark ? 'white' : 'rgb(15, 23, 42)',
                textShadow: isDark ? 'none' : '0 0 40px rgba(139, 92, 246, 0.5)'
              }}
            >
              AI-Powered Intelligence
            </h2>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}
            >
              ARHONT 1 brings artificial intelligence to every aspect of your computing experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(88, 28, 135, 0.3) 0%, rgba(29, 78, 216, 0.3) 100%)' 
                  : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                border: isDark 
                  ? '1px solid rgba(168, 85, 247, 0.3)' 
                  : '1px solid rgba(139, 92, 246, 0.4)',
                boxShadow: isDark 
                  ? '0 8px 32px rgba(139, 92, 246, 0.15)' 
                  : '0 8px 32px rgba(139, 92, 246, 0.25)'
              }}
            >
              {/* Winnex Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${winnexBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0
                }}
              />
              
              <div className="relative z-10">
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{
                    color: isDark ? 'white' : 'rgb(15, 23, 42)',
                    textShadow: isDark ? 'none' : '0 0 20px rgba(139, 92, 246, 0.4)'
                  }}
                >
                  Adaptive Learning
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(71, 85, 105)' }}
                >
                  ARHONT 1 observes your work patterns and automatically optimizes workflows, predicts your needs, and suggests improvements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Learns your preferences over time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Predicts next actions with 95% accuracy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Automates repetitive tasks
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(29, 78, 216, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)' 
                  : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                border: isDark 
                  ? '1px solid rgba(59, 130, 246, 0.3)' 
                  : '1px solid rgba(139, 92, 246, 0.4)',
                boxShadow: isDark 
                  ? '0 8px 32px rgba(59, 130, 246, 0.15)' 
                  : '0 8px 32px rgba(139, 92, 246, 0.25)'
              }}
            >
              {/* Winnex Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${winnexBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0
                }}
              />
              
              <div className="relative z-10">
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{
                    color: isDark ? 'white' : 'rgb(15, 23, 42)',
                    textShadow: isDark ? 'none' : '0 0 20px rgba(139, 92, 246, 0.4)'
                  }}
                >
                  Natural Language
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(71, 85, 105)' }}
                >
                  Control your entire system with natural conversation. Just ask ARHONT 1 what you need, and it handles the rest.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Voice and text commands
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Context-aware understanding
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Multi-language support
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(88, 28, 135, 0.3) 100%)' 
                  : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                border: isDark 
                  ? '1px solid rgba(6, 182, 212, 0.3)' 
                  : '1px solid rgba(139, 92, 246, 0.4)',
                boxShadow: isDark 
                  ? '0 8px 32px rgba(6, 182, 212, 0.15)' 
                  : '0 8px 32px rgba(139, 92, 246, 0.25)'
              }}
            >
              {/* Winnex Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${winnexBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0
                }}
              />
              
              <div className="relative z-10">
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{
                    color: isDark ? 'white' : 'rgb(15, 23, 42)',
                    textShadow: isDark ? 'none' : '0 0 20px rgba(139, 92, 246, 0.4)'
                  }}
                >
                  Proactive Assistant
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(71, 85, 105)' }}
                >
                  ARHONT 1 doesn't wait for commands—it anticipates your needs and takes action before you even ask.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Intelligent notifications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Automatic problem solving
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                    <span style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(100, 116, 139)' }}>
                      Smart recommendations
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(88, 28, 135, 0.2) 0%, rgba(29, 78, 216, 0.2) 50%, rgba(6, 182, 212, 0.2) 100%)' 
            : 'linear-gradient(135deg, rgba(250, 245, 255, 0.8) 0%, rgba(237, 233, 254, 0.9) 50%, rgba(221, 214, 254, 0.8) 100%)'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: isDark 
              ? 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 70%)' 
              : 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                color: isDark ? 'white' : 'rgb(15, 23, 42)',
                textShadow: isDark ? 'none' : '0 0 40px rgba(139, 92, 246, 0.6)'
              }}
            >
              Experience ARHONT 1 Today
            </h2>
            <p 
              className="text-xl mb-12"
              style={{
                color: isDark ? 'rgb(203, 213, 225)' : 'rgb(71, 85, 105)',
                textShadow: isDark ? 'none' : '0 0 20px rgba(139, 92, 246, 0.3)'
              }}
            >
              Join millions of users who have already made the switch to the most intelligent operating system ever created.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-12 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl text-white font-semibold text-lg hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105">
                Download Free Trial
              </button>
              <button 
                className="px-12 py-5 border-2 rounded-xl font-semibold text-lg transition-all"
                style={{
                  borderColor: 'rgb(168, 85, 247)',
                  color: isDark ? 'white' : 'rgb(88, 28, 135)',
                  background: isDark ? 'transparent' : 'rgba(255, 255, 255, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(147, 51, 234)';
                  e.currentTarget.style.background = isDark 
                    ? 'rgba(168, 85, 247, 0.1)' 
                    : 'rgba(168, 85, 247, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(168, 85, 247)';
                  e.currentTarget.style.background = isDark 
                    ? 'transparent' 
                    : 'rgba(255, 255, 255, 0.5)';
                }}
              >
                Compare Plans
              </button>
            </div>
            <p 
              className="text-sm mt-8"
              style={{ color: isDark ? 'rgb(100, 116, 139)' : 'rgb(107, 114, 128)' }}
            >
              30-day free trial • No credit card required • Works on all devices
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}