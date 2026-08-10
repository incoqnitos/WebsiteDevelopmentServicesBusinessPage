import React, { useMemo, useState, useEffect } from "react";
import Section from './Section';
import { X, FileText, Video, CheckCircle } from 'lucide-react';
import { getInvestors } from '../lib/api';
import type { InvestorProduct } from '../lib/api';
import winnexBg from 'figma:asset/25d2d739c2bcd75b4a9acb4978249597004fd870.png';
import '../../styles/investors-responsive.css';

/**
 * MITAI • Investors Hub
 * Integrated with site structure and background video
 */

// -------------------------------
// Helpers
// -------------------------------
const fmtEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
function cls(...xs: any[]){ return xs.filter(Boolean).join(" "); }

function Spark({ points = [10,12,9,14,18,17,22,27,25], height=36, strokeWidth=2 }: { points?: number[], height?: number, strokeWidth?: number }){
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = Math.max(points.length - 1, 1);
  const poly = points.map((p,i)=>`${(i/w)*100},${100-((p-min)/(max-min||1))*100}`).join(" ");
  const path = points.map((p,i)=>{
    const x = (i/w)*100;
    const y = 100-((p-min)/(max-min||1))*100;
    return `${i===0?"M":"L"}${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{width:'100%', height}}>
      <polyline fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth={strokeWidth+6} points={poly} />
      <path d={path} stroke="rgb(16,185,129)" strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
}

// -------------------------------
// Data
// -------------------------------
type Product = {
  id: string;
  title: string;
  kind: string;
  category: string;
  description: string;
  min: number;
  max: number;
  roi5y: number;
  tags: string[];
  kpis: Record<string, any>;
  spark: number[];
};

const RAW: Product[] = [
  {
    id: "digitaldoctor",
    title: "DigitalDoctor",
    kind: "product",
    category: "Healthcare",
    description: "AI triage, diagnosis probabilities, prescription workflow, telemedicine & Apotheken links.",
    min: 1000, max: 200000, roi5y: 3.2,
    tags: ["Healthcare","SaaS","B2B/B2C"],
    kpis: { users: 120000, arr: 500_000, accuracy: 0.975 },
    spark: [6,8,9,11,15,18,24,29,35,41],
  },
  {
    id: "transcendify",
    title: "Transcendify (TFI)",
    kind: "product",
    category: "Fintech",
    description: "Tokenized leasing & trading desk; credits (TFI) for operations, risk-managed agents.",
    min: 1000, max: 150000, roi5y: 3.5,
    tags: ["Fintech","Credits","B2B2C"],
    kpis: { tpv: 12_000_000, nps: 62, clients: 380 },
    spark: [5,6,7,10,12,16,19,25,28,33],
  },
  {
    id: "mitai-os",
    title: "Mobile Intellect OS",
    kind: "product",
    category: "Platform",
    description: "Device OS with agentic workflows, voice, offline LLM; sealed deployments.",
    min: 5000, max: 250000, roi5y: 2.7,
    tags: ["OS","Edge","Enterprise"],
    kpis: { devices: 8000, arpu: 10.8, retention: 0.91 },
    spark: [2,3,4,6,9,12,14,18,20,24],
  },
  {
    id: "troc-lab",
    title: "TROC Lab Interface",
    kind: "product",
    category: "Research",
    description: "Transparent Optimizing Constants (TOC/TROC) lab: ingestion, KPI grid, audit.",
    min: 2000, max: 120000, roi5y: 3.1,
    tags: ["Science","KPI","Audit"],
    kpis: { experiments: 5100, kpi97: 0.74, datasets: 1100 },
    spark: [3,5,7,11,13,17,22,26,31,37],
  },
  {
    id: "chatmitai",
    title: "ChatMITAI – Secure Messenger",
    kind: "product",
    category: "Communication",
    description: "Agents + messenger for professionals; secure doc exchange; voice/video; audits.",
    min: 1000, max: 100000, roi5y: 3.0,
    tags: ["Comms","Security","Agents"],
    kpis: { orgs: 420, dau: 26000, uptime: 0.999 },
    spark: [4,6,8,12,14,17,21,27,30,36],
  },
  {
    id: "egov",
    title: "Digital Government",
    kind: "product",
    category: "GovTech",
    description: "MiCA-ready records, workflows, citizen services, verified doctors & pharmacies.",
    min: 100000, max: 1000000, roi5y: 2.2,
    tags: ["GovTech","B2G","Long-term"],
    kpis: { savings: 0.65, deals: 3, arr: 3_600_000 },
    spark: [3,4,5,6,7,8,9,10,13,16],
  },
  {
    id: "arhont1",
    title: "ARhont 1",
    kind: "product",
    category: "Hardware",
    description: "Pravets-class workstation/laptop line for local LLMs with MITAI OS.",
    min: 5000, max: 250000, roi5y: 2.5,
    tags: ["Hardware","Edge","Premium"],
    kpis: { gm: 0.42, bom: 950, units: 5000 },
    spark: [2,3,4,6,9,12,14,18,20,24],
  },
  {
    id: "mitai-browser",
    title: "MITAI Browser",
    kind: "product",
    category: "Software",
    description: "Autonomous, voice-first agentic browser with secure workflows and sandbox.",
    min: 1000, max: 100000, roi5y: 2.9,
    tags: ["Browser","Agentic","Voice"],
    kpis: { weeklyActive: 62000, sessions: 1_200_000 },
    spark: [4,5,7,8,11,15,18,21,26,30],
  },
  {
    id: "interlect",
    title: "Interlect Network",
    kind: "research",
    category: "Infrastructure",
    description: "Closed-grid AI fabric (\"God's Touch\"): new Internet-like layer for agent comms.",
    min: 5000, max: 300000, roi5y: 3.8,
    tags: ["R&D","Infra","Closed-grid"],
    kpis: { nodes: 240, links: 19000, latencyMs: 14 },
    spark: [1,2,3,5,8,13,21,34,33,40],
  },
];

// -------------------------------
// Component
// -------------------------------
export default function InvestorsHub(){
  const isDark = true; // Dark theme only
  // search/sort
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("valuation-desc");

  // per-product amount
  const [amounts, setAmounts] = useState<Record<string, number>>(
    Object.fromEntries(RAW.map(p=>[p.id, Math.max(p.min, Math.round((p.min+p.max)/10))]))
  );

  // modal & flows
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [flow, setFlow] = useState<"intent" | "credits" | "onchain" | "kyc">("intent");
  const [contact, setContact] = useState({ email:"", phone:"" });

  // --- derived lists
  const estVal = (p: Product)=> (p.kpis?.arr || p.kpis?.valuation || p.max || 0);
  const sorter = (a: Product, b: Product)=> {
    if (sort === 'valuation-asc') return estVal(a) - estVal(b);
    if (sort === 'name') return String(a.title).localeCompare(String(b.title));
    return estVal(b) - estVal(a);
  };

  const filtered = useMemo(()=>{
    const needle = q.toLowerCase();
    return RAW.filter(x=>{
      const hay = [x.title, x.description, ...(x.tags||[])].join(" ").toLowerCase();
      return hay.includes(needle);
    }).sort(sorter);
  }, [q, sort]);

  // Helper functions
  const openPdf = (productId: string) => {
    const p = RAW.find(x => x.id === productId);
    if (p) {
      alert(`📄 Investor PDF Preview\n\n${p.title} - Investor Deck\n\nThis is a placeholder. The actual investor PDF deck will be available soon.`);
    }
  };

  const openVideo = (productId: string) => {
    const p = RAW.find(x => x.id === productId);
    if (p) {
      alert(`🎥 Investor Video Preview\n\n${p.title} - Product Overview\n\nThis is a placeholder. The actual investor video will be available soon.`);
    }
  };

  const openInvest = (productId: string, flowType: "intent" | "credits" | "onchain" | "kyc") => {
    const p = RAW.find(x => x.id === productId);
    if (p) {
      setProduct(p);
      setFlow(flowType);
      setShowModal(true);
    }
  };

  const handleSubmitIntent = () => {
    alert(`Thank you for your interest in ${product?.title}! Amount: ${fmtEUR.format(amounts[product?.id || ''])}\nWe'll contact you at: ${contact.email}`);
    setShowModal(false);
  };

  return (
    <>
      <section className="section container" style={{ background: isDark ? 'transparent' : '#ffffff' }}>
        <div className="inv-hero">
          <div className="card" style={{ 
            background: isDark ? 'rgba(20,241,149,0.05)' : 'rgba(16,185,129,0.08)', 
            border: `2px solid ${isDark ? '#14f195' : '#10b981'}`, 
            padding: 32 
          }}>
            <h1 style={{marginTop:0, color: isDark ? '#14f195' : '#10b981'}}>MITAI • Investors Hub</h1>
            <p className="lead" style={{ fontSize: 18, color: isDark ? '#e5e7eb' : '#1f2937' }}>Explore products and research tracks. Preview investor materials. Choose a funding flow: pre-commit, service credits, on-chain USDC, or KYC + bank transfer.</p>
            <div style={{display:'flex', gap:10, marginTop:20, flexWrap:'wrap'}}>
              <input 
                className="search" 
                style={{
                  flex:1, 
                  minWidth:200, 
                  padding: 12, 
                  background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.9)', 
                  border: `1px solid ${isDark ? 'rgba(148,163,184,0.3)' : '#d1d5db'}`, 
                  borderRadius: 8, 
                  color: isDark ? 'white' : '#1f2937'
                }} 
                value={q} 
                onChange={e=>setQ(e.target.value)} 
                placeholder="Search by name, tag or description…" 
              />
              <select 
                className="search" 
                style={{
                  minWidth:160, 
                  padding: 12, 
                  background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.9)', 
                  border: `1px solid ${isDark ? 'rgba(148,163,184,0.3)' : '#d1d5db'}`, 
                  borderRadius: 8, 
                  color: isDark ? 'white' : '#1f2937'
                }} 
                value={sort} 
                onChange={e=>setSort(e.target.value)}
              >
                <option value="valuation-desc">Valuation ↓</option>
                <option value="valuation-asc">Valuation ↑</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>
          <div className="card" style={{ 
            background: isDark ? 'rgba(0,0,0,0.3)' : 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)', 
            padding: 24,
            border: isDark ? 'none' : '1px solid rgba(30, 58, 138, 0.5)'
          }}>
            <h3 style={{marginTop:0, color: isDark ? '#14f195' : '#ffffff'}}>Highlights</h3>
            <ul className="small" style={{ lineHeight: 1.8, color: isDark ? '#e5e7eb' : '#e0e7ff' }}>
              <li>Sealed, offline-capable MITAI deployments on ARhont 1.</li>
              <li>Healthcare (DigitalDoctor), Legal/Notary (ADVO), Lab (MITAI Lab).</li>
              <li>Research: ClosedGrid AI, Linguistic OS, TROC, Chanove.</li>
            </ul>
          </div>
        </div>
      </section>

      <Section title="Investment Opportunities" subtitle="Products and research tracks available for funding.">
        <div className="inv-grid">
          {filtered.map(p=>{
            const amount = amounts[p.id];
            const est = amount * p.roi5y;
            return (
              <div key={p.id} className="card" 
                style={{ 
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.95) 100%)',
                  border: isDark 
                    ? '1px solid rgba(16, 185, 129, 0.4)' 
                    : '2px solid rgba(59, 130, 246, 0.5)',
                  padding: 24, 
                  transition: 'all 0.3s', 
                  cursor: 'pointer',
                  boxShadow: isDark ? 'none' : '0 4px 20px rgba(59, 130, 246, 0.2)'
                }} 
                onMouseEnter={(e) => {
                  if (isDark) {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.8)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.3)';
                  } else {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.8)';
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(59, 130, 246, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isDark) {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                    e.currentTarget.style.boxShadow = 'none';
                  } else {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <div style={{borderTop: isDark ? '2px solid #14f195' : '3px solid #3b82f6', marginBottom:12}} />
                <div style={{display:'flex', alignItems:'start', justifyContent:'space-between', gap:12, marginBottom:8}}>
                  <h3 style={{
                    marginTop:0, 
                    color: isDark ? '#14f195' : '#1e40af',
                    fontWeight: isDark ? 600 : 700,
                    textShadow: isDark ? '' : '0 2px 10px rgba(59, 130, 246, 0.2)'
                  }}>{p.title}</h3>
                  <span style={{ 
                    fontSize: 10, 
                    padding: '4px 8px', 
                    background: isDark ? '#14f195' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                    color: isDark ? 'black' : '#ffffff', 
                    borderRadius: 4, 
                    fontWeight: 700,
                    boxShadow: isDark ? '' : '0 2px 10px rgba(59, 130, 246, 0.4)'
                  }}>{p.category}</span>
                </div>
                <p style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: isDark ? '#9ca3af' : '#1f2937',
                  margin: 0,
                  fontWeight: isDark ? 400 : 500
                }}>{p.description}</p>

                <div style={{display:'flex', flexWrap:'wrap', gap:6, marginTop:8}}>
                  {p.tags.map(t=> <span key={t} style={{ 
                    fontSize: 10, 
                    padding: '3px 8px', 
                    background: isDark ? 'rgba(20,241,149,0.1)' : 'rgba(59, 130, 246, 0.15)', 
                    border: isDark ? '1px solid #14f195' : '1px solid #3b82f6', 
                    borderRadius: 4, 
                    color: isDark ? '#14f195' : '#1e40af',
                    fontWeight: isDark ? 400 : 600,
                    boxShadow: isDark ? '' : '0 0 10px rgba(59, 130, 246, 0.2)'
                  }}>{t}</span>)}
                </div>

                <div className="kpi-grid-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 12 }}>
                  <div style={{
                    padding:10, 
                    background: isDark ? 'rgba(20,241,149,0.05)' : 'rgba(59, 130, 246, 0.1)', 
                    border: isDark ? '1px solid #14f195' : '2px solid #3b82f6', 
                    borderRadius: 8,
                    boxShadow: isDark ? '' : '0 0 15px rgba(59, 130, 246, 0.2)'
                  }}>
                    <div className="kpi-label" style={{ fontSize: 10, color: isDark ? '#9ca3af' : '#1e40af', fontWeight: isDark ? 400 : 600 }}>5-Year Multiplier</div>
                    <div className="kpi-value" style={{
                      fontSize:20, 
                      fontWeight:800, 
                      color: isDark ? '#14f195' : '#3b82f6',
                      textShadow: isDark ? '' : '0 2px 10px rgba(59, 130, 246, 0.3)'
                    }}>×{p.roi5y.toFixed(1)}</div>
                  </div>
                  <div style={{
                    padding:10, 
                    background: isDark ? 'rgba(20,241,149,0.05)' : 'rgba(139, 92, 246, 0.1)', 
                    border: isDark ? '1px solid #14f195' : '2px solid #8b5cf6', 
                    borderRadius: 8,
                    boxShadow: isDark ? '' : '0 0 15px rgba(139, 92, 246, 0.2)'
                  }}>
                    <div className="kpi-label" style={{ fontSize: 10, color: isDark ? '#9ca3af' : '#6b21a8', fontWeight: isDark ? 400 : 600 }}>Your Input</div>
                    <div className="kpi-value" style={{
                      fontSize:20, 
                      fontWeight:800, 
                      color: isDark ? '#14f195' : '#8b5cf6',
                      textShadow: isDark ? '' : '0 2px 10px rgba(139, 92, 246, 0.3)'
                    }}>{fmtEUR.format(amount)}</div>
                  </div>
                  <div style={{
                    padding:10, 
                    background: isDark ? 'rgba(20,241,149,0.05)' : 'rgba(236, 72, 153, 0.1)', 
                    border: isDark ? '1px solid #14f195' : '2px solid #ec4899', 
                    borderRadius: 8,
                    boxShadow: isDark ? '' : '0 0 15px rgba(236, 72, 153, 0.2)'
                  }}>
                    <div className="kpi-label" style={{ fontSize: 10, color: isDark ? '#9ca3af' : '#be185d', fontWeight: isDark ? 400 : 600 }}>Est. 5-Year*</div>
                    <div className="kpi-value" style={{
                      fontSize:20, 
                      fontWeight:800, 
                      color: isDark ? '#14f195' : '#ec4899',
                      textShadow: isDark ? '' : '0 2px 10px rgba(236, 72, 153, 0.3)'
                    }}>{fmtEUR.format(est)}</div>
                  </div>
                </div>

                <div style={{
                  background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.5)', 
                  borderRadius:12, 
                  border: `1px solid ${isDark ? 'rgba(148,163,184,0.3)' : 'rgba(16,185,129,0.3)'}`, 
                  padding:10, 
                  marginTop:12
                }}>
                  <Spark points={p.spark} />
                  <div style={{ fontSize: 11, color: isDark ? '#9ca3af' : '#d1d5db', marginTop:6 }}>*Illustrative. Not financial advice.</div>
                </div>

                <label className="amount-section" style={{display:'block', marginTop:14, color: isDark ? '#14f195' : '#10b981', fontWeight:600, fontSize: 13}}>Investment Amount</label>
                <input 
                  type="range" 
                  min={p.min} 
                  max={p.max} 
                  value={amount} 
                  onChange={(e)=>setAmounts(prev=>({...prev, [p.id]: Number(e.target.value)}))} 
                  style={{width:'100%', marginTop:6, accentColor: isDark ? '#14f195' : '#10b981'}} 
                />
                <div className="amount-display" style={{textAlign:'center', fontSize:22, fontWeight:800, color: isDark ? '#14f195' : '#10b981', marginTop:4}}>{fmtEUR.format(amount)}</div>

                <div className="preview-card" style={{
                  marginTop:12, 
                  background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.6)', 
                  border: `1px solid ${isDark ? 'rgba(148,163,184,0.3)' : 'rgba(16,185,129,0.3)'}`, 
                  borderRadius: 8, 
                  padding: 12
                }}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:10}}>
                    <div>
                      <div className="preview-title" style={{fontSize: 13, color: isDark ? '#14f195' : '#10b981', fontWeight:600}}>
                        <FileText className="inline" style={{ width: 14, height: 14, marginRight: 4 }} />Investor PDF
                      </div>
                      <div className="preview-subtitle" style={{fontSize: 11, color: isDark ? '#9ca3af' : '#d1d5db'}}>Preview-only placeholder</div>
                    </div>
                    <button 
                      style={{ 
                        padding: '6px 12px', 
                        background: 'transparent', 
                        border: `1px solid ${isDark ? '#14f195' : '#10b981'}`, 
                        color: isDark ? '#14f195' : '#10b981', 
                        borderRadius: 6, 
                        cursor: 'pointer' 
                      }}
                      onClick={()=>openPdf(p.id)}
                    >
                      Preview
                    </button>
                  </div>
                </div>

                <div className="preview-card" style={{
                  marginTop:8, 
                  background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.6)', 
                  border: `1px solid ${isDark ? 'rgba(148,163,184,0.3)' : 'rgba(16,185,129,0.3)'}`, 
                  borderRadius: 8, 
                  padding: 12
                }}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:10}}>
                    <div>
                      <div className="preview-title" style={{fontSize: 13, color: isDark ? '#14f195' : '#10b981', fontWeight:600}}>
                        <Video className="inline" style={{ width: 14, height: 14, marginRight: 4 }} />Investor Video
                      </div>
                      <div className="preview-subtitle" style={{fontSize: 11, color: isDark ? '#9ca3af' : '#d1d5db'}}>Preview-only placeholder</div>
                    </div>
                    <button 
                      style={{ 
                        padding: '6px 12px', 
                        background: 'transparent', 
                        border: `1px solid ${isDark ? '#14f195' : '#10b981'}`, 
                        color: isDark ? '#14f195' : '#10b981', 
                        borderRadius: 6, 
                        cursor: 'pointer' 
                      }}
                      onClick={()=>openVideo(p.id)}
                    >
                      Preview
                    </button>
                  </div>
                </div>

                <div className="inv-buttons" style={{display:'flex', gap:8, marginTop:14}}>
                  <a 
                    href={`#investor/${p.id}`}
                    style={{ 
                      flex: 1, 
                      padding: '10px 16px', 
                      background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.6)', 
                      border: `1px solid ${isDark ? 'rgba(148,163,184,0.3)' : 'rgba(16,185,129,0.3)'}`, 
                      color: 'white', 
                      borderRadius: 8, 
                      cursor: 'pointer', 
                      textDecoration: 'none', 
                      textAlign: 'center' 
                    }}
                  >
                    Details
                  </a>
                  <button 
                    style={{ 
                      flex: 1, 
                      padding: '10px 16px', 
                      background: isDark ? '#14f195' : '#10b981', 
                      border: 'none', 
                      color: isDark ? 'black' : '#ffffff', 
                      borderRadius: 8, 
                      cursor: 'pointer', 
                      fontWeight: 700 
                    }}
                    onClick={()=>openInvest(p.id, "intent")}
                  >
                    Pledge
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <section className="section container" style={{textAlign:'center', background: isDark ? 'transparent' : '#ffffff', marginTop: 80}}>
        <div className="card" style={{
          maxWidth:800, 
          margin:'0 auto', 
          background: isDark ? 'rgba(20,241,149,0.05)' : 'rgba(16,185,129,0.08)', 
          border: `2px solid ${isDark ? '#14f195' : '#10b981'}`, 
          padding: 40
        }}>
          <h2 style={{color: isDark ? '#14f195' : '#10b981', marginTop: 0}}>Early Access Window</h2>
          <p style={{ fontSize: 18, color: isDark ? '#9ca3af' : '#1f2937' }}>First 1,000 qualified backers get bonus service credits on purchases ≥ €10,000. Regulated onboarding via pre-commit + KYC.</p>
          
        </div>
      </section>

      <footer style={{ 
        textAlign: 'center', 
        padding: '20px 0', 
        fontSize: 12, 
        color: isDark ? '#9ca3af' : '#6b7280', 
        borderTop: `1px solid ${isDark ? 'rgba(148,163,184,0.3)' : '#e5e7eb'}`, 
        marginTop: 60,
        background: isDark ? 'transparent' : '#ffffff'
      }}>
        * All multipliers and graphs are illustrative. Not investment advice. Allocation requires eligibility checks and compliance.
      </footer>

      {/* Investment Modal */}
      {showModal && product && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ width: '100%', maxWidth: 600, background: '#0a0a0a', borderRadius: 12, overflow: 'hidden', border: '2px solid var(--brand-2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 20, background: 'rgba(20,241,149,0.1)', borderBottom: '1px solid var(--brand-2)' }}>
              <h3 style={{ margin: 0, color: 'var(--brand-2)' }}>Invest in {product.title}</h3>
              <button 
                onClick={() => setShowModal(false)}
                style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', padding: 8 }}
              >
                <X />
              </button>
            </div>
            <div style={{ padding: 24 }}>
              <p className="muted">Amount: <strong style={{ color: 'var(--brand-2)', fontSize: 20 }}>{fmtEUR.format(amounts[product.id])}</strong></p>
              
              <div style={{ marginTop: 20 }}>
                <label style={{ display: 'block', marginBottom: 8, color: 'var(--brand-2)', fontWeight: 600 }}>Email</label>
                <input 
                  type="email" 
                  value={contact.email}
                  onChange={(e) => setContact(prev => ({ ...prev, email: e.target.value }))}
                  style={{ width: '100%', padding: 12, background: 'rgba(0,0,0,0.4)', border: '1px solid var(--line)', borderRadius: 8, color: 'white' }}
                  placeholder="your@email.com"
                />
              </div>

              <div style={{ marginTop: 16 }}>
                <label style={{ display: 'block', marginBottom: 8, color: 'var(--brand-2)', fontWeight: 600 }}>Phone (optional)</label>
                <input 
                  type="tel" 
                  value={contact.phone}
                  onChange={(e) => setContact(prev => ({ ...prev, phone: e.target.value }))}
                  style={{ width: '100%', padding: 12, background: 'rgba(0,0,0,0.4)', border: '1px solid var(--line)', borderRadius: 8, color: 'white' }}
                  placeholder="+49 123 456 7890"
                />
              </div>

              <button 
                onClick={handleSubmitIntent}
                disabled={!contact.email}
                style={{ 
                  width: '100%', 
                  marginTop: 24, 
                  padding: '14px', 
                  background: contact.email ? 'var(--brand-2)' : 'rgba(128,128,128,0.3)', 
                  border: 'none', 
                  color: contact.email ? 'black' : 'gray', 
                  borderRadius: 8, 
                  cursor: contact.email ? 'pointer' : 'not-allowed', 
                  fontWeight: 700,
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8
                }}
              >
                <CheckCircle style={{ width: 20, height: 20 }} />
                Submit Interest
              </button>

              <p className="small muted" style={{ marginTop: 16, textAlign: 'center' }}>
                This is a non-binding expression of interest. We'll contact you with next steps.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}