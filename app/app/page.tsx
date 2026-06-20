import { CTA, FeatureList, ImagePlaceholder, PageHero } from '../components'; import { makeMetadata } from '../seo'; import { pageMeta } from '../content';
export const metadata = makeMetadata(pageMeta.app);
export default function Page(){return <main><PageHero eyebrow="회원 전용 앱" title="회원 전용 관리 시스템" desc="PT를 받을 때만 관리받는 것이 아니라 운동 습관이 이어지도록 관리합니다."/><section className="mx-auto max-w-6xl px-4 pb-10"><ImagePlaceholder label="회원 전용 앱 화면"/></section><FeatureList items={['체중 변화','운동 기록','건강관리 허브','루틴 추천','오늘의 컨디셔닝','수업 히스토리']}/><CTA/></main>}
