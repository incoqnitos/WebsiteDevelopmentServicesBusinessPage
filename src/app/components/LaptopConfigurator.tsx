import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Config {
  cpu: string;
  gpu: string;
  ram: string;
  ssd: string;
  panel: string;
  basePrice: number;
  cpuPrice: number;
  gpuPrice: number;
  ramPrice: number;
  ssdPrice: number;
  panelPrice: number;
  packPrice: number;
  profile: string;
  vatIncluded: boolean;
  includeAssembly: boolean;
  termMonths: number;
  apr: number;
}

const CPU_OPTIONS = ['Intel Core i9 HX', 'Intel Core i7 HX', 'Intel Core Ultra 7 258V'];
const GPU_OPTIONS = ['RTX 5090', 'RTX 5080', 'RTX 5070 Ti', 'RTX 5070', 'Integrated'];
const RAM_OPTIONS = ['16GB DDR5', '32GB DDR5', '48GB DDR5', '64GB DDR5', '96GB DDR5', '128GB DDR5', '192GB DDR5', '16GB LPDDR5x', '32GB LPDDR5x', '8GB DDR4', '16GB DDR4', '32GB DDR4', '64GB DDR4'];
const SSD_OPTIONS = ['1TB NVMe Gen4', '2TB NVMe Gen4', '4TB NVMe Gen4'];
const PANEL_OPTIONS = ['14" FHD+ 16:10', '15.6" QHD', '16" QHD+ 16:10', '17.3" QHD', '18.0" UHD+ 16:10'];

const PACKS = [
  { key: 'PrelearnIntellect', price: 4500, label: 'Biggest LLM — Prelearning Intellect (Installment)', desc: 'Maximum model capacity with prelearning intellect' },
  { key: 'QuantumDestinationPro', price: 2500, label: 'Quantum Destination Pro (Installment)', desc: 'Mobile-focused professional profile' }
];

const BEST_PRICES = {
  cpu: {
    'Intel Core i9 HX': 950,
    'Intel Core i7 HX': 750,
    'Intel Core Ultra 7 258V': 700
  },
  gpu: {
    'RTX 5090': 2549,
    'RTX 5080': 1119,
    'RTX 5070 Ti': 879,
    'RTX 5070': 619,
    'Integrated': 0
  },
  ram: {
    '16GB DDR5': 67,
    '32GB DDR5': 93.88,
    '48GB DDR5': 149,
    '64GB DDR5': 201.14,
    '96GB DDR5': 344.44,
    '128GB DDR5': 599,
    '192GB DDR5': 899,
    '16GB LPDDR5x': 89,
    '32GB LPDDR5x': 159,
    '8GB DDR4': 31.40,
    '16GB DDR4': 69.90,
    '32GB DDR4': 131.10,
    '64GB DDR4': 263.72
  },
  ssd: {
    '1TB NVMe Gen4': 95.00,
    '2TB NVMe Gen4': 101.90,
    '4TB NVMe Gen4': 219.70
  },
  panel: {
    '14" FHD+ 16:10': 70,
    '15.6" QHD': 122,
    '16" QHD+ 16:10': 110,
    '17.3" QHD': 110,
    '18.0" UHD+ 16:10': 0
  }
};

export default function LaptopConfigurator() {
  const [config, setConfig] = useState<Config>({
    cpu: CPU_OPTIONS[0],
    gpu: GPU_OPTIONS[0],
    ram: RAM_OPTIONS[0],
    ssd: SSD_OPTIONS[0],
    panel: PANEL_OPTIONS[0],
    basePrice: 0,
    cpuPrice: BEST_PRICES.cpu[CPU_OPTIONS[0] as keyof typeof BEST_PRICES.cpu],
    gpuPrice: BEST_PRICES.gpu[GPU_OPTIONS[0] as keyof typeof BEST_PRICES.gpu],
    ramPrice: BEST_PRICES.ram[RAM_OPTIONS[0] as keyof typeof BEST_PRICES.ram],
    ssdPrice: BEST_PRICES.ssd[SSD_OPTIONS[0] as keyof typeof BEST_PRICES.ssd],
    panelPrice: BEST_PRICES.panel[PANEL_OPTIONS[0] as keyof typeof BEST_PRICES.panel],
    packPrice: PACKS[0].price,
    profile: PACKS[0].key,
    vatIncluded: true,
    includeAssembly: true,
    termMonths: 24,
    apr: 0
  });

  const [testResults, setTestResults] = useState<string>('');
  const [showTests, setShowTests] = useState(false);

  const getCheapestPrice = (category: keyof typeof BEST_PRICES, key: string): number => {
    const table = BEST_PRICES[category] as Record<string, number>;
    return table[key] ?? 0;
  };

  const getRandomPrice = (basePrice: number): number => {
    const factor = 0.9 + Math.random() * 0.2;
    return Math.round(basePrice * factor);
  };

  const urlGeizhals = (query: string) => `https://geizhals.eu/?fs=${encodeURIComponent(query)}`;
  const urlAmazon = (query: string) => `https://www.amazon.de/s?k=${encodeURIComponent(query)}`;

  const calculateMonthly = (total: number, aprPct: number, months: number): number => {
    const n = Math.max(1, months);
    const r = aprPct / 100 / 12;
    if (r <= 0) return total / n;
    const pow = Math.pow(1 + r, n);
    return total * (r * pow) / (pow - 1);
  };

  const calculateTotals = () => {
    const assemblyFee = config.includeAssembly ? 199 : 0;
    const subtotal = config.basePrice + config.cpuPrice + config.gpuPrice + 
                     config.ramPrice + config.ssdPrice + config.panelPrice + 
                     config.packPrice + assemblyFee;
    const vat = config.vatIncluded ? subtotal * 0.19 : 0;
    const grand = subtotal + vat;
    const endPrice = Math.max(2000, grand);
    const monthly = calculateMonthly(endPrice, config.apr, config.termMonths);
    
    return { subtotal, vat, grand, endPrice, monthly, minApplied: endPrice > grand };
  };

  const totals = calculateTotals();

  const setRealPrice = (category: 'cpu' | 'gpu' | 'ram' | 'ssd' | 'panel') => {
    const key = config[category];
    const price = getCheapestPrice(category, key);
    setConfig({ ...config, [`${category}Price`]: price });
  };

  const setRandomPrice = (category: 'cpu' | 'gpu' | 'ram' | 'ssd' | 'panel') => {
    const key = config[category];
    const basePrice = getCheapestPrice(category, key) || 100;
    const price = getRandomPrice(basePrice);
    setConfig({ ...config, [`${category}Price`]: price });
  };

  const fillBestPrices = () => {
    setConfig({
      ...config,
      cpuPrice: getCheapestPrice('cpu', config.cpu),
      gpuPrice: getCheapestPrice('gpu', config.gpu),
      ramPrice: getCheapestPrice('ram', config.ram),
      ssdPrice: getCheapestPrice('ssd', config.ssd),
      panelPrice: getCheapestPrice('panel', config.panel)
    });
  };

  const randomizeBuild = () => {
    const random = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
    const newCpu = random(CPU_OPTIONS);
    const newGpu = random(GPU_OPTIONS);
    const newRam = random(RAM_OPTIONS);
    const newSsd = random(SSD_OPTIONS);
    const newPanel = random(PANEL_OPTIONS);
    
    setConfig({
      ...config,
      cpu: newCpu,
      gpu: newGpu,
      ram: newRam,
      ssd: newSsd,
      panel: newPanel,
      cpuPrice: getCheapestPrice('cpu', newCpu),
      gpuPrice: getCheapestPrice('gpu', newGpu),
      ramPrice: getCheapestPrice('ram', newRam),
      ssdPrice: getCheapestPrice('ssd', newSsd),
      panelPrice: getCheapestPrice('panel', newPanel)
    });
  };

  const saveConfig = () => {
    localStorage.setItem('mitaiConfigurator', JSON.stringify(config));
    alert('Configuration saved locally!');
  };

  const loadConfig = () => {
    const saved = localStorage.getItem('mitaiConfigurator');
    if (saved) {
      setConfig(JSON.parse(saved));
      alert('Configuration loaded!');
    } else {
      alert('No saved configuration found.');
    }
  };

  const copyJSON = () => {
    const data = { ...config, totals };
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    alert('Configuration copied as JSON!');
  };

  const searchAll = () => {
    const links = [
      urlGeizhals(config.cpu), urlAmazon(config.cpu),
      urlGeizhals(config.gpu), urlAmazon(config.gpu),
      urlGeizhals(config.ram), urlAmazon(config.ram),
      urlGeizhals(config.ssd), urlAmazon(config.ssd)
    ];
    links.forEach((url, i) => {
      setTimeout(() => window.open(url, '_blank', 'noopener'), i * 150);
    });
  };

  const runTests = () => {
    const results: string[] = [];
    const assert = (name: string, condition: boolean) => {
      results.push(`${condition ? '✅' : '❌'} ${name}`);
    };

    assert('CPU options exist', CPU_OPTIONS.length > 0);
    assert('GPU options exist', GPU_OPTIONS.length > 0);
    assert('Minimum end price is €2,000', totals.endPrice >= 2000);
    assert('VAT calculation works', config.vatIncluded ? totals.vat > 0 : totals.vat === 0);
    assert('Assembly fee applied', config.includeAssembly ? totals.subtotal >= 199 : true);
    assert('Monthly payment calculated', totals.monthly > 0);
    assert('Best prices database valid', BEST_PRICES.cpu['Intel Core i9 HX'] === 950);
    assert('Profile system works', PACKS.length === 2);
    assert('CPU i9 HX exists', CPU_OPTIONS.includes('Intel Core i9 HX'));
    assert('RTX 5090 exists', GPU_OPTIONS.includes('RTX 5090'));

    setTestResults(results.join('\n'));
  };

  const fmt = (n: number) => `€${n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="min-h-screen py-12 px-6" style={{
      background: 'linear-gradient(to bottom, rgba(240, 249, 255, 0.9) 0%, rgba(224, 242, 254, 0.95) 50%, rgba(240, 249, 255, 0.9) 100%)',
      color: 'rgb(15, 23, 42)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Header with Animated Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-8 mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{
              background: 'rgba(6, 182, 212, 0.2)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              color: 'rgb(6, 95, 70)',
              textShadow: '0 0 15px rgba(6, 182, 212, 0.4)'
            }}>
              MITAI — Configurator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold" style={{
              color: 'rgb(15, 23, 42)',
              textShadow: '0 0 25px rgba(6, 182, 212, 0.3)'
            }}>
              Configure Your Device
            </h1>
          </div>
          
          <p className="mb-4 text-sm" style={{
            color: 'rgb(30, 41, 59)',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
          }}>
            Self-build with pro LLM options. Minimum retail end price enforced: €2,000.
          </p>
          
          <div className="flex gap-3 flex-wrap mb-6">
            <div className="px-4 py-2 rounded-lg text-sm" style={{
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'rgb(15, 23, 42)'
            }}>Installment-ready</div>
            <div className="px-4 py-2 rounded-lg text-sm" style={{
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'rgb(15, 23, 42)'
            }}>Prelearning Intellect</div>
            <div className="px-4 py-2 rounded-lg text-sm" style={{
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'rgb(15, 23, 42)'
            }}>Quantum Destination Pro</div>
          </div>

          {/* Animated MITAI Logo SVG */}
          <div className="max-w-2xl mx-auto p-4 rounded-2xl" style={{
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(6, 182, 212, 0.3)'
          }}>
            <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <defs>
                <linearGradient id="electricMIT" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00ffff"/>
                  <stop offset="50%" stopColor="#0088ff"/>
                  <stop offset="100%" stopColor="#ffffff"/>
                </linearGradient>
                <linearGradient id="electricAI" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff00ff"/>
                  <stop offset="50%" stopColor="#ff4444"/>
                  <stop offset="100%" stopColor="#ffffff"/>
                </linearGradient>
                <linearGradient id="electricRing1">
                  <stop offset="0%" stopColor="#00ffff"/>
                  <stop offset="50%" stopColor="#ffffff" stopOpacity=".9"/>
                  <stop offset="100%" stopColor="#0088ff"/>
                </linearGradient>
                <linearGradient id="electricRing2">
                  <stop offset="0%" stopColor="#ff00ff"/>
                  <stop offset="50%" stopColor="#ffffff" stopOpacity=".9"/>
                  <stop offset="100%" stopColor="#ff4444"/>
                </linearGradient>
                <linearGradient id="electricRing3">
                  <stop offset="0%" stopColor="#88ff88"/>
                  <stop offset="50%" stopColor="#ffffff" stopOpacity=".9"/>
                  <stop offset="100%" stopColor="#00ff00"/>
                </linearGradient>
                <filter id="electricGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="superGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <g transform="translate(400,300)">
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite"/>
                  <ellipse cx="0" cy="0" rx="140" ry="60" fill="none" stroke="url(#electricRing1)" strokeWidth="10" filter="url(#electricGlow)"/>
                  <ellipse cx="0" cy="0" rx="140" ry="60" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="3"/>
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2s" repeatCount="indefinite"/>
                    <circle cx="140" cy="0" r="10" fill="#00ffff" filter="url(#superGlow)"/>
                    <circle cx="140" cy="0" r="6" fill="#ffffff"/>
                  </g>
                </g>
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="8s" repeatCount="indefinite"/>
                  <ellipse cx="0" cy="0" rx="180" ry="80" fill="none" stroke="url(#electricRing2)" strokeWidth="10" filter="url(#electricGlow)"/>
                  <ellipse cx="0" cy="0" rx="180" ry="80" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3"/>
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="3s" repeatCount="indefinite"/>
                    <circle cx="180" cy="0" r="10" fill="#ff00ff" filter="url(#superGlow)"/>
                    <circle cx="180" cy="0" r="6" fill="#ffffff"/>
                  </g>
                </g>
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite"/>
                  <ellipse cx="0" cy="0" rx="220" ry="100" fill="none" stroke="url(#electricRing3)" strokeWidth="10" filter="url(#electricGlow)"/>
                  <ellipse cx="0" cy="0" rx="220" ry="100" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3"/>
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/>
                    <circle cx="220" cy="0" r="10" fill="#88ff88" filter="url(#superGlow)"/>
                    <circle cx="220" cy="0" r="6" fill="#ffffff"/>
                  </g>
                </g>
                <text x="0" y="18" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="68" fontWeight="900" filter="url(#superGlow)">
                  <tspan fill="url(#electricMIT)">MIT</tspan>
                  <tspan fill="url(#electricAI)">AI</tspan>
                </text>
              </g>
              <text x="400" y="450" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="21" fontWeight="bold" fill="#ffffff">
                MOBILE INTELLIGENCE TECHNOLOGIES
              </text>
              <text x="400" y="482" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#ff4444" filter="url(#electricGlow)">
                1985
              </text>
              <text x="400" y="520" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#cccccc">
                Ltd. All Rights Reserved
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-6">
          {/* Configuration Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#0f1726] border border-[#1c2a47] rounded-2xl p-6 space-y-6"
          >
            <h2 className="text-2xl font-bold mb-2">Build & Price — MITAI</h2>
            <p className="text-sm text-[#9fb3d9] mb-6">
              Random or cheapest price per part. Click <em>Real</em> for the cheapest known price, or <em>Random</em> for a plausible offer.
            </p>

            {/* CPU */}
            <ConfigRow
              label="CPU"
              value={config.cpu}
              options={CPU_OPTIONS}
              price={config.cpuPrice}
              realPrice={getCheapestPrice('cpu', config.cpu)}
              randomPrice={getRandomPrice(getCheapestPrice('cpu', config.cpu) || 100)}
              geizhalsUrl={urlGeizhals(config.cpu)}
              amazonUrl={urlAmazon(config.cpu)}
              onSelectChange={(val) => setConfig({ ...config, cpu: val, cpuPrice: getCheapestPrice('cpu', val) })}
              onPriceChange={(val) => setConfig({ ...config, cpuPrice: val })}
              onRealClick={() => setRealPrice('cpu')}
              onRandomClick={() => setRandomPrice('cpu')}
            />

            {/* GPU */}
            <ConfigRow
              label="GPU"
              value={config.gpu}
              options={GPU_OPTIONS}
              price={config.gpuPrice}
              realPrice={getCheapestPrice('gpu', config.gpu)}
              randomPrice={getRandomPrice(getCheapestPrice('gpu', config.gpu) || 100)}
              geizhalsUrl={urlGeizhals(config.gpu)}
              amazonUrl={urlAmazon(config.gpu)}
              onSelectChange={(val) => setConfig({ ...config, gpu: val, gpuPrice: getCheapestPrice('gpu', val) })}
              onPriceChange={(val) => setConfig({ ...config, gpuPrice: val })}
              onRealClick={() => setRealPrice('gpu')}
              onRandomClick={() => setRandomPrice('gpu')}
            />

            {/* RAM */}
            <ConfigRow
              label="Memory"
              value={config.ram}
              options={RAM_OPTIONS}
              price={config.ramPrice}
              realPrice={getCheapestPrice('ram', config.ram)}
              randomPrice={getRandomPrice(getCheapestPrice('ram', config.ram) || 100)}
              geizhalsUrl={urlGeizhals(config.ram)}
              amazonUrl={urlAmazon(config.ram)}
              onSelectChange={(val) => setConfig({ ...config, ram: val, ramPrice: getCheapestPrice('ram', val) })}
              onPriceChange={(val) => setConfig({ ...config, ramPrice: val })}
              onRealClick={() => setRealPrice('ram')}
              onRandomClick={() => setRandomPrice('ram')}
            />

            {/* SSD */}
            <ConfigRow
              label="Storage"
              value={config.ssd}
              options={SSD_OPTIONS}
              price={config.ssdPrice}
              realPrice={getCheapestPrice('ssd', config.ssd)}
              randomPrice={getRandomPrice(getCheapestPrice('ssd', config.ssd) || 100)}
              geizhalsUrl={urlGeizhals(config.ssd)}
              amazonUrl={urlAmazon(config.ssd)}
              onSelectChange={(val) => setConfig({ ...config, ssd: val, ssdPrice: getCheapestPrice('ssd', val) })}
              onPriceChange={(val) => setConfig({ ...config, ssdPrice: val })}
              onRealClick={() => setRealPrice('ssd')}
              onRandomClick={() => setRandomPrice('ssd')}
            />

            {/* Panel */}
            <ConfigRow
              label="Display"
              value={config.panel}
              options={PANEL_OPTIONS}
              price={config.panelPrice}
              realPrice={getCheapestPrice('panel', config.panel)}
              randomPrice={getRandomPrice(getCheapestPrice('panel', config.panel) || 100)}
              geizhalsUrl={urlGeizhals(config.panel)}
              amazonUrl={urlAmazon(config.panel)}
              onSelectChange={(val) => setConfig({ ...config, panel: val, panelPrice: getCheapestPrice('panel', val) })}
              onPriceChange={(val) => setConfig({ ...config, panelPrice: val })}
              onRealClick={() => setRealPrice('panel')}
              onRandomClick={() => setRandomPrice('panel')}
            />

            {/* Base Price */}
            <div className="grid md:grid-cols-[160px,1fr] gap-4 items-center">
              <label className="text-sm text-[#9fb3d9]">Base chassis price</label>
              <input
                type="number"
                value={config.basePrice}
                onChange={(e) => setConfig({ ...config, basePrice: Number(e.target.value) || 0 })}
                className="w-full px-4 py-2 bg-[#0c1528] border border-[#1c2a47] rounded-lg text-white"
                placeholder="If applicable"
              />
            </div>

            {/* Profile Packs */}
            <div className="grid md:grid-cols-[160px,1fr,120px] gap-4 items-center">
              <label className="text-sm text-[#9fb3d9]">Profile (Installment-ready)</label>
              <div className="flex gap-3 flex-wrap">
                {PACKS.map((pack) => (
                  <button
                    key={pack.key}
                    onClick={() => setConfig({ ...config, profile: pack.key, packPrice: pack.price })}
                    className={`px-4 py-2 rounded-full border transition-all text-sm ${
                      config.profile === pack.key
                        ? 'border-[#7cf9ff] outline outline-2 outline-[#7cf9ff] bg-[#15213a]'
                        : 'border-[#1c2a47] bg-[#15213a] hover:border-[#7cf9ff]'
                    }`}
                    title={pack.desc}
                  >
                    {pack.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span>€</span>
                <input
                  type="number"
                  value={config.packPrice}
                  onChange={(e) => setConfig({ ...config, packPrice: Number(e.target.value) || 0 })}
                  className="w-full px-4 py-2 bg-[#0c1528] border border-[#1c2a47] rounded-lg text-white text-right"
                />
              </div>
            </div>

            {/* VAT & Service */}
            <div className="grid md:grid-cols-[160px,1fr] gap-4">
              <label className="text-sm text-[#9fb3d9]">VAT & service</label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-2 px-4 py-2 bg-[#15213a] border border-[#1c2a47] rounded-full text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.vatIncluded}
                    onChange={(e) => setConfig({ ...config, vatIncluded: e.target.checked })}
                  />
                  Prices incl. VAT (19% DE)
                </label>
                <label className="flex items-center gap-2 px-4 py-2 bg-[#15213a] border border-[#1c2a47] rounded-full text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.includeAssembly}
                    onChange={(e) => setConfig({ ...config, includeAssembly: e.target.checked })}
                  />
                  Include assembly/service (€199)
                </label>
              </div>
            </div>

            {/* Installment Estimate */}
            <div className="grid md:grid-cols-[160px,1fr] gap-4">
              <label className="text-sm text-[#9fb3d9]">Installment estimate</label>
              <div className="flex gap-3 flex-wrap items-center">
                <select
                  value={config.termMonths}
                  onChange={(e) => setConfig({ ...config, termMonths: Number(e.target.value) })}
                  className="px-4 py-2 bg-[#0c1528] border border-[#1c2a47] rounded-lg text-white"
                >
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                </select>
                <input
                  type="number"
                  value={config.apr}
                  onChange={(e) => setConfig({ ...config, apr: Number(e.target.value) || 0 })}
                  placeholder="APR %"
                  className="w-32 px-4 py-2 bg-[#0c1528] border border-[#1c2a47] rounded-lg text-white"
                />
                <div className="px-4 py-2 bg-[#15213a] border border-[#1c2a47] rounded-full text-sm">
                  Monthly ≈ <strong>{fmt(totals.monthly)}</strong>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap pt-4">
              <button onClick={fillBestPrices} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                Fill Best Prices (DE)
              </button>
              <button onClick={randomizeBuild} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                Randomize Build
              </button>
              <button onClick={searchAll} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                Search All (Geizhals + Amazon DE)
              </button>
              <button onClick={saveConfig} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                Save
              </button>
              <button onClick={loadConfig} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                Load
              </button>
              <button onClick={copyJSON} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                Copy Quote (JSON)
              </button>
              <button onClick={() => window.print()} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                Print / PDF
              </button>
              <button onClick={() => window.location.reload()} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                Reset
              </button>
            </div>

            {/* Self Tests */}
            <details className="pt-4">
              <summary className="cursor-pointer text-[#7cf9ff] hover:underline">Run self-tests</summary>
              <div className="mt-4 space-y-3">
                <button onClick={runTests} className="px-4 py-2 bg-gradient-to-b from-[#162240] to-[#0e1830] border border-[#1c2a47] rounded-xl hover:bg-slate-700 transition-all">
                  Run Tests
                </button>
                {testResults && (
                  <pre className="bg-[#0b1426] border border-[#1c2a47] p-4 rounded-lg whitespace-pre-wrap text-sm">
                    {testResults}
                  </pre>
                )}
              </div>
            </details>
          </motion.div>

          {/* Summary Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#0f1726] border border-[#1c2a47] rounded-2xl p-6 sticky top-28 self-start"
          >
            <h3 className="text-2xl font-bold mb-2">Totals</h3>
            <p className="text-xs text-[#9fb3d9] mb-4">Auto-updates as you type</p>

            <div className="text-4xl font-bold mb-1">{fmt(totals.subtotal)}</div>
            <div className="text-xs text-[#9fb3d9] mb-4">Subtotal (excl. VAT)</div>

            <div className="mb-4">VAT (19%): {fmt(totals.vat)}</div>

            <div className="text-5xl font-bold mb-1">{fmt(totals.grand)}</div>
            <div className="text-xs text-[#9fb3d9] mb-6">Grand total</div>

            <div className="p-6 border border-[#1c2a47] rounded-2xl bg-white/5 mb-6">
              <div className="text-xs text-[#9fb3d9] mb-2">Retail Product End Price (min €2,000)</div>
              <div className="text-5xl font-bold mb-2">{fmt(totals.endPrice)}</div>
              {totals.minApplied && (
                <div className="text-xs text-[#ffd166]">Minimum applied to reach €2,000.</div>
              )}
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#9fb3d9] mb-3">Build summary</h4>
              <pre className="bg-[#0b1426] border border-[#1c2a47] p-4 rounded-lg text-xs whitespace-pre-wrap max-h-96 overflow-auto">
                {JSON.stringify({ ...config, totals }, null, 2)}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-[#9fb3d9] mt-12">
          © MITAI — Configurator. Use "Print / PDF" to export quotes. Geizhals & Amazon DE links included for each part.
        </footer>
      </div>
    </div>
  );
}

interface ConfigRowProps {
  label: string;
  value: string;
  options: string[];
  price: number;
  realPrice: number;
  randomPrice: number;
  geizhalsUrl: string;
  amazonUrl: string;
  onSelectChange: (value: string) => void;
  onPriceChange: (value: number) => void;
  onRealClick: () => void;
  onRandomClick: () => void;
}

function ConfigRow({
  label,
  value,
  options,
  price,
  realPrice,
  randomPrice,
  geizhalsUrl,
  amazonUrl,
  onSelectChange,
  onPriceChange,
  onRealClick,
  onRandomClick
}: ConfigRowProps) {
  const fmt = (n: number) => `€${n.toFixed(0)}`;

  return (
    <div className="grid md:grid-cols-[160px,1fr,1fr] gap-4 items-center">
      <label className="text-sm text-[#9fb3d9]">{label}</label>
      
      <div className="flex gap-2 flex-wrap">
        <select
          value={value}
          onChange={(e) => onSelectChange(e.target.value)}
          className="flex-1 min-w-[200px] px-4 py-2 bg-[#0c1528] border border-[#1c2a47] rounded-lg text-white"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <a
          href={geizhalsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-[#15213a] border border-[#1c2a47] rounded-full text-xs hover:bg-[#172446] transition-colors"
        >
          Geizhals
        </a>
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-[#15213a] border border-[#1c2a47] rounded-full text-xs hover:bg-[#172446] transition-colors"
        >
          Amazon DE
        </a>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-white">€</span>
        <input
          type="number"
          value={price}
          onChange={(e) => onPriceChange(Number(e.target.value) || 0)}
          className="w-32 px-4 py-2 bg-[#0c1528] border border-[#1c2a47] rounded-lg text-white text-right"
        />
        <button
          onClick={onRealClick}
          className="px-2 py-1 bg-[#15213a] border border-[#1c2a47] rounded-lg text-xs hover:bg-[#172446] transition-colors"
          title={`Real price: ${fmt(realPrice)}`}
        >
          Real ({fmt(realPrice)})
        </button>
        <button
          onClick={onRandomClick}
          className="px-2 py-1 bg-[#15213a] border border-[#1c2a47] rounded-lg text-xs hover:bg-[#172446] transition-colors"
          title={`Random price around ${fmt(randomPrice)}`}
        >
          Random ({fmt(randomPrice)})
        </button>
      </div>
    </div>
  );
}