import { Button, CTA, Card, ImagePlaceholder } from './components';
import { site } from './content';

export default function Home() {
  return <main>
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_.9fr] md:py-24">
      <div><p className="text-sm font-bold text-orange-500">청라 PT · 체형교정 · 다이어트 · 벌크업</p><h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">청라에서 체형교정, 다이어트, 벌크업을 함께 관리하는 PT샵</h1><div className="mt-6 space-y-2 text-xl font-semibold text-zinc-200"><p>불편한 몸은 편하게</p><p>흐트러진 몸은 균형 있게</p><p>빠지지 않는 살은 가볍게</p><p>마른 몸은 탄탄하게</p></div><p className="mt-6 max-w-2xl text-zinc-300">대표가 직접 수업하고 운동기록과 체중 변화를 끝까지 관리합니다.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={site.links.reservation} dark>무료 체험 상담 예약</Button><Button href="/records/">운동기록 관리 보기</Button></div></div>
      <ImagePlaceholder label="대표 수업 또는 공간" />
    </section>
    <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-3"><Card title="체형교정 PT">불편한 몸을 편하게, 흐트러진 움직임을 균형 있게 관리합니다.</Card><Card title="다이어트 PT">무작정 굶지 않고, 체중과 체형 변화를 함께 관리합니다.</Card><Card title="벌크업 PT">마른 몸을 탄탄하게, 운동기록 기반으로 근육 성장을 관리합니다.</Card></section>
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-2"><Card title="운동기록 관리">종목, 세트, 횟수, 중량, RPE를 남겨 다음 수업 루틴과 변화 추적에 연결합니다.</Card><Card title="회원 전용 앱">체중 변화, 운동 기록, 건강관리, 루틴 추천, 오늘의 컨디셔닝, 수업 히스토리를 한 곳에서 확인합니다.</Card></section>
    <section className="mx-auto max-w-6xl px-4 py-10"><div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 md:p-8"><h2 className="text-2xl font-black">후기와 사례는 블로그에서 확인하세요</h2><p className="mt-3 text-zinc-300">허위 후기를 만들지 않고, 실제 공개 가능한 사례만 블로그로 연결하는 구조로 준비했습니다.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button href="/cases/">후기/사례 링크</Button><Button href={site.links.blog}>블로그 후기 보기</Button></div></div></section>
    <CTA />
  </main>;
}
