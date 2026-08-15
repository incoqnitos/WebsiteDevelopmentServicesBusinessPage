import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const BASE_URL = 'https://mitai.de';

const PAGES = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '#services', priority: '0.9', changefreq: 'monthly' },
  { path: '#about', priority: '0.8', changefreq: 'monthly' },
  { path: '#contact', priority: '0.9', changefreq: 'monthly' },
  { path: '#portfolio', priority: '0.8', changefreq: 'weekly' },
  { path: '#software', priority: '0.8', changefreq: 'monthly' },
  { path: '#hardware', priority: '0.7', changefreq: 'monthly' },
  { path: '#robotics', priority: '0.7', changefreq: 'monthly' },
  { path: '#pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '#web-development', priority: '0.7', changefreq: 'monthly' },
  { path: '#mobile-development', priority: '0.7', changefreq: 'monthly' },
  { path: '#uiux-design', priority: '0.7', changefreq: 'monthly' },
  { path: '#ecommerce', priority: '0.7', changefreq: 'monthly' },
  { path: '#design-advertising', priority: '0.7', changefreq: 'monthly' },
  { path: '#toz-navier-stokes', priority: '0.6', changefreq: 'yearly' },
  { path: '#publications', priority: '0.6', changefreq: 'weekly' },
  { path: '#client-portal', priority: '0.5', changefreq: 'monthly' },
  { path: '#investors', priority: '0.6', changefreq: 'monthly' },
  { path: 'dimitar-totev.html', priority: '0.9', changefreq: 'monthly' },
  { path: 'mit-ai-company.html', priority: '0.9', changefreq: 'monthly' },
];

function seoPlugin(): Plugin {
  return {
    name: 'vite-plugin-seo',
    generateBundle() {
      const today = new Date().toISOString().split('T')[0];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${PAGES.map(p => `  <url>
    <loc>${BASE_URL}/${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

      const robots = `User-agent: *
Allow: /
Disallow: /#admin
Disallow: /#cart

Sitemap: ${BASE_URL}/sitemap.xml

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1`;

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
    },
  };
}


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    seoPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
