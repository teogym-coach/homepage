import { CTA, FeatureList, PageHero } from '../components'; import { makeMetadata } from '../seo'; import { pageMeta } from '../content';
export const metadata = makeMetadata(pageMeta.posture);
export default function Page(){return <main><PageHero eyebrow="청라 체형교정 PT" title="통증 부위만이 아니라 자세, 움직임, 근력 불균형을 함께 확인합니다" desc="오래 앉는 생활, 반복되는 움직임, 운동 습관을 살펴보고 몸 상태에 맞는 운동 방향을 제안합니다."/><FeatureList items={['어깨 불편감 관리','허리 불편감 관리','골반 불균형 확인','무릎 불편감 관리','오래 앉는 직장인 체형관리','움직임과 근력 균형 체크']}/><CTA/></main>}
