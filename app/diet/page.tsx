import { CTA, FeatureList, PageHero } from '../components'; import { makeMetadata } from '../seo'; import { pageMeta } from '../content';
export const metadata = makeMetadata(pageMeta.diet);
export default function Page(){return <main><PageHero eyebrow="청라 다이어트 PT" title="식단을 무조건 줄이는 방식이 아니라 운동기록, 체중 변화, 생활패턴을 함께 관리합니다" desc="지속 가능한 체중 관리를 위해 수업 기록과 생활 루틴을 함께 확인합니다."/><FeatureList items={['인바디 변화 확인','공복체중 기록','식단 피드백','근손실 최소화 방향','요요 방지 습관 관리','생활패턴 점검']}/><CTA/></main>}
