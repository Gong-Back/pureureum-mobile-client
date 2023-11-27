import { useRouter } from 'next/router';

import LeftIconSvg from '@/assets/icons/leftIcon.svg';
import Text from '@/components/common/Text';
import {
  MypageNavInfo as info,
  MyPAGE_NAV_ITEM_NAME as navItem,
} from '@/constants/navigation';
import { useGetUserProfile } from '@/query-hooks/user';

import * as styles from './MypageTemplate.style';

// Next/Image 사용시 프로필 이미지 안보이는 이슈
const MypageTemplate = () => {
  const router = useRouter();
  const { data: userInfo } = useGetUserProfile();
  const { nickname, email, profileUrl } = userInfo;

  return (
    <styles.Wrapper>
      <styles.ProfileWrap>
        <styles.ProfileImg>
          {/* <img src={profileUrl} alt="s" /> */}
        </styles.ProfileImg>
        <styles.Title>
          <Text fontStyleName="subtitle2R">
            문화 시민, <span>{nickname}</span>
          </Text>
          <Text fontStyleName="body2R">{email}</Text>
        </styles.Title>
      </styles.ProfileWrap>
      <styles.MenuListWrap>
        {(Object.keys(info) as navItem[]).map((menu) => (
          <styles.Menu key={menu} onClick={() => router.push(info[menu].path)}>
            <Text fontStyleName="subtitle2B">{info[menu].text}</Text>
            <LeftIconSvg width="28" height="28" />
          </styles.Menu>
        ))}
      </styles.MenuListWrap>
    </styles.Wrapper>
  );
};

export default MypageTemplate;
