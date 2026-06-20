import { Button, CTA, Card, PageHero } from '../components'; import { makeMetadata } from '../seo'; import { pageMeta, site } from '../content';
export const metadata = makeMetadata(pageMeta.cases);
const cats=['다이어트 변화 사례','체형교정 사례','벌크업 사례','운동기록 관리 사례','회원 전용 앱 활용 사례'];
export default function Page(){return <main><PageHero eyebrow="후기/사례" title="공개 가능한 사례는 블로그 링크로 연결합니다" desc="처음에는 허위 후기를 만들지 않고 카테고리별 블로그 연결 방식으로 운영합니다."/><section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-2">{cats.map(c=><Card key={c} title={c}><p>블로그에 게시된 실제 공개 콘텐츠로 연결될 예정입니다.</p><div className="mt-4"><Button href={site.links.blog}>블로그 후기 보기</Button></div></Card>)}</section><CTA/></main>}
