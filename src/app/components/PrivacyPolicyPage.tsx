import { Shield, Eye, Lock, Database, Users, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const isDark = true; // Dark theme only

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal identification information (Name, email address, phone number, etc.)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (Pages visited, features used, time spent)',
        'Purchase and transaction history',
        'Communication preferences and feedback'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'To provide and improve our products and services',
        'To process transactions and send related information',
        'To communicate with you about updates, offers, and support',
        'To analyze usage patterns and optimize user experience',
        'To detect, prevent, and address technical issues and fraud',
        'To comply with legal obligations and protect rights'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'Industry-standard encryption for data transmission (SSL/TLS)',
        'Secure storage with encrypted databases',
        'Regular security audits and vulnerability assessments',
        'Access controls and authentication mechanisms',
        'Employee training on data protection and privacy',
        'Incident response and breach notification procedures'
      ]
    },
    {
      title: 'Your Rights (GDPR Compliance)',
      icon: Users,
      content: [
        'Right to access your personal data',
        'Right to rectification of inaccurate data',
        'Right to erasure ("right to be forgotten")',
        'Right to restriction of processing',
        'Right to data portability',
        'Right to object to processing',
        'Right to withdraw consent at any time'
      ]
    },
    {
      title: 'Data Sharing',
      icon: FileText,
      content: [
        'We do not sell your personal data to third parties',
        'Trusted service providers who assist our operations',
        'Legal authorities when required by law',
        'Business transfers (mergers, acquisitions)',
        'With your explicit consent for specific purposes'
      ]
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
          <Shield style={{ 
            width: '20px', 
            height: '20px',
            color: isDark ? '#22d3ee' : '#0891b2'
          }} />
          <span style={{
            fontWeight: 700,
            color: isDark ? '#22d3ee' : '#0891b2'
          }}>
            Privacy & Data Protection
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
          Privacy Policy
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: isDark ? '#cbd5e1' : '#64748b', 
          maxWidth: '800px',
          margin: '0 auto 20px'
        }}>
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>

        <p style={{ 
          fontSize: '0.875rem', 
          color: isDark ? '#94a3b8' : '#64748b'
        }}>
          Last Updated: January 21, 2026
        </p>
      </div>

      {/* Sections */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 60px', 
        padding: '0 20px'
      }}>
        {sections.map((section, index) => (
          <div key={section.title} style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
              : 'rgba(255, 255, 255, 0.9)',
            border: isDark 
              ? '1px solid rgba(6, 182, 212, 0.3)' 
              : '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '24px',
            boxShadow: isDark 
              ? '0 8px 32px rgba(6, 182, 212, 0.15)' 
              : '0 4px 16px rgba(0,0,0,0.06)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
              }}>
                <section.icon style={{ width: '28px', height: '28px', color: 'white' }} />
              </div>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: isDark ? '#f1f5f9' : '#1e293b'
              }}>
                {section.title}
              </h2>
            </div>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {section.content.map((item, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '16px',
                  color: isDark ? '#cbd5e1' : '#475569',
                  fontSize: '1.05rem',
                  lineHeight: 1.7
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                    marginTop: '10px',
                    flexShrink: 0
                  }}></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Section */}
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
          Questions About Your Privacy?
        </h3>
        <p style={{
          fontSize: '1.05rem',
          color: isDark ? '#cbd5e1' : '#64748b',
          marginBottom: '16px',
          lineHeight: 1.7
        }}>
          If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact our Data Protection Officer at:
        </p>
        <a 
          href="mailto:info@mobileintellect.com"
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
          info@mobileintellect.com
        </a>
      </div>
    </div>
  );
}