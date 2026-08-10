import { useState } from 'react';

export type ProductCubeState = 'default' | 'hover' | 'active';

type Props = {
  title: string;
  short: string;
  tagline: string;
  imageUrl?: string;
  state?: ProductCubeState;
  onActivate?: () => void;
  url?: string;
  imageSize?: 'cover' | 'contain';
  imageScale?: number;
};

export function ProductCube({
  title,
  short,
  tagline,
  imageUrl,
  state = 'default',
  onActivate,
  url,
  imageSize = 'cover',
  imageScale = 1.3
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (onActivate) {
      onActivate();
    }
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Info for: ${title}`);
  };

  return (
    <div
      className={`product-cube product-cube--${state} ${isHovered ? 'product-cube--hovered' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-cube__glow" />
      
      <div className="product-cube__inner">
        {imageUrl ? (
          /* Image only mode - full contain to show entire image */
          <div 
            className="product-cube__image-full"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '22px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              backgroundColor: '#000000'
            }}
          >
            <img 
              src={imageUrl} 
              alt={title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: imageSize || 'cover',
                objectPosition: 'center',
                transform: imageSize === 'contain' ? `scale(${imageScale})` : 'none'
              }}
            />
          </div>
        ) : (
          /* Text mode - normal display */
          <>
            <div className="product-cube__badge">{short}</div>
            
            <h3 className="product-cube__title">{title}</h3>
            
            <p className="product-cube__tagline">{tagline}</p>

            <div className="product-cube__kpi">
              <span className="product-cube__kpi-label">LIVE KPIs</span>
              <div className="product-cube__bars">
                <div className="product-cube__bar product-cube__bar--primary" />
                <div className="product-cube__bar product-cube__bar--secondary" />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="product-cube__border" />
      
      {/* Info buttons */}
      <div
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 10
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert(`Details for: ${title}`);
          }}
          className="product-cube__details-btn"
          type="button"
          style={{
            padding: '8px 24px',
            background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(138, 0, 255, 0.2))',
            border: '1px solid rgba(255, 0, 255, 0.4)',
            borderRadius: '12px',
            color: '#ff00ff',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(138, 0, 255, 0.3))';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(138, 0, 255, 0.2))';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.3)';
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}