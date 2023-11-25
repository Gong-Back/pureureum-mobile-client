import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Container = styled.button`
  width: 60px;
  height: 28px;
  border-radius: 30px;
  background-color: ${COLORS.primary.default};
  position: relative;
`;

export const Button = styled.div<{ isLeft: boolean }>`
  width: 28px;
  height: 24px;
  border-radius: 30px;
  background-color: ${COLORS.grayscale.white};
  box-shadow: 0px 1px 4px 0px rgba(20, 83, 60, 0.25);
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isLeft ? 2 : 29)}px;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
`;
