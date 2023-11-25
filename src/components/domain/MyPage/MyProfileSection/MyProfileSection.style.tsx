import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .confirm-button {
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 0px;
  width: 100%;
  padding: 15px 30px;
  border: 1px solid ${COLORS.grayscale.gray200};
  background-color: ${COLORS.grayscale.cremeWhite};

  border-radius: 10px;

  > .info-label {
    width: 100px;
    margin: 4px auto 4px 0px;
  }

  > .info-content {
    margin: 4px 0px;
    flex-grow: 1;
  }
`;

export const PersonalSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 25px 0px;
  margin: 30px 0px 60px;
`;
