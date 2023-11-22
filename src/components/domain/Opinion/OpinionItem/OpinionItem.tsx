import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as style from './OpinionItem.style';

export interface OpinionItemProps {
  status: 'vote' | 'finished';
  thumbnail: string;
  info: any;
}

// 투표 중 혹은 투표 종료된 시민 의견 아이템
const OpinionItem = ({ status, thumbnail, info }: OpinionItemProps) => {
  const router = useRouter();

  return (
    <style.Wrapper onClick={() => router.push(`/opinion/1?status=${status}`)}>
      <style.ThumbnailWrap>
        <Image src={thumbnail} layout="fill" />
      </style.ThumbnailWrap>
      <style.InfoWrap>
        {/* TODO status tag */}
        <Text fontStyleName="subtitle3" color={COLORS.grayscale.gray700}>
          제안 제목
        </Text>
      </style.InfoWrap>
    </style.Wrapper>
  );
};

export default OpinionItem;
