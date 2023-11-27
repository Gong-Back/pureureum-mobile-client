import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import AsyncBoundary from '@/components/common/AsyncBoundary';

const MypageDetailTemplate = dynamic(
  () => import('@/components/template/MypageDetailTemplate'),
  { ssr: false },
);

/** 마이 페이지 세부 컨텐츠 페이지 (문화시민증, 뱃지목록, 활동목록, 내정보관리) */
const MyPageDetail: NextPage = () => (
  <AsyncBoundary>
    <MypageDetailTemplate />
  </AsyncBoundary>
);

export default MyPageDetail;
