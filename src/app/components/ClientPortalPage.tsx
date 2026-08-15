import { useState } from 'react';
import { Send, Calendar, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, Clock, Briefcase } from 'lucide-react';

function saveLocal(storageKey: string, data: object): { ok: boolean } {
  try {
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const id = `${storageKey.startsWith('mitai_b') ? 'bkg' : 'msg'}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    existing.unshift({ id, ...data, createdAt: new Date().toISOString() });
    localStorage.setItem(storageKey, JSON.stringify(existing));
    return { ok: true };
  } catch {
    return { ok: false };
  }
}

const SERVICES = [
  'AI Systems & Automation',
  'Web Development',
  'Mobile App (iOS/Android)',
  'UI/UX Design',
  'Hardware / MITAI Phone',
  'E-Commerce Platform',
  'Digital Advertising',
  'Business Consulting',
  'Investment Inquiry',
  'Other',
];

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '13:00', '13:30', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00',
];

type Tab = 'message' | 'booking';

export default function ClientPortalPage() {
  const [tab, setTab] = useState<Tab>('message');

  // Message form state
  const [msgForm, setMsgForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [msgLoading, setMsgLoading] = useState(false);
  const [msgResult, setMsgResult] = useState<{ ok: boolean; text: string } | null>(null);

  // Booking form state
  const [bkgForm, setBkgForm] = useState({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' });
  const [bkgLoading, setBkgLoading] = useState(false);
  const [bkgResult, setBkgResult] = useState<{ ok: boolean; text: string } | null>(null);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsgLoading(true);
    setMsgResult(null);
    const result = saveLocal('mitai_messages', { ...msgForm, status: 'unread' });
    if (result.ok) {
      setMsgResult({ ok: true, text: 'Your message has been sent! We will reply within 24 hours.' });
      setMsgForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setMsgResult({ ok: false, text: 'Failed to send message. Please try again.' });
    }
    setMsgLoading(false);
  };

  const sendBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setBkgLoading(true);
    setBkgResult(null);
    const result = saveLocal('mitai_bookings', { ...bkgForm, status: 'pending' });
    if (result.ok) {
      setBkgResult({ ok: true, text: 'Booking request received! We will confirm your appointment shortly.' });
      setBkgForm({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' });
    } else {
      setBkgResult({ ok: false, text: 'Failed to submit booking. Please try again.' });
    }
    setBkgLoading(false);
  };

  const inputClass = "w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors";
  const labelClass = "block text-sm font-medium text-slate-400 mb-1.5";

  return (
    <div className="min-h-screen bg-slate-950 py-24 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            CLIENT PORTAL
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch with MITAI</h1>
          <p className="text-slate-400 text-lg">Send us a message or book a consultation directly.</p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl border border-slate-800 bg-slate-900 p-1 mb-8">
          <button
            onClick={() => setTab('message')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${tab === 'message' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            <MessageSquare size={16} /> Send Message
          </button>
          <button
            onClick={() => setTab('booking')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${tab === 'booking' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            <Calendar size={16} /> Book a Meeting
          </button>
        </div>

        {/* Message Form */}
        {tab === 'message' && (
          <form onSubmit={sendMessage} className="space-y-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-3.5 text-slate-500" />
                  <input className={inputClass + " pl-9"} placeholder="John Doe" required value={msgForm.name} onChange={e => setMsgForm(p => ({ ...p, name: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-3.5 text-slate-500" />
                  <input type="email" className={inputClass + " pl-9"} placeholder="you@email.com" required value={msgForm.email} onChange={e => setMsgForm(p => ({ ...p, email: e.target.value }))} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Phone</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-3.5 text-slate-500" />
                  <input className={inputClass + " pl-9"} placeholder="+49 123 456 789" value={msgForm.phone} onChange={e => setMsgForm(p => ({ ...p, phone: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Subject</label>
                <input className={inputClass} placeholder="Project inquiry..." value={msgForm.subject} onChange={e => setMsgForm(p => ({ ...p, subject: e.target.value }))} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Message *</label>
              <textarea className={inputClass + " resize-none"} rows={5} placeholder="Tell us about your project or inquiry..." required value={msgForm.message} onChange={e => setMsgForm(p => ({ ...p, message: e.target.value }))} />
            </div>

            {msgResult && (
              <div className={`flex items-start gap-3 p-4 rounded-xl border ${msgResult.ok ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                {msgResult.ok ? <CheckCircle size={18} className="mt-0.5 shrink-0" /> : <AlertCircle size={18} className="mt-0.5 shrink-0" />}
                <span className="text-sm">{msgResult.text}</span>
              </div>
            )}

            <button type="submit" disabled={msgLoading} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-base hover:opacity-90 transition-opacity disabled:opacity-50">
              {msgLoading ? 'Sending...' : <><Send size={18} /> Send Message</>}
            </button>
          </form>
        )}

        {/* Booking Form */}
        {tab === 'booking' && (
          <form onSubmit={sendBooking} className="space-y-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-3.5 text-slate-500" />
                  <input className={inputClass + " pl-9"} placeholder="John Doe" required value={bkgForm.name} onChange={e => setBkgForm(p => ({ ...p, name: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-3.5 text-slate-500" />
                  <input type="email" className={inputClass + " pl-9"} placeholder="you@email.com" required value={bkgForm.email} onChange={e => setBkgForm(p => ({ ...p, email: e.target.value }))} />
                </div>
              </div>
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-3.5 text-slate-500" />
                <input className={inputClass + " pl-9"} placeholder="+49 123 456 789" value={bkgForm.phone} onChange={e => setBkgForm(p => ({ ...p, phone: e.target.value }))} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Service *</label>
              <div className="relative">
                <Briefcase size={16} className="absolute left-3 top-3.5 text-slate-500" />
                <select className={inputClass + " pl-9 appearance-none"} required value={bkgForm.service} onChange={e => setBkgForm(p => ({ ...p, service: e.target.value }))}>
                  <option value="">Select a service...</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Preferred Date *</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-3.5 text-slate-500" />
                  <input type="date" className={inputClass + " pl-9"} required min={new Date().toISOString().split('T')[0]} value={bkgForm.date} onChange={e => setBkgForm(p => ({ ...p, date: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Preferred Time *</label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3 top-3.5 text-slate-500" />
                  <select className={inputClass + " pl-9 appearance-none"} required value={bkgForm.time} onChange={e => setBkgForm(p => ({ ...p, time: e.target.value }))}>
                    <option value="">Select time...</option>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className={labelClass}>Notes / Additional Info</label>
              <textarea className={inputClass + " resize-none"} rows={3} placeholder="Any specific requirements or questions..." value={bkgForm.notes} onChange={e => setBkgForm(p => ({ ...p, notes: e.target.value }))} />
            </div>

            {bkgResult && (
              <div className={`flex items-start gap-3 p-4 rounded-xl border ${bkgResult.ok ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                {bkgResult.ok ? <CheckCircle size={18} className="mt-0.5 shrink-0" /> : <AlertCircle size={18} className="mt-0.5 shrink-0" />}
                <span className="text-sm">{bkgResult.text}</span>
              </div>
            )}

            <button type="submit" disabled={bkgLoading} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-base hover:opacity-90 transition-opacity disabled:opacity-50">
              {bkgLoading ? 'Submitting...' : <><Calendar size={18} /> Book Appointment</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
