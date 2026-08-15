import { Building, MapPin, Hash, User, Mail, Globe } from 'lucide-react';
import { useState } from 'react';

const translations = {
  en: {
    heroTitle: 'Impressum',
    heroSubtitle: 'Legal Information',
    heroDescription: 'Legal company information and contact details',
    companyInfoTitle: 'Company Information',
    companyName: 'Company Name',
    registrationNumber: 'Registration Number (EIK)',
    vatCode: 'VAT Code',
    address: 'Registered Address',
    ceo: 'CEO',
    contactEmail: 'Contact Email',
    globalPresenceTitle: 'Global Presence',
    headquarters: 'Headquarters',
    hybridBureau: 'Hybrid Bureau',
    getInTouchTitle: 'Get In Touch',
    disclaimer: 'This impressum complies with legal requirements in Bulgaria and the European Union. For business inquiries, partnerships, or legal matters, please contact us at',
    contactButton: 'Contact Us'
  },
  bg: {
    heroTitle: 'Импресум',
    heroSubtitle: 'Правна Информация',
    heroDescription: 'Правна информация за компанията и контакти',
    companyInfoTitle: 'Информация за Компанията',
    companyName: 'Име на Компанията',
    registrationNumber: 'Регистрационен Номер (ЕИК)',
    vatCode: 'ДДС Код',
    address: 'Регистриран Адрес',
    ceo: 'Главен Изпълнителен Директор',
    contactEmail: 'Имейл за Контакт',
    globalPresenceTitle: 'Глобално Присъствие',
    headquarters: 'Централа',
    hybridBureau: 'Хибридно Бюро',
    getInTouchTitle: 'Свържете се с нас',
    disclaimer: 'Този импресум съответства на законовите изисквания в България и Европейския съюз. За бизнес запитвания, партньорства или правни въпроси, моля свържете се с нас на',
    contactButton: 'Свържете се'
  },
  de: {
    heroTitle: 'Impressum',
    heroSubtitle: 'Rechtliche Informationen',
    heroDescription: 'Rechtliche Unternehmensinformationen und Kontaktdaten',
    companyInfoTitle: 'Unternehmensinformationen',
    companyName: 'Firmenname',
    registrationNumber: 'Registrierungsnummer (EIK)',
    vatCode: 'USt-IdNr.',
    address: 'Eingetragene Adresse',
    ceo: 'Geschäftsführer',
    contactEmail: 'Kontakt-E-Mail',
    globalPresenceTitle: 'Globale Präsenz',
    headquarters: 'Hauptsitz',
    hybridBureau: 'Hybrid-Büro',
    getInTouchTitle: 'Kontaktieren Sie uns',
    disclaimer: 'Dieses Impressum entspricht den gesetzlichen Anforderungen in Bulgarien und der Europäischen Union. Für geschäftliche Anfragen, Partnerschaften oder rechtliche Angelegenheiten kontaktieren Sie uns bitte unter',
    contactButton: 'Kontakt aufnehmen'
  },
  ja: {
    heroTitle: 'インプレッサム',
    heroSubtitle: '法的情報',
    heroDescription: '会社の法的情報と連絡先',
    companyInfoTitle: '会社情報',
    companyName: '会社名',
    registrationNumber: '登録番号（EIK）',
    vatCode: 'VAT コード',
    address: '登録住所',
    ceo: '最高経営責任者',
    contactEmail: '連絡先メール',
    globalPresenceTitle: 'グローバルプレゼンス',
    headquarters: '本社',
    hybridBureau: 'ハイブリッドオフィス',
    getInTouchTitle: 'お問い合わせ',
    disclaimer: 'このインプレッサムはブルガリアおよび欧州連合の法的要件に準拠しています。ビジネスに関するお問い合わせ、パートナーシップ、または法的事項については、次のアドレスまでご連絡ください',
    contactButton: 'お問い合わせ'
  },
  zh: {
    heroTitle: '法律信息',
    heroSubtitle: '法律声明',
    heroDescription: '公司法律信息和联系方式',
    companyInfoTitle: '公司信息',
    companyName: '公司名称',
    registrationNumber: '注册号（EIK）',
    vatCode: '增值税代码',
    address: '注册地址',
    ceo: '首席执行官',
    contactEmail: '联系邮箱',
    globalPresenceTitle: '全球业务',
    headquarters: '总部',
    hybridBureau: '混合办公室',
    getInTouchTitle: '联系我们',
    disclaimer: '本法律声明符合保加利亚和欧盟的法律要求。如有商务咨询、合作伙伴关系或法律事务，请通过以下方式联系我们',
    contactButton: '联系我们'
  },
  tr: {
    heroTitle: 'Künye',
    heroSubtitle: 'Yasal Bilgiler',
    heroDescription: 'Şirket yasal bilgileri ve iletişim detayları',
    companyInfoTitle: 'Şirket Bilgileri',
    companyName: 'Şirket Adı',
    registrationNumber: 'Kayıt Numarası (EIK)',
    vatCode: 'KDV Kodu',
    address: 'Kayıtlı Adres',
    ceo: 'Genel Müdür',
    contactEmail: 'İletişim E-postası',
    globalPresenceTitle: 'Küresel Varlık',
    headquarters: 'Genel Merkez',
    hybridBureau: 'Hibrit Ofis',
    getInTouchTitle: 'İletişime Geçin',
    disclaimer: 'Bu künye Bulgaristan ve Avrupa Birliği yasal gerekliliklerine uygundur. İş teklifleri, ortaklıklar veya yasal konular için lütfen bizimle iletişime geçin',
    contactButton: 'İletişim'
  }
};

export default function ImpressumPage() {
  const [language, setLanguage] = useState<'en' | 'bg' | 'de' | 'ja' | 'zh' | 'tr'>('en');
  const t = translations[language];
  const isDark = true; // Dark theme only

  const companyInfo = [
    { icon: Building, label: t.companyName, value: 'Mobile Intelligence Technologies 1985 Ltd (MIT AI 1985 LTD)' },
    { icon: Hash, label: t.registrationNumber, value: '200063629' },
    { icon: Hash, label: t.vatCode, value: 'BG200063629' },
    { icon: MapPin, label: t.address, value: 'Schönauer Straße 6, 68307 Mannheim, Germany' },
    { icon: User, label: t.ceo, value: 'Dimitar Konstantinov Totev' },
    { icon: Mail, label: t.contactEmail, value: 'contact@mitai.de' },
  ];

  const offices = [
    { city: 'Mannheim', country: 'Germany', type: t.headquarters },
    { city: 'Burgas', country: 'Bulgaria', type: t.hybridBureau },
    { city: 'London', country: 'United Kingdom', type: t.hybridBureau },
    { city: 'Silicon Valley', country: 'USA', type: t.hybridBureau },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: isDark 
        ? 'linear-gradient(to bottom, #000000, #0a0e1a, #020617)'
        : 'linear-gradient(to bottom, #f8fafc, #e2e8f0)',
      paddingTop: '80px'
    }}>
      {/* Language Selector */}
      <div className="fixed top-28 right-6 z-40 flex flex-wrap gap-2 max-w-xs justify-end">
        {(['en', 'bg', 'de', 'ja', 'zh', 'tr'] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className="px-3 py-1.5 rounded-lg font-semibold transition-all text-sm"
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
                  ? '1px solid rgba(148, 163, 184, 0.2)' 
                  : '1px solid rgba(203, 213, 225, 0.5)',
              cursor: 'pointer'
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

      {/* Header */}
      <div style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 24px',
          background: isDark 
            ? 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))' 
            : 'linear-gradient(to right, rgba(6, 182, 212, 0.15), rgba(147, 51, 234, 0.15))',
          border: isDark 
            ? '1px solid rgba(6, 182, 212, 0.4)' 
            : '2px solid rgba(6, 182, 212, 0.5)',
          borderRadius: '50px',
          marginBottom: '24px',
          boxShadow: isDark 
            ? '0 0 30px rgba(6, 182, 212, 0.2)' 
            : '0 0 30px rgba(6, 182, 212, 0.3)'
        }}>
          <Building style={{ 
            width: '20px', 
            height: '20px',
            color: isDark ? '#22d3ee' : '#0891b2'
          }} />
          <span style={{
            fontWeight: 700,
            color: isDark ? '#22d3ee' : '#0891b2'
          }}>
            {t.heroSubtitle}
          </span>
        </div>

        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 700, 
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {t.heroTitle}
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: isDark ? '#cbd5e1' : '#64748b', 
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
          {t.heroDescription}
        </p>
      </div>

      {/* Company Information */}
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
          borderRadius: '24px',
          padding: '48px',
          boxShadow: isDark 
            ? '0 8px 32px rgba(6, 182, 212, 0.15)' 
            : '0 4px 16px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '32px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t.companyInfoTitle}
          </h2>

          <div style={{
            display: 'grid',
            gap: '24px'
          }}>
            {companyInfo.map((info) => (
              <div key={info.label} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))' 
                    : 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <info.icon style={{ 
                    width: '24px', 
                    height: '24px', 
                    color: '#22d3ee' 
                  }} />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: isDark ? '#94a3b8' : '#64748b',
                    marginBottom: '4px'
                  }}>
                    {info.label}
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: isDark ? '#f1f5f9' : '#1e293b'
                  }}>
                    {info.label === t.contactEmail ? (
                      <a 
                        href={`mailto:${info.value}`}
                        style={{
                          color: '#22d3ee',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textDecoration = 'none';
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 60px', 
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '32px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {t.globalPresenceTitle}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {offices.map((office) => (
            <div key={office.city} style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))' 
                : 'rgba(255, 255, 255, 0.9)',
              border: isDark 
                ? '1px solid rgba(6, 182, 212, 0.3)' 
                : '1px solid rgba(226, 232, 240, 0.8)',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              transition: 'all 0.3s',
              boxShadow: isDark 
                ? '0 4px 20px rgba(6, 182, 212, 0.1)' 
                : '0 4px 16px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = isDark 
                ? '0 8px 32px rgba(6, 182, 212, 0.2)' 
                : '0 8px 24px rgba(6, 182, 212, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDark 
                ? '0 4px 20px rgba(6, 182, 212, 0.1)' 
                : '0 4px 16px rgba(0,0,0,0.06)';
            }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: office.type === t.headquarters
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                  : 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
              }}>
                <MapPin style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '4px',
                color: isDark ? '#f1f5f9' : '#1e293b'
              }}>
                {office.city}
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: isDark ? '#94a3b8' : '#64748b',
                marginBottom: '8px'
              }}>
                {office.country}
              </p>

              <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: 600,
                background: office.type === t.headquarters
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))'
                  : 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
                border: isDark 
                  ? '1px solid rgba(6, 182, 212, 0.3)' 
                  : '1px solid rgba(6, 182, 212, 0.4)',
                color: '#22d3ee'
              }}>
                {office.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 40px',
        padding: '32px 20px',
        textAlign: 'center',
        background: isDark 
          ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))' 
          : 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(59, 130, 246, 0.08))',
        border: isDark 
          ? '1px solid rgba(6, 182, 212, 0.3)' 
          : '1px solid rgba(6, 182, 212, 0.4)',
        borderRadius: '16px'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '16px',
          color: isDark ? '#f1f5f9' : '#1e293b'
        }}>
          {t.getInTouchTitle}
        </h3>
        <p style={{
          fontSize: '0.875rem',
          color: isDark ? '#cbd5e1' : '#64748b',
          lineHeight: 1.8,
          marginBottom: '24px'
        }}>
          {t.disclaimer}{' '}
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
          {t.contactButton}
        </a>
      </div>
    </div>
  );
}