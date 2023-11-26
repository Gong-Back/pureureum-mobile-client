import Image from 'next/image';
import { useRouter } from 'next/router';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import Tag from '@/components/common/Tag';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import type {
  OpinionStatusType,
} from '@/constants/types/OpinionTypes';

import * as style from './OpinionItem.style';

dayjs.extend(isBetween);

interface OpinionItemProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  startDate: string;
  endDate: string;
}

// 투표 중 혹은 투표 종료된 시민 의견 아이템
const OpinionItem = ({
  id,
  title,
  thumbnailUrl,
  startDate,
  endDate,
}: OpinionItemProps) => {
  const router = useRouter();

  const status: OpinionStatusType = dayjs().isBetween(startDate, endDate, 'day')
    ? 'IN_PROGRESS'
    : 'FINISHED';

  return (
    <style.Wrapper onClick={() => router.push(`/opinion/${id}`)}>
      <style.ThumbnailWrap>
        <Image src={thumbnailUrl} layout="fill" />
      </style.ThumbnailWrap>
      <style.InfoWrap>
        <Text
          fontStyleName="subtitle3"
          color={COLORS.grayscale.gray700}
          className="opinion-title"
        >
          <Tag
            label={status === 'IN_PROGRESS' ? '투표중' : '투표완료'}
            className="status-tag"
          />
          {title}
        </Text>
      </style.InfoWrap>
    </style.Wrapper>
  );
};

export default OpinionItem;
