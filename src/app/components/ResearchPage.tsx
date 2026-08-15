import React from 'react';
import {
  ExternalLink, BookOpen, FlaskConical, Cpu, FileText, User,
  Github, Linkedin, ChevronRight, BookMarked, Award, Code2,
  Brain, HeartPulse, Landmark, Zap, Database, Shield,
} from 'lucide-react';

// ── Books ──────────────────────────────────────────────────────────────────
const BOOKS = [
  {
    id: 'book-trac',
    title: 'Theory of Relatively Adaptive Constant',
    subtitle: 'AI & Mathematical Optimisation',
    description:
      'A foundational theoretical work exploring dynamically self-calibrating constants in adaptive computational systems. The book presents the mathematical basis for TRAC — a framework where analytical parameters adjust autonomously in response to changing environmental conditions, market signals and system states.',
    keywords: ['Adaptive Constants', 'Mathematical Optimisation', 'AI Systems', 'TRAC', 'Dynamic Parameters', 'Self-calibrating Models'],
    lang: 'English',
    publisher: 'Mobile Intelligence Technologies 1985 Ltd',
  },
  {
    id: 'book-llm-logarithm',
    title: 'Sophisticated Predictions on LLM New Logarithm',
    subtitle: 'Advanced Language Models',
    description:
      'An investigation of novel logarithmic approaches to large language model prediction, scaling behaviour and performance optimisation. The work proposes new mathematical relationships governing LLM output quality and introduces techniques for improved inference efficiency in large-scale AI systems.',
    keywords: ['LLM', 'Large Language Models', 'Logarithm', 'AI Prediction', 'Language Model Scaling', 'Inference Optimisation'],
    lang: 'English',
    publisher: 'Mobile Intelligence Technologies 1985 Ltd',
  },
  {
    id: 'book-transcendify-robotics',
    title: 'Transcendify — Robotics',
    subtitle: 'Robotics & Autonomous Systems',
    description:
      'An exploration of robotics and autonomous systems through the Transcendify framework, covering AI-native operating environments (S Arhont 1 OS, TROK OS), autonomous decision-making architectures and the integration of intelligent agents into physical and digital operational systems.',
    keywords: ['Robotics', 'Autonomous Systems', 'Transcendify', 'S Arhont OS', 'TROK OS', 'AI Agents', 'Autonomous Operations'],
    lang: 'English',
    publisher: 'Mobile Intelligence Technologies 1985 Ltd',
  },
];

// ── Research papers (detailed) ─────────────────────────────────────────────
const RESEARCH_PAPERS = [
  {
    id: 'toz-navier-stokes',
    title: 'TOZ-Modified Navier–Stokes Equations: Adaptive Regularization Framework',
    subtitle: 'Theoretical Mathematical Research',
    status: 'Proposed Framework — Requires Independent Peer Review',
    description:
      'A theoretical framework investigating adaptive regularization through state-dependent effective viscosity governed by TOZ/TROK coefficients. Formal energy estimates under four structural assumptions (uniform ellipticity, Lipschitz continuity, adaptive gradient damping, Lyapunov control). Results are a proposed framework requiring further mathematical verification.',
    keywords: ['Navier-Stokes', 'Euler Equations', 'TOZ/TROK Framework', 'Adaptive Regularization', 'Effective Viscosity', 'Mathematical Modelling'],
    link: '#toz-navier-stokes',
    note: 'This is a theoretical investigation. Results require independent mathematical verification and peer review.',
  },
  {
    id: 'riemann',
    title: 'Riemann Hypothesis — Computational and Analytical Approaches',
    subtitle: 'Number Theory & Computational Mathematics',
    status: 'Research Hypothesis — Under Investigation',
    description:
      'Computational and analytical approaches to the Riemann Hypothesis, exploring connections between the distribution of prime numbers, the zeros of the Riemann zeta function, and adaptive computational models developed within the TRAC framework.',
    keywords: ['Riemann Hypothesis', 'Zeta Function', 'Prime Numbers', 'Number Theory', 'Computational Mathematics'],
  },
  {
    id: 'usi-rac',
    title: 'Unified Signal Index and Reverse Accumulative Compression (USI/RAC)',
    subtitle: 'Experimental AI & Biomarker Analytics',
    status: 'Preliminary Research — Not Clinically Validated',
    description:
      'An experimental AI and biomarker-integration framework combining high-confidence signals into a Unified Signal Index. Applications to multiple sclerosis, neurofibromatosis type 1, lupus, Alzheimer\'s disease, stroke, diabetes and Parkinson\'s disease. Reported indicators are preliminary and require independent validation.',
    keywords: ['Biomarker Analytics', 'USI', 'RAC', 'Medical AI', 'Multiple Sclerosis', 'NF1', 'Alzheimer', 'Digital Health'],
    note: 'Clinical applications require independent datasets, regulatory approvals and peer-reviewed validation before any clinical use.',
  },
];

// ── Technical publications (categorised) ──────────────────────────────────
const TECH_PUBLICATIONS = [
  {
    id: 'trac-analytics',
    title: 'TRAC Analytics: Adaptive Business Intelligence Engine',
    subtitle: 'Business Intelligence & Adaptive Systems',
    status: 'Experimental Framework',
    description:
      'An experimental business-intelligence framework based on dynamically adjusted analytical parameters. Supports business analysis, forecasting and decision-making through self-calibrating market constants. Basis of the Theory of Relatively Adaptive Constant.',
    keywords: ['TRAC', 'Business Intelligence', 'Adaptive Constants', 'Real-time Analytics', 'Market Modelling'],
    link: '#trac',
  },
  {
    id: 'mit-ai-llm',
    title: 'MIT AI LLM: 560 Billion Parameter Language Model Architecture',
    subtitle: 'Large Language Models & AI Infrastructure',
    status: 'Technical Architecture — Internal Development',
    description:
      'Architecture and design of the MIT AI LLM — a 560 billion parameter large language model with 16-bit quantisation, developed for enterprise AI applications and integration with the MIT AI platform ecosystem.',
    keywords: ['LLM', '560B Parameters', '16-bit Quantisation', 'Large Language Model', 'AI Infrastructure', 'Enterprise AI'],
  },
  {
    id: 'tfi-token',
    title: 'TFI Token: Ethereum-Based Blockchain Implementation',
    subtitle: 'Blockchain & FinTech',
    status: 'Applied Implementation',
    description:
      'Design and implementation of the TFI Token — an Ethereum-based blockchain asset with custom smart contracts, NFT integration and FinTech applications including real estate portfolio management (2.5M+ integrated properties, Dubai-focused).',
    keywords: ['TFI Token', 'Ethereum', 'Smart Contracts', 'Blockchain', 'NFT', 'FinTech', 'Real Estate', 'Web3'],
  },
  {
    id: 'arhont-os',
    title: 'S Arhont 1 OS & TROK OS: AI-Native Operating System Research',
    subtitle: 'Intelligent Operating Systems',
    status: 'Research Vision & Prototype',
    description:
      'Research and prototype for the first fully AI-native operating systems: S Arhont 1 OS and TROK OS. AI agents participate in kernel scheduling, networking, user interaction and system-level automation rather than operating through static rule sets.',
    keywords: ['AI Operating System', 'S Arhont OS', 'TROK OS', 'Kernel Scheduling', 'AI Agents', 'Autonomous OS'],
    link: '#arhont1',
  },
  {
    id: 'digital-doctor',
    title: 'Digital Doctor: AI-Assisted Clinical Decision Support',
    subtitle: 'Digital Health & Medical AI',
    status: 'Conceptual & Experimental Stage',
    description:
      'An experimental digital health ecosystem with AI-assisted diagnostics, symptom analysis and clinical decision support. Areas of application include stroke, diabetes, Parkinson\'s disease, CAR-T therapy and implantology. Not a replacement for licensed medical practice.',
    keywords: ['Digital Health', 'Medical AI', 'Clinical Decision Support', 'Stroke', 'Diabetes', 'Parkinson', 'CAR-T', 'Diagnostics'],
    note: 'Does not replace licensed medical advice. Requires clinical validation and regulatory approval for clinical use.',
  },
  {
    id: 'telemetry-radiometry',
    title: 'Telemetry, Radiometry and Long Wave Communications Systems',
    subtitle: 'Signal Processing & Communications',
    status: 'Technical Research',
    description:
      'Research into telemetry and radiometry systems, long wave communication protocols and their applications in autonomous monitoring, remote sensing and intelligent data acquisition infrastructures.',
    keywords: ['Telemetry', 'Radiometry', 'Long Wave Communications', 'Signal Processing', 'Remote Sensing'],
  },
  {
    id: 'mobile-app-architecture',
    title: 'Scalable Mobile Application Architecture for AI-Enabled Platforms',
    subtitle: 'Software Architecture & Mobile Computing',
    status: 'Technical Publication',
    description:
      'Architectural patterns for building scalable, AI-enabled mobile applications (iOS, Android, cross-platform). Covers multi-tenant systems, JWT/OAuth 2.0/RBAC authentication, React Native, real-time data pipelines and cloud-native microservices.',
    keywords: ['Mobile Architecture', 'iOS', 'Android', 'React Native', 'Multi-tenant', 'Cloud Native', 'Microservices'],
  },
  {
    id: 'digital-government',
    title: 'Digital Government: AI-Powered E-Government and Tax Processing',
    subtitle: 'Government Technology & Public Administration',
    status: 'Applied Project',
    description:
      'E-government solutions with AI-assisted tax processing, workflow automation and public administration digitalisation. Designed to reduce administrative overhead and improve citizen service delivery through intelligent automation.',
    keywords: ['Digital Government', 'E-Government', 'AI Tax Processing', 'Public Administration', 'GovTech', 'Automation'],
  },
  {
    id: 'pareto-systems',
    title: 'Pareto Systems and Adaptive Optimisation in Complex Networks',
    subtitle: 'Systems Theory & Optimisation',
    status: 'Theoretical Research',
    description:
      'Application of Pareto optimality principles to adaptive computational systems, exploring how multi-objective optimisation interacts with dynamically calibrating constants in complex network environments.',
    keywords: ['Pareto Systems', 'Multi-objective Optimisation', 'Adaptive Systems', 'Complex Networks', 'Systems Theory'],
  },
];

// ── Applied projects ───────────────────────────────────────────────────────
const APPLIED_PROJECTS = [
  { id: 'winnex', title: 'Winnex', subtitle: 'FinTech Leasing Platform', desc: 'FinTech leasing and real estate platform with 2.5M+ integrated properties, focused on Dubai market.', tags: ['FinTech', 'Real Estate', 'Dubai', 'Leasing'] },
  { id: 'transcendify', title: 'Transcendify', subtitle: 'FinTech & AI Platform', desc: 'FinTech platform integrating AI and crypto with TFI Token, NFT campaigns and smart contract automation.', tags: ['FinTech', 'Crypto', 'TFI Token', 'NFT', 'AI'] },
  { id: 'chatmitai', title: 'Chatmitai', subtitle: 'Predictive Chat AI', desc: 'Predictive chat AI built on an experimental LLM — conversational AI for business and customer interaction.', tags: ['Chat AI', 'LLM', 'Conversational AI'] },
  { id: 'marketing-index', title: 'Marketing Index', subtitle: 'Lead Generation & Analytics', desc: 'AI-powered lead generation and marketing analytics platform with real-time campaign performance tracking.', tags: ['Marketing', 'Analytics', 'Lead Generation', 'AI'] },
  { id: 'hilf', title: 'H.I.L.F.', subtitle: 'Financial Optimisation', desc: 'Financial optimisation platform integrating 2.5M+ real estate objects with AI-driven investment analysis.', tags: ['Finance', 'Real Estate', 'AI', 'Optimisation'] },
  { id: 'mitai-phone', title: 'MITAI Phone', subtitle: 'On-device AI Hardware', desc: 'Modular smartphone with on-device AI inference and custom Android fork optimised for S Arhont OS ecosystem.', tags: ['Hardware', 'Edge AI', 'Android', 'Mobile'] },
];

// ── Publication topics ─────────────────────────────────────────────────────
const PUB_TOPICS = [
  { icon: Brain, label: 'AI & Machine Learning', items: ['LLM Architecture', 'Vector Search', 'RAG Systems', 'AI Agents', 'Neural Networks', 'MIT AI LLM (560B)'] },
  { icon: HeartPulse, label: 'Medical AI & Digital Health', items: ['Stroke Diagnosis', 'Diabetes AI', "Parkinson's Disease", 'CAR-T Therapy', 'Implantology AI', 'Biomarker Analytics (USI/RAC)'] },
  { icon: Zap, label: 'Mathematics & Physics', items: ['Navier-Stokes (TOZ/TROK)', 'Euler Equations', 'Riemann Hypothesis', 'Pareto Systems', 'Adaptive Constants (TRAC)', 'Mathematical Optimisation'] },
  { icon: Database, label: 'Signal Processing & Communications', items: ['Telemetry', 'Radiometry', 'Long Wave Communications', 'Remote Sensing', 'Data Pipelines', 'Real-time Systems'] },
  { icon: Landmark, label: 'FinTech & Blockchain', items: ['TFI Token (Ethereum)', 'Smart Contracts', 'NFT Campaigns', 'FinTech Leasing (Winnex)', 'Crypto Integration', 'Digital Banking'] },
  { icon: Code2, label: 'Software Architecture & Mobile', items: ['Mobile App Architecture', 'Cloud Native Microservices', 'Multi-tenant SaaS', 'React Native iOS/Android', 'GraphQL & REST APIs', 'CI/CD & DevOps'] },
  { icon: Shield, label: 'Cybersecurity & Government Tech', items: ['Cybersecurity Protocols', 'NATO Security Infrastructure', 'BAMF Security Systems', 'Digital Government', 'E-Government AI', 'Tax Processing Automation'] },
  { icon: Cpu, label: 'Robotics & Operating Systems', items: ['S Arhont 1 OS', 'TROK OS', 'AI-Native Kernel', 'Autonomous Scheduling', 'Robotics Frameworks', 'Intelligent System Agents'] },
];

function StatusBadge({ status }: { status: string }) {
  const isWarning = /not|preliminary|requires/i.test(status);
  const isExp = /experimental|proposed|hypothesis/i.test(status);
  const cls = isWarning
    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
    : isExp
    ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
    : 'bg-slate-700/50 text-slate-400 border-slate-600/30';
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${cls}`}>{status}</span>;
}

function PaperCard({ item, accent }: { item: typeof RESEARCH_PAPERS[0] & { link?: string; note?: string }; accent: string }) {
  return (
    <article className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
      <div className="flex flex-wrap items-start gap-2 mb-3">
        <StatusBadge status={item.status} />
      </div>
      <h3 className="text-lg font-bold text-white mb-1 leading-snug">{item.title}</h3>
      <p className="text-slate-500 text-sm italic mb-3">{item.subtitle}</p>
      <p className="text-slate-300 text-sm leading-relaxed mb-3">{item.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {item.keywords.map(k => <span key={k} className="px-2 py-0.5 rounded bg-slate-800 text-slate-500 text-xs">{k}</span>)}
      </div>
      {item.note && (
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl px-4 py-2.5 mb-3">
          <p className="text-amber-300/80 text-xs leading-relaxed"><strong className="text-amber-300">Note:</strong> {item.note}</p>
        </div>
      )}
      {'link' in item && item.link && (
        <a href={item.link} className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
          Read publication <ChevronRight size={14} />
        </a>
      )}
    </article>
  );
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-950">

      {/* ── Hero / Author Profile ─────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-slate-950 to-cyan-950/30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
            <FileText size={14} /> Research, Books &amp; Scientific Publications
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Research and Scientific Work<br className="hidden md:block" /> by Dimitar Totev
          </h1>

          {/* Author card */}
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 mb-8 max-w-3xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">D</div>
              <div>
                <h2 className="text-white font-bold text-lg">Dimitar Konstantinov Totev</h2>
                <p className="text-slate-400 text-sm">Senior Full Stack Engineer · AI Researcher · Software Architect · Technology Entrepreneur</p>
                <p className="text-slate-500 text-xs mt-0.5">Founder &amp; CEO — Mobile Intelligence Technologies 1985 Ltd (MIT AI 1985) · Mannheim, Germany</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Senior Full Stack Engineer with 18+ years of enterprise development experience and 8+ years of AI/LLM specialisation.
              Author of <strong className="text-white">3 books</strong> and <strong className="text-white">60+ scientific publications</strong> spanning AI, mathematical modelling, medical diagnostics, blockchain, robotics and signal processing.
              Creator of 30+ production-ready applications with 100,000+ monthly users and lead developer of the{' '}
              <strong className="text-white">MIT AI LLM</strong> — a 560 billion parameter model with 16-bit quantisation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { n: '18+', l: 'Years experience' },
                { n: '3', l: 'Books authored' },
                { n: '60+', l: 'Publications' },
                { n: '560B', l: 'LLM parameters' },
              ].map(s => (
                <div key={s.l} className="bg-slate-800/60 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{s.n}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.linkedin.com/in/dimitar-totev" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30 transition-colors text-xs font-medium">
                <Linkedin size={13} /> LinkedIn
              </a>
              <a href="https://github.com/mitai" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors text-xs font-medium">
                <Github size={13} /> GitHub
              </a>
              <a href="mailto:contact@mitai.de"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors text-xs font-medium">
                <ExternalLink size={13} /> contact@mitai.de
              </a>
            </div>
          </div>

          <p className="text-slate-500 text-sm max-w-3xl">
            Each publication should be evaluated according to its methodology, documentation, source data and independent validation.
            The publications include theoretical research, conceptual frameworks, software experiments and applied projects.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* ── Books ──────────────────────────────────────────────────── */}
        <section id="books">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <BookMarked size={17} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Books</h2>
              <p className="text-slate-500 text-sm">3 authored books on AI, LLMs and robotics</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {BOOKS.map(book => (
              <article key={book.id} className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-amber-500/20 rounded-2xl p-6 flex flex-col hover:border-amber-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center mb-4">
                  <BookOpen size={18} className="text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-1 leading-snug">{book.title}</h3>
                  <p className="text-amber-400/80 text-xs font-medium mb-3">{book.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{book.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {book.keywords.slice(0, 4).map(k => (
                    <span key={k} className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400/70 border border-amber-500/20 text-xs">{k}</span>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
                  <User size={12} className="text-slate-600" />
                  <span className="text-slate-600 text-xs">Dimitar Konstantinov Totev · {book.publisher}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Research papers ────────────────────────────────────────── */}
        <section id="research-papers">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <BookOpen size={17} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Research Papers</h2>
              <p className="text-slate-500 text-sm">Theoretical &amp; mathematical investigations</p>
            </div>
          </div>
          <div className="space-y-5">
            {RESEARCH_PAPERS.map(item => (
              <PaperCard key={item.id} item={item} accent="violet" />
            ))}
          </div>
        </section>

        {/* ── Technical publications ─────────────────────────────────── */}
        <section id="technical-publications">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <FlaskConical size={17} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Technical Publications</h2>
              <p className="text-slate-500 text-sm">Architecture, AI systems, blockchain &amp; experiments</p>
            </div>
          </div>
          <div className="space-y-5">
            {TECH_PUBLICATIONS.map(item => (
              <PaperCard key={item.id} item={item} accent="cyan" />
            ))}
          </div>
        </section>

        {/* ── Applied projects ───────────────────────────────────────── */}
        <section id="applied-projects">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Cpu size={17} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Applied Projects</h2>
              <p className="text-slate-500 text-sm">Production platforms, FinTech, AI products</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {APPLIED_PROJECTS.map(p => (
              <div key={p.id} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-white font-bold mb-0.5">{p.title}</h3>
                <p className="text-emerald-400 text-xs font-medium mb-2">{p.subtitle}</p>
                <p className="text-slate-400 text-sm mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map(t => <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-slate-500 text-xs">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Publication topics overview ────────────────────────────── */}
        <section id="publication-topics">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
              <Award size={17} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">60+ Scientific Publications — Topic Areas</h2>
              <p className="text-slate-500 text-sm">Full breadth of research across 8 disciplines</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PUB_TOPICS.map(cat => (
              <div key={cat.label} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <cat.icon size={16} className="text-cyan-400" />
                  <span className="text-white text-sm font-semibold">{cat.label}</span>
                </div>
                <ul className="space-y-1">
                  {cat.items.map(i => (
                    <li key={i} className="text-slate-500 text-xs flex items-start gap-1.5">
                      <span className="text-slate-700 mt-1">·</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Methodology disclaimer ─────────────────────────────────── */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-3">Research Methodology &amp; Disclaimer</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            The work presented spans theoretical research (mathematical investigations requiring independent verification),
            technical publications (software architecture, AI systems and experimental frameworks), and applied projects
            (product development and practical implementations). Each category carries a different validation status.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Dimitar Totev works as an <em>independent technology researcher and senior software engineer</em>. Unless explicitly stated otherwise,
            publications on this site have not been submitted to or accepted by peer-reviewed academic journals.
            Performance claims, accuracy metrics and theoretical results are preliminary and subject to independent verification.
            External collaboration, peer review and independent datasets are actively sought.
          </p>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <div className="text-center pb-4">
          <h3 className="text-white font-bold text-xl mb-3">Academic Collaboration &amp; Peer Review</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
            Independent review, collaboration and critical feedback on any framework are welcome.
            Contact for access to full documentation, data sets or methodology details.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity">
              Contact for Collaboration
            </a>
            <a href="#publications" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors text-sm font-medium">
              All Publications &amp; News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
