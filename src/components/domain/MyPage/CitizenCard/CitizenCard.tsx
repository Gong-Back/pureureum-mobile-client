import Image from 'next/image';

import dayjs from 'dayjs';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { useGetUserCitizenInfo } from '@/query-hooks/user';

import * as styles from './CitizenCard.style';

const CitizenCard = () => {
  const { data: userInfo } = useGetUserCitizenInfo();
  const { profileUrl, name, nickname, joinDate, attendCount } = userInfo;

  return (
    <styles.Wrapper className="citizen-card">
      <styles.ProfileWrap>
        <styles.ProfileImg>
          <Image src={profileUrl} layout="fill" />
        </styles.ProfileImg>
        <styles.ProfileTextWrap>
          <Text fontStyleName="body2R" color={COLORS.primary.dark}>
            성동구 문화 시민증
          </Text>
          <Text
            fontStyleName="title"
            color={COLORS.grayscale.dark}
          >{`${nickname} (${name})`}</Text>
          <Text
            fontStyleName="body2R"
            color={COLORS.grayscale.gray500}
          >{`가입일: ${dayjs(joinDate).format('YYYY.MM.DD')}`}</Text>
          <Text
            fontStyleName="body2R"
            color={COLORS.grayscale.gray500}
          >{`문화 콘텐츠 참여 횟수: ${attendCount}회`}</Text>
        </styles.ProfileTextWrap>
      </styles.ProfileWrap>

      <Text
        fontStyleName="subtitle2R"
        color={COLORS.primary.dark}
        className="card-content"
      >
        성동구 문화 콘텐츠 참여에 감사드리며, <br />
        당신을 성동구의 명예로운 문화 시민으로 임명합니다.
      </Text>
      <Text
        fontStyleName="body1R"
        color={COLORS.grayscale.gray500}
        className="prr-name"
      >
        푸르름 관리자 일동 (인)
      </Text>
    </styles.Wrapper>
  );
};

export default CitizenCard;
