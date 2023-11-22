import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 450px;
  height: 60px;
  padding: 0px 30px;
  background-color: ${COLORS.grayscale.white};
  box-shadow: 0px 2px 4px -2px rgba(88, 88, 88, 0.25);

  position: fixed;
  top: 0;
  left: auto;
  z-index: 100;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const NavItemList = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 30px;
  height: 40px;

  .login-btn {
    width: 72px;
  }
`;
