import Image from 'next/image';

import dayjs from 'dayjs';

import CalendarIconSvg from '@/assets/icons/calendarIcon.svg';
import Tag from '@/components/common/Tag';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { CultureEventInfoType } from '@/constants/types/contentTypes';
import useModal from '@/hooks/useModal';

import ContentDetailModal from '../ContentDetailModal';
import * as style from './ContentItem.style';

export interface ContentItemProps {
  id: number;
  info: CultureEventInfoType;
}

// 성동구 신속 예약에서 가져온 컨텐츠 데이터
const ContentItem = ({ id, info }: ContentItemProps) => {
  const { openModal } = useModal();

  const {
    thumbnailUrl,
    clasName: category,
    content: title,
    serviceStartDateTime: sDate,
    serviceEndDateTime: eDate,
  } = info;

  return (
    <style.Wrapper
      onClick={() => openModal(<ContentDetailModal data={info} />)}
    >
      <style.ThumbnailWrap>
        <Image src={thumbnailUrl} layout="fill" />
      </style.ThumbnailWrap>
      <style.InfoWrap>
        <Text
          fontStyleName="subtitle3"
          color={COLORS.grayscale.gray700}
          className="content-title"
        >
          <Tag label={category} className="catgory-tag" />
          {title}
        </Text>
        <Text
          fontStyleName="body2R"
          color={COLORS.grayscale.gray500}
          className="content-time"
        >
          <CalendarIconSvg
            width={20}
            height={20}
            fill={COLORS.grayscale.gray500}
            className="calendar"
          />
          {`${dayjs(sDate).format('YYYY.MM.DD')} ~ ${dayjs(eDate).format(
            'YYYY.MM.DD',
          )}`}
        </Text>
      </style.InfoWrap>
    </style.Wrapper>
  );
};

export default ContentItem;
