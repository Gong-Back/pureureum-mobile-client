import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  .title {
    margin-bottom: 12px;
  }
  span {
    color: ${COLORS.primary.default};
  }
`;

export const BadgeListCard = styled.section`
  width: 100%;
  padding: 40px 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  height: 360px;
  border-radius: 10px;
  background: ${COLORS.grayscale.cremeWhite};
  box-shadow: 0px 0px 5px 0px rgba(147, 147, 147, 0.25);
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;
