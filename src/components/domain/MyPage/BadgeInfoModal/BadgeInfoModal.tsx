import Image from 'next/image';

import dayjs from 'dayjs';

import ModalTemplate from '@/components/common/ModalTemplate';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import { BadgeInfo } from '../BadgeSection/BadgeSection';
import * as styles from './BadgeInfoModal.style';

interface BadgeInfoModalProps {
  id: number;
}

const BadgeInfoModal = ({ id }: BadgeInfoModalProps) => {
  const { name, description } = BadgeInfo[id - 1];

  return (
    <ModalTemplate title="뱃지 정보">
      <styles.Wrapper>
        <styles.BadgeIconWrap>
          <Image src="/sample.png" layout="fill" />
        </styles.BadgeIconWrap>
        <Text fontStyleName="subtitle1" color={COLORS.grayscale.dark}>
          {name}
        </Text>
        <Text fontStyleName="body1R" color={COLORS.grayscale.gray600}>
          {description}
        </Text>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default BadgeInfoModal;
