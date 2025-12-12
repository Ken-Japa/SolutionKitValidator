import fs from 'fs';
import path from 'path';
// Imports apontam para a raiz onde os arquivos data.ts estão
import { ideas as ideasPt } from '../data';
import { ideasEn } from '../data-en';
import { ideasEs } from '../data-es';

const BASE_URL = 'https://solutionkit.com.br';
// Garante que o caminho é resolvido a partir da raiz do projeto
const OUTPUT_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');

/**
 * Helper to generate XML URL entry
 */
const generateUrlEntry = (pathStr: string, priority: string = '0.8') => {
  return `
  <url>
    <loc>${BASE_URL}${pathStr}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

const generateSitemap = () => {
  console.log('🗺️  Generating Sitemap...');

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 1. Static Pages
  xml += generateUrlEntry('', '1.0'); // Home
  xml += generateUrlEntry('/sitemap', '0.5'); // HTML Sitemap

  // 2. Idea Pages (Portuguese - Default)
  ideasPt.forEach(idea => {
    xml += generateUrlEntry(`/ideia/${idea.slug}`, '0.9');
  });

  // 3. Idea Pages (English) - Use specific English slugs
  ideasEn.forEach(idea => {
    xml += generateUrlEntry(`/en/${idea.slug}`, '0.9');
  });

  // 4. Idea Pages (Spanish) - Use specific Spanish slugs
  ideasEs.forEach(idea => {
    xml += generateUrlEntry(`/es/${idea.slug}`, '0.9');
  });

  xml += `
</urlset>`;

  // Ensure public directory exists
  const publicDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, xml.trim());
  console.log(`✅ Sitemap generated at: ${OUTPUT_PATH}`);
  console.log(`   Total URLs: ${2 + (ideasPt.length * 3)}`);
};

generateSitemap();