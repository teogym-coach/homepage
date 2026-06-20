import { CTA, Card, PageHero } from '../components'; import { makeMetadata } from '../seo'; import { pageMeta } from '../content';
export const metadata = makeMetadata(pageMeta.pricing);
export default function Page(){return <main><PageHero eyebrow="가격 안내" title="필요한 수업 방향은 상담 후 안내드립니다" desc="너무 빠른 결정보다 몸 상태와 목표를 먼저 확인합니다."/><section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-3"><Card title="1:1 PT">회당 4만원 기준으로 안내드립니다.</Card><Card title="체험 · 첫 등록">첫 등록과 체험 수업은 상담 후 안내드립니다.</Card><Card title="2:1 수업">목표, 일정, 구성에 따라 상담 후 안내드립니다.</Card></section><CTA/></main>}
