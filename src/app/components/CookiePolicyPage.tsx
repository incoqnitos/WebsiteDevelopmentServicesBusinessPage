import { Cookie } from 'lucide-react';

export default function CookiePolicyPage() {
  const isDark = true; // Dark theme only

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'Required for the website to function properly. These cannot be disabled.',
      examples: ['Session management', 'Security', 'Load balancing']
    },
    {
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      examples: ['Page views', 'Click tracking', 'User flow analysis']
    },
    {
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'Theme selection', 'Region settings']
    },
    {
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites for advertising purposes.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration']
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: isDark 
        ? 'linear-gradient(to bottom, #000000, #0a0e1a, #020617)'
        : 'linear-gradient(to bottom, #f8fafc, #e2e8f0)',
      paddingTop: '80px'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 24px',
          background: isDark 
            ? 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))' 
            : 'linear-gradient(to right, rgba(6, 182, 212, 0.15), rgba(147, 51, 234, 0.15))',
          border: isDark 
            ? '1px solid rgba(6, 182, 212, 0.4)' 
            : '2px solid rgba(6, 182, 212, 0.5)',
          borderRadius: '50px',
          marginBottom: '24px'
        }}>
          <Cookie style={{ 
            width: '20px', 
            height: '20px',
            color: isDark ? '#22d3ee' : '#0891b2'
          }} />
          <span style={{
            fontWeight: 700,
            color: isDark ? '#22d3ee' : '#0891b2'
          }}>
            Cookie Usage
          </span>
        </div>

        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 700, 
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Cookie Policy
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: isDark ? '#cbd5e1' : '#64748b', 
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          How we use cookies and similar technologies
        </p>
      </div>

      {/* Cookie Types */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 60px', 
        padding: '0 20px'
      }}>
        {cookieTypes.map((type) => (
          <div key={type.name} style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
              : 'rgba(255, 255, 255, 0.9)',
            border: isDark 
              ? '1px solid rgba(6, 182, 212, 0.3)' 
              : '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            padding: '32px',
            marginBottom: '24px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '16px',
              color: isDark ? '#f1f5f9' : '#1e293b'
            }}>
              {type.name}
            </h3>
            <p style={{
              marginBottom: '16px',
              color: isDark ? '#cbd5e1' : '#475569',
              lineHeight: 1.7
            }}>
              {type.description}
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {type.examples.map((example) => (
                <span key={example} style={{
                  padding: '6px 16px',
                  background: isDark 
                    ? 'rgba(6, 182, 212, 0.15)' 
                    : 'rgba(6, 182, 212, 0.1)',
                  border: isDark 
                    ? '1px solid rgba(6, 182, 212, 0.3)' 
                    : '1px solid rgba(6, 182, 212, 0.2)',
                  borderRadius: '50px',
                  fontSize: '0.875rem',
                  color: '#22d3ee',
                  fontWeight: 500
                }}>
                  {example}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Managing Cookies */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 40px',
        padding: '40px 20px',
        textAlign: 'center',
        background: isDark 
          ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))' 
          : 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(59, 130, 246, 0.08))',
        border: isDark 
          ? '1px solid rgba(6, 182, 212, 0.3)' 
          : '1px solid rgba(6, 182, 212, 0.4)',
        borderRadius: '16px'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '16px',
          color: isDark ? '#f1f5f9' : '#1e293b'
        }}>
          Managing Your Cookie Preferences
        </h3>
        <p style={{
          fontSize: '1.05rem',
          color: isDark ? '#cbd5e1' : '#64748b',
          lineHeight: 1.7,
          marginBottom: '24px'
        }}>
          You can control and manage cookies through your browser settings. Note that disabling certain cookies may impact website functionality. For questions, contact us at{' '}
          <a 
            href="mailto:info@mobileintellect.com"
            style={{
              color: '#22d3ee',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            info@mobileintellect.com
          </a>
        </p>
        <a 
          href="#contact"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.05rem',
            boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.3)';
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}