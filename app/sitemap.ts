export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { pageMeta, site } from './content';

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pageMeta).map((meta) => ({
    url: new URL(meta.path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: meta.path === '/' ? 'weekly' : 'monthly',
    priority: meta.path === '/' ? 1 : 0.8,
  }));
}
