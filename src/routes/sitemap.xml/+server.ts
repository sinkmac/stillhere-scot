import { primaryNavigationLinks, footerLinks, articles, guidePages } from '$lib/site-content';

const SITE_URL = 'https://stillhere.scot';

const staticRoutes = ['/', '/family-chain', '/interest', '/recording-your-own-story'];

const routes = Array.from(
  new Set([
    ...staticRoutes,
    ...primaryNavigationLinks.map((link) => link.href),
    ...footerLinks.map((link) => link.href),
    ...Object.values(articles).map((article) => `/${article.slug}`),
    ...Object.values(guidePages).map((guide) => `/${guide.slug}`)
  ])
).sort((a, b) => a.localeCompare(b));

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === '/' ? '' : route}</loc>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=UTF-8',
      'cache-control': 'public, max-age=3600'
    }
  });
}
