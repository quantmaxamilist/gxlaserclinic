import { treatments, areas, site } from '../data/site';
export function GET() {
  const paths = ['/', '/treatments', '/about', '/reviews', '/results', '/book', '/areas', ...treatments.map((t) => `/treatments/${t.slug}`), ...areas.map((a) => `/areas/${a.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${site.url}${p === '/' ? '/' : p}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
