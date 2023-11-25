import Image from 'next/image';
import { useRouter } from 'next/router';

import { opinionDetailData } from 'src/dummyData';

import Button from '@/components/common/Button';
import Tag from '@/components/common/Tag';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as styles from './OpinionDetailTemplate.style';

const OpinionDetailTemplate = () => {
  const router = useRouter();
  const opinionId = Number(router.query.oid);

  // todo
  const { title, thumbnail, description } = opinionDetailData;

  return (
    <styles.Wrapper>
      <Tag label="투표 완료" />
      <Text
        fontStyleName="subtitle1"
        color={COLORS.grayscale.gray700}
        className="title"
      >
        {title}
      </Text>
      <styles.ThumbnailWrap>
        <Image src={thumbnail} layout="fill" />
      </styles.ThumbnailWrap>
      <Text fontStyleName="body1R" color={COLORS.grayscale.gray600}>
        {description}
      </Text>
      {/* vote result content */}
    </styles.Wrapper>
  );
};

export default OpinionDetailTemplate;
