/**
 * Mock API for MITAI Investors Hub
 */

export type InvestorProduct = {
  id: string;
  name: string;
  kind: 'product' | 'research';
  stage: string;
  category: string;
  blurb: string;
  description: string;
  valuation: number;
  min: number;
  max: number;
  roi5y: number;
  tags: string[];
  kpis: Record<string, any>;
  spark: number[];
};

const PRODUCTS: InvestorProduct[] = [
  {
    id: "digitaldoctor",
    name: "DigitalDoctor",
    kind: "product",
    stage: "Growth",
    category: "Healthcare",
    blurb: "AI-powered medical triage and diagnosis platform serving 120K+ users across Europe.",
    description: "AI triage, diagnosis probabilities, prescription workflow, telemedicine & Apotheken links.",
    valuation: 5_000_000,
    min: 1000,
    max: 200000,
    roi5y: 3.2,
    tags: ["Healthcare", "SaaS", "B2B/B2C"],
    kpis: { users: 120000, arr: 500_000, accuracy: 0.975, mrr: 41667, churn: 0.024 },
    spark: [6, 8, 9, 11, 15, 18, 24, 29, 35, 41],
  },
  {
    id: "transcendify",
    name: "Transcendify (TFI)",
    kind: "product",
    stage: "Scale-up",
    category: "Fintech",
    blurb: "Tokenized leasing platform with €12M+ total payment volume and 380 active clients.",
    description: "Tokenized leasing & trading desk; credits (TFI) for operations, risk-managed agents.",
    valuation: 8_500_000,
    min: 1000,
    max: 150000,
    roi5y: 3.5,
    tags: ["Fintech", "Credits", "B2B2C"],
    kpis: { tpv: 12_000_000, nps: 62, clients: 380, mrr: 85000, churn: 0.018 },
    spark: [5, 6, 7, 10, 12, 16, 19, 25, 28, 33],
  },
  {
    id: "mitai-os",
    name: "Mobile Intellect OS",
    kind: "product",
    stage: "Production",
    category: "Platform",
    blurb: "Enterprise-grade AI operating system with 8,000 sealed deployments and 91% retention.",
    description: "Device OS with agentic workflows, voice, offline LLM; sealed deployments.",
    valuation: 15_000_000,
    min: 5000,
    max: 250000,
    roi5y: 2.7,
    tags: ["OS", "Edge", "Enterprise"],
    kpis: { devices: 8000, arpu: 10.8, retention: 0.91, mrr: 86400, seats: 8000 },
    spark: [2, 3, 4, 6, 9, 12, 14, 18, 20, 24],
  },
  {
    id: "troc-lab",
    name: "TROC Lab Interface",
    kind: "product",
    stage: "Beta",
    category: "Research",
    blurb: "Advanced research platform with 5,100+ experiments and 1,100 datasets analyzed.",
    description: "Transparent Optimizing Constants (TOC/TROC) lab: ingestion, KPI grid, audit.",
    valuation: 3_200_000,
    min: 2000,
    max: 120000,
    roi5y: 3.1,
    tags: ["Science", "KPI", "Audit"],
    kpis: { experiments: 5100, kpi97: 0.74, datasets: 1100, mrr: 28000, clients: 45 },
    spark: [3, 5, 7, 11, 13, 17, 22, 26, 31, 37],
  },
  {
    id: "chatmitai",
    name: "ChatMITAI – Secure Messenger",
    kind: "product",
    stage: "Growth",
    category: "Communication",
    blurb: "Enterprise secure messaging with 420 organizations and 26K daily active users.",
    description: "Agents + messenger for professionals; secure doc exchange; voice/video; audits.",
    valuation: 4_500_000,
    min: 1000,
    max: 100000,
    roi5y: 3.0,
    tags: ["Comms", "Security", "Agents"],
    kpis: { orgs: 420, dau: 26000, uptime: 0.999, mrr: 52000, churn: 0.019 },
    spark: [4, 6, 8, 12, 14, 17, 21, 27, 30, 36],
  },
  {
    id: "ordermitai",
    name: "OrderMITAI – Enterprise Order Management",
    kind: "product",
    stage: "Seed",
    category: "Business Operations",
    blurb: "Real-time order management for enterprises with automated fulfillment and AI insights.",
    description: "Complete order lifecycle management; inventory sync; automated workflows; predictive analytics; customer portal.",
    valuation: 1_800_000,
    min: 500,
    max: 50000,
    roi5y: 4.2,
    tags: ["Orders", "Automation", "Analytics"],
    kpis: { orders: 12500, clients: 85, automation: 0.78, satisfaction: 0.94, avgOrderValue: 1850 },
    spark: [2, 3, 4, 6, 9, 11, 15, 19, 24, 31],
  },
  {
    id: "egov",
    name: "Digital Government",
    kind: "product",
    stage: "Enterprise",
    category: "GovTech",
    blurb: "MiCA-compliant government platform achieving 65% cost savings across 3 major contracts.",
    description: "MiCA-ready records, workflows, citizen services, verified doctors & pharmacies.",
    valuation: 25_000_000,
    min: 100000,
    max: 1000000,
    roi5y: 2.2,
    tags: ["GovTech", "B2G", "Long-term"],
    kpis: { savings: 0.65, deals: 3, arr: 3_600_000, mrr: 300000, contracts: 3 },
    spark: [3, 4, 5, 6, 7, 8, 9, 10, 13, 16],
  },
  {
    id: "arhont1",
    name: "ARhont 1",
    kind: "product",
    stage: "Production",
    category: "Hardware",
    blurb: "Premium AI workstation line with 42% gross margin and 5,000 units deployed.",
    description: "Pravets-class workstation/laptop line for local LLMs with MITAI OS.",
    valuation: 12_000_000,
    min: 5000,
    max: 250000,
    roi5y: 2.5,
    tags: ["Hardware", "Edge", "Premium"],
    kpis: { gm: 0.42, bom: 950, units: 5000, revenue: 8_500_000, avgPrice: 1700 },
    spark: [2, 3, 4, 6, 9, 12, 14, 18, 20, 24],
  },
  {
    id: "mitai-browser",
    name: "MITAI Browser",
    kind: "product",
    stage: "Beta",
    category: "Software",
    blurb: "Voice-first autonomous browser with 62K weekly active users and 1.2M sessions.",
    description: "Autonomous, voice-first agentic browser with secure workflows and sandbox.",
    valuation: 2_800_000,
    min: 1000,
    max: 100000,
    roi5y: 2.9,
    tags: ["Browser", "Agentic", "Voice"],
    kpis: { weeklyActive: 62000, sessions: 1_200_000, retention: 0.68, avgSessionMin: 18 },
    spark: [4, 5, 7, 8, 11, 15, 18, 21, 26, 30],
  },
  {
    id: "interlect",
    name: "Interlect Network",
    kind: "research",
    stage: "R&D",
    category: "Infrastructure",
    blurb: "Next-generation AI fabric with 240 nodes, 19K links, and 14ms average latency.",
    description: "Closed-grid AI fabric (\"God's Touch\"): new Internet-like layer for agent comms.",
    valuation: 18_000_000,
    min: 5000,
    max: 300000,
    roi5y: 3.8,
    tags: ["R&D", "Infra", "Closed-grid"],
    kpis: { nodes: 240, links: 19000, latencyMs: 14, throughput: 850, uptime: 0.998 },
    spark: [1, 2, 3, 5, 8, 13, 21, 34, 33, 40],
  },
];

const RESEARCH: InvestorProduct[] = [
  {
    id: "linguistic-os",
    name: "Linguistic Operating System",
    kind: "research",
    stage: "Early Research",
    category: "AI Research",
    blurb: "Foundational research into language-native operating systems for AGI applications.",
    description: "Research into building OS primitives based on linguistic models rather than traditional computing paradigms.",
    valuation: 2_000_000,
    min: 10000,
    max: 500000,
    roi5y: 4.5,
    tags: ["Research", "AGI", "Linguistics"],
    kpis: { papers: 12, citations: 340, grants: 3, team: 8 },
    spark: [1, 1, 2, 3, 5, 8, 13, 21, 26, 32],
  },
  {
    id: "chanove",
    name: "Chanove Framework",
    kind: "research",
    stage: "Proof of Concept",
    category: "AI Research",
    blurb: "Novel constant optimization framework achieving 74% KPI accuracy across 1,100 datasets.",
    description: "Mathematical framework for discovering and optimizing universal constants in complex systems.",
    valuation: 3_500_000,
    min: 15000,
    max: 400000,
    roi5y: 4.2,
    tags: ["Research", "Mathematics", "Optimization"],
    kpis: { accuracy: 0.74, datasets: 1100, patents: 2, collaborations: 14 },
    spark: [2, 3, 4, 6, 9, 14, 20, 28, 35, 42],
  },
];

export async function getInvestors(): Promise<{ products: InvestorProduct[]; research: InvestorProduct[] }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    products: PRODUCTS,
    research: RESEARCH,
  };
}

export async function getInvestorById(id: string): Promise<InvestorProduct | null> {
  const data = await getInvestors();
  const all = [...data.products, ...data.research];
  return all.find(x => x.id === id) || null;
}