import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
function saveMessage(data: object) {
  const key = 'mitai_messages';
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  const id = `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  existing.unshift({ id, ...data, status: 'unread', createdAt: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(existing));
}

export function ContactPage() {
  const isDark = true; // Dark theme only

  const [salesForm, setSalesForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'hardware',
    budget: '',
    message: '',
  });

  const [generalForm, setGeneralForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [salesSubmitted, setSalesSubmitted] = useState(false);
  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [salesLoading, setSalesLoading] = useState(false);
  const [generalLoading, setGeneralLoading] = useState(false);

  const handleSalesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSalesForm({ ...salesForm, [e.target.name]: e.target.value });
  };

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setGeneralForm({ ...generalForm, [e.target.name]: e.target.value });
  };

  const handleSalesSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSalesLoading(true);
    saveMessage({
      name: salesForm.name,
      email: salesForm.email,
      phone: '',
      subject: `Sales – ${salesForm.interest}${salesForm.company ? ' | ' + salesForm.company : ''}${salesForm.budget ? ' | Budget: ' + salesForm.budget : ''}`,
      message: salesForm.message,
    });
    setSalesLoading(false);
    setSalesSubmitted(true);
    setTimeout(() => {
      setSalesSubmitted(false);
      setSalesForm({ name: '', email: '', company: '', interest: 'hardware', budget: '', message: '' });
    }, 3000);
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralLoading(true);
    saveMessage({
      name: generalForm.name,
      email: generalForm.email,
      phone: '',
      subject: generalForm.subject,
      message: generalForm.message,
    });
    setGeneralLoading(false);
    setGeneralSubmitted(true);
    setTimeout(() => {
      setGeneralSubmitted(false);
      setGeneralForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: isDark 
        ? 'linear-gradient(to bottom, #000000, #0a0e1a, #020617)'
        : 'linear-gradient(to bottom, #f8fafc, #e2e8f0)',
      padding: '80px 24px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: isDark 
              ? 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))' 
              : 'linear-gradient(to right, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))',
            backdropFilter: 'blur(8px)',
            border: isDark 
              ? '1px solid rgba(6, 182, 212, 0.3)' 
              : '2px solid rgba(6, 182, 212, 0.5)',
            borderRadius: '50px',
            color: '#22d3ee',
            fontWeight: 700,
            marginBottom: '24px',
            boxShadow: isDark 
              ? '0 0 30px rgba(6, 182, 212, 0.2)' 
              : '0 0 30px rgba(6, 182, 212, 0.3)'
          }}>
            Get In Touch
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 4rem)',
            fontWeight: 700,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Contact MITAI
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: isDark ? '#cbd5e1' : '#64748b',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Whether you're interested in our products or have a general inquiry, we're here to help
          </p>
        </div>

        {/* Contact Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '64px'
        }}>
          <div style={{
            padding: '32px',
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
              : 'rgba(255, 255, 255, 0.9)',
            border: isDark 
              ? '1px solid rgba(6, 182, 212, 0.3)' 
              : '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Mail style={{ width: '24px', height: '24px', color: '#22d3ee' }} />
            </div>
            <h3 style={{
              color: isDark ? '#f1f5f9' : '#1e293b',
              fontWeight: 600,
              marginBottom: '8px'
            }}>Email</h3>
            <a 
              href="mailto:info@mobileintellect.com" 
              style={{
                color: '#22d3ee',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              info@mobileintellect.com
            </a>
          </div>

          <div style={{
            padding: '32px',
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
              : 'rgba(255, 255, 255, 0.9)',
            border: isDark 
              ? '1px solid rgba(6, 182, 212, 0.3)' 
              : '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Phone style={{ width: '24px', height: '24px', color: '#22d3ee' }} />
            </div>
            <h3 style={{
              color: isDark ? '#f1f5f9' : '#1e293b',
              fontWeight: 600,
              marginBottom: '8px'
            }}>Phone</h3>
            <a 
              href="tel:+18005551234" 
              style={{
                color: isDark ? '#cbd5e1' : '#64748b',
                textDecoration: 'none'
              }}
            >
              +1 (800) 555-1234
            </a>
          </div>

          <div style={{
            padding: '32px',
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
              : 'rgba(255, 255, 255, 0.9)',
            border: isDark 
              ? '1px solid rgba(6, 182, 212, 0.3)' 
              : '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <MapPin style={{ width: '24px', height: '24px', color: '#22d3ee' }} />
            </div>
            <h3 style={{
              color: isDark ? '#f1f5f9' : '#1e293b',
              fontWeight: 600,
              marginBottom: '8px'
            }}>Location</h3>
            <div style={{
              color: isDark ? '#cbd5e1' : '#64748b'
            }}>
              Schönauer Straße 6<br />68307 Mannheim, Germany
            </div>
          </div>
        </div>

        {/* Two Contact Forms */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '32px'
        }}>
          {/* Sales Department Form */}
          <div style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
              : 'rgba(255, 255, 255, 0.9)',
            border: isDark 
              ? '1px solid rgba(6, 182, 212, 0.3)' 
              : '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            padding: '32px'
          }}>
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: isDark 
                  ? 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))' 
                  : 'linear-gradient(to right, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))',
                backdropFilter: 'blur(8px)',
                border: isDark 
                  ? '1px solid rgba(6, 182, 212, 0.3)' 
                  : '2px solid rgba(6, 182, 212, 0.5)',
                borderRadius: '50px',
                color: '#22d3ee',
                fontWeight: 700,
                marginBottom: '16px',
                boxShadow: isDark 
                  ? '0 0 30px rgba(6, 182, 212, 0.2)' 
                  : '0 0 30px rgba(6, 182, 212, 0.3)'
              }}>
                Sales Department
              </div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#f1f5f9',
                marginBottom: '16px'
              }}>
                Interested in Our Products?
              </h2>
              <p style={{
                color: isDark ? '#cbd5e1' : '#64748b'
              }}>
                Contact our sales team to learn more about MITAI hardware, software, and investment opportunities.
              </p>
            </div>

            <form onSubmit={handleSalesSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {salesSubmitted ? (
                <div style={{ textAlign: 'center', padding: '32px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(34, 211, 238, 0.2))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <CheckCircle style={{ width: '32px', height: '32px', color: '#22d3ee' }} />
                  </div>
                  <h3 style={{
                    color: '#f1f5f9',
                    fontSize: '1.5rem',
                    fontWeight: 700
                  }}>
                    Message Sent!
                  </h3>
                  <p style={{
                    color: isDark ? '#cbd5e1' : '#64748b'
                  }}>
                    Our sales team will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="sales-name" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="sales-name"
                      name="name"
                      value={salesForm.name}
                      onChange={handleSalesChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                        placeholder: 'John Doe'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="sales-email" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="sales-email"
                      name="email"
                      value={salesForm.email}
                      onChange={handleSalesChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                        placeholder: 'john@company.com'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="sales-company" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="sales-company"
                      name="company"
                      value={salesForm.company}
                      onChange={handleSalesChange}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                        placeholder: 'Your Company'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="sales-interest" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Product Interest *
                    </label>
                    <select
                      id="sales-interest"
                      name="interest"
                      value={salesForm.interest}
                      onChange={handleSalesChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9'
                      }}
                    >
                      <option value="hardware">MITAI Hardware</option>
                      <option value="software">MITAI Software</option>
                      <option value="robotics">Robotics Solutions</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="sales-budget" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Budget Range
                    </label>
                    <select
                      id="sales-budget"
                      name="budget"
                      value={salesForm.budget}
                      onChange={handleSalesChange}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9'
                      }}
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="sales-message" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Message *
                    </label>
                    <textarea
                      id="sales-message"
                      name="message"
                      value={salesForm.message}
                      onChange={handleSalesChange}
                      required
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                        placeholder: 'Tell us about your needs...',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={salesLoading}
                    style={{
                      width: '100%',
                      padding: '12px 24px',
                      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                      color: '#f1f5f9',
                      borderRadius: '8px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      opacity: salesLoading ? 0.6 : 1,
                    }}
                  >
                    {salesLoading ? 'Sending...' : <><span>Contact Sales</span><Send style={{ width: '20px', height: '20px' }} /></>}
                  </button>
                </>
              )}
            </form>
          </div>

          {/* General Contact Form */}
          <div style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
              : 'rgba(255, 255, 255, 0.9)',
            border: isDark 
              ? '1px solid rgba(6, 182, 212, 0.3)' 
              : '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            padding: '32px'
          }}>
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: isDark 
                  ? 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))' 
                  : 'linear-gradient(to right, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))',
                backdropFilter: 'blur(8px)',
                border: isDark 
                  ? '1px solid rgba(6, 182, 212, 0.3)' 
                  : '2px solid rgba(6, 182, 212, 0.5)',
                borderRadius: '50px',
                color: '#22d3ee',
                fontWeight: 700,
                marginBottom: '16px',
                boxShadow: isDark 
                  ? '0 0 30px rgba(6, 182, 212, 0.2)' 
                  : '0 0 30px rgba(6, 182, 212, 0.3)'
              }}>
                General Inquiries
              </div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#f1f5f9',
                marginBottom: '16px'
              }}>
                General Contact
              </h2>
              <p style={{
                color: isDark ? '#cbd5e1' : '#64748b'
              }}>
                Have a question or need support? Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleGeneralSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {generalSubmitted ? (
                <div style={{ textAlign: 'center', padding: '32px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(34, 211, 238, 0.2))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <CheckCircle style={{ width: '32px', height: '32px', color: '#22d3ee' }} />
                  </div>
                  <h3 style={{
                    color: '#f1f5f9',
                    fontSize: '1.5rem',
                    fontWeight: 700
                  }}>
                    Message Sent!
                  </h3>
                  <p style={{
                    color: isDark ? '#cbd5e1' : '#64748b'
                  }}>
                    We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="general-name" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="general-name"
                      name="name"
                      value={generalForm.name}
                      onChange={handleGeneralChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                        placeholder: 'John Doe'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="general-email" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="general-email"
                      name="email"
                      value={generalForm.email}
                      onChange={handleGeneralChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                        placeholder: 'john@example.com'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="general-subject" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Subject *
                    </label>
                    <select
                      id="general-subject"
                      name="subject"
                      value={generalForm.subject}
                      onChange={handleGeneralChange}
                      required
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9'
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Product Feedback</option>
                      <option value="press">Press Inquiry</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="general-message" style={{
                      color: isDark ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Message *
                    </label>
                    <textarea
                      id="general-message"
                      name="message"
                      value={generalForm.message}
                      onChange={handleGeneralChange}
                      required
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                          : 'rgba(255, 255, 255, 0.9)',
                        border: isDark 
                          ? '1px solid rgba(6, 182, 212, 0.3)' 
                          : '1px solid rgba(226, 232, 240, 0.8)',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                        placeholder: 'How can we help you?',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={generalLoading}
                    style={{
                      width: '100%',
                      padding: '12px 24px',
                      background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
                      color: '#f1f5f9',
                      borderRadius: '8px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      opacity: generalLoading ? 0.6 : 1,
                    }}
                  >
                    {generalLoading ? 'Sending...' : <><span>Send Message</span><Send style={{ width: '20px', height: '20px' }} /></>}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          marginTop: '64px',
          padding: '32px',
          background: isDark 
            ? 'linear-gradient(to bottom right, rgba(34, 211, 238, 0.1), rgba(66, 153, 225, 0.1))' 
            : 'linear-gradient(to bottom right, rgba(34, 211, 238, 0.1), rgba(66, 153, 225, 0.1))',
          border: isDark 
            ? '1px solid rgba(6, 182, 212, 0.3)' 
            : '1px solid rgba(226, 232, 240, 0.8)',
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <h3 style={{
            color: '#f1f5f9',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            Quick Response Guarantee
          </h3>
          <p style={{
            color: isDark ? '#cbd5e1' : '#64748b',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            We typically respond to all sales inquiries within 4 hours and general inquiries within 24 hours during business days. For urgent matters, please call us directly.
          </p>
        </div>
      </div>
    </div>
  );
}