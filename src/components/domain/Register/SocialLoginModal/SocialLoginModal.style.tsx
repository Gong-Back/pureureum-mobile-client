import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 280px;
  margin: 80px auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  margin-bottom: 40px;

  svg {
    width: 220px;
  }
`;

export const RegisterSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px 0;
`;

export const SocialButton = styled.button<{ backgroundColor: string }>`
  ${({ backgroundColor }) => css`
    width: 280px;
    height: 44px;
    padding: 0 36px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${backgroundColor};
    border-radius: 8px;
    cursor: pointer;
  `}
`;
