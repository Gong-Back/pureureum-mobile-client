import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 18px 0;

  border-radius: 10px;
  background: ${COLORS.grayscale.cremeWhite};
  box-shadow: 0px 0px 5px 0px rgba(147, 147, 147, 0.25);

  .submit {
    width: 100%;
  }
`;

export const OpinionWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  gap: 12px 0;
`

export const Opinion = styled.div`
  display: flex;
  gap: 0 8px;
  align-items: center;
  cursor: pointer;

  .result {
    margin-left: auto;
  }
`

export const Title = styled.div`
  display: flex;
  gap: 0 8px;
  align-items: center;

  .icon {
    color: ${COLORS.primary.default};
  }
`