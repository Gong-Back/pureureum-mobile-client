import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

interface WrapperProps {
  isBigSize: boolean;
}

export const Wrapper = styled.div(({ isBigSize }: WrapperProps) => ({
  width: isBigSize ? 145 : 70,
  height: isBigSize ? 45 : 32,
  borderRadius: 30,

  backgroundColor: COLORS.grayscale.gray100,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> .text': {
    color: COLORS.grayscale.gray600,
  },
}));
