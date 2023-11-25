import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;
  gap: 20px;
`;

export const BadgeIconWrap = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${COLORS.grayscale.gray100};
  position: relative;
  overflow: hidden;
`;
