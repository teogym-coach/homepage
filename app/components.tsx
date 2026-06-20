import Link from 'next/link';
import { site } from './content';

const isExternalHref = (href: string) => href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <Link href="/" className="font-bold tracking-tight">TEO<span className="text-orange-500">GYM</span></Link>
      <nav className="hidden gap-5 text-sm text-zinc-300 lg:flex">{site.nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}</nav>
      <Button href={site.links.reservation} dark compact>상담 예약</Button>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="border-t border-white/10 bg-zinc-950 px-4 py-10 text-sm text-zinc-400"><div className="mx-auto max-w-6xl"><p className="font-bold text-white">테오짐 PT 청라점</p><p className="mt-2">인천 서구 청라 지역 예약제 PT샵 · 대표 직접 수업 · 운동기록 관리</p><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2"><TextLink href={site.links.phone}>전화 상담</TextLink><TextLink href={site.links.reservation}>네이버 예약</TextLink><TextLink href={site.links.talk}>네이버 톡톡</TextLink><TextLink href={site.links.blog}>블로그</TextLink><TextLink href={site.links.instagram}>인스타그램</TextLink><TextLink href={site.links.youtube}>유튜브</TextLink><TextLink href={site.links.directions}>오시는 길</TextLink></div><p className="mt-6">© TEO GYM. All rights reserved.</p></div></footer>;
}

export function CTA() { return <section className="mx-auto max-w-6xl px-4 py-12"><div className="rounded-3xl border border-orange-500/30 bg-orange-500 p-7 text-black md:p-10"><p className="text-sm font-bold uppercase tracking-widest">Reservation</p><h2 className="mt-3 text-3xl font-black md:text-5xl">지금 몸 상태와 목표부터 상담해보세요.</h2><p className="mt-4 max-w-2xl font-medium">첫 상담에서 체형, 운동 경험, 체중 변화, 생활패턴을 확인한 뒤 필요한 관리 방향을 안내합니다.</p><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><Button href={site.links.phone} dark>전화 상담</Button><Button href={site.links.reservation} dark>네이버 예약</Button><Button href={site.links.talk}>네이버 톡톡</Button><Button href={site.links.directions}>찾아오시는 길</Button></div></div></section> }

export function Button({ href, children, dark=false, compact=false }: { href: string; children: React.ReactNode; dark?: boolean; compact?: boolean }) {
  const externalProps = isExternalHref(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return <Link href={href} {...externalProps} className={`inline-flex items-center justify-center rounded-full ${compact ? 'px-4 py-2' : 'px-5 py-3'} text-sm font-bold transition ${dark ? 'bg-black text-white hover:bg-zinc-900' : 'border border-black/20 bg-white/80 text-black hover:bg-white'}`}>{children}</Link>
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  const externalProps = isExternalHref(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return <Link href={href} {...externalProps} className="text-zinc-300 underline-offset-4 hover:text-white hover:underline">{children}</Link>;
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) { return <section className="mx-auto max-w-6xl px-4 py-16 md:py-24"><p className="text-sm font-bold text-orange-500">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{desc}</p></section> }

export function Card({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6"><h3 className="text-xl font-bold">{title}</h3><div className="mt-3 leading-7 text-zinc-300">{children}</div></div> }

export function FeatureList({ items }: { items: string[] }) { return <div className="mx-auto grid max-w-6xl gap-3 px-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-zinc-200"><span className="mr-2 text-orange-500">●</span>{item}</div>)}</div> }

export function ImagePlaceholder({ label }: { label: string }) { return <div className="flex min-h-72 items-center justify-center rounded-3xl border border-dashed border-white/20 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-center text-zinc-400"><div><p className="text-sm font-bold text-orange-500">PUBLIC / IMAGES</p><p className="mt-2">{label} 이미지를 나중에 교체할 수 있는 placeholder 영역</p></div></div> }
