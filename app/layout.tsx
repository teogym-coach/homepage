import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header } from './components';
import { pageMeta, site } from './content';
import { makeMetadata } from './seo';

export const metadata: Metadata = makeMetadata(pageMeta.home);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: site.name, description: site.description, areaServed: '인천 서구 청라', address: { '@type': 'PostalAddress', addressLocality: '인천 서구', addressRegion: '인천광역시', addressCountry: 'KR' }, priceRange: '1:1 PT 회당 4만원 기준', url: site.url, sameAs: [site.links.place, site.links.blog] };
  return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Header />{children}<Footer /></body></html>;
}
