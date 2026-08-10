import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
}

const SITE_NAME = 'MITAI – Mobile Intelligence Technologies';
const BASE_URL = 'https://mitai.de';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'MIT1985 LTD',
  alternateName: ['MITAI', 'Mobile Intelligence Technologies'],
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 800,
    height: 560,
  },
  description:
    'MIT1985 LTD (MITAI) ist ein innovatives Technologieunternehmen, das KI-gestützte Software, Mobile Apps, Web-Entwicklung, Robotik und Digitales Marketing anbietet.',
  foundingDate: '1985',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+49-176-42437096',
      contactType: 'customer service',
      areaServed: ['DE', 'EU'],
      availableLanguage: ['German', 'English', 'Bulgarian'],
    },
    {
      '@type': 'ContactPoint',
      email: 'contact@mitai.de',
      contactType: 'sales',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/mitai',
    'https://twitter.com/mitai_tech',
    'https://github.com/mitai',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Mobile App Development',
    'Web Development',
    'Robotics',
    'Machine Learning',
    'UI/UX Design',
    'E-Commerce',
    'Digital Marketing',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MITAI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KI-Softwareentwicklung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Entwicklung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web-Entwicklung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Robotik & Automatisierung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Lösungen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Design & Werbung' } },
    ],
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'MIT1985 LTD – MITAI',
  image: DEFAULT_IMAGE,
  url: BASE_URL,
  telephone: '+49-176-42437096',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DE',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [`${BASE_URL}/#organization`],
};

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#author`,
  name: 'MITAI Team',
  jobTitle: 'AI & Technology Experts',
  worksFor: {
    '@id': `${BASE_URL}/#organization`,
  },
  knowsAbout: [
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Robotics',
    'Software Architecture',
    'Navier-Stokes Equations',
    'Computational Fluid Dynamics',
  ],
  url: BASE_URL,
};

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(id: string, data: object | object[]) {
  let el = document.querySelector(`script[data-seo-id="${id}"]`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-seo-id', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(Array.isArray(data) ? data : [data]);
}

export function SEO({
  title,
  description = 'MITAI (MIT1985 LTD) – Ihr Partner für KI-Software, Mobile Apps, Web-Entwicklung, Robotik und Digitales Marketing in Deutschland.',
  keywords = 'KI Software, Künstliche Intelligenz, Mobile App Entwicklung, Web Entwicklung, Robotik, Machine Learning, UI UX Design, E-Commerce, Deutschland, MITAI, MIT1985',
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  useEffect(() => {
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('author', 'MIT1985 LTD – MITAI');
    setMeta('robots', noIndex ? 'noindex,nofollow' : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');
    setMeta('googlebot', noIndex ? 'noindex,nofollow' : 'index,follow');
    setMeta('language', 'de');
    setMeta('revisit-after', '7 days');
    setMeta('rating', 'general');

    // Open Graph
    setMeta('og:type', ogType, true);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'de_DE', true);
    setMeta('og:locale:alternate', 'en_GB', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    setMeta('twitter:site', '@mitai_tech');
    setMeta('twitter:creator', '@mitai_tech');

    // Canonical
    const canonUrl = canonical || `${BASE_URL}/${window.location.hash}`;
    setLink('canonical', canonUrl);

    // Viewport & theme
    setMeta('viewport', 'width=device-width, initial-scale=1.0');
    setMeta('theme-color', '#020617');
    setMeta('msapplication-TileColor', '#020617');

    // Structured Data
    const schemas: object[] = [ORG_SCHEMA, LOCAL_BUSINESS_SCHEMA, PERSON_SCHEMA];
    if (structuredData) {
      if (Array.isArray(structuredData)) schemas.push(...structuredData);
      else schemas.push(structuredData);
    }
    setJsonLd('mitai-structured-data', schemas);
  }, [fullTitle, description, keywords, canonical, ogImage, ogType, noIndex, structuredData]);

  return null;
}

// Per-page SEO configs
export const PAGE_SEO: Record<string, SEOProps> = {
  home: {
    title: 'KI-Software & Mobile Intelligence | MITAI Deutschland',
    description:
      'MITAI (MIT1985 LTD) entwickelt KI-gestützte Software, Mobile Apps und Web-Lösungen. Robotik, Machine Learning und digitale Transformation für Ihr Unternehmen in Deutschland.',
    keywords:
      'MITAI, MIT1985 LTD, KI Software Deutschland, Künstliche Intelligenz Unternehmen, Mobile App Entwicklung, Web Entwicklung, Robotik, Machine Learning, AI Agentur',
    canonical: BASE_URL,
  },
  services: {
    title: 'Unsere Leistungen – KI, Mobile, Web & Robotik',
    description:
      'Von KI-Softwarelösungen über Mobile Apps bis hin zu Web-Entwicklung und Robotik: Entdecken Sie das vollständige Leistungsportfolio von MITAI.',
    keywords:
      'KI Leistungen, Software Entwicklung, Mobile Development, Web Development, Robotik Lösungen, UI UX Design, E-Commerce',
  },
  contact: {
    title: 'Kontakt – MITAI Anfrage & Beratung',
    description:
      'Kontaktieren Sie MITAI für eine kostenlose Beratung. Wir helfen Ihnen mit KI-Software, Mobile Apps, Web-Entwicklung und mehr. Telefon: +49 176 42437096.',
    keywords:
      'MITAI Kontakt, MIT1985 Beratung, KI Software Anfrage, Software Entwicklung Anfrage Deutschland',
  },
  portfolio: {
    title: 'Portfolio – Unsere Projekte & Referenzen',
    description:
      'Entdecken Sie ausgewählte Projekte von MITAI: KI-Anwendungen, Mobile Apps, Web-Plattformen und Robotik-Lösungen für Kunden in Deutschland und Europa.',
    keywords:
      'MITAI Portfolio, KI Projekte, Mobile App Referenzen, Web Entwicklung Projekte, Robotik Projekte',
  },
  about: {
    title: 'Über MITAI – Mobile Intelligence Technologies',
    description:
      'MIT1985 LTD (MITAI) – ein erfahrenes Technologieunternehmen mit Expertise in KI, Mobile Development, Robotik und digitalem Marketing. Lernen Sie unser Team kennen.',
    keywords:
      'MITAI Team, MIT1985 LTD, Über uns, KI Unternehmen Deutschland, Technologie Experten',
  },
  software: {
    title: 'KI-Software & Digitale Lösungen – MITAI',
    description:
      'Individuelle KI-Software und digitale Lösungen von MITAI: SaaS-Plattformen, Automatisierung, intelligente Agenten und Enterprise-Software.',
    keywords:
      'KI Software, SaaS Entwicklung, Software Automatisierung, AI Agenten, Enterprise Software Deutschland',
  },
  hardware: {
    title: 'Hardware & IoT Lösungen – MITAI',
    description:
      'MITAI entwickelt intelligente Hardware- und IoT-Lösungen: eingebettete Systeme, Sensorik und vernetzte Geräte für Industrie und Forschung.',
    keywords: 'Hardware Entwicklung, IoT Lösungen, Embedded Systems, Sensorik, Smart Devices',
  },
  robotics: {
    title: 'Robotik & Automatisierung – MITAI',
    description:
      'Fortschrittliche Robotiklösungen von MITAI: autonome Systeme, Computer Vision, Bewegungssteuerung und Industrieautomatisierung.',
    keywords:
      'Robotik Deutschland, Automatisierung, Autonome Systeme, Computer Vision, Industrierobotik',
  },
  pricing: {
    title: 'Preise & Pakete – MITAI Software & Services',
    description:
      'Transparente Preisgestaltung für MITAI-Leistungen. Flexible Pakete für Start-ups, KMUs und Enterprise-Kunden. Kostenlose Erstberatung inklusive.',
    keywords:
      'MITAI Preise, Software Entwicklung Kosten, KI Software Preis, Mobile App Kosten, Web Entwicklung Preis',
  },
  'web-development': {
    title: 'Web-Entwicklung – Professionelle Websites & Apps',
    description:
      'MITAI entwickelt moderne Websites und Web-Applikationen: React, Next.js, Progressive Web Apps, E-Commerce und maßgeschneiderte Lösungen.',
    keywords:
      'Web Entwicklung Deutschland, React Entwicklung, Next.js, Progressive Web App, Web Agentur',
  },
  'mobile-development': {
    title: 'Mobile App Entwicklung – iOS & Android',
    description:
      'Native und Cross-Platform Mobile Apps von MITAI für iOS und Android. Flutter, React Native und native Entwicklung für Ihr Business.',
    keywords:
      'Mobile App Entwicklung, iOS App, Android App, Flutter Entwicklung, React Native, App Agentur Deutschland',
  },
  'uiux-design': {
    title: 'UI/UX Design – Nutzerzentriertes Produkt-Design',
    description:
      'MITAI gestaltet intuitive und ästhetische Benutzeroberflächen. UI/UX Design für Web, Mobile und Enterprise-Anwendungen.',
    keywords: 'UI UX Design, Nutzererfahrung, Interfacedesign, Produktdesign, UX Agentur',
  },
  ecommerce: {
    title: 'E-Commerce Lösungen – Online-Shop Entwicklung',
    description:
      'Professionelle E-Commerce-Entwicklung von MITAI: Shopify, WooCommerce, individuelle Shops und B2B-Plattformen für maximalen Umsatz.',
    keywords:
      'E-Commerce Entwicklung, Online Shop, Shopify Entwicklung, WooCommerce, B2B Plattform',
  },
  'design-advertising': {
    title: 'Design & Werbung – Kreative Markenkommunikation',
    description:
      'MITAI bietet kreative Design- und Werbelösungen: Branding, Grafik-Design, digitale Kampagnen und Marketing-Materialien.',
    keywords: 'Design Werbung, Branding, Grafik Design, Digitales Marketing, Werbeagentur',
  },
  investors: {
    title: 'Investoren – MITAI Investment Hub',
    description:
      'Investitionsmöglichkeiten bei MITAI (MIT1985 LTD): Technologieprojekte mit hohem Wachstumspotenzial in KI, Robotik und Mobile.',
    keywords: 'MITAI Investoren, Technologie Investment, KI Startup, Robotik Investment',
  },
  'toz-navier-stokes': {
    title: 'TOZ/TROK: Lösung der Navier-Stokes-Gleichungen – MITAI Forschung',
    description:
      'Wissenschaftliche Publikation: Das TOZ/TROK-Framework als adaptive Lösung für die Navier-Stokes-Gleichungen. Forschung von MITAI zu einem der Millennium-Probleme.',
    keywords:
      'Navier-Stokes Lösung, TOZ Framework, TROK, Millennium Problem, Strömungsmechanik, Mathematik Forschung, MITAI Publikation',
    ogType: 'article',
  },
  publications: {
    title: 'Publikationen & News – MITAI Forschung',
    description:
      'Aktuelle Forschungsartikel, Innovationen und Nachrichten von MITAI: KI, Robotik, Mathematik und Technologie.',
    keywords: 'MITAI Publikationen, KI Forschung, Robotik Artikel, Technologie News, Wissenschaft',
  },
  'client-portal': {
    title: 'Kundenportal – Nachrichten & Terminbuchung',
    description:
      'MITAI Kundenportal: Senden Sie uns Ihre Anfrage oder buchen Sie direkt einen Beratungstermin. Schnell, einfach und sicher.',
    keywords:
      'MITAI Kundenportal, Kontakt, Termin buchen, Beratungsgespräch, Anfrage senden',
    noIndex: false,
  },
  admin: {
    title: 'Admin Panel – MITAI',
    description: 'MITAI Admin Panel',
    noIndex: true,
  },
};
