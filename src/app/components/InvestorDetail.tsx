import React, { useEffect, useState } from 'react';
import Section from './Section';
import { getInvestors } from '../lib/api';
import type { InvestorProduct } from '../lib/api';
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, Activity } from 'lucide-react';

export default function InvestorDetail({ id }: { id: string }) {
  const [item, setItem] = useState<InvestorProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const d = await getInvestors();
      const f = [...(d.products || []), ...(d.research || [])].find(x => x.id === id);
      setItem(f || null);
      setLoading(false);
    })();
  }, [id]);

  const fmt = (n: any) => n?.toLocaleString?.('en-GB') ?? String(n);
  const fmtEUR = (n: number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);
  const fmtPercent = (n: number) => `${(n * 100).toFixed(1)}%`;

  if (loading) {
    return (
      <Section title="Loading...">
        <div className="container card">
          <div style={{ textAlign: 'center', padding: 40 }}>
            <Activity className="animate-spin" style={{ width: 48, height: 48, margin: '0 auto', color: 'var(--brand-2)' }} />
            <p className="muted" style={{ marginTop: 16 }}>Loading investment details...</p>
          </div>
        </div>
      </Section>
    );
  }

  if (!item) {
    return (
      <Section title="Not Found">
        <div className="container card" style={{ textAlign: 'center', padding: 60 }}>
          <h2 style={{ color: 'var(--brand-2)', marginTop: 0 }}>Investment Opportunity Not Found</h2>
          <p className="muted">The product or research track you're looking for doesn't exist.</p>
          <a
            href="#investors"
            style={{
              marginTop: 24,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              background: 'var(--brand-2)',
              color: 'black',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            <ArrowLeft style={{ width: 20, height: 20 }} />
            Back to Investors Hub
          </a>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section title={item.name} subtitle={`${item.kind.toUpperCase()} • ${item.stage} • ${item.category}`}>
        <div className="container">
          {/* Back button */}
          <a
            href="#investors"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid var(--line)',
              color: 'white',
              borderRadius: 8,
              textDecoration: 'none',
              marginBottom: 24,
            }}
          >
            <ArrowLeft style={{ width: 16, height: 16 }} />
            Back to Investors Hub
          </a>

          {/* Hero stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
            <div className="card" style={{ background: 'rgba(20,241,149,0.1)', border: '2px solid var(--brand-2)', padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <DollarSign style={{ width: 24, height: 24, color: 'var(--brand-2)' }} />
                <div className="small muted">Valuation</div>
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--brand-2)' }}>{fmtEUR(item.valuation)}</div>
            </div>

            <div className="card" style={{ background: 'rgba(0,0,0,0.3)', padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <TrendingUp style={{ width: 24, height: 24, color: 'var(--brand-2)' }} />
                <div className="small muted">5-Year ROI</div>
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--brand-2)' }}>×{item.roi5y.toFixed(1)}</div>
            </div>

            <div className="card" style={{ background: 'rgba(0,0,0,0.3)', padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <Target style={{ width: 24, height: 24, color: 'var(--brand-2)' }} />
                <div className="small muted">Investment Range</div>
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--brand-2)' }}>
                {fmtEUR(item.min)} - {fmtEUR(item.max)}
              </div>
            </div>
          </div>

          {/* Main content grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, marginBottom: 24 }}>
            <div className="card" style={{ background: 'rgba(20,241,149,0.05)', border: '2px solid var(--brand-2)', padding: 32 }}>
              <h3 style={{ marginTop: 0, color: 'var(--brand-2)' }}>Overview</h3>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>{item.blurb}</p>
              <p className="muted" style={{ marginTop: 16 }}>{item.description}</p>

              <div style={{ marginTop: 24 }}>
                <h4 style={{ color: 'var(--brand-2)', marginBottom: 12 }}>Tags</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        padding: '6px 12px',
                        background: 'rgba(20,241,149,0.1)',
                        border: '1px solid var(--brand-2)',
                        borderRadius: 6,
                        fontSize: 12,
                        color: 'var(--brand-2)',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card" style={{ background: 'rgba(0,0,0,0.4)', padding: 24 }}>
              <h3 style={{ marginTop: 0, color: 'var(--brand-2)' }}>
                <Users style={{ width: 20, height: 20, display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />
                Key Performance Indicators
              </h3>
              <div style={{ marginTop: 20 }}>
                {Object.entries(item.kpis).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid var(--line)',
                    }}
                  >
                    <span className="small" style={{ textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span style={{ fontWeight: 700, color: 'var(--brand-2)' }}>
                      {typeof value === 'number' && value < 1 && value > 0
                        ? fmtPercent(value)
                        : typeof value === 'number' && value >= 1000
                        ? fmt(value)
                        : String(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Growth chart */}
          <div className="card" style={{ background: 'rgba(0,0,0,0.4)', padding: 32 }}>
            <h3 style={{ marginTop: 0, color: 'var(--brand-2)' }}>
              <TrendingUp style={{ width: 20, height: 20, display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />
              Growth Trajectory
            </h3>
            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 12, border: '1px solid var(--line)', padding: 24, marginTop: 16 }}>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: 120 }}>
                <defs>
                  <linearGradient id={`gradient-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(20,241,149,0.3)" />
                    <stop offset="100%" stopColor="rgba(20,241,149,0)" />
                  </linearGradient>
                </defs>
                {(() => {
                  const max = Math.max(...item.spark);
                  const min = Math.min(...item.spark);
                  const w = Math.max(item.spark.length - 1, 1);
                  const points = item.spark.map((p, i) => {
                    const x = (i / w) * 100;
                    const y = 100 - ((p - min) / (max - min || 1)) * 100;
                    return `${x},${y}`;
                  }).join(' ');
                  const areaPoints = `0,100 ${points} 100,100`;
                  const path = item.spark
                    .map((p, i) => {
                      const x = (i / w) * 100;
                      const y = 100 - ((p - min) / (max - min || 1)) * 100;
                      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
                    })
                    .join(' ');
                  return (
                    <>
                      <polygon fill={`url(#gradient-${item.id})`} points={areaPoints} />
                      <polyline fill="none" stroke="rgba(20,241,149,0.3)" strokeWidth={4} points={points} />
                      <path d={path} stroke="rgb(20,241,149)" strokeWidth={2} fill="none" />
                    </>
                  );
                })()}
              </svg>
              <div className="small muted" style={{ marginTop: 12, textAlign: 'center' }}>
                *Illustrative growth data. Past performance does not guarantee future results.
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="card" style={{ background: 'rgba(20,241,149,0.05)', border: '2px solid var(--brand-2)', padding: 40, marginTop: 24, textAlign: 'center' }}>
            <h2 style={{ marginTop: 0, color: 'var(--brand-2)' }}>Ready to Invest in {item.name}?</h2>
            <p className="muted" style={{ fontSize: 18, maxWidth: 600, margin: '16px auto' }}>
              Join our exclusive investor network and gain early access to MITAI's cutting-edge portfolio.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
              {item.id === 'chatmitai' && (
                <a
                  href="#messenger"
                  style={{
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #60a5fa, #34d399)',
                    color: 'white',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  🚀 Try Live Demo
                </a>
              )}
              {item.id === 'ordermitai' && (
                <a
                  href="#orders"
                  style={{
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #60a5fa, #34d399)',
                    color: 'white',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  📦 Try Live Demo
                </a>
              )}
              {item.id === 'arhont1' && (
                <a
                  href="https://trac-insight-copy-52231bf0.base44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #60a5fa, #34d399)',
                    color: 'white',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  🖥️ Try ARhont OS
                </a>
              )}
              <a
                href="#investors"
                style={{
                  padding: '14px 28px',
                  background: 'var(--brand-2)',
                  color: 'black',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Express Interest
              </a>
              <a
                href="#investors"
                style={{
                  padding: '14px 28px',
                  background: 'transparent',
                  border: '2px solid var(--brand-2)',
                  color: 'var(--brand-2)',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Download Materials
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}