import { CTA, FeatureList, PageHero } from '../components'; import { makeMetadata } from '../seo'; import { pageMeta } from '../content';
export const metadata = makeMetadata(pageMeta.bulk);
export default function Page(){return <main><PageHero eyebrow="청라 벌크업 PT" title="무작정 많이 먹고 무겁게 드는 방식이 아니라 기록으로 성장 방향을 관리합니다" desc="운동기록, 중량 변화, 체형 변화를 함께 확인하며 마른 몸을 탄탄하게 만드는 과정을 설계합니다."/><FeatureList items={['마른 체형 벌크업','근육량 증가 목표 관리','운동 자세 교정','점진적 과부하','부위별 운동기록','식사량과 생활패턴 관리']}/><CTA/></main>}
