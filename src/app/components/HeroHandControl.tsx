import { useState } from 'react';
import { ProductCube, ProductCubeState } from './ProductCube';
import { ChevronLeft, ChevronRight, Play, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import arhont1Image from 'figma:asset/28f54b06506be580898fca4b5de325d252583b0e.png';
import transcendifyImage from 'figma:asset/a7ac7db09078eb533ca0a65c99f22256dbbb568b.png';
import chatMitaiImage from 'figma:asset/76401df2c3113e8e08bcd0cb17c6784f597154d7.png';
import digitalGovImage from 'figma:asset/eab55269bfd25f6fd0da3c2a1e1b7264e1145efa.png';
import winnexImage from 'figma:asset/55febe0dd6ccf815747793920c8720c5e83b2d73.png';
import digitalDoctorImage from 'figma:asset/e19695745e16e158f39f7ddd84813a479c69e1f1.png';
import tracImage from 'figma:asset/f0d1bc5e842680a2ad6bf86aa3efd9ad6a4972a0.png';
import '../../styles/hero-responsive.css';

type Product = {
  id: string;
  name: string;
  short: string;
  tagline: string;
  imageUrl?: string;
  url?: string;
  hasDemo?: boolean; // Whether the product has an active demo
};

const PRODUCTS: Product[] = [
  {
    id: 'trac',
    name: 'TRAC Analytics',
    short: 'TRAC',
    tagline: 'Theory Of Relatively Optimizing Adaptive Constants',
    url: 'https://chatmitai.com',
    imageUrl: tracImage,
    hasDemo: true, // TRAC has demo
  },
  {
    id: 'digitaldoctor',
    name: 'Digital Doctor',
    short: 'DD',
    tagline: '24/7 AI-driven medical triage & diagnostics.',
    imageUrl: digitalDoctorImage,
    url: 'https://brisk-parrot-60119939.figma.site',
    hasDemo: true, // NOW LIVE with demo
  },
  {
    id: 'sarhont',
    name: 'S Arhont 1 OS',
    short: 'S-AOS',
    tagline: 'The first only AI Operating System',
    url: 'https://trac-insight-copy-52231bf0.base44.app',
    imageUrl: arhont1Image,
    hasDemo: true, // ARHONT has demo
  },
  {
    id: 'transcendify',
    name: 'Transcendify',
    short: 'TR',
    tagline: 'Autonomous crypto & DeFi intelligence.',
    imageUrl: transcendifyImage,
    url: 'https://transcendify-ai-trading-cc44136a.base44.app',
    hasDemo: true,
  },
  {
    id: 'winnex',
    name: 'WINNEX',
    short: 'WNX',
    tagline: 'NFT-backed real asset investments: cars, homes, solar.',
    imageUrl: winnexImage,
    hasDemo: false, // Coming soon
  },
  {
    id: 'digitalgov',
    name: 'Digital Government',
    short: 'DG',
    tagline: 'National e-Governance & Elections System',
    imageUrl: digitalGovImage,
    hasDemo: false, // Coming soon
  },
  {
    id: 'chatmitai',
    name: 'ChatMITAI Messenger',
    short: 'CM',
    tagline: 'AI-powered intelligent messaging platform',
    imageUrl: chatMitaiImage,
    hasDemo: false, // Coming soon
  },
];

export function HeroHandControl() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; // Show 4 cards at a time
  const centralIndex = 1; // Second card is central (0, 1, 2, 3)

  const goToNext = () => {
    setStartIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const goToPrev = () => {
    setStartIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  // Get visible products
  const visibleProducts = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % PRODUCTS.length;
    visibleProducts.push(PRODUCTS[index]);
  }

  const handleCardClick = (product: Product) => {
    // Card click disabled, buttons handle navigation now
  };

  const handleDemoClick = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.hasDemo && product.url) {
      window.open(product.url, '_blank');
    }
  };

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('🚧 Buy in Cloud functionality is coming soon!\n\nWe are currently working on the cloud purchasing system. For now, please use the Demo links to explore our products.');
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        padding: '60px 20px 120px',
        background: 'linear-gradient(to bottom, rgba(2, 6, 23, 1) 0%, rgba(2, 6, 23, 0.95) 100%)',
      }}
    >
      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginTop: '650px',
          }}
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              lineHeight: 1.2,
              maxWidth: '1200px',
              padding: '0 20px',
              textAlign: 'center',
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {/* Crafting Future */}
            <span
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 700,
                fontFamily: "'Michroma', sans-serif",
                background: 'linear-gradient(135deg, #00ffff 0%, #0088ff 30%, #ff00ff 60%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '6px',
                filter: 'drop-shadow(0 0 60px rgba(0, 255, 255, 0.7)) drop-shadow(0 0 30px rgba(255, 0, 255, 0.5)) drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
              }}
            >
              Crafting Future
            </span>
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '300px' }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.8), rgba(0, 255, 255, 0.8), transparent)',
              borderRadius: '999px',
              marginTop: '20px',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            }}
          />
        </motion.div>

        {/* Cards Grid Container */}
        <div style={{ position: 'relative', width: '100%', marginTop: '80px' }}>
          {/* Cards Grid */}
          <div
            className="hero-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '30px',
              width: '100%',
            }}
          >
            {visibleProducts.map((product, index) => {
              const isCentral = index === centralIndex;
              
              return (
                <div key={`${product.id}-${startIndex}-${index}`} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10 
                    }}
                    style={{
                      background: isCentral
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(147, 51, 234, 0.25))'
                        : 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
                      borderRadius: '20px',
                      padding: '0',
                      border: isCentral 
                        ? '3px solid rgba(6, 182, 212, 0.7)' 
                        : '2px solid rgba(6, 182, 212, 0.3)',
                      backdropFilter: 'blur(10px)',
                      cursor: 'pointer',
                      boxShadow: isCentral 
                        ? '0 0 60px rgba(6, 182, 212, 0.5)' 
                        : '0 4px 20px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                    }}
                    onClick={() => handleCardClick(product)}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '400px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </motion.div>

                  {/* Action Buttons Below Card */}
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    {/* Demo Button */}
                    <button
                      onClick={(e) => handleDemoClick(product, e)}
                      disabled={!product.hasDemo}
                      style={{
                        flex: 1,
                        padding: '10px 16px',
                        background: product.hasDemo 
                          ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.9))'
                          : 'rgba(71, 85, 105, 0.5)',
                        border: product.hasDemo 
                          ? '2px solid rgba(6, 182, 212, 0.7)'
                          : '2px solid rgba(100, 116, 139, 0.5)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: product.hasDemo ? 'pointer' : 'not-allowed',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                      onMouseEnter={(e) => {
                        if (product.hasDemo) {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6, 182, 212, 1), rgba(59, 130, 246, 1))';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(6, 182, 212, 0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (product.hasDemo) {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.9))';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <Play size={16} />
                      {product.hasDemo ? 'Show Demo' : 'Coming Soon'}
                    </button>

                    {/* Buy in Cloud Button - Only show for products with demo */}
                    {product.hasDemo && (
                      <button
                        onClick={handleBuyClick}
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(236, 72, 153, 0.9))',
                          border: '2px solid rgba(147, 51, 234, 0.7)',
                          borderRadius: '12px',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 1), rgba(236, 72, 153, 1))';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(147, 51, 234, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(236, 72, 153, 0.9))';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <ShoppingCart size={16} />
                        Buy in Cloud
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Navigation Buttons Container */}
          <div className="hero-mobile-nav" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
            <button
              onClick={goToPrev}
              className="hero-nav-btn hero-nav-prev"
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 30,
                background: 'rgba(6, 182, 212, 0.2)',
                border: '2px solid rgb(6, 182, 212)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: 'rgb(6, 182, 212)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.4)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="hero-nav-btn hero-nav-next"
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 30,
                background: 'rgba(6, 182, 212, 0.2)',
                border: '2px solid rgb(6, 182, 212)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: 'rgb(6, 182, 212)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.4)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          {PRODUCTS.map((_, index) => (
            <div
              key={index}
              onClick={() => setStartIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: index === startIndex 
                  ? 'rgb(6, 182, 212)' 
                  : 'rgba(148, 163, 184, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: index === startIndex 
                  ? '2px solid rgb(6, 182, 212)' 
                  : '2px solid transparent',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}