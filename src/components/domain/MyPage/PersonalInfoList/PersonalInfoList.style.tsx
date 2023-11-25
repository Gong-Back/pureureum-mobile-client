import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px 0px;

  width: 100%;
  padding: 30px 40px;

  border: 1px solid ${COLORS.grayscale.gray200};
  background-color: ${COLORS.grayscale.cremeWhite};
  border-radius: 10px;
`;

export const Section = styled.div`
  display: flex;
  gap: 0;

  > .info-label {
    width: 100px;
    margin: 4px 0px;
  }

  > .info-content {
    margin: 4px 0px;
  }
`;
