import type { Metadata } from 'next';
import { site } from './content';

export const GOOGLE_SITE_VERIFICATION = 'dykqPkb45TM-_sOvKMBpKhMR1dGlTKMbRSzAcbSa9x0';

export function makeMetadata(meta: { title: string; description: string; path: string }): Metadata {
  const url = new URL(meta.path, site.url).toString();

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    verification: { google: GOOGLE_SITE_VERIFICATION },
    keywords: site.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: site.name,
      locale: 'ko_KR',
      type: 'website',
      images: [site.openGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [site.openGraphImage.url],
    },
  };
}
