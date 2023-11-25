import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import MypageDetailTemplate from '@/components/template/MypageDetailTemplate';
import { MyPAGE_NAV_ITEM_NAME as NavType } from '@/constants/navigation';

/** 마이 페이지 세부 컨텐츠 페이지 (문화시민증, 뱃지목록, 활동목록, 내정보관리) */
const MyPageDetail: NextPage = () => {
  const router = useRouter();
  const menu = router.query.menu as NavType;

  return <MypageDetailTemplate menu={menu} />;
};

export default MyPageDetail;
