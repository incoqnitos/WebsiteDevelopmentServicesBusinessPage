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
const LEGAL_NAME = 'Mobile Intelligence Technologies 1985 Ltd';
const BASE_URL = 'https://mitai.de';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

// NAP (Name / Address / Phone) — единни навсякъде на сайта и в Google Business
const NAP = {
  telephone: '+49-176-42437096',
  email: 'contact@mitai.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Schönauer Straße 6',
    addressLocality: 'Mannheim',
    postalCode: '68307',
    addressRegion: 'Baden-Württemberg',
    addressCountry: 'DE',
  },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: LEGAL_NAME,
  legalName: LEGAL_NAME,
  alternateName: [
    'MITAI',
    'MIT AI 1985',
    'MIT AI 1985 LTD',
    'MIT 1985',
    'MIT1985 LTD',
    'Mobile Intelligence Technologies',
    'Mobile Intelligence Technologies 1985',
  ],
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 800,
    height: 560,
  },
  description:
    'Mobile Intelligence Technologies 1985 Ltd (MITAI) is a technology company specialising in artificial intelligence, custom software, mobile and web applications, SaaS platforms, AI agents, business automation, CRM/ERP integrations, data analytics dashboards and digital transformation for business.',
  foundingDate: '1985',
  address: NAP.address,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: NAP.telephone,
      contactType: 'customer service',
      areaServed: ['DE', 'EU'],
      availableLanguage: ['German', 'English', 'Bulgarian'],
    },
    {
      '@type': 'ContactPoint',
      email: NAP.email,
      contactType: 'sales',
      areaServed: ['DE', 'EU'],
    },
  ],
  founder: { '@id': `${BASE_URL}/#dimitar-totev` },
  employee: { '@id': `${BASE_URL}/#dimitar-totev` },
  sameAs: [
    'https://www.linkedin.com/company/mitai',
    'https://www.linkedin.com/in/dimitar-totev',
    'https://twitter.com/mitai_tech',
    'https://github.com/mitai',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'AI Agents',
    'Mobile App Development',
    'Web Development',
    'SaaS Platforms',
    'API Development',
    'Business Automation',
    'CRM Integration',
    'ERP Integration',
    'Data Analytics',
    'Business Intelligence Dashboards',
    'Digital Transformation',
    'Health Tech',
    'FinTech',
    'E-Commerce',
    'Digital Marketing',
    'Software Architecture',
    'UI/UX Design',
    'Robotics',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MITAI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Solutions & Intelligent Agents', description: 'Custom artificial intelligence solutions and AI agents for business automation.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development', description: 'Modern websites, web applications and progressive web apps.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development (iOS & Android)', description: 'Native and cross-platform mobile applications for iOS and Android.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development', description: 'Bespoke software solutions tailored to business requirements.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Platform Development', description: 'Scalable Software-as-a-Service platforms for business.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Process Automation', description: 'Workflow automation and intelligent process optimisation.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM & ERP Integration', description: 'Integration of CRM and ERP systems with existing infrastructure.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Development & Integration', description: 'RESTful API development and third-party API integration.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Analytics & Dashboards', description: 'Interactive business dashboards and data analysis solutions.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Health Solutions', description: 'AI-assisted digital health and medical decision-support applications.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design', description: 'User-centred interface design for web and mobile applications.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Development', description: 'Online shops and B2B e-commerce platform development.' } },
    ],
  },
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Digital Doctor', applicationCategory: 'HealthApplication', description: 'AI-assisted clinical decision-support concept application.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'TRAC Analytics', applicationCategory: 'BusinessApplication', description: 'Adaptive business intelligence and analytics framework.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Transcendify', applicationCategory: 'BusinessApplication', description: 'Business transformation and digital workflow platform.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Winnex', applicationCategory: 'BusinessApplication', description: 'Business optimisation and analytics platform.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'H.I.L.F.', applicationCategory: 'MobileApplication', description: 'Intelligent help and assistance application.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'S Arhont 1 OS', applicationCategory: 'OperatingSystem', description: 'AI-integrated operating system research initiative.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'MITAI Phone', description: 'On-device AI inference and modular mobile hardware initiative.' } },
  ],
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'SoftwareApplication'],
  '@id': `${BASE_URL}/#localbusiness`,
  name: LEGAL_NAME,
  legalName: LEGAL_NAME,
  alternateName: ['MITAI', 'MIT AI 1985', 'MIT 1985 LTD'],
  image: DEFAULT_IMAGE,
  url: BASE_URL,
  telephone: NAP.telephone,
  email: NAP.email,
  priceRange: '€€',
  address: NAP.address,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.5179,
    longitude: 8.4949,
  },
  areaServed: [
    { '@type': 'City', name: 'Mannheim' },
    { '@type': 'City', name: 'Heidelberg' },
    { '@type': 'City', name: 'Frankfurt' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Continent', name: 'Europe' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Bank transfer, Invoice',
  sameAs: [`${BASE_URL}/#organization`],
};

const BOOKS_SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${BASE_URL}/#book-theory-of-relatively-adaptive-constant`,
    name: 'Theory of Relatively Adaptive Constant',
    author: { '@id': `${BASE_URL}/#dimitar-totev` },
    publisher: { '@id': `${BASE_URL}/#organization` },
    about: 'Artificial Intelligence and Mathematical Optimisation — theory of dynamically self-calibrating constants in adaptive computational systems.',
    keywords: 'Adaptive Constants, AI Optimisation, Dynamic Constants, Mathematical Modelling, TRAC, Theory of Relatively Adaptive Constant, Dimitar Totev',
    inLanguage: 'en',
    url: `${BASE_URL}/#research-publications`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${BASE_URL}/#book-sophisticated-predictions-llm-logarithm`,
    name: 'Sophisticated Predictions on LLM New Logarithm',
    author: { '@id': `${BASE_URL}/#dimitar-totev` },
    publisher: { '@id': `${BASE_URL}/#organization` },
    about: 'Advanced Large Language Models — new logarithmic approaches to LLM prediction, scaling and performance optimisation.',
    keywords: 'LLM, Large Language Models, Logarithm, AI Predictions, Language Model Optimisation, Dimitar Totev',
    inLanguage: 'en',
    url: `${BASE_URL}/#research-publications`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${BASE_URL}/#book-transcendify-robotics`,
    name: 'Transcendify — Robotics',
    author: { '@id': `${BASE_URL}/#dimitar-totev` },
    publisher: { '@id': `${BASE_URL}/#organization` },
    about: 'Robotics and Autonomous Systems — integration of AI and robotics within the Transcendify framework for next-generation autonomous operations.',
    keywords: 'Robotics, Autonomous Systems, Transcendify, AI Robotics, S Arhont OS, TROK OS, Dimitar Totev',
    inLanguage: 'en',
    url: `${BASE_URL}/#research-publications`,
  },
];

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#dimitar-totev`,
  name: 'Dimitar Konstantinov Totev',
  alternateName: ['Dimitar Totev', 'D. K. Totev', 'D. Totev'],
  jobTitle: 'Senior Full Stack Engineer, AI Researcher, Software Architect and Technology Entrepreneur',
  description:
    'Dimitar Konstantinov Totev is a Senior Full Stack Engineer with 18+ years of enterprise development experience, AI/LLM specialisation (8+ years), author of 3 books and 60+ scientific publications, and founder and CEO of Mobile Intelligence Technologies 1985 Ltd (MIT AI 1985). He has built 30+ production-ready applications with 100,000+ monthly users, developed the MIT AI LLM (560 billion parameters, 16-bit quantisation), and leads projects including TRAC, Digital Doctor, Transcendify, Winnex, H.I.L.F., S Arhont 1 OS and TROK OS.',
  worksFor: { '@id': `${BASE_URL}/#organization` },
  founder: true,
  url: BASE_URL,
  address: NAP.address,
  sameAs: [
    'https://www.linkedin.com/in/dimitar-totev',
    `${BASE_URL}/#research-publications`,
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master of Laws (LL.M.)', recognizedBy: { '@type': 'Organization', name: 'Burgas Free University, Bulgaria' } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Software Engineer', recognizedBy: { '@type': 'Organization', name: 'Sofia Technical University, Bulgaria' } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', name: 'Fachkraft für App-Entwicklung (iOS, Android, React Native)', recognizedBy: { '@type': 'Organization', name: 'Syntax Institut Berlin, Germany' } },
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Large Language Models',
    'LLM Integration',
    'Software Architecture',
    'Full Stack Development',
    'Python',
    'React',
    'React Native',
    'Node.js',
    'AWS Cloud',
    'Docker',
    'Kubernetes',
    'Blockchain',
    'Smart Contracts',
    'Ethereum',
    'TFI Token',
    'Dynamic Constants',
    'Theory of Relatively Adaptive Constant',
    'Adaptive Computational Models',
    'Mathematical Modelling',
    'Navier-Stokes Equations',
    'Euler Equations',
    'Riemann Hypothesis',
    'Pareto Systems',
    'Adaptive Regularization',
    'Machine Learning',
    'AI System Architecture',
    'Digital Health',
    'Medical AI',
    'Biomarker Analytics',
    'Telemetry',
    'Radiometry',
    'Long Wave Communications',
    'Natural Language Processing',
    'Computer Vision',
    'Intelligent Operating Systems',
    'Mobile Computing',
    'Edge AI',
    'Real-time Analytics',
    'Business Intelligence',
    'FinTech',
    'E-Commerce',
    'Digital Government',
    'Cybersecurity',
    'Scalable Software Systems',
    'Data Engineering',
    'Vector Search',
    'RAG Systems',
    'PostgreSQL',
    'MongoDB',
  ],
  numberOfPublications: 60,
  author: [
    { '@id': `${BASE_URL}/#book-theory-of-relatively-adaptive-constant` },
    { '@id': `${BASE_URL}/#book-sophisticated-predictions-llm-logarithm` },
    { '@id': `${BASE_URL}/#book-transcendify-robotics` },
    { '@id': `${BASE_URL}/#toz-navier-stokes` },
  ],
  publishingPrinciples: `${BASE_URL}/#research-publications`,
  mainEntityOfPage: {
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/#research-publications`,
    name: 'Research, Books and Scientific Publications by Dimitar Totev',
    url: `${BASE_URL}/#research-publications`,
    about: { '@id': `${BASE_URL}/#dimitar-totev` },
    author: { '@id': `${BASE_URL}/#dimitar-totev` },
  },
};

const RESEARCH_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#research-publications`,
  name: 'Research and Scientific Work by Dimitar Totev | MIT1985 LTD',
  description:
    'Technical research, conceptual frameworks, software experiments and applied AI projects by Dimitar Konstantinov Totev, developed through Mobile Intelligence Technologies.',
  url: `${BASE_URL}/#research-publications`,
  mainEntity: { '@id': `${BASE_URL}/#dimitar-totev` },
  about: [
    {
      '@type': 'ScholarlyArticle',
      name: 'TOZ-Modified Navier–Stokes Equations: Adaptive Regularization Framework',
      author: { '@id': `${BASE_URL}/#dimitar-totev` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      description:
        'A theoretical research framework investigating adaptive regularization through state-dependent effective viscosity and stability conditions. The work proposes formal assumptions and energy estimates that require further mathematical verification and independent peer review.',
      keywords: 'Navier-Stokes, adaptive regularization, effective viscosity, TOZ framework, TROK, mathematical modelling',
      url: `${BASE_URL}/#toz-navier-stokes`,
    },
    {
      '@type': 'TechArticle',
      name: 'Unified Signal Index and Reverse Accumulative Compression (USI/RAC)',
      author: { '@id': `${BASE_URL}/#dimitar-totev` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      description:
        'An experimental AI and biomarker-integration framework designed to combine high-confidence signals into a unified analytical index. Reported performance indicators are preliminary and require independent peer-reviewed validation.',
      keywords: 'biomarker analytics, AI diagnostics, Unified Signal Index, Reverse Accumulative Compression, digital health',
    },
    {
      '@type': 'TechArticle',
      name: 'TRAC Analytics: Adaptive Business Intelligence Engine',
      author: { '@id': `${BASE_URL}/#dimitar-totev` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      description:
        'An experimental business-intelligence framework based on adaptive analytical parameters and dynamically adjusted models for business analysis, forecasting and decision-making.',
      keywords: 'business intelligence, adaptive analytics, real-time analytics, TRAC, dynamic constants',
    },
    {
      '@type': 'TechArticle',
      name: 'S Arhont 1 OS: AI-Integrated Operating System Research',
      author: { '@id': `${BASE_URL}/#dimitar-totev` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      description:
        'A research and product-vision project exploring how AI agents could participate in operating-system functions including scheduling, networking, user interaction and system-level automation.',
      keywords: 'AI operating system, kernel scheduling, intelligent OS, S Arhont, edge AI',
    },
    {
      '@type': 'TechArticle',
      name: 'MITAI Phone: On-Device AI Inference and Modular Mobile Architecture',
      author: { '@id': `${BASE_URL}/#dimitar-totev` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      description:
        'A hardware and software research initiative focused on on-device AI inference, modular mobile architecture and an Android-based operating-system environment.',
      keywords: 'edge AI, on-device inference, modular hardware, MITAI Phone, mobile AI',
    },
  ],
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
  description = 'Mobile Intelligence Technologies 1985 Ltd (MITAI) – KI-Software, Mobile Apps, SaaS-Plattformen, AI-Agenten und digitale Automatisierung für Unternehmen in Mannheim und Deutschland.',
  keywords = 'MITAI, MIT AI 1985, Mobile Intelligence Technologies, MIT 1985 LTD, KI Software Mannheim, Künstliche Intelligenz Deutschland, Mobile App Entwicklung, Web Entwicklung, SaaS, AI Agenten, Business Automation, Dimitar Totev',
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
    setMeta('author', 'Dimitar Totev – Mobile Intelligence Technologies 1985 Ltd');
    setMeta('geo.region', 'DE-BW');
    setMeta('geo.placename', 'Mannheim');
    setMeta('geo.position', '49.5179;8.4949');
    setMeta('ICBM', '49.5179, 8.4949');
    setMeta('DC.creator', 'Dimitar Konstantinov Totev');
    setMeta('DC.publisher', 'Mobile Intelligence Technologies 1985 Ltd');
    setMeta('DC.language', 'de');
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
    const schemas: object[] = [ORG_SCHEMA, LOCAL_BUSINESS_SCHEMA, PERSON_SCHEMA, RESEARCH_SCHEMA, ...BOOKS_SCHEMA];
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
    title: 'KI-Software & Mobile Intelligence Mannheim | MITAI – MIT AI 1985',
    description:
      'Mobile Intelligence Technologies 1985 Ltd (MITAI) – KI-Software, Mobile Apps, SaaS-Plattformen, AI-Agenten und Business-Automatisierung in Mannheim und Deutschland. Gründer: Dimitar Totev.',
    keywords:
      'MITAI, MIT AI 1985, MIT AI 1985 LTD, Mobile Intelligence Technologies, MIT 1985, Dimitar Totev, KI Software Mannheim, Künstliche Intelligenz Unternehmen Deutschland, Mobile App Entwicklung, Web Entwicklung, SaaS Plattform, AI Agenten, Business Automatisierung, Digital Transformation',
    canonical: BASE_URL,
  },
  services: {
    title: 'Leistungen – KI, Mobile, Web, SaaS & Automation | MITAI Mannheim',
    description:
      'Von KI-Softwarelösungen über Mobile Apps bis zu SaaS-Plattformen, API-Integrationen, CRM/ERP und Business-Dashboards: das vollständige Leistungsportfolio von Mobile Intelligence Technologies 1985 Ltd.',
    keywords:
      'MITAI Leistungen, MIT AI 1985 Services, KI Software, Mobile App Entwicklung, Web Entwicklung, SaaS, API Integration, CRM ERP, Business Dashboard, Automatisierung, Mannheim',
  },
  contact: {
    title: 'Kontakt – MITAI Mannheim | MIT AI 1985 LTD Anfrage',
    description:
      'Kontaktieren Sie Mobile Intelligence Technologies 1985 Ltd (MITAI) in Mannheim: Schönauer Straße 6, 68307 Mannheim. Tel: +49 176 42437096. Kostenlose Erstberatung für KI-Software, Mobile Apps und mehr.',
    keywords:
      'MITAI Kontakt Mannheim, MIT AI 1985 Beratung, Mobile Intelligence Technologies Telefon, KI Software Anfrage, Software Entwicklung Mannheim, Schönauer Straße 6',
  },
  portfolio: {
    title: 'Portfolio – Projekte & Referenzen | MITAI MIT AI 1985',
    description:
      'Ausgewählte Projekte von Mobile Intelligence Technologies 1985 Ltd: KI-Anwendungen, Mobile Apps, Web-Plattformen, SaaS-Systeme und Automatisierungslösungen für Kunden in Deutschland und Europa.',
    keywords:
      'MITAI Portfolio, MIT AI 1985 Projekte, KI Projekte, Mobile App Referenzen, Web Entwicklung, SaaS Referenzen, Digital Doctor, TRAC, Transcendify, Winnex',
  },
  about: {
    title: 'About Dimitar Totev | MIT 1985 - Mobile Intelligence Technologies',
    description:
      'Discover MIT 1985 LTD (Mobile Intelligence Technologies), a software engineering firm founded by tech visionary and software architect Dimitar Konstantinov Totev. AI, LLM, SaaS, mobile development, blockchain and digital health — Mannheim, Germany.',
    keywords:
      'Dimitar Totev, Dimitar Konstantinov Totev, MIT 1985, MIT AI 1985, Mobile Intelligence Technologies, software architect Mannheim, AI visionary Germany, MITAI CEO, KI Unternehmen Mannheim, UIC 200063629, BG200063629',
  },
  software: {
    title: 'KI-Software, SaaS & AI-Agenten | MITAI MIT AI 1985',
    description:
      'Individuelle KI-Software von Mobile Intelligence Technologies 1985 Ltd: SaaS-Plattformen, AI-Agenten, Workflow-Automatisierung, CRM/ERP-Integration und Business-Dashboards.',
    keywords:
      'KI Software Mannheim, SaaS Entwicklung, AI Agenten, Software Automatisierung, CRM Integration, ERP Integration, Business Dashboard, MITAI Software, MIT AI 1985',
  },
  hardware: {
    title: 'Hardware & MITAI Phone – Intelligente Gerätentwicklung',
    description:
      'Hardware-Initiativen von Mobile Intelligence Technologies 1985 Ltd: MITAI Phone (on-device AI), modulare Mobile-Architektur und IoT-Lösungen.',
    keywords:
      'MITAI Phone, Hardware Entwicklung, On-device AI, Edge AI, IoT Lösungen, Modulare Hardware, MIT AI 1985 Hardware',
  },
  robotics: {
    title: 'Robotik & KI-Automatisierung | MITAI MIT AI 1985',
    description:
      'Robotik- und Automatisierungslösungen von Mobile Intelligence Technologies 1985 Ltd: autonome Systeme, Computer Vision, S Arhont OS und Industrieautomatisierung.',
    keywords:
      'Robotik Deutschland, KI Automatisierung, Autonome Systeme, Computer Vision, S Arhont OS, MITAI Robotik, MIT AI 1985',
  },
  pricing: {
    title: 'Preise & Pakete – MITAI MIT AI 1985 | Mannheim',
    description:
      'Transparente Preise für MITAI-Leistungen: KI-Software, Mobile Apps, SaaS, Web-Entwicklung und Automatisierung. Flexible Pakete für Start-ups, KMUs und Enterprise. Kostenlose Erstberatung.',
    keywords:
      'MITAI Preise, MIT AI 1985 Kosten, KI Software Preis, Mobile App Entwicklung Kosten, SaaS Preis, Web Entwicklung Mannheim Preis',
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
    title: 'Investoren – MITAI MIT AI 1985 Investment Hub',
    description:
      'Investitionsmöglichkeiten bei Mobile Intelligence Technologies 1985 Ltd (MITAI): KI, SaaS, Digital Health, FinTech und Mobile-Technologie-Projekte mit hohem Wachstumspotenzial.',
    keywords:
      'MITAI Investoren, MIT AI 1985 Investment, Mobile Intelligence Technologies Aktien, KI Investment, Digital Health Investment, FinTech, Dimitar Totev',
  },
  'toz-navier-stokes': {
    title: 'TOZ/TROK: Navier-Stokes Adaptives Regularisierungs-Framework | Dimitar Totev',
    description:
      'Theoretisches Forschungsframework von Dimitar Konstantinov Totev (MIT1985 LTD): adaptive Regularisierung der Navier-Stokes-Gleichungen durch zustandsabhängige effektive Viskosität. Erfordert unabhängige Peer-Review-Prüfung.',
    keywords:
      'Navier-Stokes Framework, TOZ Framework, TROK, Adaptive Regularisierung, Effektive Viskosität, Dimitar Totev Forschung, MIT AI 1985 Publikation, Mathematische Modellierung',
    ogType: 'article',
  },
  publications: {
    title: 'Publikationen & News – MITAI MIT AI 1985 | Dimitar Totev',
    description:
      'Forschungsartikel, Innovationen und Neuigkeiten von Mobile Intelligence Technologies 1985 Ltd und Dimitar Totev: KI-Systeme, adaptive Modelle, Digital Health und Technologie.',
    keywords:
      'MITAI Publikationen, MIT AI 1985 Forschung, Dimitar Totev Artikel, KI Forschung, Digital Doctor, TRAC, S Arhont OS, Technologie News',
  },
  'research-publications': {
    title: 'Dimitar Totev | AI Research, Scientific Publications & Technology',
    description:
      'Research and scientific work by Dimitar Konstantinov Totev — software architect, AI researcher and founder of Mobile Intelligence Technologies 1985 Ltd. Publications: TOZ/TROK, USI/RAC, TRAC Analytics, S Arhont OS, MITAI Phone.',
    keywords:
      'Dimitar Totev, Dimitar Konstantinov Totev, AI researcher, software architect, Mobile Intelligence Technologies 1985 Ltd, MIT AI 1985, TOZ Navier-Stokes, USI RAC, TRAC Analytics, S Arhont OS, MITAI Phone, Digital Doctor, research publications, adaptive AI, dynamic constants, biomarker analytics, Mannheim',
    ogType: 'profile',
  },
  'client-portal': {
    title: 'Kundenportal – MITAI MIT AI 1985 | Anfrage & Terminbuchung',
    description:
      'Kundenportal von Mobile Intelligence Technologies 1985 Ltd: Nachricht senden oder Beratungstermin direkt buchen. Schnell, einfach, sicher — +49 176 42437096.',
    keywords:
      'MITAI Kundenportal, MIT AI 1985 Kontakt, Termin buchen, Beratungsgespräch Mannheim, Software Anfrage',
    noIndex: false,
  },
  admin: {
    title: 'Admin Panel – MITAI',
    description: 'MITAI Admin Panel',
    noIndex: true,
  },
};
