import { motion } from 'motion/react';
import { Brain, Zap, Network, Sparkles, BookOpen, Atom, Fingerprint, Eye } from 'lucide-react';

export default function TRAC() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        </div>

        {/* Floating particles representing neural connections */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-full text-indigo-400 font-semibold mb-8">
              Revolutionary Scientific Framework
            </div>
            
            {/* Main Title with God's Touch styling */}
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(99,102,241,0.5)",
                  "0 0 40px rgba(139,92,246,0.8)",
                  "0 0 20px rgba(99,102,241,0.5)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                TRAC
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl text-white mb-4 font-light">
                Theories of Adaptive and Optimizing Constants
              </h2>
              <p className="text-xl md:text-2xl text-indigo-300 font-semibold">
                TOZ & TROK Frameworks for Automated Scientific Discovery
              </p>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Experience "God's Touch" - navigate and interact with our revolutionary AI framework using only your hand gestures. Point to explore, pinch to select. The future of human-computer interaction is here.
            </motion.p>

            {/* Author & Copyright */}
            <div className="p-6 bg-slate-900/50 border border-indigo-500/30 rounded-2xl backdrop-blur-sm max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Fingerprint className="w-6 h-6 text-indigo-400" />
                <p className="text-white font-semibold text-lg">
                  Author: Dimitar Konstantinov Totev
                </p>
              </div>
              <p className="text-slate-400 mb-2">
                MIT AI Systems 1985 LTD | Mobile Intelligence Technologies
              </p>
              <p className="text-sm text-slate-500">
                © 2025 MIT AI (Mobile Intelligence Technologies) 1985 LTD. All rights reserved.
              </p>
            </div>

            {/* Hand Control Indicator */}
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/50 rounded-full backdrop-blur-sm"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(99,102,241,0.3)",
                  "0 0 40px rgba(139,92,246,0.6)",
                  "0 0 20px rgba(99,102,241,0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Fingerprint className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <span className="text-white font-semibold text-lg">
                God's Touch Active - Use Hand Gestures to Navigate
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Eye className="w-8 h-8 text-purple-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Framework Overview */}
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
              What is TRAC?
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              A groundbreaking framework that combines artificial intelligence with probabilistic logic for automated scientific discovery
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-6 shadow-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">TOZ Framework</h3>
              <p className="text-lg text-slate-300 mb-4">
                <strong className="text-indigo-400">Theory of Optimizing Zero</strong>
              </p>
              <p className="text-slate-400 mb-6">
                An adaptive system that dynamically adjusts constants and parameters to optimize scientific models in real-time. TOZ enables AI to discover optimal configurations that would take human researchers years to find.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></div>
                  <span className="text-slate-300">Adaptive constant optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></div>
                  <span className="text-slate-300">Real-time model refinement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></div>
                  <span className="text-slate-300">Self-correcting algorithms</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-xl">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">TROK Framework</h3>
              <p className="text-lg text-slate-300 mb-4">
                <strong className="text-purple-400">Theory of Recursive Optimization Kernels</strong>
              </p>
              <p className="text-slate-400 mb-6">
                A recursive learning system that builds upon previous discoveries to generate new hypotheses and insights. TROK creates a continuous cycle of scientific advancement powered by AI.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <span className="text-slate-300">Recursive knowledge building</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <span className="text-slate-300">Automated hypothesis generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                  <span className="text-slate-300">Cross-domain pattern recognition</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              TRAC transforms how we approach scientific research and discovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Automated Discovery',
                description: 'AI autonomously discovers scientific patterns and relationships without human intervention.',
                color: 'from-indigo-600 to-blue-600'
              },
              {
                icon: Network,
                title: 'Adaptive Systems',
                description: 'Continuously learns and adapts to new data, improving accuracy over time.',
                color: 'from-purple-600 to-pink-600'
              },
              {
                icon: Zap,
                title: 'Real-Time Optimization',
                description: 'Optimizes complex systems in real-time, achieving results impossible for manual methods.',
                color: 'from-cyan-600 to-blue-600'
              },
              {
                icon: Sparkles,
                title: 'Cross-Domain Intelligence',
                description: 'Applies insights from one field to accelerate discoveries in completely different domains.',
                color: 'from-pink-600 to-red-600'
              },
              {
                icon: BookOpen,
                title: 'Knowledge Synthesis',
                description: 'Synthesizes vast amounts of research into coherent, actionable insights.',
                color: 'from-green-600 to-teal-600'
              },
              {
                icon: Atom,
                title: 'Probabilistic Logic',
                description: 'Uses advanced probabilistic reasoning to handle uncertainty in scientific data.',
                color: 'from-orange-600 to-red-600'
              },
              {
                icon: Network,
                title: 'Biomedical Applications',
                description: 'Specialized capabilities for drug discovery, disease prediction, and treatment optimization.',
                color: 'from-red-600 to-pink-600'
              },
              {
                icon: Brain,
                title: 'Theory of Knowledge',
                description: 'Builds comprehensive knowledge graphs that capture relationships between concepts.',
                color: 'from-indigo-600 to-purple-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              TRAC is already transforming multiple scientific fields
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border border-indigo-500/30 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Biomedical Research</h3>
              <p className="text-slate-300 mb-6">
                Accelerating drug discovery, disease diagnosis, and treatment optimization through AI-powered pattern recognition and hypothesis generation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <span className="text-slate-400 text-sm">Drug interaction prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <span className="text-slate-400 text-sm">Disease pathway discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <span className="text-slate-400 text-sm">Personalized medicine</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Materials Science</h3>
              <p className="text-slate-300 mb-6">
                Discovering new materials and optimizing existing ones by exploring vast parameter spaces impossible for traditional methods.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-400 text-sm">Novel material discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-400 text-sm">Property optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-slate-400 text-sm">Computational modeling</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border border-cyan-500/30 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Climate Science</h3>
              <p className="text-slate-300 mb-6">
                Modeling complex climate systems and predicting environmental changes with unprecedented accuracy and speed.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-slate-400 text-sm">Climate pattern analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-slate-400 text-sm">Environmental prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-slate-400 text-sm">Ecosystem modeling</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Experience TRAC Today
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Join leading research institutions and corporations using TRAC to accelerate scientific discovery. Use "God's Touch" hand control to explore our platform.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <button className="px-12 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all hover:scale-105">
                Request Access
              </button>
              <button className="px-12 py-5 border-2 border-indigo-500 rounded-xl text-white font-semibold text-lg hover:border-indigo-400 hover:bg-indigo-500/10 transition-all">
                Read Research Paper
              </button>
            </div>
            
            {/* Copyright Notice */}
            <motion.div
              className="p-6 bg-slate-900/70 border border-indigo-500/30 rounded-xl backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-slate-400 mb-2">
                <strong className="text-indigo-400">Protected Intellectual Property</strong>
              </p>
              <p className="text-xs text-slate-500">
                © 2025 MIT AI (Mobile Intelligence Technologies) 1985 LTD. This work is protected by international copyright and patent law. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form without prior written permission.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
