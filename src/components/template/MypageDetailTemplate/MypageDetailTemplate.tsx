import { useRouter } from 'next/router';

import LeftIconSvg from '@/assets/icons/leftIcon.svg';
import { MYPAGE_NAV_ITEM_NAME, MYPAGE_NAV_TITLE } from '@/constants/navigation';

import * as styles from '../MypageTemplate/MypageTemplate.style';

interface MypageDetailTemplateProps {
  menu: MYPAGE_NAV_ITEM_NAME;
}

// TODO MypageContent vs MyPageDetail..
const MypageDetailTemplate = ({ menu }: MypageDetailTemplateProps) => {
  const router = useRouter();

  return (
    <styles.Wrapper>
      <LeftIconSvg width="28" height="28" onClick={() => router.back()} />
      {MYPAGE_NAV_TITLE[menu]}
      {/* mypage content */}
    </styles.Wrapper>
  );
};

export default MypageDetailTemplate;
