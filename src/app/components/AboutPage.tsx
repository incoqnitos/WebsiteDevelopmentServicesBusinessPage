import profilePhoto from 'figma:asset/4566ba41f1dbc5dc9f40efdbf934f103d2e10131.png';
import { useState } from 'react';
import { Building2, Calendar, Globe, Award, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    heroTitle: 'About MITAI',
    heroSubtitle: 'Mobile Intelligence Technologies 1985 LTD',
    storyTitle: 'About Us',
    storyP1: 'Mobile Intelligence Technologies (MIT 1985 LTD) is a forward-thinking technology enterprise specializing in high-tier software architecture, artificial intelligence (AI), and advanced mobile computing solutions.',
    storyP2: 'Founded and driven by software architect, scientist, and tech visionary Dimitar Konstantinov Totev, the company bridges the gap between academic AI legacy and modern enterprise automation. Inspired by the pioneering spirit of autonomous machine learning that shaped the industry since 1985, MIT 1985 LTD delivers scalable, robust software infrastructures designed for the complexities of the digital era.',
    storyP3: 'Our flagship products include Transcendify — advanced FinTech and financial markets software; Winnex — a revolutionary leasing platform; Digital Doctor — an AI-assisted clinical decision support ecosystem; and the MIT AI LLM, a 560-billion-parameter large language model with 16-bit quantisation.',
    storyP4: 'In 2024 we began integration of humanoid robotic systems. In 2026 we will unveil Diana — our first humanoid robot with realistic human movement and advanced AI capabilities. Our proprietary S Arhont OS and TROK OS research make MITAI a recognised innovator in AI-native operating system architecture.',
    leadershipTitle: 'About the Founder',
    leadershipSubtitle: 'Software Architect · Scientist · Tech Visionary',
    ceoName: 'Dimitar Konstantinov Totev',
    ceoTitle: 'Founder & CEO — MIT 1985 LTD',
    ceoDesc: 'Dimitar Totev is an experienced software architect and technological visionary with a strong track record of engineering complex systems across Germany, Switzerland, and Bulgaria. Combining scientific methodology with entrepreneurial leadership, he serves as the CEO and principal architect of MIT 1985. His focus lies in deploying cognitive automation, advanced system design, and intelligence architectures that empower businesses to scale globally. Author of 3 books and 60+ scientific publications across AI, mathematics, digital health, blockchain and robotics. Creator of the MIT AI LLM (560B parameters).',
    corpTitle: 'Corporate Structure & Legitimacy',
    corpEntity: 'Legal Entity',
    corpEntityVal: 'MIT 1985 E00D (Private Limited Company)',
    corpUic: 'Unified Identification Code (UIC / ЕИК)',
    corpUicVal: '200063629',
    corpVat: 'VAT',
    corpVatVal: 'BG200063629',
    corpExpertise: 'Areas of Expertise',
    corpExpertiseVal: 'Enterprise Software Engineering · Distributed Systems · AI Integration · Mobile Intelligence',
    founded: 'Founded 1985',
    international: 'International',
    aiPioneer: 'AI Pioneer',
    contactTitle: 'Get in Touch',
    contactSubtitle: "Let's discuss how MITAI can help your business",
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
    storyTitle: 'За нас',
    storyP1: 'Mobile Intelligence Technologies (MIT 1985 LTD) е иновативно технологично предприятие, специализирано в висококачествена софтуерна архитектура, изкуствен интелект (AI) и усъвършенствани решения за мобилни изчисления.',
    storyP2: 'Основана и ръководена от софтуерния архитект, учен и технологичен визионер Димитър Константинов Тотев, компанията свързва академичното AI наследство с модерната корпоративна автоматизация. MIT 1985 LTD доставя мащабируеми, стабилни софтуерни инфраструктури, проектирани за сложността на дигиталната ера.',
    storyP3: 'Нашите водещи продукти включват Transcendify — напреднал FinTech и финансов софтуер; Winnex — революционна лизингова платформа; Digital Doctor — AI-асистирана екосистема за клинична поддръжка; и MIT AI LLM — езиков модел с 560 милиарда параметри.',
    storyP4: 'През 2024 г. започнахме интеграция на хуманоидни роботни системи. През 2026 г. ще представим Diana — нашия първи хуманоиден робот. Нашите изследвания на S Arhont OS и TROK OS правят MITAI призната компания в архитектурата на AI-нативни операционни системи.',
    leadershipTitle: 'За основателя',
    leadershipSubtitle: 'Софтуерен архитект · Учен · Технологичен визионер',
    ceoName: 'Димитър Константинов Тотев',
    ceoTitle: 'Основател и Главен Изпълнителен Директор — MIT 1985 LTD',
    ceoDesc: 'Димитър Тотев е опитен софтуерен архитект и технологичен визионер с доказан опит в инженерирането на сложни системи в Германия, Швейцария и България. Съчетавайки научна методология с предприемаческо лидерство, той е CEO и главен архитект на MIT 1985. Автор на 3 книги и 60+ научни публикации в областта на AI, математика, дигитално здравеопазване, блокчейн и роботика. Създател на MIT AI LLM (560B параметри).',
    corpTitle: 'Корпоративна структура',
    corpEntity: 'Правна форма',
    corpEntityVal: 'MIT 1985 ЕООД (Дружество с ограничена отговорност)',
    corpUic: 'ЕИК / UIC',
    corpUicVal: '200063629',
    corpVat: 'ДДС номер',
    corpVatVal: 'BG200063629',
    corpExpertise: 'Области на дейност',
    corpExpertiseVal: 'Корпоративен софтуер · Разпределени системи · AI интеграция · Мобилни интелигентни решения',
    founded: 'Основана 1985',
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
    storyTitle: 'Über uns',
    storyP1: 'Mobile Intelligence Technologies (MIT 1985 LTD) ist ein zukunftsorientiertes Technologieunternehmen, spezialisiert auf hochwertige Softwarearchitektur, künstliche Intelligenz (KI) und fortschrittliche mobile Computing-Lösungen.',
    storyP2: 'Gegründet und geleitet vom Softwarearchitekten, Wissenschaftler und Tech-Visionär Dimitar Konstantinov Totev, überbrückt das Unternehmen die Lücke zwischen akademischem KI-Erbe und moderner Unternehmensautomatisierung. MIT 1985 LTD liefert skalierbare, robuste Softwareinfrastrukturen für die Komplexität des digitalen Zeitalters.',
    storyP3: 'Unsere Flaggschiff-Produkte: Transcendify — fortschrittliche FinTech-Software; Winnex — eine revolutionäre Leasing-Plattform; Digital Doctor — ein KI-gestütztes klinisches Entscheidungssystem; und das MIT AI LLM — ein Sprachmodell mit 560 Milliarden Parametern.',
    storyP4: 'Im Jahr 2024 begannen wir mit der Integration humanoider Robotersysteme. 2026 stellen wir Diana vor — unseren ersten humanoiden Roboter. Unsere S-Arhont-OS- und TROK-OS-Forschung macht MITAI zu einem anerkannten Innovator in der KI-nativen Betriebssystemarchitektur.',
    leadershipTitle: 'Über den Gründer',
    leadershipSubtitle: 'Softwarearchitekt · Wissenschaftler · Tech-Visionär',
    ceoName: 'Dimitar Konstantinov Totev',
    ceoTitle: 'Gründer & CEO — MIT 1985 LTD',
    ceoDesc: 'Dimitar Totev ist ein erfahrener Softwarearchitekt und technologischer Visionär mit nachgewiesener Erfolgsbilanz bei der Entwicklung komplexer Systeme in Deutschland, der Schweiz und Bulgarien. Er verbindet wissenschaftliche Methodik mit unternehmerischer Führung als CEO und Chefarchitekt von MIT 1985. Autor von 3 Büchern und 60+ wissenschaftlichen Publikationen in den Bereichen KI, Mathematik, digitale Gesundheit, Blockchain und Robotik. Entwickler des MIT AI LLM (560B Parameter).',
    corpTitle: 'Unternehmensstruktur & Legitimität',
    corpEntity: 'Rechtsform',
    corpEntityVal: 'MIT 1985 E00D (Gesellschaft mit beschränkter Haftung)',
    corpUic: 'Handelsregisternummer (UIC / ЕИК)',
    corpUicVal: '200063629',
    corpVat: 'USt-IdNr.',
    corpVatVal: 'BG200063629',
    corpExpertise: 'Fachgebiete',
    corpExpertiseVal: 'Enterprise-Softwareentwicklung · Verteilte Systeme · KI-Integration · Mobile Intelligence',
    founded: 'Gegründet 1985',
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
                    alt="Dimitar Totev - Software Architect and Visionary, CEO of MIT 1985 — Mobile Intelligence Technologies, Mannheim Germany"
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

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: isDark ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}
                >
                  {t.ceoDesc}
                </p>

                <div
                  className="grid grid-cols-2 gap-4 text-sm"
                  style={{ color: isDark ? 'rgb(203, 213, 225)' : 'rgb(51, 65, 85)' }}
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+49 176 42437096</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>contact@mitai.de</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Schönauer Straße 6, 68307 Mannheim, Germany</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Structure Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-8"
            style={{
              background: isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              border: isDark ? '1px solid rgba(6, 182, 212, 0.2)' : '1px solid rgba(6, 182, 212, 0.3)',
              boxShadow: isDark ? '0 4px 24px rgba(6, 182, 212, 0.1)' : '0 4px 24px rgba(6, 182, 212, 0.15)'
            }}
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: isDark ? 'white' : 'rgb(15, 23, 42)' }}
            >
              {t.corpTitle}
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              {[
                [t.corpEntity, t.corpEntityVal],
                [t.corpUic, t.corpUicVal],
                [t.corpVat, t.corpVatVal],
                [t.corpExpertise, t.corpExpertiseVal],
              ].map(([label, value]) => (
                <tr key={label} style={{ borderBottom: '1px solid rgba(6,182,212,0.1)' }}>
                  <td style={{ color: isDark ? 'rgb(100,116,139)' : 'rgb(100,116,139)', padding: '10px 0', width: '260px', verticalAlign: 'top' }}>{label}</td>
                  <td style={{ color: isDark ? 'rgb(203,213,225)' : 'rgb(30,41,59)', padding: '10px 0', fontWeight: 500 }}>{value}</td>
                </tr>
              ))}
            </table>
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