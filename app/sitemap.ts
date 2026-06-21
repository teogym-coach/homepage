export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { pageMeta, site } from './content';

const lastModified = new Date('2026-06-21');

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pageMeta).map(({ path }) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
