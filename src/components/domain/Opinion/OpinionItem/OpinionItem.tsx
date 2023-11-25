import Image from 'next/image';
import { useRouter } from 'next/router';

import Tag from '@/components/common/Tag';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import {
  OpinionDetailInfoType,
  OpinionVoteInfoType,
} from '@/constants/types/OpinionTypes';

import * as style from './OpinionItem.style';

export interface OpinionItemProps {
  status: 'vote' | 'finished';
  info: OpinionVoteInfoType | OpinionDetailInfoType;
}

// 투표 중 혹은 투표 종료된 시민 의견 아이템
const OpinionItem = ({ status, info }: OpinionItemProps) => {
  const router = useRouter();

  const { title, thumbnail } = info;

  return (
    <style.Wrapper onClick={() => router.push(`/opinion/1?status=${status}`)}>
      <style.ThumbnailWrap>
        <Image src={thumbnail} layout="fill" />
      </style.ThumbnailWrap>
      <style.InfoWrap>
        <Text
          fontStyleName="subtitle3"
          color={COLORS.grayscale.gray700}
          className="opinion-title"
        >
          <Tag
            label={status === 'vote' ? '투표중' : '투표완료'}
            className="status-tag"
          />
          {title}
        </Text>
      </style.InfoWrap>
    </style.Wrapper>
  );
};

export default OpinionItem;
