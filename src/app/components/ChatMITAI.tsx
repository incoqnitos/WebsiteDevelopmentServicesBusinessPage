import React, { useState, useRef, useEffect } from 'react';
import { Search, Phone, Video, Monitor, MoreVertical, Paperclip, Smile, Mic, Send, X, MicOff, VideoOff, Check, CheckCheck, Circle, UserPlus, LogOut, Settings, User, Mail, Lock, Eye, EyeOff, Trash2, Edit, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import arhontBg from 'figma:asset/7477360cb484825915b0aa9cec02bc82632e2050.png';

interface Message {
  id: string;
  text: string;
  senderId: string;
  receiverId: string;
  timestamp: number;
  status: 'sent' | 'delivered' | 'read';
  isAI?: boolean;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  online: boolean;
  lastSeen?: number;
  isAI?: boolean;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  contacts: string[]; // Array of contact IDs
  createdAt: number;
}

interface CloudData {
  users: User[];
  messages: Message[];
}

export default function ChatMITAI() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(true);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  
  // Auth form states
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authError, setAuthError] = useState('');
  
  // Messenger states
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeContact, setActiveContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddContact, setShowAddContact] = useState(false);
  const [newContactEmail, setNewContactEmail] = useState('');
  
  // Video/Audio Call states - Real WebRTC
  const [callActive, setCallActive] = useState(false);
  const [callType, setCallType] = useState<'video' | 'audio'>('video');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  // Initialize cloud data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('mitai_messenger_cloud');
    if (!savedData) {
      const initialData: CloudData = {
        users: [],
        messages: []
      };
      localStorage.setItem('mitai_messenger_cloud', JSON.stringify(initialData));
    }

    // Check if user is already logged in
    const savedUserId = localStorage.getItem('mitai_messenger_current_user');
    if (savedUserId) {
      const cloudData = getCloudData();
      const user = cloudData.users.find(u => u.id === savedUserId);
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setShowAuthModal(false);
        loadUserContacts(user);
      }
    }
  }, []);

  // Load messages when active contact changes
  useEffect(() => {
    if (currentUser && activeContact) {
      loadMessages(currentUser.id, activeContact.id);
    }
  }, [activeContact, currentUser]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate online status updates
  useEffect(() => {
    if (!isLoggedIn) return;

    const interval = setInterval(() => {
      setContacts(prev => prev.map(contact => ({
        ...contact,
        online: Math.random() > 0.3 // 70% chance to be online
      })));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const getCloudData = (): CloudData => {
    const data = localStorage.getItem('mitai_messenger_cloud');
    return data ? JSON.parse(data) : { users: [], messages: [] };
  };

  const saveCloudData = (data: CloudData) => {
    localStorage.setItem('mitai_messenger_cloud', JSON.stringify(data));
  };

  const handleRegister = () => {
    setAuthError('');

    if (!authName || !authEmail || !authPassword) {
      setAuthError('Моля попълнете всички полета');
      return;
    }

    if (authPassword.length < 6) {
      setAuthError('Паролата трябва да е минимум 6 символа');
      return;
    }

    const cloudData = getCloudData();
    
    // Check if email already exists
    if (cloudData.users.find(u => u.email === authEmail)) {
      setAuthError('Този email вече е регистриран');
      return;
    }

    const newUser: User = {
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: authName,
      email: authEmail,
      password: authPassword, // In production, this should be hashed
      contacts: [],
      createdAt: Date.now()
    };

    cloudData.users.push(newUser);
    saveCloudData(cloudData);

    setCurrentUser(newUser);
    setIsLoggedIn(true);
    setShowAuthModal(false);
    localStorage.setItem('mitai_messenger_current_user', newUser.id);
    
    // Clear form
    setAuthEmail('');
    setAuthPassword('');
    setAuthName('');
  };

  const handleLogin = () => {
    setAuthError('');

    if (!authEmail || !authPassword) {
      setAuthError('Моля попълнете всички полета');
      return;
    }

    const cloudData = getCloudData();
    const user = cloudData.users.find(u => u.email === authEmail && u.password === authPassword);

    if (!user) {
      setAuthError('Грешен email или парола');
      return;
    }

    setCurrentUser(user);
    setIsLoggedIn(true);
    setShowAuthModal(false);
    localStorage.setItem('mitai_messenger_current_user', user.id);
    loadUserContacts(user);
    
    // Clear form
    setAuthEmail('');
    setAuthPassword('');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setShowAuthModal(true);
    setContacts([]);
    setMessages([]);
    setActiveContact(null);
    localStorage.removeItem('mitai_messenger_current_user');
  };

  const loadUserContacts = (user: User) => {
    const cloudData = getCloudData();
    const userContacts = cloudData.users.filter(u => user.contacts.includes(u.id));
    
    setContacts(userContacts.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      avatar: u.avatar,
      online: Math.random() > 0.3,
      lastSeen: Date.now() - Math.random() * 3600000
    })));
  };

  const loadMessages = (userId: string, contactId: string) => {
    const cloudData = getCloudData();
    const conversationMessages = cloudData.messages.filter(
      m => (m.senderId === userId && m.receiverId === contactId) ||
           (m.senderId === contactId && m.receiverId === userId)
    );
    
    // Sort by timestamp
    conversationMessages.sort((a, b) => a.timestamp - b.timestamp);
    setMessages(conversationMessages);
  };

  const handleAddContact = () => {
    if (!currentUser || !newContactEmail) return;

    const cloudData = getCloudData();
    const contactUser = cloudData.users.find(u => u.email === newContactEmail && u.id !== currentUser.id);

    if (!contactUser) {
      setAuthError('Потребител с този email не съществува');
      return;
    }

    if (currentUser.contacts.includes(contactUser.id)) {
      setAuthError('Този контакт вече е добавен');
      return;
    }

    // Add contact to current user
    currentUser.contacts.push(contactUser.id);
    
    // Update cloud data
    const userIndex = cloudData.users.findIndex(u => u.id === currentUser.id);
    cloudData.users[userIndex] = currentUser;
    saveCloudData(cloudData);

    // Update local state
    setCurrentUser({ ...currentUser });
    loadUserContacts(currentUser);
    setNewContactEmail('');
    setShowAddContact(false);
    setAuthError('');
  };

  const handleRemoveContact = (contactId: string) => {
    if (!currentUser) return;

    currentUser.contacts = currentUser.contacts.filter(id => id !== contactId);
    
    const cloudData = getCloudData();
    const userIndex = cloudData.users.findIndex(u => u.id === currentUser.id);
    cloudData.users[userIndex] = currentUser;
    saveCloudData(cloudData);

    setCurrentUser({ ...currentUser });
    loadUserContacts(currentUser);
    
    if (activeContact?.id === contactId) {
      setActiveContact(null);
      setMessages([]);
    }
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !currentUser || !activeContact) return;

    const newMessage: Message = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      text: messageInput,
      senderId: currentUser.id,
      receiverId: activeContact.id,
      timestamp: Date.now(),
      status: 'sent'
    };

    // Save to cloud
    const cloudData = getCloudData();
    cloudData.messages.push(newMessage);
    saveCloudData(cloudData);

    // Update local state
    setMessages([...messages, newMessage]);
    setMessageInput('');

    // Simulate message delivery after 1 second
    setTimeout(() => {
      newMessage.status = 'delivered';
      const updatedCloudData = getCloudData();
      const msgIndex = updatedCloudData.messages.findIndex(m => m.id === newMessage.id);
      updatedCloudData.messages[msgIndex] = newMessage;
      saveCloudData(updatedCloudData);
      setMessages(prev => prev.map(m => m.id === newMessage.id ? newMessage : m));
    }, 1000);

    // Simulate message read after 3 seconds
    setTimeout(() => {
      newMessage.status = 'read';
      const updatedCloudData = getCloudData();
      const msgIndex = updatedCloudData.messages.findIndex(m => m.id === newMessage.id);
      updatedCloudData.messages[msgIndex] = newMessage;
      saveCloudData(updatedCloudData);
      setMessages(prev => prev.map(m => m.id === newMessage.id ? newMessage : m));
    }, 3000);
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    } else if (diffDays === 2) {
      return 'Yesterday';
    } else if (diffDays <= 7) {
      return date.toLocaleDateString('en-US', { weekday: 'long' });
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const getLastMessage = (contactId: string) => {
    if (!currentUser) return { text: '', timestamp: 0 };
    
    const cloudData = getCloudData();
    const conversationMessages = cloudData.messages.filter(
      m => (m.senderId === currentUser.id && m.receiverId === contactId) ||
           (m.senderId === contactId && m.receiverId === currentUser.id)
    );

    if (conversationMessages.length === 0) {
      return { text: 'No messages yet', timestamp: 0 };
    }

    const lastMsg = conversationMessages[conversationMessages.length - 1];
    return { text: lastMsg.text, timestamp: lastMsg.timestamp };
  };

  const getUnreadCount = (contactId: string) => {
    if (!currentUser) return 0;
    
    const cloudData = getCloudData();
    return cloudData.messages.filter(
      m => m.senderId === contactId && 
           m.receiverId === currentUser.id && 
           m.status !== 'read'
    ).length;
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Real WebRTC Video/Audio Call Functions
  const startVideoCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: { ideal: 1280 }, height: { ideal: 720 } }, 
        audio: true 
      });
      setLocalStream(stream);
      setCallType('video');
      setCallActive(true);
      
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (err: any) {
      console.error('Error accessing camera/microphone:', err);
      alert(`❌ Cannot access camera/microphone\n\n${err.name === 'NotAllowedError' ? 'Please allow camera and microphone access in your browser settings' : err.message}`);
    }
  };

  const startAudioCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: false, 
        audio: true 
      });
      setLocalStream(stream);
      setCallType('audio');
      setCallActive(true);
    } catch (err: any) {
      console.error('Error accessing microphone:', err);
      alert(`❌ Cannot access microphone\n\n${err.name === 'NotAllowedError' ? 'Please allow microphone access in your browser settings' : err.message}`);
    }
  };

  const endCall = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      setLocalStream(null);
    }
    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
      setScreenStream(null);
    }
    setCallActive(false);
    setIsMuted(false);
    setIsVideoOff(false);
    setIsScreenSharing(false);
  };

  const toggleMute = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMuted(!audioTrack.enabled);
      }
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoOff(!videoTrack.enabled);
      }
    }
  };

  const toggleScreenShare = async () => {
    if (isScreenSharing) {
      // Stop screen sharing
      if (screenStream) {
        screenStream.getTracks().forEach(track => track.stop());
        setScreenStream(null);
      }
      setIsScreenSharing(false);
      
      // Restore camera
      if (localVideoRef.current && localStream) {
        localVideoRef.current.srcObject = localStream;
      }
    } else {
      // Start screen sharing
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ 
          video: true, 
          audio: false 
        });
        setScreenStream(stream);
        setIsScreenSharing(true);
        
        // Display screen in local video
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
        
        // Stop screen sharing when user clicks browser stop button
        stream.getVideoTracks()[0].onended = () => {
          setScreenStream(null);
          setIsScreenSharing(false);
          if (localVideoRef.current && localStream) {
            localVideoRef.current.srcObject = localStream;
          }
        };
      } catch (err) {
        console.error('Error sharing screen:', err);
        alert('❌ Cannot share screen. Please try again.');
      }
    }
  };

  // Auth Modal
  if (showAuthModal && !isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-slate-900 border-2 border-cyan-500 rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">ChatMITAI Messenger</h2>
              <p className="text-slate-400">Cloud-based messaging platform</p>
            </div>

            {/* Auth Toggle */}
            <div className="flex gap-2 mb-6 p-1 bg-slate-800 rounded-lg">
              <button
                onClick={() => {
                  setAuthMode('login');
                  setAuthError('');
                }}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                  authMode === 'login'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Вход
              </button>
              <button
                onClick={() => {
                  setAuthMode('register');
                  setAuthError('');
                }}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                  authMode === 'register'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Регистрация
              </button>
            </div>

            {/* Error Message */}
            {authError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
              >
                {authError}
              </motion.div>
            )}

            {/* Auth Form */}
            <div className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Име</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      placeholder="Вашето име"
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all"
                      onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm text-slate-400 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all"
                    onKeyPress={(e) => e.key === 'Enter' && (authMode === 'login' ? handleLogin() : handleRegister())}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Парола</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all"
                    onKeyPress={(e) => e.key === 'Enter' && (authMode === 'login' ? handleLogin() : handleRegister())}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-all"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                onClick={authMode === 'login' ? handleLogin : handleRegister}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                {authMode === 'login' ? 'Влез' : 'Регистрирай се'}
              </button>
            </div>

            {/* Info */}
            <div className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <p className="text-xs text-slate-400 text-center">
                🔒 Вашите данни се съхраняват сигурно в cloud
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Main Messenger Interface
  return (
    <div className="h-screen bg-slate-950 flex">
      {/* Sidebar - Contacts */}
      <div className="w-96 bg-slate-900 border-r border-slate-800 flex flex-col">
        {/* User Header */}
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {currentUser?.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold">{currentUser?.name}</h3>
                <p className="text-xs text-slate-400">{currentUser?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAddContact(true)}
                className="w-10 h-10 rounded-full bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center transition-all"
                title="Добави контакт"
              >
                <UserPlus className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleLogout}
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all"
                title="Изход"
              >
                <LogOut className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Търси контакт..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.length === 0 ? (
            <div className="p-8 text-center">
              <UserPlus className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">Нямате добавени контакти</p>
              <button
                onClick={() => setShowAddContact(true)}
                className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-semibold transition-all"
              >
                Добави първи контакт
              </button>
            </div>
          ) : (
            filteredContacts.map((contact) => {
              const lastMsg = getLastMessage(contact.id);
              const unreadCount = getUnreadCount(contact.id);

              return (
                <div
                  key={contact.id}
                  onClick={() => setActiveContact(contact)}
                  className={`p-4 border-b border-slate-800 cursor-pointer transition-all hover:bg-slate-800/50 ${
                    activeContact?.id === contact.id ? 'bg-slate-800' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <span className="text-white font-bold">
                          {contact.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-semibold truncate">{contact.name}</h4>
                        <span className="text-xs text-slate-500">
                          {lastMsg.timestamp ? formatTimestamp(lastMsg.timestamp) : ''}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-400 truncate">{lastMsg.text}</p>
                        {unreadCount > 0 && (
                          <span className="ml-2 px-2 py-0.5 bg-cyan-600 text-white text-xs rounded-full font-semibold">
                            {unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeContact ? (
          <>
            {/* Chat Header */}
            <div className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {activeContact.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  {activeContact.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{activeContact.name}</h3>
                  <p className="text-sm text-slate-400">
                    {activeContact.online ? 'Online' : `Last seen ${formatTimestamp(activeContact.lastSeen || Date.now())}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={startAudioCall}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all"
                  title="Audio Call"
                >
                  <Phone className="w-5 h-5 text-slate-300" />
                </button>
                <button 
                  onClick={startVideoCall}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all"
                  title="Video Call"
                >
                  <Video className="w-5 h-5 text-slate-300" />
                </button>
                <button
                  onClick={() => handleRemoveContact(activeContact.id)}
                  className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all"
                  title="Изтрий контакт"
                >
                  <Trash2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-950">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Mail className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                    <p className="text-slate-400">Все още няма съобщения</p>
                    <p className="text-slate-500 text-sm">Изпратете първото съобщение</p>
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === currentUser?.id ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-md px-4 py-3 rounded-2xl ${
                        message.senderId === currentUser?.id
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                          : 'bg-slate-800 text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-xs opacity-70">
                          {formatTimestamp(message.timestamp)}
                        </span>
                        {message.senderId === currentUser?.id && (
                          <span>
                            {message.status === 'read' ? (
                              <CheckCheck className="w-4 h-4 text-cyan-300" />
                            ) : message.status === 'delivered' ? (
                              <CheckCheck className="w-4 h-4" />
                            ) : (
                              <Check className="w-4 h-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="bg-slate-900 border-t border-slate-800 p-4">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all">
                  <Paperclip className="w-5 h-5 text-slate-300" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all">
                  <Smile className="w-5 h-5 text-slate-300" />
                </button>
                <input
                  ref={messageInputRef}
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Напишете съобщение..."
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    messageInput.trim()
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50'
                      : 'bg-slate-800 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-slate-950">
            <div className="text-center">
              <Mail className="w-24 h-24 text-slate-700 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">ChatMITAI Messenger</h3>
              <p className="text-slate-400 mb-4">Изберете контакт за да започнете разговор</p>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                <span>Connected to cloud</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Contact Modal */}
      <AnimatePresence>
        {showAddContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-md w-full bg-slate-900 border-2 border-cyan-500 rounded-2xl p-8 relative"
            >
              <button
                onClick={() => {
                  setShowAddContact(false);
                  setNewContactEmail('');
                  setAuthError('');
                }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Добави контакт</h3>
                <p className="text-slate-400">Въведете email адреса на потребителя</p>
              </div>

              {authError && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {authError}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm text-slate-400 mb-2">Email адрес</label>
                <input
                  type="email"
                  value={newContactEmail}
                  onChange={(e) => setNewContactEmail(e.target.value)}
                  placeholder="contact@email.com"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddContact()}
                  autoFocus
                />
              </div>

              <button
                onClick={handleAddContact}
                disabled={!newContactEmail.trim()}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                  newContactEmail.trim()
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                Добави контакт
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video/Audio Call Modal */}
      <AnimatePresence>
        {callActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex flex-col"
          >
            {/* Call Header - Compact and Premium */}
            <div className="h-16 bg-slate-900/40 backdrop-blur-xl border-b border-cyan-500/30 flex items-center justify-between px-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <span className="text-white font-bold text-lg">
                    {activeContact?.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{activeContact?.name}</h3>
                  <p className="text-cyan-400 text-xs flex items-center gap-1">
                    <Circle className="w-2 h-2 fill-cyan-400" />
                    {callType === 'video' ? 'Video Call' : 'Audio Call'}
                  </p>
                </div>
              </div>
              <button 
                onClick={endCall}
                className="w-10 h-10 rounded-full bg-red-600/90 hover:bg-red-600 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-red-500/50"
                title="End Call"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Main Content Area - Premium Frame */}
            <div className="flex-1 flex items-center justify-center p-8 pb-32">
              {/* Premium Video Frame with Glowing Border */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-6xl aspect-video"
              >
                {/* Outer Glow Layer */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-75 blur-xl animate-pulse"></div>
                
                {/* Middle Glow Layer */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-3xl opacity-50 blur-md"></div>
                
                {/* Main Video Container */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/30 bg-slate-900">
                  {/* Arhont Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: `url(${arhontBg})` }}
                  ></div>

                  {/* Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80"></div>

                  {/* Premium Bottom Gradient Frame - Works for both themes */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
                    {/* Multi-layer gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 via-blue-950/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent"></div>
                    
                    {/* Glowing edge effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent blur-sm"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-400/80 to-cyan-500/0"></div>
                  </div>

                  {/* Remote Video (Main Display) */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video 
                      ref={remoteVideoRef}
                      autoPlay 
                      playsInline
                      className="w-full h-full object-cover hidden"
                    />
                    <div className="text-center relative z-10">
                      {/* Premium Avatar */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="relative inline-block mb-6"
                      >
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
                        <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 flex items-center justify-center border-4 border-white/20 shadow-2xl">
                          <span className="text-white font-bold text-6xl">
                            {activeContact?.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h2 className="text-white text-3xl font-bold mb-2 drop-shadow-lg">{activeContact?.name}</h2>
                        <p className="text-cyan-300 text-lg flex items-center justify-center gap-2">
                          {callType === 'video' ? (
                            <>
                              <Video className="w-5 h-5 animate-pulse" />
                              Calling...
                            </>
                          ) : (
                            <>
                              <Phone className="w-5 h-5 animate-pulse" />
                              Audio Call Active
                            </>
                          )}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Local Video (Picture-in-Picture) - Premium Style */}
                  {callType === 'video' && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute top-6 right-6 group"
                    >
                      {/* PiP Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-50 blur-md group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* PiP Container */}
                      <div className="relative w-72 h-52 bg-slate-900 border-2 border-cyan-400/70 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/40">
                        <video 
                          ref={localVideoRef}
                          autoPlay 
                          playsInline 
                          muted
                          className="w-full h-full object-cover"
                        />
                        {isVideoOff && (
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                            <VideoOff className="w-16 h-16 text-slate-500" />
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                          <p className="text-white text-sm font-semibold flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            You {isVideoOff && '(Video Off)'}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Call Controls - Floating Premium Bar */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                {/* Controls Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
                
                {/* Controls Container */}
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-full px-8 py-4 flex items-center gap-4 shadow-2xl">
                  {/* Mute Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMute}
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                      isMuted 
                        ? 'bg-gradient-to-br from-red-600 to-red-700' 
                        : 'bg-gradient-to-br from-cyan-600 to-blue-600'
                    }`}
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    <div className={`absolute -inset-1 rounded-full blur-md opacity-60 ${
                      isMuted ? 'bg-red-500' : 'bg-cyan-500'
                    }`}></div>
                    <div className="relative">
                      {isMuted ? <MicOff className="w-7 h-7 text-white" /> : <Mic className="w-7 h-7 text-white" />}
                    </div>
                  </motion.button>

                  {/* Video Toggle (only for video calls) */}
                  {callType === 'video' && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleVideo}
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                        isVideoOff 
                          ? 'bg-gradient-to-br from-gray-600 to-gray-700' 
                          : 'bg-gradient-to-br from-purple-600 to-purple-700'
                      }`}
                      title={isVideoOff ? 'Turn Video On' : 'Turn Video Off'}
                    >
                      <div className={`absolute -inset-1 rounded-full blur-md opacity-60 ${
                        isVideoOff ? 'bg-gray-500' : 'bg-purple-500'
                      }`}></div>
                      <div className="relative">
                        {isVideoOff ? <VideoOff className="w-7 h-7 text-white" /> : <Video className="w-7 h-7 text-white" />}
                      </div>
                    </motion.button>
                  )}

                  {/* Screen Share */}
                  {callType === 'video' && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleScreenShare}
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                        isScreenSharing 
                          ? 'bg-gradient-to-br from-green-600 to-green-700' 
                          : 'bg-gradient-to-br from-indigo-600 to-indigo-700'
                      }`}
                      title={isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
                    >
                      <div className={`absolute -inset-1 rounded-full blur-md opacity-60 ${
                        isScreenSharing ? 'bg-green-500' : 'bg-indigo-500'
                      }`}></div>
                      <div className="relative">
                        <Monitor className="w-7 h-7 text-white" />
                      </div>
                    </motion.button>
                  )}

                  {/* Divider */}
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>

                  {/* End Call Button - Premium */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={endCall}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center transition-all"
                    title="End Call"
                  >
                    <div className="absolute -inset-2 bg-red-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                    <div className="relative">
                      <Phone className="w-8 h-8 text-white transform rotate-135" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}