import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 50px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProfileImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${COLORS.grayscale.gray100};

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
  }
`;

export const Title = styled.div`
  span {
    font-weight: 700;
  }
`;

export const MenuListWrap = styled.div`
  width: 100%;
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  svg {
    transform: rotate(180deg);
  }

  margin-bottom: 30px;

  :first-of-type {
    margin-top: 40px;
  }

  :last-of-type {
    margin-top: 60px;
  }
`;
