import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Minus, Plus, Trash2, Send, MessageCircle, User } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category: string;
}

interface Message {
  id: string;
  sender: 'user' | 'sales';
  text: string;
  timestamp: Date;
}

export function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [messages, setMessages] = useState<Message[]>([]);

  const [messageInput, setMessageInput] = useState('');

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageInput,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessageInput('');

    // Simulate sales response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'sales',
        text: 'Thank you for your message. Our sales team will respond shortly.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.19; // 19% VAT
  const total = subtotal + tax;

  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgb(240, 249, 255) 0%, rgb(224, 242, 254) 50%, rgb(186, 230, 253) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Shopping Cart */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag 
                className="w-8 h-8" 
                style={{ color: 'rgb(6, 182, 212)' }}
              />
              <h1 
                className="text-3xl font-bold"
                style={{
                  color: 'rgb(15, 23, 42)',
                  textShadow: '0 0 30px rgba(6, 182, 212, 0.4)'
                }}
              >
                Shopping Cart
              </h1>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.length === 0 ? (
                <div 
                  className="rounded-xl p-12 text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)'
                  }}
                >
                  <ShoppingBag 
                    className="w-16 h-16 mx-auto mb-4"
                    style={{ color: 'rgb(148, 163, 184)' }}
                  />
                  <p 
                    className="text-lg"
                    style={{ color: 'rgb(71, 85, 105)' }}
                  >
                    Your cart is empty
                  </p>
                </div>
              ) : (
                cartItems.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="rounded-xl p-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      boxShadow: '0 8px 32px rgba(6, 182, 212, 0.25)'
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 
                          className="text-lg font-semibold mb-1"
                          style={{
                            color: 'rgb(15, 23, 42)',
                            textShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                          }}
                        >
                          {item.name}
                        </h3>
                        <p 
                          className="text-sm mb-3"
                          style={{ color: 'rgb(71, 85, 105)' }}
                        >
                          {item.category}
                        </p>
                        <p 
                          className="text-2xl font-bold"
                          style={{
                            color: 'rgb(6, 182, 212)',
                            textShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
                          }}
                        >
                          €{item.price.toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg transition-all group"
                        style={{
                          background: 'rgba(255, 255, 255, 0.5)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                        }}
                      >
                        <Trash2 
                          className="w-5 h-5 transition-colors"
                          style={{ color: 'rgb(71, 85, 105)' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'rgb(239, 68, 68)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgb(71, 85, 105)';
                          }}
                        />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 rounded-lg transition-all"
                        style={{
                          background: 'rgba(6, 182, 212, 0.1)',
                          border: '1px solid rgba(6, 182, 212, 0.2)',
                          color: 'rgb(15, 23, 42)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                        }}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span 
                        className="font-semibold w-12 text-center"
                        style={{
                          color: 'rgb(15, 23, 42)',
                          textShadow: '0 0 10px rgba(6, 182, 212, 0.3)'
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 rounded-lg transition-all"
                        style={{
                          background: 'rgba(6, 182, 212, 0.1)',
                          border: '1px solid rgba(6, 182, 212, 0.2)',
                          color: 'rgb(15, 23, 42)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
              <div 
                className="rounded-xl p-6 space-y-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  boxShadow: '0 8px 32px rgba(6, 182, 212, 0.25)'
                }}
              >
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{
                    color: 'rgb(15, 23, 42)',
                    textShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                  }}
                >
                  Order Summary
                </h3>
                
                <div 
                  className="flex justify-between"
                  style={{ color: 'rgb(51, 65, 85)' }}
                >
                  <span>Subtotal</span>
                  <span>€{subtotal.toLocaleString()}</span>
                </div>
                
                <div 
                  className="flex justify-between"
                  style={{ color: 'rgb(51, 65, 85)' }}
                >
                  <span>VAT (19%)</span>
                  <span>€{tax.toFixed(2)}</span>
                </div>
                
                <div 
                  className="pt-3 mt-3"
                  style={{
                    borderTop: '1px solid rgba(6, 182, 212, 0.2)' 
                  }}
                >
                  <div 
                    className="flex justify-between text-xl font-bold"
                    style={{
                      color: 'rgb(15, 23, 42)',
                      textShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                    }}
                  >
                    <span>Total</span>
                    <span style={{ color: 'rgb(6, 182, 212)' }}>€{total.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  className="w-full mt-6 py-4 rounded-xl font-semibold transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(37, 99, 235) 100%)',
                    color: 'white',
                    boxShadow: '0 8px 24px rgba(6, 182, 212, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(6, 182, 212, 0.4)';
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>

          {/* Right: Sales Chat */}
          <div 
            className="rounded-xl flex flex-col h-[calc(100vh-120px)] sticky top-24"
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              boxShadow: '0 8px 32px rgba(6, 182, 212, 0.25)'
            }}
          >
            {/* Chat Header */}
            <div 
              className="p-6"
              style={{
                borderBottom: '1px solid rgba(6, 182, 212, 0.2)' 
              }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(37, 99, 235) 100%)',
                    boxShadow: '0 4px 12px rgba(6, 182, 212, 0.4)'
                  }}
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 
                    className="text-xl font-bold"
                    style={{
                      color: 'rgb(15, 23, 42)',
                      textShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    Sales Department
                  </h2>
                  <p className="text-sm text-green-400">● Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: msg.sender === 'user' 
                          ? 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(14, 165, 233) 100%)' 
                          : 'linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(29, 78, 216) 100%)'
                      }}
                    >
                      {msg.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <MessageCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div>
                      <div 
                        className="rounded-2xl px-4 py-3"
                        style={{
                          background: msg.sender === 'user'
                            ? 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(14, 165, 233) 100%)'
                            : 'rgba(226, 232, 240, 0.8)',
                          color: msg.sender === 'user' 
                            ? 'white' 
                            : 'rgb(15, 23, 42)',
                          boxShadow: msg.sender === 'user' 
                            ? '0 4px 12px rgba(6, 182, 212, 0.3)' 
                            : 'none'
                        }}
                      >
                        <p>{msg.text}</p>
                      </div>
                      <p 
                        className="text-xs mt-1 px-2"
                        style={{ color: 'rgb(148, 163, 184)' }}
                      >
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div 
              className="p-6"
              style={{
                borderTop: '1px solid rgba(6, 182, 212, 0.2)' 
              }}
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about products, pricing, delivery..."
                  className="flex-1 px-4 py-3 rounded-xl transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    color: 'rgb(15, 23, 42)',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '1px solid rgb(6, 182, 212)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(6, 182, 212, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <button
                  onClick={sendMessage}
                  className="px-6 py-3 rounded-xl transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(37, 99, 235) 100%)',
                    color: 'white',
                    boxShadow: '0 4px 16px rgba(6, 182, 212, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(6, 182, 212, 0.4)';
                  }}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}