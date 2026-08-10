import profilePhoto from 'figma:asset/4566ba41f1dbc5dc9f40efdbf934f103d2e10131.png';
import { useState } from 'react';
import { Building2, Calendar, Globe, Award, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    heroTitle: 'About MITAI',
    heroSubtitle: 'Mobile Intelligence Technologies 1985 LTD',
    storyTitle: 'Our Story',
    storyP1: 'MITAI (Mobile Intelligence Technologies 1985 LTD) was founded in 2005. Since then, we\'ve developed innovative solutions that push the boundaries of artificial intelligence and robotics.',
    storyP2: 'Our flagship products include Transcendify – advanced financial markets software; Winex – a revolutionary fintech leasing platform; and Arhont-1 – an AI operating system powering our next-generation laptops.',
    storyP3: 'In 2024, we began our journey into humanoid robot integration, marking a new era for MITAI. In 2026, we will unveil Diana – our first humanoid robot featuring realistic human movements and advanced AI capabilities.',
    storyP4: 'Our proprietary Retina AI and cutting-edge LLM (Large Language Model) technology make MITAI a global leader in integrated AI ecosystems.',
    leadershipTitle: 'Leadership',
    leadershipSubtitle: 'Meet the visionary behind MITAI',
    ceoName: 'Dimitar Konstantinov Totev',
    ceoTitle: 'Founder & CEO',
    founded: 'Founded 2005',
    international: 'International',
    aiPioneer: 'AI Pioneer',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Let\'s discuss how MITAI can help your business',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    sendMessage: 'Send Message',
    location: 'Location',
    mannheim: 'Mannheim, Germany'
  },
  bg: {
    heroTitle: 'За MITAI',
    heroSubtitle: 'Mobile Intelligence Technologies 1985 LTD',
    storyTitle: 'Нашата История',
    storyP1: 'MITAI (Mobile Intelligence Technologies 1985 LTD) бе основана през 2005 г. Оттогава разработихме иновативни решения, които раздвижват границите на изкуствения интелект и роботиката.',
    storyP2: 'Нашите водещи продукти включват Transcendify – напреднал софтуер за финансови пазари; Winex – революционна финтех лизингова платформа; и Arhont-1 – AI операционна система за нашите лаптопи от ново поколение.',
    storyP3: 'През 2024 г. започнахме нашето пътуване към интеграция на хуманоидни роботи, отбелязвайки нова ера за MITAI. През 2026 г. ще представим Diana – нашия първи хуманоиден робот с реалистични човешки движения и усъвършенствани AI възможности.',
    storyP4: 'Нашата собствена Retina AI и най-съвременна LLM (Large Language Model) технология правят MITAI световен лидер в интегрирани AI екосистеми.',
    leadershipTitle: 'Ръководство',
    leadershipSubtitle: 'Запознайте се с визионера зад MITAI',
    ceoName: 'Димитър Константинов Тотев',
    ceoTitle: 'Основател и Главен Изпълнителен Директор',
    founded: 'Основана 2005',
    international: 'Международна',
    aiPioneer: 'AI Пионер',
    contactTitle: 'Свържете се с нас',
    contactSubtitle: 'Нека обсъдим как MITAI може да помогне на вашия бизнес',
    name: 'Име',
    email: 'Имейл',
    phone: 'Телефон',
    message: 'Съобщение',
    sendMessage: 'Изпрати',
    location: 'Локация',
    mannheim: 'Манхайм, Германия'
  },
  de: {
    heroTitle: 'Über MITAI',
    heroSubtitle: 'Mobile Intelligence Technologies 1985 LTD',
    storyTitle: 'Unsere Geschichte',
    storyP1: 'MITAI (Mobile Intelligence Technologies 1985 LTD) wurde 2005 gegründet. Seitdem haben wir innovative Lösungen entwickelt, die die Grenzen der künstlichen Intelligenz und Robotik erweitern.',
    storyP2: 'Unsere Flaggschiff-Produkte umfassen Transcendify – fortschrittliche Finanzmarkt-Software; Winex – eine revolutionäre Fintech-Leasing-Plattform; und Arhont-1 – ein KI-Betriebssystem für unsere Laptops der nächsten Generation.',
    storyP3: 'Im Jahr 2024 begannen wir unsere Reise zur Integration humanoider Roboter und läuteten damit eine neue Ära für MITAI ein. Im Jahr 2026 werden wir Diana vorstellen – unseren ersten humanoiden Roboter mit realistischen menschlichen Bewegungen und fortschrittlichen KI-Fähigkeiten.',
    storyP4: 'Unsere proprietäre Retina AI und modernste LLM (Large Language Model) Technologie machen MITAI zu einem globalen Marktführer in integrierten KI-Ökosystemen.',
    leadershipTitle: 'Führung',
    leadershipSubtitle: 'Lernen Sie den Visionär hinter MITAI kennen',
    ceoName: 'Dimitar Konstantinov Totev',
    ceoTitle: 'Gründer & CEO',
    founded: 'Gegründet 2005',
    international: 'International',
    aiPioneer: 'KI-Pionier',
    contactTitle: 'Kontaktieren Sie uns',
    contactSubtitle: 'Lassen Sie uns besprechen, wie MITAI Ihrem Unternehmen helfen kann',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon',
    message: 'Nachricht',
    sendMessage: 'Nachricht senden',
    location: 'Standort',
    mannheim: 'Mannheim, Deutschland'
  }
};

export default function AboutPage() {
  const [language, setLanguage] = useState<'en' | 'bg' | 'de'>('en');
  const t = translations[language];
  const isDark = true; // Dark theme only

  return (
    <div 
      style={{
        minHeight: '100vh',
        background: isDark 
          ? 'rgb(2, 6, 23)' 
          : 'linear-gradient(135deg, rgb(240, 249, 255) 0%, rgb(224, 242, 254) 50%, rgb(186, 230, 253) 100%)'
      }}
    >
      {/* Language Selector */}
      <div className="fixed top-28 right-6 z-40 flex gap-2">
        {(['en', 'bg', 'de'] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className="px-4 py-2 rounded-lg font-semibold transition-all"
            style={{
              background: language === lang
                ? 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(37, 99, 235) 100%)'
                : isDark 
                  ? 'rgba(30, 41, 59, 0.8)' 
                  : 'rgba(255, 255, 255, 0.6)',
              color: language === lang 
                ? 'white' 
                : isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)',
              boxShadow: language === lang 
                ? '0 4px 16px rgba(6, 182, 212, 0.4)' 
                : 'none',
              border: language === lang 
                ? 'none' 
                : isDark 
                  ? '1px solid rgba(6, 182, 212, 0.3)' 
                  : '1px solid rgba(6, 182, 212, 0.2)'
            }}
            onMouseEnter={(e) => {
              if (language !== lang) {
                e.currentTarget.style.background = isDark 
                  ? 'rgba(30, 41, 59, 1)' 
                  : 'rgba(255, 255, 255, 0.9)';
              }
            }}
            onMouseLeave={(e) => {
              if (language !== lang) {
                e.currentTarget.style.background = isDark 
                  ? 'rgba(30, 41, 59, 0.8)' 
                  : 'rgba(255, 255, 255, 0.6)';
              }
            }}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Hero Section with Electric Logo */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            {/* Electric Logo in Center */}
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                backgroundImage: isDark 
                  ? 'linear-gradient(135deg, rgb(34, 211, 238) 0%, rgb(96, 165, 250) 50%, rgb(168, 85, 247) 100%)' 
                  : 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(37, 99, 235) 50%, rgb(124, 58, 237) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: isDark ? 'none' : '0 0 40px rgba(6, 182, 212, 0.3)'
              }}
            >
              {t.heroTitle}
            </h1>
            
            <p 
              className="text-lg md:text-xl mb-4 max-w-3xl mx-auto"
              style={{
                color: isDark ? 'rgb(203, 213, 225)' : 'rgb(51, 65, 85)',
                textShadow: isDark ? 'none' : '0 0 20px rgba(6, 182, 212, 0.2)'
              }}
            >
              {t.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: isDark 
                ? 'rgba(15, 23, 42, 0.5)' 
                : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              border: isDark 
                ? '1px solid rgba(6, 182, 212, 0.3)' 
                : '1px solid rgba(6, 182, 212, 0.4)',
              boxShadow: isDark 
                ? '0 8px 32px rgba(6, 182, 212, 0.15)' 
                : '0 8px 32px rgba(6, 182, 212, 0.25)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-7 h-7 text-cyan-400" />
              <h2 
                className="text-3xl font-bold"
                style={{
                  color: isDark ? 'white' : 'rgb(15, 23, 42)',
                  textShadow: isDark ? 'none' : '0 0 20px rgba(6, 182, 212, 0.3)'
                }}
              >
                {t.storyTitle}
              </h2>
            </div>
            
            <div 
              className="space-y-4 text-base leading-relaxed"
              style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(51, 65, 85)' }}
            >
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
              <p>{t.storyP4}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl font-bold mb-4"
              style={{
                color: isDark ? 'white' : 'rgb(15, 23, 42)',
                textShadow: isDark ? 'none' : '0 0 30px rgba(6, 182, 212, 0.4)'
              }}
            >
              {t.leadershipTitle}
            </h2>
            <p 
              className="text-lg"
              style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}
            >
              {t.leadershipSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.5) 100%)' 
                : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              border: isDark 
                ? '1px solid rgba(6, 182, 212, 0.3)' 
                : '1px solid rgba(6, 182, 212, 0.4)',
              boxShadow: isDark 
                ? '0 8px 32px rgba(6, 182, 212, 0.15)' 
                : '0 8px 32px rgba(6, 182, 212, 0.25)'
            }}
          >
            <div className="grid lg:grid-cols-[280px,1fr] gap-0">
              {/* Photo Section */}
              <div 
                className="relative p-8 flex items-center justify-center"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)' 
                    : 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)'
                }}
              >
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(37, 99, 235) 100%)',
                      opacity: 0.3
                    }}
                  ></div>
                  <img 
                    src={profilePhoto} 
                    alt="Dimitar Konstantinov Totev"
                    className="relative w-56 h-72 object-cover object-top rounded-2xl shadow-2xl border-2 border-cyan-500/50"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 md:p-10">
                <div className="mb-6">
                  <h3 
                    className="text-3xl font-bold mb-2"
                    style={{
                      color: isDark ? 'white' : 'rgb(15, 23, 42)',
                      textShadow: isDark ? 'none' : '0 0 20px rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    {t.ceoName}
                  </h3>
                  <p className="text-lg text-cyan-400 mb-4">{t.ceoTitle}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <div 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                      style={{
                        background: isDark 
                          ? 'rgba(30, 41, 59, 0.5)' 
                          : 'rgba(6, 182, 212, 0.1)',
                        border: isDark 
                          ? '1px solid rgba(71, 85, 105, 0.5)' 
                          : '1px solid rgba(6, 182, 212, 0.3)',
                        color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)'
                      }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{t.founded}</span>
                    </div>
                    <div 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                      style={{
                        background: isDark 
                          ? 'rgba(30, 41, 59, 0.5)' 
                          : 'rgba(6, 182, 212, 0.1)',
                        border: isDark 
                          ? '1px solid rgba(71, 85, 105, 0.5)' 
                          : '1px solid rgba(6, 182, 212, 0.3)',
                        color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)'
                      }}
                    >
                      <Globe className="w-4 h-4" />
                      <span>{t.international}</span>
                    </div>
                    <div 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                      style={{
                        background: isDark 
                          ? 'rgba(30, 41, 59, 0.5)' 
                          : 'rgba(6, 182, 212, 0.1)',
                        border: isDark 
                          ? '1px solid rgba(71, 85, 105, 0.5)' 
                          : '1px solid rgba(6, 182, 212, 0.3)',
                        color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)'
                      }}
                    >
                      <Award className="w-4 h-4" />
                      <span>{t.aiPioneer}</span>
                    </div>
                  </div>
                </div>

                <div 
                  className="grid grid-cols-2 gap-4 text-sm"
                  style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(51, 65, 85)' }}
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+49 17642437096</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>lloyd.totev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{t.mannheim}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-16 px-6"
        style={{
          background: isDark 
            ? 'linear-gradient(to bottom, rgb(2, 6, 23) 0%, rgb(15, 23, 42) 100%)' 
            : 'linear-gradient(to bottom, transparent 0%, rgba(186, 230, 253, 0.3) 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl font-bold mb-4"
              style={{
                color: isDark ? 'white' : 'rgb(15, 23, 42)',
                textShadow: isDark ? 'none' : '0 0 30px rgba(6, 182, 212, 0.4)'
              }}
            >
              {t.contactTitle}
            </h2>
            <p 
              className="text-lg"
              style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}
            >
              {t.contactSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-8"
            style={{
              background: isDark 
                ? 'rgba(15, 23, 42, 0.5)' 
                : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              border: isDark 
                ? '1px solid rgba(6, 182, 212, 0.3)' 
                : '1px solid rgba(6, 182, 212, 0.4)',
              boxShadow: isDark 
                ? '0 8px 32px rgba(6, 182, 212, 0.15)' 
                : '0 8px 32px rgba(6, 182, 212, 0.25)'
            }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(51, 65, 85)' }}
                  >
                    {t.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg transition-all"
                    style={{
                      background: isDark 
                        ? 'rgba(30, 41, 59, 0.5)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      border: isDark 
                        ? '1px solid rgba(71, 85, 105, 0.5)' 
                        : '1px solid rgba(6, 182, 212, 0.3)',
                      color: isDark ? 'white' : 'rgb(15, 23, 42)',
                      outline: 'none'
                    }}
                    placeholder={t.name}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '1px solid rgb(6, 182, 212)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(6, 182, 212, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = isDark 
                        ? '1px solid rgba(71, 85, 105, 0.5)' 
                        : '1px solid rgba(6, 182, 212, 0.3)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(51, 65, 85)' }}
                  >
                    {t.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg transition-all"
                    style={{
                      background: isDark 
                        ? 'rgba(30, 41, 59, 0.5)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      border: isDark 
                        ? '1px solid rgba(71, 85, 105, 0.5)' 
                        : '1px solid rgba(6, 182, 212, 0.3)',
                      color: isDark ? 'white' : 'rgb(15, 23, 42)',
                      outline: 'none'
                    }}
                    placeholder={t.email}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '1px solid rgb(6, 182, 212)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(6, 182, 212, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = isDark 
                        ? '1px solid rgba(71, 85, 105, 0.5)' 
                        : '1px solid rgba(6, 182, 212, 0.3)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(51, 65, 85)' }}
                >
                  {t.phone}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg transition-all"
                  style={{
                    background: isDark 
                      ? 'rgba(30, 41, 59, 0.5)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    border: isDark 
                      ? '1px solid rgba(71, 85, 105, 0.5)' 
                      : '1px solid rgba(6, 182, 212, 0.3)',
                    color: isDark ? 'white' : 'rgb(15, 23, 42)',
                    outline: 'none'
                  }}
                  placeholder={t.phone}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '1px solid rgb(6, 182, 212)';
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(6, 182, 212, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = isDark 
                      ? '1px solid rgba(71, 85, 105, 0.5)' 
                      : '1px solid rgba(6, 182, 212, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(51, 65, 85)' }}
                >
                  {t.message}
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg transition-all resize-none"
                  style={{
                    background: isDark 
                      ? 'rgba(30, 41, 59, 0.5)' 
                      : 'rgba(255, 255, 255, 0.8)',
                    border: isDark 
                      ? '1px solid rgba(71, 85, 105, 0.5)' 
                      : '1px solid rgba(6, 182, 212, 0.3)',
                    color: isDark ? 'white' : 'rgb(15, 23, 42)',
                    outline: 'none'
                  }}
                  placeholder={t.message}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '1px solid rgb(6, 182, 212)';
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(6, 182, 212, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = isDark 
                      ? '1px solid rgba(71, 85, 105, 0.5)' 
                      : '1px solid rgba(6, 182, 212, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(37, 99, 235) 50%, rgb(124, 58, 237) 100%)',
                  boxShadow: '0 8px 24px rgba(6, 182, 212, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(6, 182, 212, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(6, 182, 212, 0.4)';
                }}
              >
                {t.sendMessage}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}