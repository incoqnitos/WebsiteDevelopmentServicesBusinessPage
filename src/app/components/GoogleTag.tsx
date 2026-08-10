import { useEffect } from 'react';

// Replace these with your actual Google IDs:
// GA4 Measurement ID format: G-XXXXXXXXXX
// Google Ads ID format: AW-XXXXXXXXXX
const GA4_ID = 'G-XXXXXXXXXX';
const GADS_ID = 'AW-XXXXXXXXXX';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function injectGtag(id: string) {
  if (document.querySelector(`script[data-gtag="${id}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.setAttribute('data-gtag', id);
  document.head.appendChild(script);
}

export function GoogleTag() {
  useEffect(() => {
    // Skip if placeholder IDs (not configured yet)
    if (GA4_ID === 'G-XXXXXXXXXX' && GADS_ID === 'AW-XXXXXXXXXX') return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, { anonymize_ip: true, cookie_flags: 'SameSite=None;Secure' });
    window.gtag('config', GADS_ID);

    injectGtag(GA4_ID);
  }, []);

  return null;
}

// Call this on conversion events (e.g. form submit, booking)
export function trackConversion(conversionLabel: string, value?: number) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: `${GADS_ID}/${conversionLabel}`,
    value: value ?? 1.0,
    currency: 'EUR',
  });
}

// Track page views on hash navigation
export function trackPageView(page: string) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: `/#${page}`,
  });
}
