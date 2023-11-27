import dynamic from 'next/dynamic';

import AsyncBoundary from '@/components/common/AsyncBoundary';

const MypageTemplate = dynamic(
  () => import('@/components/template/MypageTemplate'),
  { ssr: false },
);

/** 마이 페이지 메인 페이지 */
const MyPage = () => (
  <AsyncBoundary>
    <MypageTemplate />
  </AsyncBoundary>
);

export default MyPage;
