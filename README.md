# 테오짐 PT 청라점 홈페이지

Next.js App Router, TypeScript, Tailwind CSS 기반 정적 홈페이지입니다. Cloudflare Pages 또는 Vercel 배포가 가능하도록 `next.config.ts`에서 정적 export를 사용합니다.

## 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

빌드 결과물은 `out/` 디렉터리에 생성됩니다.

## 구조

- `app/`: 페이지, 공통 컴포넌트, SEO 메타데이터
- `public/images/`: 교체 가능한 이미지 자산 위치
- `public/sitemap.xml`, `public/robots.txt`: 검색 엔진 크롤링 설정
