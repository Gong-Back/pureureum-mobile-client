import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  max-width: fit-content;
  height: 25px;

  padding: 2px 8px;
  border: 0.8px solid ${COLORS.primary.default};
  border-radius: 30px;

  .label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
