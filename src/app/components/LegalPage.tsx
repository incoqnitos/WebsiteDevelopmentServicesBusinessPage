import { FileText, Scale, Shield, Cookie, Building } from 'lucide-react';

export default function LegalPage() {
  const isDark = true; // Dark theme only

  const legalDocs = [
    {
      title: 'Privacy Policy',
      description: 'Learn how we collect, use, and protect your personal data',
      icon: Shield,
      link: '#privacy-policy',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Terms of Service',
      description: 'Terms and conditions for using our products and services',
      icon: FileText,
      link: '#terms-of-service',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cookie Policy',
      description: 'How we use cookies and tracking technologies',
      icon: Cookie,
      link: '#cookie-policy',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Impressum',
      description: 'Legal company information and contact details',
      icon: Building,
      link: '#impressum',
      color: 'from-orange-500 to-red-500'
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
          marginBottom: '24px',
          boxShadow: isDark 
            ? '0 0 30px rgba(6, 182, 212, 0.2)' 
            : '0 0 30px rgba(6, 182, 212, 0.3)'
        }}>
          <Scale style={{ 
            width: '20px', 
            height: '20px',
            color: isDark ? '#22d3ee' : '#0891b2'
          }} />
          <span style={{
            fontWeight: 700,
            color: isDark ? '#22d3ee' : '#0891b2'
          }}>
            Legal Documentation
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
          Legal & Compliance
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: isDark ? '#cbd5e1' : '#64748b', 
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Our commitment to transparency and legal compliance
        </p>
      </div>

      {/* Legal Documents Grid */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {legalDocs.map((doc) => (
          <a
            key={doc.title}
            href={doc.link}
            style={{
              textDecoration: 'none',
              background: isDark 
                ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                : 'rgba(255, 255, 255, 0.9)',
              border: isDark 
                ? '1px solid rgba(6, 182, 212, 0.3)' 
                : '1px solid rgba(226, 232, 240, 0.8)',
              borderRadius: '16px',
              padding: '32px',
              transition: 'all 0.3s',
              boxShadow: isDark 
                ? '0 4px 20px rgba(6, 182, 212, 0.1)' 
                : '0 4px 16px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.8)';
              e.currentTarget.style.boxShadow = isDark 
                ? '0 12px 40px rgba(6, 182, 212, 0.25)' 
                : '0 8px 32px rgba(6, 182, 212, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = isDark 
                ? 'rgba(6, 182, 212, 0.3)' 
                : 'rgba(226, 232, 240, 0.8)';
              e.currentTarget.style.boxShadow = isDark 
                ? '0 4px 20px rgba(6, 182, 212, 0.1)' 
                : '0 4px 16px rgba(0,0,0,0.06)';
            }}
          >
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${doc.color.split(' ')[1]}, ${doc.color.split(' ')[3]})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}>
              <doc.icon style={{ width: '32px', height: '32px', color: 'white' }} />
            </div>

            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '12px',
              color: isDark ? '#f1f5f9' : '#1e293b'
            }}>
              {doc.title}
            </h3>

            <p style={{
              color: isDark ? '#cbd5e1' : '#64748b',
              lineHeight: 1.6
            }}>
              {doc.description}
            </p>
          </a>
        ))}
      </div>

      {/* Company Info Footer */}
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto 40px',
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: isDark 
          ? '1px solid rgba(6, 182, 212, 0.2)' 
          : '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '16px',
          color: isDark ? '#f1f5f9' : '#1e293b'
        }}>
          Need Legal Assistance?
        </h3>
        <p style={{
          fontSize: '0.875rem',
          color: isDark ? '#94a3b8' : '#64748b',
          marginBottom: '24px'
        }}>
          For legal inquiries, please contact: <a 
            href="mailto:info@mobileintellect.com"
            style={{
              color: '#22d3ee',
              textDecoration: 'none',
              fontWeight: 600
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