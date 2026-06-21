import { pageMeta, site } from '../content';

export const dynamic = 'force-static';

const LAST_MODIFIED = '2026-06-21';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function makeSitemapXml(): string {
  const urls = Object.values(pageMeta)
    .map((meta) => {
      const loc = new URL(meta.path, site.url).toString();
      const changefreq = meta.path === '/' ? 'weekly' : 'monthly';
      const priority = meta.path === '/' ? '1.0' : '0.8';

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function GET(): Response {
  return new Response(makeSitemapXml(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
      'X-Robots-Tag': 'index, follow',
    },
  });
}
