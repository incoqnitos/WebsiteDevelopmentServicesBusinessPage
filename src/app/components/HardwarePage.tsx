import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Cpu, Monitor, Zap, HardDrive, MemoryStick, ChevronRight, Sparkles, Check, Bot, Eye, Shield, Network, Brain } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mitaiLaptop1 from 'figma:asset/b54f1d685246a862c2e0ceb7429361c5e247e70b.png';

export default function HardwarePage() {
  const handleBuyClick = (product: string, price: string) => {
    alert(`Added ${product} (${price}) to cart!\n\nThis is a demo. In production, this would add the item to your shopping cart.`);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-100 border-2 border-cyan-600 rounded-full text-cyan-900 font-bold mb-8 shadow-lg">
              <Sparkles className="w-5 h-5" />
              Premium Hardware Collection
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black mb-8 bg-gradient-to-r from-slate-900 via-cyan-900 to-blue-900 text-transparent bg-clip-text">
              Mobile Intellect Hardware
            </h1>
            
            <p className="text-2xl text-slate-700 max-w-3xl mx-auto font-medium">
              World's first AI-powered laptops with local neural processing
            </p>
          </motion.div>
        </div>
      </section>

      {/* MITAI Laptop - Large Feature */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[600px] bg-slate-900">
                <ImageWithFallback 
                  src={mitaiLaptop1}
                  alt="MITAI Laptop - Mobile Intellect"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                
                {/* Rotating MITAI Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin-slow opacity-80 blur-md"></div>
                    <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 left-8 px-6 py-3 bg-cyan-500 text-slate-900 font-black text-sm rounded-full shadow-2xl">
                  WORLD'S FIRST
                </div>
                <div className="absolute bottom-8 left-8 px-6 py-4 bg-slate-900/80 backdrop-blur-xl border-2 border-cyan-500 rounded-2xl text-cyan-400 font-black text-3xl shadow-2xl">
                  €5,999
                </div>
              </div>

              {/* Content Side */}
              <div className="bg-white p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 border border-cyan-600 rounded-full text-cyan-900 font-bold text-sm mb-6 self-start">
                  <Cpu className="w-4 h-4" />
                  AI Powerhouse
                </div>
                
                <h2 className="text-5xl font-black text-slate-900 mb-6">
                  MITAI Laptop<br/>
                  <span className="text-cyan-600">Mobile Intellect</span>
                </h2>
                
                <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                  Experience the future of computing with the world's first local AI laptop. Built-in for local AI compactability, glowing MITAI electric logo, and advanced cooling system for sustained AI workloads.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Glowing MITAI Logo</h4>
                      <p className="text-slate-600">Animated electric logo with pulsing effects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Advanced Cooling</h4>
                      <p className="text-slate-600">Vapor chamber for sustained performance</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleBuyClick('MITAI Laptop Mobile Intellect', '€5,999')}
                  className="w-full py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Pre-order Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Laptop Specs Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-slate-900 mb-16 text-center"
          >
            Technical Specifications
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Processor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1760539165416-62fd69fcf02d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2Nlc3NvciUyMGNoaXB8ZW58MXx8fHwxNzY4NTY4NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Processor"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Cpu className="w-12 h-12 text-cyan-400 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Intel Core i9-14900HX</h3>
              <p className="text-slate-700 text-lg font-medium mb-2">24 cores, 32 threads</p>
              <p className="text-slate-600">Up to 5.8GHz boost clock for ultimate performance</p>
            </motion.div>

            {/* Graphics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1658673847785-08f1738116f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmQlMjBHUFV8ZW58MXx8fHwxNzY4NjM0NzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Graphics Card"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Monitor className="w-12 h-12 text-cyan-400 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">NVIDIA RTX 5090</h3>
              <p className="text-slate-700 text-lg font-medium mb-2">32GB GDDR7</p>
              <p className="text-slate-600">Next-gen ray tracing and AI acceleration</p>
            </motion.div>

            {/* Memory */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758577675588-c5bbbbbf8e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSQU0lMjBtZW1vcnklMjBtb2R1bGVzfGVufDF8fHx8MTc2ODY0MTI5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="RAM"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <MemoryStick className="w-12 h-12 text-cyan-400 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">64GB DDR5 RAM</h3>
              <p className="text-slate-700 text-lg font-medium mb-2">5600MHz</p>
              <p className="text-slate-600">Expandable to 96GB for heavy AI workloads</p>
            </motion.div>

            {/* Storage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1602526211878-5a18d013bc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTU0QlMjBzdG9yYWdlJTIwZHJpdmV8ZW58MXx8fHwxNzY4NjQxMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="SSD"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <HardDrive className="w-12 h-12 text-cyan-400 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">2TB NVMe SSD</h3>
              <p className="text-slate-700 text-lg font-medium mb-2">PCIe Gen 4</p>
              <p className="text-slate-600">7000MB/s read speeds for instant data access</p>
            </motion.div>

            {/* Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1761132228666-2975e19d3d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzY3JlZW4lMjBkaXNwbGF5fGVufDF8fHx8MTc2ODYzOTkyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Display"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Monitor className="w-12 h-12 text-cyan-400 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">16" QHD+ Display</h3>
              <p className="text-slate-700 text-lg font-medium mb-2">165Hz, 500 nits</p>
              <p className="text-slate-600">100% DCI-P3 color gamut for accurate colors</p>
            </motion.div>

            {/* Operating System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsYXB0b3AlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2ODY0MTI4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="MITAI OS"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Sparkles className="w-12 h-12 text-cyan-400 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">MITAI ARhont OS</h3>
              <p className="text-slate-700 text-lg font-medium mb-2">AI-First Operating System</p>
              <p className="text-slate-600">Pre-installed with local LLMs and AI tools</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Laptop Configurator Section */}
      <section id="configurator" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_60%)]\"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.15),transparent_60%)]\"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-100 to-purple-100 border-2 border-cyan-600 rounded-full text-cyan-900 font-bold mb-8 shadow-lg">
              <Sparkles className="w-5 h-5" />
              Build Your Perfect Machine
            </div>
            
            <h2 className="text-6xl font-black text-slate-900 mb-6">
              Configure Your <span className="bg-gradient-to-r from-cyan-600 to-purple-600 text-transparent bg-clip-text">MITAI Laptop</span>
            </h2>
            
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium">
              Customize every component to match your exact needs. Real-time pricing with premium components.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Options - Left 2 Columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* CPU Selection */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-cyan-200 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Cpu className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Processor</h3>
                      <p className="text-slate-600 font-medium">Choose your CPU power</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {cpuOptions.map((cpu) => (
                      <button
                        key={cpu.id}
                        onClick={() => setSelectedCPU(cpu.id)}
                        className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                          selectedCPU === cpu.id
                            ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-600 shadow-lg'
                            : 'bg-white border-slate-200 hover:border-cyan-400 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h4 className="text-lg font-black text-slate-900">{cpu.name}</h4>
                              {selectedCPU === cpu.id && (
                                <div className="w-6 h-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              )}
                            </div>
                            <p className="text-slate-600 text-sm mt-1">{cpu.specs}</p>
                          </div>
                          <div className="text-right ml-4">
                            {cpu.price === 0 ? (
                              <span className="text-sm font-bold text-cyan-600">INCLUDED</span>
                            ) : (
                              <span className={`text-lg font-black ${cpu.price > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                                {cpu.price > 0 ? '+' : ''}€{Math.abs(cpu.price)}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* GPU Selection */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Monitor className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Graphics Card</h3>
                      <p className="text-slate-600 font-medium">Select your GPU</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {gpuOptions.map((gpu) => (
                      <button
                        key={gpu.id}
                        onClick={() => setSelectedGPU(gpu.id)}
                        className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                          selectedGPU === gpu.id
                            ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-600 shadow-lg'
                            : 'bg-white border-slate-200 hover:border-purple-400 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h4 className="text-lg font-black text-slate-900">{gpu.name}</h4>
                              {selectedGPU === gpu.id && (
                                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              )}
                            </div>
                            <p className="text-slate-600 text-sm mt-1">{gpu.specs}</p>
                          </div>
                          <div className="text-right ml-4">
                            {gpu.price === 0 ? (
                              <span className="text-sm font-bold text-purple-600">INCLUDED</span>
                            ) : (
                              <span className={`text-lg font-black ${gpu.price > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                                {gpu.price > 0 ? '+' : ''}€{Math.abs(gpu.price)}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RAM Selection */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-200 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MemoryStick className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Memory (RAM)</h3>
                      <p className="text-slate-600 font-medium">Pick your RAM capacity</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    {ramOptions.map((ram) => (
                      <button
                        key={ram.id}
                        onClick={() => setSelectedRAM(ram.id)}
                        className={`p-5 rounded-2xl border-2 transition-all ${
                          selectedRAM === ram.id
                            ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-600 shadow-lg'
                            : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-md'
                        }`}
                      >
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <h4 className="text-xl font-black text-slate-900">{ram.name}</h4>
                            {selectedRAM === ram.id && (
                              <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-slate-600 text-xs mb-3">{ram.specs}</p>
                          {ram.price === 0 ? (
                            <span className="text-xs font-bold text-blue-600">INCLUDED</span>
                          ) : (
                            <span className={`text-sm font-black ${ram.price > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                              {ram.price > 0 ? '+' : ''}€{Math.abs(ram.price)}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Storage Selection */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-200 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <HardDrive className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Storage</h3>
                      <p className="text-slate-600 font-medium">Choose SSD capacity</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    {storageOptions.map((storage) => (
                      <button
                        key={storage.id}
                        onClick={() => setSelectedStorage(storage.id)}
                        className={`p-5 rounded-2xl border-2 transition-all ${
                          selectedStorage === storage.id
                            ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-600 shadow-lg'
                            : 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-md'
                        }`}
                      >
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <h4 className="text-xl font-black text-slate-900">{storage.name}</h4>
                            {selectedStorage === storage.id && (
                              <div className="w-5 h-5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-slate-600 text-xs mb-3">{storage.specs}</p>
                          {storage.price === 0 ? (
                            <span className="text-xs font-bold text-emerald-600">INCLUDED</span>
                          ) : (
                            <span className={`text-sm font-black ${storage.price > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                              {storage.price > 0 ? '+' : ''}€{Math.abs(storage.price)}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Display Selection */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-orange-200 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Monitor className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Display</h3>
                      <p className="text-slate-600 font-medium">Select your screen</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {displayOptions.map((display) => (
                      <button
                        key={display.id}
                        onClick={() => setSelectedDisplay(display.id)}
                        className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                          selectedDisplay === display.id
                            ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-600 shadow-lg'
                            : 'bg-white border-slate-200 hover:border-orange-400 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h4 className="text-lg font-black text-slate-900">{display.name}</h4>
                              {selectedDisplay === display.id && (
                                <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              )}
                            </div>
                            <p className="text-slate-600 text-sm mt-1">{display.specs}</p>
                          </div>
                          <div className="text-right ml-4">
                            {display.price === 0 ? (
                              <span className="text-sm font-bold text-orange-600">INCLUDED</span>
                            ) : (
                              <span className={`text-lg font-black ${display.price > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                                {display.price > 0 ? '+' : ''}€{Math.abs(display.price)}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Price Summary - Right Column (Sticky) */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border-2 border-cyan-500 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-full text-cyan-400 font-bold text-sm mb-6">
                      <Sparkles className="w-4 h-4" />
                      Your Configuration
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-2">MITAI Laptop</h3>
                    <p className="text-slate-400">Custom Build</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-1">
                        <Cpu className="w-5 h-5 text-cyan-400" />
                        <span className="text-xs text-slate-400 font-semibold">PROCESSOR</span>
                      </div>
                      <p className="text-white font-bold">{cpuOptions.find(c => c.id === selectedCPU)?.name}</p>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-1">
                        <Monitor className="w-5 h-5 text-purple-400" />
                        <span className="text-xs text-slate-400 font-semibold">GRAPHICS</span>
                      </div>
                      <p className="text-white font-bold">{gpuOptions.find(g => g.id === selectedGPU)?.name}</p>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-1">
                        <MemoryStick className="w-5 h-5 text-blue-400" />
                        <span className="text-xs text-slate-400 font-semibold">MEMORY</span>
                      </div>
                      <p className="text-white font-bold">{ramOptions.find(r => r.id === selectedRAM)?.name}</p>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-1">
                        <HardDrive className="w-5 h-5 text-emerald-400" />
                        <span className="text-xs text-slate-400 font-semibold">STORAGE</span>
                      </div>
                      <p className="text-white font-bold">{storageOptions.find(s => s.id === selectedStorage)?.name}</p>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-1">
                        <Monitor className="w-5 h-5 text-orange-400" />
                        <span className="text-xs text-slate-400 font-semibold">DISPLAY</span>
                      </div>
                      <p className="text-white font-bold">{displayOptions.find(d => d.id === selectedDisplay)?.name}</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-slate-700 pt-6 mb-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-slate-400 font-semibold">Base Price</span>
                      <span className="text-white font-bold text-lg">€{basePrice.toLocaleString()}</span>
                    </div>
                    
                    {calculateTotalPrice() !== basePrice && (
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-slate-400 font-semibold">Customization</span>
                        <span className={`font-bold text-lg ${
                          calculateTotalPrice() - basePrice > 0 ? 'text-orange-400' : 'text-green-400'
                        }`}>
                          {calculateTotalPrice() - basePrice > 0 ? '+' : ''}€{Math.abs(calculateTotalPrice() - basePrice).toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="p-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl">
                      <div className="flex items-baseline justify-between">
                        <span className="text-white font-bold text-lg">Total Price</span>
                        <span className="text-white font-black text-4xl">€{calculateTotalPrice().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBuyClick(`Custom MITAI Laptop`, `€${calculateTotalPrice().toLocaleString()}`)}
                    className="w-full py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Add to Cart
                  </button>
                  
                  <p className="text-slate-400 text-xs text-center mt-4">
                    Free shipping • 30-day returns • 2-year warranty
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ARhont 1 Pro - Horizontal Layout */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-600 rounded-full text-blue-900 font-bold text-sm mb-6">
                <Cpu className="w-4 h-4" />
                Professional Edition
              </div>
              
              <h2 className="text-5xl font-black text-slate-900 mb-6">
                ARhont 1 <span className="text-blue-600">Pro</span>
              </h2>
              
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                Designed for doctors, lawyers, and notaries. Local LLM workstation with MITAI OS pre-installed for complete offline AI capabilities.
              </p>

              <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-blue-200">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-black text-blue-600">€1,899</span>
                  <span className="text-slate-600 font-medium">starting price</span>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>AMD Ryzen 9 7945HX processor</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>64GB DDR5 RAM</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>RTX 4070 8GB Graphics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>2TB NVMe SSD</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleBuyClick('ARhont 1 Pro', '€1,899')}
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-6 h-6" />
                Order Now
              </button>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop"
                  alt="ARhont 1 Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 right-8 px-6 py-3 bg-blue-600 text-white font-black text-sm rounded-full shadow-2xl">
                  PRO EDITION
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transcendify - Horizontal Layout Reversed */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1728632286888-04c64f48e506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2NraW5nJTIwc3RhdGlvbiUyMGNvbXB1dGVyfGVufDF8fHx8MTc2ODMzNjQ3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Transcendify Docking Station"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 right-8 px-6 py-3 bg-emerald-500 text-slate-900 font-black text-sm rounded-full shadow-2xl">
                  TRADING PRO
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-600 rounded-full text-emerald-900 font-bold text-sm mb-6">
                <Zap className="w-4 h-4" />
                Trading Specialist
              </div>
              
              <h2 className="text-5xl font-black text-slate-900 mb-6">
                Transcendify<br/>
                <span className="text-emerald-600">Docking Station</span>
              </h2>
              
              <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                Mobile Intellect docking station with sophisticated AI model for real-time trading. Adaptive features for Forex, DAX, and Crypto markets with local processing.
              </p>

              <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-emerald-200">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-black text-emerald-600">€4,999</span>
                  <span className="text-slate-600 font-medium">professional setup</span>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Real-time trading AI model</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Forex, DAX & Crypto support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Local processing for security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Pre-installed trading scripts</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleBuyClick('Transcendify Docking Station', '€4,999')}
                className="w-full py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-6 h-6" />
                Pre-order Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Robotics Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500 rounded-full text-cyan-400 font-bold mb-8 shadow-lg">
              <Bot className="w-5 h-5" />
              Advanced Robotics Engineering
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-white">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Robotics</span>
            </h2>
            
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-medium">
              Intelligent machines powered by AI for the future of automation
            </p>
          </motion.div>

          {/* Robotics Grid - 4 Featured Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Humanoid Robot */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl transition-all h-full flex flex-col overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-500 bg-gradient-to-br from-cyan-600/10 to-blue-600/10">
                {/* Robot Image Background */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-40 transition-opacity"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1768400730875-d55297e10f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90JTIwYWl8ZW58MXx8fHwxNzY5MDMxMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                  }}
                />
                
                {/* Content with higher z-index */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 group-hover:shadow-2xl transition-all">
                    <Bot className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">
                    Humanoid Automation
                  </h3>

                  <p className="text-cyan-400 text-sm font-semibold mb-4">
                    Advanced Automation
                  </p>

                  <p className="text-slate-300 mb-6 flex-1">
                    Natural movement control with AI capabilities and human-like interaction for industrial automation.
                  </p>

                  <div className="space-y-2 mb-6">
                    {['Natural Movement', 'AI Vision System', 'Voice Interaction', 'Autonomous Navigation'].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                        <span className="text-sm text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-2xl font-black text-cyan-400 mb-4">From $125,000</div>
                  
                  <a 
                    href="#robotics"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronRight className="w-5 h-5" />
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Industrial Arm */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl transition-all h-full flex flex-col overflow-hidden border-2 border-purple-500/30 hover:border-purple-500 bg-gradient-to-br from-purple-600/10 to-pink-600/10">
                {/* Robot Image Background */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-40 transition-opacity"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1641311281574-98b9e7a76479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpYyUyMGFybXxlbnwxfHx8fDE3NjkwMDEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                  }}
                />
                
                {/* Content with higher z-index */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:shadow-2xl transition-all">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">
                    Industrial Arm Control
                  </h3>

                  <p className="text-purple-400 text-sm font-semibold mb-4">
                    Industrial Automation
                  </p>

                  <p className="text-slate-300 mb-6 flex-1">
                    Precision control with AI-powered object recognition and adaptive gripping for manufacturing.
                  </p>

                  <div className="space-y-2 mb-6">
                    {['6-Axis Movement', 'AI Object Detection', 'Precision Gripping', 'Safety Sensors'].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span className="text-sm text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-2xl font-black text-purple-400 mb-4">From $45,000</div>
                  
                  <a 
                    href="#robotics"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronRight className="w-5 h-5" />
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Vision System */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl transition-all h-full flex flex-col overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-500 bg-gradient-to-br from-cyan-600/10 to-blue-600/10">
                {/* Robot Image Background */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-40 transition-opacity"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1535378917042-10a22c95931a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNhbWVyYSUyMHZpc2lvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NjkwMDEzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                  }}
                />
                
                {/* Content with higher z-index */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50 group-hover:shadow-2xl transition-all">
                    <Eye className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">
                    Vision System
                  </h3>

                  <p className="text-cyan-400 text-sm font-semibold mb-4">
                    Computer Vision
                  </p>

                  <p className="text-slate-300 mb-6 flex-1">
                    Advanced AI vision for quality control, defect detection, and real-time monitoring in production.
                  </p>

                  <div className="space-y-2 mb-6">
                    {['Real-time Analysis', 'Defect Detection', 'Multi-Camera Support', 'Cloud Integration'].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                        <span className="text-sm text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-2xl font-black text-cyan-400 mb-4">From $15,000</div>
                  
                  <a 
                    href="#robotics"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronRight className="w-5 h-5" />
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Security Robot */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl transition-all h-full flex flex-col overflow-hidden border-2 border-red-500/30 hover:border-red-500 bg-gradient-to-br from-red-600/10 to-pink-600/10">
                {/* Robot Image Background */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-40 transition-opacity"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHJvYm90JTIwYXV0b25vbW91c3xlbnwxfHx8fDE3NjkwMDEzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                  }}
                />
                
                {/* Content with higher z-index */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/50 group-hover:shadow-2xl transition-all">
                    <Shield className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">
                    Security Robot
                  </h3>

                  <p className="text-red-400 text-sm font-semibold mb-4">
                    Security & Surveillance
                  </p>

                  <p className="text-slate-300 mb-6 flex-1">
                    Autonomous security with AI-powered threat detection, facial recognition, and 24/7 patrol capabilities.
                  </p>

                  <div className="space-y-2 mb-6">
                    {['Facial Recognition', 'Threat Detection', 'Night Vision', 'Alert System'].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-pink-600"></div>
                        <span className="text-sm text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-2xl font-black text-red-400 mb-4">From $55,000</div>
                  
                  <a 
                    href="#robotics"
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronRight className="w-5 h-5" />
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* View All Robotics CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a 
              href="#robotics"
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all"
            >
              <Bot className="w-6 h-6" />
              View All Robotics Products
              <ChevronRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-cyan-100 via-blue-100 to-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Ready to Experience<br/>
              <span className="text-cyan-600">AI-Powered Computing?</span>
            </h2>
            <p className="text-2xl text-slate-700 mb-12 font-medium">
              Join the revolution in local AI processing
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a 
                href="#contact"
                className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all"
              >
                Contact Sales
              </a>
              <a 
                href="#configurator"
                className="px-12 py-6 bg-white border-4 border-cyan-600 text-cyan-600 font-black text-xl rounded-2xl hover:bg-cyan-50 transition-all"
              >
                Configure Your Laptop
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}