import { FileText, Check, XCircle, AlertTriangle } from 'lucide-react';

export default function TermsOfServicePage() {
  const isDark = true; // Dark theme only

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
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 700, 
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Terms of Service
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: isDark ? '#cbd5e1' : '#64748b', 
          maxWidth: '800px',
          margin: '0 auto 20px'
        }}>
          Please read these terms carefully before using our services
        </p>

        <p style={{ 
          fontSize: '0.875rem', 
          color: isDark ? '#94a3b8' : '#64748b'
        }}>
          Last Updated: January 21, 2026
        </p>
      </div>

      {/* Content */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 60px', 
        padding: '0 20px'
      }}>
        <div style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
            : 'rgba(255, 255, 255, 0.9)',
          border: isDark 
            ? '1px solid rgba(6, 182, 212, 0.3)' 
            : '1px solid rgba(226, 232, 240, 0.8)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: isDark 
            ? '0 8px 32px rgba(6, 182, 212, 0.15)' 
            : '0 4px 16px rgba(0,0,0,0.06)',
          color: isDark ? '#cbd5e1' : '#475569',
          fontSize: '1.05rem',
          lineHeight: 1.8
        }}>
          <h2 style={{ 
            color: isDark ? '#f1f5f9' : '#1e293b', 
            marginBottom: '24px',
            fontSize: '1.75rem'
          }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ marginBottom: '32px' }}>
            By accessing and using Mobile Intellect Technology services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>

          <h2 style={{ 
            color: isDark ? '#f1f5f9' : '#1e293b', 
            marginBottom: '24px',
            fontSize: '1.75rem'
          }}>
            2. Use License
          </h2>
          <p style={{ marginBottom: '16px' }}>
            We grant you a limited, non-exclusive, non-transferable license to use our products and services for your personal or business purposes, subject to these terms.
          </p>
          <ul style={{ marginBottom: '32px', listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <Check style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
              Use our software on devices you own or control
            </li>
            <li style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <Check style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
              Access cloud services with your subscription
            </li>
            <li style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <XCircle style={{ width: '20px', height: '20px', color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
              Reverse engineer, decompile, or disassemble our software
            </li>
            <li style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <XCircle style={{ width: '20px', height: '20px', color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
              Resell or redistribute our products without authorization
            </li>
          </ul>

          <h2 style={{ 
            color: isDark ? '#f1f5f9' : '#1e293b', 
            marginBottom: '24px',
            fontSize: '1.75rem'
          }}>
            3. Payment Terms
          </h2>
          <p style={{ marginBottom: '32px' }}>
            All purchases are subject to our pricing and payment terms. Subscriptions are billed monthly or annually as selected. Refunds are available within 30 days of purchase for hardware products, and 14 days for software licenses.
          </p>

          <h2 style={{ 
            color: isDark ? '#f1f5f9' : '#1e293b', 
            marginBottom: '24px',
            fontSize: '1.75rem'
          }}>
            4. Intellectual Property
          </h2>
          <p style={{ marginBottom: '32px' }}>
            All content, trademarks, logos, and intellectual property are owned by MIT 1985 LTD. Unauthorized use is prohibited and may result in legal action.
          </p>

          <h2 style={{ 
            color: isDark ? '#f1f5f9' : '#1e293b', 
            marginBottom: '24px',
            fontSize: '1.75rem'
          }}>
            5. Limitation of Liability
          </h2>
          <p style={{ marginBottom: '32px' }}>
            To the maximum extent permitted by law, MIT 1985 LTD shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.
          </p>

          <h2 style={{ 
            color: isDark ? '#f1f5f9' : '#1e293b', 
            marginBottom: '24px',
            fontSize: '1.75rem'
          }}>
            6. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of Bulgaria and the European Union. Any disputes shall be resolved in the courts of Burgas, Bulgaria.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 40px',
        padding: '32px 20px',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '1.05rem',
          color: isDark ? '#cbd5e1' : '#64748b',
          marginBottom: '16px'
        }}>
          For questions regarding these terms, contact:{' '}
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