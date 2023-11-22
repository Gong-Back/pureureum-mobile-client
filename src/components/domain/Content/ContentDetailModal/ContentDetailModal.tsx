import Link from 'next/link';
import React from 'react';

import ModalTemplate from '@/components/common/ModalTemplate';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as styles from './ContentDetailModal.style';

const ContentDetailModal = () => (
  <ModalTemplate title="문화 콘텐츠">
    <styles.Wrapper>성동구 문화 컨텐츠 세부 정보</styles.Wrapper>
  </ModalTemplate>
);

export default ContentDetailModal;
