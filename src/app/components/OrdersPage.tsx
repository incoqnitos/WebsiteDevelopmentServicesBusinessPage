import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { Package, Plus, X, Check, Clock, XCircle, Calendar, MessageCircle, Phone, Video, Mic, MicOff, Send } from 'lucide-react';

interface Message {
  id: number;
  sender: 'admin' | 'customer';
  text: string;
  timestamp: string;
  customerName?: string;
}

interface ChatSession {
  customerId: string;
  customerName: string;
  customerEmail: string;
  messages: Message[];
  unread: number;
  online: boolean;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  
  // Chat & Communication states
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [callActive, setCallActive] = useState<{ type: 'audio' | 'video' | null; customer: string | null }>({ type: null, customer: null });
  const [recording, setRecording] = useState(false);
  const [muted, setMuted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const API_BASE = 'http://localhost:8000';

  // Fetch orders
  useEffect(() => {
    fetchOrders();
    initializeChatSessions();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/orders`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setOrders(data.orders || []);
      setLoading(false);
    } catch (error) {
      // Mock data for demo (since backend might not be running)
      setOrders([
        {
          id: 1,
          customer_name: 'Tech Innovations Ltd',
          customer_email: 'orders@techinnovations.com',
          items: [
            { product_name: 'ARhont 1 Desktop', quantity: 5, price: 2499, notes: 'Enterprise bundle' },
            { product_name: 'Digital Doctor Watch', quantity: 10, price: 499, notes: 'Health monitoring' }
          ],
          total_amount: 17485,
          status: 'completed',
          created_at: '2025-01-02T10:30:00Z'
        },
        {
          id: 2,
          customer_name: 'Sofia Medical Center',
          customer_email: 'procurement@sofiamedical.bg',
          items: [
            { product_name: 'DigitalDoctor Platform', quantity: 1, price: 12000, notes: 'Annual subscription' },
            { product_name: 'Digital Doctor Watch', quantity: 50, price: 499, notes: 'Staff deployment' }
          ],
          total_amount: 36950,
          status: 'pending',
          created_at: '2025-01-03T14:20:00Z'
        },
        {
          id: 3,
          customer_name: 'Balkan Ventures',
          customer_email: 'invest@balkanvc.com',
          items: [
            { product_name: 'Transcendify Docking Station', quantity: 20, price: 899, notes: 'Office equipment' }
          ],
          total_amount: 17980,
          status: 'shipped',
          created_at: '2025-01-01T09:15:00Z'
        }
      ]);
      setLoading(false);
      setError(null);
    }
  };

  const createOrder = async (orderData: any) => {
    try {
      const response = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      if (!response.ok) throw new Error('Failed to create');
      const data = await response.json();
      setOrders([data.order, ...orders]);
      setShowCreateForm(false);
    } catch (error) {
      // Mock creation for demo
      const newOrder = {
        ...orderData,
        id: orders.length + 1,
        created_at: new Date().toISOString()
      };
      setOrders([newOrder, ...orders]);
      setShowCreateForm(false);
    }
  };

  if (loading) {
    return (
      <Section title="Loading Orders..." subtitle="Fetching your order data">
        <div className="container" style={{ textAlign: 'center', padding: 60 }}>
          <Package style={{ width: 64, height: 64, color: 'var(--brand-2)', margin: '0 auto 20px', animation: 'pulse 2s infinite' }} />
          <p className="muted">Loading order management system...</p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section 
        title="📦 Order Management" 
        subtitle="MITAI Enterprise Orders • Real-time Tracking • Secure Processing"
      >
        <div className="container">
          {/* Header Actions */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: 30,
            flexWrap: 'wrap',
            gap: 16
          }}>
            <div>
              <h2 style={{ margin: 0, color: 'var(--brand-2)' }}>Orders Dashboard</h2>
              <p className="muted">Manage and track all customer orders</p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <a 
                href="#home" 
                style={{
                  padding: '10px 20px',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid var(--line)',
                  borderRadius: 8,
                  color: 'white',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                ← Back
              </a>
              <button
                onClick={() => setShowCreateForm(!showCreateForm)}
                style={{
                  padding: '10px 20px',
                  background: showCreateForm ? 'rgba(255,69,58,0.2)' : 'var(--brand-2)',
                  color: showCreateForm ? '#ff453a' : 'black',
                  border: 'none',
                  borderRadius: 8,
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                {showCreateForm ? <><X style={{ width: 16, height: 16 }} /> Cancel</> : <><Plus style={{ width: 16, height: 16 }} /> New Order</>}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="card" style={{
              background: 'rgba(255,69,58,0.1)',
              border: '1px solid rgba(255,69,58,0.3)',
              marginBottom: 20,
              padding: 16,
              borderRadius: 12
            }}>
              <p style={{ margin: 0, color: '#ff453a' }}>{error}</p>
            </div>
          )}

          {/* Create Order Form */}
          {showCreateForm && (
            <CreateOrderForm onCreate={createOrder} onCancel={() => setShowCreateForm(false)} />
          )}

          {/* Stats Overview */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 16, 
            marginBottom: 30 
          }}>
            <div className="card" style={{ background: 'rgba(20,241,149,0.1)', border: '2px solid var(--brand-2)', padding: 20 }}>
              <div className="small muted">Total Orders</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--brand-2)' }}>{orders.length}</div>
            </div>
            <div className="card" style={{ background: 'rgba(0,0,0,0.3)', padding: 20 }}>
              <div className="small muted">Pending</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#ff9f0a' }}>
                {orders.filter(o => o.status === 'pending').length}
              </div>
            </div>
            <div className="card" style={{ background: 'rgba(0,0,0,0.3)', padding: 20 }}>
              <div className="small muted">Completed</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#34c759' }}>
                {orders.filter(o => o.status === 'completed').length}
              </div>
            </div>
            <div className="card" style={{ background: 'rgba(0,0,0,0.3)', padding: 20 }}>
              <div className="small muted">Total Revenue</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--brand-2)' }}>
                ${orders.reduce((sum, o) => sum + (o.total_amount || 0), 0).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div style={{ marginTop: 30 }}>
            <h3 style={{ marginBottom: 20, color: 'var(--brand-2)' }}>
              <Package style={{ width: 24, height: 24, display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />
              All Orders ({orders.length})
            </h3>
            
            {orders.length === 0 ? (
              <div className="card" style={{ textAlign: 'center', padding: 60, background: 'rgba(0,0,0,0.3)' }}>
                <Package style={{ width: 80, height: 80, color: 'var(--brand-2)', margin: '0 auto 20px', opacity: 0.5 }} />
                <p className="muted" style={{ fontSize: 18 }}>No orders yet. Create your first order!</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: 20 }}>
                {orders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function CreateOrderForm({ onCreate, onCancel }: { onCreate: (data: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    items: [{ product_name: '', quantity: 1, price: 0, notes: '' }],
    total_amount: 0,
    status: 'pending'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const total = formData.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    onCreate({ ...formData, total_amount: total });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { product_name: '', quantity: 1, price: 0, notes: '' }]
    });
  };

  const removeItem = (index: number) => {
    if (formData.items.length > 1) {
      const newItems = formData.items.filter((_, i) => i !== index);
      setFormData({ ...formData, items: newItems });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card" style={{ marginBottom: 30, background: 'rgba(20,241,149,0.05)', border: '2px solid var(--brand-2)', padding: 32 }}>
      <h3 style={{ marginTop: 0, marginBottom: 20, color: 'var(--brand-2)' }}>
        <Plus style={{ width: 24, height: 24, display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />
        Create New Order
      </h3>
      
      <div style={{ display: 'grid', gap: 15, marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Customer Name"
          required
          value={formData.customer_name}
          onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
          style={{
            padding: 12,
            borderRadius: 8,
            border: '1px solid var(--line)',
            background: 'rgba(0,0,0,0.3)',
            color: 'white',
            fontSize: 16
          }}
        />
        
        <input
          type="email"
          placeholder="Customer Email"
          required
          value={formData.customer_email}
          onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
          style={{
            padding: 12,
            borderRadius: 8,
            border: '1px solid var(--line)',
            background: 'rgba(0,0,0,0.3)',
            color: 'white',
            fontSize: 16
          }}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <h4 className="muted" style={{ fontSize: 16, marginBottom: 10 }}>Order Items</h4>
        {formData.items.map((item, index) => (
          <div key={index} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: 10, marginBottom: 10, alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Product Name"
              required
              value={item.product_name}
              onChange={(e) => {
                const newItems = [...formData.items];
                newItems[index].product_name = e.target.value;
                setFormData({ ...formData, items: newItems });
              }}
              style={{
                padding: 10,
                borderRadius: 8,
                border: '1px solid var(--line)',
                background: 'rgba(0,0,0,0.3)',
                color: 'white'
              }}
            />
            <input
              type="number"
              placeholder="Qty"
              required
              min="1"
              value={item.quantity}
              onChange={(e) => {
                const newItems = [...formData.items];
                newItems[index].quantity = parseInt(e.target.value) || 1;
                setFormData({ ...formData, items: newItems });
              }}
              style={{
                padding: 10,
                borderRadius: 8,
                border: '1px solid var(--line)',
                background: 'rgba(0,0,0,0.3)',
                color: 'white'
              }}
            />
            <input
              type="number"
              placeholder="Price"
              required
              min="0"
              step="0.01"
              value={item.price}
              onChange={(e) => {
                const newItems = [...formData.items];
                newItems[index].price = parseFloat(e.target.value) || 0;
                setFormData({ ...formData, items: newItems });
              }}
              style={{
                padding: 10,
                borderRadius: 8,
                border: '1px solid var(--line)',
                background: 'rgba(0,0,0,0.3)',
                color: 'white'
              }}
            />
            {formData.items.length > 1 && (
              <button
                type="button"
                onClick={() => removeItem(index)}
                style={{
                  padding: '8px 12px',
                  background: 'rgba(255,69,58,0.2)',
                  border: '1px solid rgba(255,69,58,0.4)',
                  borderRadius: 6,
                  color: '#ff453a',
                  cursor: 'pointer'
                }}
              >
                <X style={{ width: 16, height: 16 }} />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          style={{
            marginTop: 10,
            padding: '8px 16px',
            background: 'transparent',
            border: '1px solid var(--brand-2)',
            borderRadius: 8,
            color: 'var(--brand-2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          <Plus style={{ width: 16, height: 16 }} /> Add Item
        </button>
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: '10px 20px',
            background: 'transparent',
            border: '1px solid var(--line)',
            borderRadius: 8,
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            background: 'var(--brand-2)',
            border: 'none',
            borderRadius: 8,
            color: 'black',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          <Check style={{ width: 16, height: 16 }} /> Create Order
        </button>
      </div>
    </form>
  );
}

function OrderCard({ order }: { order: any }) {
  const total = order.items?.reduce((sum: number, item: any) => sum + (item.quantity * item.price), 0) || order.total_amount;
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed': return <Check style={{ width: 16, height: 16 }} />;
      case 'cancelled': return <XCircle style={{ width: 16, height: 16 }} />;
      case 'shipped': return <Package style={{ width: 16, height: 16 }} />;
      default: return <Clock style={{ width: 16, height: 16 }} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return { bg: 'rgba(52,199,89,0.2)', color: '#34c759' };
      case 'cancelled': return { bg: 'rgba(255,69,58,0.2)', color: '#ff453a' };
      case 'shipped': return { bg: 'rgba(100,210,255,0.2)', color: '#64d2ff' };
      default: return { bg: 'rgba(255,159,10,0.2)', color: '#ff9f0a' };
    }
  };

  const statusStyle = getStatusColor(order.status);
  
  return (
    <div className="card" style={{ 
      background: 'rgba(0,0,0,0.4)', 
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--brand-2)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 15 }}>
        <div>
          <h3 style={{ fontSize: 20, marginTop: 0, marginBottom: 5, color: 'var(--brand-2)' }}>
            {order.customer_name}
          </h3>
          <p className="muted" style={{ fontSize: 14, margin: 0 }}>{order.customer_email}</p>
        </div>
        <span style={{
          padding: '6px 12px',
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 700,
          textTransform: 'uppercase',
          background: statusStyle.bg,
          color: statusStyle.color,
          display: 'flex',
          alignItems: 'center',
          gap: 6
        }}>
          {getStatusIcon(order.status)}
          {order.status}
        </span>
      </div>

      <div style={{ marginBottom: 15 }}>
        <h4 className="muted" style={{ fontSize: 14, marginBottom: 10 }}>Items:</h4>
        {order.items?.map((item: any, index: number) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: index < order.items.length - 1 ? '1px solid var(--line)' : 'none'
          }}>
            <span>{item.product_name} × {item.quantity}</span>
            <span style={{ fontWeight: 700, color: 'var(--brand-2)' }}>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        borderTop: '2px solid var(--line)'
      }}>
        <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--brand-2)' }}>
          Total: ${total.toFixed(2)}
        </span>
        <span className="muted" style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Calendar style={{ width: 14, height: 14 }} />
          {order.created_at ? new Date(order.created_at).toLocaleString() : 'N/A'}
        </span>
      </div>
    </div>
  );
}

// Initialize chat sessions from orders
const initializeChatSessions = () => {
  const sessions: ChatSession[] = [
    {
      customerId: 'tech-innovations',
      customerName: 'Tech Innovations Ltd',
      customerEmail: 'orders@techinnovations.com',
      online: true,
      unread: 2,
      messages: [
        { id: 1, sender: 'customer', text: 'Здравейте! Имам въпрос относно поръчката ми.', timestamp: '2025-01-03T10:00:00Z', customerName: 'Tech Innovations Ltd' },
        { id: 2, sender: 'admin', text: 'Здравейте! Разбира се, как мога да ви помогна?', timestamp: '2025-01-03T10:02:00Z' },
        { id: 3, sender: 'customer', text: 'Кога ще пристигнат ARhont устройствата?', timestamp: '2025-01-03T10:05:00Z', customerName: 'Tech Innovations Ltd' },
      ]
    },
    {
      customerId: 'sofia-medical',
      customerName: 'Sofia Medical Center',
      customerEmail: 'procurement@sofiamedical.bg',
      online: false,
      unread: 0,
      messages: [
        { id: 1, sender: 'admin', text: 'Благодарим за поръчката! Ще обработим всичко до утре.', timestamp: '2025-01-03T14:25:00Z' },
      ]
    },
    {
      customerId: 'balkan-ventures',
      customerName: 'Balkan Ventures',
      customerEmail: 'invest@balkanvc.com',
      online: true,
      unread: 1,
      messages: [
        { id: 1, sender: 'customer', text: 'Можете ли да ми изпратите фактурата?', timestamp: '2025-01-03T16:30:00Z', customerName: 'Balkan Ventures' },
      ]
    }
  ];
  setChatSessions(sessions);
};

// Auto-scroll to bottom of messages
useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [chatSessions, activeChat]);

// Send message
const sendMessage = () => {
  if (!messageInput.trim() || !activeChat) return;
  
  setChatSessions(sessions =>
    sessions.map(session =>
      session.customerId === activeChat
        ? {
            ...session,
            messages: [
              ...session.messages,
              {
                id: session.messages.length + 1,
                sender: 'admin',
                text: messageInput,
                timestamp: new Date().toISOString()
              }
            ]
          }
        : session
    )
  );
  setMessageInput('');
};

// Start call
const startCall = (type: 'audio' | 'video', customerId: string) => {
  const session = chatSessions.find(s => s.customerId === customerId);
  if (session) {
    setCallActive({ type, customer: session.customerName });
  }
};

// End call
const endCall = () => {
  setCallActive({ type: null, customer: null });
  setRecording(false);
  setMuted(false);
};

// Toggle recording
const toggleRecording = () => {
  setRecording(!recording);
  // In real app, this would start/stop actual recording
  console.log(recording ? 'Stopping recording...' : 'Starting recording...');
};

const activeChatSession = chatSessions.find(s => s.customerId === activeChat);