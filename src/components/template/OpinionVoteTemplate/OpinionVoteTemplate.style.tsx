import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 90px 30px 60px;

  .title {
    margin-top: 8px;
    text-align: center;
  }
`;

export const ThumbnailWrap = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  background-color: ${COLORS.grayscale.gray100};

  position: relative;
  overflow: hidden;
  margin: 8px 0px 20px;
`;
