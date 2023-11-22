import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import useModal from '@/hooks/useModal';

import ContentDetailModal from '../ContentDetailModal';
import * as style from './ContentItem.style';

export interface ContentItemProps {
  thumbnail: string;
  info: any;
}

// 성동구 신속 예약에서 가져온 컨텐츠 데이터
const ContentItem = ({ thumbnail, info }: ContentItemProps) => {
  const router = useRouter();

  const { openModal } = useModal();

  return (
    <style.Wrapper onClick={() => openModal(<ContentDetailModal />)}>
      <style.ThumbnailWrap>
        <Image src={thumbnail} layout="fill" />
      </style.ThumbnailWrap>
      <style.InfoWrap>
        <Text fontStyleName="subtitle3" color={COLORS.grayscale.gray700}>
          컨텐츠 제목
        </Text>
      </style.InfoWrap>
    </style.Wrapper>
  );
};

export default ContentItem;
