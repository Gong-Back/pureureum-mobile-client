import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 450px;
  height: 60px;
  padding: 0px 30px;
  background-color: ${COLORS.grayscale.white};

  box-shadow: 0px -2px 4px -2px rgba(88, 88, 88, 0.25);

  position: fixed;
  bottom: 0;
  left: auto;
  z-index: 100;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  cursor: pointer;
  color: ${(props) => props.color};

  & > svg {
    width: 18px;
    height: 18px;
  }
`;
