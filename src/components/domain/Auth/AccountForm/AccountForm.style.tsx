import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px 0;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  > .description {
    margin: 4px 0px 0px 12px;
  }

  > .check-button {
    margin: auto 0px;
    width: 96px;
  }
`;
