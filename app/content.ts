export const site = {
  name: '테오짐 PT 청라점',
  url: 'https://teogym.pages.dev',
  description: '청라에서 체형교정, 다이어트, 벌크업을 함께 관리하는 PT샵. 대표가 직접 수업하고 운동기록과 체중 변화를 관리합니다.',
  telephone: '0507-1373-7578',
  address: '인천 서구 청라커낼로 280 청라골든프라자 5층 505호',
  region: '인천 청라',
  businessType: 'PT샵 / 퍼스널트레이닝 / 헬스장',
  keywords: ['테오짐 PT 청라점', '청라 PT', '청라 퍼스널트레이닝', '청라 헬스장', '청라 체형교정', '청라 다이어트 PT', '청라 벌크업 PT', '인천 청라 PT'],
  openGraphImage: {
    url: '/images/og-teogym.svg',
    width: 1200,
    height: 630,
    alt: '테오짐 PT 청라점 - 청라 체형교정 다이어트 벌크업 PT',
  },
  nav: [
    ['메인', '/'], ['대표 소개', '/about/'], ['체형교정 PT', '/posture/'], ['다이어트 PT', '/diet/'], ['벌크업 PT', '/bulk-up/'], ['운동기록', '/records/'], ['회원 앱', '/app/'], ['가격', '/pricing/'], ['후기/사례', '/cases/'], ['오시는 길', '/location/'],
  ] as const,
  links: {
    phone: 'tel:050713737578',
    reservation: 'https://m.booking.naver.com/booking/6/bizes/1369304',
    talk: 'https://talk.naver.com/profile/w4nrgr3',
    blog: 'https://m.blog.naver.com/teogym',
    instagram: 'https://www.instagram.com/teogym_pt',
    youtube: 'https://youtube.com/@gymteo',
    directions: 'https://naver.me/GlRZUOv8',
    place: 'https://naver.me/GlRZUOv8',
    contact: 'https://talk.naver.com/profile/w4nrgr3',
  },
};

export const pageMeta = {
  home: {
    title: '테오짐 PT 청라점 | 청라 체형교정 다이어트 벌크업 PT',
    description: site.description,
    path: '/',
  },
  about: {
    title: '대표 소개 | 테오짐 PT 청라점',
    description: '김태오 대표가 직접 상담하고 수업하는 청라 PT샵. 실패 원인을 찾고 기록이 남는 PT를 설계합니다.',
    path: '/about/',
  },
  posture: {
    title: '청라 체형교정 PT | 테오짐 PT 청라점',
    description: '청라 체형교정 PT. 자세, 움직임, 근력 불균형을 함께 확인하고 몸 상태에 맞는 운동을 지도합니다.',
    path: '/posture/',
  },
  diet: {
    title: '청라 다이어트 PT | 테오짐 PT 청라점',
    description: '청라 다이어트 PT. 운동기록, 체중 변화, 생활패턴을 함께 관리하며 지속 가능한 변화를 돕습니다.',
    path: '/diet/',
  },
  bulk: {
    title: '청라 벌크업 PT | 테오짐 PT 청라점',
    description: '청라 벌크업 PT. 운동기록, 중량 변화, 체형 변화를 바탕으로 마른 체형의 근육 성장을 관리합니다.',
    path: '/bulk-up/',
  },
  records: {
    title: '운동기록 관리 PT | 테오짐 PT 청라점',
    description: '운동 종목, 세트, 횟수, 중량, RPE와 부위별 기록을 남겨 다음 수업 루틴과 변화 추적에 연결합니다.',
    path: '/records/',
  },
  app: {
    title: '회원 전용 앱 | 테오짐 PT 청라점',
    description: '체중 변화, 운동 기록, 건강관리 허브, 루틴 추천, 수업 히스토리를 관리하는 회원 전용 시스템입니다.',
    path: '/app/',
  },
  pricing: {
    title: '가격 안내 | 테오짐 PT 청라점',
    description: '1:1 PT 회당 4만원 기준. 체험 수업, 첫 등록, 2:1 수업은 몸 상태와 목표 상담 후 안내드립니다.',
    path: '/pricing/',
  },
  cases: {
    title: '후기와 사례 | 테오짐 PT 청라점',
    description: '다이어트, 체형교정, 벌크업, 운동기록 관리, 회원 전용 앱 활용 사례를 블로그에서 확인하세요.',
    path: '/cases/',
  },
  location: {
    title: '오시는 길 | 테오짐 PT 청라점',
    description: '인천 서구 청라 지역 예약제 PT샵 테오짐 PT 청라점. 네이버 플레이스, 예약, 블로그 링크를 확인하세요.',
    path: '/location/',
  },
};
