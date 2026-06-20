import { CTA, Card, ImagePlaceholder, PageHero } from '../components';
import { makeMetadata } from '../seo'; import { pageMeta } from '../content';
export const metadata = makeMetadata(pageMeta.about);
export default function Page(){return <main><PageHero eyebrow="대표 소개" title="운동보다 먼저, 실패 원인을 찾습니다" desc="김태오 대표가 직접 상담하고 수업합니다. 체형교정, 다이어트, 벌크업 경험을 바탕으로 회원의 몸 상태와 목표에 맞게 운동을 설계합니다."/><section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 md:grid-cols-2"><Card title="기록이 남고 변화가 보이는 PT">보여주기식 PT가 아니라 수업 기록, 체중 변화, 수행 능력 변화를 확인하며 다음 수업을 설계합니다.</Card><ImagePlaceholder label="김태오 대표 프로필"/></section><CTA/></main>}
