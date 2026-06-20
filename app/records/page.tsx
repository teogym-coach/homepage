import { CTA, FeatureList, PageHero } from '../components'; import { makeMetadata } from '../seo'; import { pageMeta } from '../content';
export const metadata = makeMetadata(pageMeta.records);
export default function Page(){return <main><PageHero eyebrow="운동기록 관리" title="수업이 끝나도 기록은 남습니다" desc="기록은 다음 수업의 출발점입니다. 운동 종목과 수행 강도를 남겨 루틴을 연결하고 변화를 추적합니다."/><FeatureList items={['운동 종목','세트','횟수','중량','RPE','부위별 운동 기록','다음 수업 루틴 연결','변화 추적']}/><CTA/></main>}
