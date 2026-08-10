import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, Newspaper, Lightbulb, Cpu } from 'lucide-react';

export type Article = {
  id: string;
  category: 'news' | 'article' | 'innovation';
  title: string;
  summary: string;
  date: string;       // ISO string e.g. "2025-06-17"
  readMin: number;
  tags: string[];
  imageUrl?: string;
  url?: string;       // external link or internal hash
};

const CATEGORY_META = {
  news:       { label: 'News',        icon: Newspaper,  color: '#22d3ee',  bg: 'rgba(34,211,238,0.12)'  },
  article:    { label: 'Article',     icon: Lightbulb,  color: '#a78bfa',  bg: 'rgba(167,139,250,0.12)' },
  innovation: { label: 'Innovation',  icon: Cpu,        color: '#34d399',  bg: 'rgba(52,211,153,0.12)'  },
};

// ── Placeholder articles — replace / extend when real content arrives ──
const ARTICLES: Article[] = [
  {
    id: 'mitai-phone-2025',
    category: 'innovation',
    title: 'MITAI Phone — Next-Generation AI Hardware',
    summary:
      'MITAI is developing its own smartphone line with on-device AI inference, modular hardware design and a custom Android fork optimised for the S Arhont OS ecosystem.',
    date: '2025-06-10',
    readMin: 4,
    tags: ['Hardware', 'MITAI Phone', 'AI'],
  },
  {
    id: 'digital-doctor-launch',
    category: 'news',
    title: 'Digital Doctor Goes Live — AI Medical Triage Platform',
    summary:
      "MITAI's AI-powered medical assistant is now publicly accessible. Digital Doctor provides 24/7 symptom analysis, triage recommendations and specialist referrals across multiple languages.",
    date: '2025-05-28',
    readMin: 3,
    tags: ['HealthTech', 'AI', 'Launch'],
  },
  {
    id: 'archont-os-vision',
    category: 'article',
    title: 'S Arhont 1 OS — Vision for the First Fully AI Operating System',
    summary:
      'A deep-dive into the philosophy and architecture behind S Arhont 1: an operating system where every layer — kernel scheduling, UI, networking — is guided by an intelligent agent rather than static rules.',
    date: '2025-05-14',
    readMin: 6,
    tags: ['OS', 'AI', 'Innovation'],
  },
  {
    id: 'trac-analytics-intro',
    category: 'article',
    title: 'TRAC Analytics — Theory of Relatively Optimising Adaptive Constants',
    summary:
      'TRAC is a real-time business intelligence engine that self-calibrates its analytical models based on shifting market constants. This article explains the mathematical foundations and practical applications.',
    date: '2025-04-30',
    readMin: 5,
    tags: ['Analytics', 'Business Intelligence', 'TRAC'],
  },
  {
    id: 'mitai-germany-expansion',
    category: 'news',
    title: 'MITAI Expands Operations to Germany',
    summary:
      "MITAI LTD has registered its European subsidiary in Germany, enabling direct collaboration with German enterprises, investors and tech incubators as part of the company's international growth strategy.",
    date: '2025-04-12',
    readMin: 2,
    tags: ['Germany', 'Expansion', 'Business'],
  },
  {
    id: 'hand-control-tech',
    category: 'innovation',
    title: 'Gesture Navigation — Controlling the Web with Your Hand',
    summary:
      'MITAI has integrated real-time hand-tracking navigation into its web presence using MediaPipe and custom gesture recognition. The system enables cursor control, click, scroll and section navigation with no hardware beyond a webcam.',
    date: '2025-06-17',
    readMin: 4,
    tags: ['UX', 'AI', 'Hand Control', 'Innovation'],
  },
  {
    id: 'navier-stokes-toz',
    category: 'article',
    title: 'TOZ-Modified Navier–Stokes Equations: Adaptive Regularization Framework',
    summary:
      'An adaptive regularization framework replacing classical constant viscosity with a state-dependent effective viscosity governed by TOZ/TROK coefficients. Formal energy estimates under four structural assumptions (uniform ellipticity, Lipschitz continuity, adaptive gradient damping, Lyapunov control) suggest adaptive dissipation may prevent finite-time blow-up. Author: Dimitar Konstantinov Totev, MIT1985 LTD.',
    date: '2025-08-06',
    readMin: 20,
    tags: ['Navier–Stokes', 'TROK', 'TOZ', 'PDE', 'Mathematics', 'Adaptive Viscosity'],
    url: '#toz-navier-stokes',
  },
  {
    id: 'usi-rac-publication',
    category: 'article',
    title: 'Unified Signal Index (USI) mittels Reverse Accumulative Compression (RAC)',
    summary:
      'Wissenschaftliche Publikation von D. Totev, MIT1985LTD & AI Co-Lab. Das RAC-Framework integriert hochkonfidente Biomarker (KPI > 0.85) zu einem Unified Signal Index mit >95% Diagnosegenauigkeit bei Multipler Sklerose (UMSI-X: KPI 0.956) und Neurofibromatose Typ 1 (USI_NF1: KPI 0.958). Der globale USI erreicht KPI = 0.965 mit Anwendbarkeit auf MS, NF1, Lupus und Alzheimer.',
    date: '2025-02-01',
    readMin: 12,
    tags: ['RAC', 'USI', 'Biomarker', 'Multiple Sklerose', 'NF1', 'AI', 'Wissenschaft'],
  },
];

type Filter = 'all' | 'news' | 'article' | 'innovation';

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function PublicationsSection() {
  const [filter, setFilter] = useState<Filter>('all');
  const [hovered, setHovered] = useState<string | null>(null);

  const visible = filter === 'all' ? ARTICLES : ARTICLES.filter(a => a.category === filter);

  return (
    <section style={{
      background: 'linear-gradient(to bottom, #020617, #0a0e1a)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* subtle grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 999,
            border: '1px solid rgba(34,211,238,0.35)',
            background: 'rgba(34,211,238,0.08)',
            color: '#67e8f9', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.2em', marginBottom: 20,
          }}>
            <Newspaper size={14} /> PUBLICATIONS &amp; INNOVATIONS
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800,
            background: 'linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: 16,
          }}>
            News, Articles &amp; Ideas
          </h2>
          <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: 17, maxWidth: 600, margin: '0 auto' }}>
            Latest updates from MITAI — product launches, research, technology breakthroughs and business news.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}>
          {(['all', 'news', 'article', 'innovation'] as Filter[]).map(f => {
            const active = filter === f;
            const meta = f !== 'all' ? CATEGORY_META[f] : null;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 20px', borderRadius: 999, fontSize: 13, fontWeight: 600,
                  border: `1px solid ${active ? (meta?.color || '#22d3ee') : 'rgba(148,163,184,0.2)'}`,
                  background: active ? (meta?.bg || 'rgba(34,211,238,0.12)') : 'transparent',
                  color: active ? (meta?.color || '#22d3ee') : 'rgba(148,163,184,0.7)',
                  cursor: 'pointer', transition: 'all 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {f === 'all' ? 'All' : CATEGORY_META[f].label}
              </button>
            );
          })}
        </div>

        {/* Articles grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 24,
        }}>
          {visible.map(article => {
            const meta = CATEGORY_META[article.category];
            const Icon = meta.icon;
            const isHovered = hovered === article.id;

            return (
              <a
                key={article.id}
                href={article.url || '#'}
                onClick={e => { if (!article.url) e.preventDefault(); }}
                onMouseEnter={() => setHovered(article.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'block', textDecoration: 'none',
                  background: isHovered
                    ? 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.9))'
                    : 'rgba(15,23,42,0.7)',
                  border: `1px solid ${isHovered ? meta.color + '55' : 'rgba(51,65,85,0.6)'}`,
                  borderRadius: 20,
                  padding: 28,
                  transition: 'all 0.25s ease',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${meta.color}18` : '0 4px 16px rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(16px)',
                  cursor: article.url ? 'pointer' : 'default',
                }}
              >
                {/* Category badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '5px 12px', borderRadius: 999,
                    background: meta.bg, border: `1px solid ${meta.color}44`,
                    color: meta.color, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                  }}>
                    <Icon size={12} /> {meta.label.toUpperCase()}
                  </div>
                  {article.url && (
                    <ArrowRight size={16} color={meta.color} style={{
                      transition: 'transform 0.2s',
                      transform: isHovered ? 'translateX(4px)' : 'none',
                    }} />
                  )}
                </div>

                {/* Title */}
                <h3 style={{
                  color: '#f1f5f9', fontSize: 17, fontWeight: 700,
                  lineHeight: 1.4, marginBottom: 12,
                }}>
                  {article.title}
                </h3>

                {/* Summary */}
                <p style={{
                  color: 'rgba(148,163,184,0.85)', fontSize: 14,
                  lineHeight: 1.7, marginBottom: 20,
                }}>
                  {article.summary}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {article.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '3px 10px', borderRadius: 999, fontSize: 11,
                      background: 'rgba(51,65,85,0.6)',
                      border: '1px solid rgba(100,116,139,0.3)',
                      color: 'rgba(148,163,184,0.8)',
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta footer */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(51,65,85,0.5)',
                  color: 'rgba(100,116,139,0.9)', fontSize: 12,
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Calendar size={12} /> {fmt(article.date)}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Clock size={12} /> {article.readMin} min read
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Coming soon note */}
        <div style={{
          marginTop: 56, textAlign: 'center',
          padding: '28px 32px',
          background: 'rgba(34,211,238,0.04)',
          border: '1px dashed rgba(34,211,238,0.2)',
          borderRadius: 16,
          color: 'rgba(100,116,139,0.8)', fontSize: 14,
        }}>
          More articles and publications coming soon. Stay tuned for in-depth MITAI research, case studies and product deep-dives.
        </div>

      </div>
    </section>
  );
}
