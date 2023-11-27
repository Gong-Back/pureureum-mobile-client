import { useRouter } from 'next/router';

import LeftIconSvg from '@/assets/icons/leftIcon.svg';
import Text from '@/components/common/Text';
import ActivitySection from '@/components/domain/MyPage/ActivitySection';
import BadgeSection from '@/components/domain/MyPage/BadgeSection';
import CitizenCard from '@/components/domain/MyPage/CitizenCard';
import MyProfileSection from '@/components/domain/MyPage/MyProfileSection';
import {
  MypageNavInfo,
  MyPAGE_NAV_ITEM_NAME as NavType,
} from '@/constants/navigation';

import * as styles from './MypageDetailTemplate.style';

const MypageDetailTemplate = () => {
  const router = useRouter();
    const menu = router.query.menu as NavType;

  const count = 4;

  const renderContent = () => {
    switch (menu) {
      case 'card':
        return <CitizenCard />;
      case 'badge':
        return <BadgeSection count={count} />;
      case 'activity':
        return <ActivitySection />;
      case 'myinfo':
        return <MyProfileSection />;
      default:
        return <>NOT FOUND</>;
    }
  };

  return (
    <styles.Wrapper>
      <styles.Header>
        <LeftIconSvg width="28" height="28" onClick={() => router.back()} />
        <Text fontStyleName="subtitle2B">{MypageNavInfo[menu].text}</Text>
      </styles.Header>
      <styles.ContentWrap className={menu}>
        {renderContent()}
      </styles.ContentWrap>
    </styles.Wrapper>
  );
};

export default MypageDetailTemplate;
