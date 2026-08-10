import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { LogIn, LogOut, MessageSquare, Calendar, Trash2, CheckCircle, Clock, XCircle, RefreshCw, Mail, Phone, User, Briefcase, Eye, EyeOff } from 'lucide-react';

const API = `https://${projectId}.supabase.co/functions/v1/make-server-d0a1053e`;

type Message = { id: string; name: string; email: string; phone: string; subject: string; message: string; status: string; createdAt: string };
type Booking = { id: string; name: string; email: string; phone: string; service: string; date: string; time: string; notes: string; status: string; createdAt: string };

const STATUS_COLORS: Record<string, string> = {
  unread: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  read: 'text-slate-400 bg-slate-400/10 border-slate-400/30',
  replied: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  pending: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  confirmed: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  cancelled: 'text-red-400 bg-red-400/10 border-red-400/30',
};

export default function AdminPanel() {
  const [token, setToken] = useState(() => sessionStorage.getItem('mitai_admin_token') || '');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [tab, setTab] = useState<'messages' | 'bookings'>('messages');
  const [messages, setMessages] = useState<Message[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const authHeaders = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    try {
      const res = await fetch(`${API}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${publicAnonKey}` },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        sessionStorage.setItem('mitai_admin_token', data.token);
      } else {
        setLoginError(data.error || 'Invalid password');
      }
    } catch (e) {
      setLoginError(`Login failed: ${e}`);
    }
    setLoginLoading(false);
  };

  const logout = () => {
    setToken('');
    sessionStorage.removeItem('mitai_admin_token');
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [mRes, bRes] = await Promise.all([
        fetch(`${API}/messages`, { headers: authHeaders }),
        fetch(`${API}/bookings`, { headers: authHeaders }),
      ]);
      if (mRes.ok) setMessages(await mRes.json());
      if (bRes.ok) setBookings(await bRes.json());
    } catch (e) {
      console.log('Fetch error:', e);
    }
    setLoading(false);
  };

  useEffect(() => { if (token) fetchData(); }, [token]);

  const updateMsgStatus = async (id: string, status: string) => {
    await fetch(`${API}/messages/${id}/status`, { method: 'PUT', headers: authHeaders, body: JSON.stringify({ status }) });
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status } : m));
  };

  const deleteMsg = async (id: string) => {
    if (!confirm('Delete this message?')) return;
    await fetch(`${API}/messages/${id}`, { method: 'DELETE', headers: authHeaders });
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const updateBkgStatus = async (id: string, status: string) => {
    await fetch(`${API}/bookings/${id}/status`, { method: 'PUT', headers: authHeaders, body: JSON.stringify({ status }) });
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const deleteBkg = async (id: string) => {
    if (!confirm('Delete this booking?')) return;
    await fetch(`${API}/bookings/${id}`, { method: 'DELETE', headers: authHeaders });
    setBookings(prev => prev.filter(b => b.id !== id));
  };

  const fmt = (iso: string) => new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  // Login screen
  if (!token) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 mb-4">
              <LogIn size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">MITAI Admin</h1>
            <p className="text-slate-500 text-sm mt-1">Restricted access</p>
          </div>
          <form onSubmit={login} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1.5">Admin Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 pr-10"
                  placeholder="Enter password..."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={() => setShowPw(p => !p)} className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-300">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {loginError && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">{loginError}</p>}
            <button type="submit" disabled={loginLoading} className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50">
              {loginLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const unreadCount = messages.filter(m => m.status === 'unread').length;
  const pendingCount = bookings.filter(b => b.status === 'pending').length;

  return (
    <div className="min-h-screen bg-slate-950 py-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">MITAI Admin Panel</h1>
            <p className="text-slate-500 text-sm">Client messages & booking management</p>
          </div>
          <div className="flex gap-3">
            <button onClick={fetchData} disabled={loading} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors text-sm">
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
            </button>
            <button onClick={logout} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors text-sm">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Messages', value: messages.length, icon: MessageSquare, color: 'cyan' },
            { label: 'Unread', value: unreadCount, icon: Mail, color: 'amber' },
            { label: 'Total Bookings', value: bookings.length, icon: Calendar, color: 'violet' },
            { label: 'Pending', value: pendingCount, icon: Clock, color: 'orange' },
          ].map(s => (
            <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <s.icon size={18} className={`text-${s.color}-400`} />
                <span className="text-slate-500 text-sm">{s.label}</span>
              </div>
              <p className="text-3xl font-bold text-white">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl border border-slate-800 bg-slate-900 p-1 mb-6">
          <button onClick={() => setTab('messages')} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${tab === 'messages' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
            <MessageSquare size={15} /> Messages {unreadCount > 0 && <span className="bg-amber-500 text-slate-950 text-xs font-bold px-1.5 rounded-full">{unreadCount}</span>}
          </button>
          <button onClick={() => setTab('bookings')} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${tab === 'bookings' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
            <Calendar size={15} /> Bookings {pendingCount > 0 && <span className="bg-amber-500 text-slate-950 text-xs font-bold px-1.5 rounded-full">{pendingCount}</span>}
          </button>
        </div>

        {/* Messages */}
        {tab === 'messages' && (
          <div className="space-y-3">
            {messages.length === 0 && !loading && (
              <div className="text-center py-16 text-slate-600">No messages yet.</div>
            )}
            {messages.map(m => (
              <div key={m.id} className={`bg-slate-900 border rounded-2xl overflow-hidden transition-all ${m.status === 'unread' ? 'border-cyan-500/40' : 'border-slate-800'}`}>
                <div className="flex items-center gap-4 p-5 cursor-pointer" onClick={() => setExpandedId(expandedId === m.id ? null : m.id)}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold shrink-0">
                    {m.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{m.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${STATUS_COLORS[m.status] || STATUS_COLORS.read}`}>{m.status}</span>
                    </div>
                    <p className="text-slate-400 text-sm truncate">{m.subject || m.message}</p>
                  </div>
                  <span className="text-slate-600 text-xs shrink-0">{fmt(m.createdAt)}</span>
                </div>
                {expandedId === m.id && (
                  <div className="border-t border-slate-800 p-5 space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-400"><Mail size={14} />{m.email}</div>
                      {m.phone && <div className="flex items-center gap-2 text-slate-400"><Phone size={14} />{m.phone}</div>}
                      {m.subject && <div className="flex items-center gap-2 text-slate-400"><MessageSquare size={14} />{m.subject}</div>}
                    </div>
                    <div className="bg-slate-800/60 rounded-xl p-4 text-slate-300 text-sm leading-relaxed">{m.message}</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-slate-500 text-sm">Status:</span>
                      {['unread', 'read', 'replied'].map(s => (
                        <button key={s} onClick={() => updateMsgStatus(m.id, s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${m.status === s ? STATUS_COLORS[s] : 'border-slate-700 text-slate-500 hover:text-white'}`}>
                          {s}
                        </button>
                      ))}
                      <div className="ml-auto">
                        <button onClick={() => deleteMsg(m.id)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-400/20 hover:bg-red-400/10 transition-all">
                          <Trash2 size={12} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bookings */}
        {tab === 'bookings' && (
          <div className="space-y-3">
            {bookings.length === 0 && !loading && (
              <div className="text-center py-16 text-slate-600">No bookings yet.</div>
            )}
            {bookings.map(b => (
              <div key={b.id} className={`bg-slate-900 border rounded-2xl overflow-hidden transition-all ${b.status === 'pending' ? 'border-amber-500/40' : 'border-slate-800'}`}>
                <div className="flex items-center gap-4 p-5 cursor-pointer" onClick={() => setExpandedId(expandedId === b.id ? null : b.id)}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold shrink-0">
                    {b.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{b.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${STATUS_COLORS[b.status] || STATUS_COLORS.pending}`}>{b.status}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{b.service} — {b.date} at {b.time}</p>
                  </div>
                  <span className="text-slate-600 text-xs shrink-0">{fmt(b.createdAt)}</span>
                </div>
                {expandedId === b.id && (
                  <div className="border-t border-slate-800 p-5 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-400"><Mail size={14} />{b.email}</div>
                      {b.phone && <div className="flex items-center gap-2 text-slate-400"><Phone size={14} />{b.phone}</div>}
                      <div className="flex items-center gap-2 text-slate-400"><Briefcase size={14} />{b.service}</div>
                      <div className="flex items-center gap-2 text-slate-400"><Calendar size={14} />{b.date} at {b.time}</div>
                    </div>
                    {b.notes && <div className="bg-slate-800/60 rounded-xl p-4 text-slate-300 text-sm leading-relaxed">{b.notes}</div>}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-slate-500 text-sm">Status:</span>
                      {['pending', 'confirmed', 'cancelled'].map(s => (
                        <button key={s} onClick={() => updateBkgStatus(b.id, s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${b.status === s ? STATUS_COLORS[s] : 'border-slate-700 text-slate-500 hover:text-white'}`}>
                          {s}
                        </button>
                      ))}
                      <div className="ml-auto">
                        <button onClick={() => deleteBkg(b.id)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-400/20 hover:bg-red-400/10 transition-all">
                          <Trash2 size={12} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
