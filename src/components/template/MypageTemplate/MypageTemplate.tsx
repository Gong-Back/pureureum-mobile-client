import Image from 'next/image';
import { useRouter } from 'next/router';

import LeftIconSvg from '@/assets/icons/leftIcon.svg';
import Text from '@/components/common/Text';
import {
  MypageNavInfo as info,
  MyPAGE_NAV_ITEM_NAME as navItem,
} from '@/constants/navigation';

import * as styles from './MypageTemplate.style';

const MypageTemplate = () => {
  const router = useRouter();
  const title = '이공백';
  return (
    <styles.Wrapper>
      <styles.ProfileWrap>
        <styles.ProfileImg>
          <Image src="/sample.png" layout="fill" />
        </styles.ProfileImg>
        <styles.Title>
          <Text fontStyleName="subtitle2R">
            문화 시민, <span>{title}</span>
          </Text>
          <Text fontStyleName="body2R">성동구 피우다와 함께한지 42일째</Text>
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
