import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const CLIENTS = [
  {
    name: 'Orbis Lohnsteuerhilfverein',
    description: 'Tax advisory association — professional financial consulting services.',
    url: 'https://orbis-ev.de/',
    category: 'Finance & Tax',
    initial: 'O',
    color: '#22d3ee',
  },
  {
    name: 'Teba Bank',
    description: 'Banking institution offering comprehensive financial solutions.',
    url: null,
    category: 'Banking',
    initial: 'T',
    color: '#a78bfa',
  },
  {
    name: 'Havana-ma.de',
    description: 'Premium hospitality and lifestyle brand based in Mannheim.',
    url: 'https://havana-ma.de',
    category: 'Hospitality',
    initial: 'H',
    color: '#f472b6',
  },
  {
    name: 'Bierbrezel Heidelberg',
    description: 'Iconic beer garden and restaurant in the heart of Heidelberg.',
    url: 'https://bierbrezel-heidelberg.de',
    category: 'Restaurant',
    initial: 'B',
    color: '#fb923c',
  },
  {
    name: 'Cafe Villa',
    description: 'Charming café and event space offering a cosy premium experience.',
    url: 'https://www.cafevilla.de/',
    category: 'Café & Events',
    initial: 'C',
    color: '#34d399',
  },
  {
    name: 'Power Beratung GmbH',
    description: 'Professional business consulting firm delivering strategic and operational solutions.',
    url: 'https://power-beratung-gmbh.de/',
    category: 'Consulting',
    initial: 'P',
    color: '#fbbf24',
  },
];

export default function OurClientsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={{
      background: 'linear-gradient(to bottom, #0a0e1a, #020617)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 20px', borderRadius: 999,
            border: '1px solid rgba(34,211,238,0.3)',
            background: 'rgba(34,211,238,0.07)',
            color: '#67e8f9', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.2em', marginBottom: 22,
            fontFamily: 'system-ui, sans-serif',
          }}>
            SOME OF OUR CLIENTS
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
            background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: 16,
          }}>
            Trusted by Great Brands
          </h2>
          <p style={{
            color: 'rgba(148,163,184,0.85)', fontSize: 17,
            maxWidth: 560, margin: '0 auto',
            fontFamily: 'system-ui, sans-serif',
          }}>
            From banking and hospitality to gastronomy — we build digital solutions
            that elevate our clients&apos; businesses.
          </p>
        </div>

        {/* Client cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {CLIENTS.map(client => {
            const isHovered = hovered === client.name;
            return (
              <div
                key={client.name}
                onMouseEnter={() => setHovered(client.name)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHovered
                    ? 'rgba(15,23,42,0.95)'
                    : 'rgba(15,23,42,0.6)',
                  border: `1px solid ${isHovered ? client.color + '55' : 'rgba(51,65,85,0.5)'}`,
                  borderRadius: 20,
                  padding: '28px 28px 24px',
                  transition: 'all 0.25s ease',
                  transform: isHovered ? 'translateY(-5px)' : 'none',
                  boxShadow: isHovered
                    ? `0 20px 40px rgba(0,0,0,0.35), 0 0 30px ${client.color}18`
                    : '0 4px 16px rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(16px)',
                  cursor: client.url ? 'pointer' : 'default',
                }}
                onClick={() => client.url && window.open(client.url, '_blank')}
              >
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  {/* Avatar */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: `linear-gradient(135deg, ${client.color}33, ${client.color}11)`,
                    border: `1px solid ${client.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, fontWeight: 800, color: client.color,
                    fontFamily: 'system-ui, sans-serif',
                  }}>
                    {client.initial}
                  </div>

                  {/* Category + external link */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{
                      padding: '4px 11px', borderRadius: 999, fontSize: 11,
                      fontWeight: 700, letterSpacing: '0.1em',
                      background: `${client.color}15`,
                      border: `1px solid ${client.color}33`,
                      color: client.color,
                      fontFamily: 'system-ui, sans-serif',
                    }}>
                      {client.category}
                    </span>
                    {client.url && (
                      <ExternalLink size={14} color={isHovered ? client.color : 'rgba(100,116,139,0.7)'}
                        style={{ transition: 'color 0.2s' }} />
                    )}
                  </div>
                </div>

                {/* Name */}
                <h3 style={{
                  color: '#f1f5f9', fontSize: 17, fontWeight: 700,
                  marginBottom: 8, lineHeight: 1.3,
                  fontFamily: 'system-ui, sans-serif',
                }}>
                  {client.name}
                </h3>

                {/* Description */}
                <p style={{
                  color: 'rgba(148,163,184,0.8)', fontSize: 14,
                  lineHeight: 1.65, margin: 0,
                  fontFamily: 'system-ui, sans-serif',
                }}>
                  {client.description}
                </p>

                {/* Bottom accent line */}
                <div style={{
                  marginTop: 20,
                  height: 2, borderRadius: 999,
                  background: isHovered
                    ? `linear-gradient(to right, ${client.color}, transparent)`
                    : 'rgba(51,65,85,0.4)',
                  transition: 'background 0.3s',
                }} />
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p style={{
          marginTop: 52, textAlign: 'center',
          color: 'rgba(100,116,139,0.7)', fontSize: 13,
          fontFamily: 'system-ui, sans-serif',
        }}>
          Interested in working with MITAI?{' '}
          <a href="#contact" style={{ color: '#22d3ee', textDecoration: 'none', fontWeight: 600 }}>
            Get in touch →
          </a>
        </p>
      </div>
    </section>
  );
}
