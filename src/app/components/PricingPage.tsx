import { Check, X, Zap } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const isDark = true;

  const plans = [
    {
      name: 'Free',
      subtitle: 'Explore ChatMITAI',
      price: { monthly: 0, yearly: 0 },
      features: [
        '50 chat messages/day',
        '2 Standard AI Agents',
        'RETINA AI - Read & Explain',
        '10 GPU hours/month',
        '0 GB Knowledge Base',
        '10 timestamp verifications/month',
        'Library preview only',
        'Read-only community chat',
        '1 team member'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      subtitle: 'For power users',
      price: { monthly: 29, yearly: 24 },
      features: [
        'Unlimited chat messages',
        'Domain AI Agents',
        'RETINA AI - Full Analysis',
        '10 GPU hours/month',
        '2 GB Knowledge Base',
        '50 timestamp verifications/month',
        'Full library access',
        'Full community chat access',
        '1 team member'
      ],
      cta: 'Subscribe',
      popular: true
    },
    {
      name: 'Business',
      subtitle: 'For teams & practices',
      price: { monthly: 99, yearly: 82 },
      features: [
        'Unlimited chat messages',
        'All AI Agents',
        'RETINA AI - Full + Experiments',
        '10 GPU hours/month',
        '10 GB Knowledge Base',
        '200 timestamp verifications/month',
        'Full library access',
        'Business channels',
        '5 team members',
        'Robot simulation'
      ],
      cta: 'Subscribe',
      popular: false
    },
    {
      name: 'Experimental Lab',
      subtitle: 'For researchers',
      price: { monthly: 399, yearly: 331 },
      features: [
        'Unlimited chat messages',
        'Custom AI Agents',
        'RETINA AI - Full + Custom Laws',
        'Limited auto-training (10 GPU hrs)',
        '100 GPU hours/month',
        '50 GB Knowledge Base',
        'Unlimited timestamp verifications + IP Vault',
        'Full + Early access library',
        'Lab channels',
        '10 team members',
        'Real robot integration',
        'Publish to library'
      ],
      cta: 'Subscribe',
      popular: false
    },
    {
      name: 'Deep Training Lab',
      subtitle: 'Full AI Laboratory',
      price: { monthly: 1490, yearly: 1237 },
      features: [
        'Unlimited everything',
        'Custom AI Agents',
        'RETINA AI - Full + Custom Laws',
        'Full auto-training (100+ GPU hrs)',
        'Unlimited GPU hours',
        'Unlimited Knowledge Base',
        'Unlimited timestamp verifications + IP Vault',
        'Full + Co-branding library',
        'Private enterprise channels',
        'Unlimited team members',
        'Real robot integration',
        'Publish to library'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const comparisonFeatures = [
    { name: 'Chat Messages', free: '50/day', pro: 'Unlimited', business: 'Unlimited', experimental: 'Unlimited', deep: 'Unlimited' },
    { name: 'AI Agents', free: '2 Standard Agents', pro: 'Domain Agents', business: 'All Agents', experimental: 'Custom Agents', deep: 'Custom Agents' },
    { name: 'RETINA AI', free: 'Read & Explain', pro: 'Full Analysis', business: 'Full + Experiments', experimental: 'Full + Custom Laws', deep: 'Full + Custom Laws' },
    { name: 'Auto-Training', free: false, pro: false, business: false, experimental: 'Limited (10 GPU hrs)', deep: 'Full (100+ GPU hrs)' },
    { name: 'GPU Hours/month', free: '10', pro: '10', business: '10', experimental: '100', deep: 'Unlimited' },
    { name: 'Knowledge Base', free: '0 GB', pro: '2 GB', business: '10 GB', experimental: '50 GB', deep: 'Unlimited' },
    { name: 'Timestamp Verifications', free: '10/month', pro: '50/month', business: '200/month', experimental: 'Unlimited + IP Vault', deep: 'Unlimited + IP Vault' },
    { name: 'Publish to Library', free: false, pro: false, business: false, experimental: true, deep: true },
    { name: 'Library Access', free: 'Preview only', pro: 'Full Access', business: 'Full Access', experimental: 'Full + Early Access', deep: 'Full + Co-branding' },
    { name: 'Community Chat', free: 'Read only', pro: 'Full Access', business: 'Business Channels', experimental: 'Lab Channels', deep: 'Private Enterprise' },
    { name: 'Robot Simulation', free: false, pro: false, business: true, experimental: true, deep: true },
    { name: 'Real Robot Integration', free: false, pro: false, business: false, experimental: true, deep: true },
    { name: 'Team Members', free: '1', pro: '1', business: '5', experimental: '10', deep: 'Unlimited' },
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
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 700, 
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Choose Your Plan
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: isDark ? '#cbd5e1' : '#64748b', 
          marginBottom: '40px' 
        }}>
          From personal AI assistant to full research laboratory
        </p>

        {/* Important Notice */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 40px',
          padding: '24px',
          background: isDark 
            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))' 
            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08))',
          borderRadius: '16px',
          border: isDark 
            ? '1px solid rgba(6, 182, 212, 0.5)' 
            : '2px solid rgba(59, 130, 246, 0.3)',
          boxShadow: isDark 
            ? '0 0 30px rgba(6, 182, 212, 0.2), 0 8px 32px rgba(6, 182, 212, 0.15)' 
            : '0 0 30px rgba(59, 130, 246, 0.15)'
        }}>
          <div style={{ 
            fontSize: '1.125rem', 
            fontWeight: 600, 
            marginBottom: '12px',
            color: isDark ? '#22d3ee' : '#1e40af'
          }}>
            📦 Cloud & Hardware Information
          </div>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            textAlign: 'left',
            color: isDark ? '#e2e8f0' : '#334155',
            fontSize: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: isDark ? '#22d3ee' : '#3b82f6', flexShrink: 0 }}>☁️</span>
              <span><strong>In Cloud:</strong> You can purchase a cloud subscription for access to MITAI services online</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: isDark ? '#8b5cf6' : '#7c3aed', flexShrink: 0 }}>💻</span>
              <span><strong>On-Premise:</strong> Software is installed only on a laptop or workstation purchased from us upon order</span>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '16px',
          background: isDark 
            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
            : 'rgba(255, 255, 255, 0.9)',
          padding: '8px 24px',
          borderRadius: '50px',
          border: isDark 
            ? '1px solid rgba(6, 182, 212, 0.4)' 
            : '1px solid rgba(203, 213, 225, 0.5)',
          boxShadow: isDark 
            ? '0 4px 20px rgba(6, 182, 212, 0.15), 0 0 40px rgba(6, 182, 212, 0.08)' 
            : '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <button
            onClick={() => setBillingCycle('monthly')}
            style={{
              padding: '8px 20px',
              borderRadius: '50px',
              background: billingCycle === 'monthly' ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'transparent',
              color: billingCycle === 'monthly' ? 'white' : isDark ? '#cbd5e1' : '#475569',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s'
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            style={{
              padding: '8px 20px',
              borderRadius: '50px',
              background: billingCycle === 'yearly' ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'transparent',
              color: billingCycle === 'yearly' ? 'white' : isDark ? '#cbd5e1' : '#475569',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            Yearly
            <span style={{ 
              fontSize: '0.75rem', 
              padding: '2px 8px', 
              background: '#10b981',
              borderRadius: '12px',
              color: 'white'
            }}>
              Save 17%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 20px 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              position: 'relative',
              background: plan.popular 
                ? isDark 
                  ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
                : isDark 
                  ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                  : 'rgba(255, 255, 255, 0.9)',
              border: plan.popular 
                ? isDark
                  ? '1px solid rgba(6, 182, 212, 0.6)'
                  : '2px solid rgba(139, 92, 246, 0.5)'
                : isDark 
                  ? '1px solid rgba(6, 182, 212, 0.3)'
                  : '1px solid rgba(226, 232, 240, 0.8)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(10px)',
              boxShadow: plan.popular
                ? isDark 
                  ? '0 8px 32px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)'
                  : '0 4px 16px rgba(0,0,0,0.06)'
                : isDark 
                  ? '0 4px 20px rgba(6, 182, 212, 0.1)'
                  : '0 4px 16px rgba(0,0,0,0.06)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = isDark 
                ? 'rgba(6, 182, 212, 0.8)' 
                : 'rgba(139, 92, 246, 0.8)';
              e.currentTarget.style.boxShadow = isDark 
                ? '0 12px 40px rgba(6, 182, 212, 0.25), 0 0 80px rgba(6, 182, 212, 0.15)'
                : '0 8px 32px rgba(139, 92, 246, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = plan.popular 
                ? isDark
                  ? 'rgba(6, 182, 212, 0.6)'
                  : 'rgba(139, 92, 246, 0.5)'
                : isDark 
                  ? 'rgba(6, 182, 212, 0.3)'
                  : 'rgba(226, 232, 240, 0.8)';
              e.currentTarget.style.boxShadow = plan.popular
                ? isDark 
                  ? '0 8px 32px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)'
                  : '0 4px 16px rgba(0,0,0,0.06)'
                : isDark 
                  ? '0 4px 20px rgba(6, 182, 212, 0.1)'
                  : '0 4px 16px rgba(0,0,0,0.06)';
            }}
          >
            {plan.popular && (
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '4px 16px',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
              }}>
                <Zap size={12} fill="white" />
                MOST POPULAR
              </div>
            )}

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                marginBottom: '4px',
                color: isDark ? '#f1f5f9' : '#1e293b'
              }}>
                {plan.name}
              </h3>
              <p style={{ 
                color: isDark ? '#cbd5e1' : '#64748b', 
                fontSize: '0.875rem' 
              }}>
                {plan.subtitle}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span style={{ 
                fontSize: '3rem', 
                fontWeight: 700,
                color: isDark ? '#f1f5f9' : '#1e293b'
              }}>
                €{billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
              </span>
              <span style={{ color: isDark ? '#cbd5e1' : '#64748b' }}>/mo</span>
            </div>

            <button
              style={{
                width: '100%',
                padding: '12px 24px',
                borderRadius: '8px',
                background: plan.popular 
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                  : isDark
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))'
                    : 'rgba(59, 130, 246, 0.08)',
                color: plan.popular ? 'white' : isDark ? '#22d3ee' : '#3b82f6',
                border: plan.popular 
                  ? 'none' 
                  : isDark 
                    ? '1px solid rgba(6, 182, 212, 0.5)' 
                    : '1px solid rgba(59, 130, 246, 0.2)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                marginBottom: '24px',
                transition: 'all 0.3s',
                boxShadow: isDark && !plan.popular 
                  ? '0 0 20px rgba(6, 182, 212, 0.2)' 
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 92, 246, 0.3)';
                } else {
                  e.currentTarget.style.background = isDark 
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3))'
                    : 'rgba(59, 130, 246, 0.12)';
                  if (isDark) {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.4)';
                  }
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = plan.popular 
                  ? 'none' 
                  : isDark 
                    ? '0 0 20px rgba(6, 182, 212, 0.2)' 
                    : 'none';
                if (!plan.popular) {
                  e.currentTarget.style.background = isDark
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))'
                    : 'rgba(59, 130, 246, 0.08)';
                }
              }}
            >
              {plan.cta}
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {plan.features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Check size={18} style={{ color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ 
                    color: isDark ? '#e2e8f0' : '#475569', 
                    fontSize: '0.875rem' 
                  }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          textAlign: 'center', 
          marginBottom: '40px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Feature Comparison
        </h2>

        <div style={{ 
          background: isDark 
            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
            : 'rgba(255, 255, 255, 0.9)',
          borderRadius: '16px',
          border: isDark 
            ? '1px solid rgba(6, 182, 212, 0.3)' 
            : '1px solid rgba(226, 232, 240, 0.8)',
          overflow: 'hidden',
          boxShadow: isDark 
            ? '0 4px 20px rgba(6, 182, 212, 0.1), 0 0 40px rgba(6, 182, 212, 0.05)' 
            : '0 4px 16px rgba(0,0,0,0.06)'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ 
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(30, 58, 138, 0.15))' 
                    : 'rgba(241, 245, 249, 0.8)'
                }}>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'left', 
                    fontWeight: 600,
                    color: isDark ? '#f1f5f9' : '#1e293b',
                    minWidth: '200px'
                  }}>
                    Feature
                  </th>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'center', 
                    fontWeight: 600, 
                    color: isDark ? '#f1f5f9' : '#1e293b', 
                    minWidth: '120px' 
                  }}>Free</th>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'center', 
                    fontWeight: 600, 
                    color: isDark ? '#f1f5f9' : '#1e293b', 
                    minWidth: '120px' 
                  }}>Pro</th>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'center', 
                    fontWeight: 600, 
                    color: isDark ? '#f1f5f9' : '#1e293b', 
                    minWidth: '120px' 
                  }}>Business</th>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'center', 
                    fontWeight: 600, 
                    color: isDark ? '#f1f5f9' : '#1e293b', 
                    minWidth: '140px' 
                  }}>Experimental</th>
                  <th style={{ 
                    padding: '16px', 
                    textAlign: 'center', 
                    fontWeight: 600, 
                    color: isDark ? '#f1f5f9' : '#1e293b', 
                    minWidth: '140px' 
                  }}>Deep Training</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr 
                    key={idx}
                    style={{ 
                      borderTop: isDark 
                        ? '1px solid rgba(6, 182, 212, 0.2)' 
                        : '1px solid rgba(226, 232, 240, 0.5)',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isDark 
                        ? 'rgba(6, 182, 212, 0.08)'
                        : 'rgba(59, 130, 246, 0.03)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <td style={{ 
                      padding: '16px', 
                      color: isDark ? '#e2e8f0' : '#334155', 
                      fontWeight: 500 
                    }}>
                      {feature.name}
                    </td>
                    <td style={{ 
                      padding: '16px', 
                      textAlign: 'center', 
                      color: isDark ? '#cbd5e1' : '#64748b' 
                    }}>
                      {feature.free === true ? <Check size={18} style={{ color: '#10b981', display: 'inline' }} /> :
                       feature.free === false ? <X size={18} style={{ color: '#ef4444', display: 'inline' }} /> :
                       feature.free}
                    </td>
                    <td style={{ 
                      padding: '16px', 
                      textAlign: 'center', 
                      color: isDark ? '#cbd5e1' : '#64748b' 
                    }}>
                      {feature.pro === true ? <Check size={18} style={{ color: '#10b981', display: 'inline' }} /> :
                       feature.pro === false ? <X size={18} style={{ color: '#ef4444', display: 'inline' }} /> :
                       feature.pro}
                    </td>
                    <td style={{ 
                      padding: '16px', 
                      textAlign: 'center', 
                      color: isDark ? '#cbd5e1' : '#64748b' 
                    }}>
                      {feature.business === true ? <Check size={18} style={{ color: '#10b981', display: 'inline' }} /> :
                       feature.business === false ? <X size={18} style={{ color: '#ef4444', display: 'inline' }} /> :
                       feature.business}
                    </td>
                    <td style={{ 
                      padding: '16px', 
                      textAlign: 'center', 
                      color: isDark ? '#cbd5e1' : '#64748b' 
                    }}>
                      {feature.experimental === true ? <Check size={18} style={{ color: '#10b981', display: 'inline' }} /> :
                       feature.experimental === false ? <X size={18} style={{ color: '#ef4444', display: 'inline' }} /> :
                       feature.experimental}
                    </td>
                    <td style={{ 
                      padding: '16px', 
                      textAlign: 'center', 
                      color: isDark ? '#cbd5e1' : '#64748b' 
                    }}>
                      {feature.deep === true ? <Check size={18} style={{ color: '#10b981', display: 'inline' }} /> :
                       feature.deep === false ? <X size={18} style={{ color: '#ef4444', display: 'inline' }} /> :
                       feature.deep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px',
          padding: '40px',
          background: isDark 
            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))'
            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))',
          borderRadius: '16px',
          border: isDark 
            ? '1px solid rgba(6, 182, 212, 0.5)' 
            : '1px solid rgba(139, 92, 246, 0.2)',
          boxShadow: isDark 
            ? '0 8px 32px rgba(6, 182, 212, 0.15), 0 0 60px rgba(6, 182, 212, 0.1)' 
            : '0 4px 16px rgba(139, 92, 246, 0.08)'
        }}>
          <h3 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 700, 
            marginBottom: '12px',
            color: isDark ? '#f1f5f9' : '#1e293b'
          }}>
            Need a custom plan for your organization?
          </h3>
          <p style={{ 
            color: isDark ? '#cbd5e1' : '#64748b', 
            marginBottom: '24px', 
            fontSize: '1.125rem' 
          }}>
            Contact our sales team to discuss enterprise solutions
          </p>
          <button
            onClick={() => window.location.hash = '#contact'}
            style={{
              padding: '14px 32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1.125rem',
              transition: 'all 0.3s',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
            }}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}